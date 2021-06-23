(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{370:function(e,t,s){"use strict";s.r(t);var o=s(44),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),s("h2",{attrs:{id:"show-error-message-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-error-message-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service"}},[e._v("#")]),e._v(" Show error message "),s("strong",[e._v("Joplin's token/port is set incorrectly, unable to access Joplin service!")])]),e._v(" "),s("p",[e._v("Please try to execute the following command in CMD/Bash, if there is no problem, it should return "),s("strong",[e._v("JoplinClipperServer")]),e._v(", otherwise you need File an issue with Joplin.")]),e._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl http://127.0.0.1:41184/ping\n")])])]),s("p",[e._v("On Linux make sure your "),s("code",[e._v("/etc/hosts")]),e._v(" contains the following entry")]),e._v(" "),s("div",{staticClass:"language-vim extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vim"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),e._v("  localhost\n")])])]),s("h2",{attrs:{id:"not-opened-in-vscode-after-clicking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#not-opened-in-vscode-after-clicking"}},[e._v("#")]),e._v(" Not opened in VSCode after clicking")]),e._v(" "),s("p",[e._v("Please refer to the official default external editor settings: "),s("a",{attrs:{href:"https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("How can I edit my note in an external text editor?"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"how-to-list-joplin-notes-opened-by-vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-list-joplin-notes-opened-by-vscode"}},[e._v("#")]),e._v(" How to list joplin notes opened by VSCode")]),e._v(" "),s("p",[e._v("Although there is no official support, you can use the shortcut key "),s("code",[e._v("c+j c+o")]),e._v(" to list the last modified 20 joplin notes to do similar things.")]),e._v(" "),s("h2",{attrs:{id:"no-list-displayed-in-the-sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-list-displayed-in-the-sidebar"}},[e._v("#")]),e._v(" No list displayed in the sidebar")]),e._v(" "),s("p",[e._v("After checking joplin configuration items, restart VSCode.")]),e._v(" "),s("h2",{attrs:{id:"clicking-on-the-sidebar-fails-to-open-the-note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clicking-on-the-sidebar-fails-to-open-the-note"}},[e._v("#")]),e._v(" Clicking on the sidebar fails to open the note")]),e._v(" "),s("p",[e._v("There may be multiple reasons for this problem")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Please use version v1.4 or higher, because it contains the necessary "),s("a",{attrs:{href:"https://discourse.joplinapp.org/t/hope-that-the-web-api-adds-the-following-features-to-support-the-development-of-third-party-extensions/9277/11?u=rxliuli",target:"_blank",rel:"noopener noreferrer"}},[e._v("action api"),s("OutboundLink")],1),e._v(" , For example, open notes based on noteId in VSCode")])]),e._v(" "),s("li",[s("p",[e._v("The current version is Joplin Desktop. The plug-in does not support CLI, because it does not include the above action api. Reference: "),s("a",{attrs:{href:"https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("Check whether the following command can be executed normally, if it still cannot be opened in the editor, you may want to ask @laurent22")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://localhost:27584/services/externalEditWatcher?token=***'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n "action": "openAndWatch",\n "noteId": "257f6a9dacc1409580ee526d50ac4d49"\n}\'')]),e._v("\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"windows-10-cannot-upload-a-cut-version-of-the-picture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-cannot-upload-a-cut-version-of-the-picture"}},[e._v("#")]),e._v(" Windows 10 cannot upload a cut version of the picture")]),e._v(" "),s("p",[e._v("Powershell may not be installed, enter powershell in CMD to check")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("powershell\n")])])]),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png",alt:"powershell"}})]),e._v(" "),s("p",[e._v("If you are prompted to "),s("code",[e._v("spawn powershell ENOENT")]),e._v(", you need to install powershell, refer to: "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install PowerShell on Windows"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);