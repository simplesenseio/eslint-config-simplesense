(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{328:function(s,t,a){"use strict";a.r(t);var e=a(9),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("It's a common mistake in JavaScript to use a conditional expression to select between two Boolean values instead of using ! to convert the test to a Boolean.\nHere are some examples:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" isYes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" answer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" isYes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" answer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" isNo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" answer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" isNo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" answer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Another common mistake is using a single variable as both the conditional test and the consequent. In such cases, the logical "),t("code",[s._v("OR")]),s._v(" can be used to provide the same functionality.\nHere is an example:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),t("p",[s._v("This rule disallow ternary operators when simpler alternatives exist.")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),t("p",[s._v("::: incorrect")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-unneeded-ternary: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v(":::")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),t("p",[s._v("::: correct")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-unneeded-ternary: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Yes"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Yes"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"No"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// default assignment - would be disallowed if defaultAssignment option set to false. See option details below.")]),s._v("\n")])])]),t("p",[s._v(":::")]),s._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),t("p",[s._v("This rule has an object option:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('"defaultAssignment": true')]),s._v(" (default) allows the conditional expression as a default assignment pattern")]),s._v(" "),t("li",[t("code",[s._v('"defaultAssignment": false')]),s._v(" disallows the conditional expression as a default assignment pattern")])]),s._v(" "),t("h3",{attrs:{id:"defaultassignment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defaultassignment"}},[s._v("#")]),s._v(" defaultAssignment")]),s._v(" "),t("p",[s._v("When set to "),t("code",[s._v("true")]),s._v(", which it is by default, The defaultAssignment option allows expressions of the form "),t("code",[s._v("x ? x : expr")]),s._v(" (where "),t("code",[s._v("x")]),s._v(" is any identifier and "),t("code",[s._v("expr")]),s._v(" is any expression).")]),s._v(" "),t("p",[s._v("Examples of additional "),t("strong",[s._v("incorrect")]),s._v(" code for this rule with the "),t("code",[s._v('{ "defaultAssignment": false }')]),s._v(" option:")]),s._v(" "),t("p",[s._v("::: incorrect")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-unneeded-ternary: ["error", { "defaultAssignment": false }]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v(":::")]),s._v(" "),t("p",[s._v("Note that "),t("code",[s._v("defaultAssignment: false")]),s._v(" still allows expressions of the form "),t("code",[s._v("x ? expr : x")]),s._v(" (where the identifier is on the right hand side of the ternary).")]),s._v(" "),t("h2",{attrs:{id:"when-not-to-use-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[s._v("#")]),s._v(" When Not To Use It")]),s._v(" "),t("p",[s._v("You can turn this rule off if you are not concerned with unnecessary complexity in conditional expressions.")])])}),[],!1,null,null,null);t.default=n.exports}}]);