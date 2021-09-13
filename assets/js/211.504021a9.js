(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{398:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"import-no-cycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-no-cycle"}},[t._v("#")]),t._v(" import/no-cycle")]),t._v(" "),s("p",[t._v("Ensures that there is no resolvable path back to this module via its dependencies.")]),t._v(" "),s("p",[t._v("This includes cycles of depth 1 (imported module imports me) to "),s("code",[t._v('"∞"')]),t._v(" (or "),s("code",[t._v("Infinity")]),t._v("), if the\n"),s("a",{attrs:{href:"#maxdepth"}},[s("code",[t._v("maxDepth")])]),t._v(" option is not set.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dep-b.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dep-a.js'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dep-a.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dep-b.js'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reported: Dependency cycle detected.")]),t._v("\n")])])]),s("p",[t._v("This rule does "),s("em",[t._v("not")]),t._v(" detect imports that resolve directly to the linted module;\nfor that, see "),s("RouterLink",{attrs:{to:"/rules/import/no-self-import.html"}},[s("code",[t._v("no-self-import")])]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("By default, this rule only detects cycles for ES6 imports, but see the "),s("RouterLink",{attrs:{to:"/rules/import/no-unresolved.html#options"}},[s("code",[t._v("no-unresolved")]),t._v(" options")]),t._v(" as this rule also supports the same "),s("code",[t._v("commonjs")]),t._v(" and "),s("code",[t._v("amd")]),t._v(" flags. However, these flags only impact which import types are "),s("em",[t._v("linted")]),t._v("; the\nimport/export infrastructure only registers "),s("code",[t._v("import")]),t._v(" statements in dependencies, so\ncycles created by "),s("code",[t._v("require")]),t._v(" within imported modules may not be detected.")],1),t._v(" "),s("h4",{attrs:{id:"maxdepth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxdepth"}},[t._v("#")]),t._v(" "),s("code",[t._v("maxDepth")])]),t._v(" "),s("p",[t._v("There is a "),s("code",[t._v("maxDepth")]),t._v(" option available to prevent full expansion of very deep dependency trees:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint import/no-cycle: [2, { maxDepth: 1 }]*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dep-c.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dep-a.js'")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dep-b.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dep-c.js'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dep-a.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dep-b.js'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not reported as the cycle is at depth 2")]),t._v("\n")])])]),s("p",[t._v("This is not necessarily recommended, but available as a cost/benefit tradeoff mechanism\nfor reducing total project lint time, if needed.")]),t._v(" "),s("h4",{attrs:{id:"ignoreexternal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignoreexternal"}},[t._v("#")]),t._v(" "),s("code",[t._v("ignoreExternal")])]),t._v(" "),s("p",[t._v("An "),s("code",[t._v("ignoreExternal")]),t._v(" option is available to prevent the cycle detection to expand to external modules:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint import/no-cycle: [2, { ignoreExternal: true }]*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dep-a.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module-b/dep-b.js'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node_modules/module-b/dep-b.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dep-a.js'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not reported as this module is external")]),t._v("\n")])])]),s("p",[t._v("Its value is "),s("code",[t._v("false")]),t._v(" by default, but can be set to "),s("code",[t._v("true")]),t._v(" for reducing total project lint time, if needed.")]),t._v(" "),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),s("p",[t._v("This rule is comparatively computationally expensive. If you are pressed for lint\ntime, or don't think you have an issue with dependency cycles, you may not want\nthis rule enabled.")]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/import-js/eslint-plugin-import/issues/941",target:"_blank",rel:"noopener noreferrer"}},[t._v("Original inspiring issue"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Rule to detect that module imports itself: "),s("RouterLink",{attrs:{to:"/rules/import/no-self-import.html"}},[s("code",[t._v("no-self-import")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/#importexternal-module-folders"}},[s("code",[t._v("import/external-module-folders")])]),t._v(" setting")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);