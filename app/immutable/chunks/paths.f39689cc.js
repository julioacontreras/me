import{n as c,s as _}from"./scheduler.e108d1fd.js";const e=[];function d(o,l=c){let i;const n=new Set;function r(t){if(_(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function g(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=l(r,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:g}}var u;const h=((u=globalThis.__sveltekit_1g55y1o)==null?void 0:u.base)??"/sveltekit-gh-pages";var a;const k=((a=globalThis.__sveltekit_1g55y1o)==null?void 0:a.assets)??h;export{k as a,h as b,d as w};