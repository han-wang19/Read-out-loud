import { createHash, createHmac, randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'
import { getStore } from '@netlify/blobs'

const scrypt = promisify(scryptCallback)
const SESSION_COOKIE = 'reading_session'
const SESSION_SECONDS = 60 * 60 * 24 * 30

export const json = (data, status = 200, headers = {}) => Response.json(data, {
  status,
  headers: { 'Cache-Control': 'no-store', ...headers },
})

export function checkOrigin(request) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) throw Object.assign(new Error('请求来源无效'), { status: 403 })
}

export function normalizeUsername(value) {
  return String(value || '').trim().toLowerCase()
}

export function validateCredentials(username, password) {
  if (!/^[a-z0-9_\-]{3,24}$/.test(username)) throw Object.assign(new Error('用户名需为 3–24 位字母、数字、下划线或短横线'), { status: 400 })
  if (typeof password !== 'string' || password.length < 10 || password.length > 128) throw Object.assign(new Error('密码长度需为 10–128 个字符'), { status: 400 })
}

export async function consumeAuthLimit(request, scope, username, limit = 12, windowSeconds = 900) {
  const ip = request.headers.get('x-nf-client-connection-ip') || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  const key = createHash('sha256').update(`${scope}:${ip}:${username}`).digest('hex')
  const store = getStore('reading-auth-limits'), now = Date.now()
  let record = await store.get(key, { type: 'json' })
  if (!record || record.resetAt < now) record = { count: 0, resetAt: now + windowSeconds * 1000 }
  if (record.count >= limit) throw Object.assign(new Error('尝试次数过多，请稍后再试'), { status: 429 })
  record.count += 1;await store.setJSON(key, record)
}

export async function hashPassword(password, salt = randomBytes(16).toString('hex')) {
  const derived = await scrypt(password, salt, 64)
  return { salt, hash: Buffer.from(derived).toString('hex') }
}

export async function passwordMatches(password, user) {
  const candidate = await hashPassword(password, user.passwordSalt)
  const actual = Buffer.from(user.passwordHash, 'hex')
  const supplied = Buffer.from(candidate.hash, 'hex')
  return actual.length === supplied.length && timingSafeEqual(actual, supplied)
}

function authSecret() {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 32) throw Object.assign(new Error('服务器尚未配置 AUTH_SECRET'), { status: 503 })
  return secret
}

function sign(value) {
  return createHmac('sha256', authSecret()).update(value).digest('base64url')
}

export function createSessionCookie(user, request) {
  const payload = Buffer.from(JSON.stringify({ sub: user.id, username: user.username, exp: Date.now() + SESSION_SECONDS * 1000 })).toString('base64url')
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : ''
  return `${SESSION_COOKIE}=${payload}.${sign(payload)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_SECONDS}${secure}`
}

export function clearSessionCookie(request) {
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : ''
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`
}

function readCookie(request, name) {
  const cookies = request.headers.get('cookie') || ''
  return cookies.split(';').map(item => item.trim()).find(item => item.startsWith(`${name}=`))?.slice(name.length + 1)
}

function adminIds() {
  return new Set((process.env.ADMIN_USER_IDS || '').split(',').map(value => value.trim()).filter(Boolean))
}

export async function currentUser(request) {
  const token = readCookie(request, SESSION_COOKIE)
  if (!token) return null
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return null
  const expected = sign(payload)
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null
  let session
  try { session = JSON.parse(Buffer.from(payload, 'base64url').toString()) } catch { return null }
  if (!session.sub || !session.username || session.exp < Date.now()) return null
  const record = await getStore('reading-users').get(session.username, { type: 'json' })
  if (!record || record.id !== session.sub) return null
  return { id: record.id, username: record.username, roles: adminIds().has(record.id) ? ['admin'] : ['user'] }
}

export async function requireUser(request) {
  const user = await currentUser(request)
  if (!user) throw Object.assign(new Error('请先登录'), { status: 401 })
  return user
}

export async function requireAdmin(request) {
  const user = await requireUser(request)
  if (!user.roles.includes('admin')) throw Object.assign(new Error('无管理员权限'), { status: 403 })
  return user
}

export function publicUser(user) {
  return { id: user.id, username: user.username, roles: user.roles || ['user'], adminConfigured: Boolean((process.env.ADMIN_USER_IDS || '').trim()) }
}

export const newUserId = () => randomUUID()

export function handleError(error) {
  console.error(error)
  return json({ error: error?.message || '服务器错误' }, error?.status || 500)
}
