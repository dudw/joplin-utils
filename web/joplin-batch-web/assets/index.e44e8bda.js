import{Q as er,c as ee,r as n,_,S as rr,n as xe,f as te,a as I,U as tr,V as ne,W as ar,k as Ce,A as nr,d as Le,X as or,Y as lr,Z as ir,$ as Ne,i as U,O as sr,a0 as Pe,a1 as cr,w as Te,h as ur,x as mr,a2 as ke,a3 as fr,a4 as dr,a5 as vr,a6 as pr,o as K,a7 as gr,s as hr,J as xr,y as Cr,a8 as br,a9 as yr,aa as Fr,ab as wr,N as Er,ac as _r,ad as Sr,ae as Nr}from"./index.edaecf24.js";import{a as He,R as Ir}from"./index.1756fe8e.js";function $e(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Ve(e,r){return(!r||e!=="hidden")&&e!=="visible"&&e!=="clip"}function _e(e,r){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var a=getComputedStyle(e,null);return Ve(a.overflowY,r)||Ve(a.overflowX,r)||function(t){var o=function(l){if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch{return null}}(t);return!!o&&(o.clientHeight<t.scrollHeight||o.clientWidth<t.scrollWidth)}(e)}return!1}function he(e,r,a,t,o,l,i,c){return l<e&&i>r||l>e&&i<r?0:l<=e&&c<=a||i>=r&&c>=a?l-e-t:i>r&&c<a||l<e&&c>a?i-r+o:0}function je(e,r){var a=window,t=r.scrollMode,o=r.block,l=r.inline,i=r.boundary,c=r.skipOverflowHiddenElements,m=typeof i=="function"?i:function(pe){return pe!==i};if(!$e(e))throw new TypeError("Invalid target");for(var v=document.scrollingElement||document.documentElement,p=[],u=e;$e(u)&&m(u);){if((u=u.parentElement)===v){p.push(u);break}u!=null&&u===document.body&&_e(u)&&!_e(document.documentElement)||u!=null&&_e(u,c)&&p.push(u)}for(var s=a.visualViewport?a.visualViewport.width:innerWidth,h=a.visualViewport?a.visualViewport.height:innerHeight,F=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,d=e.getBoundingClientRect(),O=d.height,x=d.width,R=d.top,V=d.right,P=d.bottom,T=d.left,C=o==="start"||o==="nearest"?R:o==="end"?P:R+O/2,w=l==="center"?T+x/2:l==="end"?V:T,H=[],E=0;E<p.length;E++){var b=p[E],j=b.getBoundingClientRect(),W=j.height,k=j.width,$=j.top,S=j.right,D=j.bottom,M=j.left;if(t==="if-needed"&&R>=0&&T>=0&&P<=h&&V<=s&&R>=$&&P<=D&&T>=M&&V<=S)return H;var X=getComputedStyle(b),Z=parseInt(X.borderLeftWidth,10),J=parseInt(X.borderTopWidth,10),ae=parseInt(X.borderRightWidth,10),B=parseInt(X.borderBottomWidth,10),q=0,N=0,oe="offsetWidth"in b?b.offsetWidth-b.clientWidth-Z-ae:0,le="offsetHeight"in b?b.offsetHeight-b.clientHeight-J-B:0;if(v===b)q=o==="start"?C:o==="end"?C-h:o==="nearest"?he(f,f+h,h,J,B,f+C,f+C+O,O):C-h/2,N=l==="start"?w:l==="center"?w-s/2:l==="end"?w-s:he(F,F+s,s,Z,ae,F+w,F+w+x,x),q=Math.max(0,q+f),N=Math.max(0,N+F);else{q=o==="start"?C-$-J:o==="end"?C-D+B+le:o==="nearest"?he($,D,W,J,B+le,C,C+O,O):C-($+W/2)+le/2,N=l==="start"?w-M-Z:l==="center"?w-(M+k/2)+oe/2:l==="end"?w-S+ae+oe:he(M,S,k,Z,ae+oe,w,w+x,x);var de=b.scrollLeft,ve=b.scrollTop;C+=ve-(q=Math.max(0,Math.min(ve+q,b.scrollHeight-W+le))),w+=de-(N=Math.max(0,Math.min(de+N,b.scrollWidth-k+oe)))}H.push({el:b,top:q,left:N})}return H}function De(e){return e===Object(e)&&Object.keys(e).length!==0}function Rr(e,r){r===void 0&&(r="auto");var a="scrollBehavior"in document.body.style;e.forEach(function(t){var o=t.el,l=t.top,i=t.left;o.scroll&&a?o.scroll({top:l,left:i,behavior:r}):(o.scrollTop=l,o.scrollLeft=i)})}function Or(e){return e===!1?{block:"end",inline:"nearest"}:De(e)?e:{block:"start",inline:"nearest"}}function Mr(e,r){var a=e.isConnected||e.ownerDocument.documentElement.contains(e);if(De(r)&&typeof r.behavior=="function")return r.behavior(a?je(e,r):[]);if(!!a){var t=Or(r);return Rr(je(e,t),t.behavior)}}var Lr=["parentNode"],Pr="form_item";function fe(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Qe(e,r){if(!!e.length){var a=e.join("_");if(r)return"".concat(r,"_").concat(a);var t=Lr.indexOf(a)>=0;return t?"".concat(Pr,"_").concat(a):a}}function qe(e){var r=fe(e);return r.join("_")}function Ue(e){var r=er(),a=ee(r,1),t=a[0],o=n.exports.useRef({}),l=n.exports.useMemo(function(){return e!=null?e:_(_({},t),{__INTERNAL__:{itemRef:function(c){return function(m){var v=qe(c);m?o.current[v]=m:delete o.current[v]}}},scrollToField:function(c){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=fe(c),p=Qe(v,l.__INTERNAL__.name),u=p?document.getElementById(p):null;u&&Mr(u,_({scrollMode:"if-needed",block:"nearest"},m))},getFieldInstance:function(c){var m=qe(c);return o.current[m]}})},[e,t]);return[l]}var Tr=globalThis&&globalThis.__rest||function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},kr=function(r,a){var t,o=n.exports.useContext(rr),l=n.exports.useContext(xe),i=l.getPrefixCls,c=l.direction,m=l.form,v=r.prefixCls,p=r.className,u=p===void 0?"":p,s=r.size,h=s===void 0?o:s,F=r.form,f=r.colon,d=r.labelAlign,O=r.labelWrap,x=r.labelCol,R=r.wrapperCol,V=r.hideRequiredMark,P=r.layout,T=P===void 0?"horizontal":P,C=r.scrollToFirstError,w=r.requiredMark,H=r.onFinishFailed,E=r.name,b=Tr(r,["prefixCls","className","size","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),j=n.exports.useMemo(function(){return w!==void 0?w:m&&m.requiredMark!==void 0?m.requiredMark:!V},[V,w,m]),W=f!=null?f:m==null?void 0:m.colon,k=i("form",v),$=te(k,(t={},I(t,"".concat(k,"-").concat(T),!0),I(t,"".concat(k,"-hide-required-mark"),j===!1),I(t,"".concat(k,"-rtl"),c==="rtl"),I(t,"".concat(k,"-").concat(h),h),t),u),S=Ue(F),D=ee(S,1),M=D[0],X=M.__INTERNAL__;X.name=E;var Z=n.exports.useMemo(function(){return{name:E,labelAlign:d,labelCol:x,labelWrap:O,wrapperCol:R,vertical:T==="vertical",colon:W,requiredMark:j,itemRef:X.itemRef,form:M}},[E,d,x,R,T,W,j,M]);n.exports.useImperativeHandle(a,function(){return M});var J=function(B){H==null||H(B);var q={block:"nearest"};C&&B.errorFields.length&&(Ce(C)==="object"&&(q=C),M.scrollToField(B.errorFields[0].name,q))};return n.exports.createElement(tr,{size:h},n.exports.createElement(ne.Provider,{value:Z},n.exports.createElement(ar,_({id:E},b,{name:E,onFinishFailed:J,form:M,className:$}))))},$r=n.exports.forwardRef(kr),Vr=$r,jr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},qr=jr,Be=function(r,a){return n.exports.createElement(nr,Le(Le({},r),{},{ref:a,icon:qr}))};Be.displayName="QuestionCircleOutlined";var Ar=n.exports.forwardRef(Be),Wr=globalThis&&globalThis.__rest||function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};function zr(e){return e?Ce(e)==="object"&&!n.exports.isValidElement(e)?e:{title:e}:null}var Hr=function(r){var a=r.prefixCls,t=r.label,o=r.htmlFor,l=r.labelCol,i=r.labelAlign,c=r.colon,m=r.required,v=r.requiredMark,p=r.tooltip,u=or("Form"),s=ee(u,1),h=s[0];return t?n.exports.createElement(ne.Consumer,{key:"label"},function(F){var f,d=F.vertical,O=F.labelAlign,x=F.labelCol,R=F.labelWrap,V=F.colon,P,T=l||x||{},C=i||O,w="".concat(a,"-item-label"),H=te(w,C==="left"&&"".concat(w,"-left"),T.className,I({},"".concat(w,"-wrap"),!!R)),E=t,b=c===!0||V!==!1&&c!==!1,j=b&&!d;j&&typeof t=="string"&&t.trim()!==""&&(E=t.replace(/[:|：]\s*$/,""));var W=zr(p);if(W){var k=W.icon,$=k===void 0?n.exports.createElement(Ar,null):k,S=Wr(W,["icon"]),D=n.exports.createElement(ir,S,n.exports.cloneElement($,{className:"".concat(a,"-item-tooltip"),title:""}));E=n.exports.createElement(n.exports.Fragment,null,E,D)}v==="optional"&&!m&&(E=n.exports.createElement(n.exports.Fragment,null,E,n.exports.createElement("span",{className:"".concat(a,"-item-optional"),title:""},(h==null?void 0:h.optional)||((P=lr.Form)===null||P===void 0?void 0:P.optional))));var M=te((f={},I(f,"".concat(a,"-item-required"),m),I(f,"".concat(a,"-item-required-mark-optional"),v==="optional"),I(f,"".concat(a,"-item-no-colon"),!b),f));return n.exports.createElement(He,_({},T,{className:H}),n.exports.createElement("label",{htmlFor:o,className:M,title:typeof t=="string"?t:""},E))}):null},Dr=Hr,Ae=[];function Se(e,r,a){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:"".concat(a,"-").concat(t),error:e,errorStatus:r}}function Ye(e){var r=e.help,a=e.helpStatus,t=e.errors,o=t===void 0?Ae:t,l=e.warnings,i=l===void 0?Ae:l,c=e.className,m=n.exports.useContext(Ne),v=m.prefixCls,p=n.exports.useContext(xe),u=p.getPrefixCls,s="".concat(v,"-item-explain"),h=u(),F=n.exports.useMemo(function(){return r!=null?[Se(r,a,"help")]:[].concat(U(o.map(function(f,d){return Se(f,"error","error",d)})),U(i.map(function(f,d){return Se(f,"warning","warning",d)})))},[r,a,o,i]);return n.exports.createElement(sr,_({},Pe,{motionName:"".concat(h,"-show-help"),motionAppear:!1,motionEnter:!1,visible:!!F.length,onLeaveStart:function(d){return d.style.height="auto",{height:d.offsetHeight}}}),function(f){var d=f.className,O=f.style;return n.exports.createElement("div",{className:te(s,d,c),style:O},n.exports.createElement(cr,_({keys:F},Pe,{motionName:"".concat(h,"-show-help-item"),component:!1}),function(x){var R=x.key,V=x.error,P=x.errorStatus,T=x.className,C=x.style;return n.exports.createElement("div",{key:R,role:"alert",className:te(T,I({},"".concat(s,"-").concat(P),P)),style:C},V)}))})}var Qr=function(r){var a=r.prefixCls,t=r.status,o=r.wrapperCol,l=r.children,i=r.errors,c=r.warnings,m=r._internalItemRender,v=r.extra,p=r.help,u="".concat(a,"-item"),s=n.exports.useContext(ne),h=o||s.wrapperCol||{},F=te("".concat(u,"-control"),h.className),f=n.exports.useMemo(function(){return _({},s)},[s]);delete f.labelCol,delete f.wrapperCol;var d=n.exports.createElement("div",{className:"".concat(u,"-control-input")},n.exports.createElement("div",{className:"".concat(u,"-control-input-content")},l)),O=n.exports.useMemo(function(){return{prefixCls:a,status:t}},[a,t]),x=n.exports.createElement(Ne.Provider,{value:O},n.exports.createElement(Ye,{errors:i,warnings:c,help:p,helpStatus:t,className:"".concat(u,"-explain-connected")})),R=v?n.exports.createElement("div",{className:"".concat(u,"-extra")},v):null,V=m&&m.mark==="pro_table_render"&&m.render?m.render(r,{input:d,errorList:x,extra:R}):n.exports.createElement(n.exports.Fragment,null,d,x,R);return n.exports.createElement(ne.Provider,{value:f},n.exports.createElement(He,_({},h,{className:F}),V))},Ur=Qr;function Br(e){var r=n.exports.useState(e),a=ee(r,2),t=a[0],o=a[1],l=n.exports.useRef(null),i=n.exports.useRef([]),c=n.exports.useRef(!1);n.exports.useEffect(function(){return c.current=!1,function(){c.current=!0,Te.cancel(l.current),l.current=null}},[]);function m(v){c.current||(l.current===null&&(i.current=[],l.current=Te(function(){l.current=null,o(function(p){var u=p;return i.current.forEach(function(s){u=s(u)}),u})})),i.current.push(v))}return[t,m]}function We(e){var r=n.exports.useState(e),a=ee(r,2),t=a[0],o=a[1];return n.exports.useEffect(function(){var l=setTimeout(function(){o(e)},e.length?0:10);return function(){clearTimeout(l)}},[e]),t}function Yr(){var e=n.exports.useContext(ne),r=e.itemRef,a=n.exports.useRef({});function t(o,l){var i=l&&Ce(l)==="object"&&l.ref,c=o.join("_");return(a.current.name!==c||a.current.originRef!==i)&&(a.current.name=c,a.current.originRef=i,a.current.ref=ur(r(o),i)),a.current.ref}return t}var Kr=globalThis&&globalThis.__rest||function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},Xr="__SPLIT__";mr("success","warning","error","validating","");var Zr=n.exports.memo(function(e){var r=e.children;return r},function(e,r){return e.value===r.value&&e.update===r.update});function Jr(e){return e===null&&K(!1,"Form.Item","`null` is passed as `name` property"),e!=null}function ze(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}}var Gr={success:yr,warning:Fr,error:wr,validating:Er};function et(e){var r=e.name,a=e.noStyle,t=e.dependencies,o=e.prefixCls,l=e.style,i=e.className,c=e.shouldUpdate,m=e.hasFeedback,v=e.help,p=e.rules,u=e.validateStatus,s=e.children,h=e.required,F=e.label,f=e.messageVariables,d=e.trigger,O=d===void 0?"onChange":d,x=e.validateTrigger,R=e.hidden,V=Kr(e,["name","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),P=n.exports.useContext(xe),T=P.getPrefixCls,C=n.exports.useContext(ne),w=C.name,H=C.requiredMark,E=typeof s=="function",b=n.exports.useContext(ke),j=n.exports.useContext(fr),W=j.validateTrigger,k=x!==void 0?x:W,$=Jr(r),S=T("form",o),D=n.exports.useContext(dr),M=n.exports.useRef(),X=Br({}),Z=ee(X,2),J=Z[0],ae=Z[1],B=vr(function(){return ze()}),q=ee(B,2),N=q[0],oe=q[1],le=function(y){var z=D==null?void 0:D.getKey(y.name);if(oe(y.destroy?ze():y,!0),a&&b){var g=y.name;if(y.destroy)g=M.current||g;else if(z!==void 0){var Q=ee(z,2),ce=Q[0],G=Q[1];g=[ce].concat(U(G)),M.current=g}b(y,g)}},de=function(y,z){ae(function(g){var Q=_({},g),ce=[].concat(U(y.name.slice(0,-1)),U(z)),G=ce.join(Xr);return y.destroy?delete Q[G]:Q[G]=y,Q})},ve=n.exports.useMemo(function(){var A=U(N.errors),y=U(N.warnings);return Object.values(J).forEach(function(z){A.push.apply(A,U(z.errors||[])),y.push.apply(y,U(z.warnings||[]))}),[A,y]},[J,N.errors,N.warnings]),pe=ee(ve,2),Ke=pe[0],Xe=pe[1],be=We(Ke),ye=We(Xe),Ze=Yr(),L="";u!==void 0?L=u:N!=null&&N.validating?L="validating":be.length?L="error":ye.length?L="warning":N!=null&&N.touched&&(L="success");var Je=n.exports.useMemo(function(){var A;if(m){var y=L&&Gr[L];A=y?n.exports.createElement("span",{className:te("".concat(S,"-item-feedback-icon"),"".concat(S,"-item-feedback-icon-").concat(L))},n.exports.createElement(y,null)):null}return{status:L,hasFeedback:m,feedbackIcon:A,isFormItemInput:!0}},[L,m]);function Ie(A,y,z){var g;if(a&&!R)return A;var Q=(g={},I(g,"".concat(S,"-item"),!0),I(g,"".concat(S,"-item-with-help"),v!=null||be.length||ye.length),I(g,"".concat(i),!!i),I(g,"".concat(S,"-item-has-feedback"),L&&m),I(g,"".concat(S,"-item-has-success"),L==="success"),I(g,"".concat(S,"-item-has-warning"),L==="warning"),I(g,"".concat(S,"-item-has-error"),L==="error"),I(g,"".concat(S,"-item-is-validating"),L==="validating"),I(g,"".concat(S,"-item-hidden"),R),g);return n.exports.createElement(Ir,_({className:te(Q),style:l,key:"row"},Cr(V,["colon","extra","fieldKey","requiredMark","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","labelAlign","labelWrap","labelCol","normalize","preserve","tooltip","validateFirst","valuePropName","wrapperCol","_internalItemRender"])),n.exports.createElement(Dr,_({htmlFor:y,required:z,requiredMark:H},e,{prefixCls:S})),n.exports.createElement(Ur,_({},e,N,{errors:be,warnings:ye,prefixCls:S,status:L,help:v}),n.exports.createElement(ke.Provider,{value:de},n.exports.createElement(br.Provider,{value:Je},A))))}if(!$&&!E&&!t)return Ie(s);var se={};return typeof F=="string"?se.label=F:r&&(se.label=String(r)),f&&(se=_(_({},se),f)),n.exports.createElement(pr,_({},e,{messageVariables:se,trigger:O,validateTrigger:k,onMetaChange:le}),function(A,y,z){var g=fe(r).length&&y?y.name:[],Q=Qe(g,w),ce=h!==void 0?h:!!(p&&p.some(function(Y){if(Y&&Ce(Y)==="object"&&Y.required&&!Y.warningOnly)return!0;if(typeof Y=="function"){var ie=Y(z);return ie&&ie.required&&!ie.warningOnly}return!1})),G=_({},A),ue=null;if(K(!(c&&t),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(s)&&$)K(!1,"Form.Item","`children` is array of render props cannot have `name`."),ue=s;else if(E&&(!(c||t)||$))K(!!(c||t),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),K(!$,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(t&&!E&&!$)K(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");else if(gr(s)){K(s.props.defaultValue===void 0,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var me=_(_({},s.props),G);me.id||(me.id=Q),hr(s)&&(me.ref=Ze(g,s));var Ge=new Set([].concat(U(fe(O)),U(fe(k))));Ge.forEach(function(Y){me[Y]=function(){for(var ie,Re,Fe,Oe,we,Me=arguments.length,Ee=new Array(Me),ge=0;ge<Me;ge++)Ee[ge]=arguments[ge];(Fe=G[Y])===null||Fe===void 0||(ie=Fe).call.apply(ie,[G].concat(Ee)),(we=(Oe=s.props)[Y])===null||we===void 0||(Re=we).call.apply(Re,[Oe].concat(Ee))}}),ue=n.exports.createElement(Zr,{value:G[e.valuePropName||"value"],update:s},xr(s,me))}else E&&(c||t)&&!$?ue=s(z):(K(!g.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),ue=s);return Ie(ue,Q,ce)})}var rt=globalThis&&globalThis.__rest||function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},tt=function(r){var a=r.prefixCls,t=r.children,o=rt(r,["prefixCls","children"]);K(!!o.name,"Form.List","Miss `name` prop.");var l=n.exports.useContext(xe),i=l.getPrefixCls,c=i("form",a),m=n.exports.useMemo(function(){return{prefixCls:c,status:"error"}},[c]);return n.exports.createElement(_r,o,function(v,p,u){return n.exports.createElement(Ne.Provider,{value:m},t(v.map(function(s){return _(_({},s),{fieldKey:s.key})}),p,{errors:u.errors,warnings:u.warnings}))})},at=tt;function nt(){var e=n.exports.useContext(ne),r=e.form;return r}var re=Vr;re.Item=et;re.List=at;re.ErrorList=Ye;re.useForm=Ue;re.useFormInstance=nt;re.useWatch=Sr;re.Provider=Nr;re.create=function(){K(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};var it=re;export{it as F};