function n(t,f){return f.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(r){if(r!=="default"&&!(r in t)){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}})}),Object.freeze(t)}var a=typeof self=="object"?self.FormData:window.FormData,c=Object.freeze(n({__proto__:null,[Symbol.toStringTag]:"Module",default:a},[a]));export{c as b};