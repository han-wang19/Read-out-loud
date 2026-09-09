import { currentUser, handleError, json, publicUser } from '../lib/auth.mjs'

export default async request => {
  try {
    const user = await currentUser(request)
    return json({ user: user ? publicUser(user) : null })
  } catch (error) { return handleError(error) }
}

export const config = { path: '/api/auth/me' }
