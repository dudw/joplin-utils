import{r as i,o as a,c as r,a as e,b as t,F as l,e as s,d as n}from"./app.ec0ef659.js";import{_ as c}from"./manually-set-token-of-joplin.210cdc5b.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const p={},h=s(`<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h2 id="show-error-message-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" tabindex="-1"><a class="header-anchor" href="#show-error-message-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" aria-hidden="true">#</a> Show error message <strong>Joplin&#39;s token/port is set incorrectly, unable to access Joplin service!</strong></h2><p>Please try to execute the following command in CMD/Bash, if there is no problem, it should return <strong>JoplinClipperServer</strong>, otherwise you need File an issue with Joplin.</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>curl http://127.0.0.1:41184/ping
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>On Linux make sure your <code>/etc/hosts</code> contains the following entry</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token number">127.0</span><span class="token operator">.</span><span class="token number">0.1</span>  localhost
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="not-opened-in-vscode-after-clicking" tabindex="-1"><a class="header-anchor" href="#not-opened-in-vscode-after-clicking" aria-hidden="true">#</a> Not opened in VSCode after clicking</h2>`,7),u=n("Please refer to the official default external editor settings: "),m={href:"https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor",target:"_blank",rel:"noopener noreferrer"},_=n("How can I edit my note in an external text editor?"),f=s('<h2 id="how-to-list-joplin-notes-opened-by-vscode" tabindex="-1"><a class="header-anchor" href="#how-to-list-joplin-notes-opened-by-vscode" aria-hidden="true">#</a> How to list joplin notes opened by VSCode</h2><p>Although there is no official support, you can use the shortcut key <code>c+j c+o</code> to list the last modified 20 joplin notes to do similar things.</p><h2 id="no-list-displayed-in-the-sidebar" tabindex="-1"><a class="header-anchor" href="#no-list-displayed-in-the-sidebar" aria-hidden="true">#</a> No list displayed in the sidebar</h2><p>After checking joplin configuration items, restart VSCode.</p><h2 id="clicking-on-the-sidebar-fails-to-open-the-note" tabindex="-1"><a class="header-anchor" href="#clicking-on-the-sidebar-fails-to-open-the-note" aria-hidden="true">#</a> Clicking on the sidebar fails to open the note</h2><p>There may be multiple reasons for this problem</p>',6),g=e("p",null,[n("Check if you can open vscode through the "),e("strong",null,"switch external editing"),n(" function in joplin")],-1),b=n("If it can't be opened, you need to check the text editor command in the settings page, you need to set an editor, or there are invalid settings, refer to: "),k={href:"https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774",target:"_blank",rel:"noopener noreferrer"},v=n("https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774"),w=n("If you still have problems, please go to the official joplin project "),y={href:"https://github.com/laurent22/joplin/issues",target:"_blank",rel:"noopener noreferrer"},x=n("file an issue"),j=n("Please use version v1.4 or higher, because it contains the necessary "),q={href:"https://discourse.joplinapp.org/t/9277/11",target:"_blank",rel:"noopener noreferrer"},C=n("action api"),I=n(", for example, open notes based on noteId in VSCode"),S=n("Make sure to install the Joplin desktop version on the current computer. The plug-in does not support CLI, because it does not include the above action api, refer to: "),N={href:"https://discourse.joplinapp.org/t/16735",target:"_blank",rel:"noopener noreferrer"},T=n("https://discourse.joplinapp.org/t/16735"),V=s(`<li><p>Check whether the following command can be executed normally, if it still cannot be opened in the editor, you may want to ask @laurent22</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --location --request POST<span class="token string">&#39;http://localhost:41184/services/externalEditWatcher?token=***&#39;</span> <span class="token punctuation">\\</span>
--header<span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>
--data-raw<span class="token string">&#39;{
 &quot;action&quot;: &quot;openAndWatch&quot;,
 &quot;noteId&quot;: &quot;257f6a9dacc1409580ee526d50ac4d49&quot;
}&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>`,1),E=s(`<h2 id="windows-10-cannot-upload-a-cut-version-of-the-picture" tabindex="-1"><a class="header-anchor" href="#windows-10-cannot-upload-a-cut-version-of-the-picture" aria-hidden="true">#</a> Windows 10 cannot upload a cut version of the picture</h2><p>Powershell may not be installed, enter powershell in CMD to check</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>powershell
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png" alt="powershell"></p>`,4),P=n("If you are prompted to "),B=e("code",null,"spawn powershell ENOENT",-1),J=n(", you need to install powershell, refer to: "),A={href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},F=n("Install PowerShell on Windows"),L=e("h2",{id:"how-to-use-plugins-in-two-synchronized-vscode-configurations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-use-plugins-in-two-synchronized-vscode-configurations","aria-hidden":"true"},"#"),n(" How to use plugins in two synchronized vscode configurations")],-1),M=e("p",null,[n("By default, joplin on each computer will generate a random token, but you can modify it manually. The general configuration file is "),e("em",null,"~/.config/joplin-desktop/settings.json"),n(", you only need to modify the "),e("code",null,"api. The token"),n(" is the same token.")],-1),W=e("p",null,[e("img",{src:c,alt:"Manually set joplin's token"})],-1),z=n("Reference: "),H={href:"https://github.com/rxliuli/joplin-utils/issues/25",target:"_blank",rel:"noopener noreferrer"},O=n("https://github.com/rxliuli/joplin-utils/issues/25");function D(Q,R){const o=i("ExternalLinkIcon");return a(),r(l,null,[h,e("p",null,[u,e("a",m,[_,t(o)])]),f,e("ol",null,[e("li",null,[g,e("ol",null,[e("li",null,[b,e("a",k,[v,t(o)])]),e("li",null,[w,e("a",y,[x,t(o)])])])]),e("li",null,[e("p",null,[j,e("a",q,[C,t(o)]),I])]),e("li",null,[e("p",null,[S,e("a",N,[T,t(o)])])]),V]),E,e("p",null,[P,B,J,e("a",A,[F,t(o)])]),L,M,W,e("blockquote",null,[e("p",null,[z,e("a",H,[O,t(o)])])])],64)}var X=d(p,[["render",D]]);export{X as default};
