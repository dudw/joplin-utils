import{J as e,ad as t,ae as r,ac as n,C as a,ah as o,a1 as i,j as l,_ as s,a8 as u,N as c,k as p,D as d,B as f,h as v,m,q as x,z as h,l as g,y as b,p as y,s as w}from"./vendor.f9e4dcb2.js";var A=e("text","input");function C(e){return!!(e.prefix||e.suffix||e.allowClear)}function z(e){return!(!e.addonBefore&&!e.addonAfter)}var S=function(e){t(p,e);var c=r(p);function p(){var e;return n(this,p),(e=c.apply(this,arguments)).containerRef=a.exports.createRef(),e.onInputMouseUp=function(t){var r;if(null===(r=e.containerRef.current)||void 0===r?void 0:r.contains(t.target)){var n=e.props.triggerFocus;null==n||n()}},e}return o(p,[{key:"renderClearIcon",value:function(e){var t=this.props,r=t.allowClear,n=t.value,o=t.disabled,u=t.readOnly,c=t.handleReset;if(!r)return null;var p=!o&&!u&&n,d="".concat(e,"-clear-icon");return a.exports.createElement(i,{onClick:c,onMouseDown:function(e){return e.preventDefault()},className:l(s({},"".concat(d,"-hidden"),!p),d),role:"button"})}},{key:"renderSuffix",value:function(e){var t=this.props,r=t.suffix,n=t.allowClear;return r||n?a.exports.createElement("span",{className:"".concat(e,"-suffix")},this.renderClearIcon(e),r):null}},{key:"renderLabeledIcon",value:function(e,t){var r,n=this.props,o=n.focused,i=n.value,c=n.prefix,p=n.className,d=n.size,f=n.suffix,v=n.disabled,m=n.allowClear,x=n.direction,h=n.style,g=n.readOnly,b=n.bordered,y=this.renderSuffix(e);if(!C(this.props))return u(t,{value:i});var w=c?a.exports.createElement("span",{className:"".concat(e,"-prefix")},c):null,A=l("".concat(e,"-affix-wrapper"),(s(r={},"".concat(e,"-affix-wrapper-focused"),o),s(r,"".concat(e,"-affix-wrapper-disabled"),v),s(r,"".concat(e,"-affix-wrapper-sm"),"small"===d),s(r,"".concat(e,"-affix-wrapper-lg"),"large"===d),s(r,"".concat(e,"-affix-wrapper-input-with-clear-btn"),f&&m&&i),s(r,"".concat(e,"-affix-wrapper-rtl"),"rtl"===x),s(r,"".concat(e,"-affix-wrapper-readonly"),g),s(r,"".concat(e,"-affix-wrapper-borderless"),!b),s(r,"".concat(p),!z(this.props)&&p),r));return a.exports.createElement("span",{ref:this.containerRef,className:A,style:h,onMouseUp:this.onInputMouseUp},w,u(t,{style:null,value:i,className:N(e,b,d,v)}),y)}},{key:"renderInputWithLabel",value:function(e,t){var r,n=this.props,o=n.addonBefore,i=n.addonAfter,c=n.style,p=n.size,d=n.className,f=n.direction;if(!z(this.props))return t;var v="".concat(e,"-group"),m="".concat(v,"-addon"),x=o?a.exports.createElement("span",{className:m},o):null,h=i?a.exports.createElement("span",{className:m},i):null,g=l("".concat(e,"-wrapper"),v,s({},"".concat(v,"-rtl"),"rtl"===f)),b=l("".concat(e,"-group-wrapper"),(s(r={},"".concat(e,"-group-wrapper-sm"),"small"===p),s(r,"".concat(e,"-group-wrapper-lg"),"large"===p),s(r,"".concat(e,"-group-wrapper-rtl"),"rtl"===f),r),d);return a.exports.createElement("span",{className:b,style:c},a.exports.createElement("span",{className:g},x,u(t,{style:null}),h))}},{key:"renderTextAreaWithClearIcon",value:function(e,t){var r,n=this.props,o=n.value,i=n.allowClear,c=n.className,p=n.style,d=n.direction,f=n.bordered;if(!i)return u(t,{value:o});var v=l("".concat(e,"-affix-wrapper"),"".concat(e,"-affix-wrapper-textarea-with-clear-btn"),(s(r={},"".concat(e,"-affix-wrapper-rtl"),"rtl"===d),s(r,"".concat(e,"-affix-wrapper-borderless"),!f),s(r,"".concat(c),!z(this.props)&&c),r));return a.exports.createElement("span",{className:v,style:p},u(t,{style:null,value:o}),this.renderClearIcon(e))}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,r=e.inputType,n=e.element;return r===A[0]?this.renderTextAreaWithClearIcon(t,n):this.renderInputWithLabel(t,this.renderLabeledIcon(t,n))}}]),p}(a.exports.Component);function E(e){return null==e?"":e}function I(e,t,r,n){if(r){var a=t,o=e.value;return"click"===t.type?((a=Object.create(t)).target=e,a.currentTarget=e,e.value="",r(a),void(e.value=o)):void 0!==n?((a=Object.create(t)).target=e,a.currentTarget=e,e.value=n,void r(a)):void r(a)}}function N(e,t,r,n,a){var o;return l(e,(s(o={},"".concat(e,"-sm"),"small"===r),s(o,"".concat(e,"-lg"),"large"===r),s(o,"".concat(e,"-disabled"),n),s(o,"".concat(e,"-rtl"),"rtl"===a),s(o,"".concat(e,"-borderless"),!t),o))}function T(e,t){if(e){e.focus(t);var r=(t||{}).cursor;if(r){var n=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(n,n);break;default:e.setSelectionRange(0,n)}}}}var R=function(e){t(u,e);var i=r(u);function u(e){var t;n(this,u),(t=i.call(this,e)).direction="ltr",t.focus=function(e){T(t.input,e)},t.saveClearableInput=function(e){t.clearableInput=e},t.saveInput=function(e){t.input=e},t.onFocus=function(e){var r=t.props.onFocus;t.setState({focused:!0},t.clearPasswordValueAttribute),null==r||r(e)},t.onBlur=function(e){var r=t.props.onBlur;t.setState({focused:!1},t.clearPasswordValueAttribute),null==r||r(e)},t.handleReset=function(e){t.setValue("",(function(){t.focus()})),I(t.input,e,t.props.onChange)},t.renderInput=function(e,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=t.props,u=i.className,d=i.addonBefore,f=i.addonAfter,v=i.size,m=i.disabled,x=c(t.props,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","inputType","bordered"]);return a.exports.createElement("input",p({autoComplete:o.autoComplete},x,{onChange:t.handleChange,onFocus:t.onFocus,onBlur:t.onBlur,onKeyDown:t.handleKeyDown,className:l(N(e,n,v||r,m,t.direction),s({},u,u&&!d&&!f)),ref:t.saveInput}))},t.clearPasswordValueAttribute=function(){t.removePasswordTimeout=setTimeout((function(){t.input&&"password"===t.input.getAttribute("type")&&t.input.hasAttribute("value")&&t.input.removeAttribute("value")}))},t.handleChange=function(e){t.setValue(e.target.value,t.clearPasswordValueAttribute),I(t.input,e,t.props.onChange)},t.handleKeyDown=function(e){var r=t.props,n=r.onPressEnter,a=r.onKeyDown;n&&13===e.keyCode&&n(e),null==a||a(e)},t.renderComponent=function(e){var r=e.getPrefixCls,n=e.direction,o=e.input,i=t.state,l=i.value,s=i.focused,u=t.props,c=u.prefixCls,f=u.bordered,v=void 0===f||f,m=r("input",c);return t.direction=n,a.exports.createElement(d.Consumer,null,(function(e){return a.exports.createElement(S,p({size:e},t.props,{prefixCls:m,inputType:"input",value:E(l),element:t.renderInput(m,e,v,o),handleReset:t.handleReset,ref:t.saveClearableInput,direction:n,focused:s,triggerFocus:t.focus,bordered:v}))}))};var r=void 0===e.value?e.defaultValue:e.value;return t.state={value:r,focused:!1,prevValue:e.value},t}return o(u,[{key:"componentDidMount",value:function(){this.clearPasswordValueAttribute()}},{key:"componentDidUpdate",value:function(){}},{key:"getSnapshotBeforeUpdate",value:function(e){return C(e)!==C(this.props)&&f(this.input!==document.activeElement,"Input","When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"),null}},{key:"componentWillUnmount",value:function(){this.removePasswordTimeout&&clearTimeout(this.removePasswordTimeout)}},{key:"blur",value:function(){this.input.blur()}},{key:"setSelectionRange",value:function(e,t,r){this.input.setSelectionRange(e,t,r)}},{key:"select",value:function(){this.input.select()}},{key:"setValue",value:function(e,t){void 0===this.props.value?this.setState({value:e},t):null==t||t()}},{key:"render",value:function(){return a.exports.createElement(v,null,this.renderComponent)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=t.prevValue,n={prevValue:e.value};return void 0===e.value&&r===e.value||(n.value=e.value),n}}]),u}(a.exports.Component);R.defaultProps={type:"text"};var k,F,P,V=R,D="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",O=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"],j={};function B(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&j[r])return j[r];var n=window.getComputedStyle(e),a=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),o=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),i=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),l=O.map((function(e){return"".concat(e,":").concat(n.getPropertyValue(e))})).join(";"),s={sizingStyle:l,paddingSize:o,borderSize:i,boxSizing:a};return t&&r&&(j[r]=s),s}(P=F||(F={}))[P.NONE=0]="NONE",P[P.RESIZING=1]="RESIZING",P[P.RESIZED=2]="RESIZED";var M=function(e){t(u,e);var i=r(u);function u(e){var t;return n(this,u),(t=i.call(this,e)).saveTextArea=function(e){t.textArea=e},t.handleResize=function(e){var r=t.state.resizeStatus,n=t.props,a=n.autoSize,o=n.onResize;r===F.NONE&&("function"==typeof o&&o(e),a&&t.resizeOnNextFrame())},t.resizeOnNextFrame=function(){cancelAnimationFrame(t.nextFrameActionId),t.nextFrameActionId=requestAnimationFrame(t.resizeTextarea)},t.resizeTextarea=function(){var e=t.props.autoSize;if(e&&t.textArea){var r=e.minRows,n=e.maxRows,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;k||((k=document.createElement("textarea")).setAttribute("tab-index","-1"),k.setAttribute("aria-hidden","true"),document.body.appendChild(k)),e.getAttribute("wrap")?k.setAttribute("wrap",e.getAttribute("wrap")):k.removeAttribute("wrap");var a=B(e,t),o=a.paddingSize,i=a.borderSize,l=a.boxSizing,s=a.sizingStyle;k.setAttribute("style","".concat(s,";").concat(D)),k.value=e.value||e.placeholder||"";var u,c=Number.MIN_SAFE_INTEGER,p=Number.MAX_SAFE_INTEGER,d=k.scrollHeight;if("border-box"===l?d+=i:"content-box"===l&&(d-=o),null!==r||null!==n){k.value=" ";var f=k.scrollHeight-o;null!==r&&(c=f*r,"border-box"===l&&(c=c+o+i),d=Math.max(c,d)),null!==n&&(p=f*n,"border-box"===l&&(p=p+o+i),u=d>p?"":"hidden",d=Math.min(p,d))}return{height:d,minHeight:c,maxHeight:p,overflowY:u,resize:"none"}}(t.textArea,!1,r,n);t.setState({textareaStyles:a,resizeStatus:F.RESIZING},(function(){cancelAnimationFrame(t.resizeFrameId),t.resizeFrameId=requestAnimationFrame((function(){t.setState({resizeStatus:F.RESIZED},(function(){t.resizeFrameId=requestAnimationFrame((function(){t.setState({resizeStatus:F.NONE}),t.fixFirefoxAutoScroll()}))}))}))}))}},t.renderTextArea=function(){var e=t.props,r=e.prefixCls,n=void 0===r?"rc-textarea":r,o=e.autoSize,i=e.onResize,u=e.className,d=e.disabled,f=t.state,v=f.textareaStyles,h=f.resizeStatus,g=c(t.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),b=l(n,u,s({},"".concat(n,"-disabled"),d));"value"in g&&(g.value=g.value||"");var y=m(m(m({},t.props.style),v),h===F.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return a.exports.createElement(x,{onResize:t.handleResize,disabled:!(o||i)},a.exports.createElement("textarea",p({},g,{className:b,style:y,ref:t.saveTextArea})))},t.state={textareaStyles:{},resizeStatus:F.NONE},t}return o(u,[{key:"componentDidMount",value:function(){this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var e=this.textArea.selectionStart,t=this.textArea.selectionEnd;this.textArea.setSelectionRange(e,t)}}catch(r){}}},{key:"render",value:function(){return this.renderTextArea()}}]),u}(a.exports.Component),K=function(e){t(l,e);var i=r(l);function l(e){var t;n(this,l),(t=i.call(this,e)).focus=function(){t.resizableTextArea.textArea.focus()},t.saveTextArea=function(e){t.resizableTextArea=e},t.handleChange=function(e){var r=t.props.onChange;t.setValue(e.target.value,(function(){t.resizableTextArea.resizeTextarea()})),r&&r(e)},t.handleKeyDown=function(e){var r=t.props,n=r.onPressEnter,a=r.onKeyDown;13===e.keyCode&&n&&n(e),a&&a(e)};var r=void 0===e.value||null===e.value?e.defaultValue:e.value;return t.state={value:r},t}return o(l,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return a.exports.createElement(M,p({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),l}(a.exports.Component);function U(e,t){return y(e||"").slice(0,t).join("")}var L=a.exports.forwardRef((function(e,t){var r,n=e.prefixCls,o=e.bordered,i=void 0===o||o,u=e.showCount,f=void 0!==u&&u,v=e.maxLength,m=e.className,x=e.style,A=e.size,C=e.onCompositionStart,z=e.onCompositionEnd,N=e.onChange,R=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["prefixCls","bordered","showCount","maxLength","className","style","size","onCompositionStart","onCompositionEnd","onChange"]),k=a.exports.useContext(h),F=k.getPrefixCls,P=k.direction,V=a.exports.useContext(d),D=a.exports.useRef(null),O=a.exports.useRef(null),j=a.exports.useState(!1),B=g(j,2),M=B[0],L=B[1],W=b(R.defaultValue,{value:R.value}),Z=g(W,2),G=Z[0],H=Z[1],_=function(e,t){void 0===R.value&&(H(e),null==t||t())},q=Number(v)>0,X=F("input",n);a.exports.useImperativeHandle(t,(function(){var e;return{resizableTextArea:null===(e=D.current)||void 0===e?void 0:e.resizableTextArea,focus:function(e){var t,r;T(null===(r=null===(t=D.current)||void 0===t?void 0:t.resizableTextArea)||void 0===r?void 0:r.textArea,e)},blur:function(){var e;return null===(e=D.current)||void 0===e?void 0:e.blur()}}}));var Y=a.exports.createElement(K,p({},c(R,["allowClear"]),{className:l((r={},s(r,"".concat(X,"-borderless"),!i),s(r,m,m&&!f),s(r,"".concat(X,"-sm"),"small"===V||"small"===A),s(r,"".concat(X,"-lg"),"large"===V||"large"===A),r)),style:f?void 0:x,prefixCls:X,onCompositionStart:function(e){L(!0),null==C||C(e)},onChange:function(e){var t=e.target.value;!M&&q&&(t=U(t,v)),_(t),I(e.currentTarget,e,N,t)},onCompositionEnd:function(e){L(!1);var t=e.currentTarget.value;q&&(t=U(t,v)),t!==G&&(_(t),I(e.currentTarget,e,N,t)),null==z||z(e)},ref:D})),J=E(G);M||!q||null!==R.value&&void 0!==R.value||(J=U(J,v));var Q=a.exports.createElement(S,p({},R,{prefixCls:X,direction:P,inputType:"text",value:J,element:Y,handleReset:function(e){var t,r;_("",(function(){var e;null===(e=D.current)||void 0===e||e.focus()})),I(null===(r=null===(t=D.current)||void 0===t?void 0:t.resizableTextArea)||void 0===r?void 0:r.textArea,e,N)},ref:O,bordered:i,style:f?void 0:x}));if(f){var $=y(J).length,ee="";return ee="object"===w(f)?f.formatter({count:$,maxLength:v}):"".concat($).concat(q?" / ".concat(v):""),a.exports.createElement("div",{className:l("".concat(X,"-textarea"),s({},"".concat(X,"-textarea-rtl"),"rtl"===P),"".concat(X,"-textarea-show-count"),m),style:x,"data-count":ee},Q)}return Q}));export{V as I,L as T};