var Me=Object.defineProperty,Be=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var de=(s,e,t)=>e in s?Me(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,U=(s,e)=>{for(var t in e||(e={}))Ne.call(e,t)&&de(s,t,e[t]);if(ce)for(var t of ce(e))Ee.call(e,t)&&de(s,t,e[t]);return s},j=(s,e)=>Be(s,De(e));import{r as H,o,c as d,b as k,f as y,i as P,j as p,k as ve,h as n,F as D,l as A,a as m,t as x,m as w,n as V,p as pe,q as T,w as M,s as he,v as L,d as Y,x as G,y as Ie,z as Pe,A as Re,B as q,C as J,D as z,E,G as fe,H as _e,u as me,g as B,I as He,J as Ae,T as be,K as O,L as ze,M as Q,N as Z,O as ge,P as ke,Q as $e,e as Oe,R as Le,S as Fe,U as K,V as ee,W as We,X as Ue,Y as je}from"./app.7f58545e.js";import{_ as Ve}from"./plugin-vue_export-helper.21dcd24c.js";const Ge={},qe={class:"theme-default-content custom"};function Ke(s,e){const t=H("Content");return o(),d("div",qe,[k(t)])}var Xe=Ve(Ge,[["render",Ke]]);const Ye={key:0,class:"features"},Je=y({setup(s){const e=P(),t=p(()=>ve(e.value.features)?e.value.features:[]);return(i,a)=>n(t).length?(o(),d("div",Ye,[(o(!0),d(D,null,A(n(t),f=>(o(),d("div",{key:f.title,class:"feature"},[m("h2",null,x(f.title),1),m("p",null,x(f.details),1)]))),128))])):w("",!0)}}),Qe=["innerHTML"],Ze=["textContent"],et=y({setup(s){const e=P(),t=p(()=>e.value.footer),i=p(()=>e.value.footerHtml);return(a,f)=>n(t)?(o(),d(D,{key:0},[n(i)?(o(),d("div",{key:0,class:"footer",innerHTML:n(t)},null,8,Qe)):(o(),d("div",{key:1,class:"footer",textContent:x(n(t))},null,8,Ze))],64)):w("",!0)}}),tt=["href","rel","target","aria-label"],nt=y({inheritAttrs:!1}),I=y(j(U({},nt),{props:{item:{type:Object,required:!0}},setup(s){const e=s,t=V(),i=Re(),{item:a}=pe(e),f=p(()=>G(a.value.link)),b=p(()=>Ie(a.value.link)||Pe(a.value.link)),h=p(()=>{if(!b.value){if(a.value.target)return a.value.target;if(f.value)return"_blank"}}),r=p(()=>h.value==="_blank"),l=p(()=>!f.value&&!b.value&&!r.value),u=p(()=>{if(!b.value){if(a.value.rel)return a.value.rel;if(r.value)return"noopener noreferrer"}}),v=p(()=>a.value.ariaLabel||a.value.text),c=p(()=>{const $=Object.keys(i.value.locales);return $.length?!$.some(_=>_===a.value.link):a.value.link!=="/"}),g=p(()=>c.value?t.path.startsWith(a.value.link):!1),C=p(()=>l.value?a.value.activeMatch?new RegExp(a.value.activeMatch).test(t.path):g.value:!1);return($,_)=>{const S=H("RouterLink"),N=H("ExternalLinkIcon");return n(l)?(o(),T(S,he({key:0,class:["nav-link",{"router-link-active":n(C)}],to:n(a).link,"aria-label":n(v)},$.$attrs),{default:M(()=>[L($.$slots,"before"),Y(" "+x(n(a).text)+" ",1),L($.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),d("a",he({key:1,class:"nav-link external",href:n(a).link,rel:n(u),target:n(h),"aria-label":n(v)},$.$attrs),[L($.$slots,"before"),Y(" "+x(n(a).text)+" ",1),n(r)?(o(),T(N,{key:0})):w("",!0),L($.$slots,"after")],16,tt))}}})),at={class:"hero"},st={key:0,id:"main-title"},rt={key:1,class:"description"},ot={key:2,class:"actions"},lt=y({setup(s){const e=P(),t=q(),i=J(),a=p(()=>i.value&&e.value.heroImageDark!==void 0?e.value.heroImageDark:e.value.heroImage),f=p(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),b=p(()=>e.value.heroAlt||f.value||"hero"),h=p(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),r=p(()=>ve(e.value.actions)?e.value.actions.map(({text:u,link:v,type:c="primary"})=>({text:u,link:v,type:c})):[]),l=()=>{if(!a.value)return null;const u=E("img",{src:fe(a.value),alt:b.value});return e.value.heroImageDark===void 0?u:E(_e,u)};return(u,v)=>(o(),d("header",at,[k(l),n(f)?(o(),d("h1",st,x(n(f)),1)):w("",!0),n(h)?(o(),d("p",rt,x(n(h)),1)):w("",!0),n(r).length?(o(),d("p",ot,[(o(!0),d(D,null,A(n(r),c=>(o(),T(I,{key:c.text,class:z(["action-button",[c.type]]),item:c},null,8,["class","item"]))),128))])):w("",!0)]))}}),ut={class:"home"},it=y({setup(s){return(e,t)=>(o(),d("main",ut,[k(lt),k(Je),k(Xe),k(et)]))}}),ct=y({setup(s){const e=me(),t=q(),i=B(),a=J(),f=p(()=>i.value.home||e.value),b=p(()=>t.value.title),h=p(()=>a.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),r=()=>{if(!h.value)return null;const l=E("img",{class:"logo",src:fe(h.value),alt:b.value});return i.value.logoDark===void 0?l:E(_e,l)};return(l,u)=>{const v=H("RouterLink");return o(),T(v,{to:n(f)},{default:M(()=>[k(r),n(b)?(o(),d("span",{key:0,class:z(["site-name",{"can-hide":n(h)}])},x(n(b)),3)):w("",!0)]),_:1},8,["to"])}}}),ye=s=>!G(s)||/github\.com/.test(s)?"GitHub":/bitbucket\.org/.test(s)?"Bitbucket":/gitlab\.com/.test(s)?"GitLab":/gitee\.com/.test(s)?"Gitee":null,dt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},vt=({docsRepo:s,editLinkPattern:e})=>{if(e)return e;const t=ye(s);return t!==null?dt[t]:null},pt=({docsRepo:s,docsBranch:e,docsDir:t,filePathRelative:i,editLinkPattern:a})=>{if(!i)return null;const f=vt({docsRepo:s,editLinkPattern:a});return f?f.replace(/:repo/,G(s)?s:`https://github.com/${s}`).replace(/:branch/,e).replace(/:path/,He(`${Ae(t)}/${i}`)):null},ht=y({setup(s){const e=i=>{i.style.height=i.scrollHeight+"px"},t=i=>{i.style.height=""};return(i,a)=>(o(),T(be,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:M(()=>[L(i.$slots,"default")]),_:3}))}}),ft=["aria-label"],_t={class:"title"},mt=m("span",{class:"arrow down"},null,-1),bt=["aria-label"],gt={class:"title"},kt={class:"nav-dropdown"},$t={class:"dropdown-subtitle"},Lt={key:1},yt={class:"dropdown-subitem-wrapper"},wt=y({props:{item:{type:Object,required:!0}},setup(s){const e=s,{item:t}=pe(e),i=p(()=>t.value.ariaLabel||t.value.text),a=O(!1),f=V();ze(()=>f.path,()=>{a.value=!1});const b=r=>{r.detail===0?a.value=!a.value:a.value=!1},h=(r,l)=>l[l.length-1]===r;return(r,l)=>(o(),d("div",{class:z(["dropdown-wrapper",{open:a.value}])},[m("button",{class:"dropdown-title",type:"button","aria-label":n(i),onClick:b},[m("span",_t,x(n(t).text),1),mt],8,ft),m("button",{class:"mobile-dropdown-title",type:"button","aria-label":n(i),onClick:l[0]||(l[0]=u=>a.value=!a.value)},[m("span",gt,x(n(t).text),1),m("span",{class:z(["arrow",a.value?"down":"right"])},null,2)],8,bt),k(ht,null,{default:M(()=>[Q(m("ul",kt,[(o(!0),d(D,null,A(n(t).children,(u,v)=>(o(),d("li",{key:u.link||v,class:"dropdown-item"},[u.children?(o(),d(D,{key:0},[m("h4",$t,[u.link?(o(),T(I,{key:0,item:u,onFocusout:c=>h(u,n(t).children)&&u.children.length===0&&(a.value=!1)},null,8,["item","onFocusout"])):(o(),d("span",Lt,x(u.text),1))]),m("ul",yt,[(o(!0),d(D,null,A(u.children,c=>(o(),d("li",{key:c.link,class:"dropdown-subitem"},[k(I,{item:c,onFocusout:g=>h(c,u.children)&&h(u,n(t).children)&&(a.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),T(I,{key:1,item:u,onFocusout:c=>h(u,n(t).children)&&(a.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Z,a.value]])]),_:1})],2))}}),Ct={key:0,class:"navbar-links"},we=y({setup(s){const e=()=>{const l=ge(),u=me(),v=q(),c=B();return p(()=>{var S,N;const g=Object.keys(v.value.locales);if(g.length<2)return[];const C=l.currentRoute.value.path,$=l.currentRoute.value.fullPath;return[{text:(S=c.value.selectLanguageText)!=null?S:"unkown language",ariaLabel:(N=c.value.selectLanguageAriaLabel)!=null?N:"unkown language",children:g.map(R=>{var ae,se,re,oe,le,ue;const F=(se=(ae=v.value.locales)==null?void 0:ae[R])!=null?se:{},te=(oe=(re=c.value.locales)==null?void 0:re[R])!=null?oe:{},ne=`${F.lang}`,Te=(le=te.selectLanguageName)!=null?le:ne;let W;if(ne===v.value.lang)W=$;else{const ie=C.replace(u.value,R);l.getRoutes().some(Se=>Se.path===ie)?W=ie:W=(ue=te.home)!=null?ue:R}return{text:Te,link:W}})}]})},t=()=>{const l=B(),u=p(()=>l.value.repo),v=p(()=>u.value?ye(u.value):null),c=p(()=>u.value&&!G(u.value)?`https://github.com/${u.value}`:u.value),g=p(()=>c.value?l.value.repoLabel?l.value.repoLabel:v.value===null?"Source":v.value:null);return p(()=>!c.value||!g.value?[]:[{text:g.value,link:c.value}])},i=l=>ke(l)?$e(l):l.children?j(U({},l),{children:l.children.map(i)}):l,f=(()=>{const l=B();return p(()=>(l.value.navbar||[]).map(i))})(),b=e(),h=t(),r=p(()=>[...f.value,...b.value,...h.value]);return(l,u)=>n(r).length?(o(),d("nav",Ct,[(o(!0),d(D,null,A(n(r),v=>(o(),d("div",{key:v.text,class:"navbar-links-item"},[v.children?(o(),T(wt,{key:0,item:v},null,8,["item"])):(o(),T(I,{key:1,item:v},null,8,["item"]))]))),128))])):w("",!0)}}),xt=["title"],Tt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},St=Oe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Mt=[St],Bt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Dt=m("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Nt=[Dt],Et=y({setup(s){const e=B(),t=J(),i=()=>{t.value=!t.value};return(a,f)=>(o(),d("button",{class:"toggle-dark-button",title:n(e).toggleDarkMode,onClick:i},[Q((o(),d("svg",Tt,Mt,512)),[[Z,!n(t)]]),Q((o(),d("svg",Bt,Nt,512)),[[Z,n(t)]])],8,xt))}}),It=["title"],Pt=m("div",{class:"icon","aria-hidden":"true"},[m("span"),m("span"),m("span")],-1),Rt=[Pt],Ht=y({emits:["toggle"],setup(s){const e=B();return(t,i)=>(o(),d("div",{class:"toggle-sidebar-button",title:n(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=a=>t.$emit("toggle"))},Rt,8,It))}}),At=y({emits:["toggle-sidebar"],setup(s){const e=B(),t=O(null),i=O(null),a=O(0),f=p(()=>a.value?{maxWidth:a.value+"px"}:{}),b=p(()=>e.value.darkMode);Le(()=>{const r=719,l=h(t.value,"paddingLeft")+h(t.value,"paddingRight"),u=()=>{var v;window.innerWidth<=r?a.value=0:a.value=t.value.offsetWidth-l-(((v=i.value)==null?void 0:v.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(r,l){var c,g,C;const u=(C=(g=(c=r==null?void 0:r.ownerDocument)==null?void 0:c.defaultView)==null?void 0:g.getComputedStyle(r,null))==null?void 0:C[l],v=Number.parseInt(u,10);return Number.isNaN(v)?0:v}return(r,l)=>{const u=H("NavbarSearch");return o(),d("header",{ref_key:"navbar",ref:t,class:"navbar"},[k(Ht,{onToggle:l[0]||(l[0]=v=>r.$emit("toggle-sidebar"))}),m("span",{ref_key:"navbarBrand",ref:i},[k(ct)],512),m("div",{class:"navbar-links-wrapper",style:Fe(n(f))},[L(r.$slots,"before"),k(we,{class:"can-hide"}),L(r.$slots,"after"),n(b)?(o(),T(Et,{key:0})):w("",!0),k(u)],4)],512)}}}),zt={class:"page-meta"},Ot={key:0,class:"meta-item edit-link"},Ft={key:1,class:"meta-item last-updated"},Wt={class:"meta-item-label"},Ut={class:"meta-item-info"},jt={key:2,class:"meta-item contributors"},Vt={class:"meta-item-label"},Gt={class:"meta-item-info"},qt=["title"],Kt=Y(", "),Xt=y({setup(s){const e=()=>{const r=B(),l=K(),u=P();return p(()=>{var N,R,F;if(!((R=(N=u.value.editLink)!=null?N:r.value.editLink)!=null?R:!0))return null;const{repo:c,docsRepo:g=c,docsBranch:C="main",docsDir:$="",editLinkText:_}=r.value;if(!g)return null;const S=pt({docsRepo:g,docsBranch:C,docsDir:$,filePathRelative:l.value.filePathRelative,editLinkPattern:(F=u.value.editLinkPattern)!=null?F:r.value.editLinkPattern});return S?{text:_!=null?_:"Edit this page",link:S}:null})},t=()=>{q();const r=B(),l=K(),u=P();return p(()=>{var g,C,$,_;return!((C=(g=u.value.lastUpdated)!=null?g:r.value.lastUpdated)!=null?C:!0)||!(($=l.value.git)==null?void 0:$.updatedTime)?null:new Date((_=l.value.git)==null?void 0:_.updatedTime).toLocaleString()})},i=()=>{const r=B(),l=K(),u=P();return p(()=>{var c,g,C,$;return((g=(c=u.value.contributors)!=null?c:r.value.contributors)!=null?g:!0)&&($=(C=l.value.git)==null?void 0:C.contributors)!=null?$:null})},a=B(),f=e(),b=t(),h=i();return(r,l)=>{const u=H("ClientOnly");return o(),d("footer",zt,[n(f)?(o(),d("div",Ot,[k(I,{class:"meta-item-label",item:n(f)},null,8,["item"])])):w("",!0),n(b)?(o(),d("div",Ft,[m("span",Wt,x(n(a).lastUpdatedText)+": ",1),k(u,null,{default:M(()=>[m("span",Ut,x(n(b)),1)]),_:1})])):w("",!0),n(h)&&n(h).length?(o(),d("div",jt,[m("span",Vt,x(n(a).contributorsText)+": ",1),m("span",Gt,[(o(!0),d(D,null,A(n(h),(v,c)=>(o(),d(D,{key:c},[m("span",{class:"contributor",title:`email: ${v.email}`},x(v.name),9,qt),c!==n(h).length-1?(o(),d(D,{key:0},[Kt],64)):w("",!0)],64))),128))])])):w("",!0)])}}}),Yt={key:0,class:"page-nav"},Jt={class:"inner"},Qt={key:0,class:"prev"},Zt={key:1,class:"next"},en=y({setup(s){const e=r=>r===!1?null:ke(r)?$e(r):We(r)?r:!1,t=(r,l,u)=>{const v=r.findIndex(c=>c.link===l);if(v!==-1){const c=r[v+u];return(c==null?void 0:c.link)?c:null}for(const c of r)if(c.children){const g=t(c.children,l,u);if(g)return g}return null},i=P(),a=ee(),f=V(),b=p(()=>{const r=e(i.value.prev);return r!==!1?r:t(a.value,f.path,-1)}),h=p(()=>{const r=e(i.value.next);return r!==!1?r:t(a.value,f.path,1)});return(r,l)=>n(b)||n(h)?(o(),d("nav",Yt,[m("p",Jt,[n(b)?(o(),d("span",Qt,[k(I,{item:n(b)},null,8,["item"])])):w("",!0),n(h)?(o(),d("span",Zt,[k(I,{item:n(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}}),tn={class:"page"},nn={class:"theme-default-content"},an=y({setup(s){return(e,t)=>{const i=H("Content");return o(),d("main",tn,[L(e.$slots,"top"),m("div",nn,[k(i)]),k(Xt),k(en),L(e.$slots,"bottom")])}}}),Ce=s=>decodeURI(s).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),sn=(s,e)=>{if(e===void 0)return!1;if(s.hash===e)return!0;const t=Ce(s.path),i=Ce(e);return t===i},xe=(s,e)=>sn(s,e.link)?!0:e.children?e.children.some(t=>xe(s,t)):!1,rn=(s,e)=>s.link?E(I,j(U({},e),{item:s})):E("p",e,s.text),on=(s,e)=>{var t;return((t=s.children)===null||t===void 0?void 0:t.length)?E("ul",{class:{"sidebar-sub-items":e>0}},s.children.map(i=>E("li",E(X,{item:i,depth:e+1})))):null},X=({item:s,depth:e=0})=>{const t=V(),i=xe(t,s);return[rn(s,{class:{"sidebar-heading":e===0,"sidebar-item":!0,active:i}}),on(s,e)]};X.displayName="SidebarChild";X.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const ln={class:"sidebar"},un={class:"sidebar-links"},cn=y({setup(s){const e=ee();return(t,i)=>(o(),d("aside",ln,[k(we),L(t.$slots,"top"),m("ul",un,[(o(!0),d(D,null,A(n(e),a=>(o(),T(n(X),{key:a.link||a.text,item:a},null,8,["item"]))),128))]),L(t.$slots,"bottom")]))}}),hn=y({setup(s){const e=K(),t=P(),i=B(),a=p(()=>t.value.navbar!==!1&&i.value.navbar!==!1),f=ee(),b=O(!1),h=_=>{b.value=typeof _=="boolean"?_:!b.value},r={x:0,y:0},l=_=>{r.x=_.changedTouches[0].clientX,r.y=_.changedTouches[0].clientY},u=_=>{const S=_.changedTouches[0].clientX-r.x,N=_.changedTouches[0].clientY-r.y;Math.abs(S)>Math.abs(N)&&Math.abs(S)>40&&(S>0&&r.x<=80?h(!0):h(!1))},v=p(()=>[{"no-navbar":!a.value,"no-sidebar":!f.value.length,"sidebar-open":b.value},t.value.pageClass]);let c;Le(()=>{c=ge().afterEach(()=>{h(!1)})}),Ue(()=>{c()});const g=je(),C=g.resolve,$=g.pending;return(_,S)=>(o(),d("div",{class:z(["theme-container",n(v)]),onTouchstart:l,onTouchend:u},[L(_.$slots,"navbar",{},()=>[n(a)?(o(),T(At,{key:0,onToggleSidebar:h},{before:M(()=>[L(_.$slots,"navbar-before")]),after:M(()=>[L(_.$slots,"navbar-after")]),_:3})):w("",!0)]),m("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=N=>h(!1))}),L(_.$slots,"sidebar",{},()=>[k(cn,null,{top:M(()=>[L(_.$slots,"sidebar-top")]),bottom:M(()=>[L(_.$slots,"sidebar-bottom")]),_:3})]),L(_.$slots,"page",{},()=>[n(t).home?(o(),T(it,{key:0})):(o(),T(be,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:n(C),onBeforeLeave:n($)},{default:M(()=>[(o(),T(an,{key:n(e).path},{top:M(()=>[L(_.$slots,"page-top")]),bottom:M(()=>[L(_.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{hn as default};
