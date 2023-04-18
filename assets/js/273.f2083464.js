(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{462:function(e,s,t){"use strict";t.r(s);var r=t(9),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"regexp-no-useless-character-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-useless-character-class"}},[e._v("#")]),e._v(" regexp/no-useless-character-class")]),e._v(" "),s("p",[e._v("💼 This rule is enabled in the ✅ "),s("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),s("p",[e._v("🔧 This rule is automatically fixable by the "),s("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("--fix")]),e._v(" CLI option"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("disallow character class with one character")])]),e._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),s("p",[e._v("This rule reports character classes that defines only one character.")]),e._v(" "),s("p",[e._v("Character classes that define only one character have the same effect even if you remove the brackets.")]),e._v(" "),s("eslint-code-block",{attrs:{fix:""}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-useless-character-class: "error" */')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("abc")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a[b]c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/no-useless-character-class"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ignores"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("ul",[s("li",[s("code",[e._v('"ignores"')]),e._v(" ... An array of characters and character classes to ignores. Default "),s("code",[e._v('["="]')]),e._v(".")])]),e._v(" "),s("p",[e._v("The default value is "),s("code",[e._v('"="')]),e._v(" to prevent conflicts with the "),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-div-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-div-regex"),s("OutboundLink")],1),e._v(" rule. Note that if you do not specify "),s("code",[e._v('"="')]),e._v(", there may be conflicts with the "),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-div-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-div-regex"),s("OutboundLink")],1),e._v(" rule.")]),e._v(" "),s("h3",{attrs:{id:"ignores-a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignores-a"}},[e._v("#")]),e._v(" "),s("code",[e._v('"ignores": ["a"]')])]),e._v(" "),s("eslint-code-block",{attrs:{fix:""}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-useless-character-class: ["error", { "ignores": ["a"] }] */')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a]bc")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a[b]c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"related-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[e._v("#")]),e._v(" 👫 Related rules")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://eslint.org/docs/rules/no-empty-character-class",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-empty-character-class"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://eslint.org/docs/rules/no-div-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-div-regex"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),s("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.3.0")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-useless-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-useless-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);