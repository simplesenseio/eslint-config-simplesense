(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{687:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"regexp-confusing-quantifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regexp-confusing-quantifier"}},[e._v("#")]),e._v(" regexp/confusing-quantifier")]),e._v(" "),s("blockquote",[s("p",[e._v("disallow confusing quantifiers")])]),e._v(" "),s("ul",[s("li",[e._v("⚙️ This rule is included in "),s("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),s("p",[e._v("Confusing quantifiers are ones which imply one thing but don't deliver on that.")]),e._v(" "),s("p",[e._v("An example of this is "),s("code",[e._v("(?:a?b*|c+){4}")]),e._v(". The group is quantified with "),s("code",[e._v("{4}")]),e._v(" which\nimplies that at least 4 characters will be matched but this is not the case. The\nwhole pattern will match the empty string. It does that because in the "),s("code",[e._v("a?b*")]),e._v("\nalternative, it's possible to choose 0 many "),s("code",[e._v("a")]),e._v(" and "),s("code",[e._v("b")]),e._v(". So rather than "),s("code",[e._v("{4}")]),e._v(",\n"),s("code",[e._v("{0,4}")]),e._v(" should be used to reflect the fact that the empty string can be matched.")]),e._v(" "),s("eslint-code-block",[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/confusing-quantifier: "error" */')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a*")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a|b|c)+")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a?")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a?){4}")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// warns about `{4}`")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a?b*)+")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// warns about `+`")]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),s("p",[e._v("Nothing.")]),e._v(" "),s("h2",{attrs:{id:"compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" ❤️ Compatibility")]),e._v(" "),s("p",[e._v("This rule was taken from "),s("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint-plugin-clean-regex"),s("OutboundLink")],1),e._v("."),s("br"),e._v("\nThis rule is compatible with "),s("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/confusing-quantifier.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("clean-regex/confusing-quantifier"),s("OutboundLink")],1),e._v(" rule.")]),e._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),s("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.8.0")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/confusing-quantifier.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/confusing-quantifier.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);