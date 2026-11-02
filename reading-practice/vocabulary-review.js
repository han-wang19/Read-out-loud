window.VocabularyReview={
  stages:['new','review1','review2','review3','mastered'],
  day(now=Date.now()){const d=new Date(now);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`},
  clean(input){
    const result={};
    if(!input||typeof input!=='object'||Array.isArray(input))return result;
    for(const [word,value] of Object.entries(input).slice(0,10000)){
      if(!/^[a-z0-9]{1,80}$/.test(word)||!value||typeof value!=='object')continue;
      let stage=value.stage;
      if(stage==='review')stage=['review1','review2','review3'][Math.max(0,Math.min(2,Math.floor(Number(value.streak)||0)))];
      if(!['new','review1','review2','review3','mastered'].includes(stage)||!Number.isFinite(Date.parse(value.updatedAt)))continue;
      const validDate=d=>typeof d==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(d)&&Number.isFinite(Date.parse(d));
      result[word]={stage,updatedAt:new Date(value.updatedAt).toISOString(),enteredOn:validDate(value.enteredOn)?value.enteredOn:value.updatedAt.slice(0,10),lastAdvancedOn:validDate(value.lastAdvancedOn)?value.lastAdvancedOn:''};
    }
    return result;
  },
  record(state,word){return Object.hasOwn(state,word)?state[word]:{stage:'new',updatedAt:'',enteredOn:this.day(),lastAdvancedOn:''}},
  due(record,now=Date.now()){const today=this.day(now);return record.stage!=='mastered'&&record.lastAdvancedOn!==today&&(record.stage==='new'||record.enteredOn<today)},
  answer(prior,remembered,now=Date.now()){
    const today=this.day(now),index=this.stages.indexOf(prior.stage);
    if(remembered&&(index===4||prior.lastAdvancedOn===today))return {...prior};
    const next=remembered?Math.min(4,index+1):Math.max(0,index-1);
    return {...prior,stage:this.stages[next],enteredOn:next===index?prior.enteredOn:today,lastAdvancedOn:remembered?today:prior.lastAdvancedOn,updatedAt:new Date(Math.max(now,(Date.parse(prior.updatedAt)||0)+1)).toISOString()};
  },
  merge(local,remote){const result=this.clean(local);for(const [word,r] of Object.entries(this.clean(remote)))if(!Object.hasOwn(result,word)||r.updatedAt>result[word].updatedAt)result[word]=r;return result}
};
