(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{392:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"import-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-default"}},[t._v("#")]),t._v(" import/default")]),t._v(" "),s("p",[t._v("If a default import is requested, this rule will report if there is no default\nexport in the imported module.")]),t._v(" "),s("p",[t._v("For "),s("a",{attrs:{href:"https://github.com/leebyron/ecmascript-more-export-from",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES7"),s("OutboundLink")],1),t._v(", reports if a default is named and exported but is not found in the\nreferenced module.")]),t._v(" "),s("p",[t._v("Note: for packages, the plugin will find exported names\nfrom "),s("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/jsnext:main",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("jsnext:main")]),s("OutboundLink")],1),t._v(", if present in "),s("code",[t._v("package.json")]),t._v(".\nRedux's npm module includes this key, and thereby is lintable, for example.")]),t._v(" "),s("p",[t._v("A module path that is "),s("RouterLink",{attrs:{to:"/rules/#importignore"}},[t._v("ignored")]),t._v(" or not "),s("a",{attrs:{href:"https://github.com/bmeck/UnambiguousJavaScriptGrammar",target:"_blank",rel:"noopener noreferrer"}},[t._v("unambiguously an ES module"),s("OutboundLink")],1),t._v(" will not be reported when imported.")],1),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("p",[t._v("Given:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./foo.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./bar.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./baz.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node_modules/some-module/index.js")]),t._v("\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sharedFunction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shared")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The following is considered valid:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// assuming 'node_modules' are ignored (true by default)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" someModule "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-module'")]),t._v("\n")])])]),s("p",[t._v("...and the following cases are reported:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./bar'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no default export found in ./bar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./baz'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no default export found in ./baz")]),t._v("\n")])])]),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),s("p",[t._v("If you are using CommonJS and/or modifying the exported namespace of any module at\nruntime, you will likely see false positives with this rule.")]),t._v(" "),s("p",[t._v("This rule currently does not interpret "),s("code",[t._v("module.exports = ...")]),t._v(" as a "),s("code",[t._v("default")]),t._v(" export,\neither, so such a situation will be reported in the importing module.")]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),s("ul",[s("li",[t._v("Lee Byron's "),s("a",{attrs:{href:"https://github.com/leebyron/ecmascript-more-export-from",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES7"),s("OutboundLink")],1),t._v(" export proposal")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/#importignore"}},[s("code",[t._v("import/ignore")])]),t._v(" setting")],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/jsnext:main",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("jsnext:main")]),s("OutboundLink")],1),t._v(" (Rollup)")])])])}),[],!1,null,null,null);e.default=r.exports}}]);