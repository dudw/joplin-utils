import{r,o as i,c as s,a as e,b as n,F as l,e as o,d as t}from"./app.e8631249.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const h={},d=o('<h1 id="joplin-batch-web" tabindex="-1"><a class="header-anchor" href="#joplin-batch-web" aria-hidden="true">#</a> joplin-batch-web</h1><p>Performs some batch operations not currently handled by Joplin and displays them in the form of a graphical user interface</p><ul><li>[x] Check whether there are any orphaned resources - some unused resources are not cleaned up automatically on time</li><li>[x] Check if a referenced resource does not exist - some of these resources may be referenced but may no longer exist for a number of different reasons</li><li>[x] Convert external links to internal note references - so that external links can be converted to internal <code>:/id</code> references, ensuring that they will never expire</li><li>[x] Check to see if there are any notes outside of a parent notebook (usually due to an error)</li></ul><h2 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> Start</h2>',4),p=e("li",null,"Open the Joplin desktop application",-1),u=e("li",null,"Enable Web Clipper",-1),f=t("On the "),_={href:"https://joplin-utils.rxliuli.com/web/joplin-batch-web/#/en-US/settings",target:"_blank",rel:"noopener noreferrer"},b=t("settings"),m=t(" page, fill in the configuration options"),x=e("li",null,"Navigate to your required function page",-1),g=o('<p><img src="https://github.com/rxliuli/joplin-utils/raw/master/apps/joplin-batch-web/docs/images/guide.gif" alt="guide"></p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="why-not-a-cli-application" tabindex="-1"><a class="header-anchor" href="#why-not-a-cli-application" aria-hidden="true">#</a> Why not a CLI application?</h3><p>The format of a CLI application is not always suitable in certain scenarios, such as previewing abnormal attachments or notes which is not as simple when using a command line interface</p><h3 id="will-it-record-my-note-data" tabindex="-1"><a class="header-anchor" href="#will-it-record-my-note-data" aria-hidden="true">#</a> Will it record my note data?</h3>',5),y=t("The website runs entirely locally, there is no backend server. If you are still concerned you can check out the source code "),w={href:"https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-batch-web",target:"_blank",rel:"noopener noreferrer"},k=t("joplin-batch-web");function j(v,C){const a=r("ExternalLinkIcon");return i(),s(l,null,[d,e("ol",null,[p,u,e("li",null,[f,e("a",_,[b,n(a)]),m]),x]),g,e("p",null,[y,e("a",w,[k,n(a)])])],64)}var E=c(h,[["render",j]]);export{E as default};
