import { getStore } from '@netlify/blobs'
import { checkOrigin, handleError, json, requireUser } from '../lib/auth.mjs'

export default async request => {
  try {
    const user = await requireUser(request)
    const id = new URL(request.url).searchParams.get('id') || ''
    if (!/^[a-z0-9-]{1,100}$/i.test(id)) return json({ error: '文档 ID 无效' }, 400)
    const store = getStore('reading-recordings', { consistency: 'strong' })
    const key = `${user.id}/${id}`
    if (request.method === 'GET') return json({ recording: await store.get(key, { type: 'json' }) })
    if (request.method === 'PUT') {
      checkOrigin(request)
      const body = await request.text()
      if (body.length > 4_000_000) return json({ error: '录音过大，请缩短录音后重试；本机录音仍保留' }, 413)
      const input = JSON.parse(body)
      if (typeof input.data !== 'string' || !input.data.length || !/^[A-Za-z0-9+/]+={0,2}$/.test(input.data) || input.data.length % 4 !== 0 ||
          !/^audio\/[a-z0-9.+-]+(?:;[a-z0-9=., +_-]+)?$/i.test(input.type || '') || !Number.isFinite(Date.parse(input.date))) {
        return json({ error: '录音数据无效' }, 400)
      }
      const recording = { data: input.data, type: input.type, date: new Date(input.date).toISOString() }
      const previous = await store.get(key, { type: 'json' })
      // Upload retries from an older browser must not replace a newer take.
      if (!previous || recording.date > previous.date) await store.setJSON(key, recording)
      return json({ saved: true })
    }
    return json({ error: 'Method not allowed' }, 405)
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/recordings' }
