(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{469:function(e,t,a){"use strict";a.r(t);var s=a(9),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-optimal-lookaround-quantifier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-optimal-lookaround-quantifier"}},[e._v("#")]),e._v(" regexp/optimal-lookaround-quantifier")]),e._v(" "),t("p",[e._v("⚠️ This rule "),t("em",[e._v("warns")]),e._v(" in the ✅ "),t("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow the alternatives of lookarounds that end with a non-constant quantifier")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("Non-constant quantifiers are quantifiers that describe a range (e.g. "),t("code",[e._v("?")]),e._v(", "),t("code",[e._v("*")]),e._v(",\n"),t("code",[e._v("+")]),e._v(", "),t("code",[e._v("{0,1}")]),e._v(", "),t("code",[e._v("{5,9}")]),e._v(", "),t("code",[e._v("{3,}")]),e._v("). They have to match some number of times (the\nminimum) after which further matches are optional until a certain maximum (may\nbe infinite) is reached.")]),e._v(" "),t("p",[e._v("It's obvious that "),t("code",[e._v("/ba{2}/")]),e._v(" and "),t("code",[e._v("/ba{2,6}/")]),e._v(" will match differently because of\nthe different quantifiers of "),t("code",[e._v("a")]),e._v(" but that not the case if for lookarounds. Both\n"),t("code",[e._v("/b(?=a{2})/")]),e._v(" and "),t("code",[e._v("/b(?=a{2,6})/")]),e._v(" will match strings the same way. I.e. for the\ninput string "),t("code",[e._v('"baaa"')]),e._v(", both will create the same match arrays. The two regular\nexpression are actually equivalent, meaning that "),t("code",[e._v("(?=a{2})")]),e._v(" is equivalent to\n"),t("code",[e._v("(?=a{2,6})")]),e._v(".")]),e._v(" "),t("p",[e._v("More generally, if a non-constant quantifier is an "),t("strong",[e._v("end")]),e._v(" of the expression\ntree of a "),t("strong",[e._v("lookahead")]),e._v(", that quantifier can be replaced with a constant\nquantifier that matched the element minimum-if-the-non-constant-quantifier many\ntimes. For "),t("strong",[e._v("lookbehinds")]),e._v(", the non-constant quantifier has to be at the\n"),t("strong",[e._v("start")]),e._v(" of the expression tree as lookbehinds are matched from right to left.")]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/optimal-lookaround-quantifier: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// lookaheads")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+(?=\\s*:)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// lookbehinds")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=ab+)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// lookaheads")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?=ab+)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// == /(?=ab)/")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?=ab*)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// == /(?=a)/")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?!ab?)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// == /(?!a)/")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?!ab{6,})")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// == /(?!ab{6})/")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// lookbehinds")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<=a+b)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// == /(?<=ab)/")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?<!\\w*\\s*,)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// == /(?<!,)/")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("p",[e._v("Nothing.")]),e._v(" "),t("h2",{attrs:{id:"compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" ❤️ Compatibility")]),e._v(" "),t("p",[e._v("This rule was taken from "),t("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint-plugin-clean-regex"),t("OutboundLink")],1),e._v("."),t("br"),e._v("\nThis rule is compatible with "),t("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/optimal-lookaround-quantifier.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("clean-regex/optimal-lookaround-quantifier"),t("OutboundLink")],1),e._v(" rule.")]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.8.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/optimal-lookaround-quantifier.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/optimal-lookaround-quantifier.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);