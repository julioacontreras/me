import{n as c,s as _}from"./scheduler.b7db4573.js";const t=[];function d(i,l=c){let n;const o=new Set;function r(e){if(_(i,e)&&(i=e,n)){const b=!t.length;for(const s of o)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function u(e){r(e(i))}function p(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(n=l(r,u)||c),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:p}}var f;const g=((f=globalThis.__sveltekit_15p74eu)==null?void 0:f.base)??"/sveltekit-gh-pages";var a;const k=((a=globalThis.__sveltekit_15p74eu)==null?void 0:a.assets)??g;export{k as a,g as b,d as w};