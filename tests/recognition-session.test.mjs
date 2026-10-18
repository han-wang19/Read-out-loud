import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { test } from 'node:test'

const source = readFileSync(new URL('../reading-practice/app.js', import.meta.url), 'utf8')
const helper = source.slice(source.indexOf('function createRecognitionSession('), source.indexOf('function recognitionErrorMessage('))
function setup() {
  const engines = [], timers = new Map(), texts = [], errors = []
  let timerId = 0
  class Engine {
    constructor() { engines.push(this) }
    start() {}
    stop() {}
    abort() {}
    result(text, final = false) {
      const result = [{ transcript: text }]; result.isFinal = final
      this.onresult({ results: [result] })
    }
  }
  const context = vm.createContext({ RecognitionEngine: Engine,
    setTimeout: fn => { timers.set(++timerId, fn); return timerId },
    clearTimeout: id => timers.delete(id),
  })
  vm.runInContext(helper, context)
  const session = context.createRecognitionSession(text => texts.push(text), error => errors.push(error))
  const tick = () => { const [id, fn] = timers.entries().next().value; timers.delete(id); fn() }
  return { session, engines, timers, texts, errors, tick }
}

test('keeps interim words across a network interruption and waits for final results', async () => {
  const { session, engines, tick, texts } = setup()
  engines[0].result('First sentence')
  engines[0].onerror({ error: 'network' }); engines[0].onend(); tick()
  engines[1].result('Second sentence')
  assert.equal(texts.at(-1), 'First sentence Second sentence')
  const stopped = session.stop()
  engines[1].result('Second sentence finished', true)
  engines[1].onend()
  assert.equal(await stopped, 'First sentence Second sentence finished')
})

test('permission denial does not restart indefinitely', async () => {
  const { session, engines, timers } = setup()
  engines[0].onerror({ error: 'not-allowed' }); engines[0].onend()
  assert.equal(timers.size, 0)
  assert.equal(await session.stop(), '')
})

test('stop timeout preserves words and ignores late events', async () => {
  const { session, engines, tick, texts } = setup()
  engines[0].result('Preserved words')
  const stopped = session.stop(); tick()
  assert.equal(await stopped, 'Preserved words')
  engines[0].result('Stale result')
  assert.equal(texts.at(-1), 'Preserved words')
})

test('abort cancels a scheduled restart', () => {
  const { session, engines, timers } = setup()
  engines[0].onend(); assert.equal(timers.size, 1)
  session.abort(); assert.equal(timers.size, 0)
})

test('repeated empty sessions have a bounded retry count', () => {
  const { engines, timers, tick } = setup()
  for (let i = 0; i < 5; i++) { engines.at(-1).onend(); tick() }
  engines.at(-1).onend()
  assert.equal(engines.length, 6)
  assert.equal(timers.size, 0)
})
