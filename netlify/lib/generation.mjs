function invalid(message){throw Object.assign(new Error(message),{status:400})}
export function parseWords(raw){
  if(typeof raw!=='string'||raw.length>3000)invalid('词表请控制在 3000 字符以内')
  const words=[...new Map(raw.split(/[,;，；\r\n]+/).map(s=>s.trim().replace(/^"|"$/g,'').replace(/\s+/g,' ')).filter(Boolean).map(s=>[s.toLowerCase(),s])).values()]
  if(words.length<3||words.length>30)invalid('请输入 3–30 个不同的单词或短语')
  if(words.some(s=>s.length>60||! /^[a-z]+(?:[ '\-][a-z]+)*$/i.test(s)))invalid('仅支持英文单词或短语，请移除中文释义、表头和编号')
  return words
}
export function validateArticle(article,words,level){
  if(!article||typeof article.title!=='string'||!article.title.trim()||article.title.length>80||typeof article.text!=='string')throw new Error('Invalid article')
  const count=(article.text.match(/[a-z]+(?:['’-][a-z]+)*/gi)||[]).length
  const [min,max]=level==='junior'?[120,160]:[180,240]
  if(count<min||count>max)throw new Error('Invalid length')
  for(const word of words){const escaped=word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/ /g,'\\s+');if(!new RegExp(`\\b${escaped}\\b`,'i').test(article.text))throw new Error('Missing word')}
  for(const [key,maxLength] of [['questions',200],['answers',500]])if(!Array.isArray(article[key])||article[key].length!==3||article[key].some(s=>typeof s!=='string'||!s.trim()||s.length>maxLength))throw new Error('Invalid questions')
  return {title:article.title.trim(),text:article.text.trim(),questions:article.questions,answers:article.answers}
}
