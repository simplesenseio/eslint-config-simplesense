(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{470:function(e,s,t){"use strict";t.r(s);var a=t(9),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"regexp-no-extra-lookaround-assertions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-extra-lookaround-assertions"}},[e._v("#")]),e._v(" regexp/no-extra-lookaround-assertions")]),e._v(" "),s("p",[e._v("💼 This rule is enabled in the following configs: 🟢 "),s("code",[e._v("flat/recommended")]),e._v(", 🔵 "),s("code",[e._v("recommended")]),e._v(".")]),e._v(" "),s("p",[e._v("🔧 This rule is automatically fixable by the "),s("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("--fix")]),e._v(" CLI option"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("blockquote",[s("p",[e._v("disallow unnecessary nested lookaround assertions")])]),e._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),s("p",[e._v("The last positive lookahead assertion within a lookahead assertion is the same without lookahead assertions.\nAlso, The first positive lookbehind assertion within a lookbehind assertion is the same without lookbehind assertions.\nThey can be inlined or converted to group.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=b(?=c))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* -> */")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=bc)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=b(?=c|C))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* -> */")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=b(?:c|C))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(?<=a)b)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* -> */")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=ab)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(?<=a|A)b)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* -> */")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(?:a|A)b)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("This rule aims to report and fix these unnecessary lookaround assertions.")]),e._v(" "),s("eslint-code-block",{attrs:{fix:""}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-extra-lookaround-assertions: "error" */')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" ts "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'JavaScript'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("Java(?=Script)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" java "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'JavaScript'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=Java)Script")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=bc)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=b(?:c|C))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=ab)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(?:a|A)b)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" ts "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'JavaScript'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("Java(?=Scrip(?=t))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" java "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'JavaScript'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(?<=J)ava)Script")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=b(?=c))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=b(?=c|C))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(?<=a)b)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=(?<=a|A)b)c")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),s("p",[e._v("Nothing.")]),e._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),s("p",[e._v("This rule was introduced in eslint-plugin-regexp v1.11.0")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-extra-lookaround-assertions.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-extra-lookaround-assertions.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);