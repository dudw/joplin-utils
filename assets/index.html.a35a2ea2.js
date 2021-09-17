import{r as e,o as l,c as t,a as o,b as r,w as i,F as n,d,e as a}from"./app.ac92f866.js";const p={},s=o("h1",{id:"joplin-blog",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#joplin-blog","aria-hidden":"true"},"#"),d(" joplin-blog")],-1),h=o("h2",{id:"场景",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#场景","aria-hidden":"true"},"#"),d(" 场景")],-1),u=o("p",null,"将 Joplin 笔记发布为静态网站的 CLI 工具，目前支持 blog/wiki 两种形式，框架支持 hexo/vuepress/docsify。",-1),c=d("blog "),g={href:"https://joplin-utils.rxliuli.com/blog/hexo/",target:"_blank",rel:"noopener noreferrer"},b=d("hexo"),f={href:"https://joplin-utils.rxliuli.com/blog/vuepress/",target:"_blank",rel:"noopener noreferrer"},m=d("vuepress"),x=d("wiki "),j={href:"https://joplin-utils.rxliuli.com/wiki/vuepress/",target:"_blank",rel:"noopener noreferrer"},k=d("vuepress"),w={href:"https://joplin-utils.rxliuli.com/wiki/docsify/",target:"_blank",rel:"noopener noreferrer"},y=d("docsify"),v=a('<p><img src="https://raw.githubusercontent.com/rxliuli/joplin-utils/master/apps/joplin-blog/docs/blog.png" alt="blog demo"><img src="https://raw.githubusercontent.com/rxliuli/joplin-utils/master/apps/joplin-blog/docs/wiki.png" alt="wiki demo"></p><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><ul><li>安装 nodejs 和 npm/yarn</li><li>了解命令行</li><li>了解 vscode</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>',4),_=d("非开发者安装指南"),q=a('<ol><li>在命令行导航到相关目录</li><li>添加依赖 <code>yarn add -D joplin-blog</code></li><li>添加配置文件 <code>.joplin-blog.json</code>（具体配置参考 <a href="#%E9%85%8D%E7%BD%AE">配置</a>）</li><li>添加一个 npm script 脚本文件 <code>&quot;gen&quot;: &quot;joplin-blog blog&quot;</code>（如果是要生成 wiki 则 <code>&quot;gen&quot;: &quot;joplin-blog wiki&quot;</code>）</li><li>运行命令 <code>yarn gen</code></li><li>然后可以看到相关目录已经包含了笔记和附件资源</li></ol><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>支持的框架在 examples 目录中均有示例，你可以将之 clone 到本地查看。</p>',3),P={href:"https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-hexo-example",target:"_blank",rel:"noopener noreferrer"},E=d("blog hexo"),D={href:"https://github.com/rxliuli/joplin-utils/tree/master/examples/blog-vuepress-example",target:"_blank",rel:"noopener noreferrer"},L=d("blog vuepress"),A={href:"https://github.com/rxliuli/joplin-utils/tree/master/examples/wiki-vuepress-example",target:"_blank",rel:"noopener noreferrer"},I=d("wiki vuepress"),J={href:"https://github.com/rxliuli/joplin-utils/tree/master/examples/wiki-docsify-example",target:"_blank",rel:"noopener noreferrer"},R=d("wiki docsify"),z=a('<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>公共</p><table><thead><tr><th>配置</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>hexo/vuepress/docsify</code></td><td>集成博客的类型</td></tr><tr><td><code>rootPath</code></td><td><code>string</code></td><td>hexo/vuepress 目录，一般应该为 <code>.</code></td></tr><tr><td><code>joplinProfilePath</code></td><td><code>string</code></td><td>joplin 个人文件夹</td></tr><tr><td><code>token</code></td><td><code>string</code></td><td>joplin web clipper 的 token</td></tr><tr><td><code>port</code></td><td><code>number</code></td><td>joplin web clipper 的端口，一般是 <code>41184</code></td></tr><tr><td><code>tag</code></td><td><code>string</code></td><td>joplin 的博客标签</td></tr></tbody></table><p>hexo</p>',4),B=o("thead",null,[o("tr",null,[o("th",null,"配置"),o("th",null,"类型"),o("th",null,"说明")])],-1),C=o("td",null,[o("code",null,"stickyTopIdList")],-1),F=o("td",null,[o("code",null,"string[]")],-1),M=d("置顶的笔记 id（仅在 "),O={href:"https://github.com/fluid-dev/hexo-theme-fluid/blob/master/README_en.md",target:"_blank",rel:"noopener noreferrer"},T=d("fluid 主题"),G=d(" 下生效）"),H=d("我用这个工具分享了 190 多篇笔记，"),K={href:"https://blog.rxliuli.com/",target:"_blank",rel:"noopener noreferrer"},N=d("博客地址（中文）"),Q=a('<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="token-port-指的是什么-在哪儿可以找到" tabindex="-1"><a class="header-anchor" href="#token-port-指的是什么-在哪儿可以找到" aria-hidden="true">#</a> token/port 指的是什么，在哪儿可以找到？</h3><p>一般可以在 <strong>工具 &gt; 选项 &gt; 网页剪辑器</strong> 中看到</p><p><img src="https://img.rxliuli.com/20210316092547.png" alt="joplin web clipper"></p><h3 id="joplin-个人文件夹在哪儿" tabindex="-1"><a class="header-anchor" href="#joplin-个人文件夹在哪儿" aria-hidden="true">#</a> joplin 个人文件夹在哪儿？</h3><p>一般而言，如果你使用便携程序，它应该就是程序目录下的 <code>./JoplinProfile</code> 目录，你应该可以在其中看到 <code>resources、templates、tmp</code> 目录。</p><p><img src="https://img.rxliuli.com/20210316092834.png" alt="joplinProfilePath"></p><h3 id="为什么导出的-blog、wiki-的笔记-id-变了" tabindex="-1"><a class="header-anchor" href="#为什么导出的-blog、wiki-的笔记-id-变了" aria-hidden="true">#</a> 为什么导出的 blog、wiki 的笔记 id 变了？</h3><p>一些可能的原因是</p>',9),S=d("导出 jex 然后再导入 jex，这里的笔记全部都是创建操作，参考："),U={href:"https://discourse.joplinapp.org/t/when-will-joplin-modify-the-id-of-the-note/17806",target:"_blank",rel:"noopener noreferrer"},V=d("https://discourse.joplinapp.org/t/when-will-joplin-modify-the-id-of-the-note/17806"),W=o("li",null,"同步时笔记发生冲突",-1);p.render=function(d,a){const p=e("OutboundLink"),X=e("RouterLink");return l(),t(n,null,[s,h,u,o("ul",null,[o("li",null,[c,o("ul",null,[o("li",null,[o("a",g,[b,r(p)])]),o("li",null,[o("a",f,[m,r(p)])])])]),o("li",null,[x,o("ul",null,[o("li",null,[o("a",j,[k,r(p)])]),o("li",null,[o("a",w,[y,r(p)])])])])]),v,o("blockquote",null,[o("p",null,[r(X,{to:"/zh/joplin-blog/guide.html"},{default:i((()=>[_])),_:1})])]),q,o("ul",null,[o("li",null,[o("a",P,[E,r(p)])]),o("li",null,[o("a",D,[L,r(p)])]),o("li",null,[o("a",A,[I,r(p)])]),o("li",null,[o("a",J,[R,r(p)])])]),z,o("table",null,[B,o("tbody",null,[o("tr",null,[C,F,o("td",null,[M,o("a",O,[T,r(p)]),G])])])]),o("p",null,[H,o("a",K,[N,r(p)])]),Q,o("ul",null,[o("li",null,[S,o("a",U,[V,r(p)])]),W])],64)};export{p as default};
