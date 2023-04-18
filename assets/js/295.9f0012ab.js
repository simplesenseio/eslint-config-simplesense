(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{484:function(e,t,s){"use strict";s.r(t);var r=s(9),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-strict"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-strict"}},[e._v("#")]),e._v(" regexp/strict")]),e._v(" "),t("p",[e._v("💼 This rule is enabled in the ✅ "),t("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),t("p",[e._v("🔧💡 This rule is automatically fixable by the "),t("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("--fix")]),e._v(" CLI option"),t("OutboundLink")],1),e._v(" and manually fixable by "),t("a",{attrs:{href:"https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions",target:"_blank",rel:"noopener noreferrer"}},[e._v("editor suggestions"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow not strictly valid regular expressions")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("This rule disallows not strictly valid regular expressions.")]),e._v(" "),t("p",[e._v("An invalid pattern in a regular expression literal is a "),t("code",[e._v("SyntaxError")]),e._v(" when the code is parsed. However, it is not always strictly checked.")]),e._v(" "),t("p",[e._v("Depending on the syntax defined in "),t("a",{attrs:{href:"https://tc39.es/ecma262/#sec-regular-expressions-patterns",target:"_blank",rel:"noopener noreferrer"}},[e._v("Annex B"),t("OutboundLink")],1),e._v(" of the ECMAScript specification, some ambiguous pattern syntax may also succeed in parsing as a valid pattern. This rule reports these ambiguous patterns.")]),e._v(" "),t("eslint-code-block",{attrs:{fix:""}},[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/strict: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\}")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\{")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\]")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\u{42}")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("u")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// It matches "B".')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("u{42}")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// It matches a string followed by 42 "u"s.')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\u{42}")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// It matches a string followed by 42 "u"s.')]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("p",[e._v("Nothing.")]),e._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" 📚 Further reading")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tc39.es/ecma262/#sec-regular-expressions-patterns",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMAScript® 2022 Language Specification > Annex B > B.1.4 Regular Expressions Patterns"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[e._v("#")]),e._v(" 👫 Related rules")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://eslint.org/docs/rules/no-invalid-regexp",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-invalid-regexp"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/rules/regexp/no-standalone-backslash.html"}},[e._v("regexp/no-standalone-backslash")])],1)]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.12.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/strict.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/strict.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);