(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{478:function(e,s,r){"use strict";r.r(s);var a=r(9),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"regexp-prefer-range"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regexp-prefer-range"}},[e._v("#")]),e._v(" regexp/prefer-range")]),e._v(" "),r("blockquote",[r("p",[e._v("enforce using character class range")])]),e._v(" "),r("ul",[r("li",[e._v("⚙️ This rule is included in "),r("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")]),e._v(" "),r("li",[e._v("🔧 The "),r("code",[e._v("--fix")]),e._v(" option on the "),r("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),r("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),r("h2",{attrs:{id:"rule-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),r("p",[e._v("This rule is aimed to use ranges instead of multiple adjacent characters in character class.")]),e._v(" "),r("eslint-code-block",{attrs:{fix:""}},[r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/prefer-range: "error" */')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[0-9]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[123456]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-cd-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n")])])])]),e._v(" "),r("h2",{attrs:{id:"options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),r("div",{staticClass:"language-json5 extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json5"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/prefer-range"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"target"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"alphanumeric"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// or "all" or [...]')]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("This option can be used to override the "),r("RouterLink",{attrs:{to:"/rules/settings/#allowedCharacterRanges"}},[e._v("allowedCharacterRanges")]),e._v(" setting.")],1),e._v(" "),r("p",[e._v("It allows all values that the "),r("RouterLink",{attrs:{to:"/rules/settings/#allowedCharacterRanges"}},[e._v("allowedCharacterRanges")]),e._v(" setting allows.")],1),e._v(" "),r("h3",{attrs:{id:"target-alphanumeric"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#target-alphanumeric"}},[e._v("#")]),e._v(" "),r("code",[e._v('"target": "alphanumeric"')])]),e._v(" "),r("eslint-code-block",{attrs:{fix:""}},[r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/prefer-range: ["error", { "target": "alphanumeric" }] */')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[0-9]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[!-$]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v('[!"#$]')]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀-😄]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀😁😂😃😄]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[123456]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-cd-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n")])])])]),e._v(" "),r("h3",{attrs:{id:"target-all"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#target-all"}},[e._v("#")]),e._v(" "),r("code",[e._v('"target": "all"')])]),e._v(" "),r("eslint-code-block",{attrs:{fix:""}},[r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/prefer-range: ["error", { "target": "all" }] */')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[0-9]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[!-$]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀-😄]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[123456]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-cd-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v('[!"#$]')]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀😁😂😃😄]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),e._v("\n")])])])]),e._v(" "),r("h3",{attrs:{id:"target-alphanumeric-😀-😏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#target-alphanumeric-😀-😏"}},[e._v("#")]),e._v(" "),r("code",[e._v('"target": [ "alphanumeric", "😀-😏" ]')])]),e._v(" "),r("eslint-code-block",{attrs:{fix:""}},[r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/prefer-range: ["error", { "target": [ "alphanumeric", "😀-😏" ] }] */')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[0-9]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[!-$]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v('[!"#$]')]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀-😄]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[123456]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-cd-f]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token regex"}},[r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀😁😂😃😄]")]),r("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),e._v("\n")])])])]),e._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),r("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.4.0")]),e._v(" "),r("h2",{attrs:{id:"implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/prefer-range.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/prefer-range.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=t.exports}}]);