import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { test } from 'node:test'
import { mergeVocabularyReview, sanitizeState, sanitizeVocabularyReview } from '../netlify/lib/data.mjs'

const context = vm.createContext({window:{}})
vm.runInContext(readFileSync(new URL('../reading-practice/vocabulary-review.js', import.meta.url), 'utf8'), context)
const review = context.window.VocabularyReview
const plain = value => JSON.parse(JSON.stringify(value))
const record = (stage, unused=0, updatedAt='2026-10-26T00:00:00.000Z') => ({stage,updatedAt,enteredOn:updatedAt.slice(0,10),lastAdvancedOn:''})
const day = n => new Date(2026,9,26+n,12).getTime()

test('book separates marking categories and moves forgotten words to the end', () => {
  const app = readFileSync(new URL('../reading-practice/app.js', import.meta.url), 'utf8')
  const nodes = new Map()
  const ui = vm.createContext({window:{VocabularyReview:review},
    progress:{article:{unpronounceableWords:['apple','cat'],unknownWords:['book','cat']}},
    localStorage:{setItem(){}},scheduleCloudSync(){},vocabularyToday:false,document:{querySelector:()=>({})},
    vocabularyReview:{},vocabularyStudyCategory:'pronunciation',vocabularyStudyStage:'new',vocabularyReveal:null,
    normalizeWord:word=>word,escapeHtml:word=>word,$$:()=>[],
    $:id=>{if(!nodes.has(id))nodes.set(id,{setAttribute(){}});return nodes.get(id)},
  })
  vm.runInContext(app.slice(app.indexOf('function renderVocabularyBook('),app.indexOf('function switchVocabularyStage(')),ui)
  ui.renderVocabularyBook()
  const list=()=>nodes.get('#vocabularyStudyList').innerHTML
  assert.match(list(),/data-review-word="apple"/)
  assert.doesNotMatch(list(),/data-review-word="book"/)
  ui.vocabularyReview.apple=review.answer(ui.vocabularyReview.apple,false,Date.now()+1000)
  ui.renderVocabularyBook()
  assert.ok(list().indexOf('data-review-word="cat"')<list().indexOf('data-review-word="apple"'))
  ui.vocabularyStudyCategory='meaning';ui.renderVocabularyBook()
  assert.match(list(),/data-review-word="book"/)
  assert.doesNotMatch(list(),/data-review-word="apple"/)
})

test('remembered advances at most once per day across all review stages', () => {
  let current=review.record({},'apple');
  for(let i=0;i<4;i++){
    current=review.answer(current,true,day(i));
    assert.equal(current.stage,review.stages[i+1]);
    assert.equal(current.enteredOn,review.day(day(i)));
    assert.equal(current.lastAdvancedOn,review.day(day(i)));
    assert.equal(review.due(current,day(i)),false);
    assert.deepEqual(plain(review.answer(current,true,day(i))),plain(current));
    assert.equal(review.due(current,day(i+1)),i<3);
  }
});

test('forgetting drops one stage, keeps new words new and prevents same-day re-advancement', () => {
  let current=review.answer(review.record({},'apple'),false,day(0));
  assert.equal(current.stage,'new');
  current=review.answer(current,true,day(0));
  current=review.answer(current,true,day(1));
  assert.equal(current.stage,'review2');
  current=review.answer(current,false,day(1));
  assert.equal(current.stage,'review1');
  assert.deepEqual(plain(review.answer(current,true,day(1))),plain(current));
  assert.equal(review.answer(current,true,day(2)).stage,'review2');
  assert.equal(review.answer(record('mastered'),false,day(3)).stage,'review3');
});

test('answer timestamps increase even when clicks share a timestamp or the clock goes backwards', () => {
  const initial = record('review2', 1)
  const next = review.answer(initial, true, Date.parse(initial.updatedAt)-1000)
  assert.ok(next.updatedAt > initial.updatedAt)
})

