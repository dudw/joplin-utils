import{e as d}from"./app.0de55949.js";import{_ as t,a as e}from"./copy-link.f26dec41.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const o={},r=d('<h1 id="\u5176\u4ED6\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u529F\u80FD" aria-hidden="true">#</a> \u5176\u4ED6\u529F\u80FD</h1><h2 id="\u914D\u7F6E\u8868" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8868" aria-hidden="true">#</a> \u914D\u7F6E\u8868</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>token</code></td><td></td><td><code>string</code></td><td>joplin web \u670D\u52A1\u7684 token</td></tr><tr><td><code>baseUrl</code></td><td><code>http://localhost:41184</code></td><td><code>string</code></td><td>joplin api \u57FA\u7840\u8DEF\u5F84</td></tr><tr><td><code>deleteConfirm</code></td><td><code>true</code></td><td><code>boolean</code></td><td>\u5220\u9664\u65F6\u662F\u5426\u63D0\u9192</td></tr><tr><td><code>sortNotes</code></td><td><code>false</code></td><td><code>boolean</code></td><td>\u662F\u5426\u5BF9\u7B14\u8BB0\u8FDB\u884C\u6392\u5E8F</td></tr><tr><td><code>sortNotesType</code></td><td><code>alphabetical</code></td><td></td><td>\u7B14\u8BB0\u6392\u5E8F\u7684\u7C7B\u578B</td></tr><tr><td></td><td></td><td><code>alphabetical</code></td><td>\u6309\u7167\u6807\u9898\u7684\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F</td></tr><tr><td></td><td></td><td><code>default</code></td><td>Joplin \u9ED8\u8BA4\u7684\u6392\u5E8F</td></tr><tr><td><code>sortOrder</code></td><td><code>asc</code></td><td></td><td>\u7B14\u8BB0\u6392\u5E8F\u7684\u987A\u5E8F\uFF08\u5347\u5E8F\u6216\u964D\u5E8F\uFF09</td></tr><tr><td></td><td></td><td><code>asc</code></td><td>\u5347\u5E8F</td></tr><tr><td></td><td></td><td><code>desc</code></td><td>\u964D\u5E8F</td></tr><tr><td><code>language</code></td><td><code>english</code></td><td></td><td>\u63D2\u4EF6\u663E\u793A\u7684\u8BED\u8A00\uFF0C\u8DDF\u968F VSCode</td></tr><tr><td></td><td></td><td><code>en</code></td><td>\u82F1\u8BED</td></tr><tr><td></td><td></td><td><code>zh</code></td><td>\u7B80\u4F53\u4E2D\u6587</td></tr></tbody></table><h2 id="\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u5FEB\u6377\u952E</h2><ul><li><code>f2</code>: \u91CD\u547D\u540D\u7B14\u8BB0\u6216\u76EE\u5F55</li><li><code>delete</code>: \u5220\u9664\u7B14\u8BB0\u6216\u76EE\u5F55</li><li><code>ctrl+alt+u</code>: \u4ECE\u526A\u5207\u677F\u4E0A\u4F20\u56FE\u7247</li><li><code>ctrl+alt+e</code>: \u4ECE\u6587\u4EF6\u9009\u62E9\u5668\u4E0A\u4F20\u56FE\u7247</li><li><code>ctrl+alt+shift+e</code>: \u4ECE\u6587\u4EF6\u9009\u62E9\u5668\u6DFB\u52A0\u9644\u4EF6</li><li><code>ctrl+j ctrl+o</code>: \u641C\u7D22\u7B14\u8BB0\uFF0C\u9ED8\u8BA4\u663E\u793A\u6700\u8FD1\u4FEE\u6539\u7684 20 \u6761\u7B14\u8BB0</li><li><code>ctrl+j ctrl+i</code>: \u521B\u5EFA\u9644\u4EF6</li><li><code>ctrl+j ctrl+m</code>: \u7BA1\u7406\u6807\u7B7E</li><li><code>ctrl+j ctrl+l</code>: \u663E\u793A\u5F53\u524D\u7B14\u8BB0\u7684\u9644\u4EF6\u8D44\u6E90</li></ul><h2 id="\u7F16\u8F91\u9644\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u9644\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u9644\u4EF6</h2><p>\u7531\u4E8E\u5728 vscode \u7F16\u8F91\u5668\u4E2D\u5B9E\u73B0\u7684\u70B9\u51FB\u8DF3\u8F6C\u529F\u80FD\u7ECF\u5E38\u5B58\u5728\u95EE\u9898\uFF0C\u6240\u4EE5\u5728 <code>v0.7.8</code> \u4E4B\u540E\u5B9E\u73B0\u4E86\u663E\u793A\u5F53\u524D\u7B14\u8BB0\u9644\u4EF6\u5217\u8868\u7684\u529F\u80FD\uFF0C\u7528\u4EE5\u5FEB\u901F\u7F16\u8F91\u6307\u5B9A\u9644\u4EF6\u8D44\u6E90\uFF0C\u9ED8\u8BA4\u5FEB\u6377\u952E\u4E3A <code>ctrl+j ctrl+l</code></p><p><img src="'+t+'" alt="editResource"></p><h2 id="\u7C98\u8D34\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u7C98\u8D34\u56FE\u7247" aria-hidden="true">#</a> \u7C98\u8D34\u56FE\u7247</h2><p><code>v0.1.7</code> \u4E4B\u540E\u65B0\u589E\u4E86\u56FE\u7247\u7C98\u8D34\u529F\u80FD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u83DC\u5355\u3001\u547D\u4EE4\u6216\u5FEB\u6377\u952E\u5C06\u56FE\u7247\u4E0A\u4F20\u5230 Joplin \u5E76\u7C98\u8D34\u94FE\u63A5\u5230 VSCode \u4E2D\u3002</p><ol><li><code>ctrl+alt+u</code> \u7C98\u8D34\u526A\u5207\u677F\u7684\u56FE\u7247</li><li><code>ctrl+alt+e</code> \u4F7F\u7528\u6587\u4EF6\u7BA1\u7406\u5668\u9009\u62E9\u56FE\u7247\u7C98\u8D34</li></ol><h2 id="\u6DFB\u52A0\u9644\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u9644\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u9644\u4EF6</h2><p><code>v0.1.10</code> \u4E4B\u540E\u65B0\u589E\u4E86\u6DFB\u52A0\u9644\u4EF6\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u6216\u5FEB\u6377\u952E\u5C06\u6587\u4EF6\u4F5C\u4E3A\u9644\u4EF6\u8D44\u6E90\u6DFB\u52A0\u5230 Joplin \u7B14\u8BB0\u4E2D\u3002</p><ol><li><code>ctrl+alt+shift+e</code> \u9009\u62E9\u8981\u6DFB\u52A0\u4E3A\u9644\u4EF6\u7684\u6587\u4EF6</li></ol><h2 id="\u521B\u5EFA\u9644\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9644\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u9644\u4EF6</h2><p>\u5728 <code>v0.3.0</code> \u4E4B\u540E\u5B9E\u73B0\u4E86\u53F3\u952E\u521B\u5EFA\u9644\u4EF6\u8D44\u6E90\u7684\u529F\u80FD\uFF0C\u4E3B\u8981\u7528\u4E8E\u5FEB\u901F\u521B\u5EFA\u5E76\u6DFB\u52A0\u4E00\u4E2A\u601D\u7EF4\u5BFC\u56FE\uFF08\u7531\u767E\u5EA6\u8111\u56FE\u63D0\u4F9B\u652F\u6301\uFF09\u6216\u6D41\u7A0B\u56FE\uFF08\u7531 draw.io \u63D0\u4F9B\u652F\u6301\uFF09\u3002</p><h2 id="\u7BA1\u7406\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u6807\u7B7E" aria-hidden="true">#</a> \u7BA1\u7406\u6807\u7B7E</h2><p>\u5728 <code>v0.3.0</code> \u4E4B\u540E\u652F\u6301\u7BA1\u7406\u6807\u7B7E\uFF0C\u547D\u4EE4\u662F <code>&gt; Joplin: Manage tags</code>\uFF0C\u9ED8\u8BA4\u5FEB\u6377\u952E\u4E3A <code>ctrl+j ctrl+m</code> \u5373\u53EF\u5F39\u51FA\u590D\u9009\u6846\u3002</p><h2 id="\u521B\u5EFA\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6807\u7B7E" aria-hidden="true">#</a> \u521B\u5EFA\u6807\u7B7E</h2><p>\u5728 <code>v0.3.0</code> \u4E4B\u540E\u652F\u6301\u521B\u5EFA\u6807\u7B7E\uFF0C\u547D\u4EE4\u662F <code>&gt; Joplin: Create tag</code>\u3002</p><h2 id="\u94FE\u63A5\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5\u7B14\u8BB0" aria-hidden="true">#</a> \u94FE\u63A5\u7B14\u8BB0</h2><p>\u5728\u7B14\u8BB0\u4E0A\u53F3\u952E\u83DC\u5355\u53EF\u4EE5\u770B\u5230 <strong>\u590D\u5236\u94FE\u63A5</strong>\uFF0C\u70B9\u51FB\u5373\u590D\u5236\u5230\u526A\u5207\u677F\u3002</p><p><img src="'+e+'" alt="Link notes"></p><p>\u4F7F\u7528 <code>Ctrl+\u5355\u51FB</code> \u6253\u5F00\u5230\u5176\u4ED6\u7B14\u8BB0\u4E2D\u3002</p>',24);function a(l,i){return r}var p=c(o,[["render",a]]);export{p as default};
