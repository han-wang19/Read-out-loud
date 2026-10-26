import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { test } from 'node:test'

const context = vm.createContext({ window: {} })
vm.runInContext(readFileSync(new URL('../reading-practice/vocabulary-passages.js', import.meta.url), 'utf8'), context)
const passages = context.window.VOCABULARY_PASSAGES

test('both exam collections contain 25 original passages with stable unique IDs', () => {
  assert.equal(passages.length, 50)
  assert.equal(new Set(passages.map(p => p.id)).size, 50)
  assert.equal(new Set(passages.map(p => p.text)).size, 50)
  for (const type of ['中考词汇', '高考词汇']) {
    assert.equal(passages.filter(p => p.type === type).length, 25)
  }
})

for (const passage of passages) {
  test(`${passage.id}: length, actual vocabulary coverage and spoken-answer material`, () => {
    const count = passage.text.trim().split(/\s+/).length
    assert.ok(count >= 120 && count <= 140, `${count} words`)
    assert.ok(passage.vocabulary.length >= 20 && passage.vocabulary.length <= 30)
    assert.equal(new Set(passage.vocabulary.map(v => v.expression.toLowerCase())).size, passage.vocabulary.length)
    for (const { expression, meaning } of passage.vocabulary) {
      const escaped = expression.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')
      assert.match(passage.text, new RegExp(`(^|[^a-z])${escaped}($|[^a-z])`, 'i'), `Missing expression: ${expression}`)
      assert.match(meaning, /[\u4e00-\u9fff]/u)
    }
    assert.equal(passage.questions.length, 3)
    assert.equal(passage.answers.length, 3)
    assert.ok(passage.questions.every(q => q.trim().endsWith('?')))
    assert.ok(passage.answers.every(a => a.trim().length > 10))
  })
}

test('static page loads vocabulary before the application and exposes both collections', () => {
  const html = readFileSync(new URL('../reading-practice/index.html', import.meta.url), 'utf8')
  assert.ok(html.indexOf('src="vocabulary-passages.js') < html.indexOf('src="app.js'))
  for (const type of ['中考词汇', '高考词汇']) assert.ok(html.includes(`data-filter="${type}"`))
})
