import { getStore } from '@netlify/blobs'
import { checkOrigin, consumeAuthLimit, createSessionCookie, handleError, json, normalizeUsername, passwordMatches, publicUser } from '../lib/auth.mjs'

export default async request => {
  try {
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405)
    checkOrigin(request)
    const body = await request.json(), username = normalizeUsername(body.username), password = String(body.password || '')
    await consumeAuthLimit(request, 'login', username)
    const record = await getStore('reading-users').get(username, { type: 'json' })
    if (!record || !(await passwordMatches(password, record))) return json({ error: '用户名或密码错误' }, 401)
    const user = { id: record.id, username: record.username, roles: (process.env.ADMIN_USER_IDS || '').split(',').map(x => x.trim()).includes(record.id) ? ['admin'] : ['user'] }
    return json({ user: publicUser(user) }, 200, { 'Set-Cookie': createSessionCookie(record, request) })
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/auth/login' }
