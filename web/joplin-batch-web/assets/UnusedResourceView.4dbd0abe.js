import{L as xt,G as yt,i as it,D as Ut,F as zt,r as a,w as De,ak as Dt,v as At,k as _e,c as S,d as w,al as Vt,O as bt,_ as N,f as J,am as Wt,an as Gt,K as Ae,a as ae,b as Ve,m as St,ao as Ce,A as Ge,q as Ht,ap as jt,aq as Zt,n as et,ar as We,Y as st,as as lt,z as ce,B as Bt}from"./index.edaecf24.js";import{m as Pt,P as Yt}from"./index.esm.af52872f.js";import{n as Ft,j as tt,B as Te,k as Kt,A as Xt}from"./joplinApiGenerator.4f047005.js";import{P as qt}from"./PromiseUtil.b8304e6b.js";import{p as Jt}from"./immer.esm.d3122d4a.js";import{C as Qt}from"./index.1756fe8e.js";import{S as er}from"./index.c83a5ab7.js";import{L as Ke}from"./index.d471ed57.js";import{E as tr}from"./EyeOutlined.ed624379.js";var Xe;function Et(t){if(typeof document=="undefined")return 0;if(t||Xe===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var o=document.createElement("div"),r=o.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",o.appendChild(e),document.body.appendChild(o);var n=e.offsetWidth;o.style.overflow="scroll";var i=e.offsetWidth;n===i&&(i=o.clientWidth),document.body.removeChild(o),Xe=n-i}return Xe}function xe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!t)return{};var o=e.element,r=o===void 0?document.body:o,n={},i=Object.keys(t);return i.forEach(function(s){n[s]=r.style[s]}),i.forEach(function(s){r.style[s]=t[s]}),n}function rr(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var qe={},ct=function(t){if(!(!rr()&&!t)){var e="ant-scrolling-effect",o=new RegExp("".concat(e),"g"),r=document.body.className;if(t){if(!o.test(r))return;xe(qe),qe={},document.body.className=r.replace(o,"").trim();return}var n=Et();if(n&&(qe=xe({position:"relative",width:"calc(100% - ".concat(n,"px)")}),!o.test(r))){var i="".concat(r," ").concat(e);document.body.className=i.trim()}}},K=[],Rt="ant-scrolling-effect",Je=new RegExp("".concat(Rt),"g"),nr=0,Qe=new Map,or=xt(function t(e){var o=this;yt(this,t),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var r;return(r=o.options)===null||r===void 0?void 0:r.container},this.reLock=function(r){var n=K.find(function(i){var s=i.target;return s===o.lockTarget});n&&o.unLock(),o.options=r,n&&(n.options=r,o.lock())},this.lock=function(){var r;if(!K.some(function(u){var f=u.target;return f===o.lockTarget})){if(K.some(function(u){var f,l=u.options;return(l==null?void 0:l.container)===((f=o.options)===null||f===void 0?void 0:f.container)})){K=[].concat(it(K),[{target:o.lockTarget,options:o.options}]);return}var n=0,i=((r=o.options)===null||r===void 0?void 0:r.container)||document.body;(i===document.body&&window.innerWidth-document.documentElement.clientWidth>0||i.scrollHeight>i.clientHeight)&&(n=Et());var s=i.className;if(K.filter(function(u){var f,l=u.options;return(l==null?void 0:l.container)===((f=o.options)===null||f===void 0?void 0:f.container)}).length===0&&Qe.set(i,xe({width:n!==0?"calc(100% - ".concat(n,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:i})),!Je.test(s)){var c="".concat(s," ").concat(Rt);i.className=c.trim()}K=[].concat(it(K),[{target:o.lockTarget,options:o.options}])}},this.unLock=function(){var r,n=K.find(function(c){var u=c.target;return u===o.lockTarget});if(K=K.filter(function(c){var u=c.target;return u!==o.lockTarget}),!(!n||K.some(function(c){var u,f=c.options;return(f==null?void 0:f.container)===((u=n.options)===null||u===void 0?void 0:u.container)}))){var i=((r=o.options)===null||r===void 0?void 0:r.container)||document.body,s=i.className;!Je.test(s)||(xe(Qe.get(i),{element:i}),Qe.delete(i),i.className=i.className.replace(Je,"").trim())}},this.lockTarget=nr++,this.options=e}),oe=0,Oe=At(),Ue={},we=function(e){if(!Oe)return null;if(e){if(typeof e=="string")return document.querySelectorAll(e)[0];if(typeof e=="function")return e();if(_e(e)==="object"&&e instanceof window.HTMLElement)return e}return document.body},ar=function(t){Ut(o,t);var e=zt(o);function o(r){var n;return yt(this,o),n=e.call(this,r),n.container=void 0,n.componentRef=a.exports.createRef(),n.rafId=void 0,n.scrollLocker=void 0,n.renderComponent=void 0,n.updateScrollLocker=function(i){var s=i||{},c=s.visible,u=n.props,f=u.getContainer,l=u.visible;l&&l!==c&&Oe&&we(f)!==n.scrollLocker.getContainer()&&n.scrollLocker.reLock({container:we(f)})},n.updateOpenCount=function(i){var s=i||{},c=s.visible,u=s.getContainer,f=n.props,l=f.visible,v=f.getContainer;l!==c&&Oe&&we(v)===document.body&&(l&&!c?oe+=1:i&&(oe-=1));var p=typeof v=="function"&&typeof u=="function";(p?v.toString()!==u.toString():v!==u)&&n.removeCurrentContainer()},n.attachToParent=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(i||n.container&&!n.container.parentNode){var s=we(n.props.getContainer);return s?(s.appendChild(n.container),!0):!1}return!0},n.getContainer=function(){return Oe?(n.container||(n.container=document.createElement("div"),n.attachToParent(!0)),n.setWrapperClassName(),n.container):null},n.setWrapperClassName=function(){var i=n.props.wrapperClassName;n.container&&i&&i!==n.container.className&&(n.container.className=i)},n.removeCurrentContainer=function(){var i,s;(i=n.container)===null||i===void 0||(s=i.parentNode)===null||s===void 0||s.removeChild(n.container)},n.switchScrollingEffect=function(){oe===1&&!Object.keys(Ue).length?(ct(),Ue=xe({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):oe||(xe(Ue),Ue={},ct(!0))},n.scrollLocker=new or({container:we(r.getContainer)}),n}return xt(o,[{key:"componentDidMount",value:function(){var n=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=De(function(){n.forceUpdate()}))}},{key:"componentDidUpdate",value:function(n){this.updateOpenCount(n),this.updateScrollLocker(n),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var n=this.props,i=n.visible,s=n.getContainer;Oe&&we(s)===document.body&&(oe=i&&oe?oe-1:oe),this.removeCurrentContainer(),De.cancel(this.rafId)}},{key:"render",value:function(){var n=this.props,i=n.children,s=n.forceRender,c=n.visible,u=null,f={getOpenCount:function(){return oe},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(s||c||this.componentRef.current)&&(u=a.exports.createElement(Dt,{getContainer:this.getContainer,ref:this.componentRef},i(f))),u}}]),o}(a.exports.Component);function ir(){var t=document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;return{width:t,height:e}}function sr(t){var e=t.getBoundingClientRect(),o=document.documentElement;return{left:e.left+(window.pageXOffset||o.scrollLeft)-(o.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||o.scrollTop)-(o.clientTop||document.body.clientTop||0)}}function lr(){var t=w({},Vt);return t.useId}var ut=0;function cr(t){var e=a.exports.useState("ssr-id"),o=S(e,2),r=o[0],n=o[1],i=lr(),s=i==null?void 0:i();return a.exports.useEffect(function(){if(!i){var c=ut;ut+=1,n("rc_unique_".concat(c))}},[]),t||s||r}function ur(t){var e=t.prefixCls,o=t.style,r=t.visible,n=t.maskProps,i=t.motionName;return a.exports.createElement(bt,{key:"mask",visible:r,motionName:i,leavedClassName:"".concat(e,"-mask-hidden")},function(s){var c=s.className,u=s.style;return a.exports.createElement("div",N({style:w(w({},u),o),className:J("".concat(e,"-mask"),c)},n))})}function ft(t,e,o){var r=e;return!r&&o&&(r="".concat(t,"-").concat(o)),r}function dt(t,e){var o=t["page".concat(e?"Y":"X","Offset")],r="scroll".concat(e?"Top":"Left");if(typeof o!="number"){var n=t.document;o=n.documentElement[r],typeof o!="number"&&(o=n.body[r])}return o}function fr(t){var e=t.getBoundingClientRect(),o={left:e.left,top:e.top},r=t.ownerDocument,n=r.defaultView||r.parentWindow;return o.left+=dt(n),o.top+=dt(n,!0),o}var dr=a.exports.memo(function(t){var e=t.children;return e},function(t,e){var o=e.shouldUpdate;return!o}),vt={width:0,height:0,overflow:"hidden",outline:"none"},kt=a.exports.forwardRef(function(t,e){var o=t.closable,r=t.prefixCls,n=t.width,i=t.height,s=t.footer,c=t.title,u=t.closeIcon,f=t.style,l=t.className,v=t.visible,p=t.forceRender,W=t.bodyStyle,z=t.bodyProps,D=t.children,X=t.destroyOnClose,G=t.modalRender,Q=t.motionName,ee=t.ariaId,re=t.onClose,H=t.onVisibleChanged,O=t.onMouseDown,A=t.onMouseUp,q=t.mousePosition,I=a.exports.useRef(),j=a.exports.useRef(),V=a.exports.useRef();a.exports.useImperativeHandle(e,function(){return{focus:function(){var x;(x=I.current)===null||x===void 0||x.focus()},changeActive:function(x){var $=document,T=$.activeElement;x&&T===j.current?I.current.focus():!x&&T===I.current&&j.current.focus()}}});var ne=a.exports.useState(),Y=S(ne,2),g=Y[0],h=Y[1],P={};n!==void 0&&(P.width=n),i!==void 0&&(P.height=i),g&&(P.transformOrigin=g);function _(){var y=fr(V.current);h(q?"".concat(q.x-y.left,"px ").concat(q.y-y.top,"px"):"")}var Z;s&&(Z=a.exports.createElement("div",{className:"".concat(r,"-footer")},s));var M;c&&(M=a.exports.createElement("div",{className:"".concat(r,"-header")},a.exports.createElement("div",{className:"".concat(r,"-title"),id:ee},c)));var L;o&&(L=a.exports.createElement("button",{type:"button",onClick:re,"aria-label":"Close",className:"".concat(r,"-close")},u||a.exports.createElement("span",{className:"".concat(r,"-close-x")})));var B=a.exports.createElement("div",{className:"".concat(r,"-content")},L,M,a.exports.createElement("div",N({className:"".concat(r,"-body"),style:W},z),D),Z);return a.exports.createElement(bt,{visible:v,onVisibleChanged:H,onAppearPrepare:_,onEnterPrepare:_,forceRender:p,motionName:Q,removeOnLeave:X,ref:V},function(y,x){var $=y.className,T=y.style;return a.exports.createElement("div",{key:"dialog-element",role:"dialog","aria-modal":"true",ref:x,style:w(w(w({},T),f),P),className:J(r,l,$),onMouseDown:O,onMouseUp:A},a.exports.createElement("div",{tabIndex:0,ref:I,style:vt,"aria-hidden":"true"}),a.exports.createElement(dr,{shouldUpdate:v||p},G?G(B):B),a.exports.createElement("div",{tabIndex:0,ref:j,style:vt,"aria-hidden":"true"}))})});kt.displayName="Content";function mt(t){var e=t.prefixCls,o=e===void 0?"rc-dialog":e,r=t.zIndex,n=t.visible,i=n===void 0?!1:n,s=t.keyboard,c=s===void 0?!0:s,u=t.focusTriggerAfterClose,f=u===void 0?!0:u,l=t.scrollLocker,v=t.title,p=t.wrapStyle,W=t.wrapClassName,z=t.wrapProps,D=t.onClose,X=t.afterClose,G=t.transitionName,Q=t.animation,ee=t.closable,re=ee===void 0?!0:ee,H=t.mask,O=H===void 0?!0:H,A=t.maskTransitionName,q=t.maskAnimation,I=t.maskClosable,j=I===void 0?!0:I,V=t.maskStyle,ne=t.maskProps,Y=t.rootClassName,g=a.exports.useRef(),h=a.exports.useRef(),P=a.exports.useRef(),_=a.exports.useState(i),Z=S(_,2),M=Z[0],L=Z[1],B=cr();function y(E){if(E){if(!Gt(h.current,document.activeElement)){var k;g.current=document.activeElement,(k=P.current)===null||k===void 0||k.focus()}}else{if(L(!1),O&&g.current&&f){try{g.current.focus({preventScroll:!0})}catch{}g.current=null}M&&(X==null||X())}}function x(E){D==null||D(E)}var $=a.exports.useRef(!1),T=a.exports.useRef(),U=function(){clearTimeout(T.current),$.current=!0},C=function(){T.current=setTimeout(function(){$.current=!1})},R=null;j&&(R=function(k){$.current?$.current=!1:h.current===k.target&&x(k)});function b(E){if(c&&E.keyCode===Ae.ESC){E.stopPropagation(),x(E);return}i&&E.keyCode===Ae.TAB&&P.current.changeActive(!E.shiftKey)}return a.exports.useEffect(function(){return i&&L(!0),function(){}},[i]),a.exports.useEffect(function(){return function(){clearTimeout(T.current)}},[]),a.exports.useEffect(function(){return M?(l==null||l.lock(),l==null?void 0:l.unLock):function(){}},[M,l]),a.exports.createElement("div",N({className:J("".concat(o,"-root"),Y)},Wt(t,{data:!0})),a.exports.createElement(ur,{prefixCls:o,visible:O&&i,motionName:ft(o,A,q),style:w({zIndex:r},V),maskProps:ne}),a.exports.createElement("div",N({tabIndex:-1,onKeyDown:b,className:J("".concat(o,"-wrap"),W),ref:h,onClick:R,"aria-labelledby":v?B:null,style:w(w({zIndex:r},p),{},{display:M?null:"none"})},z),a.exports.createElement(kt,N({},t,{onMouseDown:U,onMouseUp:C,ref:P,closable:re,ariaId:B,prefixCls:o,visible:i,onClose:x,onVisibleChanged:y,motionName:ft(o,G,Q)}))))}var Nt=function(e){var o=e.visible,r=e.getContainer,n=e.forceRender,i=e.destroyOnClose,s=i===void 0?!1:i,c=e.afterClose,u=a.exports.useState(o),f=S(u,2),l=f[0],v=f[1];return a.exports.useEffect(function(){o&&v(!0)},[o]),r===!1?a.exports.createElement(mt,N({},e,{getOpenCount:function(){return 2}})):!n&&s&&!l?null:a.exports.createElement(ar,{visible:o,forceRender:n,getContainer:r},function(p){return a.exports.createElement(mt,N({},e,{destroyOnClose:s,afterClose:function(){c==null||c(),v(!1)}},p))})};Nt.displayName="Dialog";function vr(t){var e=a.exports.useRef(null),o=a.exports.useState(t),r=S(o,2),n=r[0],i=r[1],s=a.exports.useRef([]),c=function(f){e.current===null&&(s.current=[],e.current=De(function(){i(function(l){var v=l;return s.current.forEach(function(p){v=w(w({},v),p)}),e.current=null,v})})),s.current.push(f)};return a.exports.useEffect(function(){return function(){return e.current&&De.cancel(e.current)}},[]),[n,c]}function pt(t,e,o,r){var n=e+o,i=(o-r)/2;if(o>r){if(e>0)return ae({},t,i);if(e<0&&n<r)return ae({},t,-i)}else if(e<0||n>r)return ae({},t,e<0?i:-i);return{}}function mr(t,e,o,r){var n=ir(),i=n.width,s=n.height,c=null;return t<=i&&e<=s?c={x:0,y:0}:(t>i||e>s)&&(c=w(w({},pt("x",o,t,i)),pt("y",r,e,s))),c}var pr=["visible","onVisibleChange","getContainer","current","countRender"],rt=a.exports.createContext({previewUrls:new Map,setPreviewUrls:function(){return null},current:null,setCurrent:function(){return null},setShowPreview:function(){return null},setMousePosition:function(){return null},registerImage:function(){return function(){return null}},rootClassName:""}),gr=rt.Provider,hr=function(e){var o=e.previewPrefixCls,r=o===void 0?"rc-image-preview":o,n=e.children,i=e.icons,s=i===void 0?{}:i,c=e.preview,u=_e(c)==="object"?c:{},f=u.visible,l=f===void 0?void 0:f,v=u.onVisibleChange,p=v===void 0?void 0:v,W=u.getContainer,z=W===void 0?void 0:W,D=u.current,X=D===void 0?0:D,G=u.countRender,Q=G===void 0?void 0:G,ee=Ve(u,pr),re=a.exports.useState(new Map),H=S(re,2),O=H[0],A=H[1],q=a.exports.useState(),I=S(q,2),j=I[0],V=I[1],ne=St(!!l,{value:l,onChange:p}),Y=S(ne,2),g=Y[0],h=Y[1],P=a.exports.useState(null),_=S(P,2),Z=_[0],M=_[1],L=l!==void 0,B=Array.from(O.keys()),y=B[X],x=new Map(Array.from(O).filter(function(U){var C=S(U,2),R=C[1].canPreview;return!!R}).map(function(U){var C=S(U,2),R=C[0],b=C[1].url;return[R,b]})),$=function(C,R){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,E=function(){A(function(ie){var ue=new Map(ie),fe=ue.delete(C);return fe?ue:ie})};return A(function(k){return new Map(k).set(C,{url:R,canPreview:b})}),E},T=function(C){C.stopPropagation(),h(!1),M(null)};return a.exports.useEffect(function(){V(y)},[y]),a.exports.useEffect(function(){!g&&L&&V(y)},[y,L,g]),a.exports.createElement(gr,{value:{isPreviewGroup:!0,previewUrls:x,setPreviewUrls:A,current:j,setCurrent:V,setShowPreview:h,setMousePosition:M,registerImage:$}},n,a.exports.createElement(Ot,N({"aria-hidden":!g,visible:g,prefixCls:r,onClose:T,mousePosition:Z,src:x.get(j),icons:s,getContainer:z,countRender:Q},ee)))},Cr=["prefixCls","src","alt","onClose","afterClose","visible","icons","rootClassName","countRender"],ze=a.exports.useState,gt=a.exports.useEffect,wr=a.exports.useCallback,ht=a.exports.useRef,xr=a.exports.useContext,pe={x:0,y:0},Ot=function(e){var o,r=e.prefixCls,n=e.src,i=e.alt,s=e.onClose;e.afterClose;var c=e.visible,u=e.icons,f=u===void 0?{}:u,l=e.rootClassName,v=e.countRender,p=Ve(e,Cr),W=f.rotateLeft,z=f.rotateRight,D=f.zoomIn,X=f.zoomOut,G=f.close,Q=f.left,ee=f.right,re=ze(1),H=S(re,2),O=H[0],A=H[1],q=ze(0),I=S(q,2),j=I[0],V=I[1],ne=vr(pe),Y=S(ne,2),g=Y[0],h=Y[1],P=ht(),_=ht({originX:0,originY:0,deltaX:0,deltaY:0}),Z=ze(!1),M=S(Z,2),L=M[0],B=M[1],y=xr(rt),x=y.previewUrls,$=y.current,T=y.isPreviewGroup,U=y.setCurrent,C=x.size,R=Array.from(x.keys()),b=R.indexOf($),E=T?x.get($):n,k=T&&C>1,ie=ze({wheelDirection:0}),ue=S(ie,2),fe=ue[0],ye=ue[1],ge=function(){A(1),V(0),h(pe)},Me=function(){A(function(d){return d+1}),h(pe)},be=function(){O>1&&A(function(d){return d-1}),h(pe)},je=function(){V(function(d){return d+90})},Ie=function(){V(function(d){return d-90})},de=function(d){d.preventDefault(),d.stopPropagation(),b>0&&U(R[b-1])},ve=function(d){d.preventDefault(),d.stopPropagation(),b<C-1&&U(R[b+1])},Se=J(ae({},"".concat(r,"-moving"),L)),Ze="".concat(r,"-operations-operation"),Be="".concat(r,"-operations-icon"),Ye=[{icon:G,onClick:s,type:"close"},{icon:D,onClick:Me,type:"zoomIn"},{icon:X,onClick:be,type:"zoomOut",disabled:O===1},{icon:z,onClick:je,type:"rotateRight"},{icon:W,onClick:Ie,type:"rotateLeft"}],Pe=function(){if(c&&L){var d=P.current.offsetWidth*O,te=P.current.offsetHeight*O,le=P.current.getBoundingClientRect(),me=le.left,ke=le.top,Ne=j%180!==0;B(!1);var $e=mr(Ne?te:d,Ne?d:te,me,ke);$e&&h(w({},$e))}},Fe=function(d){d.button===0&&(d.preventDefault(),d.stopPropagation(),_.current.deltaX=d.pageX-g.x,_.current.deltaY=d.pageY-g.y,_.current.originX=g.x,_.current.originY=g.y,B(!0))},Le=function(d){c&&L&&h({x:d.pageX-_.current.deltaX,y:d.pageY-_.current.deltaY})},Ee=function(d){if(!!c){d.preventDefault();var te=d.deltaY;ye({wheelDirection:te})}},se=wr(function(m){!c||!k||(m.preventDefault(),m.keyCode===Ae.LEFT?b>0&&U(R[b-1]):m.keyCode===Ae.RIGHT&&b<C-1&&U(R[b+1]))},[b,C,R,U,k,c]),Re=function(){c&&(O!==1&&A(1),(g.x!==pe.x||g.y!==pe.y)&&h(pe))};return gt(function(){var m=fe.wheelDirection;m>0?be():m<0&&Me()},[fe]),gt(function(){var m,d,te=Ce(window,"mouseup",Pe,!1),le=Ce(window,"mousemove",Le,!1),me=Ce(window,"wheel",Ee,{passive:!1}),ke=Ce(window,"keydown",se,!1);try{window.top!==window.self&&(m=Ce(window.top,"mouseup",Pe,!1),d=Ce(window.top,"mousemove",Le,!1))}catch{}return function(){te.remove(),le.remove(),me.remove(),ke.remove(),m&&m.remove(),d&&d.remove()}},[c,L,se]),a.exports.createElement(Nt,N({transitionName:"zoom",maskTransitionName:"fade",closable:!1,keyboard:!0,prefixCls:r,onClose:s,afterClose:ge,visible:c,wrapClassName:Se,rootClassName:l},p),a.exports.createElement("ul",{className:"".concat(r,"-operations")},k&&a.exports.createElement("li",{className:"".concat(r,"-operations-progress")},(o=v==null?void 0:v(b+1,C))!==null&&o!==void 0?o:"".concat(b+1," / ").concat(C)),Ye.map(function(m){var d=m.icon,te=m.onClick,le=m.type,me=m.disabled;return a.exports.createElement("li",{className:J(Ze,ae({},"".concat(r,"-operations-operation-disabled"),!!me)),onClick:te,key:le},a.exports.isValidElement(d)?a.exports.cloneElement(d,{className:Be}):d)})),a.exports.createElement("div",{className:"".concat(r,"-img-wrapper"),style:{transform:"translate3d(".concat(g.x,"px, ").concat(g.y,"px, 0)")}},a.exports.createElement("img",{onMouseDown:Fe,onDoubleClick:Re,ref:P,className:"".concat(r,"-img"),src:E,alt:i,style:{transform:"scale3d(".concat(O,", ").concat(O,", 1) rotate(").concat(j,"deg)")}})),k&&a.exports.createElement("div",{className:J("".concat(r,"-switch-left"),ae({},"".concat(r,"-switch-left-disabled"),b===0)),onClick:de},Q),k&&a.exports.createElement("div",{className:J("".concat(r,"-switch-right"),ae({},"".concat(r,"-switch-right-disabled"),b===C-1)),onClick:ve},ee))},yr=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName","crossOrigin","decoding","loading","referrerPolicy","sizes","srcSet","useMap"],br=["src","visible","onVisibleChange","getContainer","mask","maskClassName","icons"],Ct=0,He=function(e){var o=e.src,r=e.alt,n=e.onPreviewClose,i=e.prefixCls,s=i===void 0?"rc-image":i,c=e.previewPrefixCls,u=c===void 0?"".concat(s,"-preview"):c,f=e.placeholder,l=e.fallback,v=e.width,p=e.height,W=e.style,z=e.preview,D=z===void 0?!0:z,X=e.className,G=e.onClick,Q=e.onError,ee=e.wrapperClassName,re=e.wrapperStyle,H=e.rootClassName,O=e.crossOrigin,A=e.decoding,q=e.loading,I=e.referrerPolicy,j=e.sizes,V=e.srcSet,ne=e.useMap,Y=Ve(e,yr),g=f&&f!==!0,h=_e(D)==="object"?D:{},P=h.src,_=h.visible,Z=_===void 0?void 0:_,M=h.onVisibleChange,L=M===void 0?n:M,B=h.getContainer,y=B===void 0?void 0:B,x=h.mask,$=h.maskClassName,T=h.icons,U=Ve(h,br),C=P!=null?P:o,R=Z!==void 0,b=St(!!Z,{value:Z,onChange:L}),E=S(b,2),k=E[0],ie=E[1],ue=a.exports.useState(g?"loading":"normal"),fe=S(ue,2),ye=fe[0],ge=fe[1],Me=a.exports.useState(null),be=S(Me,2),je=be[0],Ie=be[1],de=ye==="error",ve=a.exports.useContext(rt),Se=ve.isPreviewGroup,Ze=ve.setCurrent,Be=ve.setShowPreview,Ye=ve.setMousePosition,Pe=ve.registerImage,Fe=a.exports.useState(function(){return Ct+=1,Ct}),Le=S(Fe,1),Ee=Le[0],se=D&&!de,Re=a.exports.useRef(!1),m=function(){ge("normal")},d=function(F){Q&&Q(F),ge("error")},te=function(F){if(!R){var nt=sr(F.target),ot=nt.left,at=nt.top;Se?(Ze(Ee),Ye({x:ot,y:at})):Ie({x:ot,y:at})}Se?Be(!0):ie(!0),G&&G(F)},le=function(F){F.stopPropagation(),ie(!1),R||Ie(null)},me=function(F){Re.current=!1,ye==="loading"&&(F==null?void 0:F.complete)&&(F.naturalWidth||F.naturalHeight)&&(Re.current=!0,m())};a.exports.useEffect(function(){var he=Pe(Ee,C);return he},[]),a.exports.useEffect(function(){Pe(Ee,C,se)},[C,se]),a.exports.useEffect(function(){de&&ge("normal"),g&&!Re.current&&ge("loading")},[o]);var ke=J(s,ee,H,ae({},"".concat(s,"-error"),de)),Ne=de&&l?l:C,$e={crossOrigin:O,decoding:A,loading:q,referrerPolicy:I,sizes:j,srcSet:V,useMap:ne,alt:r,className:J("".concat(s,"-img"),ae({},"".concat(s,"-img-placeholder"),f===!0),X),style:w({height:p},W)};return a.exports.createElement(a.exports.Fragment,null,a.exports.createElement("div",N({},Y,{className:ke,onClick:se?te:G,style:w({width:v,height:p},re)}),a.exports.createElement("img",N({},$e,{ref:me},de&&l?{src:l}:{onLoad:m,onError:d,src:o})),ye==="loading"&&a.exports.createElement("div",{"aria-hidden":"true",className:"".concat(s,"-placeholder")},f),x&&se&&a.exports.createElement("div",{className:J("".concat(s,"-mask"),$)},x)),!Se&&se&&a.exports.createElement(Ot,N({"aria-hidden":!k,visible:k,prefixCls:u,onClose:le,mousePosition:je,src:Ne,alt:r,getContainer:y,icons:T,rootClassName:H},U)))};He.PreviewGroup=hr;He.displayName="Image";var Sr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},Pr=Sr,_t=function(e,o){return a.exports.createElement(Ge,w(w({},e),{},{ref:o,icon:Pr}))};_t.displayName="RotateLeftOutlined";var Er=a.exports.forwardRef(_t),Rr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},kr=Rr,Mt=function(e,o){return a.exports.createElement(Ge,w(w({},e),{},{ref:o,icon:kr}))};Mt.displayName="RotateRightOutlined";var Nr=a.exports.forwardRef(Mt),Or={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},_r=Or,It=function(e,o){return a.exports.createElement(Ge,w(w({},e),{},{ref:o,icon:_r}))};It.displayName="ZoomInOutlined";var Mr=a.exports.forwardRef(It),Ir={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},Lr=Ir,Lt=function(e,o){return a.exports.createElement(Ge,w(w({},e),{},{ref:o,icon:Lr}))};Lt.displayName="ZoomOutOutlined";var $r=a.exports.forwardRef(Lt),Tr=globalThis&&globalThis.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o},$t={rotateLeft:a.exports.createElement(Er,null),rotateRight:a.exports.createElement(Nr,null),zoomIn:a.exports.createElement(Mr,null),zoomOut:a.exports.createElement($r,null),close:a.exports.createElement(Ht,null),left:a.exports.createElement(jt,null),right:a.exports.createElement(Zt,null)},Ur=function(e){var o=e.previewPrefixCls,r=e.preview,n=Tr(e,["previewPrefixCls","preview"]),i=a.exports.useContext(et),s=i.getPrefixCls,c=s("image-preview",o),u=s(),f=a.exports.useMemo(function(){if(r===!1)return r;var l=_e(r)==="object"?r:{};return N(N({},l),{transitionName:We(u,"zoom",l.transitionName),maskTransitionName:We(u,"fade",l.maskTransitionName)})},[r]);return a.exports.createElement(He.PreviewGroup,N({preview:f,previewPrefixCls:c,icons:$t},n))},zr=Ur,Dr=globalThis&&globalThis.__rest||function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o},Tt=function(e){var o=e.prefixCls,r=e.preview,n=Dr(e,["prefixCls","preview"]),i=a.exports.useContext(et),s=i.getPrefixCls,c=s("image",o),u=s(),f=a.exports.useContext(et),l=f.locale,v=l===void 0?st:l,p=v.Image||st.Image,W=a.exports.useMemo(function(){if(r===!1)return r;var z=_e(r)==="object"?r:{};return N(N({mask:a.exports.createElement("div",{className:"".concat(c,"-mask-info")},a.exports.createElement(tr,null),p==null?void 0:p.preview),icons:$t},z),{transitionName:We(u,"zoom",z.transitionName),maskTransitionName:We(u,"fade",z.maskTransitionName)})},[r,p]);return a.exports.createElement(He,N({prefixCls:c,preview:W},n))};Tt.PreviewGroup=zr;var Ar=Tt;class Vr{constructor(e){this.config=e}getUnusedResource(){return qt.warpOnEvent(async e=>{const o=await Ft.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]});let r=0;return await Pt.filter(o,Yt(async n=>{const i=!await this.checkUsed(n.id);return e.process({title:n.title,all:o.length,rate:r++}),i},10))})}async checkUsed(e){return(await this.config.searchApi.search({query:`"](:/${e})"`})).items.length>0}}const Wr=new Vr(tt);function Gr(t){const e=t();return o=>`${e==null?void 0:e.baseUrl}/resources/${o}/file?token=${e==null?void 0:e.token}`}const wt=Gr(()=>Kt(localStorage).settings),Jr=()=>{const[t,e]=a.exports.useState([]),[o,r]=a.exports.useState(""),[n,i]=lt(async()=>{try{const l=await Wr.getUnusedResource().on("process",v=>{r(ce.t("unusedResource.msg.process",v))});console.log("list: ",l),e(l)}catch{Bt.error(ce.t("unusedResource.msg.error"))}});async function s(l){e(Jt(v=>v.filter(p=>p.id!==l))),await tt.resourceApi.remove(l)}async function c(l){await Xt(wt(l))}const[u,f]=lt(async()=>{await Pt.forEach(t,async l=>{await tt.resourceApi.remove(l.id)}),e([])},[t]);return a.exports.createElement(Qt,{title:ce.t("unusedResource.title"),extra:a.exports.createElement(er,null,a.exports.createElement(Te,{onClick:i},ce.t("common.action.check")),a.exports.createElement(Te,{disabled:t.length===0,danger:!0,loading:u.loading,onClick:f},ce.t("unusedResource.action.removeAll")))},a.exports.createElement(Ke,{dataSource:t,locale:{emptyText:ce.t("unusedResource.listEmptyText")},renderItem:l=>a.exports.createElement(Ke.Item,{key:l.id,actions:[a.exports.createElement(Te,{onClick:()=>s(l.id)},ce.t("common.action.remove")),a.exports.createElement(Te,{onClick:()=>c(l.id)},ce.t("common.action.download"))],extra:l.mime.startsWith("image/")&&a.exports.createElement(Ar,{src:wt(l.id),width:300})},a.exports.createElement(Ke.Item.Meta,{title:l.title})),loading:{spinning:n.loading,tip:o}}))};export{Ar as I,Jr as U,wt as b};