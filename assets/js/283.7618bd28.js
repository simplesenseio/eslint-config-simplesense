(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{473:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"regexp-optimal-quantifier-concatenation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp-optimal-quantifier-concatenation"}},[e._v("#")]),e._v(" regexp/optimal-quantifier-concatenation")]),e._v(" "),a("blockquote",[a("p",[e._v("require optimal quantifiers for concatenated quantifiers")])]),e._v(" "),a("ul",[a("li",[e._v("⚙️ This rule is included in "),a("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")]),e._v(" "),a("li",[e._v("🔧 The "),a("code",[e._v("--fix")]),e._v(" option on the "),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),a("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),a("h2",{attrs:{id:"rule-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),a("p",[e._v("If two quantified characters, character classes, or characters are concatenated, the quantifiers can be optimized if either of the characters elements is a subset of the other.")]),e._v(" "),a("p",[e._v("Let's take "),a("code",[e._v("\\d+\\w+")]),e._v(" as an example. "),a("br"),e._v("\nThis can be optimized to the equivalent pattern "),a("code",[e._v("\\d\\w+")]),e._v(". Not only is the optimized pattern simpler, it is also faster because the first pattern might take up to "),a("em",[e._v("O(n^2)")]),e._v(" steps to fail while the optimized pattern will fail after at most "),a("em",[e._v("O(n)")]),e._v(" steps. Generally, the optimized pattern will take less backtracking steps to fail.")]),e._v(" "),a("p",[e._v("Choosing optimal quantifiers does not only make your patterns simpler but also faster and most robust against ReDoS attacks.")]),e._v(" "),a("eslint-code-block",{attrs:{fix:""}},[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/optimal-quantifier-concatenation: "error" */')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+\\d{4}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w{3,5}\\d*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a+b+c+d+[abc]+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a\\w*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+\\d+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+\\d?")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[ab]*(?:a|b)")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+(?:(a)|b)*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),a("div",{staticClass:"language-json5 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json5"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/optimal-quantifier-concatenation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"capturingGroups"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"report"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"capturinggroups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capturinggroups"}},[e._v("#")]),e._v(" "),a("code",[e._v("capturingGroups")])]),e._v(" "),a("p",[e._v("The type of concatenation this rule reports might be intentional around capturing groups. This option allows you turn of false unfixable reports around capturing groups.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v('capturingGroups: "report"')]),e._v(" ("),a("em",[e._v("default")]),e._v(")")]),e._v(" "),a("p",[e._v("Concatenations around quantifiers will be reported.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v('capturingGroups: "ignore"')])]),e._v(" "),a("p",[e._v("Concatenations around quantifiers will not be reported.")]),e._v(" "),a("p",[e._v("If this option is used, it is recommend to have the "),a("RouterLink",{attrs:{to:"/rules/regexp/no-super-linear-backtracking.html"}},[e._v("regexp/no-super-linear-backtracking")]),e._v(" rule enabled to protect against ReDoS.")],1)])]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" 📚 Further reading")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/rules/regexp/no-super-linear-backtracking.html"}},[e._v("regexp/no-super-linear-backtracking")])],1)]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),a("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.11.0")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/optimal-quantifier-concatenation.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/optimal-quantifier-concatenation.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);