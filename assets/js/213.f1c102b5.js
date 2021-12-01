(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{400:function(t,s,e){"use strict";e.r(s);var a=e(9),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"import-no-duplicates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-no-duplicates"}},[t._v("#")]),t._v(" import/no-duplicates")]),t._v(" "),e("p",[t._v("Reports if a resolved path is imported more than once.\n+(fixable) The "),e("code",[t._v("--fix")]),t._v(" option on the [command line] automatically fixes some problems reported by this rule.")]),t._v(" "),e("p",[t._v("ESLint core has a similar rule ("),e("a",{attrs:{href:"https://eslint.org/docs/rules/no-duplicate-imports",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("no-duplicate-imports")]),e("OutboundLink")],1),t._v("), but this version\nis different in two key ways:")]),t._v(" "),e("ol",[e("li",[t._v("the paths in the source code don't have to exactly match, they just have to point to the same module on the filesystem. (i.e. "),e("code",[t._v("./foo")]),t._v(" and "),e("code",[t._v("./foo.js")]),t._v(")")]),t._v(" "),e("li",[t._v("this version distinguishes Flow "),e("code",[t._v("type")]),t._v(" imports from standard imports. ("),e("a",{attrs:{href:"https://github.com/import-js/eslint-plugin-import/pull/334",target:"_blank",rel:"noopener noreferrer"}},[t._v("#334"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("Valid:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeDefaultClass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" names "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Flow `type` import from same module is fine")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" type SomeType "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n")])])]),e("p",[t._v("...whereas here, both "),e("code",[t._v("./mod")]),t._v(" imports will be reported:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeDefaultClass "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// oops, some other import separated these lines")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./some-other-mod'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" names "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will catch this too, assuming it is the same target module")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" something "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod.js'")]),t._v("\n")])])]),e("p",[t._v("The motivation is that this is likely a result of two developers importing different\nnames from the same module at different times (and potentially largely different\nlocations in the file.) This rule brings both (or n-many) to attention.")]),t._v(" "),e("h3",{attrs:{id:"query-strings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-strings"}},[t._v("#")]),t._v(" Query Strings")]),t._v(" "),e("p",[t._v("By default, this rule ignores query strings (i.e. paths followed by a question mark), and thus imports from "),e("code",[t._v("./mod?a")]),t._v(" and "),e("code",[t._v("./mod?b")]),t._v(" will be considered as duplicates. However you can use the option "),e("code",[t._v("considerQueryString")]),t._v(" to handle them as different (primarily because browsers will resolve those imports differently).")]),t._v(" "),e("p",[t._v("Config:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"import/no-duplicates"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"considerQueryString"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("And then the following code becomes valid:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" minifiedMod "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod?minify'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" noCommentsMod "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod?comments=0'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" originalMod "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n")])])]),e("p",[t._v("It will still catch duplicates when using the same module and the exact same query string:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeDefaultClass "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod?minify'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is invalid, assuming `./mod` and `./mod.js` are the same target:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod.js?minify'")]),t._v("\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If the core ESLint version is good enough (i.e. you're "),e("em",[t._v("not")]),t._v(" using Flow and you "),e("em",[t._v("are")]),t._v(" using "),e("RouterLink",{attrs:{to:"/rules/import/extensions.html"}},[e("code",[t._v("import/extensions")])]),t._v("), keep it and don't use this.")],1),t._v(" "),e("p",[t._v("If you like to split up imports across lines or may need to import a default and a namespace,\nyou may not want to enable this rule.")])])}),[],!1,null,null,null);s.default=r.exports}}]);