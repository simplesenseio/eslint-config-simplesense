(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{446:function(t,e,s){"use strict";s.r(e);var r=s(9),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"regexp-no-invalid-regexp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-invalid-regexp"}},[t._v("#")]),t._v(" regexp/no-invalid-regexp")]),t._v(" "),s("blockquote",[s("p",[t._v("disallow invalid regular expression strings in "),s("code",[t._v("RegExp")]),t._v(" constructors")])]),t._v(" "),s("ul",[s("li",[t._v("⚙️ This rule is included in "),s("code",[t._v('"plugin:regexp/recommended"')]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),s("p",[t._v("This rule reports invalid regular expression patterns given to "),s("code",[t._v("RegExp")]),t._v(" constructors.")]),t._v(" "),s("eslint-code-block",[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* eslint regexp/no-invalid-regexp: "error" */')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ✓ GOOD */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[a'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("']'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ✗ BAD */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[a-Z]*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\p{Foo}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" space "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\s*'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" space "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+(\\\\w+)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"differences-to-eslint-s-no-invalid-regexp-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#differences-to-eslint-s-no-invalid-regexp-rule"}},[t._v("#")]),t._v(" Differences to ESLint's "),s("code",[t._v("no-invalid-regexp")]),t._v(" rule")]),t._v(" "),s("p",[t._v("This rule is almost functionally equivalent to ESLint's "),s("a",{attrs:{href:"https://eslint.org/docs/rules/no-invalid-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("no-invalid-regexp"),s("OutboundLink")],1),t._v(" rule. The only difference is that this rule doesn't valid flags (see "),s("RouterLink",{attrs:{to:"/rules/regexp/no-non-standard-flag.html"}},[t._v("no-non-standard-flag")]),t._v(").")],1),t._v(" "),s("p",[t._v("There are two reasons we provide this rule:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Better error reporting.")]),t._v(" "),s("p",[t._v("Instead of reporting the whole invalid string, this rule will try to report the exact position of the syntax error.")])]),t._v(" "),s("li",[s("p",[t._v("Better support for complex constructor calls.")]),t._v(" "),s("p",[t._v("ESLint's rule only validates "),s("code",[t._v("RegExp")]),t._v(" constructors called with simple string literals. This rule also supports operations (e.g. string concatenation) and variables to some degree.")])])]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),s("p",[t._v("Nothing.")]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" 📚 Further reading")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://eslint.org/docs/rules/no-invalid-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("no-invalid-regexp"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" 🚀 Version")]),t._v(" "),s("p",[t._v("This rule was introduced in eslint-plugin-regexp v1.0.0")]),t._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-invalid-regexp.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-invalid-regexp.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);