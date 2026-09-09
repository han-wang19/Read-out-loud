import { getStore } from '@netlify/blobs'
import { checkOrigin, handleError, json, requireAdmin } from '../lib/auth.mjs'
import { sanitizeState } from '../lib/data.mjs'

export default async request => {
  try {
    const admin = await requireAdmin(request)
    // Review is a cross-session workflow, so eventual edge reads can hide a
    // newly-created submission. Always read and update this store strongly.
    const submissions = getStore('reading-submissions', { consistency: 'strong' })
    const published = getStore('reading-published', { consistency: 'strong' })
    if (request.method === 'GET') {
      const { blobs } = await submissions.list()
      const items = (await Promise.all(blobs.slice(0, 500).map(async blob => {
        const item = await submissions.get(blob.key, { type: 'json' })
        // Keep the storage key authoritative so legacy/incomplete records are
        // still actionable in the admin UI.
        return item ? { ...item, key: blob.key } : null
      }))).filter(Boolean)
      items.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
      return json({ submissions: items })
    }
    if (request.method === 'PATCH') {
      checkOrigin(request)
      const body = await request.json(), key = String(body.key || ''), action = String(body.action || ''), reviewNote = String(body.reviewNote || '').slice(0, 500)
      if (!key.includes('/') || !['publish', 'reject', 'unpublish'].includes(action)) return json({ error: '审核操作无效' }, 400)
      const item = await submissions.get(key, { type: 'json' })
      if (!item) return json({ error: '投稿不存在' }, 404)
      const legacyPublicId = `community-${item.article.id}`
      const publicId = item.publicId || `community-${item.ownerId}-${item.article.id.replace(/^custom-/, '')}`
      if (action === 'publish') {
        const publicArticle = { ...item.article, id: publicId, type: '社区精选', topic: item.article.topic || '社区投稿', source: '社区投稿 · 管理员审核', publishedAt: new Date().toISOString() }
        await published.setJSON(publicId, publicArticle)
        if (legacyPublicId !== publicId) await published.delete(legacyPublicId)
        const userData = getStore('reading-user-data', { consistency: 'strong' })
        const ownerState = (await userData.get(item.ownerId, { type: 'json' })) || { articles: [], progress: {} }
        ownerState.articles = (ownerState.articles || []).filter(article => article.id !== item.article.id)
        if (ownerState.progress?.[item.article.id]) {
          ownerState.progress[publicId] = ownerState.progress[item.article.id]
          delete ownerState.progress[item.article.id]
        }
        await userData.setJSON(item.ownerId, sanitizeState(ownerState))
        item.publicId = publicId
        item.status = 'published'
      } else {
        await published.delete(publicId)
        if (legacyPublicId !== publicId) await published.delete(legacyPublicId)
        if (item.status === 'published') {
          const userData = getStore('reading-user-data', { consistency: 'strong' })
          const ownerState = (await userData.get(item.ownerId, { type: 'json' })) || { articles: [], progress: {} }
          if (!(ownerState.articles || []).some(article => article.id === item.article.id)) ownerState.articles = [...(ownerState.articles || []), item.article]
          if (ownerState.progress?.[publicId]) {
            ownerState.progress[item.article.id] = ownerState.progress[publicId]
            delete ownerState.progress[publicId]
          }
          await userData.setJSON(item.ownerId, sanitizeState(ownerState))
        }
        item.status = action === 'reject' ? 'rejected' : 'submitted'
      }
      item.reviewNote = reviewNote;item.reviewedBy = admin.id;item.updatedAt = new Date().toISOString()
      await submissions.setJSON(key, item)
      return json({ submission: item })
    }
    return json({ error: 'Method not allowed' }, 405)
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/admin/submissions' }
