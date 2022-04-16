import{r as i,o as l,c as p,a as n,b as s,F as o,e as r,d as e}from"./app.001839b4.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var t="/images/diff.png";const d={},u=r(`<h1 id="joplin-plugin-cli" tabindex="-1"><a class="header-anchor" href="#joplin-plugin-cli" aria-hidden="true">#</a> joplin-plugin-cli</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u4E00\u4E2A joplin \u63D2\u4EF6\u7684 cli\uFF0C\u652F\u6301\u521B\u5EFA\u4E0E\u6253\u5305\u63D2\u4EF6\uFF0C\u6838\u5FC3\u4F7F\u7528 esbuild\uFF0C\u5B83\u975E\u5E38<strong>\u5FEB</strong>\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -g joplin-plugin-cli <span class="token comment"># \u5B89\u88C5</span>
jpl generate --name test-plugin <span class="token comment"># \u751F\u6210\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> test-plugin
<span class="token function">yarn</span> build <span class="token comment"># \u6253\u5305</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="\u52A8\u673A" tabindex="-1"><a class="header-anchor" href="#\u52A8\u673A" aria-hidden="true">#</a> \u52A8\u673A</h3><p>\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u5B98\u65B9\u7684\u63D2\u4EF6\u6A21\u677F\u9879\u76EE\uFF1F</p><p>\u6700\u8FD1\u524D\u7AEF\u6253\u5305\u5DE5\u5177\u53D1\u751F\u4E86\u5F88\u5927\u7684\u53D8\u5316\uFF0C\u4E3B\u8981\u662F esbuild \u548C swc \u5F15\u53D1\u7684\u6027\u80FD\u9769\u547D\uFF08\u8FD9\u6837\u8BF4\u4E00\u70B9\u90FD\u4E0D\u4E3A\u8FC7\uFF09\uFF0Cvue \u4F5C\u8005\u653E\u5F03 webpack \u800C\u57FA\u4E8E esbuild \u548C rollup \u6784\u5EFA\u4E86\u65B0\u7684\u8DE8\u6846\u67B6\u5DE5\u5177 vite\uFF0C\u6240\u4EE5\u6211\u4E5F\u66F4\u559C\u6B22\u57FA\u4E8E esbuild \u6784\u5EFA\u66F4\u5FEB\u7684\u5DE5\u5177\u3002</p><blockquote><p>\u5B98\u65B9\u63D2\u4EF6\u6A21\u677F\u9879\u76EE\u4F7F\u7528 webpack \u6784\u5EFA\u5927\u7EA6\u9700\u8981 3.87s\uFF0C\u800C\u8FD9\u4E2A cli \u57FA\u4E8E esbuild \u53EA\u9700\u8981 0.17s\u3002 <img src="`+t+`" alt="diff"></p></blockquote><h2 id="\u5982\u4F55\u8FC1\u79FB\u73B0\u6709\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8FC1\u79FB\u73B0\u6709\u63D2\u4EF6" aria-hidden="true">#</a> \u5982\u4F55\u8FC1\u79FB\u73B0\u6709\u63D2\u4EF6\uFF1F</h2><ol><li><p>\u5B89\u88C5\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D joplin-plugin-api joplin-plugin-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u5220\u9664 <em>package.json</em> \u4E2D\u7684 <code>dist/prepare/update</code> \u547D\u4EE4\uFF0C\u5E76\u6DFB\u52A0 <code>dev/build</code> \u547D\u4EE4</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jpl build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jpl build -w&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u8FD0\u884C\u6784\u5EFA\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u66FF\u6362\u4EE3\u7801\u4E2D\u6240\u6709\u7684 <code>import joplin from &#39;api&#39;</code> \u4E3A <code>import joplin from &#39;joplin-plugin-api&#39;</code></p></li><li><p>\u5220\u9664 <code>api</code> \u76EE\u5F55\u3001<code>webpack.config.js</code></p></li></ol><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,13),b={href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},h=e("\u6253\u5305\u5DE5\u5177\u6027\u80FD\u5BF9\u6BD4"),m={href:"https://code.visualstudio.com/api/working-with-extensions/bundling-extension",target:"_blank",rel:"noopener noreferrer"},g=e("vscode \u5B98\u65B9\u63A8\u8350\u4F7F\u7528 esbuild \u6253\u5305\u63D2\u4EF6");function k(f,_){const a=i("ExternalLinkIcon");return l(),p(o,null,[u,n("ul",null,[n("li",null,[n("a",b,[h,s(a)])]),n("li",null,[n("a",m,[g,s(a)])])])],64)}var j=c(d,[["render",k]]);export{j as default};
