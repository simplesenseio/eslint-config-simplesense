(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{445:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"regexp-no-empty-lookarounds-assertion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-empty-lookarounds-assertion"}},[e._v("#")]),e._v(" regexp/no-empty-lookarounds-assertion")]),e._v(" "),s("blockquote",[s("p",[e._v("disallow empty lookahead assertion or empty lookbehind assertion")])]),e._v(" "),s("ul",[s("li",[e._v("⚙️ This rule is included in "),s("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),s("p",[e._v("This rule reports empty lookahead assertion or empty lookbehind assertion.")]),e._v(" "),s("h3",{attrs:{id:"what-are-empty-lookarounds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-empty-lookarounds"}},[e._v("#")]),e._v(" What are "),s("em",[e._v("empty lookarounds")]),e._v("?")]),e._v(" "),s("p",[e._v("An empty lookaround is a lookaround for which at least one path in the lookaround expression contains only elements that do not consume characters and do not assert characters. This means that the lookaround expression will trivially accept any input string.")]),e._v(" "),s("p",[s("strong",[e._v("Examples:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("(?=)")]),e._v(": One of simplest empty lookarounds.")]),e._v(" "),s("li",[s("code",[e._v("(?=a*)")]),e._v(": It is possible for "),s("code",[e._v("a*")]),e._v(" to not consume characters, therefore the lookahead is "),s("em",[e._v("empty")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("(?=a|b*)")]),e._v(": Only one path has to not consume characters. Since it is possible for "),s("code",[e._v("b*")]),e._v(" to not consume characters, the lookahead is "),s("em",[e._v("empty")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("(?=a|$)")]),e._v(": This is "),s("strong",[e._v("not")]),e._v(" an empty lookaround. "),s("code",[e._v("$")]),e._v(" does not "),s("em",[e._v("consume")]),e._v(" characters but it does "),s("em",[e._v("assert")]),e._v(" characters. Similarly, all other standard assertions ("),s("code",[e._v("\\b")]),e._v(", "),s("code",[e._v("\\B")]),e._v(", "),s("code",[e._v("^")]),e._v(") are also not empty.")])]),e._v(" "),s("h3",{attrs:{id:"why-are-empty-lookarounds-a-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-are-empty-lookarounds-a-problem"}},[e._v("#")]),e._v(" Why are empty lookarounds a problem?")]),e._v(" "),s("p",[e._v("Because empty lookarounds accept the empty string, they are essentially non-functional. They will always trivially reject/accept.")]),e._v(" "),s("p",[e._v("E.g. "),s("code",[e._v("(?=b?)\\w")]),e._v(" will match "),s("code",[e._v("a")]),e._v(" just fine. "),s("code",[e._v("(?=b?)")]),e._v(" will always trivially accept no matter the input string. The same also happens for negated lookarounds but they will trivially reject. E.g. "),s("code",[e._v("(?!b?)\\w")]),e._v(" won't match any input strings.")]),e._v(" "),s("p",[e._v("The only way to fix empty lookarounds is to either remove them or to rewrite the lookaround expression to be non-empty.")]),e._v(" "),s("eslint-code-block",[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-empty-lookarounds-assertion: "error" */')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("x(?=y)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("x(?!y)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=y)x")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<!y)x")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("x(?=)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("x(?!)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=)x")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<!)x")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?=b?)\\w")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?!b?)\\w")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),s("p",[e._v("Nothing.")]),e._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),s("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.1.0")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-empty-lookarounds-assertion.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-empty-lookarounds-assertion.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);