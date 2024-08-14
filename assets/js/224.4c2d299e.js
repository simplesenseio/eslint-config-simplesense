(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{417:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"import-named"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-named"}},[t._v("#")]),t._v(" import/named")]),t._v(" "),e("p",[t._v("💼🚫 This rule is enabled in the following configs: ❗ "),e("code",[t._v("errors")]),t._v(", ☑️ "),e("code",[t._v("recommended")]),t._v(". This rule is "),e("em",[t._v("disabled")]),t._v(" in the ⌨️ "),e("code",[t._v("typescript")]),t._v(" config.")]),t._v(" "),e("p",[t._v("Verifies that all named imports are part of the set of named exports in the referenced module.")]),t._v(" "),e("p",[t._v("For "),e("code",[t._v("export")]),t._v(", verifies that all named exports exist in the referenced module.")]),t._v(" "),e("p",[t._v("Note: for packages, the plugin will find exported names\nfrom "),e("a",{attrs:{href:"https://github.com/jsforum/jsforum/issues/5",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("jsnext:main")]),e("OutboundLink")],1),t._v(" (deprecated) or "),e("code",[t._v("module")]),t._v(", if present in "),e("code",[t._v("package.json")]),t._v(".\nRedux's npm module includes this key, and thereby is lintable, for example.")]),t._v(" "),e("p",[t._v("A module path that is "),e("RouterLink",{attrs:{to:"/#importignore"}},[t._v("ignored")]),t._v(" or not "),e("a",{attrs:{href:"https://github.com/bmeck/UnambiguousJavaScriptGrammar",target:"_blank",rel:"noopener noreferrer"}},[t._v("unambiguously an ES module"),e("OutboundLink")],1),t._v(" will not be reported when imported. Note that type imports and exports, as used by "),e("a",{attrs:{href:"https://flow.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow"),e("OutboundLink")],1),t._v(", are always ignored.")],1),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("Given:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./foo.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m so foo"')]),t._v("\n")])])]),e("p",[t._v("The following is considered valid:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./bar.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES7 proposal")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node_modules without jsnext:main are not analyzed by default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (import/ignore setting)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SomeNonsenseThatDoesntExist "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n")])])]),e("p",[t._v("...and the following are reported:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./baz.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" notFoo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES7 proposal")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" notFoo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" defNotBar "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will follow 'jsnext:main', if available")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dontCreateStore "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),t._v("\n")])])]),e("h3",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/#importignore"}},[e("code",[t._v("import/ignore")])]),t._v(" can be provided as a setting to ignore certain modules (node_modules,\nCoffeeScript, CSS if using Webpack, etc.).")],1),t._v(" "),e("p",[t._v("Given:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .eslintrc (YAML)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("settings")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("import/ignore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# included by default, but replaced if explicitly configured")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.coffee$")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# can't parse CoffeeScript (unless a custom polyglot parser was configured)")]),t._v("\n")])])]),e("p",[t._v("and")]),t._v(" "),e("div",{staticClass:"language-coffeescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-coffeescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./whatever.coffee")]),t._v("\nexports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("whatever "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log foo\n")])])]),e("p",[t._v("then the following is not reported:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./foo.js")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can't be analyzed, and ignored, so not reported")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" notWhatever "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./whatever'")]),t._v("\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you are using CommonJS and/or modifying the exported namespace of any module at\nruntime, you will likely see false positives with this rule.")]),t._v(" "),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/#importignore"}},[e("code",[t._v("import/ignore")])]),t._v(" setting")],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/jsforum/jsforum/issues/5",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("jsnext:main")]),e("OutboundLink")],1),t._v(" deprecation")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/pkg.module",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("pkg.module")]),e("OutboundLink")],1),t._v(" (Rollup)")])])])}),[],!1,null,null,null);e.default=n.exports}}]);