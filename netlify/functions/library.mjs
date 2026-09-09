import { getStore } from '@netlify/blobs'
import { handleError, json } from '../lib/auth.mjs'

export default async request => {
  try {
    if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405)
    const store = getStore('reading-published'), { blobs } = await store.list()
    const stored = (await Promise.all(blobs.slice(0, 300).map(item => store.get(item.key, { type: 'json' })))).filter(Boolean)
    const articles = stored.map(({ ownerId, ownerName, reviewedBy, ...article }) => article)
    articles.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)))
    return json({ articles }, 200, { 'Cache-Control': 'public, max-age=60' })
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/library' }
