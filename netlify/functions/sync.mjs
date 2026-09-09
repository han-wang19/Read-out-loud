import { getStore } from '@netlify/blobs'
import { checkOrigin, handleError, json, requireUser } from '../lib/auth.mjs'
import { sanitizeState } from '../lib/data.mjs'

export default async request => {
  try {
    const user = await requireUser(request), store = getStore('reading-user-data')
    if (request.method === 'GET') return json({ state: (await store.get(user.id, { type: 'json' })) || { articles: [], progress: {} } })
    if (request.method === 'PUT') {
      checkOrigin(request)
      if (Number(request.headers.get('content-length') || 0) > 1_000_000) return json({ error: '同步数据过大' }, 413)
      const state = sanitizeState(await request.json())
      await store.setJSON(user.id, state)
      return json({ state })
    }
    if (request.method === 'DELETE') {
      checkOrigin(request)
      const articleId = String((await request.json()).articleId || '')
      if (!/^custom-[a-z0-9-]+$/i.test(articleId)) return json({ error: '文章 ID 无效' }, 400)
      const state = (await store.get(user.id, { type: 'json' })) || { articles: [], progress: {} }
      state.articles = (state.articles || []).filter(article => article.id !== articleId)
      if (state.progress) delete state.progress[articleId]
      const cleanState = sanitizeState(state)
      await store.setJSON(user.id, cleanState)
      return json({ state: cleanState })
    }
    return json({ error: 'Method not allowed' }, 405)
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/sync' }
