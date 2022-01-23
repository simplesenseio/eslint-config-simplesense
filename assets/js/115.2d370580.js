(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{306:function(s,e,t){"use strict";t.r(e);var a=t(9),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"disallow-8-and-9-escape-sequences-in-string-literals-no-nonoctal-decimal-escape"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disallow-8-and-9-escape-sequences-in-string-literals-no-nonoctal-decimal-escape"}},[s._v("#")]),s._v(" Disallow "),t("code",[s._v("\\8")]),s._v(" and "),t("code",[s._v("\\9")]),s._v(" escape sequences in string literals (no-nonoctal-decimal-escape)")]),s._v(" "),t("p",[s._v("Although not being specified in the language until ECMAScript 2021, "),t("code",[s._v("\\8")]),s._v(" and "),t("code",[s._v("\\9")]),s._v(' escape sequences in string literals were allowed in most JavaScript engines, and treated as "useless" escapes:')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\8"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\9"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),t("p",[s._v("Since ECMAScript 2021, these escape sequences are specified as "),t("a",{attrs:{href:"https://tc39.es/ecma262/#prod-annexB-NonOctalDecimalEscapeSequence",target:"_blank",rel:"noopener noreferrer"}},[s._v("non-octal decimal escape sequences"),t("OutboundLink")],1),s._v(", retaining the same behavior.")]),s._v(" "),t("p",[s._v("Nevertheless, the ECMAScript specification treats "),t("code",[s._v("\\8")]),s._v(" and "),t("code",[s._v("\\9")]),s._v(" in string literals as a legacy feature. This syntax is optional if the ECMAScript host is not a web browser. Browsers still have to support it, but only in non-strict mode.")]),s._v(" "),t("p",[s._v("Regardless of your targeted environment, these escape sequences shouldn't be used when writing new code.")]),s._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),t("p",[s._v("This rule disallows "),t("code",[s._v("\\8")]),s._v(" and "),t("code",[s._v("\\9")]),s._v(" escape sequences in string literals.")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-nonoctal-decimal-escape: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\9"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"w\\8less"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"December 1\\9"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" baz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Don\'t use \\8 and \\9 escapes."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" quux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\0\\8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-nonoctal-decimal-escape: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"w8less"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"December 19"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" baz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Don\'t use \\\\8 and \\\\9 escapes."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" quux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\0\\u0038"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[s._v("#")]),s._v(" Related Rules")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-octal-escape.html"}},[s._v("no-octal-escape")])],1)]),s._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[s._v("#")]),s._v(" Further Reading")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tc39.es/ecma262/#prod-annexB-NonOctalDecimalEscapeSequence",target:"_blank",rel:"noopener noreferrer"}},[s._v("NonOctalDecimalEscapeSequence"),t("OutboundLink")],1),s._v(" in ECMAScript specification")])])])}),[],!1,null,null,null);e.default=n.exports}}]);