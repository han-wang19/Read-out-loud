import test from 'node:test'
import assert from 'node:assert/strict'
import {parseWords,validateArticle} from '../netlify/lib/generation.mjs'
test('parse uploaded vocabulary, deduplicate and reject invalid data',()=>{
 assert.deepEqual(parseWords('protect,environment\nVolunteer;protect'),['protect','environment','Volunteer'])
 assert.throws(()=>parseWords('protect 保护,school,book'))
 assert.throws(()=>parseWords('one,two'))
})
test('validate passage body coverage, word boundaries, length and questions',()=>{
 const article={title:'Our project',text:'protect environment volunteer '+Array(117).fill('school').join(' '),questions:['Why?','Who?','What?'],answers:['A project.','Students.','Help.']}
 assert.equal(validateArticle(article,['protect','environment','volunteer'],'junior').title,'Our project')
 assert.throws(()=>validateArticle(article,['protect','environment','volunteers'],'junior'))
 assert.throws(()=>validateArticle({...article,text:'protect environment volunteer'},['protect'],'junior'))
 assert.throws(()=>validateArticle({...article,answers:[]},['protect'],'junior'))
 assert.throws(()=>validateArticle(article,['protect'],'senior'))
})
