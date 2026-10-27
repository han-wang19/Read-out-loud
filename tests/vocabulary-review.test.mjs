import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { test } from 'node:test'
import { mergeVocabularyReview, sanitizeState, sanitizeVocabularyReview } from '../netlify/lib/data.mjs'

const context = vm.createContext({window:{}})
vm.runInContext(readFileSync(new URL('../reading-practice/vocabulary-review.js', import.meta.url), 'utf8'), context)
const review = context.window.VocabularyReview
const plain = value => JSON.parse(JSON.stringify(value))
const record = (stage, streak, updatedAt='2026-10-26T00:00:00.000Z') => ({stage,streak,updatedAt})

test('book separates marking categories and moves forgotten words to the end', () => {
  const app = readFileSync(new URL('../reading-practice/app.js', import.meta.url), 'utf8')
  const nodes = new Map()
  const ui = vm.createContext({window:{VocabularyReview:review},
    progress:{article:{unpronounceableWords:['apple','cat'],unknownWords:['book','cat']}},
    vocabularyReview:{},vocabularyStudyCategory:'pronunciation',vocabularyStudyStage:'new',vocabularyReveal:null,
    normalizeWord:word=>word,escapeHtml:word=>word,$$:()=>[],
    $:id=>{if(!nodes.has(id))nodes.set(id,{setAttribute(){}});return nodes.get(id)},
  })
  vm.runInContext(app.slice(app.indexOf('function renderVocabularyBook('),app.indexOf('function switchVocabularyStage(')),ui)
  ui.renderVocabularyBook()
  const list=()=>nodes.get('#vocabularyStudyList').innerHTML
  assert.match(list(),/data-review-word="apple"/)
  assert.doesNotMatch(list(),/data-review-word="book"/)
  ui.vocabularyReview.apple=review.answer(undefined,false)
  ui.renderVocabularyBook()
  assert.ok(list().indexOf('data-review-word="cat"')<list().indexOf('data-review-word="apple"'))
  ui.vocabularyStudyCategory='meaning';ui.renderVocabularyBook()
  assert.match(list(),/data-review-word="book"/)
  assert.doesNotMatch(list(),/data-review-word="apple"/)
})

test('new forgotten words stay new; first remembered answer starts review at zero', () => {
  const first = review.answer(undefined, false)
  assert.equal(first.stage, 'new'); assert.equal(first.streak, 0)
  const next = review.answer(first, true)
  assert.equal(next.stage, 'review'); assert.equal(next.streak, 0)
})

test('requires three additional consecutive review answers, with forgetting resetting the streak', () => {
  let current = review.answer(undefined, true)
  current = review.answer(current, true); assert.equal(current.streak, 1)
  current = review.answer(current, true); assert.equal(current.streak, 2)
  current = review.answer(current, false)
  assert.equal(current.stage, 'review'); assert.equal(current.streak, 0)
  for (let i = 1; i <= 3; i++) {
    current = review.answer(current, true)
    assert.equal(current.streak, i)
    assert.equal(current.stage, i === 3 ? 'mastered' : 'review')
  }
  assert.deepEqual(plain(review.answer(current, false)), plain(current))
})

test('answer timestamps increase even when clicks share a timestamp or the clock goes backwards', () => {
  const initial = record('review', 1)
  const next = review.answer(initial, true, Date.parse(initial.updatedAt)-1000)
  assert.ok(next.updatedAt > initial.updatedAt)
})

test('per-word merge keeps newer progress in either direction without adding streaks', () => {
  const old = record('review', 1), recent = record('mastered', 3, '2026-10-26T01:00:00.000Z')
  for (const merge of [(a,b)=>review.merge(a,b), mergeVocabularyReview]) {
    assert.deepEqual(plain(merge({apple:recent}, {apple:old,book:old})), {apple:recent,book:old})
    assert.deepEqual(plain(merge({apple:old}, {apple:recent})), {apple:recent})
    assert.deepEqual(plain(merge({apple:recent}, undefined)), {apple:recent})
  }
})

test('client and server consistently sanitise corrupt records and clamp stage invariants', () => {
  const input = {
    apple:record('new', 30), book:record('review', 3), cat:record('mastered', -1),
    bad:record('unknown', 0), invalid:record('review', 0, 'not-a-date'),
    'invalid word':record('new', 0), nested:null,
  }
  const expected = {apple:record('new',0),book:record('review',2),cat:record('mastered',3)}
  assert.deepEqual(plain(review.clean(input)), expected)
  assert.deepEqual(sanitizeVocabularyReview(input), expected)
  for (const bad of [null,[],false,'invalid']) assert.deepEqual(plain(review.clean(bad)), {})
})

test('valid words matching object prototype names are treated as words', () => {
  assert.equal(review.record({}, 'constructor').stage, 'new')
  const value = record('review', 1)
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
  ui.vocabularyReveal.ready=true
  ui.answerVocabularyReview(true)
  assert.equal(ui.vocabularyReview.apple.stage,'review'); assert.equal(ui.vocabularyReview.apple.streak,0)
  ui.answerVocabularyReview(true)
  assert.equal(ui.vocabularyReview.apple.streak,0)
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
