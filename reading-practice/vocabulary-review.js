// Shared, deterministic state rules for the vocabulary book.
window.VocabularyReview = {
  clean(input) {
    const result = {};
    if (!input || typeof input !== 'object' || Array.isArray(input)) return result;
    for (const [word, value] of Object.entries(input).slice(0, 10000)) {
      if (!/^[a-z0-9]{1,80}$/.test(word) || !value || typeof value !== 'object') continue;
      if (!['new','review','mastered'].includes(value.stage)) continue;
      const time = Date.parse(value.updatedAt);
      if (!Number.isFinite(time)) continue;
      const streak = Math.max(0, Math.min(3, Math.floor(Number(value.streak) || 0)));
      result[word] = { stage:value.stage, streak:value.stage==='mastered'?3:value.stage==='new'?0:Math.min(2,streak), updatedAt:new Date(time).toISOString() };
    }
    return result;
  },
  record(state, word) { return Object.hasOwn(state,word) ? state[word] : {stage:'new',streak:0,updatedAt:''}; },
  answer(previous, remembered, now = Date.now()) {
    const prior = previous || {stage:'new',streak:0,updatedAt:''};
    if (prior.stage === 'mastered') return {...prior};
    const streak = prior.stage==='review' && remembered ? prior.streak+1 : 0;
    // The first remembered answer introduces a word to review. The following
    // three consecutive remembered answers are the actual review streak.
    const stage = prior.stage==='new' ? (remembered?'review':'new') : (streak>=3?'mastered':'review');
    const updatedAt = new Date(Math.max(now, (Date.parse(prior.updatedAt)||0)+1)).toISOString();
    return {stage,streak:Math.min(3,streak),updatedAt};
  },
  merge(local, remote) {
    const merged = this.clean(local);
    for (const [word, record] of Object.entries(this.clean(remote))) {
      if (!Object.hasOwn(merged,word) || record.updatedAt > merged[word].updatedAt) merged[word] = record;
    }
    return merged;
  },
};
