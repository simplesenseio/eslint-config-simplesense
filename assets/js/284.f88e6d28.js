(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{471:function(e,r,t){"use strict";t.r(r);var a=t(9),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-prefer-character-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-prefer-character-class"}},[e._v("#")]),e._v(" regexp/prefer-character-class")]),e._v(" "),t("blockquote",[t("p",[e._v("enforce using character class")])]),e._v(" "),t("ul",[t("li",[e._v("⚙️ This rule is included in "),t("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")]),e._v(" "),t("li",[e._v("🔧 The "),t("code",[e._v("--fix")]),e._v(" option on the "),t("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),t("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("Instead of single-character alternatives (e.g. "),t("code",[e._v("(?:a|b|c)")]),e._v("), character classes (e.g. "),t("code",[e._v("[abc]")]),e._v(") should be preferred.")]),e._v(" "),t("p",[e._v("The main reason for doing this is performance. Character classes don't require backtracking and are heavily optimized by the regex engine. On the other hand, alternatives are usually quite tricky to optimize.")]),e._v(" "),t("p",[e._v("Character classes are also safer than alternatives because they don't require backtracking. While "),t("code",[e._v("^(?:\\w|a)+b$")]),e._v(" will take "),t("em",[e._v("O(2^n)")]),e._v(" time to reject a string of "),t("em",[e._v("n")]),e._v(" many "),t("code",[e._v("a")]),e._v("s, the regex "),t("code",[e._v("^[\\wa]+b$")]),e._v(" will reject a string of "),t("em",[e._v("n")]),e._v(" many "),t("code",[e._v("a")]),e._v("s in "),t("em",[e._v("O(n)")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),t("p",[e._v("This rule might not be able to merge all single-character alternatives.")]),e._v(" "),t("eslint-code-block",{attrs:{fix:""}},[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/prefer-character-class: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[abc]")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:a|b)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a|b|c")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a|b|c)c")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v(".|\\s")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(\\w|\\d)+:")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("p",[e._v("Nothing.")]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.4.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/prefer-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/prefer-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);r.default=s.exports}}]);