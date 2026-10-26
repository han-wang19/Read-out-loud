import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { test } from 'node:test'

const source = readFileSync(new URL('../reading-practice/app.js', import.meta.url), 'utf8')
function setup() {
  const revoked = []
  let nextUrl = 0
  const audio = { paused: true, ended: false, hidden: true, currentTime: 0,
    pause() { this.paused = true },
    removeAttribute() { this.src = ''; this.currentTime = 0 },
  }
  const answer = { paused: true, ended: false }
  const context = vm.createContext({
    $: selector => selector === '#audioPlayback' ? audio : answer,
    current: { id: 'first' }, cloudUser: { id: 'user' },
    wordMarkMode: null, answerActive: false, answerFinishing: false,
    recognitionActive: false, mediaRecorder: null,
    URL: { createObjectURL: () => `blob:${++nextUrl}`, revokeObjectURL: url => revoked.push(url) },
  })
  vm.runInContext(source.slice(source.indexOf('let recordingDatabase,'), source.indexOf('async function restoreRecording(')), context)
  const guard = source.slice(source.indexOf('function hasActivePracticeInteraction('), source.indexOf('function mergeCloudState('))
  vm.runInContext(guard, context)
  return { context, audio, answer, revoked, show: (blob, date) => context.showRecording(blob, date) }
}

test('background refresh preserves playback and a paused playhead for the same version', () => {
  const { audio, show, revoked } = setup()
  show({ size: 100 }, 'v1'); audio.paused = false; audio.currentTime = 24
  const url = audio.src
  show(null); show({ size: 100 }, 'v1')
  assert.equal(audio.src, url)
  assert.equal(audio.paused, false)
  assert.equal(audio.currentTime, 24)
  audio.paused = true; show(null); show({ size: 100 }, 'v1')
  assert.equal(audio.currentTime, 24)
  assert.deepEqual(revoked, [])
})

test('new remote version waits during playback, then becomes available on refresh', () => {
  const { audio, show, revoked } = setup()
  show({ size: 100 }, 'v1'); const url = audio.src; audio.paused = false
  show({ size: 200 }, 'v2'); assert.equal(audio.src, url)
  audio.paused = true; show({ size: 200 }, 'v2')
  assert.notEqual(audio.src, url); assert.deepEqual(revoked, [url])
})

test('switching passage or account clears the previous recording', () => {
  const { context, audio, show, revoked } = setup()
  show({ size: 100 }, 'v1'); audio.paused = false
  context.current.id = 'second'; show(null)
  assert.equal(audio.hidden, true); assert.equal(audio.paused, true)
  show({ size: 100 }, 'v1'); context.cloudUser.id = 'other'; show(null)
  assert.equal(audio.hidden, true); assert.equal(revoked.length, 2)
})

test('cloud interface refresh is suppressed for either recording player', () => {
  const { context, audio, answer } = setup()
  assert.equal(context.hasActivePracticeInteraction(), false)
  audio.paused = false; assert.equal(context.hasActivePracticeInteraction(), true)
  audio.ended = true; assert.equal(context.hasActivePracticeInteraction(), false)
  answer.paused = false; assert.equal(context.hasActivePracticeInteraction(), true)
})
