import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {test} from 'node:test';
const source=readFileSync(new URL('../reading-practice/app.js',import.meta.url),'utf8');
test('public library shares concurrent requests, refreshes after expiry and keeps articles on failure',async()=>{
  let calls=0,fail=false,now=1000;
  const context=vm.createContext({Date:{now:()=>now},Promise,Set,Map,JSON,
    apiRequest:async()=>{calls++;if(fail)throw Error('offline');return {articles:[{id:'public',title:'Public',text:'Text'}]}},
    localStorage:{setItem(){}},$:()=>({textContent:''}),renderList(){},selectPassage(){},restorePracticeRoute(){}
  });
  vm.runInContext("let passages=[{id:'built-in'}],current=passages[0],publicPassageIds=new Set(),publicLibraryPromise=null,publicLibraryLoadedAt=0;",context);
  vm.runInContext(source.slice(source.indexOf('function loadPublicLibrary(){'),source.indexOf('async function openAdmin(){')),context);
  await vm.runInContext('Promise.all([loadPublicLibrary(),loadPublicLibrary()])',context);
  assert.equal(calls,1);
  assert.equal(vm.runInContext('passages.length',context),2);
  await vm.runInContext('loadPublicLibrary()',context);
  assert.equal(calls,1);
  now+=31000;fail=true;
  await vm.runInContext('loadPublicLibrary()',context);
  assert.equal(calls,2);
  assert.equal(vm.runInContext('passages.length',context),2);
});
test('cached public articles are installed before the initial directory render',()=>{
  const start=source.indexOf('const cachedPublicLibrary=');
  const end=source.indexOf('let ocrWorker',start);
  const context=vm.createContext({readLocalJson:()=>[{id:'cached',title:'Cached',text:'Text'}]});
  vm.runInContext('const passages=[];',context);
  vm.runInContext(source.slice(start,end),context);
  assert.equal(vm.runInContext('passages[0].id',context),'cached');
  assert.ok(end<source.lastIndexOf('renderList();selectPassage(current.id)'));
});
