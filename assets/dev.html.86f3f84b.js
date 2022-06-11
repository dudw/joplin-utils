import{e}from"./app.0de55949.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const l={},o=e('<h1 id="\u53C2\u4E0E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u53C2\u4E0E\u9879\u76EE" aria-hidden="true">#</a> \u53C2\u4E0E\u9879\u76EE</h1><h2 id="\u5982\u4F55\u8D21\u732E" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8D21\u732E" aria-hidden="true">#</a> \u5982\u4F55\u8D21\u732E</h2><p>\u4E3B\u8981\u5206\u4E3A\u4E24\u65B9\u9762</p><ul><li>\u5F00\u53D1 <ul><li>\u5B9E\u73B0\u672A\u5B8C\u6210\u7684\u529F\u80FD</li><li>\u63D0\u51FA\u65B0\u7684 idea \u5E76\u5B9E\u73B0</li></ul></li><li>\u975E\u5F00\u53D1 <ul><li>\u5E2E\u52A9\u7FFB\u8BD1\u6587\u6863\u3001\u56FD\u9645\u5316\u7684\u914D\u7F6E\u6587\u4EF6</li><li>\u7F16\u5199 vscode \u4E0E joplin \u7684\u7ED3\u5408\u6587\u6863</li><li>\u7F16\u5199\u53C2\u4E0E\u5F00\u53D1\u7684\u6587\u6863</li></ul></li></ul><h2 id="\u73AF\u5883\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u8981\u6C42" aria-hidden="true">#</a> \u73AF\u5883\u8981\u6C42</h2><ul><li>nodejs &gt;= v12</li><li>joplin &gt;= v1.4</li><li>yarn</li></ul><h2 id="\u542F\u52A8\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u9879\u76EE" aria-hidden="true">#</a> \u542F\u52A8\u9879\u76EE</h2><ol><li>\u4F7F\u7528 vscode \u6253\u5F00\u9879\u76EE</li><li><code>cp .vscode/_launch.json .vscode/launch.json</code></li><li>\u4FEE\u6539 <em>.vscode/launch.json</em> \u914D\u7F6E\uFF0C\u4FEE\u6539\u4EE5\u4E0B\u914D\u7F6E\u9879 <blockquote><p>\u4E2A\u4EBA\u5EFA\u8BAE\u540C\u65F6\u542F\u52A8 joplin electron \u9879\u76EE\uFF0C\u907F\u514D\u5728\u771F\u5B9E\u7684\u4E2A\u4EBA\u7B14\u8BB0\u4E0A\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u63D2\u4EF6\u53EF\u80FD\u9519\u8BEF\u7684\u7834\u574F\u771F\u5B9E\u7B14\u8BB0\u3002</p></blockquote><ul><li><code>configurations/env</code><ul><li><code>JOPLIN_TOKEN</code>: web clipper \u7684\u9A8C\u8BC1\u4EE4\u724C</li><li><code>JOPLIN_PORT</code>: \u7AEF\u53E3\uFF0C\u5F00\u53D1\u73AF\u5883\u4E00\u822C\u662F <code>27584</code></li><li><code>JOPLIN_PROFILE_PATH</code>: \u4E2A\u4EBA\u914D\u7F6E\u76EE\u5F55\uFF0C\u5F00\u53D1\u73AF\u5883\u5E94\u8BE5\u662F <code>~/.config/joplin-desktop</code>\uFF0C\u4F46\u6CE8\u610F\u9700\u8981\u4F7F\u7528\u5B8C\u5168\u8DEF\u5F84</li></ul></li></ul></li><li>\u4F7F\u7528 <code>yarn watch</code> \u542F\u52A8 tsc \u76D1\u89C6\u6A21\u5F0F</li><li>\u4F7F\u7528 <code>F5</code> \u8FD0\u884C\u8C03\u8BD5\u6A21\u5F0F</li></ol><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h2><ul><li><code>docs</code>: joplin \u5728\u7EBF\u6587\u6863</li><li><code>resources</code>: \u56FE\u6807\u8D44\u6E90</li><li><code>src</code>: \u6E90\u4EE3\u7801 <ul><li><code>api</code>: \u4E00\u4E9B <code>joplin-api</code> \u4E2D\u76EE\u524D\u4E0D\u5B58\u5728\u7684\u529F\u80FD\u589E\u5F3A</li><li><code>config</code>: \u63D2\u4EF6\u914D\u7F6E\u76F8\u5173\u5904\u7406</li><li><code>model</code>: \u63D0\u4F9B view \u7684 <code>NodePrivider</code> \u5B9E\u73B0\u7C7B</li><li><code>service</code>: \u4E00\u4E9B\u5176\u4ED6\u7684\u670D\u52A1\u5B9E\u73B0</li><li><code>util</code>: \u901A\u7528\u5DE5\u5177\u4EE3\u7801</li></ul></li><li><code>package.nls*.json</code>: \u56FD\u9645\u5316\u914D\u7F6E\u6587\u4EF6</li></ul>',10);function c(d,a){return o}var s=i(l,[["render",c]]);export{s as default};
