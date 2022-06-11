import{r as t,o as i,c as l,a as n,b as a,w as r,F as c,d as s,e as o}from"./app.0de55949.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},b=n("h1",{id:"documentation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),s(" Documentation")],-1),h=s("Required Dependencies"),m=n("h2",{id:"setting-up-the-local-environment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setting-up-the-local-environment","aria-hidden":"true"},"#"),s(" Setting up the local environment")],-1),k=s("To start you need to fork the project on GitHub, see: "),g={href:"https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"},_=s("Fork a repo"),v=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone the repo locally</span>
<span class="token function">git</span> clone https://github.com/<span class="token operator">&lt;</span>YOUR GITHUB NAME<span class="token operator">&gt;</span>/joplin-utils.git
<span class="token comment"># Navigate to documentation folder</span>
<span class="token builtin class-name">cd</span> website/
<span class="token comment"># Install required dependencies</span>
<span class="token function">yarn</span>
<span class="token comment"># Start the local development environment</span>
<span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,1),f=s("You should be able to see a preview of the local documentation at "),q={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},j=s("http://localhost:8080/"),x=n("h2",{id:"adding-document-translations",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#adding-document-translations","aria-hidden":"true"},"#"),s(" Adding document translations")],-1),y=s("Check the existing "),w={href:"https://github.com/rxliuli/joplin-utils/issues/9",target:"_blank",rel:"noopener noreferrer"},N=s("documentation optimization"),A=s(" list. Select a task and reply to the specific line in the issue"),B=s("As we are using "),C={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},E=s("vuepress2"),F=s(" you need to understand the basic configuration i.e. how to modify the navigation bar and sidebar as well as how to add new documents"),I=n("li",null,[s("Add new documents to "),n("em",null,"docs/"),s(" then modify "),n("em",null,"docs/.vuepress/config.js"),s(" to add them to the website")],-1),L=o(`<p>You will notice that the configuration for the navigation bar is basically a nested array, the sidebar configuration is set via a link within the navigation bar. For example, this is an existing configuration for the joplin-vscode-plugin documentation</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;navbar&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;joplin-vscode-plugin&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;joplin-vscode-plugin/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>We can then configure <code>&quot;/joplin-vscode-plugin/&quot;</code> in the corresponding sidebar list</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sidebar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;/zh/joplin-vscode-plugin/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guide&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;/joplin-vscode-plugin/&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/faq&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/feature&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/recommended-extension&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/joplin-vscode-plugin/guide/limitations&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,4);function R(S,V){const p=t("RouterLink"),e=t("ExternalLinkIcon");return i(),l(c,null,[b,n("blockquote",null,[n("p",null,[a(p,{to:"/dev/require.html"},{default:r(()=>[h]),_:1})])]),m,n("p",null,[k,n("a",g,[_,a(e)])]),v,n("p",null,[f,n("a",q,[j,a(e)])]),x,n("ol",null,[n("li",null,[y,n("a",w,[N,a(e)]),A]),n("li",null,[B,n("a",C,[E,a(e)]),F]),I]),L],64)}var Y=u(d,[["render",R]]);export{Y as default};
