import{r as n,o as s,c as a,a as e,b as p,w as t,F as o,d as l,e as r}from"./app.252536b6.js";const u={},c=e("h1",{id:"文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),l(" 文档")],-1),i=l("环境要求"),b=e("h2",{id:"初始化本地环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#初始化本地环境","aria-hidden":"true"},"#"),l(" 初始化本地环境")],-1),d=l("首先，在 github 上 fork 项目，参考："),k={href:"https://docs.github.com/cn/github/getting-started-with-github/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"},m=l("复刻仓库"),g=r('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 克隆项目到本地</span>\n<span class="token function">git</span> clone https://github.com/<span class="token operator">&lt;</span>YOUR GITHUB NAME<span class="token operator">&gt;</span>/joplin-utils.git\n<span class="token comment"># 进入到文档模块</span>\n<span class="token builtin class-name">cd</span> website/\n<span class="token comment"># 安装依赖</span>\n<span class="token function">yarn</span>\n<span class="token comment"># 启动本地开发环境</span>\n<span class="token function">yarn</span> docs:dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',1),h=l("你应该可以在 "),q={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},v=l("http://localhost:8080/"),f=l(" 看到本地文档的预览。"),j=e("h2",{id:"添加文档翻译",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加文档翻译","aria-hidden":"true"},"#"),l(" 添加文档翻译")],-1),x=l("检查现有的 "),z={href:"https://github.com/rxliuli/joplin-utils/issues/9",target:"_blank",rel:"noopener noreferrer"},y=l("文件优化进度列表"),_=l("，可以选择某项任务，在 issue 中选择并回复指定行"),w=l("由于吾辈使用了 "),L={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},O=l("vuepress2"),R=l("，所以需要了解基本的配置，即如何修改导航栏、侧边栏，以及如何添加文档"),U=e("li",null,[l("在 "),e("em",null,"docs/"),l(" 或 "),e("em",null,"docs/zh/"),l(" 下添加文档，然后在 "),e("em",null,"docs/.vuepress/config.js"),l(" 中配置即可")],-1),A=r('<p>仔细观察你会发现，导航栏基本上是一个嵌套数组，而每个侧边栏配置其实是针对导航栏的末节点的 link 做配置。 例如吾辈在导航栏中有这样一个配置</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;navbar&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;joplin-vscode-plugin&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/zh/joplin-vscode-plugin/&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>那么吾辈必须配置 <code>&quot;/zh/joplin-vscode-plugin/&quot;</code> 对应的侧边栏列表</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;sidebar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;/zh/joplin-vscode-plugin/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;指南&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token string">&quot;/zh/joplin-vscode-plugin/&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/zh/joplin-vscode-plugin/guide/faq&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/zh/joplin-vscode-plugin/guide/feature&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/zh/joplin-vscode-plugin/guide/recommended-extension&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/zh/joplin-vscode-plugin/guide/limitations&quot;</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',4);u.render=function(l,r){const u=n("RouterLink"),B=n("OutboundLink");return s(),a(o,null,[c,e("blockquote",null,[e("p",null,[p(u,{to:"/zh/dev/require.html"},{default:t((()=>[i])),_:1})])]),b,e("p",null,[d,e("a",k,[m,p(B)])]),g,e("p",null,[h,e("a",q,[v,p(B)]),f]),j,e("ol",null,[e("li",null,[x,e("a",z,[y,p(B)]),_]),e("li",null,[w,e("a",L,[O,p(B)]),R]),U]),A],64)};export{u as default};