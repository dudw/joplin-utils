import{r as s,o as i,c as d,a as e,b as n,F as r,d as t,e as a}from"./app.8616923f.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={},p=e("h1",{id:"joplin-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#joplin-api","aria-hidden":"true"},"#"),t(" joplin api")],-1),h={href:"https://joplin-utils.rxliuli.com/joplin-api/",target:"_blank",rel:"noopener noreferrer"},u=t("API documentation"),m=t(", "),g={href:"https://joplinapp.org/api/overview/",target:"_blank",rel:"noopener noreferrer"},b=t("Joplin official document"),f=a(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Joplin api&#39;s js package, written in ts, provides a complete type definition, including all currently exposed api in the document.</p><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>config<span class="token punctuation">.</span>port <span class="token operator">=</span> <span class="token number">27583</span>
config<span class="token punctuation">.</span>token <span class="token operator">=</span> <span class="token string">&#39;***&#39;</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> noteApi<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,4),_=t("More examples reference: "),k={href:"https://github.com/rxliuli/joplin-utils/tree/master/libs/joplin-api/test",target:"_blank",rel:"noopener noreferrer"},x=t("https://github.com/rxliuli/joplin-utils/tree/master/libs/joplin-api/test"),A=a('<h2 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h2><table><thead><tr><th>Object</th><th>Description</th></tr></thead><tbody><tr><td><code>folderApi</code></td><td>Directory-related api, such as getting directory tree</td></tr><tr><td><code>folderExtApi</code></td><td>Directory extension api, such as mobile directory</td></tr><tr><td><code>joplinApi</code></td><td>joplin basic api, such as checking whether joplin web service is open</td></tr><tr><td><code>noteActionApi</code></td><td>Note-related action api, such as opening a note in an external editor</td></tr><tr><td><code>noteApi</code></td><td>Note related api, such as getting the content of the note</td></tr><tr><td><code>noteExtApi</code></td><td>Note extension api, such as renaming</td></tr><tr><td><code>resourceActionApi</code></td><td>Resource action api, such as opening an attachment resource in an external editor</td></tr><tr><td><code>resourceApi</code></td><td>Resource-related api, such as uploading pictures</td></tr><tr><td><code>searchApi</code></td><td>Search related api</td></tr><tr><td><code>tagApi</code></td><td>Tag related api, such as modifying the tag of a note</td></tr><tr><td><code>config</code></td><td>Global joplin web clipper configuration</td></tr><tr><td><code>PageUtil</code></td><td>Paging-related static tools, such as getting the full list of notes</td></tr></tbody></table><h2 id="conventional-name" tabindex="-1"><a class="header-anchor" href="#conventional-name" aria-hidden="true">#</a> Conventional name</h2><ul><li>Use class to encapsulate API, for example note related API is encapsulated in <code>NoteApi</code> class.</li><li>Keep the same naming for the same function meaning. For example, the note list is <code>NoteApi.list</code>. The following is a complete comparison table</li></ul><table><thead><tr><th>Meaning</th><th>Naming</th><th>Examples</th></tr></thead><tbody><tr><td>List</td><td><code>list</code></td><td><code>noteApi.list</code></td></tr><tr><td>Get by id</td><td><code>get</code></td><td><code>noteApi.get</code></td></tr><tr><td>Create</td><td><code>create</code></td><td><code>noteApi.create</code></td></tr><tr><td>Modify</td><td><code>update</code></td><td><code>noteApi.update</code></td></tr><tr><td>Remove</td><td><code>remove</code></td><td><code>noteApi.remove</code></td></tr></tbody></table><ul><li>There are some special cases, such as APIs involving multiple entities, the naming is generally <code>operation entity + by + according to entity</code>, for example, the API to get the tag list according to the note id is <code>noteApi.tagsById</code></li></ul><h2 id="some-problems" tabindex="-1"><a class="header-anchor" href="#some-problems" aria-hidden="true">#</a> some problems</h2><ul><li>The <code>get</code> method should not report an error, if it does not exist it should return <code>null</code> instead of throwing an exception</li></ul>',8);function y(v,j){const o=s("ExternalLinkIcon");return i(),d(r,null,[p,e("blockquote",null,[e("p",null,[e("a",h,[u,n(o)]),m,e("a",g,[b,n(o)])])]),f,e("blockquote",null,[e("p",null,[_,e("a",k,[x,n(o)])])]),A],64)}var N=c(l,[["render",y]]);export{N as default};
