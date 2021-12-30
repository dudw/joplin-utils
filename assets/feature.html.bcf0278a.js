import{e as t}from"./app.8616923f.js";import{_ as e}from"./copy-link.ec037a5e.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const o={},r=t('<h1 id="other-features" tabindex="-1"><a class="header-anchor" href="#other-features" aria-hidden="true">#</a> Other features</h1><h2 id="configuration-table" tabindex="-1"><a class="header-anchor" href="#configuration-table" aria-hidden="true">#</a> Configuration table</h2><table><thead><tr><th>Field</th><th>Default value</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td><code>token</code></td><td></td><td><code>string</code></td><td>joplin web server token</td></tr><tr><td><code>programProfilePath</code></td><td></td><td><code>string</code></td><td>Personal directory for joplin programs</td></tr><tr><td><code>port</code></td><td><code>41184</code></td><td><code>number</code></td><td>joplin web service port</td></tr><tr><td><code>deleteConfirm</code></td><td><code>true</code></td><td><code>boolean</code></td><td>Whether to remind when deleting</td></tr><tr><td><code>sortNotes</code></td><td><code>false</code></td><td><code>boolean</code></td><td>Whether to sort notes.</td></tr><tr><td><code>sortNotesType</code></td><td><code>alphabetical</code></td><td></td><td>Type of sorting notes.</td></tr><tr><td></td><td></td><td><code>alphabetical</code></td><td>Sort notes by alphabetical order of its Title property.</td></tr><tr><td></td><td></td><td><code>default</code></td><td>Default Joplin order (whatever that is).</td></tr><tr><td><code>sortOrder</code></td><td><code>asc</code></td><td></td><td>Order of sorting notes (asc or desc)</td></tr><tr><td></td><td></td><td><code>asc</code></td><td>&#39;asc&#39;: ascending order</td></tr><tr><td></td><td></td><td><code>desc</code></td><td>&#39;desc&#39;: descending order (reverse)</td></tr><tr><td><code>language</code></td><td><code>english</code></td><td></td><td>The language displayed by the plugin, follow VSCode</td></tr><tr><td></td><td></td><td><code>en</code></td><td>English</td></tr><tr><td></td><td></td><td><code>zh</code></td><td>Simple Chinese</td></tr></tbody></table><h2 id="hot-key" tabindex="-1"><a class="header-anchor" href="#hot-key" aria-hidden="true">#</a> Hot key</h2><ul><li><code>f2</code>: Rename notes or directories</li><li><code>delete</code>: delete notes or directories</li><li><code>ctrl+alt+u</code>: upload pictures from clipboard</li><li><code>ctrl+alt+e</code>: upload image from file chooser</li><li><code>ctrl+alt+shift+e</code>: add attachments from the file selector</li><li><code>ctrl+j ctrl+o</code>: search notes</li></ul><h2 id="paste-picture" tabindex="-1"><a class="header-anchor" href="#paste-picture" aria-hidden="true">#</a> Paste picture</h2><p>After <code>v0.1.7</code>, a new image paste function has been added. You can upload images to Joplin through the right-click menu, commands or shortcut keys and paste the link into VSCode.</p><ol><li><code>ctrl+alt+u</code> paste the clipboard picture</li><li><code>ctrl+alt+e</code> Use the file manager to select the picture and paste</li></ol><h2 id="add-attachments" tabindex="-1"><a class="header-anchor" href="#add-attachments" aria-hidden="true">#</a> Add attachments</h2><p>After <code>v0.1.10</code>, the function of adding attachments has been added. You can add files as attachment resources to Joplin notes through commands or shortcut keys.</p><ol><li><code>ctrl+alt+shift+e</code> select the file to be added as an attachment</li></ol><h2 id="link-notes" tabindex="-1"><a class="header-anchor" href="#link-notes" aria-hidden="true">#</a> Link notes</h2><p>You can see <strong>Copy Link</strong> in the right-click menu on the notes, click it to copy it to the clipboard.</p><p><img src="'+e+'" alt="Link notes"></p><p>Use <code>Ctrl+click</code> to open to other notes.</p>',15);function c(a,i){return r}var h=d(o,[["render",c]]);export{h as default};
