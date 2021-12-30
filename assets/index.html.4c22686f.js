import{r as a,o as d,c as l,a as t,b as o,w as r,F as p,d as e,e as s}from"./app.ec0ef659.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var c="/images/install-plugin.png",u="/images/joplin-settings.png";const b={},g=t("h1",{id:"quick-start",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),e(" Quick start")],-1),m=t("h2",{id:"overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),k=t("p",null,[t("code",null,"joplin-vscode-plugin"),e(" offers editing and management of Joplin notes with the power and flexibility of VSCode.")],-1),_=t("p",null,[e("Joplin Web Clipper is designed to communicate with browser extensions by sharing Notes, Notebooks, Tags, etc. through a REST web API. "),t("code",null,"joplin-vscode-plugin"),e(" connects to that same REST endpoint to freely make changes to your notes without ever leaving the editor.")],-1),f=e("Why does this plugin exist? Read "),y=e("my motivation"),v=e(" for developing it."),C=e("What can it do? The "),w=e("roadmap"),J=e(" lists both existing and planned features."),x=e("Never heard of "),S={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},T=e("Joplin"),j=e("? You're missing out on a great "),q={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},N=e("opensource synchronized note taking app"),V=e("."),P=s('<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>Joplin version &gt; v1.4.19</li><li>VSCode version &gt; v1.45.0</li><li>Joplin Web Clipper enabled</li><li>Basic familiarity with using both Joplin and VS Code</li></ul><h2 id="install-joplin-vscode-plugin" tabindex="-1"><a class="header-anchor" href="#install-joplin-vscode-plugin" aria-hidden="true">#</a> Install Joplin VSCode plugin</h2><p>Search for &quot;Joplin&quot; in the VSCode Marketplace. Find &quot;joplin-vscode-plugin&quot; and click Install.</p><p><img src="'+c+'" alt="install plugin"></p><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> Configure</h2><p>To access the Joplin database, we need a connection to the API endpoint opened by Joplin Web Clipper. That means Joplin must be running and Web Clipper must be enabled.</p>',7),W=e("For help with Web Clipper refer to: "),A={href:"https://joplinapp.org/clipper/",target:"_blank",rel:"noopener noreferrer"},E=e("Joplin Web Clipper"),I=e("."),R=s('<p>Three settings need attention to get up and running.</p><p><code>Port</code></p><ul><li>Copy the port number from Joplin settings and paste it here. The active port displays when Web Clipper is enabled:<br><strong>Web Clipper -&gt; Step 1: Enable the clipper service -&gt; Status</strong></li></ul><p><code>Token</code></p><ul><li>Copy your Authorization token from Joplin settings and paste it here:<br><strong>Web Clipper -&gt; Advanced options -&gt; Authorization Token</strong></li></ul><p><code>Program Profile Path</code></p><p>This setting is required if you wish to use attachment-related features.</p><p>In general, if you are using a portable application, it should be the <code>. /JoplinProfile</code> directory, in which you should see the <em>resources</em>, <em>templates</em>, and <em>tmp</em> directories.</p><p><img src="'+u+'" alt="install plugin"></p><h2 id="restart-vscode" tabindex="-1"><a class="header-anchor" href="#restart-vscode" aria-hidden="true">#</a> Restart VSCode</h2><p>Currently configuration edits do not trigger a fresh connection. Simply close VSCode and it should connect to Joplin the next time you start.</p><hr><h2 id="say-hello-joplin" tabindex="-1"><a class="header-anchor" href="#say-hello-joplin" aria-hidden="true">#</a> Say Hello Joplin</h2><p>Type the key chord <kbd>Ctrl</kbd>+<kbd>J</kbd> <kbd>Ctrl</kbd>+<kbd>J</kbd> and celebrate. \u{1F389} That hotkey combo activates the <em>View: Show Joplin</em> command, opening the Sidebar to reveal all your Notebooks.</p><p><img src="https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png" alt="preview"></p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>All your Notes and Noteboks can be found in the Sidebar. Unfold the Notebooks to see Subnotebooks and Notes beneath.</p><p><em>Click on a Note to open a working copy in the Editor. Save it to push changes back to Joplin.</em></p><p>You have full access to create, edit, and delete both Notes and Notebooks, at your whim. And it doesn&#39;t even stop there. The power is yours now. \u{1F9B8}\u200D\u2640\uFE0F</p><blockquote><p>Tip: Explore the results of typing &quot;joplin&quot; in the Command Palette to find out what great features I didn&#39;t tell you about.</p></blockquote><h2 id="commands-and-keybindings" tabindex="-1"><a class="header-anchor" href="#commands-and-keybindings" aria-hidden="true">#</a> Commands and keybindings</h2><p>VSCode has <em>a lot</em> of keybindings. To avoid constantly clashing with all the built in settings, we laid claim to just one desirable hotekey, <kbd>Ctrl</kbd>+<kbd>J</kbd>, and turned that into the trigger for a key chord.</p><blockquote><p>Claiming <kbd>Ctrl</kbd>+<kbd>J</kbd> displaced the native binding for <code>workbench.action.togglePanel</code> (<em>View: Toggle Panel</em>). For your convenience a sane replacement binding is already added at <kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>J</kbd>.</p></blockquote><p>Type <code>Joplin</code> into the Command Palette (<kbd>Ctrl</kbd>+<kbd>P</kbd>) to see all the new commands available to you. Some of them already have keybindings. Assign new bindings under the <kbd>Ctrl</kbd>+<kbd>J</kbd> namespace to fit your needs.</p>',24);function F(B,L){const i=a("RouterLink"),n=a("ExternalLinkIcon");return d(),l(p,null,[g,m,k,_,t("blockquote",null,[t("p",null,[f,o(i,{to:"/joplin-vscode-plugin/other/"},{default:r(()=>[y]),_:1}),v]),t("p",null,[C,o(i,{to:"/joplin-vscode-plugin/other/roadmap.html"},{default:r(()=>[w]),_:1}),J]),t("p",null,[x,t("a",S,[T,o(n)]),j,t("a",q,[N,o(n)]),V])]),P,t("blockquote",null,[t("p",null,[W,t("a",A,[E,o(n)]),I])]),R],64)}var Y=h(b,[["render",F]]);export{Y as default};
