import{C as e,B as t,a3 as n,h as r,j as i,_ as o,k as a,A as l,K as s,l as c,v as p,at as d,ad as u,ae as f,ac as y,s as h,au as v,ah as m,X as x,N as g,p as b,av as E,ar as C,q as O,z as w,aw as S,ax as N}from"./vendor.f9e4dcb2.js";import{w as k}from"./joplinApiGenerator.e693c4a0.js";import{i as j}from"./index.b1748e28.js";import{T}from"./TextArea.e0cfbd9a.js";var P=function(l,s){var c=l.prefixCls,p=l.component,d=void 0===p?"article":p,u=l.className,f=l["aria-label"],y=l.setContentRef,h=l.children,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["prefixCls","component","className","aria-label","setContentRef","children"]),m=s;return y&&(t(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),m=n(s,y)),e.exports.createElement(r,null,(function(t){var n=t.getPrefixCls,r=t.direction,l=d,s=n("typography",c),p=i(s,o({},"".concat(s,"-rtl"),"rtl"===r),u);return e.exports.createElement(l,a({className:p,"aria-label":f,ref:m},v),h)}))},R=e.exports.forwardRef(P);R.displayName="Typography";var z=R,A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},I=function(t,n){return e.exports.createElement(l,Object.assign({},t,{ref:n,icon:A}))};I.displayName="EditOutlined";var H=e.exports.forwardRef(I),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},M=function(t,n){return e.exports.createElement(l,Object.assign({},t,{ref:n,icon:L}))};M.displayName="CopyOutlined";var K=e.exports.forwardRef(M),B={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},D=e.exports.forwardRef((function(t,n){var r=t.style,i=t.noStyle,o=t.disabled,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(t,["style","noStyle","disabled"]),c={};return i||(c=a({},B)),o&&(c.pointerEvents="none"),c=a(a({},c),r),e.exports.createElement("div",a({role:"button",tabIndex:0,ref:n},l,{onKeyDown:function(e){e.keyCode===s.ENTER&&e.preventDefault()},onKeyUp:function(e){var n=e.keyCode,r=t.onClick;n===s.ENTER&&r&&r()},style:c}))})),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},U=function(t,n){return e.exports.createElement(l,Object.assign({},t,{ref:n,icon:F}))};U.displayName="EnterOutlined";var V,W=e.exports.forwardRef(U),_=function(t){var n=t.prefixCls,r=t["aria-label"],a=t.className,l=t.style,p=t.direction,d=t.maxLength,u=t.autoSize,f=void 0===u||u,y=t.value,h=t.onSave,v=t.onCancel,m=t.onEnd,x=e.exports.useRef(),g=e.exports.useRef(!1),b=e.exports.useRef(),E=e.exports.useState(y),C=c(E,2),O=C[0],w=C[1];e.exports.useEffect((function(){w(y)}),[y]),e.exports.useEffect((function(){if(x.current&&x.current.resizableTextArea){var e=x.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var S=function(){h(O.trim())},N=i(n,"".concat(n,"-edit-content"),o({},"".concat(n,"-rtl"),"rtl"===p),a);return e.exports.createElement("div",{className:N,style:l},e.exports.createElement(T,{ref:x,maxLength:d,value:O,onChange:function(e){var t=e.target;w(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;g.current||(b.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,i=e.metaKey,o=e.shiftKey;b.current!==t||g.current||n||r||i||o||(t===s.ENTER?(S(),null==m||m()):t===s.ESC&&v())},onCompositionStart:function(){g.current=!0},onCompositionEnd:function(){g.current=!1},onBlur:function(){S()},"aria-label":r,autoSize:f}),e.exports.createElement(W,{className:"".concat(n,"-edit-content-confirm")}))},q={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function G(e){if(!e)return 0;var t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}function X(e,t){e.setAttribute("aria-hidden","true");var n,r=window.getComputedStyle(t),i=(n=r,Array.prototype.slice.apply(n).map((function(e){return"".concat(e,": ").concat(n.getPropertyValue(e),";")})).join(""));e.setAttribute("style",i),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}var J=function(t,n,r,i,o){V||(V=document.createElement("div")).setAttribute("aria-hidden","true"),V.parentNode||document.body.appendChild(V);var a=n.rows,l=n.suffix,s=void 0===l?"":l,c=window.getComputedStyle(t),u=function(e){var t=document.createElement("div");X(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var n=t.offsetHeight,r=G(window.getComputedStyle(e).lineHeight);return document.body.removeChild(t),n>r?n:r}(t),f=Math.floor(u)*(a+1)+G(c.paddingTop)+G(c.paddingBottom);X(V,t);var y,h,v=(y=p(r),h=[],y.forEach((function(e){var t=h[h.length-1];"string"==typeof e&&"string"==typeof t?h[h.length-1]+=e:h.push(e)})),h);function m(){return Math.ceil(V.getBoundingClientRect().height)<f}if(d.exports.render(e.exports.createElement("div",{style:q},e.exports.createElement("span",{style:q},v,s),e.exports.createElement("span",{style:q},i)),V),m())return d.exports.unmountComponentAtNode(V),{content:r,text:V.innerHTML,ellipsis:!1};var x=Array.prototype.slice.apply(V.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),g=Array.prototype.slice.apply(V.childNodes[0].childNodes[1].cloneNode(!0).childNodes);d.exports.unmountComponentAtNode(V);var b=[];V.innerHTML="";var E=document.createElement("span");V.appendChild(E);var C=document.createTextNode(o+s);function O(e){E.insertBefore(e,C)}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=Math.floor((n+r)/2),a=t.slice(0,o);if(e.textContent=a,n>=r-1)for(var l=r;l>=n;l-=1){var s=t.slice(0,l);if(e.textContent=s,m()||!s)return l===t.length?{finished:!1,reactNode:t}:{finished:!0,reactNode:s}}return m()?w(e,t,o,r,o):w(e,t,n,o,i)}function S(e,t){var n=e.nodeType;if(1===n)return O(e),m()?{finished:!1,reactNode:v[t]}:(E.removeChild(e),{finished:!0,reactNode:null});if(3===n){var r=e.textContent||"",i=document.createTextNode(r);return O(i),w(i,r)}return{finished:!1,reactNode:null}}return E.appendChild(C),g.forEach((function(e){V.appendChild(e)})),x.some((function(e,t){var n=S(e,t),r=n.finished,i=n.reactNode;return i&&b.push(i),r})),{content:b,text:V.innerHTML,ellipsis:!0}},Q=j("webkitLineClamp"),Y=j("textOverflow");function Z(e,t,n){return!0===e||void 0===e?t:e||n&&t}var $=function(n){u(l,n);var r=f(l);function l(){var t;return y(this,l),(t=r.apply(this,arguments)).contentRef=e.exports.createRef(),t.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},t.getPrefixCls=function(){var e=t.props.prefixCls;return(0,t.context.getPrefixCls)("typography",e)},t.onExpandClick=function(e){var n,r=t.getEllipsis().onExpand;t.setState({expanded:!0}),null===(n=r)||void 0===n||n(e)},t.onEditClick=function(e){e.preventDefault(),t.triggerEdit(!0)},t.onEditChange=function(e){var n=t.getEditable().onChange;null==n||n(e),t.triggerEdit(!1)},t.onEditCancel=function(){var e,n;null===(n=(e=t.getEditable()).onCancel)||void 0===n||n.call(e),t.triggerEdit(!1)},t.onCopyClick=function(e){e.preventDefault();var n=t.props,r=n.children,i=n.copyable,o=a({},"object"===h(i)?i:null);void 0===o.text&&(o.text=String(r)),v(o.text||""),t.setState({copied:!0},(function(){o.onCopy&&o.onCopy(),t.copyId=window.setTimeout((function(){t.setState({copied:!1})}),3e3)}))},t.setEditRef=function(e){t.editIcon=e},t.triggerEdit=function(e){var n=t.getEditable().onStart;e&&n&&n(),t.setState({edit:e},(function(){!e&&t.editIcon&&t.editIcon.focus()}))},t.resizeOnNextFrame=function(){k.cancel(t.rafId),t.rafId=k((function(){t.syncEllipsis()}))},t}return m(l,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),k.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?a({editing:t},"object"===h(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?a({rows:1,expandable:!1},"object"===h(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,i=this.getEllipsis(),o=i.rows,a=i.expandable,l=i.suffix,s=i.onEllipsis,c=i.tooltip;return!l&&!c&&(!(n||r||a||!e||s)&&(1===o?Y:Q))}},{key:"syncEllipsis",value:function(){var e=this.state,n=e.ellipsisText,r=e.isEllipsis,i=e.expanded,o=this.getEllipsis(),a=o.rows,l=o.suffix,s=o.onEllipsis,c=this.props.children;if(a&&!(a<0)&&this.contentRef.current&&!i&&!this.canUseCSSEllipsis()){t(p(c).every((function(e){return"string"==typeof e})),"Typography","`ellipsis` should use string as children only.");var d=J(this.contentRef.current,{rows:a,suffix:l},c,this.renderOperations(!0),"..."),u=d.content,f=d.text,y=d.ellipsis;n===f&&r===y||(this.setState({ellipsisText:f,ellipsisContent:u,isEllipsis:y}),r!==y&&s&&s(y))}}},{key:"renderExpand",value:function(t){var n,r=this.getEllipsis(),i=r.expandable,o=r.symbol,a=this.state,l=a.expanded,s=a.isEllipsis;return i&&(t||!l&&s)?(n=o||this.expandStr,e.exports.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},n)):null}},{key:"renderEdit",value:function(){var t=this.props.editable;if(t){var n=t.icon,r=t.tooltip,i=p(r)[0]||this.editStr,o="string"==typeof i?i:"";return e.exports.createElement(x,{key:"edit",title:!1===r?"":i},e.exports.createElement(D,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":o},n||e.exports.createElement(H,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,n=this.props.copyable;if(n){var r=this.getPrefixCls(),o=n.tooltips,a=n.icon,l=Array.isArray(o)?o:[o],s=Array.isArray(a)?a:[a],c=t?Z(l[1],this.copiedStr):Z(l[0],this.copyStr),p=t?this.copiedStr:this.copyStr,d="string"==typeof c?c:p;return e.exports.createElement(x,{key:"copy",title:c},e.exports.createElement(D,{className:i("".concat(r,"-copy"),t&&"".concat(r,"-copy-success")),onClick:this.onCopyClick,"aria-label":d},t?Z(s[1],e.exports.createElement(S,null),!0):Z(s[0],e.exports.createElement(K,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,n=t.children,r=t.className,i=t.style,o=this.context.direction,a=this.getEditable(),l=a.maxLength,s=a.autoSize,c=a.onEnd;return e.exports.createElement(_,{value:"string"==typeof n?n:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:c,prefixCls:this.getPrefixCls(),className:r,style:i,direction:o,maxLength:l,autoSize:s})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var t=this,n=this.state,r=n.ellipsisContent,l=n.isEllipsis,s=n.expanded,c=this.props,p=c.component,d=c.children,u=c.className,f=c.type,y=c.disabled,h=c.style,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["component","children","className","type","disabled","style"]),m=this.context.direction,w=this.getEllipsis(),S=w.rows,N=w.suffix,k=w.tooltip,j=this.getPrefixCls(),T=g(v,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat(b(E))),P=this.canUseCSSEllipsis(),R=1===S&&P,A=S&&S>1&&P,I=d;if(S&&l&&!s&&!P){var H=v.title,L=H||"";H||"string"!=typeof d&&"number"!=typeof d||(L=String(d)),L=L.slice(String(r||"").length),I=e.exports.createElement(e.exports.Fragment,null,r,e.exports.createElement("span",{title:L,"aria-hidden":"true"},"..."),N),k&&(I=e.exports.createElement(x,{title:!0===k?d:k},e.exports.createElement("span",null,I)))}else I=e.exports.createElement(e.exports.Fragment,null,d,N);return I=function(t,n){var r=t.mark,i=t.code,o=t.underline,a=t.delete,l=t.strong,s=t.keyboard,c=t.italic,p=n;function d(t,n){t&&(p=e.exports.createElement(n,{},p))}return d(l,"strong"),d(o,"u"),d(a,"del"),d(i,"code"),d(r,"mark"),d(s,"kbd"),d(c,"i"),p}(this.props,I),e.exports.createElement(C,{componentName:"Text"},(function(n){var r,l=n.edit,s=n.copy,c=n.copied,d=n.expand;return t.editStr=l,t.copyStr=s,t.copiedStr=c,t.expandStr=d,e.exports.createElement(O,{onResize:t.resizeOnNextFrame,disabled:P},e.exports.createElement(z,a({className:i((r={},o(r,"".concat(j,"-").concat(f),f),o(r,"".concat(j,"-disabled"),y),o(r,"".concat(j,"-ellipsis"),S),o(r,"".concat(j,"-single-line"),1===S),o(r,"".concat(j,"-ellipsis-single-line"),R),o(r,"".concat(j,"-ellipsis-multiple-line"),A),r),u),style:a(a({},h),{WebkitLineClamp:A?S:void 0}),component:p,ref:t.contentRef,direction:m},T),I,t.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var n=e.children,r=e.editable;return t(!r||"string"==typeof n,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),l}(e.exports.Component);$.contextType=w,$.defaultProps={children:""};var ee=$,te=function(n){var r=n.ellipsis,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(n,["ellipsis"]),o=e.exports.useMemo((function(){return r&&"object"===h(r)?g(r,["expandable","rows"]):r}),[r]);return t("object"!==h(r)||!r||!("expandable"in r)&&!("rows"in r),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),e.exports.createElement(ee,a({},i,{ellipsis:o,component:"span"}))},ne=function(n,r){var i=n.ellipsis,o=n.rel,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(n,["ellipsis","rel"]);t("object"!==h(i),"Typography.Link","`ellipsis` only supports boolean value.");var s=e.exports.useRef(null);e.exports.useImperativeHandle(r,(function(){var e;return null===(e=s.current)||void 0===e?void 0:e.contentRef.current}));var c=a(a({},l),{rel:void 0===o&&"_blank"===l.target?"noopener noreferrer":o});return delete c.navigate,e.exports.createElement(ee,a({},c,{ref:s,ellipsis:!!i,component:"a"}))},re=e.exports.forwardRef(ne),ie=N(1,2,3,4,5),oe=function(n){var r,i=n.level,o=void 0===i?1:i,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(n,["level"]);return-1!==ie.indexOf(o)?r="h".concat(o):(t(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),r="h1"),e.exports.createElement(ee,a({},l,{component:r}))},ae=function(t){return e.exports.createElement(ee,a({},t,{component:"div"}))},le=z;le.Text=te,le.Link=re,le.Title=oe,le.Paragraph=ae;var se=le;export{se as T};