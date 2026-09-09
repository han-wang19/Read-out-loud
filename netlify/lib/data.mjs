export function sanitizeArticle(article) {
  const id = String(article?.id || '')
  const title = String(article?.title || '').trim().slice(0, 80)
  const text = String(article?.text || '').replace(/\s+/g, ' ').trim().slice(0, 12000)
  const questions = Array.isArray(article?.questions) ? article.questions.slice(0, 3).map(value => String(value || '').trim().slice(0, 200)) : []
  const answers = Array.isArray(article?.answers) ? article.answers.slice(0, 3).map(value => String(value || '').trim().slice(0, 500)) : []
  const hasCompleteQuestions = questions.length === 3 && answers.length === 3 && questions.every(Boolean) && answers.every(Boolean)
  if (!/^custom-[a-z0-9-]+$/i.test(id) || text.split(/\s+/).length < 10) return null
  return {
    id,
    title: title || '我的朗读',
    year: Number(article.year) || new Date().getFullYear(),
    topic: '自定义',
    level: `${Math.min(text.split(/\s+/).length, 800)}词`,
    type: '我的文章',
    source: '用户添加',
    sourceUrl: '',
    text,
    questions: hasCompleteQuestions ? questions : [],
    answers: hasCompleteQuestions ? answers : [],
  }
}

export function sanitizeState(input) {
  const articles = Array.isArray(input?.articles) ? input.articles.map(sanitizeArticle).filter(Boolean).slice(0, 100) : []
  const progress = {}
  for (const [id, value] of Object.entries(input?.progress || {}).slice(0, 500)) {
    if (!/^[a-z0-9-]{1,100}$/i.test(id) || !value || typeof value !== 'object') continue
    progress[id] = {
      date: String(value.date || new Date().toISOString()).slice(0, 40),
      notes: String(value.notes || '').slice(0, 2000),
      checks: Array.isArray(value.checks) ? value.checks.slice(0, 4).map(Boolean) : [],
      seconds: Math.max(0, Math.min(3600, Number(value.seconds) || 0)),
      score: value.score == null ? null : Math.max(0, Math.min(100, Number(value.score) || 0)),
      correct: Math.max(0, Number(value.correct) || 0),
      wrong: Math.max(0, Number(value.wrong) || 0),
      omitted: Math.max(0, Number(value.omitted) || 0),
      extra: Math.max(0, Number(value.extra) || 0),
      transcript: String(value.transcript || '').slice(0, 5000),
      questionScore: Math.max(0, Math.min(6, Number(value.questionScore) || 0)),
      questionResults: Array.isArray(value.questionResults) ? value.questionResults.slice(0, 3).map(item => ({
        question: String(item?.question || '').slice(0, 200),
        transcript: String(item?.transcript || '').slice(0, 1000),
        points: Math.max(0, Math.min(2, Number(item?.points) || 0)),
        coverage: Math.max(0, Math.min(1, Number(item?.coverage) || 0)),
      })) : [],
    }
  }
  return { articles, progress, updatedAt: new Date().toISOString() }
}
