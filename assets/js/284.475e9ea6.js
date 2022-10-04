(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{473:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"regexp-prefer-character-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp-prefer-character-class"}},[e._v("#")]),e._v(" regexp/prefer-character-class")]),e._v(" "),a("blockquote",[a("p",[e._v("enforce using character class")])]),e._v(" "),a("ul",[a("li",[e._v("⚙️ This rule is included in "),a("code",[e._v('"plugin:regexp/recommended"')]),e._v(".")]),e._v(" "),a("li",[e._v("🔧 The "),a("code",[e._v("--fix")]),e._v(" option on the "),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),a("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),a("h2",{attrs:{id:"rule-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),a("p",[e._v("Instead of single-character alternatives (e.g. "),a("code",[e._v("(?:a|b|c)")]),e._v("), character classes (e.g. "),a("code",[e._v("[abc]")]),e._v(") should be preferred.")]),e._v(" "),a("p",[e._v("The main reason for doing this is performance. Character classes don't require backtracking and are heavily optimized by the regex engine. On the other hand, alternatives are usually quite tricky to optimize.")]),e._v(" "),a("p",[e._v("Character classes are also safer than alternatives because they don't require backtracking. While "),a("code",[e._v("^(?:\\w|a)+b$")]),e._v(" will take "),a("em",[e._v("O(2^n)")]),e._v(" time to reject a string of "),a("em",[e._v("n")]),e._v(" many "),a("code",[e._v("a")]),e._v("s, the regex "),a("code",[e._v("^[\\wa]+b$")]),e._v(" will reject a string of "),a("em",[e._v("n")]),e._v(" many "),a("code",[e._v("a")]),e._v("s in "),a("em",[e._v("O(n)")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),a("p",[e._v("This rule might not be able to merge all single-character alternatives.")]),e._v(" "),a("eslint-code-block",{attrs:{fix:""}},[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/prefer-character-class: "error" */')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("[abc]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:a|b)")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a|b|c")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(a|b|c)c")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v(".|\\s")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(\\w|\\d)+:")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),a("div",{staticClass:"language-json5 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json5"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/prefer-character-class"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"minAlternatives"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"minalternatives-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minalternatives-integer"}},[e._v("#")]),e._v(" "),a("code",[e._v("minAlternatives: integer")])]),e._v(" "),a("p",[e._v("This number controls how many character alternatives have to be present for them to be merged. By default, there need to be at least 3 alternatives.")]),e._v(" "),a("p",[e._v("Note that this option does not affect character alternatives where the characters overlap. These alternatives will always be merged to prevent excessive backtracking.")]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),a("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.4.0")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/prefer-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/prefer-character-class.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);