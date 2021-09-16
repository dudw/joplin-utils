import{r as e,o as n,c as l,a as t,b as o,w as i,F as a,d as r}from"./app.cca1d8f9.js";const d={},s=t("h1",{id:"quick-start",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),r(" Quick start")],-1),u=t("h2",{id:"overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),r(" Overview")],-1),p=t("p",null,[t("code",null,"joplin-vscode-plugin"),r(" offers editing and management of Joplin notes with the power and flexibility of VSCode.")],-1),h=t("p",null,[r("Joplin Web Clipper is designed to communicate with browser extensions by sharing Notes, Notebooks, Tags, etc. through a REST web API. "),t("code",null,"joplin-vscode-plugin"),r(" connects to that same REST endpoint to freely make changes to your notes without ever leaving the editor.")],-1),c=r("Why does this plugin exist? Read "),b=r("my motivation"),g=r(" for developing it."),m=r("What can it do? The "),f=r("roadmap"),k=r(" lists both existing and planned features."),y=r("Never heard of "),v={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},C=r("Joplin"),w=r("? You're missing out on a great "),J={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},S=r("opensource synchronized note taking app"),T=r("."),j=t("h2",{id:"requirements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),r(" Requirements")],-1),x=t("ul",null,[t("li",null,"Joplin version > v1.4.19"),t("li",null,"VSCode version > v1.45.0"),t("li",null,"Joplin Web Clipper enabled"),t("li",null,"Basic familiarity with using both Joplin and VS Code")],-1),P=t("h2",{id:"install-joplin-vscode-plugin",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#install-joplin-vscode-plugin","aria-hidden":"true"},"#"),r(" Install Joplin VSCode plugin")],-1),N=t("p",null,'Search for "Joplin" in the VSCode Marketplace. Find "joplin-vscode-plugin" and click Install.',-1),W=t("p",null,[t("img",{src:"/images/install-plugin.png",alt:"install plugin"})],-1),q=t("h2",{id:"configure",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#configure","aria-hidden":"true"},"#"),r(" Configure")],-1),V=t("p",null,"To access the Joplin database, we need a connection to the API endpoint opened by Joplin Web Clipper. That means Joplin must be running and Web Clipper must be enabled.",-1),A=r("For help with Web Clipper refer to: "),I={href:"https://joplinapp.org/clipper/",target:"_blank",rel:"noopener noreferrer"},R=r("Joplin Web Clipper"),E=r("."),_=t("p",null,"Three settings need attention to get up and running.",-1),F=t("p",null,[t("code",null,"Port")],-1),z=t("ul",null,[t("li",null,[r("Copy the port number from Joplin settings and paste it here. The active port displays when Web Clipper is enabled:"),t("br"),t("strong",null,"Web Clipper -> Step 1: Enable the clipper service -> Status")])],-1),L=t("p",null,[t("code",null,"Token")],-1),O=t("ul",null,[t("li",null,[r("Copy your Authorization token from Joplin settings and paste it here:"),t("br"),t("strong",null,"Web Clipper -> Advanced options -> Authorization Token")])],-1),U=t("p",null,[t("code",null,"Program Profile Path")],-1),Y=t("p",null,"This setting is required if you wish to use attachment-related features.",-1),B=t("p",null,[r("In general, if you are using a portable application, it should be the "),t("code",null,". /JoplinProfile"),r(" directory, in which you should see the "),t("em",null,"resources"),r(", "),t("em",null,"templates"),r(", and "),t("em",null,"tmp"),r(" directories.")],-1),H=t("p",null,[t("img",{src:"/images/joplin-settings.png",alt:"install plugin"})],-1),K=t("h2",{id:"restart-vscode",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#restart-vscode","aria-hidden":"true"},"#"),r(" Restart VSCode")],-1),M=t("p",null,"Currently configuration edits do not trigger a fresh connection. Simply close VSCode and it should connect to Joplin the next time you start.",-1),Q=t("hr",null,null,-1),D=t("h2",{id:"say-hello-joplin",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#say-hello-joplin","aria-hidden":"true"},"#"),r(" Say Hello Joplin")],-1),G=t("p",null,[r("Type the key chord "),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"J"),r(),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"J"),r(" and celebrate. 🎉 That hotkey combo activates the "),t("em",null,"View: Show Joplin"),r(" command, opening the Sidebar to reveal all your Notebooks.")],-1),X=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png",alt:"preview"})],-1),Z=t("h2",{id:"usage",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),r(" Usage")],-1),$=t("p",null,"All your Notes and Noteboks can be found in the Sidebar. Unfold the Notebooks to see Subnotebooks and Notes beneath.",-1),ee=t("p",null,[t("em",null,"Click on a Note to open a working copy in the Editor. Save it to push changes back to Joplin.")],-1),ne=t("p",null,"You have full access to create, edit, and delete both Notes and Notebooks, at your whim. And it doesn't even stop there. The power is yours now. 🦸‍♀️",-1),le=t("blockquote",null,[t("p",null,'Tip: Explore the results of typing "joplin" in the Command Palette to find out what great features I didn\'t tell you about.')],-1),te=t("h2",{id:"commands-and-keybindings",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#commands-and-keybindings","aria-hidden":"true"},"#"),r(" Commands and keybindings")],-1),oe=t("p",null,[r("VSCode has "),t("em",null,"a lot"),r(" of keybindings. To avoid constantly clashing with all the built in settings, we laid claim to just one desirable hotekey, "),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"J"),r(", and turned that into the trigger for a key chord.")],-1),ie=t("blockquote",null,[t("p",null,[r("Claiming "),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"J"),r(" displaced the native binding for "),t("code",null,"workbench.action.togglePanel"),r(" ("),t("em",null,"View: Toggle Panel"),r("). For your convenience a sane replacement binding is already added at "),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"K"),r(),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"J"),r(".")])],-1),ae=t("p",null,[r("Type "),t("code",null,"Joplin"),r(" into the Command Palette ("),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"P"),r(") to see all the new commands available to you. Some of them already have keybindings. Assign new bindings under the "),t("kbd",null,"Ctrl"),r("+"),t("kbd",null,"J"),r(" namespace to fit your needs.")],-1);d.render=function(r,d){const re=e("RouterLink"),de=e("OutboundLink");return n(),l(a,null,[s,u,p,h,t("blockquote",null,[t("p",null,[c,o(re,{to:"/joplin-vscode-plugin/other/"},{default:i((()=>[b])),_:1}),g]),t("p",null,[m,o(re,{to:"/joplin-vscode-plugin/other/roadmap.html"},{default:i((()=>[f])),_:1}),k]),t("p",null,[y,t("a",v,[C,o(de)]),w,t("a",J,[S,o(de)]),T])]),j,x,P,N,W,q,V,t("blockquote",null,[t("p",null,[A,t("a",I,[R,o(de)]),E])]),_,F,z,L,O,U,Y,B,H,K,M,Q,D,G,X,Z,$,ee,ne,le,te,oe,ie,ae],64)};export{d as default};
