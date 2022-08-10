(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{452:function(e,s,a){"use strict";a.r(s);var t=a(9),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"regexp-no-obscure-range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-obscure-range"}},[e._v("#")]),e._v(" regexp/no-obscure-range")]),e._v(" "),a("blockquote",[a("p",[e._v("disallow obscure character ranges")])]),e._v(" "),a("ul",[a("li",[e._v("⚙️ This rule is included in "),a("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"rule-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),a("p",[e._v("The character range operator (the "),a("code",[e._v("-")]),e._v(" inside character classes) can easily be misused (mostly unintentionally) to construct non-obvious character class. This rule will disallow all non-obvious uses of the character range operator.")]),e._v(" "),a("eslint-code-block",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-obscure-range: "error" */')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-z]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[J-O]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[1-9]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\x00-\\x40]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\0-\\uFFFF]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\0-\\u{10FFFF}]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\1-\\5]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\cA-\\cZ]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[A-\\x43]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\41-\\x45]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[!-$]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀-😄]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),a("div",{staticClass:"language-json5 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json5"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/no-obscure-range"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"allowed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"alphanumeric"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// or "all" or [...]')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This option can be used to override the "),a("RouterLink",{attrs:{to:"/rules/settings/#allowedCharacterRanges"}},[e._v("allowedCharacterRanges")]),e._v(" setting.")],1),e._v(" "),a("p",[e._v("It allows all values that the "),a("RouterLink",{attrs:{to:"/rules/settings/#allowedCharacterRanges"}},[e._v("allowedCharacterRanges")]),e._v(" setting allows.")],1),e._v(" "),a("h3",{attrs:{id:"allowed-alphanumeric"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowed-alphanumeric"}},[e._v("#")]),e._v(" "),a("code",[e._v('"allowed": "alphanumeric"')])]),e._v(" "),a("eslint-code-block",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-obscure-range: ["error", { "allowed": "alphanumeric" }] */')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-z]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[J-O]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[1-9]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[A-\\x43]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\41-\\x45]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[!-$]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀-😄]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),a("h3",{attrs:{id:"allowed-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowed-all"}},[e._v("#")]),e._v(" "),a("code",[e._v('"allowed": "all"')])]),e._v(" "),a("eslint-code-block",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-obscure-range: ["error", { "allowed": "all" }] */')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-z]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[J-O]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[1-9]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[!-$]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀-😄]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[A-\\x43]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\41-\\x45]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),a("h3",{attrs:{id:"allowed-alphanumeric-😀-😏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowed-alphanumeric-😀-😏"}},[e._v("#")]),e._v(" "),a("code",[e._v('"allowed": [ "alphanumeric", "😀-😏" ]')])]),e._v(" "),a("eslint-code-block",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-obscure-range: ["error", { "allowed": [ "alphanumeric", "😀-😏" ] }] */')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-z]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[J-O]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[1-9]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[😀-😄]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[A-\\x43]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\41-\\x45]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[!-$]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),a("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.9.0")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-obscure-range.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-obscure-range.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);