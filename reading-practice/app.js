const passages = [
  {
    id:'social-battery', title:'Your Social Battery', year:2026, topic:'社会交往', level:'中等', type:'真题主题仿写', source:'依据2026年第一次机考考生回忆主题仿写', sourceUrl:'https://www.gaokzx.com/gk/gaokao/150873.html',
    text:`Have you ever felt tired after spending a long time with other people? Some people describe this feeling by saying that their social battery is low. A social battery is not a real battery. It is a simple way to talk about how much energy you have for social activities. People use their social energy differently. One person may enjoy a crowded party, while another may prefer a quiet conversation with a close friend. Your personality, physical health and surroundings can all influence your social battery. Even an enjoyable event may leave you needing time alone afterward. To protect your energy, plan social events with a calendar and leave enough time to rest. You can also choose a quieter place, limit how long an activity lasts, or tell a friend honestly that you feel tired. Most importantly, allow yourself to take a break when you need one. Understanding your social battery can help you enjoy relationships without becoming completely exhausted.`,
    questions:['What does a social battery describe?','What factors can influence a person’s social battery?','What can people do to protect their social energy?'],
    answers:[`It describes how much energy a person has for social activities.`,`A person's personality, physical health and surroundings can influence it.`,`They can plan events, leave time to rest, choose quieter places or limit how long activities last.`]
  },
  {
    id:'coffee-chat', title:'A Useful Coffee Chat', year:2026, topic:'职业发展', level:'中等', type:'真题主题仿写', source:'依据2026年第二次机考考生回忆主题仿写', sourceUrl:'https://www.gaokzx.com/gk/gaokao/153660.html',
    text:`A coffee chat is an informal meeting, usually between two people, over coffee or tea. It gives you a chance to learn about another person's work, studies or experience. Unlike a formal interview, the conversation should feel relaxed, but good preparation is still important. Before the meeting, think carefully about what you hope to learn and prepare several useful questions. You might ask how the person entered a particular field, what a normal working day is like, or which skills are most valuable. During the conversation, listen with interest instead of talking only about yourself. Ask a follow-up question when an answer surprises you. You may take a few notes, but remember to keep the meeting friendly and natural. Respect the agreed finishing time as well. Afterward, send a short message to thank the person and mention one idea you found helpful. A thoughtful coffee chat can help you discover new possibilities, understand a career more clearly and build meaningful connections.`,
    questions:['What is a coffee chat?','How should a person prepare for it?','Why should a thank-you message be sent afterward?'],
    answers:[`It is an informal meeting where two people talk over coffee or tea.`,`They should decide what they want to learn and prepare several useful questions.`,`It shows thanks and mentions an idea that was helpful.`]
  },
  {
    id:'sitting-less', title:'Sit Less, Move More', year:2024, topic:'健康生活', level:'基础', type:'真题主题仿写', source:'依据2024年第一次机考“久坐危害”回忆主题仿写', sourceUrl:'https://www.gaokzx.com/c/202312/86944.html',
    text:`Many students spend hours sitting in class and then sit again while doing homework. Sitting for too long may cause back pain, tired eyes and poor sleep. It can also make people feel less energetic during the day. Fortunately, small changes can make a real difference. Stand up and stretch between lessons, or walk around while talking on the phone. When possible, walk to a nearby shop instead of asking for a ride. At home, place your phone away from your desk so that you have to get up to reach it. Setting a reminder every thirty minutes can also help you notice how long you have been sitting. Regular exercise is important, but one hard workout cannot completely cancel the effects of a whole day spent in a chair. Movement does not always have to be fast or difficult. The simple message is clear: move a little, but move often.`,
    questions:['What problems may long periods of sitting cause?','What small changes does the passage suggest?','What is the main message of the passage?'],
    answers:[`They may cause back pain, tired eyes, poor sleep and low energy.`,`People can stand and stretch, walk more or set regular reminders to move.`,`People should sit less and move a little but often.`]
  },
  {
    id:'concert-manners', title:'Enjoying a Concert Together', year:2023, topic:'公共礼仪', level:'基础', type:'真题主题仿写', source:'依据2023年第一次机考“音乐会礼仪”回忆主题仿写', sourceUrl:'https://www.gaokzx.com/c/202302/68604.html',
    text:`A live concert can be exciting, but everyone needs to follow a few simple rules. Arrive early so you can find your seat without disturbing others. If the concert has a program, read it before the performance begins. This will help you understand when to listen quietly and when to clap. Turn off your phone or put it on silent, and make sure the screen will not light up in the dark. During the performance, avoid talking, eating noisy food or taking photos when photography is not allowed. A small sound may distract both the musicians and nearby listeners. If you need to leave, wait for a break between pieces and move quietly. At the end, show your thanks by clapping at the proper time. Good manners do not make a concert less enjoyable. Instead, they show respect and help the performers and the whole audience share a memorable musical experience.`,
    questions:['Why should people arrive early?','What should audience members avoid during a performance?','How do good manners improve a concert?'],
    answers:[`They should arrive early so they can find their seats without disturbing others.`,`They should avoid talking, noisy food and taking photos when photography is not allowed.`,`Good manners show respect and help everyone share an enjoyable experience.`]
  },
  {
    id:'smart-shopping', title:'Shop with a Plan', year:2023, topic:'理性消费', level:'基础', type:'真题主题仿写', source:'依据2023年第一次机考“理性购物”回忆主题仿写', sourceUrl:'https://www.gaokzx.com/c/202302/68604.html',
    text:`Supermarkets are designed to encourage people to buy more than they planned. Bright signs, free samples and special offers can easily attract attention. Products placed near the checkout are especially tempting because customers see them while they wait. To shop wisely, make a list before leaving home and decide how much you can spend. Check what is already in your kitchen so that you do not buy the same thing twice. Compare prices, but also check the amount of product in each package. A larger box is not always better value, and a lower price is not useful if the food will be wasted. Try not to shop when you are hungry, because you may choose snacks you do not really need. Finally, take a moment to look at your basket before paying. Ask whether every item has a clear purpose. Removing one unnecessary purchase is a small decision, but repeating that habit can save a surprising amount of money over time.`,
    questions:['How do supermarkets encourage people to buy more?','Why should shoppers check package size?','What should a shopper do before paying?'],
    answers:[`They use bright signs, free samples, special offers and tempting products near the checkout.`,`A larger package is not always better value and food may be wasted.`,`The shopper should check the basket and remove unnecessary purchases.`]
  },
  {
    id:'urban-garden', title:'A Garden Above the City', year:2026, topic:'环境与城市', level:'中等', type:'原创模拟', source:'北京高考英语听说题型原创模拟', sourceUrl:'https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/tzxx/202511/t20251121_4291520.html',
    text:`On the roof of a community center, an empty space has become a lively garden. Local students grow tomatoes, herbs and flowers there with the help of older residents. At first, some people doubted that plants could survive above a busy city street. The volunteers therefore chose strong local plants and built boxes that could hold enough soil without being too heavy. The garden now cools the building in summer and provides fresh food for community meals. It has also created an unusual classroom. Students observe insects, measure rainfall and learn how food travels from seed to table. Older residents share gardening skills, while younger volunteers help them use digital tools to plan the work. The project is not without challenges. Plants need regular care, water must be used wisely, and every visitor must follow safety rules. Yet the garden shows that even a small urban space can support nature, practical education and stronger relationships between neighbors of different ages.`,
    questions:['Where is the community garden?','What can students learn there?','What challenges does the project face?'],
    answers:[`It is on the roof of a community center.`,`Students can learn about insects, rainfall, gardening and how food grows.`,`Plants need regular care, water must be used wisely and visitors must follow safety rules.`]
  },
  {
    id:'sleep-memory', title:'Sleep Builds Memory', year:2025, topic:'科学与学习', level:'进阶', type:'原创模拟', source:'北京高考英语听说题型原创模拟', sourceUrl:'https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202411/t20241118_3942798.html',
    text:`Studying late into the night may seem like a good way to prepare for an exam, but sleep plays an active part in learning. While we sleep, the brain organizes new information and connects it with what we already know. This process helps turn a fresh experience into a lasting memory. Sleep may also help the brain decide which details are important and which can be forgotten. By contrast, a lack of sleep reduces attention, making it harder to understand new ideas or solve unfamiliar problems the next day. Tired students often need more time to complete the same task, so staying awake longer does not always mean learning more. Students can improve both rest and learning by following a regular sleep schedule, keeping bright screens away from the bed and avoiding heavy meals late at night. Reviewing key points briefly before bed may help as well, but this review should not replace enough sleep. Effective study is not only about how long you work. It also depends on when you stop, how well you recover and how ready your brain is to begin again.`,
    questions:['What does the brain do during sleep?','How does a lack of sleep affect learning?','What habits can improve both rest and study?'],
    answers:[`It organizes new information and connects it with what a person already knows.`,`It reduces attention and makes new ideas and unfamiliar problems harder to handle.`,`Students can keep a regular sleep schedule, avoid bright screens and avoid heavy late meals.`]
  },
  {
    id:'museum-voices', title:'Giving History a Voice', year:2025, topic:'文化与科技', level:'进阶', type:'原创模拟', source:'北京高考英语听说题型原创模拟', sourceUrl:'https://www.bjeea.cn/html/gkgz/xglj/2020/1209/77134.html',
    text:`Museums are using digital technology to make history easier to explore. In one project, visitors can point a phone at an old photograph and hear the story of the person in it. The recording does more than list dates and facts. It describes ordinary sounds, feelings and choices, helping the past feel close to the present. Creating such an experience, however, requires careful work. Museum staff interview experts and local families, compare written records and check the age of each object before producing a story. They must distinguish clearly between facts and imaginative details, especially when historical information is incomplete. Accessibility matters too. Recordings may be offered at different speeds, while written captions help visitors who cannot hear them. Some museums invite young people to record local memories in their own voices, giving the community an active role in protecting its history. Technology cannot replace real objects or careful research. Used responsibly, however, it can invite more people to look closely, ask thoughtful questions and form a personal connection with lives from the past.`,
    questions:['What happens when visitors point a phone at a photograph?','How are the digital stories created?','What can technology encourage visitors to do?'],
    answers:[`They can hear the story of the person in the photograph.`,`Staff interview people, compare records and check each object before producing a story.`,`It can encourage visitors to look closely, ask questions and connect with people from the past.`]
  }
];

