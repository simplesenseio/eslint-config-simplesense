(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{457:function(e,s,t){"use strict";t.r(s);var a=t(9),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"regexp-no-dupe-characters-character-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-dupe-characters-character-class"}},[e._v("#")]),e._v(" regexp/no-dupe-characters-character-class")]),e._v(" "),s("p",[e._v("💼 This rule is enabled in the ✅ "),s("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),s("p",[e._v("🔧 This rule is automatically fixable by the "),s("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("--fix")]),e._v(" CLI option"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("disallow duplicate characters in the RegExp character class")])]),e._v(" "),s("p",[e._v("Because multiple same character classes in regular expressions only one is useful, they might be typing mistakes.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\\\(\\\\)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),s("p",[e._v("This rule disallows duplicate characters in the RegExp character class.")]),e._v(" "),s("eslint-code-block",{attrs:{fix:""}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-dupe-characters-character-class: "error" */')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\(\\)]")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-z\\s]")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\w]")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\\\(\\\\)]")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//          ^^ ^^        "\\\\" are duplicated')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[a-z\\\\s]")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//          ^^^  ^       "s" are duplicated')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[\\w0-9]")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//          ^^^^^        "0-9" are duplicated')]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),s("p",[e._v("Nothing.")]),e._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),s("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.1.0")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-dupe-characters-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-dupe-characters-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);