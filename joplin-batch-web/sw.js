if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const d={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return d;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ab7a52db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/immer.esm.6f40434d.js",revision:"195d04b05fd21a54266dbd12bbc97640"},{url:"assets/index.0c851d10.js",revision:"c99933f52eb8a7e8b5207cd5e468de2a"},{url:"assets/index.177e0925.js",revision:"67ddee048f949ebef8391bead8956cb0"},{url:"assets/index.585c0288.js",revision:"12025bf8a048567f79d884b0bb8c4ab7"},{url:"assets/index.589a1254.js",revision:"5a25e120dc8b4718b9d5a3d38a0b934c"},{url:"assets/index.71759e8c.js",revision:"66df9d83c65c728878443b6b9aba581f"},{url:"assets/index.b159da8e.js",revision:"53af282b00cfbf563de4700abd39f7ef"},{url:"assets/index.b9091a8c.js",revision:"9744e2a732dd0809ea5725275ee6c283"},{url:"assets/index.c0b81ae7.css",revision:"016252503df46e95e14e73832b26ab86"},{url:"assets/index.cb31e19c.css",revision:"373da05b743329360c22695e7cfd6b5c"},{url:"assets/index.d60ec32e.css",revision:"71d0090d41927f29e1750b7f48b603f8"},{url:"assets/index.esm.84052b48.js",revision:"0c64b146625c6848055ac0e89c31e3d2"},{url:"assets/index.f01a236b.css",revision:"7674b87030d115314a81c78c06ba4a6d"},{url:"assets/joplinApiGenerator.9c1230df.js",revision:"d30ef006dd6c74a4097b43b0d1f3ab6b"},{url:"assets/MarkdownLinkUtil.9a875fda.js",revision:"8207e25c343e9936bd9619017e8afe6c"},{url:"assets/mdParser.f362d2a6.js",revision:"eaef11577e95fb64d5fbf7c7c165a9e6"},{url:"assets/parseInternalLink.f26a89f3.js",revision:"16975d6dca9fed7ee2e2f6488346ed99"},{url:"assets/PromiseUtil.a7bff535.js",revision:"17abf0806d4771a0b802a97b7a3cf23e"},{url:"assets/vendor.d7a724cc.js",revision:"2a52dfbfcaeda916e1c089a8769850ed"},{url:"index.html",revision:"e8005704c3be11dc212b84e7501249f7"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"2cbc943862db4e39eb7a480b16f9f963"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
