import{r as a,o as r,c as i,a as e,b as o,F as l,e as t,d as n}from"./app.8616923f.js";import{_ as c}from"./manually-set-token-of-joplin.210cdc5b.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=t(`<h1 id="\u5E38\u95EE\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u95EE\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u95EE\u95EE\u9898</h1><h2 id="\u663E\u793A\u9519\u8BEF\u4FE1\u606F-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u9519\u8BEF\u4FE1\u606F-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" aria-hidden="true">#</a> \u663E\u793A\u9519\u8BEF\u4FE1\u606F <strong>Joplin\u2019s token/port is set incorrectly, unable to access Joplin service!</strong></h2><p>\u8BF7\u5C1D\u8BD5\u5728 CMD/Bash \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5982\u679C\u6CA1\u6709\u95EE\u9898\uFF0C\u5B83\u5E94\u8BE5\u8FD4\u56DE <strong>JoplinClipperServer</strong>\uFF0C\u5426\u5219\u4F60\u9700\u8981\u5411 Joplin \u5B98\u65B9\u63D0 issue\u3002</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>curl http://127.0.0.1:41184/ping
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u70B9\u51FB\u540E\u5728\u5176\u4ED6\u7F16\u8F91\u5668\u4E2D\u6253\u5F00" tabindex="-1"><a class="header-anchor" href="#\u70B9\u51FB\u540E\u5728\u5176\u4ED6\u7F16\u8F91\u5668\u4E2D\u6253\u5F00" aria-hidden="true">#</a> \u70B9\u51FB\u540E\u5728\u5176\u4ED6\u7F16\u8F91\u5668\u4E2D\u6253\u5F00</h2>`,5),u=n("\u8BF7\u53C2\u8003\u5B98\u65B9\u7684\u9ED8\u8BA4\u5916\u90E8\u7F16\u8F91\u5668\u8BBE\u7F6E\uFF1A"),_={href:"https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor",target:"_blank",rel:"noopener noreferrer"},b=n("How can I edit my note in an external text editor?"),m=t('<h2 id="\u5982\u4F55\u5217\u51FA-vscode-\u6253\u5F00\u7684-joplin-\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5217\u51FA-vscode-\u6253\u5F00\u7684-joplin-\u7B14\u8BB0" aria-hidden="true">#</a> \u5982\u4F55\u5217\u51FA VSCode \u6253\u5F00\u7684 joplin \u7B14\u8BB0</h2><p>\u867D\u7136\u6CA1\u6709\u6B63\u5F0F\u7684\u652F\u6301\uFF0C\u4F46\u4F60\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952E <code>c+j c+o</code> \u6765\u5217\u51FA\u6700\u540E\u4FEE\u6539\u7684 20 \u4E2A joplin \u7B14\u8BB0\u505A\u5230\u7C7B\u4F3C\u7684\u4E8B\u60C5\u3002</p><blockquote><p>\u4E4B\u6240\u4EE5\u6CA1\u6709\u6B63\u5F0F\u652F\u6301\uFF0C\u53EF\u80FD\u5C31\u662F\u56E0\u4E3A\u4E24\u8005\u7684\u529F\u80FD\u91CD\u53E0\uFF0C\u53E6\u5916\uFF0Cvscode \u7684\u6700\u8FD1\u6253\u5F00\u7684\u6587\u4EF6\u4E5F\u4E0D\u4EC5\u4EC5\u662F\u5F53\u524D\u7F16\u8F91\u5668\u6B63\u5728\u6253\u5F00\u7684\u6587\u4EF6\uFF0C\u800C\u662F\u5305\u62EC\u5DF2\u7ECF\u5173\u95ED\u7684\u3002</p></blockquote><h2 id="\u63D2\u4EF6\u6CA1\u6709\u663E\u793A\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6CA1\u6709\u663E\u793A\u5217\u8868" aria-hidden="true">#</a> \u63D2\u4EF6\u6CA1\u6709\u663E\u793A\u5217\u8868</h2><p>\u8BF7\u68C0\u67E5\u5B8C joplin \u7684\u914D\u7F6E\u9879\u4E4B\u540E\uFF0C\u91CD\u65B0\u542F\u52A8 VSCode\u3002</p><h2 id="\u5728\u4FA7\u8FB9\u680F\u4E2D\u70B9\u51FB\u65E0\u6CD5\u6253\u5F00\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u5728\u4FA7\u8FB9\u680F\u4E2D\u70B9\u51FB\u65E0\u6CD5\u6253\u5F00\u7B14\u8BB0" aria-hidden="true">#</a> \u5728\u4FA7\u8FB9\u680F\u4E2D\u70B9\u51FB\u65E0\u6CD5\u6253\u5F00\u7B14\u8BB0</h2><p>\u8FD9\u4E2A\u95EE\u9898\u53EF\u80FD\u6709\u591A\u4E2A\u539F\u56E0</p>',7),g=e("p",null,[n("\u68C0\u67E5\u662F\u5426\u53EF\u4EE5\u5728 joplin \u4E2D\u901A\u8FC7 "),e("strong",null,"\u5207\u6362\u5916\u90E8\u7F16\u8F91"),n(" \u529F\u80FD\u6253\u5F00 vscode")],-1),f=n("\u5982\u679C\u4E0D\u80FD\u6253\u5F00\uFF0C\u5219\u9700\u8981\u68C0\u67E5\u8BBE\u7F6E\u9875\u9762\u4E2D\u7684\u6587\u672C\u7F16\u8F91\u5668\u547D\u4EE4\uFF0C\u4F60\u9700\u8981\u8BBE\u7F6E\u4E00\u4E2A\u7F16\u8F91\u5668\uFF0C\u6216\u8005\u6709\u65E0\u6548\u7684\u8BBE\u7F6E\uFF0C\u53C2\u8003\uFF1A"),j={href:"https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774",target:"_blank",rel:"noopener noreferrer"},k=n("https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774"),v=n("\u5982\u679C\u4ECD\u7136\u6709\u95EE\u9898\uFF0C\u8BF7\u53BB joplin \u5B98\u65B9\u9879\u76EE "),x={href:"https://github.com/laurent22/joplin/issues",target:"_blank",rel:"noopener noreferrer"},w=n("\u63D0\u51FA issue"),q=n("\u8BF7\u4F7F\u7528\u7248\u672C v1.4 \u6216\u66F4\u9AD8\uFF0C\u56E0\u4E3A\u5B83\u5305\u542B\u4E86\u5FC5\u987B\u7684 "),C={href:"https://discourse.joplinapp.org/t/9277/11",target:"_blank",rel:"noopener noreferrer"},y=n("action api"),S=n("\uFF0C\u4F8B\u5982\u5728 VSCode \u4E2D\u6839\u636E noteId \u6253\u5F00\u7B14\u8BB0"),V=n("\u786E\u5B9A\u662F\u5728\u5F53\u524D\u7535\u8111\u4E0A\u5B89\u88C5 Joplin \u684C\u9762\u7248\uFF0C\u8BE5\u63D2\u4EF6\u5E76\u4E0D\u652F\u6301 CLI\uFF0C\u56E0\u4E3A\u5B83\u5E76\u4E0D\u5305\u542B\u4E0A\u8FF0\u7684 action api\uFF0C\u53C2\u8003: "),E={href:"https://discourse.joplinapp.org/t/16735",target:"_blank",rel:"noopener noreferrer"},I=n("https://discourse.joplinapp.org/t/16735"),N=t(`<li><p>\u68C0\u67E5\u4E0B\u9762\u547D\u4EE4\u662F\u5426\u80FD\u591F\u6B63\u5E38\u6267\u884C\uFF0C\u5982\u679C\u4ECD\u7136\u65E0\u6CD5\u5728\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\uFF0C\u53EF\u80FD\u8981\u8BE2\u95EE @laurent22</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --location --request POST <span class="token string">&#39;http://localhost:41184/services/externalEditWatcher?token=***&#39;</span> <span class="token punctuation">\\</span>
--header <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>
--data-raw <span class="token string">&#39;{
 &quot;action&quot;: &quot;openAndWatch&quot;,
 &quot;noteId&quot;: &quot;257f6a9dacc1409580ee526d50ac4d49&quot;
}&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>`,1),J=t(`<h2 id="windows-10-\u65E0\u6CD5\u4E0A\u4F20\u526A\u5207\u7248\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#windows-10-\u65E0\u6CD5\u4E0A\u4F20\u526A\u5207\u7248\u56FE\u7247" aria-hidden="true">#</a> Windows 10 \u65E0\u6CD5\u4E0A\u4F20\u526A\u5207\u7248\u56FE\u7247</h2><p>\u53EF\u80FD\u662F\u6CA1\u6709\u5B89\u88C5 powershell\uFF0C\u5728 CMD \u4E2D\u8F93\u5165 powershell \u68C0\u67E5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>powershell
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png" alt="powershell"></p>`,4),B=n("\u5982\u679C\u63D0\u793A "),T=e("code",null,"spawn powershell ENOENT",-1),W=n(" \u5219\u9700\u8981\u5B89\u88C5 powershell\uFF0C\u53C2\u8003\uFF1A"),L={href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},D=n("\u5728 Windows \u4E0A\u5B89\u88C5 PowerShell"),F=e("h2",{id:"\u5982\u4F55\u5728\u4E24\u4E2A\u914D\u7F6E\u540C\u6B65\u7684-vscode-\u4F7F\u7528\u63D2\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5982\u4F55\u5728\u4E24\u4E2A\u914D\u7F6E\u540C\u6B65\u7684-vscode-\u4F7F\u7528\u63D2\u4EF6","aria-hidden":"true"},"#"),n(" \u5982\u4F55\u5728\u4E24\u4E2A\u914D\u7F6E\u540C\u6B65\u7684 vscode \u4F7F\u7528\u63D2\u4EF6")],-1),M=e("p",null,[n("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u53F0\u7535\u8111\u4E0A\u7684 joplin \u4F1A\u751F\u6210\u968F\u673A\u7684 token\uFF0C\u4F46\u60A8\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539\u5B83\uFF0C\u4E00\u822C\u914D\u7F6E\u6587\u4EF6\u5728 "),e("em",null,"~/.config/joplin-desktop/settings.json"),n("\uFF0C\u60A8\u53EA\u9700\u8981\u4FEE\u6539\u5176\u4E2D\u7684 "),e("code",null,"api.token"),n(" \u4E3A\u76F8\u540C\u7684 token \u5373\u53EF\u3002")],-1),O=e("p",null,[e("img",{src:c,alt:"\u624B\u52A8\u8BBE\u7F6E joplin \u7684 token"})],-1),P=n("\u53C2\u8003\uFF1A"),A={href:"https://github.com/rxliuli/joplin-utils/issues/25",target:"_blank",rel:"noopener noreferrer"},H=n("https://github.com/rxliuli/joplin-utils/issues/25");function z(G,K){const s=a("ExternalLinkIcon");return r(),i(l,null,[h,e("p",null,[u,e("a",_,[b,o(s)])]),m,e("ol",null,[e("li",null,[g,e("ol",null,[e("li",null,[f,e("a",j,[k,o(s)])]),e("li",null,[v,e("a",x,[w,o(s)])])])]),e("li",null,[e("p",null,[q,e("a",C,[y,o(s)]),S])]),e("li",null,[e("p",null,[V,e("a",E,[I,o(s)])])]),N]),J,e("p",null,[B,T,W,e("a",L,[D,o(s)])]),F,M,O,e("blockquote",null,[e("p",null,[P,e("a",A,[H,o(s)])])])],64)}var X=p(d,[["render",z]]);export{X as default};
