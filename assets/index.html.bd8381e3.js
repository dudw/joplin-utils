import{r as t,o as e,c as a,a as d,b as o,F as n,d as i,e as r}from"./app.c480ac43.js";const s={},p=d("h1",{id:"joplin-api",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#joplin-api","aria-hidden":"true"},"#"),i(" joplin api")],-1),c={href:"https://joplin-utils.rxliuli.com/joplin-api/",target:"_blank",rel:"noopener noreferrer"},l=i("API 文档"),u=i(", "),h={href:"https://joplinapp.org/api/overview/",target:"_blank",rel:"noopener noreferrer"},b=i("Joplin 官方文档"),k=r('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Joplin api 的 js 封装，使用 ts 编写，提供完整的类型定义，包含目前所有在文档中公开的 api。</p><h2 id="快速启动" tabindex="-1"><a class="header-anchor" href="#快速启动" aria-hidden="true">#</a> 快速启动</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>config<span class="token punctuation">.</span>port <span class="token operator">=</span> <span class="token number">27583</span>\nconfig<span class="token punctuation">.</span>token <span class="token operator">=</span> <span class="token string">&#39;***&#39;</span>\n<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> noteApi<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',4),A=i("更多示例参考: "),f={href:"https://github.com/rxliuli/joplin-utils/tree/master/libs/joplin-api/test",target:"_blank",rel:"noopener noreferrer"},g=i("https://github.com/rxliuli/joplin-utils/tree/master/libs/joplin-api/test"),m=r('<h2 id="api-参考" tabindex="-1"><a class="header-anchor" href="#api-参考" aria-hidden="true">#</a> API 参考</h2><table><thead><tr><th>对象</th><th>描述</th></tr></thead><tbody><tr><td><code>folderApi</code></td><td>目录相关 api，例如获取目录树</td></tr><tr><td><code>folderExtApi</code></td><td>目录扩展 api，例如移动目录</td></tr><tr><td><code>joplinApi</code></td><td>joplin 基础 api，例如检查 joplin web 服务是否打开</td></tr><tr><td><code>noteActionApi</code></td><td>笔记相关动作 api，例如在外部编辑器打开笔记</td></tr><tr><td><code>noteApi</code></td><td>笔记相关 api，例如获取笔记的内容</td></tr><tr><td><code>noteExtApi</code></td><td>笔记扩展 api，例如重命名</td></tr><tr><td><code>resourceActionApi</code></td><td>资源动作 api，例如在外部编辑器打开附件资源</td></tr><tr><td><code>resourceApi</code></td><td>资源相关 api，例如上传图片</td></tr><tr><td><code>searchApi</code></td><td>搜索相关 api</td></tr><tr><td><code>tagApi</code></td><td>标签相关 api，例如修改笔记的标签</td></tr><tr><td><code>config</code></td><td>全局 joplin web clipper 配置</td></tr><tr><td><code>PageUtil</code></td><td>分页相关的静态工具类，例如获取全量笔记列表</td></tr></tbody></table><h2 id="约定俗成" tabindex="-1"><a class="header-anchor" href="#约定俗成" aria-hidden="true">#</a> 约定俗成</h2><ul><li>使用 class 封装 API，例如 note 相关的 API 被封装在 <code>NoteApi</code> 类中。</li><li>同一个功能含义保持统一的命名。例如笔记列表是 <code>NoteApi.list</code>。以下为完整对照表</li></ul><table><thead><tr><th>含义</th><th>命名</th><th>示例</th></tr></thead><tbody><tr><td>列表</td><td><code>list</code></td><td><code>noteApi.list</code></td></tr><tr><td>根据 id 获取</td><td><code>get</code></td><td><code>noteApi.get</code></td></tr><tr><td>创建</td><td><code>create</code></td><td><code>noteApi.create</code></td></tr><tr><td>修改</td><td><code>update</code></td><td><code>noteApi.update</code></td></tr><tr><td>删除</td><td><code>remove</code></td><td><code>noteApi.remove</code></td></tr></tbody></table><ul><li>存在一些特殊情况，例如涉及到多个实体的 api，命名则一般是 <code>操作实体 + by + 依据实体</code>，例如 根据笔记 id 获取标签列表的 api 是 <code>noteApi.tagsById</code></li></ul><h2 id="一些问题" tabindex="-1"><a class="header-anchor" href="#一些问题" aria-hidden="true">#</a> 一些问题</h2><ul><li><code>get</code> 方法不应该报错，如果不存在应该返回 <code>null</code> 而非抛出异常</li><li>缺少常见的 <code>rename/move</code> 函数，而只有更加通用的 <code>update</code> -- 已实现 <code>NoteExtApi/FolderExtApi</code></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>两种方式</p><ol><li>全局配置</li><li>生成新的实例</li></ol>',11);s.render=function(i,r){const s=t("OutboundLink");return e(),a(n,null,[p,d("blockquote",null,[d("p",null,[d("a",c,[l,o(s)]),u,d("a",h,[b,o(s)])])]),k,d("blockquote",null,[d("p",null,[A,d("a",f,[g,o(s)])])]),m],64)};export{s as default};
