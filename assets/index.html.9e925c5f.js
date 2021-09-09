import{r as l,o as e,c as n,a as r,b as i,w as a,F as o,d as p}from"./app.98ae9608.js";const d={},u=r("h1",{id:"快速启动",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#快速启动","aria-hidden":"true"},"#"),p(" 快速启动")],-1),t=r("h2",{id:"概述",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),p(" 概述")],-1),s=r("p",null,"joplin-vscode-plugin 提供在 vscode 中管理 joplin 笔记的功能，包括常见的查看、编辑笔记，管理笔记的标签，添加、修改附件，内部链接、搜索等功能。",-1),h=r("p",null,"Joplin Web Clipper 旨在通过 REST Web API 与浏览器扩展进行通信，共享笔记、笔记本、标签等。joplin-vscode-plugin 连接到相同的 REST 端点，可以在不离开编辑器的情况下查看和修改笔记。",-1),c=p("为什么会有这个插件？阅读 "),b=p("我的动机"),g=p(" 了解开发它的原因。"),f=p("它能做什么？"),C=p("路线图"),J=p(" 列出了现有和计划中的功能。"),j=p("没听说过 "),v={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},m=p("乔普林"),x=p("？你错过了一个不错的 "),S={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},k=p("开源同步笔记应用"),V=p("。"),W=r("h2",{id:"要求",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#要求","aria-hidden":"true"},"#"),p(" 要求")],-1),_=r("ul",null,[r("li",null,"Joplin 版本 > v1.4.19"),r("li",null,"VSCode 版本 > v1.45.0"),r("li",null,"启用 Joplin Web Clipper"),r("li",null,"熟悉 Joplin 和 VSCode 的基本使用方法")],-1),w=r("h2",{id:"安装-joplin-vscode-插件",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#安装-joplin-vscode-插件","aria-hidden":"true"},"#"),p(" 安装 Joplin VSCode 插件")],-1),P=r("p",null,"在 VSCode 市场中搜索 joplin。找到 joplin-vscode-plugin 并点击安装。",-1),R=r("p",null,[r("img",{src:"/assets/install-plugin.ad435f16.png",alt:"安装插件"})],-1),T=r("h2",{id:"配置",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),p(" 配置")],-1),q=r("p",null,"要访问 Joplin 数据库，我们需要连接到 Joplin Web Clipper 打开的 API 端点。这意味着 Joplin 必须运行，Web Clipper 必须启用。",-1),z=p("关于 Web Clipper 的帮助，请参考 "),A={href:"https://joplinapp.org/clipper/",target:"_blank",rel:"noopener noreferrer"},E=p("Joplin Web Clipper"),I=p("。"),L=r("p",null,"要启动并运行，需要注意三个设置。",-1),F=r("p",null,"端口",-1),O=r("ul",null,[r("li",null,[p("从 Joplin 设置中复制端口号并粘贴到这里。启用 Web Clipper 后，会显示活动端口。 "),r("strong",null,"网页剪辑 -> 第 1 步：启用网页剪辑服务 -> 状态"),p("。")])],-1),y=r("p",null,"授权令牌",-1),B=r("ul",null,[r("li",null,[p("从 Joplin 设置中复制你的授权令牌并粘贴到这里。 "),r("strong",null,"网页剪辑 -> 高级选项 -> 拷贝 Token 令牌"),p("。")])],-1),D=r("p",null,"Joplin 程序的个人目录",-1),G=r("p",null,"如果你希望使用附件相关功能，该设置是必须的。",-1),H=r("p",null,[p("一般而言，如果你使用便携程序，它应该就是程序目录下的 "),r("code",null,"./JoplinProfile"),p(" 目录，你应该可以在其中看到 "),r("em",null,"resources"),p("、"),r("em",null,"templates"),p("、"),r("em",null,"tmp"),p(" 目录。")],-1),K=r("p",null,[r("img",{src:"/assets/joplin-settings.283096ff.png",alt:"安装插件"})],-1),M=r("h2",{id:"重新启动-vscode",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#重新启动-vscode","aria-hidden":"true"},"#"),p(" 重新启动 VSCode")],-1),N=r("p",null,"目前配置编辑后不会自动重新连接，需要关闭 VSCode，下次启动时它就会连接到 Joplin。",-1),Q=r("h2",{id:"开始使用",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#开始使用","aria-hidden":"true"},"#"),p(" 开始使用")],-1),U=r("p",null,[p("输入快捷键 "),r("code",null,"Ctrl+J Ctrl+J"),p("，然后庆祝 🎉。这个快捷键组合激活了 "),r("code",null,"view: show joplin"),p(" 命令，打开侧边栏，显示所有的笔记本。")],-1),X=r("p",null,[r("img",{src:"https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png",alt:"预览"})],-1),Y=r("h2",{id:"功能",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#功能","aria-hidden":"true"},"#"),p(" 功能")],-1),Z=r("p",null,"您的所有笔记和记事本都可以在侧边栏中找到，展开笔记本可以看到下面的子笔记本和笔记。",-1),$=r("p",null,"点击一个笔记，在编辑器中打开一个工作副本，保存它以将修改推送回 Joplin。",-1),ll=r("p",null,[p("你可以随心所欲地创建、编辑和删除 "),r("strong",null,"笔记"),p(" 和 "),r("strong",null,"笔记本"),p("，一切都在 VSCode 中不间断的完成。🦸♀️")],-1),el=r("h2",{id:"命令和键绑定",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#命令和键绑定","aria-hidden":"true"},"#"),p(" 命令和键绑定")],-1),nl=r("p",null,[p("VSCode 有很多快捷键键绑定，为了避免与内置的快捷键冲突，我们假定了一个快捷键前缀 "),r("code",null,"Ctrl+J"),p("，在后面继续添加二步快捷键键。")],-1),rl=r("p",null,[p("提示：探索在命令调色板中输入 "),r("code",null,"joplin"),p(" 的结果，找出我没有告诉你的伟大功能。")],-1);d.render=function(p,d){const il=l("RouterLink"),al=l("OutboundLink");return e(),n(o,null,[u,t,s,h,r("blockquote",null,[r("p",null,[c,i(il,{to:"/zh/joplin-vscode-plugin/other/"},{default:a((()=>[b])),_:1}),g]),r("p",null,[f,i(il,{to:"/zh/joplin-vscode-plugin/other/roadmap.html"},{default:a((()=>[C])),_:1}),J]),r("p",null,[j,r("a",v,[m,i(al)]),x,r("a",S,[k,i(al)]),V])]),W,_,w,P,R,T,q,r("blockquote",null,[r("p",null,[z,r("a",A,[E,i(al)]),I])]),L,F,O,y,B,D,G,H,K,M,N,Q,U,X,Y,Z,$,ll,el,nl,rl],64)};export{d as default};
