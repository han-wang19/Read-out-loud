// Run a local static server on 8767 and headless Chrome with CDP on 9224 first.
import assert from 'node:assert/strict'
import { writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const target = await (await fetch('http://127.0.0.1:9224/json/new?about:blank', { method: 'PUT' })).json()
const socket = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject })
let sequence = 0
const pending = new Map(), exceptions = []
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data)
  if (message.method === 'Runtime.exceptionThrown') exceptions.push(message.params.exceptionDetails)
  if (message.id) {
    const request = pending.get(message.id); pending.delete(message.id)
    if (message.error) request.reject(message.error); else request.resolve(message.result)
  }
}
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence; pending.set(id, { resolve, reject })
    socket.send(JSON.stringify({ id, method, params }))
  })
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  assert.ok(!result.exceptionDetails, JSON.stringify(result.exceptionDetails))
  return result.result.value
}
try {
  await send('Runtime.enable')
  await send('Page.enable')
  await send('Page.navigate', { url: 'http://127.0.0.1:8767/index.html' })
  let ready = false
  for (let i = 0; i < 100 && !ready; i++) {
    ready = await evaluate('Boolean(window.VOCABULARY_PASSAGES && document.querySelectorAll(".passage-item").length === 58)')
    if (!ready) await new Promise(resolve => setTimeout(resolve, 100))
  }
  assert.ok(ready, 'Library did not initialise')
  for (const type of ['中考词汇', '高考词汇']) {
    assert.equal(await evaluate(`document.querySelector('[data-filter="${type}"]').click(); document.querySelectorAll('.passage-item').length`), 25)
    assert.equal(await evaluate('document.querySelector("#vocabularyLibraryNote").hidden'), false)
  }
  const entries = await evaluate(`window.VOCABULARY_PASSAGES.map(p => {
    selectPassage(p.id);
    return {id:p.id, title:document.querySelector('#passageTitle').textContent,
      count:Number(document.querySelector('#wordCount').textContent),
      targets:document.querySelectorAll('#coreVocabularyList dt').length,
      questions:document.querySelectorAll('#questions li').length,
      hidden:document.querySelector('#coreVocabularyPanel').hidden};
  })`)
  assert.equal(entries.length, 50)
  for (const p of entries) {
    assert.ok(p.count >= 120 && p.count <= 140, p.id)
    assert.equal(p.targets, 22, p.id); assert.equal(p.questions, 3, p.id); assert.equal(p.hidden, false, p.id)
  }
  const search = await evaluate(`document.querySelector('[data-filter="高考词汇"]').click();
    document.querySelector('#searchInput').value='相互尊重'; document.querySelector('#searchInput').dispatchEvent(new Event('input'));
    ({count:document.querySelectorAll('.passage-item').length, title:document.querySelector('.passage-item b')?.textContent})`)
  assert.equal(search.count, 1); assert.match(search.title, /Generations/)
  await evaluate(`document.querySelector('#searchInput').value='';document.querySelector('#searchInput').dispatchEvent(new Event('input'));document.querySelector('.passage-item').click()`)
  assert.equal(await evaluate('document.body.classList.contains("practice-open")'), true)
  assert.equal(await evaluate(`document.querySelector('#coreVocabularyPanel summary').click();document.querySelector('#coreVocabularyPanel').open`), true)
  assert.equal(await evaluate(`window.__spoken=[];window.speechSynthesis.speak=u=>window.__spoken.push(u.text);document.querySelector('#coreVocabularyList button').click();window.__spoken[0]`), 'reduce')
  await evaluate(`document.querySelector('#favoriteBtn').click();document.querySelector('#markMeaningBtn').click();document.querySelector('[data-mark-word]').click();document.querySelector('#finishWordMarkBtn').click()`)
  assert.equal(await evaluate('document.querySelectorAll("#articleMeaningWords [data-vocab-word]").length'), 1)
  await evaluate(`document.querySelector('#questionsToggle').click();document.querySelector('#startQuestionsBtn').click()`)
  assert.equal(await evaluate('document.querySelector("#questionPracticePanel").hidden'), false)
  await evaluate('stopAnswerPractice()')
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true })
  await evaluate(`document.querySelector('#coreVocabularyPanel').open=true`)
  assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
  const screenshot = await send('Page.captureScreenshot', { format: 'png' })
  const screenshotPath = join(tmpdir(), 'vocabulary-mobile-smoke.png')
  await writeFile(screenshotPath, Buffer.from(screenshot.data, 'base64'))
  await evaluate(`document.querySelector('#backToLibraryBtn').click();document.querySelector('[data-filter="all"]').click();document.querySelector('[data-id="social-battery"]').click()`)
  assert.equal(await evaluate('document.querySelector("#coreVocabularyPanel").hidden'), true)
  // Review starts from the union of both historical marking categories.
  await evaluate(`vocabularyReview={};vocabularyStudyStage='new';progress['review-smoke']={unknownWords:['apple','book','apple'],unpronounceableWords:['apple','cat']};
    for(const key of Object.keys(progress))if(key!=='review-smoke')delete progress[key];
    localStorage.setItem('readingProgress',JSON.stringify(progress));openVocabularyBook()`)
  assert.equal(await evaluate('document.querySelectorAll("[data-review-word]").length'), 3)
  assert.equal(await evaluate('document.querySelectorAll(".vocabulary-study-meaning").length'), 0)
  await evaluate(`document.querySelector('[data-review-word="apple"]').click()`)
  assert.equal(await evaluate('window.__spoken.at(-1)'), 'apple')
  assert.equal(await evaluate('/[\\u4e00-\\u9fff]/.test(document.querySelector(".vocabulary-study-meaning").textContent)'), true)
  await evaluate(`document.querySelector('[data-review-answer="forgotten"]').click()`)
  assert.equal(await evaluate('document.querySelector("#vocabularyNewCount").textContent'), '3')
  await evaluate(`document.querySelector('[data-review-word="apple"]').click();document.querySelector('[data-review-answer="remembered"]').click();answerVocabularyReview(true)`)
  assert.equal(await evaluate('vocabularyReview.apple.streak'), 0)
  assert.equal(await evaluate('document.querySelector("#vocabularyReviewCount").textContent'), '1')
  await evaluate(`document.querySelector('[data-review-stage="review"]').click()`)
  assert.equal(await evaluate('document.querySelectorAll(".vocabulary-study-meaning").length'), 0)
  for(let i=0;i<2;i++)await evaluate(`document.querySelector('[data-review-word="apple"]').click();document.querySelector('[data-review-answer="remembered"]').click()`)
  assert.equal(await evaluate('vocabularyReview.apple.streak'), 2)
  await evaluate(`document.querySelector('[data-review-word="apple"]').click();document.querySelector('[data-review-answer="forgotten"]').click()`)
  assert.equal(await evaluate('vocabularyReview.apple.streak'), 0)
  for(let i=0;i<3;i++)await evaluate(`document.querySelector('[data-review-word="apple"]').click();document.querySelector('[data-review-answer="remembered"]').click()`)
  assert.equal(await evaluate('vocabularyReview.apple.stage'), 'mastered')
  assert.equal(await evaluate('document.querySelector("#vocabularyMasteredCount").textContent'), '1')
  await evaluate(`document.querySelector('[data-review-stage="mastered"]').click();document.querySelector('[data-review-word="apple"]').click()`)
  assert.equal(await evaluate('document.querySelectorAll("[data-review-answer]").length'), 0)
  await send('Page.reload')
  for(let i=0;i<100;i++) {
    if(await evaluate('Boolean(document.querySelector("#vocabularyMasteredCount")?.textContent === "1")'))break
    await new Promise(resolve=>setTimeout(resolve,100))
  }
  assert.equal(await evaluate('document.querySelector("#vocabularyMasteredCount").textContent'),'1')
  assert.equal(await evaluate('document.querySelector("#vocabularyNewCount").textContent'),'2')
  await evaluate(`openVocabularyBook();document.querySelector('[data-review-word="book"]').click()`)
  assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
  const reviewScreenshot = await send('Page.captureScreenshot', {format:'png'})
  await writeFile(join(tmpdir(),'vocabulary-review-mobile-smoke.png'),Buffer.from(reviewScreenshot.data,'base64'))
  assert.equal(exceptions.length, 0, JSON.stringify(exceptions))
  console.log(JSON.stringify({passages:entries.length, filters:'passed', chineseSearch:'passed', pronunciation:'passed', marking:'passed', questions:'passed', reviewFlow:'passed', reloadPersistence:'passed', mobileOverflow:'none', exceptions:exceptions.length, screenshotPath}))
} finally {
  await send('Page.close').catch(() => {})
  socket.close()
}
