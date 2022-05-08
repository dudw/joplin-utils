import{r as a,o as r,c as d,a as e,b as t,w as s,F as h,d as o,e as l}from"./app.52af2074.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var c="/images/install-plugin.png",u="/images/joplin-settings.png";const b={},g=e("h1",{id:"quick-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),o(" Quick start")],-1),_=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),k=e("p",null,[e("code",null,"joplin-vscode-plugin"),o(" offers editing and management of Joplin notes with the power and flexibility of VSCode.")],-1),m=e("p",null,[o("Joplin Web Clipper is designed to communicate with browser extensions by sharing Notes, Notebooks, Tags, etc. through a REST web API. "),e("code",null,"joplin-vscode-plugin"),o(" connects to that same REST endpoint to freely make changes to your notes without ever leaving the editor.")],-1),f=o("Why does this plugin exist? Read "),y=o("my motivation"),v=o(" for developing it."),C=o("What can it do? The "),w=o("roadmap"),x=o(" lists both existing and planned features."),J=o("Never heard of "),j={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},S=o("Joplin"),q=o("? You're missing out on a great "),T={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},N=o("opensource synchronized note taking app"),V=o("."),I=l('<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>Joplin version &gt; v2.8</li><li>VSCode version &gt; v1.66.2</li><li>Joplin Web Clipper enabled</li><li>Basic familiarity with using both Joplin and VS Code</li></ul><h2 id="install-joplin-vscode-plugin" tabindex="-1"><a class="header-anchor" href="#install-joplin-vscode-plugin" aria-hidden="true">#</a> Install Joplin VSCode plugin</h2><p>Search for &quot;Joplin&quot; in the VSCode Marketplace. Find &quot;joplin-vscode-plugin&quot; and click Install.</p><p><img src="'+c+'" alt="install plugin"></p><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> Configure</h2><p>To access the Joplin database, we need a connection to the API endpoint opened by Joplin Web Clipper. That means Joplin must be running and Web Clipper must be enabled.</p>',7),W=o("For help with Web Clipper refer to: "),A={href:"https://joplinapp.org/clipper/",target:"_blank",rel:"noopener noreferrer"},E=o("Joplin Web Clipper"),P=o("."),R=e("p",null,"Two settings need attention to get up and running.",-1),F=e("p",null,[e("code",null,"Token")],-1),B=e("ul",null,[e("li",null,[o("Copy your Authorization token from Joplin settings and paste it here:"),e("br"),e("strong",null,"Web Clipper -> Advanced options -> Authorization Token")])],-1),L=e("p",null,[e("code",null,"baseUrl")],-1),z=o("In general, if you use the locally installed joplin desktop client, no special configuration is required. If you use a remote joplin service, you need to configure it. For example "),U={href:"https://1.1.1.1:41184",target:"_blank",rel:"noopener noreferrer"},Y=o("https://1.1.1.1:41184"),H=l('<p><img src="'+u+'" alt="install plugin"></p><h2 id="restart-vscode" tabindex="-1"><a class="header-anchor" href="#restart-vscode" aria-hidden="true">#</a> Restart VSCode</h2><p>Currently configuration edits do not trigger a fresh connection. Simply close VSCode and it should connect to Joplin the next time you start.</p><hr><h2 id="say-hello-joplin" tabindex="-1"><a class="header-anchor" href="#say-hello-joplin" aria-hidden="true">#</a> Say Hello Joplin</h2><p>Type the key chord <kbd>Ctrl</kbd>+<kbd>J</kbd> <kbd>Ctrl</kbd>+<kbd>J</kbd> and celebrate. \u{1F389} That hotkey combo activates the <em>View: Show Joplin</em> command, opening the Sidebar to reveal all your Notebooks.</p><p><img src="https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png" alt="preview"></p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>All your Notes and Noteboks can be found in the Sidebar. Unfold the Notebooks to see Subnotebooks and Notes beneath.</p><p><em>Click on a Note to open a working copy in the Editor. Save it to push changes back to Joplin.</em></p><p>You have full access to create, edit, and delete both Notes and Notebooks, at your whim. And it doesn&#39;t even stop there. The power is yours now. \u{1F9B8}\u200D\u2640\uFE0F</p><blockquote><p>Tip: Explore the results of typing &quot;joplin&quot; in the Command Palette to find out what great features I didn&#39;t tell you about.</p></blockquote><h2 id="commands-and-keybindings" tabindex="-1"><a class="header-anchor" href="#commands-and-keybindings" aria-hidden="true">#</a> Commands and keybindings</h2><p>VSCode has <em>a lot</em> of keybindings. To avoid constantly clashing with all the built in settings, we laid claim to just one desirable hotekey, <kbd>Ctrl</kbd>+<kbd>J</kbd>, and turned that into the trigger for a key chord.</p><blockquote><p>Claiming <kbd>Ctrl</kbd>+<kbd>J</kbd> displaced the native binding for <code>workbench.action.togglePanel</code> (<em>View: Toggle Panel</em>). For your convenience a sane replacement binding is already added at <kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>J</kbd>.</p></blockquote><p>Type <code>Joplin</code> into the Command Palette (<kbd>Ctrl</kbd>+<kbd>P</kbd>) to see all the new commands available to you. Some of them already have keybindings. Assign new bindings under the <kbd>Ctrl</kbd>+<kbd>J</kbd> namespace to fit your needs.</p>',16);function K(M,O){const i=a("RouterLink"),n=a("ExternalLinkIcon");return r(),d(h,null,[g,_,k,m,e("blockquote",null,[e("p",null,[f,t(i,{to:"/joplin-vscode-plugin/other/"},{default:s(()=>[y]),_:1}),v]),e("p",null,[C,t(i,{to:"/joplin-vscode-plugin/other/roadmap.html"},{default:s(()=>[w]),_:1}),x]),e("p",null,[J,e("a",j,[S,t(n)]),q,e("a",T,[N,t(n)]),V])]),I,e("blockquote",null,[e("p",null,[W,e("a",A,[E,t(n)]),P])]),R,F,B,L,e("ul",null,[e("li",null,[z,e("a",U,[Y,t(n)])])]),H],64)}var G=p(b,[["render",K]]);export{G as default};
