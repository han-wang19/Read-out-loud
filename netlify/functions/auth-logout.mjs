import { checkOrigin, clearSessionCookie, handleError, json } from '../lib/auth.mjs'

export default async request => {
  try {
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405)
    checkOrigin(request)
    return json({ ok: true }, 200, { 'Set-Cookie': clearSessionCookie(request) })
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/auth/logout' }
