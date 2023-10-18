(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{475:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-no-missing-g-flag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-missing-g-flag"}},[e._v("#")]),e._v(" regexp/no-missing-g-flag")]),e._v(" "),t("p",[e._v("💼 This rule is enabled in the ✅ "),t("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),t("p",[e._v("🔧 This rule is automatically fixable by the "),t("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("--fix")]),e._v(" CLI option"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow missing "),t("code",[e._v("g")]),e._v(" flag in patterns used in "),t("code",[e._v("String#matchAll")]),e._v(" and "),t("code",[e._v("String#replaceAll")])])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("When calling "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("String#matchAll()")]),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("String#replaceAll()")]),t("OutboundLink")],1),e._v(" with a "),t("code",[e._v("RegExp")]),e._v(" missing the global ("),t("code",[e._v("g")]),e._v(") flag, it will be a runtime error.\nThis rule reports "),t("code",[e._v("RegExp")]),e._v("s missing the global ("),t("code",[e._v("g")]),e._v(") flag that cause these errors.")]),e._v(" "),t("eslint-code-block",{attrs:{fix:""}},[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-missing-g-flag: "error" */')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" games "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'table football, foosball'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" text "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" m "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" games"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("matchAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("g")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" newText "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("replaceAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("Dog")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("ig")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cat'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" m "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" games"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("matchAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" newText "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("replaceAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("Dog")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[e._v("i")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cat'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/no-missing-g-flag"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"strictTypes"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[t("code",[e._v("strictTypes")]),e._v(" ... If "),t("code",[e._v("true")]),e._v(", strictly check the type of object to determine if the regex instance was used in "),t("code",[e._v("matchAll()")]),e._v(" and "),t("code",[e._v("replaceAll()")]),e._v(". Default is "),t("code",[e._v("true")]),e._v("."),t("br"),e._v("\nThis option is always on when using TypeScript.")])]),e._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" 📚 Further reading")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Web Docs - String.prototype.matchAll()"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Web Docs - String.prototype.replaceAll()"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v1.10.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-missing-g-flag.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-missing-g-flag.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);