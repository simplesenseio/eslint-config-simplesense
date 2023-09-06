(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{421:function(t,s,e){"use strict";e.r(s);var a=e(9),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"import-no-duplicates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-no-duplicates"}},[t._v("#")]),t._v(" import/no-duplicates")]),t._v(" "),s("p",[t._v("⚠️ This rule "),s("em",[t._v("warns")]),t._v(" in the following configs: ☑️ "),s("code",[t._v("recommended")]),t._v(", 🚸 "),s("code",[t._v("warnings")]),t._v(".")]),t._v(" "),s("p",[t._v("🔧 This rule is automatically fixable by the "),s("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("--fix")]),t._v(" CLI option"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Reports if a resolved path is imported more than once.")]),t._v(" "),s("p",[t._v("ESLint core has a similar rule ("),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-duplicate-imports",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("no-duplicate-imports")]),s("OutboundLink")],1),t._v("), but this version\nis different in two key ways:")]),t._v(" "),s("ol",[s("li",[t._v("the paths in the source code don't have to exactly match, they just have to point to the same module on the filesystem. (i.e. "),s("code",[t._v("./foo")]),t._v(" and "),s("code",[t._v("./foo.js")]),t._v(")")]),t._v(" "),s("li",[t._v("this version distinguishes Flow "),s("code",[t._v("type")]),t._v(" imports from standard imports. ("),s("a",{attrs:{href:"https://github.com/import-js/eslint-plugin-import/pull/334",target:"_blank",rel:"noopener noreferrer"}},[t._v("#334"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("p",[t._v("Valid:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeDefaultClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" names "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Flow `type` import from same module is fine")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" type SomeType "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n")])])]),s("p",[t._v("...whereas here, both "),s("code",[t._v("./mod")]),t._v(" imports will be reported:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeDefaultClass "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// oops, some other import separated these lines")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./some-other-mod'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" names "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will catch this too, assuming it is the same target module")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" something "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod.js'")]),t._v("\n")])])]),s("p",[t._v("The motivation is that this is likely a result of two developers importing different\nnames from the same module at different times (and potentially largely different\nlocations in the file.) This rule brings both (or n-many) to attention.")]),t._v(" "),s("h3",{attrs:{id:"query-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-strings"}},[t._v("#")]),t._v(" Query Strings")]),t._v(" "),s("p",[t._v("By default, this rule ignores query strings (i.e. paths followed by a question mark), and thus imports from "),s("code",[t._v("./mod?a")]),t._v(" and "),s("code",[t._v("./mod?b")]),t._v(" will be considered as duplicates. However you can use the option "),s("code",[t._v("considerQueryString")]),t._v(" to handle them as different (primarily because browsers will resolve those imports differently).")]),t._v(" "),s("p",[t._v("Config:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"import/no-duplicates"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"considerQueryString"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("And then the following code becomes valid:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" minifiedMod "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod?minify'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" noCommentsMod "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod?comments=0'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" originalMod "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod'")]),t._v("\n")])])]),s("p",[t._v("It will still catch duplicates when using the same module and the exact same query string:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeDefaultClass "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod?minify'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is invalid, assuming `./mod` and `./mod.js` are the same target:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mod.js?minify'")]),t._v("\n")])])]),s("h3",{attrs:{id:"inline-type-imports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-type-imports"}},[t._v("#")]),t._v(" Inline Type imports")]),t._v(" "),s("p",[t._v("TypeScript 4.5 introduced a new "),s("a",{attrs:{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#type-on-import-names",target:"_blank",rel:"noopener noreferrer"}},[t._v("feature"),s("OutboundLink")],1),t._v(" that allows mixing of named value and type imports. In order to support fixing to an inline type import when duplicate imports are detected, "),s("code",[t._v("prefer-inline")]),t._v(" can be set to true.")]),t._v(" "),s("p",[t._v("Config:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"import/no-duplicates"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prefer-inline"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),t._v(" "),s("p",[t._v("❌ Invalid "),s("code",[t._v('["error", {"prefer-inline": true}]')])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type AType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mama-mia'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" type "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mama-mia'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CValue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./papa-mia'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" type "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./papa-mia'")]),t._v("\n")])])]),s("p",[t._v("✅ Valid with "),s("code",[t._v('["error", {"prefer-inline": true}]')])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type AType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type BType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mama-mia'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type CType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./papa-mia'")]),t._v("\n")])])]),t._v(" "),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),s("p",[t._v("If the core ESLint version is good enough (i.e. you're "),s("em",[t._v("not")]),t._v(" using Flow and you "),s("em",[t._v("are")]),t._v(" using "),s("RouterLink",{attrs:{to:"/rules/import/extensions.html"}},[s("code",[t._v("import/extensions")])]),t._v("), keep it and don't use this.")],1),t._v(" "),s("p",[t._v("If you like to split up imports across lines or may need to import a default and a namespace,\nyou may not want to enable this rule.")])])}),[],!1,null,null,null);s.default=r.exports}}]);