var re=Object.defineProperty;var le=(r,e,n)=>e in r?re(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var W=(r,e,n)=>(le(r,typeof e!="symbol"?e+"":e,n),n);import{s as P,n as D,o as V,i as ie,c as oe,u as ce,g as ue,d as fe}from"../chunks/scheduler.e108d1fd.js";import{S as $,i as C,g as m,h as g,j as d,f as c,k as E,a as b,x as he,m as J,n as Y,y as _,z as p,A as j,o as q,r as k,s as B,u as N,c as F,v as U,d as S,t as I,w as H,b as me,p as ge}from"../chunks/index.255c5610.js";import{_ as de}from"../chunks/preload-helper.a4192956.js";import{w as ae,b as Z}from"../chunks/paths.f39689cc.js";import{s as _e,E as Ee,i as R}from"../chunks/index.57a31824.js";import{e as X}from"../chunks/each.e59479a4.js";const pe=!0,Se="always",tt=Object.freeze(Object.defineProperty({__proto__:null,prerender:pe,trailingSlash:Se},Symbol.toStringTag,{value:"Module"}));class be{log(e){console.log(e)}}const ve=new be;ve.log("Log infrastructure loaded!");let L;function Ie(r){L=r}class Te{findInDocument(e){return document.querySelector(e)}findValueInDocument(e){const n=this.findInDocument(e);return n?n.value:""}replaceUrlParams(e){const n=new URL(window.location.toString());for(const[s,a]of Object.entries(e))n.searchParams.set(encodeURIComponent(s),encodeURIComponent(a));history.replaceState({},"",n)}getUrlParams(e){const n=new URL(window.location.toString()),s={};return e.forEach(a=>{s[a]=n.searchParams.get(a)}),s}getUrlHost(){return window.location.pathname}}Ie(new Te);const De={"general.app":"Julio Contreras Portfolio","general.home":"Home","general.skills":"Skills","general.services":"Services","general.contact":"Contact","general.menu":[{id:"home",href:"/",title:"Home",classes:"default"},{id:"services",href:"/services/",title:"Services",classes:"default"},{id:"skills",href:"/skills/",title:"Skills",classes:"default"}],"services.title":"CUSTOM DEVELOPMENT","services.subtitle":"CREATION OF CUSTOMIZED APPLICATIONS AND SERVICES.","services.list":[{title:"Frontend",items:["SOFTWARE ARCHITECTURE","FRONTENDS & MICRO FRONTENDS","API & MICRO SERVICES"]}],"skills.list":[{title:"Frontend",items:["SVELTE","VUE, VUE 3","REACT","SOLID JS","JAVASCRIPT","HTML","CSS","TYPESCRIPT"]},{title:"Backend",items:["DDD","MONGO DB","REDIS","QUEUE MESSAGES","MYSQL","POSTGRE SQL","PYTHON","GRAPH QL","SQL"]},{title:"General",items:["NODE JS","BUN","GIT"]}]},Oe={"general.app":"Julio Contreras Portfolio","general.home":"Home","general.skills":"Habilidads","general.services":"Servicios","general.contact":"Contacto","general.menu":[{id:"home",href:"/",title:"Home",classes:"default"},{id:"services",href:"/services/",title:"Servicios",classes:"default"},{id:"skills",href:"/skills/",title:"Habilidads",classes:"default"}],"services.title":"DESARROLLO SOB MEDIDA","services.subtitle":"CREACIÓN DE APLICACIONES Y SERVICIOS SOB MEDIDA.","services.list":[{title:"Frontend",items:["ARQUITECTURA DE SOFTWARE","FRONTENDS & MICRO FRONTENDS","API & MICRO SERVICES"]}],"skills.list":[{title:"Frontend",items:["SVELTE","VUE, VUE 3","REACT","SOLID JS","JAVASCRIPT","HTML","CSS","TYPESCRIPT"]},{title:"Backend",items:["DDD","MONGO DB","REDIS","QUEUE MESSAGES","MYSQL","POSTGRE SQL","PYTHON","GRAPH QL","SQL"]},{title:"General",items:["NODE JS","BUN","GIT"]}]},Q={en:De,es:Oe},x=ae(Q.es);class Re{constructor(){W(this,"lang","")}subscribe(e){x.subscribe(e)}setLang(e){if(this.lang=e,!Q[e])throw new Error(Ee.ERROR_NOT_FOUND_DICTIONARY);x.set(Q[e])}getLang(){return this.lang}async getDefaultLang(){return(await de(()=>import("../chunks/getDefaultLang.3147b379.js"),[],import.meta.url)).getDefaultLang()}}const Le=new Re;_e(Le);let T;function Pe(r){T=r}const $e={lang:"",theme:"",activePage:""},ee=ae($e);class Ce{subscribe(e){ee.subscribe(e)}set(e){ee.set(e)}}Pe(new Ce);function te(r,e,n){const s=r.slice();return s[5]=e[n],s}function se(r){let e,n=r[5].title+"",s,a,l,t;return{c(){e=m("a"),s=J(n),this.h()},l(i){e=g(i,"A",{href:!0,class:!0});var o=d(e);s=Y(o,n),o.forEach(c),this.h()},h(){E(e,"href",a=Z+r[5].href+"?"+r[3]+"&"+r[2]),E(e,"class","link-navbar"),_(e,"active",r[0].activePage===r[5].href)},m(i,o){b(i,e,o),p(e,s),l||(t=j(e,"click",function(){ie(r[4](r[5].href))&&r[4](r[5].href).apply(this,arguments)}),l=!0)},p(i,o){r=i,o&2&&n!==(n=r[5].title+"")&&q(s,n),o&14&&a!==(a=Z+r[5].href+"?"+r[3]+"&"+r[2])&&E(e,"href",a),o&3&&_(e,"active",r[0].activePage===r[5].href)},d(i){i&&c(e),l=!1,t()}}}function we(r){let e,n=X(r[1]["general.menu"]),s=[];for(let a=0;a<n.length;a+=1)s[a]=se(te(r,n,a));return{c(){e=m("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var l=d(e);for(let t=0;t<s.length;t+=1)s[t].l(l);l.forEach(c),this.h()},h(){E(e,"class","navbar stack-width-full")},m(a,l){b(a,e,l);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(a,[l]){if(l&31){n=X(a[1]["general.menu"]);let t;for(t=0;t<n.length;t+=1){const i=te(a,n,t);s[t]?s[t].p(i,l):(s[t]=se(i),s[t].c(),s[t].m(e,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=n.length}},i:D,o:D,d(a){a&&c(e),he(s,a)}}}function Ae(r,e,n){let s,a,l={};R.subscribe(o=>{n(1,l=o)});let t={};T.subscribe(o=>{n(0,t=o)});const i=o=>(n(0,t.activePage=o,t),null);return V(()=>{n(0,t.activePage=L.getUrlHost(),t)}),r.$$.update=()=>{r.$$.dirty&1&&n(3,s=t.lang?`lang=${t.lang}`:""),r.$$.dirty&1&&n(2,a=t.theme?`theme=${t.theme}`:"")},[t,l,a,s,i]}class ke extends ${constructor(e){super(),C(this,e,Ae,we,P,{})}}const y="en",Ne="es",Ue="🇺🇸",He="🇪🇸",G="light",M="dark",Me=M,f="🌞",h="🌙";function Ve(r){let e,n,s,a;return{c(){e=m("button"),n=J(r[1]),this.h()},l(l){e=g(l,"BUTTON",{class:!0});var t=d(e);n=Y(t,r[1]),t.forEach(c),this.h()},h(){E(e,"class","btn btn-lang"),_(e,"btn-light",r[0]===h),_(e,"btn-dark",r[0]===f)},m(l,t){b(l,e,t),p(e,n),s||(a=j(e,"click",r[2]),s=!0)},p(l,[t]){t&2&&q(n,l[1]),t&1&&_(e,"btn-light",l[0]===h),t&1&&_(e,"btn-dark",l[0]===f)},i:D,o:D,d(l){l&&c(e),s=!1,a()}}}function ye(r,e,n){let s,a=h;R.subscribe(o=>{});let l={};T.subscribe(o=>{l=o});let t=R.getLang();const i=()=>{n(3,t=t===y?Ne:y),R.setLang(t),L.replaceUrlParams({lang:t}),l.lang=t,T.set(l)};return V(async()=>{const o=L.getUrlParams(["lang","theme"]);n(3,t=o.lang?o.lang.toString():await R.getDefaultLang()),n(0,a=o.theme===M?h:f),R.setLang(t),l.lang=t,T.set(l)}),r.$$.update=()=>{r.$$.dirty&8&&n(1,s=t===y?He:Ue)},[a,s,i,t]}class Ge extends ${constructor(e){super(),C(this,e,ye,Ve,P,{})}}function Be(r){let e,n,s,a;return{c(){e=m("button"),n=J(r[1]),this.h()},l(l){e=g(l,"BUTTON",{class:!0});var t=d(e);n=Y(t,r[1]),t.forEach(c),this.h()},h(){E(e,"class","btn btn-theme"),_(e,"btn-light",r[0]===h),_(e,"btn-dark",r[0]===f)},m(l,t){b(l,e,t),p(e,n),s||(a=j(e,"click",r[2]),s=!0)},p(l,[t]){t&2&&q(n,l[1]),t&1&&_(e,"btn-light",l[0]===h),t&1&&_(e,"btn-dark",l[0]===f)},i:D,o:D,d(l){l&&c(e),s=!1,a()}}}function Fe(r,e,n){let s,a={};T.subscribe(o=>{a=o});let l=Me;const t=()=>{l===h?window.document.body.classList.remove("theme-light"):window.document.body.classList.add("theme-light"),a.theme=l===f?G:M,T.set(a)},i=()=>{n(0,l=l===f?h:f),t(),L.replaceUrlParams({theme:l===h?M:G})};return V(async()=>{const o=L.getUrlParams(["theme"]);n(0,l=o.theme===G?f:h),t()}),r.$$.update=()=>{r.$$.dirty&1&&n(1,s=l===f?h:f)},[l,s,i]}class Qe extends ${constructor(e){super(),C(this,e,Fe,Be,P,{})}}function Je(r){let e,n,s,a,l,t,i,o,v,w;return n=new ke({}),t=new Ge({}),v=new Qe({}),{c(){e=m("div"),k(n.$$.fragment),s=B(),a=m("div"),l=m("div"),k(t.$$.fragment),i=B(),o=m("div"),k(v.$$.fragment),this.h()},l(u){e=g(u,"DIV",{class:!0});var O=d(e);N(n.$$.fragment,O),s=F(O),a=g(O,"DIV",{class:!0});var A=d(a);l=g(A,"DIV",{});var z=d(l);N(t.$$.fragment,z),z.forEach(c),i=F(A),o=g(A,"DIV",{});var K=d(o);N(v.$$.fragment,K),K.forEach(c),A.forEach(c),O.forEach(c),this.h()},h(){E(a,"class","stack stack-drection-row stack-width-fit"),E(e,"class","stack stack-drection-row stack-gap-lg stack-width-full")},m(u,O){b(u,e,O),U(n,e,null),p(e,s),p(e,a),p(a,l),U(t,l,null),p(a,i),p(a,o),U(v,o,null),w=!0},p:D,i(u){w||(S(n.$$.fragment,u),S(t.$$.fragment,u),S(v.$$.fragment,u),w=!0)},o(u){I(n.$$.fragment,u),I(t.$$.fragment,u),I(v.$$.fragment,u),w=!1},d(u){u&&c(e),H(n),H(t),H(v)}}}class Ye extends ${constructor(e){super(),C(this,e,null,Je,P,{})}}function ne(r){let e,n,s,a;n=new Ye({});const l=r[2].default,t=oe(l,r,r[1],null);return{c(){e=m("div"),k(n.$$.fragment),s=B(),t&&t.c(),this.h()},l(i){e=g(i,"DIV",{class:!0});var o=d(e);N(n.$$.fragment,o),o.forEach(c),s=F(i),t&&t.l(i),this.h()},h(){E(e,"class","container")},m(i,o){b(i,e,o),U(n,e,null),b(i,s,o),t&&t.m(i,o),a=!0},p(i,o){t&&t.p&&(!a||o&2)&&ce(t,l,i,i[1],a?fe(l,i[1],o,null):ue(i[1]),null)},i(i){a||(S(n.$$.fragment,i),S(t,i),a=!0)},o(i){I(n.$$.fragment,i),I(t,i),a=!1},d(i){i&&(c(e),c(s)),H(n),t&&t.d(i)}}}function je(r){let e,n,s=r[0]&&ne(r);return{c(){e=m("div"),s&&s.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var l=d(e);s&&s.l(l),l.forEach(c),this.h()},h(){E(e,"class","app")},m(a,l){b(a,e,l),s&&s.m(e,null),n=!0},p(a,[l]){a[0]?s?(s.p(a,l),l&1&&S(s,1)):(s=ne(a),s.c(),S(s,1),s.m(e,null)):s&&(ge(),I(s,1,1,()=>{s=null}),me())},i(a){n||(S(s),n=!0)},o(a){I(s),n=!1},d(a){a&&c(e),s&&s.d()}}}function qe(r,e,n){let s,{$$slots:a={},$$scope:l}=e;return V(async()=>{n(0,s=!0)}),r.$$set=t=>{"$$scope"in t&&n(1,l=t.$$scope)},n(0,s=!1),[s,l,a]}class st extends ${constructor(e){super(),C(this,e,qe,je,P,{})}}export{st as component,tt as universal};