function readLocalJson(key,fallback){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
let customPassages=readLocalJson('customReadingPassages',[]);
customPassages=Array.isArray(customPassages)?customPassages.filter(item=>item?.id&&item?.text):[];
passages.push(...customPassages);
const normalizeSentenceKey=text=>text.toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9]+/g,' ').trim();
const localSentenceTranslations=new Map();
passages.slice(0,8).flatMap(item=>splitSentences(item.text)).forEach((sentence,index)=>{const translation=window.LOCAL_SENTENCE_TRANSLATIONS?.[index];if(translation)localSentenceTranslations.set(normalizeSentenceKey(sentence),translation)});

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let current = passages[0], filter = 'all', editingPassageId = null, mediaRecorder, chunks = [], recordInterval, recordSeconds = 0, timerInterval, utterance;
let recognition, recognitionActive = false, recognizedFinal = '', recognizedInterim = '', recognizedArchive = '';
let recognitionSessionAvailable = false;
const RecognitionEngine = window.SpeechRecognition || window.webkitSpeechRecognition;
let answerRecorder,answerStream,answerChunks=[],answerRecognition,answerTimerInterval,answerGradeTimeout,answerSeconds=40,answerActive=false,answerFinal='',answerInterim='',answerAudioUrl='',questionIndex=0,questionResults=[];
let wordMarkMode=null,wordMarkSelection=new Set();
const savedProgress=readLocalJson('readingProgress',{});
const progress=savedProgress&&typeof savedProgress==='object'&&!Array.isArray(savedProgress)?savedProgress:{};
const savedFavorites=readLocalJson('readingFavorites',[]);
const favorites=new Set(Array.isArray(savedFavorites)?savedFavorites:[]);
const lookupCache = new Map(), translationCache = new Map();
let cardRequest = 0;
let cloudUser = null, cloudSyncTimer = null, cloudSyncInterval = null, cloudSyncPromise = null;
// Keeps a deletion from being reintroduced by a sync request that started
// before the delete finished (for example, the account button was clicked
// while the automatic sync was still in flight).
const deletedArticleIds = new Set();
const submissionStatuses = new Map();
const publicPassageIds = new Set();
let ocrWorker = null, ocrWorkerPromise = null, ocrAssetsPromise = null, ocrRunId = 0, ocrWorkerGeneration = 0;
let ocrProgressReporter = () => {};

