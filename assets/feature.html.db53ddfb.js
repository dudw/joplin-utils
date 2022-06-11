import{e}from"./app.0de55949.js";import{_ as t,a as d}from"./copy-link.f26dec41.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const o={},c=e('<h1 id="other-features" tabindex="-1"><a class="header-anchor" href="#other-features" aria-hidden="true">#</a> Other features</h1><h2 id="configuration-table" tabindex="-1"><a class="header-anchor" href="#configuration-table" aria-hidden="true">#</a> Configuration table</h2><table><thead><tr><th>Field</th><th>Default value</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td><code>token</code></td><td></td><td><code>string</code></td><td>joplin web server token</td></tr><tr><td><code>baseUrl</code></td><td><code>http://localhost:41184</code></td><td><code>string</code></td><td>The base path of the joplin web service</td></tr><tr><td><code>deleteConfirm</code></td><td><code>true</code></td><td><code>boolean</code></td><td>Whether to remind when deleting</td></tr><tr><td><code>sortNotes</code></td><td><code>false</code></td><td><code>boolean</code></td><td>Whether to sort notes.</td></tr><tr><td><code>sortNotesType</code></td><td><code>alphabetical</code></td><td></td><td>Type of sorting notes.</td></tr><tr><td></td><td></td><td><code>alphabetical</code></td><td>Sort notes by alphabetical order of its Title property.</td></tr><tr><td></td><td></td><td><code>default</code></td><td>Default Joplin order (whatever that is).</td></tr><tr><td><code>sortOrder</code></td><td><code>asc</code></td><td></td><td>Order of sorting notes (asc or desc)</td></tr><tr><td></td><td></td><td><code>asc</code></td><td>&#39;asc&#39;: ascending order</td></tr><tr><td></td><td></td><td><code>desc</code></td><td>&#39;desc&#39;: descending order (reverse)</td></tr><tr><td><code>language</code></td><td><code>english</code></td><td></td><td>The language displayed by the plugin, follow VSCode</td></tr><tr><td></td><td></td><td><code>en</code></td><td>English</td></tr><tr><td></td><td></td><td><code>zh</code></td><td>Simple Chinese</td></tr></tbody></table><h2 id="hot-key" tabindex="-1"><a class="header-anchor" href="#hot-key" aria-hidden="true">#</a> Hot key</h2><ul><li><code>f2</code>: Rename notes or directories</li><li><code>delete</code>: delete notes or directories</li><li><code>ctrl+alt+u</code>: upload pictures from clipboard</li><li><code>ctrl+alt+e</code>: upload image from file chooser</li><li><code>ctrl+alt+shift+e</code>: add attachments from the file selector</li><li><code>ctrl+j ctrl+o</code>: search notes, default to show the 20 most recently modified notes</li><li><code>ctrl+j ctrl+i</code>: create attachment</li><li><code>ctrl+j ctrl+m</code>: manage tabs</li><li><code>ctrl+j ctrl+l</code>: show attached resources for the current note</li></ul><h2 id="editing-attachments" tabindex="-1"><a class="header-anchor" href="#editing-attachments" aria-hidden="true">#</a> Editing attachments</h2><p>Since the click-to-jump feature in the vscode editor is often problematic, a feature has been implemented since <code>v0.7.8</code> to display a list of current note attachments for quick editing of specified attachment resources, with the default shortcut <code>ctrl+j ctrl+l</code></p><p><img src="'+t+'" alt="editResource"></p><h2 id="paste-the-image" tabindex="-1"><a class="header-anchor" href="#paste-the-image" aria-hidden="true">#</a> Paste the image</h2><p>After <code>v0.1.7</code> the image paste function has been added, you can upload images to Joplin and paste links to VSCode via right-click menu, command or shortcut.</p><ol><li><code>ctrl+alt+u</code> to paste the image from clipboard</li><li><code>ctrl+alt+e</code> Use file manager to select the image to paste</li></ol><h2 id="add-attachment" tabindex="-1"><a class="header-anchor" href="#add-attachment" aria-hidden="true">#</a> Add attachment</h2><p>After <code>v0.1.10</code> the ability to add attachments has been added, so you can add files as attached resources to Joplin notes via commands or shortcuts.</p><ol><li><code>ctrl+alt+shift+e</code> Select the file to be added as an attachment</li></ol><h2 id="create-attachment" tabindex="-1"><a class="header-anchor" href="#create-attachment" aria-hidden="true">#</a> Create attachment</h2><p>After <code>v0.3.0</code> right-click to create an attachment resource is implemented, mainly for quickly creating and adding a mind map (powered by Baidu Brain Map) or flowchart (powered by draw.io).</p><h2 id="manage-tags" tabindex="-1"><a class="header-anchor" href="#manage-tags" aria-hidden="true">#</a> Manage Tags</h2><p>After <code>v0.3.0</code>, the command is <code>&gt; Joplin: Manage tags</code>, and the default shortcut is <code>ctrl+j ctrl+m</code> to bring up the checkbox.</p><h2 id="create-tags" tabindex="-1"><a class="header-anchor" href="#create-tags" aria-hidden="true">#</a> Create tags</h2><p>Create tags is supported after <code>v0.3.0</code>, the command is <code>&gt; Joplin: Create tag</code>.</p><h2 id="link-notes" tabindex="-1"><a class="header-anchor" href="#link-notes" aria-hidden="true">#</a> Link notes</h2><p>You can see <strong>Copy link</strong> in the right click menu on the note, click it to copy to clipboard.</p><p><img src="'+d+'" alt="Link notes"></p><p>Use <code>Ctrl+Click</code> to open to other notes.</p>',24);function r(i,n){return c}var p=a(o,[["render",r]]);export{p as default};
