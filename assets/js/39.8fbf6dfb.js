(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{229:function(t,s,e){"use strict";e.r(s);var a=e(9),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"require-and-eqeqeq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require-and-eqeqeq"}},[t._v("#")]),t._v(" Require === and !== (eqeqeq)")]),t._v(" "),e("p",[t._v("It is considered good practice to use the type-safe equality operators "),e("code",[t._v("===")]),t._v(" and "),e("code",[t._v("!==")]),t._v(" instead of their regular counterparts "),e("code",[t._v("==")]),t._v(" and "),e("code",[t._v("!=")]),t._v(".")]),t._v(" "),e("p",[t._v("The reason for this is that "),e("code",[t._v("==")]),t._v(" and "),e("code",[t._v("!=")]),t._v(" do type coercion which follows the rather obscure "),e("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Abstract Equality Comparison Algorithm"),e("OutboundLink")],1),t._v(".\nFor instance, the following statements are all considered "),e("code",[t._v("true")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("[] == false")])]),t._v(" "),e("li",[e("code",[t._v("[] == ![]")])]),t._v(" "),e("li",[e("code",[t._v('3 == "03"')])])]),t._v(" "),e("p",[t._v("If one of those occurs in an innocent-looking statement such as "),e("code",[t._v("a == b")]),t._v(" the actual problem is very difficult to spot.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule is aimed at eliminating the type-unsafe equality operators.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStuff")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("--fix")]),t._v(" option on the command line automatically fixes some problems reported by this rule. A problem is only fixed if one of the operands is a "),e("code",[t._v("typeof")]),t._v(" expression, or if both operands are literals with the same type.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("h3",{attrs:{id:"always"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[t._v("#")]),t._v(" always")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v('"always"')]),t._v(" option (default) enforces the use of "),e("code",[t._v("===")]),t._v(" and "),e("code",[t._v("!==")]),t._v(" in every situation (except when you opt-in to more specific handling of "),e("code",[t._v("null")]),t._v(" [see below]).")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('"always"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "always"]*/')]),t._v("\n\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nbananas "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('"always"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "always"]*/')]),t._v("\n\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nbananas "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n")])])]),e("p",[t._v("This rule optionally takes a second argument, which should be an object with the following supported properties:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"null"')]),t._v(": Customize how this rule treats "),e("code",[t._v("null")]),t._v(" literals. Possible values:\n"),e("ul",[e("li",[e("code",[t._v("always")]),t._v(" (default) - Always use === or !==.")]),t._v(" "),e("li",[e("code",[t._v("never")]),t._v(" - Never use === or !== with "),e("code",[t._v("null")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("ignore")]),t._v(" - Do not apply this rule to "),e("code",[t._v("null")]),t._v(".")])])])]),t._v(" "),e("h3",{attrs:{id:"smart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#smart"}},[t._v("#")]),t._v(" smart")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v('"smart"')]),t._v(" option enforces the use of "),e("code",[t._v("===")]),t._v(" and "),e("code",[t._v("!==")]),t._v(" except for these cases:")]),t._v(" "),e("ul",[e("li",[t._v("Comparing two literal values")]),t._v(" "),e("li",[t._v("Evaluating the value of "),e("code",[t._v("typeof")])]),t._v(" "),e("li",[t._v("Comparing against "),e("code",[t._v("null")])])]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('"smart"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "smart"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// comparing two variables requires ===")]),t._v("\na "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// only one side is a literal")]),t._v("\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nbananas "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// comparing to undefined requires ===")]),t._v("\nvalue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('"smart"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "smart"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),e("h3",{attrs:{id:"allow-null"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allow-null"}},[t._v("#")]),t._v(" allow-null")]),t._v(" "),e("p",[e("strong",[t._v("Deprecated:")]),t._v(' Instead of using this option use "always" and pass a "null" option property with value "ignore". This will tell ESLint to always enforce strict equality except when comparing with the '),e("code",[t._v("null")]),t._v(" literal.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"null"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ignore"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you don't want to enforce a style for using equality operators, then it's safe to disable this rule.")])])}),[],!1,null,null,null);s.default=r.exports}}]);