function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1900)}
function splitSentences(text){return text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[text]}
function displayType(type){return type==='我的文章'?'我的创作':['社区精选','社区拾光'].includes(type)?'社区精选':type}
function matchesFilter(passage){if(filter==='all')return true;if(filter==='mine')return passage.type==='我的文章';if(filter==='community')return ['社区精选','社区拾光'].includes(passage.type);return passage.type===filter}
function scoreSummary(id){const saved=progress[id];if(!saved)return'';const parts=[];if(saved.score!=null)parts.push(`朗读 ${saved.score}分`);if(saved.questionResults?.length)parts.push(`问答 ${saved.questionScore||0}/6`);return parts.length?`<strong class="passage-score">${escapeHtml(parts.join(' · '))}</strong>`:''}
function renderList(){
  const term=$('#searchInput').value.trim().toLowerCase();
  const items=passages.filter(p=>matchesFilter(p)&&(`${p.title} ${p.topic} ${p.text}`.toLowerCase().includes(term)));
  $('#passageList').innerHTML=items.map(p=>{const mine=p.type==='我的文章',info=submissionStatuses.get(p.id),status=info?.status||'';return`<div class="passage-card ${mine?'my-passage-card':''}"><a class="passage-item ${p.id===current.id?'active':''}" href="#practice/${encodeURIComponent(p.id)}" data-id="${escapeHtml(p.id)}"><small>${escapeHtml(displayType(p.type))}</small><b>${escapeHtml(p.title)}</b><span>${escapeHtml(p.year)} · ${escapeHtml(p.topic)} · ${escapeHtml(p.level)}${progress[p.id]?' · 已练习':''}</span>${scoreSummary(p.id)}</a>${mine?`<div class="passage-card-actions"><button data-edit="${escapeHtml(p.id)}">修改</button><button data-delete="${escapeHtml(p.id)}" class="delete-article-btn">删除</button><button data-submit="${escapeHtml(p.id)}" class="submit-article-btn" ${['submitted','published'].includes(status)?'disabled':''}>${escapeHtml(statusLabel(status))}</button></div>${info?.reviewNote?`<p class="passage-review-note">审核意见：${escapeHtml(info.reviewNote)}</p>`:''}`:''}</div>`}).join('')||'<p class="small">没有找到匹配内容</p>';
}
function openPassage(id){selectPassage(id);document.body.classList.add('practice-open');location.hash=`practice/${encodeURIComponent(current.id)}`;window.scrollTo({top:0,behavior:'smooth'})}
function showLibrary(){if(mediaRecorder?.state==='recording'||answerActive){toast('请先结束当前录音');return}stopAnswerPractice();document.body.classList.remove('practice-open');location.hash='library';setTimeout(()=>$('#library').scrollIntoView({block:'start'}),0)}
function restorePracticeRoute(){const match=location.hash.match(/^#practice\/(.+)$/);if(!match)return;let id='';try{id=decodeURIComponent(match[1])}catch{}if(passages.some(item=>item.id===id)){if(!document.body.classList.contains('practice-open')||current.id!==id)selectPassage(id);document.body.classList.add('practice-open')}}
function selectPassage(id){
  if(mediaRecorder?.state==='recording'||answerActive){toast('请先结束当前录音');return}
  stopSpeech(); stopTimer(); closeLearningCard(); wordMarkMode=null;current=passages.find(p=>p.id===id)||passages[0];
  recognitionActive=false;if(recognition){try{recognition.abort()}catch{}}$('#resultCard').hidden=true;
  $('#recordLabel').textContent='点击开始录音（自动识别和评分）';
  $('#sourceBadge').textContent=displayType(current.type); $('#passageTitle').textContent=current.title;
  $('#passageMeta').textContent=`${current.year} · ${current.topic} · ${current.level}`;
  const sentences=splitSentences(current.text); $('#passageText').innerHTML=sentences.map((s,i)=>`<span class="sentence" data-index="${i}">${escapeHtml(s)}</span>`).join('');
  $('#wordCount').textContent=current.text.trim().split(/\s+/).length;
  renderQuestions();
  $('#favoriteBtn').textContent=favorites.has(id)?'♥':'♡';renderArticleVocabulary();
  const previous=progress[id];
  if(previous?.transcript){renderAssessment(previous.transcript,false);$('#recordLabel').textContent=`已恢复上次练习结果（${new Date(previous.date).toLocaleDateString()}）`}
  else if(previous?.score!=null){$('#resultCard').hidden=false;$('#readingScore').textContent=previous.score;$('#correctCount').textContent=previous.correct||0;$('#wrongCount').textContent=previous.wrong||0;$('#omittedCount').textContent=previous.omitted||0;$('#extraCount').textContent=previous.extra||0;$('#recognizedText').textContent='上次练习未保存语音识别文本。'}
  renderList();
}
function renderQuestions(){
  stopAnswerPractice();questionResults=Array.isArray(progress[current.id]?.questionResults)?progress[current.id].questionResults:[];
  const questions=Array.isArray(current.questions)?current.questions:[],sourceUrl=safeExternalUrl(current.sourceUrl),box=$('#questions');
  $('#questionPracticePanel').hidden=true;
  if(!questions.length){box.innerHTML=`<p>${['社区精选','社区拾光'].includes(current.type)?'这篇文章暂未设置回答问题。':'这篇文章还没有回答问题；“我的创作”可点击卡片上的“修改”补充三组问题和参考答案。'}</p>`;return}
  const canPractice=Array.isArray(current.answers)&&current.answers.length===questions.length&&current.answers.every(Boolean);
  box.innerHTML=`<ol>${questions.map(q=>`<li>${escapeHtml(q)}</li>`).join('')}</ol><p class="exam-question-note">仿真流程：逐题显示并朗读问题，每题限时 40 秒。浏览器根据语音识别文本与参考答案要点给出 0–2 分练习估分。</p>${canPractice?'<button id="startQuestionsBtn" class="primary-btn">开始回答问题</button>':'<p class="card-error">这篇文章没有完整参考答案，暂时不能自动评分。</p>'}${sourceUrl?`<p><a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">查看资料依据与来源说明 ↗</a></p>`:''}`;
  if(canPractice)$('#startQuestionsBtn').onclick=startQuestionPractice;
}
function stopSpeech(){window.speechSynthesis?.cancel();utterance=null;$$('.sentence').forEach(s=>s.classList.remove('active'));$('#speakBtn').textContent='▶'}
function speak(){
  const synthesis=window.speechSynthesis,Utterance=window.SpeechSynthesisUtterance;if(!synthesis||!Utterance){toast('当前浏览器不支持示范朗读，请使用 Safari、Chrome 或 Edge');return}
  if(synthesis.speaking){stopSpeech();return}
  utterance=new Utterance(current.text); utterance.lang='en-US';utterance.rate=Number($('#rateRange').value);
  const voices=synthesis.getVoices();utterance.voice=voices.find(v=>v.lang==='en-US')||voices.find(v=>v.lang.startsWith('en'))||null;
  const starts=[];let total=0;splitSentences(current.text).forEach(s=>{starts.push(total);total+=s.length});
  utterance.onboundary=e=>{if(e.name!=='word'&&e.name!=='sentence')return;let i=0;for(let n=0;n<starts.length&&starts[n]<=e.charIndex;n++)i=n;$$('.sentence').forEach((s,n)=>s.classList.toggle('active',n===i));};
  utterance.onend=stopSpeech; synthesis.speak(utterance);$('#speakBtn').textContent='Ⅱ';
}
function startTimer(seconds,label,autoRecord=false){
  stopTimer();let left=seconds;$('#phaseLabel').textContent=label;$('#phaseDot').style.background=label==='准备时间'?'#f6c875':'#ef8460';
  const draw=()=>$('#timer').textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;draw();
  timerInterval=setInterval(async()=>{left--;draw();if(left<=0){stopTimer();if(label==='准备时间'){toast('准备结束，正在自动开始录音');$('#recordLabel').textContent='准备结束，正在请求麦克风权限…';await toggleRecord()}else{toast('时间到');if(autoRecord&&mediaRecorder?.state==='recording')stopRecording(true)}}},1000)
}
function stopTimer(){clearInterval(timerInterval);timerInterval=null}
function startPreparation(){if(mediaRecorder?.state==='recording'){toast('当前已经在录音');return}if(answerActive){toast('请先完成当前问题作答');return}$('#recordLabel').textContent='60 秒准备中；倒计时结束后将自动开始录音，也可点击下方录音按钮直接开始';startTimer(60,'准备时间')}

function escapeHtml(value){const node=document.createElement('div');node.textContent=String(value??'');return node.innerHTML}
function safeExternalUrl(value){try{const raw=String(value||'').trim();if(!raw)return'';const url=new URL(raw,location.href);return ['http:','https:'].includes(url.protocol)?url.href:''}catch{return''}}
function speakWord(word){
  stopSpeech();
  const synthesis=window.speechSynthesis,Utterance=window.SpeechSynthesisUtterance;if(!synthesis||!Utterance){toast('当前浏览器不支持单词发音');return}
  const voiceLine=new Utterance(word);voiceLine.lang='en-US';voiceLine.rate=.78;
  const voices=synthesis.getVoices();voiceLine.voice=voices.find(v=>v.lang==='en-US')||voices.find(v=>v.lang.startsWith('en'))||null;
  synthesis.speak(voiceLine);
}
function vocabularyDetail(word,mode){
  const details=getLocalWordDetails(word);
  if(mode==='pronunciation'){
    const phonetic=details?.phonetic&&!details.phonetic.includes('暂无')?details.phonetic:'';
    return phonetic?(/[\/\[\]]/.test(phonetic)?phonetic:`/${phonetic}/`):'暂无音标';
  }
  return details?.chinese||'暂无词性与汉译';
}
function vocabularyRows(words,mode,emptyText='还没有记录'){
  return words?.length?words.map(word=>`<div class="vocabulary-row"><button type="button" data-vocab-word="${escapeHtml(word)}" aria-label="朗读 ${escapeHtml(word)}">${escapeHtml(word)}</button><span>${escapeHtml(vocabularyDetail(word,mode))}</span></div>`).join(''):`<p>${emptyText}</p>`
}
function renderArticleVocabulary(){
  const saved=progress[current.id]||{};$('#articlePronunciationWords').innerHTML=vocabularyRows(saved.unpronounceableWords,'pronunciation');$('#articleMeaningWords').innerHTML=vocabularyRows(saved.unknownWords,'meaning');$('#wordMarkStatus').textContent='尚未进入单词标记模式。';$('#finishWordMarkBtn').hidden=true;$('#markPronunciationBtn').classList.remove('active');$('#markMeaningBtn').classList.remove('active')
}
function renderSelectablePassage(){
  const box=$('#passageText');box.textContent='';let last=0;const rx=/[A-Za-z]+(?:[’'][A-Za-z]+)?/g;let match;
  while((match=rx.exec(current.text))){box.append(document.createTextNode(current.text.slice(last,match.index)));const word=normalizeWord(match[0]),span=document.createElement('span');span.className=`vocab-select-word${wordMarkSelection.has(word)?' selected':''}`;span.textContent=match[0];span.dataset.markWord=word;span.tabIndex=0;span.setAttribute('role','button');box.append(span);last=rx.lastIndex}box.append(document.createTextNode(current.text.slice(last)))
}
function beginWordMark(mode){
  if(mediaRecorder?.state==='recording'||answerActive){toast('请先结束当前录音');return}stopSpeech();wordMarkMode=mode;const key=mode==='pronunciation'?'unpronounceableWords':'unknownWords';wordMarkSelection=new Set(progress[current.id]?.[key]||[]);renderSelectablePassage();$('#markPronunciationBtn').classList.toggle('active',mode==='pronunciation');$('#markMeaningBtn').classList.toggle('active',mode==='meaning');$('#finishWordMarkBtn').hidden=false;$('#wordMarkStatus').textContent=mode==='pronunciation'?'正在标记“不会读”的单词，请在文章中点击选择。':'正在标记“不认识”的单词，请在文章中点击选择。';$('#passageText').scrollIntoView({behavior:'smooth',block:'center'})
}
function toggleMarkedWord(target){if(!wordMarkMode)return;const word=target.dataset.markWord;if(wordMarkSelection.has(word))wordMarkSelection.delete(word);else wordMarkSelection.add(word);target.classList.toggle('selected',wordMarkSelection.has(word))}
function finishWordMark(){
  if(!wordMarkMode)return;const previous=progress[current.id]||{},key=wordMarkMode==='pronunciation'?'unpronounceableWords':'unknownWords';progress[current.id]={...previous,date:new Date().toISOString(),[key]:[...wordMarkSelection].sort()};localStorage.setItem('readingProgress',JSON.stringify(progress));wordMarkMode=null;$('#doneCount').textContent=Object.keys(progress).length;scheduleCloudSync();selectPassage(current.id);renderVocabularyBook();toast(cloudUser?'生词记录已保存并等待同步':'生词记录已保存在本机')
}
function renderVocabularyBook(){
  const pronunciation=new Set(),meaning=new Set();Object.values(progress).forEach(item=>{(item.unpronounceableWords||[]).forEach(word=>pronunciation.add(word));(item.unknownWords||[]).forEach(word=>meaning.add(word))});$('#bookPronunciationWords').innerHTML=vocabularyRows([...pronunciation].sort(),'pronunciation','还没有“不会读”的单词');$('#bookMeaningWords').innerHTML=vocabularyRows([...meaning].sort(),'meaning','还没有“不认识”的单词')
}
function openVocabularyBook(){closeLearningCard();renderVocabularyBook();$('#vocabBookModal').hidden=false}
function closeVocabularyBook(){$('#vocabBookModal').hidden=true}
function positionLearningCard(rect){
  const card=$('#learningCard');card.hidden=false;
  const width=Math.min(390,window.innerWidth-24),gap=10;
  let left=Math.max(12,Math.min(rect.left,window.innerWidth-width-12));
  let top=rect.bottom+gap;if(top+Math.min(card.scrollHeight,620)>window.innerHeight-12)top=Math.max(12,rect.top-Math.min(card.scrollHeight,620)-gap);
  card.style.left=`${left}px`;card.style.top=`${top}px`;
}
function closeLearningCard(){cardRequest++;$('#learningCard').hidden=true}
async function fetchJson(url){
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),8000);
  try{const response=await fetch(url,{signal:controller.signal});if(!response.ok)throw new Error(`HTTP ${response.status}`);return response.json()}
  finally{clearTimeout(timeout)}
}
function withTimeout(promise,ms){return new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('timeout')),ms);Promise.resolve(promise).then(value=>{clearTimeout(timer);resolve(value)},error=>{clearTimeout(timer);reject(error)})})}
function withOcrTimeout(promise,ms,stage){return new Promise((resolve,reject)=>{const timer=setTimeout(()=>{const error=new Error(`${stage}超时`);error.code=`OCR_${stage.toUpperCase()}_TIMEOUT`;reject(error)},ms);Promise.resolve(promise).then(value=>{clearTimeout(timer);resolve(value)},error=>{clearTimeout(timer);reject(error)})})}
let browserTranslatorPromise;
async function translateInBrowser(text){
  if(!('Translator' in self))throw new Error('Browser translator unavailable');
  const options={sourceLanguage:'en',targetLanguage:'zh'};
  const availability=await Translator.availability(options);if(availability==='unavailable')throw new Error('Language pair unavailable');
  browserTranslatorPromise||=Translator.create(options);
  const translator=await browserTranslatorPromise;return translator.translate(text);
}
async function translateToChinese(text){
  const key=text.toLowerCase();if(translationCache.has(key))return translationCache.get(key);
  const local=localSentenceTranslations.get(normalizeSentenceKey(text));if(local){translationCache.set(key,local);return local}
  const myMemory=fetchJson(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-CN`).then(data=>data?.responseData?.translatedText||Promise.reject(new Error('No translation')));
  const google=fetchJson(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`).then(data=>data?.[0]?.map(part=>part?.[0]||'').join('')||Promise.reject(new Error('No translation')));
  const providers=[myMemory,google];if('Translator' in self)providers.unshift(translateInBrowser(text));
  const translated=await Promise.any(providers.map(provider=>withTimeout(provider,6000)));
  translationCache.set(key,translated);return translated;
}
async function getWordDetails(word){
  const key=word.toLowerCase();if(lookupCache.has(key))return lookupCache.get(key);
  const [dictionary,translated]=await Promise.allSettled([
    fetchJson(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`),
    translateToChinese(key)
  ]);
  const entry=dictionary.status==='fulfilled'?dictionary.value?.[0]:null;
  const meanings=(entry?.meanings||[]).flatMap(item=>(item.definitions||[]).slice(0,2).map(def=>({part:item.partOfSpeech,definition:def.definition}))).slice(0,4);
  const details={phonetic:entry?.phonetic||entry?.phonetics?.find(p=>p.text)?.text||'暂无音标',chinese:translated.status==='fulfilled'?translated.value:'暂时无法获取中文释义',meanings};
  if(entry||translated.status==='fulfilled')lookupCache.set(key,details);return details;
}
function getLocalWordDetails(word){
  const key=word.toLowerCase().replace(/’/g,"'");
  const candidates=[key,key.replace(/'s$/,''),key.replace(/ies$/,'y'),key.replace(/es$/,''),key.replace(/s$/,''),key.replace(/ing$/,''),key.replace(/ing$/,'e'),key.replace(/ed$/,''),key.replace(/ed$/,'e')];
  const exact=window.LOCAL_DICTIONARY?.[key];
  const fallback=candidates.map(item=>window.LOCAL_DICTIONARY?.[item]).find(Boolean);
  if(!exact&&!fallback)return null;
  const source=exact||fallback,phoneticSource=candidates.map(item=>window.LOCAL_DICTIONARY?.[item]).find(item=>item?.phonetic);
  const pronunciation=source.phonetic||phoneticSource?.phonetic||'暂无音标';
  return {phonetic:pronunciation,chinese:source.chinese||'本地词库暂无中文释义',meanings:(source.definitions||[]).map(definition=>({part:'',definition}))};
}
function renderWordDetails(content,word,details){
  const definitions=details.meanings.length?`<ol class="definition-list">${details.meanings.map(item=>`<li>${item.part?`<b>${escapeHtml(item.part)}</b> `:''}${escapeHtml(item.definition)}</li>`).join('')}</ol>`:'<p class="card-error">本地词库暂无英文释义。</p>';
  content.innerHTML=`<div class="card-kicker">WORD CARD</div><div class="word-card-title"><h3>${escapeHtml(word)}</h3><button type="button" data-speak aria-label="再次朗读 ${escapeHtml(word)}">▶</button></div><p class="phonetic">${escapeHtml(details.phonetic)}</p><div class="card-section"><small>中文释义</small><p>${escapeHtml(details.chinese)}</p></div><div class="card-section"><small>ENGLISH DEFINITION</small>${definitions}</div>`;
  content.querySelector('[data-speak]').onclick=()=>speakWord(word);
}
async function showWordCard(word,rect){
  const request=++cardRequest,content=$('#learningCardContent');
  const local=getLocalWordDetails(word);
  if(local)renderWordDetails(content,word,local);
  else{content.innerHTML=`<div class="card-kicker">WORD CARD</div><div class="word-card-title"><h3>${escapeHtml(word)}</h3><button type="button" data-speak aria-label="朗读 ${escapeHtml(word)}">▶</button></div><div class="card-loading">本地词库未收录，正在联网查询…</div>`;content.querySelector('[data-speak]').onclick=()=>speakWord(word)}
  positionLearningCard(rect);speakWord(word);if(local)return;
  const details=await getWordDetails(word);if(request!==cardRequest)return;
  renderWordDetails(content,word,details);positionLearningCard(rect);
}
function analyzeSentence(sentence){
  const clean=sentence.trim();
  const rows=[];
  const opening=clean.match(/^(Before|After|During|While|When|If|Because|Although|Since|To|At first|By contrast|Most importantly|Finally)[^,]*,\s*/i);
  if(opening)rows.push(['句首成分',opening[0].replace(/,\s*$/,'')]);
  const clause=clean.slice(opening?.[0].length||0).replace(/[.!?]+$/,'');
  const verbRx=/\b(am|is|are|was|were|be|been|being|have|has|had|do|does|did|can|could|may|might|must|should|will|would|need|needs|make|makes|help|helps|show|shows|use|uses|choose|chooses|allow|allows|improve|improves|play|plays|spend|spends|grow|grows|become|becomes|feel|feels|seem|seems|[a-z]+ed|[a-z]+ing)\b/i;
  const verb=verbRx.exec(clause);
  if(verb&&verb.index>0){rows.push(['主语',clause.slice(0,verb.index).trim()]);rows.push(['谓语及其他',clause.slice(verb.index).trim()])}else rows.push(['主干',clause]);
  const patterns=[[/\b(who|which|that)\b[^,.;]*/i,'定语/名词性从句'],[/\b(if|because|although|while|when|so that)\b[^,.;]*/i,'状语从句'],[/\bto\s+[a-z]+\b[^,.;]*/i,'不定式结构'],[/\bbut\b[^.;]*/i,'转折并列'],[/\b(and|or)\b[^,.;]*/i,'并列成分']];
  patterns.forEach(([rx,label])=>{const found=clean.match(rx);if(found&&!rows.some(r=>r[1]===found[0]))rows.push([label,found[0]])});
  return rows.slice(0,6);
}
function suggestBreaks(sentence){
  return sentence.trim().replace(/,\s*/g,', / ').replace(/;\s*/g,'; / ').replace(/\s+(but|while|because|although|if|when|so that|which|who)\s+/gi,' / $1 ').replace(/\s+(and|or)\s+(?=(?:[A-Za-z]+\s+){2,})/gi,' / $1 ').replace(/\s*\/\s*/g,' / ');
}
async function showSentenceCard(sentence,rect){
  const request=++cardRequest,content=$('#learningCardContent'),rows=analyzeSentence(sentence);
  content.innerHTML=`<div class="card-kicker">SENTENCE COACH</div><h3 class="sentence-card-title">${escapeHtml(sentence)}</h3><div class="card-section"><small>中文翻译</small><p class="card-loading">${'Translator' in self?'正在使用浏览器翻译…':'正在联网翻译（最长等待 6 秒）…'}</p></div><div class="card-section"><small>句子结构</small>${rows.map(row=>`<div class="structure-row"><b>${escapeHtml(row[0])}</b><span>${escapeHtml(row[1])}</span></div>`).join('')}</div><div class="card-section"><small>断句建议（/ 处短暂停顿）</small><p class="break-text">${escapeHtml(suggestBreaks(sentence))}</p></div>`;
  positionLearningCard(rect);
  let translation;try{translation=await withTimeout(translateToChinese(sentence),6500)}catch{translation='翻译服务当前不可用。建议使用最新版桌面 Chrome 或 Edge，并通过 localhost/HTTPS 打开本页以启用浏览器内置翻译。'}
  if(request!==cardRequest)return;content.querySelector('.card-loading').textContent=translation;positionLearningCard(rect);
}
function handleTextSelection(){
  setTimeout(()=>{const selection=window.getSelection(),text=selection?.toString().replace(/\s+/g,' ').trim();if(!text||text.split(/\s+/).length<2)return;
    const range=selection.getRangeAt(0);if(!$('#passageText').contains(range.commonAncestorContainer))return;
    showSentenceCard(text,range.getBoundingClientRect());
  },0);
}

function resetCustomForm(){editingPassageId=null;$('#customTitle').value='';$('#customText').value='';[1,2,3].forEach(i=>{$(`#customQuestion${i}`).value='';$(`#customAnswer${i}`).value=''});clearPhotoSelection($('#ocrStatus').dataset.running==='true');$('#customModalTitle').textContent='添加自己的朗读文章';$('#createPracticeBtn').textContent='保存文章'}
function openCustomModal(article=null){
  resetCustomForm();
  if(article){editingPassageId=article.id;$('#customModalTitle').textContent='修改我的文章与问答';$('#createPracticeBtn').textContent='保存修改';$('#customTitle').value=article.title||'';$('#customText').value=article.text||'';[1,2,3].forEach((i,index)=>{$(`#customQuestion${i}`).value=article.questions?.[index]||'';$(`#customAnswer${i}`).value=article.answers?.[index]||''})}
  $('#customModal').hidden=false;$('#customError').textContent='';setTimeout(()=>$('#customTitle').focus(),0);
}
function closeCustomModal(){if($('#ocrStatus').dataset.running==='true')return;$('#customModal').hidden=true;resetCustomForm()}
function cleanOcrText(text){return text.replace(/([A-Za-z])-\s*\n\s*([a-z])/g,'$1$2').replace(/\r/g,'').replace(/\n{2,}/g,'\n\n').replace(/([^\n])\n(?=[^\n])/g,'$1 ').replace(/[ \t]+/g,' ').trim()}
async function prepareOcrImage(file){
  if(!('createImageBitmap' in self))return file;
  const image=await createImageBitmap(file,{imageOrientation:'from-image'}),maxSide=1800,largest=Math.max(image.width,image.height);
  if(largest<=maxSide){image.close();return file}
  const scale=maxSide/largest,canvas=document.createElement('canvas');canvas.width=Math.round(image.width*scale);canvas.height=Math.round(image.height*scale);const context=canvas.getContext('2d');context.imageSmoothingEnabled=true;context.imageSmoothingQuality='high';context.drawImage(image,0,0,canvas.width,canvas.height);image.close();
  return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('无法缩放照片')),'image/jpeg',.88));
}
async function disposeOcrWorker(){
  const worker=ocrWorker;ocrWorkerGeneration++;ocrWorker=null;ocrWorkerPromise=null;
  if(worker)await withTimeout(worker.terminate(),5000).catch(()=>{});
}
function ensureOcrAssets(base,onProgress){
  if(ocrAssetsPromise)return ocrAssetsPromise;
  const assets=[
    ['OCR Worker',new URL('vendor/tesseract/worker.min.js',base).href,50000],
    ['OCR 核心',new URL('vendor/tesseract/core/tesseract-core-lstm.wasm.js',base).href,1000000],
    ['英文模型',new URL('vendor/tesseract/lang/eng.traineddata.gz',base).href,1000000]
  ];
  ocrAssetsPromise=Promise.all(assets.map(async([name,url,minBytes],index)=>{onProgress(name,index+1,assets.length);const response=await withOcrTimeout(fetch(url,{cache:'force-cache'}),45000,`${name}下载`);if(!response.ok)throw new Error(`${name}文件无法访问（HTTP ${response.status}）`);const data=await withOcrTimeout(response.arrayBuffer(),45000,`${name}读取`);if(data.byteLength<minBytes)throw new Error(`${name}文件不完整，请重新部署网站`);return url})).catch(error=>{ocrAssetsPromise=null;throw error});
  return ocrAssetsPromise;
}
function clearPhotoSelection(cancelRecognition=false){
  if(cancelRecognition){ocrRunId++;disposeOcrWorker()}
  const preview=$('#photoPreview'),input=$('#photoInput'),status=$('#ocrStatus');
  if(preview.src?.startsWith('blob:'))URL.revokeObjectURL(preview.src);
  preview.removeAttribute('src');$('#photoPreviewWrap').hidden=true;input.value='';input.disabled=false;$('#createPracticeBtn').disabled=false;status.hidden=true;status.dataset.running='false';
}
function getOcrWorker(base,onProgress){
  ocrProgressReporter=onProgress;
  if(ocrWorker)return Promise.resolve(ocrWorker);
  if(!ocrWorkerPromise){
    const generation=ocrWorkerGeneration;
    const createAttempt=workerBlobURL=>Tesseract.createWorker('eng',1,{workerPath:new URL('vendor/tesseract/worker.min.js',base).href,corePath:new URL('vendor/tesseract/core/tesseract-core-lstm.wasm.js',base).href,langPath:new URL('vendor/tesseract/lang',base).href,workerBlobURL,errorHandler:error=>ocrProgressReporter({error}),logger:message=>ocrProgressReporter(message)})
      .then(async worker=>{if(generation!==ocrWorkerGeneration){await worker.terminate();throw new Error('OCR 初始化已取消')}await worker.setParameters({tessedit_pageseg_mode:Tesseract.PSM.SINGLE_BLOCK,preserve_interword_spaces:'1'});ocrWorker=worker;return worker});
    const pending=withOcrTimeout(createAttempt(false),40000,'引擎初始化尝试').catch(async firstError=>{
      if(generation!==ocrWorkerGeneration)throw firstError;
      ocrProgressReporter({status:'retrying OCR engine'});
      return withOcrTimeout(createAttempt(true),40000,'引擎初始化尝试');
    })
      .catch(error=>{if(ocrWorkerPromise===pending)ocrWorkerPromise=null;throw error});
    ocrWorkerPromise=pending;
  }
  return ocrWorkerPromise;
}
async function recognizePhoto(file){
  if(!file||!file.type.startsWith('image/'))return;
  if(file.size>20*1024*1024){$('#customError').textContent='照片不能超过 20 MB，请先压缩或裁剪后重试。';return}
  const runId=++ocrRunId;
  const preview=$('#photoPreview'),status=$('#ocrStatus'),bar=status.querySelector('span'),label=status.querySelector('p'),input=$('#photoInput');
  input.disabled=true;$('#createPracticeBtn').disabled=true;
  if(preview.src?.startsWith('blob:'))URL.revokeObjectURL(preview.src);preview.src=URL.createObjectURL(file);$('#photoPreviewWrap').hidden=false;status.hidden=false;status.dataset.running='true';bar.style.width='2%';label.textContent='正在启动本地英文识别…';$('#customError').textContent='';
  if(!window.Tesseract){label.textContent='OCR 组件未能加载。';status.dataset.running='false';input.disabled=false;input.value='';$('#createPracticeBtn').disabled=false;return}
  try{
    const base=document.baseURI;label.textContent='正在检查本地 OCR 文件…';await ensureOcrAssets(base,(name,index,total)=>{if(runId===ocrRunId){bar.style.width=`${Math.round(index/total*12)}%`;label.textContent=`正在加载${name}（${index}/${total}）…`}});if(runId!==ocrRunId)return;label.textContent='正在优化照片尺寸…';const image=await withOcrTimeout(prepareOcrImage(file),30000,'图片预处理');
    if(runId!==ocrRunId)return;
    const report=message=>{if(runId!==ocrRunId)return;if(message.error){label.textContent=`OCR 引擎错误：${message.error?.message||message.error}`;return}const progress=Math.round((message.progress||0)*100),stage={"loading tesseract core":'正在启动 OCR 核心…',"loading language traineddata":'正在载入英文模型…',"initializing tesseract":'正在初始化 OCR 引擎…',"initializing api":'正在完成 OCR 初始化…',"retrying OCR engine":'正在切换 OCR 加载方式，请稍候…'}[message.status];if(message.status==='recognizing text'){bar.style.width=`${Math.max(15,progress)}%`;label.textContent=`正在识别英文… ${progress}%`}else{bar.style.width=`${Math.max(12,Math.round(progress*15))}%`;label.textContent=stage||`正在准备 OCR：${message.status||'请稍候'}…`}};
    const worker=await withOcrTimeout(getOcrWorker(base,report),90000,'引擎初始化');if(runId!==ocrRunId)return;label.textContent='模型已就绪，正在识别英文…';bar.style.width='8%';const result=await withOcrTimeout(worker.recognize(image),120000,'文字识别'),text=cleanOcrText(result.data.text||'');
    if(runId!==ocrRunId)return;
    if(!text)throw new Error('没有识别到英文文字');
    $('#customText').value=text;bar.style.width='100%';label.textContent='识别完成，请检查文字后生成练习。';
  }catch(error){await disposeOcrWorker();if(runId!==ocrRunId)return;bar.style.width='0';const reasons={OCR_引擎初始化_TIMEOUT:'本地 OCR 引擎初始化超时，请刷新页面后重试；若仍失败，请确认使用 HTTPS 或 localhost 打开',OCR_引擎初始化尝试_TIMEOUT:'本地 OCR 引擎初始化超时，请刷新页面后重试；若仍失败，请确认使用 HTTPS 或 localhost 打开',OCR_文字识别_TIMEOUT:'文字识别耗时过长，请裁掉截图中与文章无关的区域后重试',OCR_图片预处理_TIMEOUT:'浏览器处理图片超时，请重新选择图片或换用 Chrome / Edge'};const reason=reasons[error?.code]||error?.message||'请换一张更清晰的照片';label.textContent=`识别失败：${reason}${location.protocol==='file:'?'。请按 README 用 localhost 打开网页后重试。':''}`}
  finally{if(runId===ocrRunId){status.dataset.running='false';input.disabled=false;input.value='';$('#createPracticeBtn').disabled=false}}
}
function createCustomPractice(){
  const raw=$('#customText').value.trim(),words=getWords(raw);$('#customError').textContent='';
  if(words.length<10){$('#customError').textContent='请至少输入或识别 10 个英文单词。';return}
  if(words.length>800){$('#customError').textContent='文章请控制在 800 个英文单词以内。';return}
  const questions=[1,2,3].map(i=>$(`#customQuestion${i}`).value.trim()),answers=[1,2,3].map(i=>$(`#customAnswer${i}`).value.trim()),questionFields=[...questions,...answers];
  if(questionFields.some(Boolean)&&questionFields.some(value=>!value)){$('#customError').textContent='如需回答问题练习，请完整填写 3 个问题和 3 个参考答案。';return}
  const text=raw.replace(/\r/g,'').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim(),title=$('#customTitle').value.trim()||`我的朗读 ${customPassages.length+1}`;
  const existing=editingPassageId?customPassages.find(item=>item.id===editingPassageId):null;
  const passage={id:existing?.id||`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,title,year:existing?.year||new Date().getFullYear(),topic:'自定义',level:`${words.length}词`,type:'我的文章',source:'用户添加',sourceUrl:'',text,questions:questions.filter(Boolean),answers:answers.filter(Boolean)};
  if(existing)Object.assign(existing,passage);else{customPassages.push(passage);passages.push(passage)}
  localStorage.setItem('customReadingPassages',JSON.stringify(customPassages));$('#customModal').hidden=true;resetCustomForm();
  $('#totalCount').textContent=passages.length;filter='mine';$$('.chip').forEach(chip=>chip.classList.toggle('active',chip.dataset.filter==='mine'));openPassage(passage.id);scheduleCloudSync();toast(cloudUser?'文章已保存并等待同步':'文章已保存在本机');
}

async function apiRequest(path,options={}){
  let response;
  try{response=await fetch(path,{credentials:'same-origin',...options,headers:{...(options.body?{'Content-Type':'application/json'}:{}),...(options.headers||{})}})}
  catch{
    if(location.protocol==='file:')throw new Error('账号功能不能通过双击 HTML 使用。请上传完整项目到 Netlify，或使用 Netlify CLI 启动。');
    throw new Error('无法连接账号服务器。请确认已部署 Netlify Functions，并检查当前网络后重试。');
  }
  let data={};try{data=await response.json()}catch{}
  if(!response.ok){
    if(response.status===404&&path.startsWith('/api/'))throw new Error('当前网址只部署了静态网页，没有账号接口。请将完整项目部署到 Netlify。');
    throw new Error(data.error||`请求失败（${response.status}）`);
  }
  return data;
}
function setSyncStatus(message,error=false){const box=$('#syncStatus');box.textContent=message;box.classList.toggle('error',error)}
function cloudState(){return{articles:customPassages.filter(article=>!deletedArticleIds.has(article.id)),progress}}
function mergeCloudState(remote={}){
  const publishedIds=new Map([...submissionStatuses.values()].filter(item=>item.status==='published').map(item=>[item.articleId,item.publicId]));
  const articles=new Map((remote.articles||[]).filter(item=>!publishedIds.has(item.id)&&!deletedArticleIds.has(item.id)).map(item=>[item.id,item]));customPassages.filter(item=>!publishedIds.has(item.id)&&!deletedArticleIds.has(item.id)).forEach(item=>articles.set(item.id,item));
  const existingIds=new Set(customPassages.map(item=>item.id));
  for(const article of articles.values())if(!existingIds.has(article.id)){customPassages.push(article);passages.push(article)}
  for(const [id,value] of Object.entries(remote.progress||{})){const targetId=publishedIds.get(id)||id,local=progress[targetId];if(!local||String(value.date||'')>String(local.date||''))progress[targetId]=value;if(targetId!==id)delete progress[id]}
  localStorage.setItem('customReadingPassages',JSON.stringify(customPassages));localStorage.setItem('readingProgress',JSON.stringify(progress));
  $('#totalCount').textContent=passages.length;$('#doneCount').textContent=Object.keys(progress).length;selectPassage(current.id);renderVocabularyBook();
}
async function syncCloudData(){
  if(!cloudUser)return;
  if(cloudSyncPromise)return cloudSyncPromise;
  setSyncStatus('正在同步…');
  cloudSyncPromise=(async()=>{try{await loadSubmissionStatuses(false);removePublishedPrivateCopies();const remote=await apiRequest('/api/sync');mergeCloudState(remote.state);await apiRequest('/api/sync',{method:'PUT',body:JSON.stringify(cloudState())});await loadSubmissionStatuses(false);removePublishedPrivateCopies();await loadPublicLibrary();setSyncStatus(`已自动同步 · ${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}`);renderCloudArticles();renderList()}
  catch(error){setSyncStatus(`同步失败：${error.message}`,true)}
  finally{cloudSyncPromise=null}})();
  return cloudSyncPromise;
}
function scheduleCloudSync(){if(!cloudUser)return;clearTimeout(cloudSyncTimer);cloudSyncTimer=setTimeout(syncCloudData,700)}
function startAutomaticSync(){clearInterval(cloudSyncInterval);if(cloudUser)cloudSyncInterval=setInterval(()=>{if(!document.hidden&&navigator.onLine!==false)syncCloudData()},60000)}
function stopAutomaticSync(){clearTimeout(cloudSyncTimer);clearInterval(cloudSyncInterval);cloudSyncTimer=null;cloudSyncInterval=null}
function removePublishedPrivateCopies(){
  const published=[...submissionStatuses.values()].filter(item=>item.status==='published');if(!published.length)return;
  let changed=false;
  published.forEach(info=>{const articleId=info.articleId,index=customPassages.findIndex(item=>item.id===articleId);if(index<0)return;customPassages.splice(index,1);const passageIndex=passages.findIndex(item=>item.id===articleId);if(passageIndex>=0)passages.splice(passageIndex,1);if(info.publicId&&progress[articleId]){const existing=progress[info.publicId];if(!existing||String(progress[articleId].date||'')>String(existing.date||''))progress[info.publicId]=progress[articleId]}delete progress[articleId];changed=true});
  if(!changed)return false;localStorage.setItem('customReadingPassages',JSON.stringify(customPassages));localStorage.setItem('readingProgress',JSON.stringify(progress));$('#totalCount').textContent=passages.length;$('#doneCount').textContent=Object.keys(progress).length;if(!passages.includes(current))current=passages[0];renderVocabularyBook();return true
}
async function loadSubmissionStatuses(render=true){
  if(!cloudUser)return;try{const data=await apiRequest('/api/submissions');submissionStatuses.clear();data.submissions.forEach(item=>submissionStatuses.set(item.articleId,item));if(render)renderList()}catch{}
}
function statusLabel(status){return{submitted:'审核中',published:'已发布',rejected:'重新提交'}[status]||'提交精选'}
async function submitArticle(articleId,button){
  if(!cloudUser){toast('请先登录，再提交文章');openAccountModal();return}
  if(!confirm('请确认文章不含个人敏感信息，并且你有权将其投稿到“社区精选”。是否继续？'))return;
  button.disabled=true;button.textContent='正在提交…';
  try{await syncCloudData();await apiRequest('/api/submissions',{method:'POST',body:JSON.stringify({articleId})});await loadSubmissionStatuses();toast('文章已提交管理员审核')}
  catch(error){button.disabled=false;button.textContent='重试提交';toast(error.message)}
}
function editCustomArticle(articleId){const article=customPassages.find(item=>item.id===articleId);if(article)openCustomModal(article)}
async function deleteCustomArticle(articleId){
  const article=customPassages.find(item=>item.id===articleId);if(!article||!confirm(`确定删除“${article.title}”吗？文章、三组问答和练习记录都会删除。`))return;
  try{
    deletedArticleIds.add(articleId);
    // A delayed/automatic sync must not PUT the old local list after deletion.
    // Wait for an in-flight sync, cancel the debounce timer, then perform the
    // server-side deletes before removing the local copy.
    if(cloudUser){
      clearTimeout(cloudSyncTimer);cloudSyncTimer=null;
      if(cloudSyncPromise)await cloudSyncPromise;
      await apiRequest('/api/submissions',{method:'DELETE',body:JSON.stringify({articleId})});
      await apiRequest('/api/sync',{method:'DELETE',body:JSON.stringify({articleId})});
    }
    customPassages=customPassages.filter(item=>item.id!==articleId);const index=passages.findIndex(item=>item.id===articleId);if(index>=0)passages.splice(index,1);delete progress[articleId];submissionStatuses.delete(articleId);
    localStorage.setItem('customReadingPassages',JSON.stringify(customPassages));localStorage.setItem('readingProgress',JSON.stringify(progress));$('#totalCount').textContent=passages.length;$('#doneCount').textContent=Object.keys(progress).length;
    if(current.id===articleId)selectPassage(passages[0].id);else renderList();toast('文章已删除')
  }catch(error){deletedArticleIds.delete(articleId);toast(`删除失败：${error.message}`)}
}
function renderCloudArticles(){
  const box=$('#cloudArticleList');if(!box)return;if(!customPassages.length){box.innerHTML='<p class="account-intro">还没有自定义文章。</p>';return}
  box.innerHTML=customPassages.map(article=>{const info=submissionStatuses.get(article.id),status=info?.status||'';return`<div class="cloud-article-item"><div><b>${escapeHtml(article.title)}</b><small>${escapeHtml(article.level||'')} ${info?.reviewNote?`· 审核意见：${escapeHtml(info.reviewNote)}`:''}</small></div><button data-submit="${escapeHtml(article.id)}" ${['submitted','published'].includes(status)?'disabled':''}>${statusLabel(status)}</button></div>`}).join('');
  box.querySelectorAll('[data-submit]').forEach(button=>button.onclick=async()=>{if(!confirm('请确认文章不含个人敏感信息，并且你有权将其投稿到公共题库。是否继续？'))return;button.disabled=true;button.textContent='正在提交…';try{await syncCloudData();await apiRequest('/api/submissions',{method:'POST',body:JSON.stringify({articleId:button.dataset.submit})});await loadSubmissionStatuses();renderCloudArticles();toast('文章已提交管理员审核')}catch(error){button.disabled=false;button.textContent='重试投稿';toast(error.message)}})
}
function renderAccount(){
  $('#signedOutView').hidden=Boolean(cloudUser);$('#signedInView').hidden=!cloudUser;$('#accountBtn').classList.toggle('signed-in',Boolean(cloudUser));$('#accountBtn').textContent=cloudUser?cloudUser.username:'登录 / 同步';
  if(!cloudUser)return;
  const isAdmin=cloudUser.roles?.includes('admin'),hint=$('#adminSetupHint');$('#accountName').textContent=cloudUser.username;$('#accountId').textContent=cloudUser.id;$('#accountRole').textContent=isAdmin?'管理员':'普通用户';$('#openAdminBtn').hidden=!isAdmin;
  hint.hidden=isAdmin;hint.textContent=cloudUser.adminConfigured?'服务器已读取 ADMIN_USER_IDS，但其中没有当前用户 ID。请核对环境变量值是否与上方 ID 完全一致，然后重新部署。':'服务器尚未读取到 ADMIN_USER_IDS。请在 Netlify 环境变量中设置当前用户 ID，并重新部署。';
}
function openAccountModal(){closeLearningCard();$('#accountModal').hidden=false;renderAccount();setTimeout(()=>cloudUser?$('#syncNowBtn').focus():$('#authUsername').focus(),0)}
function closeAccountModal(){$('#accountModal').hidden=true}
async function authenticate(mode){
  const username=$('#authUsername').value.trim(),password=$('#authPassword').value,error=$('#authError');error.textContent='';
  try{const data=await apiRequest(`/api/auth/${mode}`,{method:'POST',body:JSON.stringify({username,password})});cloudUser=data.user;startAutomaticSync();$('#authPassword').value='';renderAccount();await syncCloudData();toast(mode==='register'?'账号创建成功':'登录成功')}
  catch(problem){error.textContent=problem.message}
}
async function logout(){
  try{await apiRequest('/api/auth/logout',{method:'POST'});}catch{}stopAutomaticSync();cloudUser=null;submissionStatuses.clear();renderAccount();renderList();closeAccountModal();toast('已退出登录；本机缓存仍保留在此设备')
}
async function restoreSession(){
  try{const data=await apiRequest('/api/auth/me');cloudUser=data.user;renderAccount();if(cloudUser){startAutomaticSync();await syncCloudData()}}catch{cloudUser=null;stopAutomaticSync();renderAccount()}
}
async function loadPublicLibrary(){
  try{
    const data=await apiRequest('/api/library'),articles=Array.isArray(data.articles)?data.articles:[],remoteIds=new Set(articles.map(item=>item.id));
    for(let i=passages.length-1;i>=0;i--)if(publicPassageIds.has(passages[i].id)&&!remoteIds.has(passages[i].id))passages.splice(i,1);
    const known=new Map(passages.map(item=>[item.id,item]));
    articles.forEach(article=>{const existing=known.get(article.id);if(existing)Object.assign(existing,article);else passages.push(article)});
    publicPassageIds.clear();remoteIds.forEach(id=>publicPassageIds.add(id));
    $('#totalCount').textContent=passages.length;
    if(!passages.includes(current))selectPassage(passages[0].id);else renderList();restorePracticeRoute()
  }catch{}
}
async function openAdmin(){
  $('#accountModal').hidden=true;$('#adminModal').hidden=false;const box=$('#adminSubmissionList');box.innerHTML='<p class="card-loading">正在加载投稿…</p>';
  try{const data=await apiRequest('/api/admin/submissions');renderAdminSubmissions(data.submissions)}catch(error){box.innerHTML=`<p class="card-error">${escapeHtml(error.message)}</p>`}
}
function renderAdminSubmissions(items){
  const box=$('#adminSubmissionList');if(!items.length){box.innerHTML='<p class="account-intro">目前没有用户投稿。</p>';return}
  box.innerHTML=items.map(item=>`<article class="submission-item" data-key="${escapeHtml(item.key)}"><div class="submission-meta"><span>投稿人：${escapeHtml(item.ownerName)}</span><span class="status-${escapeHtml(item.status)}">${statusLabel(item.status)}</span></div><h3>${escapeHtml(item.article.title)}</h3><p class="submission-text">${escapeHtml(item.article.text)}</p>${item.article.questions?.length?`<div class="submission-questions"><b>回答问题与参考答案</b><ol>${item.article.questions.map((question,index)=>`<li>${escapeHtml(question)}<small>${escapeHtml(item.article.answers?.[index]||'未填写参考答案')}</small></li>`).join('')}</ol></div>`:''}<textarea class="submission-note" placeholder="审核意见（退回时建议填写）">${escapeHtml(item.reviewNote||'')}</textarea><div class="submission-actions"><button data-action="reject">退回</button>${item.status==='published'?'<button data-action="unpublish">下架</button>':''}<button class="publish-btn" data-action="publish">并入社区精选</button></div></article>`).join('');
  box.querySelectorAll('[data-action]').forEach(button=>button.onclick=async()=>{const item=button.closest('.submission-item');button.disabled=true;try{await apiRequest('/api/admin/submissions',{method:'PATCH',body:JSON.stringify({key:item.dataset.key,action:button.dataset.action,reviewNote:item.querySelector('.submission-note').value})});toast('审核状态已更新');await syncCloudData();openAdmin()}catch(error){button.disabled=false;toast(error.message)}})
}

function normalizeWord(word){return word.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'')}
function getWords(text){return (text.match(/[A-Za-z]+(?:[’'][A-Za-z]+)?|\d+(?:[.,]\d+)*/g)||[]).map(normalizeWord).filter(Boolean)}
function alignWords(source,spoken){
  const n=source.length,m=spoken.length,dp=Array.from({length:n+1},()=>Array(m+1).fill(0));
  for(let i=0;i<=n;i++)dp[i][0]=i;for(let j=0;j<=m;j++)dp[0][j]=j;
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(source[i-1]===spoken[j-1]?0:1));
  const status=Array(n).fill('omitted');let i=n,j=m,extra=0;
  while(i>0||j>0){
    if(i>0&&j>0&&source[i-1]===spoken[j-1]&&dp[i][j]===dp[i-1][j-1]){status[i-1]='correct';i--;j--}
    else if(i>0&&j>0&&dp[i][j]===dp[i-1][j-1]+1){status[i-1]='wrong';i--;j--}
    else if(j>0&&dp[i][j]===dp[i][j-1]+1){extra++;j--}
    else if(i>0){status[i-1]='omitted';i--}
    else{extra++;j--}
  }
  return{status,extra}
}
function renderAssessment(transcript,autoSave=true){
  const spoken=getWords(transcript),source=getWords(current.text),{status,extra}=alignWords(source,spoken);
  const counts={correct:0,wrong:0,omitted:0};status.forEach(s=>counts[s]++);
  const errors=counts.wrong+counts.omitted+extra;
  const score=source.length?Math.round(Math.max(0,1-errors/source.length)*100):0;
  const box=$('#passageText');box.textContent='';let last=0,index=0;const rx=/[A-Za-z]+(?:[’'][A-Za-z]+)?|\d+(?:[.,]\d+)*/g;let match;
  while((match=rx.exec(current.text))){box.append(document.createTextNode(current.text.slice(last,match.index)));const span=document.createElement('span');span.className=`word ${status[index]||'omitted'}`;span.textContent=match[0];span.tabIndex=0;span.title=`${status[index]==='correct'?'读对':status[index]==='wrong'?'疑似读错':'疑似漏读'}；点击查看词卡`;box.append(span);last=rx.lastIndex;index++}box.append(document.createTextNode(current.text.slice(last)));
  $('#readingScore').textContent=score;$('#correctCount').textContent=counts.correct;$('#wrongCount').textContent=counts.wrong;$('#omittedCount').textContent=counts.omitted;$('#extraCount').textContent=extra;
  $('#recognizedText').textContent=transcript||'没有获得有效识别文本，请检查听写、网络及麦克风权限后重试。';$('#resultCard').hidden=false;$('#recordLabel').textContent='识别完成，成绩已自动保存';if(autoSave)savePracticeProgress({saveReading:true});
}
function startRecognition(){
  recognizedFinal='';recognizedInterim='';recognizedArchive='';recognitionSessionAvailable=false;$('#resultCard').hidden=false;$('#recognizedText').textContent='正在识别朗读内容……';$('#readingScore').textContent='…';['correctCount','wrongCount','omittedCount','extraCount'].forEach(id=>$(`#${id}`).textContent='—');
  const sentences=splitSentences(current.text);$('#passageText').innerHTML=sentences.map((s,i)=>`<span class="sentence" data-index="${i}">${escapeHtml(s)}</span>`).join('');
  if(!RecognitionEngine){$('#recognizedText').textContent='当前浏览器不支持自动语音识别。录音仍会正常保存，但不能自动批改。';return false}
  try{recognition=new RecognitionEngine();recognition.lang='en-US';recognition.continuous=true;recognition.interimResults=true;recognition.maxAlternatives=1;
    recognition.onresult=e=>{let final='',interim='';for(let i=0;i<e.results.length;i++){const t=e.results[i][0].transcript;if(e.results[i].isFinal)final+=t+' ';else interim+=t+' '}recognizedFinal=final.trim();recognizedInterim=interim.trim();$('#recognizedText').textContent=(recognizedFinal+' '+recognizedInterim).trim()||'正在聆听……'};
    recognition.onerror=e=>{if(!['aborted','no-speech'].includes(e.error)){recognitionSessionAvailable=false;$('#recognizedText').textContent=`识别暂不可用（${e.error}）。录音仍可正常回放。`}};
    recognition.onend=()=>{if(recognitionActive&&mediaRecorder?.state==='recording'){recognizedArchive+=(recognizedFinal+' ');recognizedFinal='';recognizedInterim='';try{recognition.start()}catch{}}};
    recognitionActive=true;recognition.start();recognitionSessionAvailable=true;return true
  }catch(e){recognitionActive=false;$('#recognizedText').textContent='无法启动语音识别。请使用Safari或Chrome，并确认已开启听写功能。';return false}
}
function finishRecognition(){recognitionActive=false;if(recognition){try{recognition.stop()}catch{}}if(!recognitionSessionAvailable){$('#recordLabel').textContent='录音完成，可回放；当前设备未能自动识别';return}setTimeout(()=>renderAssessment((recognizedArchive+' '+recognizedFinal+' '+recognizedInterim).trim()),700)}

function answerStem(word){return word.toLowerCase().replace(/[^a-z]/g,'').replace(/ies$/,'y').replace(/(ing|ed|es)$/,'').replace(/s$/,'')}
const answerStopWords=new Set('a an the is are was were be been being do does did can could may might must should would will to of in on at for from with by and or but that which who what when where why how it its they them their this these those person people students visitors one two also after before during into over more much many'.split(' ').map(answerStem));
function answerTokens(text){return getWords(text).map(answerStem).filter(word=>word.length>2&&!answerStopWords.has(word))}
function gradeAnswer(transcript,reference){
  const expected=[...new Set(answerTokens(reference))],spoken=new Set(answerTokens(transcript)),matched=expected.filter(word=>spoken.has(word)),coverage=expected.length?matched.length/expected.length:0;
  const points=coverage>=.58?2:coverage>=.25?1:0;
  return{points,coverage,matched,expected};
}
function playActiveQuestion(){
  const question=current.questions?.[questionIndex];if(!question)return;stopSpeech();const synthesis=window.speechSynthesis,Utterance=window.SpeechSynthesisUtterance;if(!synthesis||!Utterance){toast('当前浏览器不支持问题朗读，请直接阅读屏幕上的问题');return}const line=new Utterance(question);line.lang='en-US';line.rate=.86;synthesis.speak(line);
}
function startQuestionPractice(){
  if(!current.questions?.length||current.answers?.length!==current.questions.length){toast('这篇文章缺少完整参考答案，暂时不能自动评分');return}
  stopAnswerPractice();questionIndex=0;questionResults=[];$('#questionPracticePanel').hidden=false;showActiveQuestion();$('#questionPracticePanel').scrollIntoView({behavior:'smooth',block:'center'});
}
function showActiveQuestion(){
  answerSeconds=40;answerFinal='';answerInterim='';
  $('#questionProgress').textContent=`第 ${questionIndex+1} / ${current.questions.length} 题`;
  $('#questionTotalScore').textContent=`${questionResults.reduce((sum,item)=>sum+(item?.points||0),0)} / ${current.questions.length*2} 分`;
  $('#activeQuestion').textContent=current.questions[questionIndex];$('#questionTimer').textContent='00:40';
  $('#answerRecordBtn').hidden=false;$('#answerRecordBtn').disabled=false;$('#answerRecordBtn').textContent='开始回答';
  $('#answerLiveText').textContent='点击“开始回答”后，将启动麦克风和语音识别。';$('#answerFeedback').hidden=true;$('#nextQuestionBtn').hidden=true;$('#answerPlayback').hidden=true;
  playActiveQuestion();
}
async function startAnswerRecording(){
  if(answerActive){finishAnswerRecording();return}
  if(mediaRecorder?.state==='recording'){toast('请先完成短文朗读录音');return}
  if(!navigator.mediaDevices?.getUserMedia){toast('当前浏览器不支持录音');return}
  try{
    answerStream=await navigator.mediaDevices.getUserMedia({audio:true});answerChunks=[];answerRecorder=new MediaRecorder(answerStream);
    answerRecorder.ondataavailable=event=>{if(event.data.size)answerChunks.push(event.data)};
    answerRecorder.onstop=()=>{if(answerAudioUrl)URL.revokeObjectURL(answerAudioUrl);answerAudioUrl=URL.createObjectURL(new Blob(answerChunks,{type:answerRecorder.mimeType}));$('#answerPlayback').src=answerAudioUrl;$('#answerPlayback').hidden=false;answerStream?.getTracks().forEach(track=>track.stop())};
    answerFinal='';answerInterim='';
    if(RecognitionEngine){
      answerRecognition=new RecognitionEngine();answerRecognition.lang='en-US';answerRecognition.continuous=true;answerRecognition.interimResults=true;
      answerRecognition.onresult=event=>{let final='',interim='';for(let i=0;i<event.results.length;i++){const text=event.results[i][0].transcript;if(event.results[i].isFinal)final+=`${text} `;else interim+=`${text} `}answerFinal=final.trim();answerInterim=interim.trim();$('#answerLiveText').textContent=(answerFinal+' '+answerInterim).trim()||'正在聆听……'};
      answerRecognition.onerror=event=>{if(!['aborted','no-speech'].includes(event.error))$('#answerLiveText').textContent=`语音识别暂不可用（${event.error}），录音仍会保留。`};
      try{answerRecognition.start()}catch{}
    }else $('#answerLiveText').textContent='当前浏览器不支持语音识别，录音可以回放，但无法自动评分。';
    answerRecorder.start();answerActive=true;answerSeconds=40;$('#answerRecordBtn').textContent='结束回答并评分';
    clearInterval(answerTimerInterval);answerTimerInterval=setInterval(()=>{answerSeconds--;$('#questionTimer').textContent=`00:${String(Math.max(0,answerSeconds)).padStart(2,'0')}`;if(answerSeconds<=0)finishAnswerRecording()},1000);
  }catch{toast('无法使用麦克风，请检查浏览器权限')}
}
function finishAnswerRecording(){
  if(!answerActive)return;answerActive=false;clearInterval(answerTimerInterval);answerTimerInterval=null;$('#answerRecordBtn').disabled=true;$('#answerRecordBtn').textContent='正在评分…';
  if(answerRecorder?.state==='recording')answerRecorder.stop();if(answerRecognition){try{answerRecognition.stop()}catch{}}
  answerGradeTimeout=setTimeout(()=>{
    const transcript=(answerFinal+' '+answerInterim).trim(),reference=current.answers?.[questionIndex]||'',result=gradeAnswer(transcript,reference);questionResults[questionIndex]={question:current.questions[questionIndex],transcript,points:result.points,coverage:result.coverage};
    $('#answerLiveText').textContent=transcript||'没有获得有效识别文本。';
    const feedback=$('#answerFeedback');feedback.hidden=false;feedback.innerHTML=`<b>本题练习得分：${result.points} / 2</b><p>参考答案：${escapeHtml(reference)}</p><small>识别到 ${result.matched.length} / ${result.expected.length} 个参考答案要点。本评分仅供练习。</small>`;
    $('#questionTotalScore').textContent=`${questionResults.reduce((sum,item)=>sum+(item?.points||0),0)} / ${current.questions.length*2} 分`;$('#answerRecordBtn').hidden=true;
    const next=$('#nextQuestionBtn');next.hidden=false;next.textContent=questionIndex<current.questions.length-1?'下一题 →':'完成并保存成绩';
  },700);
}
function nextQuestion(){
  if(questionIndex<current.questions.length-1){questionIndex++;showActiveQuestion();return}
  const total=questionResults.reduce((sum,item)=>sum+(item?.points||0),0);$('#nextQuestionBtn').hidden=true;$('#answerFeedback').innerHTML+=`<p class="question-summary">回答问题完成：${total} / ${current.questions.length*2} 分，成绩已自动保存。</p>`;savePracticeProgress({saveQuestions:true});toast(`回答问题完成：${total} / ${current.questions.length*2} 分，已保存`);
}
function stopAnswerPractice(){
  clearInterval(answerTimerInterval);clearTimeout(answerGradeTimeout);answerTimerInterval=null;answerGradeTimeout=null;answerActive=false;
  if(answerRecorder?.state==='recording'){try{answerRecorder.stop()}catch{}}if(answerRecognition){try{answerRecognition.abort()}catch{}}answerStream?.getTracks().forEach(track=>track.stop());
}

async function toggleRecord(){
  if(mediaRecorder?.state==='recording'){stopRecording();return}
  if(answerActive){toast('请先完成当前问题作答');return}
  if(!navigator.mediaDevices?.getUserMedia){toast('当前浏览器不支持录音');return}
  try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});chunks=[];mediaRecorder=new MediaRecorder(stream);mediaRecorder.ondataavailable=e=>chunks.push(e.data);mediaRecorder.onstop=()=>{const url=URL.createObjectURL(new Blob(chunks,{type:mediaRecorder.mimeType}));$('#audioPlayback').src=url;$('#audioPlayback').hidden=false;stream.getTracks().forEach(t=>t.stop())};mediaRecorder.start();startRecognition();recordSeconds=0;$('#recordTime').textContent='00:00';$('#recordBtn').classList.add('recording');$('#recordLabel').textContent='正在录音并识别，90秒后自动停止';startTimer(90,'朗读时间',true);recordInterval=setInterval(()=>{recordSeconds++;$('#recordTime').textContent=`${String(Math.floor(recordSeconds/60)).padStart(2,'0')}:${String(recordSeconds%60).padStart(2,'0')}`},1000)}catch(e){toast('无法使用麦克风，请检查浏览器权限')}
}
function stopRecording(fromTimer=false){if(mediaRecorder?.state==='recording')mediaRecorder.stop();finishRecognition();clearInterval(recordInterval);if(!fromTimer)stopTimer();$('#recordBtn').classList.remove('recording');$('#recordLabel').textContent=fromTimer?'90秒结束，正在生成识别报告':'录音完成，正在生成识别报告'}
function savePracticeProgress({saveReading=false,saveQuestions=false,notify=false}={}){
  const previous=progress[current.id]||{},next={...previous,date:new Date().toISOString()};
  if(saveReading)Object.assign(next,{seconds:recordSeconds,score:Number($('#readingScore').textContent)||0,correct:Number($('#correctCount').textContent)||0,wrong:Number($('#wrongCount').textContent)||0,omitted:Number($('#omittedCount').textContent)||0,extra:Number($('#extraCount').textContent)||0,transcript:$('#recognizedText').textContent});
  if(saveQuestions)Object.assign(next,{questionScore:questionResults.reduce((sum,item)=>sum+(item?.points||0),0),questionResults});
  progress[current.id]=next;localStorage.setItem('readingProgress',JSON.stringify(progress));$('#doneCount').textContent=Object.keys(progress).length;renderList();scheduleCloudSync();if(notify)toast(cloudUser?'练习记录已保存并等待同步':'练习记录已保存在本机')
}

