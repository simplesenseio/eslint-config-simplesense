(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{540:function(e,s,t){"use strict";t.r(s);var r=t(9),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-no-useless-character-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-useless-character-class"}},[e._v("#")]),e._v(" regexp/no-useless-character-class")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow character class with one character")])]),e._v(" "),t("ul",[t("li",[e._v("⚙️ This rule is included in "),t("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")]),e._v(" "),t("li",[e._v("🔧 The "),t("code",[e._v("--fix")]),e._v(" option on the "),t("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),t("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("This rule reports character classes that defines only one character.")]),e._v(" "),t("p",[e._v("Character classes that define only one character have the same effect even if you remove the brackets.")]),e._v(" "),t("eslint-code-block",{attrs:{fix:""}},[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-useless-character-class: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("abc")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a[b]c")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/no-useless-character-class"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ignores"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"="')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[t("code",[e._v('"ignores"')]),e._v(" ... An array of characters and character classes to ignores. Default "),t("code",[e._v('["="]')]),e._v(".")])]),e._v(" "),t("p",[e._v("The default value is "),t("code",[e._v('"="')]),e._v(" to prevent conflicts with the "),t("a",{attrs:{href:"https://eslint.org/docs/rules/no-div-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-div-regex"),t("OutboundLink")],1),e._v(" rule. Note that if you do not specify "),t("code",[e._v('"="')]),e._v(", there may be conflicts with the "),t("a",{attrs:{href:"https://eslint.org/docs/rules/no-div-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-div-regex"),t("OutboundLink")],1),e._v(" rule.")]),e._v(" "),t("h3",{attrs:{id:"ignores-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignores-a"}},[e._v("#")]),e._v(" "),t("code",[e._v('"ignores": ["a"]')])]),e._v(" "),t("eslint-code-block",{attrs:{fix:""}},[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-useless-character-class: ["error", { "ignores": ["a"] }] */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a]bc")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a[b]c")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[e._v("#")]),e._v(" 👫 Related rules")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://eslint.org/docs/rules/no-empty-character-class",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-empty-character-class"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://eslint.org/docs/rules/no-div-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-div-regex"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.3.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-useless-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-useless-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);