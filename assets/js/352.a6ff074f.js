(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{542:function(t,s,a){"use strict";a.r(s);var e=a(9),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"disallow-new-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disallow-new-array"}},[t._v("#")]),t._v(" Disallow "),s("code",[t._v("new Array()")])]),t._v(" "),s("p",[t._v("💼 This rule is enabled in the ✅ "),s("code",[t._v("recommended")]),t._v(" "),s("a",{attrs:{href:"https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("🔧💡 This rule is automatically fixable by the "),s("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("--fix")]),t._v(" CLI option"),s("OutboundLink")],1),t._v(" and manually fixable by "),s("a",{attrs:{href:"https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions",target:"_blank",rel:"noopener noreferrer"}},[t._v("editor suggestions"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The ESLint built-in rule "),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-array-constructor",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("no-array-constructor")]),s("OutboundLink")],1),t._v(" enforces using an array literal instead of the "),s("code",[t._v("Array")]),t._v(" constructor, but it still allows using the "),s("code",[t._v("Array")]),t._v(" constructor with "),s("strong",[t._v("one")]),t._v(" argument. This rule fills that gap.")]),t._v(" "),s("p",[t._v("When using the "),s("code",[t._v("Array")]),t._v(" constructor with one argument, it's not clear whether the argument is meant to be the length of the array or the only element.")]),t._v(" "),s("p",[t._v("This rule is fixable if the value type of the argument is known.")]),t._v(" "),s("h2",{attrs:{id:"fail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fail"}},[t._v("#")]),t._v(" Fail")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onlyElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("unknownArgumentsList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"pass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pass"}},[t._v("#")]),t._v(" Pass")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("onlyElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);