test('per-word merge keeps newer progress in either direction without adding streaks', () => {
  const old = record('review2', 1), recent = record('mastered', 3, '2026-10-26T01:00:00.000Z')
  for (const merge of [(a,b)=>review.merge(a,b), mergeVocabularyReview]) {
    assert.deepEqual(plain(merge({apple:recent}, {apple:old,book:old})), {apple:recent,book:old})
    assert.deepEqual(plain(merge({apple:old}, {apple:recent})), {apple:recent})
    assert.deepEqual(plain(merge({apple:recent}, undefined)), {apple:recent})
  }
})

test('client and server consistently sanitise corrupt records and clamp stage invariants', () => {
  const input = {
    apple:record('new', 30), book:{stage:'review',streak:3,updatedAt:'2026-10-26T00:00:00.000Z'}, cat:record('mastered', -1),
    bad:record('unknown', 0), invalid:record('review1', 0, 'not-a-date'),
    'invalid word':record('new', 0), nested:null,
  }
  const expected = {apple:record('new',0),book:record('review3',2),cat:record('mastered',3)}
  assert.deepEqual(plain(review.clean(input)), expected)
  assert.deepEqual(sanitizeVocabularyReview(input), expected)
  for (const bad of [null,[],false,'invalid']) assert.deepEqual(plain(review.clean(bad)), {})
})

test('valid words matching object prototype names are treated as words', () => {
  assert.equal(review.record({}, 'constructor').stage, 'new')
  const value = record('review2', 1)
  assert.deepEqual(plain(review.merge({}, {constructor:value})), {constructor:value})
  assert.deepEqual(mergeVocabularyReview({}, {constructor:value}), {constructor:value})
})

test('sync sanitation retains review independently of article progress', () => {
  const state = sanitizeState({articles:[],progress:{},vocabularyReview:{apple:record('mastered',3)}})
  assert.deepEqual(state.vocabularyReview, {apple:record('mastered',3)})
  assert.deepEqual(sanitizeState({articles:[],progress:{}}).vocabularyReview, {})
})

test('grading needs a revealed translation and cannot count repeated answer clicks', () => {
  const app = readFileSync(new URL('../reading-practice/app.js', import.meta.url), 'utf8')
  const nodes = new Map()
  const ui = vm.createContext({ window:{VocabularyReview:review},
    vocabularyReview:{}, vocabularyStudyStage:'new', vocabularyReveal:null, vocabularyRevealRequest:0,
    $:id=>{if(!nodes.has(id))nodes.set(id,{});return nodes.get(id)},
    renderVocabularyBook(){},scheduleCloudSync(){},toast(){},localStorage:{setItem(){}},
  })
  vm.runInContext(app.slice(app.indexOf('function answerVocabularyReview('), app.indexOf('function openVocabularyBook(')), ui)
  ui.answerVocabularyReview(true); assert.deepEqual(plain(ui.vocabularyReview), {})
  ui.vocabularyReveal={word:'apple',updatedAt:'',ready:false}
  ui.answerVocabularyReview(true); assert.deepEqual(plain(ui.vocabularyReview), {})
  ui.answerVocabularyReview(false); assert.deepEqual(plain(ui.vocabularyReview), {})
  ui.vocabularyReveal.ready=true
  ui.answerVocabularyReview(true)
  assert.equal(ui.vocabularyReview.apple.stage,'review1')
  ui.answerVocabularyReview(true)
  assert.equal(ui.vocabularyReview.apple.stage,'review1')
})

test('failed local persistence does not advance the word', () => {
  const app = readFileSync(new URL('../reading-practice/app.js', import.meta.url), 'utf8')
  const ui = vm.createContext({window:{VocabularyReview:review},
    vocabularyReview:{},vocabularyStudyStage:'new',vocabularyReveal:{word:'apple',updatedAt:'',ready:true},
    localStorage:{setItem(){throw new Error('full')}},toast(){},
  })
  vm.runInContext(app.slice(app.indexOf('function answerVocabularyReview('), app.indexOf('function openVocabularyBook(')), ui)
  ui.answerVocabularyReview(true)
  assert.deepEqual(plain(ui.vocabularyReview), {})
  assert.equal(ui.vocabularyReveal.ready,true)
})
