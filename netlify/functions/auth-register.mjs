import { getStore } from '@netlify/blobs'
import { checkOrigin, consumeAuthLimit, createSessionCookie, handleError, hashPassword, json, newUserId, normalizeUsername, validateCredentials } from '../lib/auth.mjs'

export default async request => {
  try {
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405)
    checkOrigin(request)
    const body = await request.json(), username = normalizeUsername(body.username), password = body.password
    validateCredentials(username, password)
    await consumeAuthLimit(request, 'register', username, 5, 3600)
    const store = getStore('reading-users')
    if (await store.get(username)) return json({ error: '该用户名已被使用' }, 409)
    const passwordData = await hashPassword(password)
    const user = { id: newUserId(), username, passwordSalt: passwordData.salt, passwordHash: passwordData.hash, createdAt: new Date().toISOString() }
    const sessionCookie = createSessionCookie(user, request)
    await store.setJSON(username, user, { onlyIfNew: true })
    return json({ user: { id: user.id, username, roles: ['user'] } }, 201, { 'Set-Cookie': sessionCookie })
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/auth/register' }