$('#speakBtn').onclick=speak;$('#stopSpeakBtn').onclick=stopSpeech;$('#rateRange').oninput=e=>$('#rateLabel').textContent=`${Number(e.target.value).toFixed(2)}×`;
$('#learningCardClose').onclick=closeLearningCard;
$('#vocabBookBtn').onclick=openVocabularyBook;$('#vocabBookClose').onclick=closeVocabularyBook;$('#vocabBookModal').addEventListener('click',event=>{if(event.target===$('#vocabBookModal'))closeVocabularyBook()});
$('#accountBtn').onclick=openAccountModal;$('#accountModalClose').onclick=closeAccountModal;$('#accountModal').addEventListener('click',e=>{if(e.target===$('#accountModal'))closeAccountModal()});
$('#loginBtn').onclick=()=>authenticate('login');$('#registerBtn').onclick=()=>authenticate('register');$('#logoutBtn').onclick=logout;$('#syncNowBtn').onclick=syncCloudData;
$('#authPassword').addEventListener('keydown',e=>{if(e.key==='Enter')authenticate('login')});$('#openAdminBtn').onclick=openAdmin;$('#adminModalClose').onclick=()=>$('#adminModal').hidden=true;$('#adminModal').addEventListener('click',e=>{if(e.target===$('#adminModal'))$('#adminModal').hidden=true});
$('#customBtn').onclick=()=>openCustomModal();$('#customModalClose').onclick=closeCustomModal;$('#customCancel').onclick=closeCustomModal;$('#createPracticeBtn').onclick=createCustomPractice;
$('#photoInput').onchange=e=>recognizePhoto(e.target.files?.[0]);$('#customModal').addEventListener('click',e=>{if(e.target===$('#customModal'))closeCustomModal()});
$('#removePhotoBtn').onclick=()=>clearPhotoSelection($('#ocrStatus').dataset.running==='true');
window.addEventListener('pagehide',()=>{if(ocrWorker)ocrWorker.terminate().catch(()=>{})});
$('#passageList').addEventListener('click',event=>{const edit=event.target.closest('[data-edit]'),remove=event.target.closest('[data-delete]'),submit=event.target.closest('[data-submit]');if(edit){editCustomArticle(edit.dataset.edit);return}if(remove){deleteCustomArticle(remove.dataset.delete);return}if(submit){submitArticle(submit.dataset.submit,submit);return}const card=event.target.closest('.passage-item');if(!card)return;event.preventDefault();openPassage(card.dataset.id)});
$('#passageText').addEventListener('click',e=>{const marked=e.target.closest('[data-mark-word]');if(marked&&wordMarkMode){toggleMarkedWord(marked);return}const word=e.target.closest('.word');if(word)showWordCard(word.textContent,word.getBoundingClientRect())});
$('#passageText').addEventListener('keydown',e=>{if(!['Enter',' '].includes(e.key))return;const marked=e.target.closest('[data-mark-word]');if(marked&&wordMarkMode){e.preventDefault();toggleMarkedWord(marked);return}if(e.target.matches('.word')){e.preventDefault();showWordCard(e.target.textContent,e.target.getBoundingClientRect())}});
document.addEventListener('click',event=>{const word=event.target.closest('[data-vocab-word]');if(word)speakWord(word.dataset.vocabWord)});
window.addEventListener('online',()=>{if(cloudUser)syncCloudData()});window.addEventListener('focus',()=>{if(cloudUser)syncCloudData()});document.addEventListener('visibilitychange',()=>{if(cloudUser&&!document.hidden)syncCloudData()});
$('#passageText').addEventListener('mouseup',handleTextSelection);$('#passageText').addEventListener('touchend',handleTextSelection);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLearningCard();closeCustomModal();closeAccountModal();closeVocabularyBook();$('#adminModal').hidden=true}});
document.addEventListener('pointerdown',e=>{const card=$('#learningCard');if(!card.hidden&&!card.contains(e.target)&&!e.target.closest?.('.word'))closeLearningCard()});
window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#practice/'))restorePracticeRoute();else if(!mediaRecorder||mediaRecorder.state!=='recording')document.body.classList.remove('practice-open')});
$('#prepBtn').onclick=startPreparation;$('#recordBtn').onclick=toggleRecord;
$('#backToLibraryBtn').onclick=showLibrary;$('#playQuestionBtn').onclick=playActiveQuestion;$('#answerRecordBtn').onclick=startAnswerRecording;$('#nextQuestionBtn').onclick=nextQuestion;
$$('a[href="#library"]').forEach(link=>link.onclick=event=>{event.preventDefault();showLibrary()});const aboutLink=$('a[href="#about"]');if(aboutLink)aboutLink.onclick=event=>{if(mediaRecorder?.state==='recording'||answerActive){event.preventDefault();toast('请先结束当前录音');return}document.body.classList.remove('practice-open')};$('.brand').onclick=event=>{event.preventDefault();if(mediaRecorder?.state==='recording'||answerActive){toast('请先结束当前录音');return}document.body.classList.remove('practice-open');location.hash='';window.scrollTo({top:0,behavior:'smooth'})};
$('#searchInput').oninput=renderList;$$('.chip').forEach(b=>b.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;renderList()});
$('#questionsToggle').onclick=()=>{const box=$('#questions');box.hidden=!box.hidden;$('#questionsToggle span:last-child').textContent=box.hidden?'＋':'−'};
$('#markPronunciationBtn').onclick=()=>beginWordMark('pronunciation');$('#markMeaningBtn').onclick=()=>beginWordMark('meaning');$('#finishWordMarkBtn').onclick=finishWordMark;
$('#favoriteBtn').onclick=()=>{favorites.has(current.id)?favorites.delete(current.id):favorites.add(current.id);localStorage.setItem('readingFavorites',JSON.stringify([...favorites]));selectPassage(current.id)};
$('#largerBtn').onclick=()=>{const e=$('#passageText'),n=Math.min(34,parseFloat(getComputedStyle(e).fontSize)+2);e.style.fontSize=n+'px'};
$('#smallerBtn').onclick=()=>{const e=$('#passageText'),n=Math.max(17,parseFloat(getComputedStyle(e).fontSize)-2);e.style.fontSize=n+'px'};
$('#focusBtn').onclick=()=>document.body.classList.toggle('focus');$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('readingTheme',document.body.classList.contains('dark')?'dark':'light')};
if(localStorage.getItem('readingTheme')==='dark')document.body.classList.add('dark');$('#totalCount').textContent=passages.length;$('#doneCount').textContent=Object.keys(progress).length;renderList();selectPassage(current.id);restorePracticeRoute();renderAccount();renderVocabularyBook();restoreSession();loadPublicLibrary();
