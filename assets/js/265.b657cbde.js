(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{453:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-no-optional-assertion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-optional-assertion"}},[e._v("#")]),e._v(" regexp/no-optional-assertion")]),e._v(" "),t("p",[e._v("💼 This rule is enabled in the ✅ "),t("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow optional assertions")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("Assertions that are quantified (directly or indirectly) can be considered optional if the quantifier has a minimum of zero.")]),e._v(" "),t("p",[e._v("A simple example is the following pattern: "),t("code",[e._v("/a(?:$)*b/")]),e._v(". The "),t("code",[e._v("$")]),e._v(" assertion will reject but if that happens, it will simply be ignored because of the "),t("code",[e._v("*")]),e._v(" quantifier. The assertion is optional, serving no function whatsoever.")]),e._v(" "),t("p",[e._v("More generally, an assertion is optional, if there exists a parent quantifier with a minimum of zero such that all possible paths of the quantified element that contain the assertion do not consume characters.")]),e._v(" "),t("p",[e._v("Here's an example: "),t("code",[e._v("a(?:foo|(?<!-)(?:-|\\b))*b")]),e._v(". The "),t("code",[e._v("\\b")]),e._v(" is optional. However, the lookbehind "),t("code",[e._v("(?<!-)")]),e._v(" is not optional because the group "),t("code",[e._v("(?:-|\\b)")]),e._v(" right after it can consume a character.")]),e._v(" "),t("p",[e._v("Optional assertions don't affect the pattern in any way. They are essentially dead code.")]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-optional-assertion: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+(?::|\\b)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?:$)*b")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?:foo|(?<!-)(?:-|\\b))*b")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The `\\b` is optional.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:^)?\\w+")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// warns about `^`")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+(?::|$)?")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// warns about `$`")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("p",[e._v("Nothing.")]),e._v(" "),t("h2",{attrs:{id:"compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" ❤️ Compatibility")]),e._v(" "),t("p",[e._v("This rule was taken from "),t("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint-plugin-clean-regex"),t("OutboundLink")],1),e._v("."),t("br"),e._v("\nThis rule is compatible with "),t("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/no-optional-assertion.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("clean-regex/no-optional-assertion"),t("OutboundLink")],1),e._v(" rule.")]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.9.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-optional-assertion.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-optional-assertion.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);