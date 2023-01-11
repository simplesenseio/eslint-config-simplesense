(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{447:function(t,e,s){"use strict";s.r(e);var n=s(9),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"regexp-no-invalid-regexp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-invalid-regexp"}},[t._v("#")]),t._v(" regexp/no-invalid-regexp")]),t._v(" "),e("p",[t._v("💼 This rule is enabled in the ✅ "),e("code",[t._v("plugin:regexp/recommended")]),t._v(" config.")]),t._v(" "),e("blockquote",[e("p",[t._v("disallow invalid regular expression strings in "),e("code",[t._v("RegExp")]),t._v(" constructors")])]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),e("p",[t._v("This rule reports invalid regular expression patterns given to "),e("code",[t._v("RegExp")]),t._v(" constructors.")]),t._v(" "),e("eslint-code-block",[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* eslint regexp/no-invalid-regexp: "error" */')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ✓ GOOD */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[a'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("']'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ✗ BAD */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[a-Z]*'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\p{Foo}'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" space "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\s*'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'='")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" space "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+(\\\\w+)'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h3",{attrs:{id:"differences-to-eslint-s-no-invalid-regexp-rule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differences-to-eslint-s-no-invalid-regexp-rule"}},[t._v("#")]),t._v(" Differences to ESLint's "),e("code",[t._v("no-invalid-regexp")]),t._v(" rule")]),t._v(" "),e("p",[t._v("This rule is almost functionally equivalent to ESLint's "),e("a",{attrs:{href:"https://eslint.org/docs/rules/no-invalid-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("no-invalid-regexp"),e("OutboundLink")],1),t._v(" rule. The only difference is that this rule doesn't valid flags (see "),e("RouterLink",{attrs:{to:"/rules/regexp/no-non-standard-flag.html"}},[t._v("no-non-standard-flag")]),t._v(").")],1),t._v(" "),e("p",[t._v("There are two reasons we provide this rule:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Better error reporting.")]),t._v(" "),e("p",[t._v("Instead of reporting the whole invalid string, this rule will try to report the exact position of the syntax error.")])]),t._v(" "),e("li",[e("p",[t._v("Better support for complex constructor calls.")]),t._v(" "),e("p",[t._v("ESLint's rule only validates "),e("code",[t._v("RegExp")]),t._v(" constructors called with simple string literals. This rule also supports operations (e.g. string concatenation) and variables to some degree.")])])]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),e("p",[t._v("Nothing.")]),t._v(" "),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" 📚 Further reading")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://eslint.org/docs/rules/no-invalid-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("no-invalid-regexp"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" 🚀 Version")]),t._v(" "),e("p",[t._v("This rule was introduced in eslint-plugin-regexp v1.0.0")]),t._v(" "),e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-invalid-regexp.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-invalid-regexp.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);