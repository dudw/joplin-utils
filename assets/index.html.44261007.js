import{r as a,o as e,c as i,a as l,b as r,F as n,e as t,d as h}from"./app.ac92f866.js";const o={},s=t('<h1 id="joplin-batch-web" tabindex="-1"><a class="header-anchor" href="#joplin-batch-web" aria-hidden="true">#</a> joplin-batch-web</h1><p>处理一些 Joplin 本身不支持的批量操作，以可视化界面的形式展现出来。</p><ul><li>[x] 检查是否存在没有引用的附件资源 一些没有使用的附件资源没有被及时清理</li><li>[x] 检查引用的附件资源不存在的情况 一些正在使用的附件可能由于各种原因不存在了</li><li>[x] 转换外部链接为内部笔记引用 希望能够将之前的 blog 链接转换为内部的 <code>:/id</code> 链接以保证永不过期</li><li>[x] 检查是否存在没有父级目录的笔记（一般是错误）</li></ul><h3 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h3>',4),d=l("li",null,"打开 joplin 桌面版",-1),c=l("li",null,"启用网页剪辑器",-1),p=h("在 "),u={href:"https://joplin-utils.rxliuli.com/joplin-batch-web/#/settings",target:"_blank",rel:"noopener noreferrer"},b=h("设置"),f=h(" 页面填写配置"),x=l("li",null,"导航到相关功能页面",-1),j=t('<p><img src="https://github.com/rxliuli/joplin-utils/raw/master/apps/joplin-batch-web/docs/images/guide.gif" alt="guide"></p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="为什么不使用-cli-的形式" tabindex="-1"><a class="header-anchor" href="#为什么不使用-cli-的形式" aria-hidden="true">#</a> 为什么不使用 cli 的形式</h3><p>cli 的形式不太适合这种场景，例如需要预览异常的附件或笔记，在命令行下比较麻烦。</p><h3 id="它会记录我的笔记数据么" tabindex="-1"><a class="header-anchor" href="#它会记录我的笔记数据么" aria-hidden="true">#</a> 它会记录我的笔记数据么</h3>',5),g=h("网站是全本地工作的，没有后端服务器，如果你仍然担忧，可以检查源代码 "),m={href:"https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-batch-web",target:"_blank",rel:"noopener noreferrer"},w=h("joplin-batch-web");o.render=function(t,h){const o=a("OutboundLink");return e(),i(n,null,[s,l("ol",null,[d,c,l("li",null,[p,l("a",u,[b,r(o)]),f]),x]),j,l("p",null,[g,l("a",m,[w,r(o)])])],64)};export{o as default};
