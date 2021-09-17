import{r as n,o as e,c as a,a as s,b as r,F as l,d as i,e as t}from"./app.ac92f866.js";const o={},u=s("h1",{id:"环境要求",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#环境要求","aria-hidden":"true"},"#"),i(" 环境要求")],-1),c=s("ul",null,[s("li",null,"nodejs >= v14"),s("li",null,"yarn"),s("li",null,"git"),s("li",null,"github")],-1),d=s("h2",{id:"安装-nodejs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装-nodejs","aria-hidden":"true"},"#"),i(" 安装 nodejs")],-1),p=i("从 "),h={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},b=i("nodejs 官网"),g=i(" 下载并安装最新版，然后使用下面的命令检查是否成功安装"),m=t('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>node -v\n<span class="token function">npm</span> -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装-yarn" tabindex="-1"><a class="header-anchor" href="#安装-yarn" aria-hidden="true">#</a> 安装 yarn</h2><p>在安装完 nodejs 之后，使用命令安装 yarn</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -g <span class="token function">yarn</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>检查是否成功安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="注册-github" tabindex="-1"><a class="header-anchor" href="#注册-github" aria-hidden="true">#</a> 注册 github</h2>',7),f=i("进入 "),v={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},k=i("github 官网"),x=i("，点击 sign up，输入邮箱和密码即可成功注册。"),j=s("h2",{id:"安装-git",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装-git","aria-hidden":"true"},"#"),i(" 安装 git")],-1),y=i("从 "),_={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},q=i("git 官网"),A=i(" 下载 git 安装包（如果是 linux/macos，那么你可能已经安装它了），安装完成后检查"),M=t('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> --version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后设置你的本地用户名和邮箱</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;FIRST_NAME LAST_NAME&quot;</span>\n<span class="token function">git</span> config --global user.email <span class="token string">&quot;MY_NAME@example.com&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',3),E=i("具体如何结合 git 和 github 一起使用请参考 "),N={href:"https://docs.github.com/cn/github/getting-started-with-github/quickstart/set-up-git",target:"_blank",rel:"noopener noreferrer"},F=i("github 官方文档");o.render=function(i,t){const o=n("OutboundLink");return e(),a(l,null,[u,c,d,s("p",null,[p,s("a",h,[b,r(o)]),g]),m,s("p",null,[f,s("a",v,[k,r(o)]),x]),j,s("p",null,[y,s("a",_,[q,r(o)]),A]),M,s("blockquote",null,[s("p",null,[E,s("a",N,[F,r(o)])])])],64)};export{o as default};
