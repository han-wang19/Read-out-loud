import { getStore } from '@netlify/blobs'
import { checkOrigin, handleError, json, requireUser } from '../lib/auth.mjs'

export default async request => {
  try {
    // Submission state crosses user sessions: a user writes it and an admin
    // immediately reads it. Strong consistency prevents the admin list from
    // being served an edge-cached snapshot for up to a minute after a submit.
    const user = await requireUser(request), submissions = getStore('reading-submissions', { consistency: 'strong' })
    if (request.method === 'GET') {
      const { blobs } = await submissions.list({ prefix: `${user.id}/` })
      const items = (await Promise.all(blobs.map(item => submissions.get(item.key, { type: 'json' })))).filter(Boolean)
      return json({ submissions: items.map(item => ({ articleId: item.article.id, status: item.status, reviewNote: item.reviewNote || '', updatedAt: item.updatedAt })) })
    }
    if (request.method === 'POST') {
      checkOrigin(request)
      const { articleId } = await request.json(), state = await getStore('reading-user-data').get(user.id, { type: 'json' })
      const article = state?.articles?.find(item => item.id === articleId)
      if (!article) return json({ error: '没有找到这篇私人文章，请先同步' }, 404)
      const key = `${user.id}/${article.id}`, now = new Date().toISOString()
      const submission = { key, ownerId: user.id, ownerName: user.username, article, status: 'submitted', reviewNote: '', createdAt: now, updatedAt: now }
      await submissions.setJSON(key, submission)
      return json({ submission: { articleId, status: 'submitted', updatedAt: now } }, 201)
    }
    return json({ error: 'Method not allowed' }, 405)
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/submissions' }
