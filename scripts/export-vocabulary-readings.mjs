import { mkdir, readFile, writeFile } from 'node:fs/promises'
import vm from 'node:vm'

const context = vm.createContext({ window: {} })
vm.runInContext(await readFile(new URL('../reading-practice/vocabulary-passages.js', import.meta.url), 'utf8'), context)
const passages = context.window.VOCABULARY_PASSAGES
const lines = [
  '# 北京中考与高考英语核心词汇朗读集', '',
  '整理日期：2026-10-26。中考、高考各25篇，共50篇原创短文。', '',
  '## 使用与范围说明', '',
  '- 每篇正文120–140个英文词（按空白分词，与网页统计一致），配22项目标词汇或短语及语境中文释义。',
  '- 中考侧重日常生活、校园、基础叙事；高考侧重社会、科技、文化、研究与议论。学段和核心词汇由教学用途精选，未逐词标注官方课标归属，不是北京官方完整考试词表，也不宣称覆盖全部课标单词。',
  '- 目标表达保留正文中的实际形式，例如 decided、took 或 caring for；同一词根的不同形式及跨篇复现不能理解为新增独立词根。',
  '- 每篇先听读、再朗读、最后遮住英文用中文释义自测；配套三组理解问题和参考答案可用于口语复述。',
  '- 本文由网站词汇数据生成，后续修改数据后运行 `node scripts/export-vocabulary-readings.mjs` 可更新。', '',
  '## 检索依据与来源', '',
  '以下资料用于了解课标范围、版本与北京听说练习背景。短文、释义、问题和教学选词均为本项目编写，没有将第三方“高频词表”直接当作北京官方考纲，也未进行历年真题词频统计。', '',
  '1. [《义务教育英语课程标准（2022年版）》原文，课程教材研究所托管](https://www.ictr.edu.cn/Uploads/File/2022/04/28/6.%E4%B9%89%E5%8A%A1%E6%95%99%E8%82%B2%E8%8B%B1%E8%AF%AD%E8%AF%BE%E7%A8%8B%E6%A0%87%E5%87%86%EF%BC%882022%E5%B9%B4%E7%89%88%EF%BC%89.20220428160837.pdf)：附录三级词汇表为1600词口径，词表不列短语。',
  '2. [《普通高中英语课程标准（2017年版2020年修订）》原文，人民教育出版社托管](https://www.pep.com.cn/xw/zt/rjwy/gzkb2020/202205/P020220517522153664167.pdf)：供对照早期高中课标版本，不能把网络“3500词”与该版词表直接等同。',
  '3. [2025年版普通高中英语课标词汇变动研究，作者王生军（人民教育出版社）](https://flts.bnu.edu.cn/node/17157)：该研究比较2020版和2025版词表，提示使用时关注版本差异。',
  '4. [北京市义务教育课程实施办法](https://www.beijing.gov.cn/zhengce/gfxwj/sj/202209/t20220908_2811104.html)：北京实施2022年义务教育课程方案、课程标准的政策背景。',
  '5. [北京教育考试院：2025年初中学业水平考试英语听说计算机考试问题解答](https://www.bjeea.cn/html/zkzz/faq/2024/1203/86204.html)：列明听后选择、听后回答、听后转述和短文朗读，作为练习形式参考；本文篇幅是用户指定教学要求，不是官方试题原文。', '',
  '## 篇目索引', '',
  '| 学段 | 编号与标题 | 主题 | 正文字数 | 目标词项 |',
  '| --- | --- | --- | ---: | ---: |',
  ...passages.map(p => `| ${p.type} | ${p.title} | ${p.topic} | ${p.text.trim().split(/\s+/).length} | ${p.vocabulary.length} |`), '',
]
for (const type of ['中考词汇', '高考词汇']) {
  lines.push(`## ${type}`, '')
  for (const p of passages.filter(p => p.type === type)) {
    lines.push(`### ${p.title}`, '', `主题：${p.topic}｜正文：${p.text.trim().split(/\s+/).length}词｜目标词项：${p.vocabulary.length}`, '', p.text, '',
      '| 核心单词或短语（正文形式） | 语境中文释义 |', '| --- | --- |',
      ...p.vocabulary.map(v => `| ${v.expression} | ${v.meaning} |`), '', '理解与复述：', '',
      ...p.questions.map((q, i) => `${i + 1}. ${q}\n\n   参考答案：${p.answers[i]}`), '')
  }
}
const directory = new URL('../docs/', import.meta.url)
await mkdir(directory, { recursive: true })
await writeFile(new URL('北京中高考英语核心词汇朗读集.md', directory), lines.join('\n'), 'utf8')
console.log(`Exported ${passages.length} passages and ${passages.reduce((n, p) => n + p.vocabulary.length, 0)} vocabulary appearances.`)
