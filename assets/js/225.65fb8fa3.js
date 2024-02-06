(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{418:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"import-namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-namespace"}},[t._v("#")]),t._v(" import/namespace")]),t._v(" "),e("p",[t._v("💼 This rule is enabled in the following configs: ❗ "),e("code",[t._v("errors")]),t._v(", ☑️ "),e("code",[t._v("recommended")]),t._v(".")]),t._v(" "),e("p",[t._v("Enforces names exist at the time they are dereferenced, when imported as a full namespace (i.e. "),e("code",[t._v("import * as foo from './foo'; foo.bar();")]),t._v(" will report if "),e("code",[t._v("bar")]),t._v(" is not exported by "),e("code",[t._v("./foo")]),t._v(".).")]),t._v(" "),e("p",[t._v("Will report at the import declaration if there are "),e("em",[t._v("no")]),t._v(" exported names found.")]),t._v(" "),e("p",[t._v("Also, will report for computed references (i.e. "),e("code",[t._v('foo["bar"]()')]),t._v(").")]),t._v(" "),e("p",[t._v("Reports on assignment to a member of an imported namespace.")]),t._v(" "),e("p",[t._v("Note: for packages, the plugin will find exported names\nfrom "),e("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/jsnext:main",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("jsnext:main")]),e("OutboundLink")],1),t._v(", if present in "),e("code",[t._v("package.json")]),t._v(".\nRedux's npm module includes this key, and thereby is lintable, for example.")]),t._v(" "),e("p",[t._v("A module path that is "),e("RouterLink",{attrs:{to:"/rules/#importignore"}},[t._v("ignored")]),t._v(" or not "),e("a",{attrs:{href:"https://github.com/bmeck/UnambiguousJavaScriptGrammar",target:"_blank",rel:"noopener noreferrer"}},[t._v("unambiguously an ES module"),e("OutboundLink")],1),t._v(" will not be reported when imported.")],1),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("Currently, this rule does not check for possible\nredefinition of the namespace in an intermediate scope. Adherence to the ESLint\n"),e("code",[t._v("no-shadow")]),t._v(" rule for namespaces will prevent this from being a problem.")]),t._v(" "),e("p",[t._v("For "),e("a",{attrs:{href:"https://github.com/leebyron/ecmascript-more-export-from",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES7"),e("OutboundLink")],1),t._v(", reports if an exported namespace would be empty (no names exported from the referenced module.)")]),t._v(" "),e("p",[t._v("Given:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @module ./named-exports")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExportedClass")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES7")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" deep "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./deep'")]),t._v("\n")])])]),e("p",[t._v("and:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @module ./deep")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" e "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MC2"')]),t._v("\n")])])]),e("p",[t._v("See what is valid and reported:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @module ./foo")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" names "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./named-exports'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("great")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" names"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" names"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// so great https://youtu.be/ei7mb8UxEl8")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("notGreat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reported: 'c' not found in imported namespace 'names'.")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" names "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// also reported, only for 'c'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// also tunnels through re-exported namespaces!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deepTrouble")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fine")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reported: 'f' not found in deeply imported namespace 'names.deep'.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("h4",{attrs:{id:"allowcomputed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowcomputed"}},[t._v("#")]),t._v(" "),e("code",[t._v("allowComputed")])]),t._v(" "),e("p",[t._v("Defaults to "),e("code",[t._v("false")]),t._v(". When false, will report the following:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint import/namespace: [2, { allowComputed: false }]*/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./a'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unable to validate computed reference to imported namespace 'a'.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When set to "),e("code",[t._v("true")]),t._v(", the above computed namespace member reference is allowed, but\nstill can't be statically analyzed any further.")]),t._v(" "),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),e("ul",[e("li",[t._v("Lee Byron's "),e("a",{attrs:{href:"https://github.com/leebyron/ecmascript-more-export-from",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES7"),e("OutboundLink")],1),t._v(" export proposal")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/#importignore"}},[e("code",[t._v("import/ignore")])]),t._v(" setting")],1),t._v(" "),e("li",[e("a",{attrs:{href:"Rollup"}},[e("code",[t._v("jsnext:main")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);