import{r as e,o as a,c as n,a as r,b as t,F as i,e as o,d as l}from"./app.ac92f866.js";const s={},h=o('<h1 id="joplin-batch-web" tabindex="-1"><a class="header-anchor" href="#joplin-batch-web" aria-hidden="true">#</a> joplin-batch-web</h1><p>Performs some batch operations not currently handled by Joplin and displays them in the form of a graphical user interface</p><ul><li>[x] Check whether there are any orphaned resources - some unused resources are not cleaned up automatically on time</li><li>[x] Check if a referenced resource does not exist - some of these resources may be referenced but may no longer exist for a number of different reasons</li><li>[x] Convert external links to internal note references - so that external links can be converted to internal <code>:/id</code> references, ensuring that they will never expire</li><li>[x] Check to see if there are any notes outside of a parent notebook (usually due to an error)</li></ul><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> Start</h3>',4),c=r("li",null,"Open the Joplin desktop application",-1),d=r("li",null,"Enable Web Clipper",-1),p=l("On the "),u={href:"https://joplin-utils.rxliuli.com/joplin-batch-web/#/settings",target:"_blank",rel:"noopener noreferrer"},f=l("settings"),b=l(" page, fill in the configuration options"),m=r("li",null,"Navigate to your required function page",-1),y=o('<p><img src="https://github.com/rxliuli/joplin-utils/raw/master/apps/joplin-batch-web/docs/images/guide.gif" alt="guide"></p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="why-not-a-cli-application" tabindex="-1"><a class="header-anchor" href="#why-not-a-cli-application" aria-hidden="true">#</a> Why not a CLI application?</h3><p>The format of a CLI application is not always suitable in certain scenarios, such as previewing abnormal attachments or notes which is not as simple when using a command line interface</p><h3 id="will-it-record-my-note-data" tabindex="-1"><a class="header-anchor" href="#will-it-record-my-note-data" aria-hidden="true">#</a> Will it record my note data?</h3>',5),g=l("The website runs entirely locally, there is no backend server. If you are still concerned you can check out the source code "),w={href:"https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-batch-web",target:"_blank",rel:"noopener noreferrer"},x=l("joplin-batch-web");s.render=function(o,l){const s=e("OutboundLink");return a(),n(i,null,[h,r("ol",null,[c,d,r("li",null,[p,r("a",u,[f,t(s)]),b]),m]),y,r("p",null,[g,r("a",w,[x,t(s)])])],64)};export{s as default};