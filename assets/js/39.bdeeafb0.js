(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{229:function(t,s,e){"use strict";e.r(s);var a=e(9),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("It is considered good practice to use the type-safe equality operators "),s("code",[t._v("===")]),t._v(" and "),s("code",[t._v("!==")]),t._v(" instead of their regular counterparts "),s("code",[t._v("==")]),t._v(" and "),s("code",[t._v("!=")]),t._v(".")]),t._v(" "),s("p",[t._v("The reason for this is that "),s("code",[t._v("==")]),t._v(" and "),s("code",[t._v("!=")]),t._v(" do type coercion which follows the rather obscure "),s("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Abstract Equality Comparison Algorithm"),s("OutboundLink")],1),t._v(".\nFor instance, the following statements are all considered "),s("code",[t._v("true")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("[] == false")])]),t._v(" "),s("li",[s("code",[t._v("[] == ![]")])]),t._v(" "),s("li",[s("code",[t._v('3 == "03"')])])]),t._v(" "),s("p",[t._v("If one of those occurs in an innocent-looking statement such as "),s("code",[t._v("a == b")]),t._v(" the actual problem is very difficult to spot.")]),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("p",[t._v("This rule is aimed at eliminating the type-unsafe equality operators.")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: "error"*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStuff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("--fix")]),t._v(" option on the command line automatically fixes some problems reported by this rule. A problem is only fixed if one of the operands is a "),s("code",[t._v("typeof")]),t._v(" expression, or if both operands are literals with the same type.")]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("h3",{attrs:{id:"always"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[t._v("#")]),t._v(" always")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v('"always"')]),t._v(" option (default) enforces the use of "),s("code",[t._v("===")]),t._v(" and "),s("code",[t._v("!==")]),t._v(" in every situation (except when you opt-in to more specific handling of "),s("code",[t._v("null")]),t._v(" [see below]).")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for the "),s("code",[t._v('"always"')]),t._v(" option:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "always"]*/')]),t._v("\n\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b\nfoo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nbananas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nfoo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for the "),s("code",[t._v('"always"')]),t._v(" option:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "always"]*/')]),t._v("\n\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b\nfoo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nbananas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nfoo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("This rule optionally takes a second argument, which should be an object with the following supported properties:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"null"')]),t._v(": Customize how this rule treats "),s("code",[t._v("null")]),t._v(" literals. Possible values:\n"),s("ul",[s("li",[s("code",[t._v("always")]),t._v(" (default) - Always use === or !==.")]),t._v(" "),s("li",[s("code",[t._v("never")]),t._v(" - Never use === or !== with "),s("code",[t._v("null")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("ignore")]),t._v(" - Do not apply this rule to "),s("code",[t._v("null")]),t._v(".")])])])]),t._v(" "),s("h3",{attrs:{id:"smart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smart"}},[t._v("#")]),t._v(" smart")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v('"smart"')]),t._v(" option enforces the use of "),s("code",[t._v("===")]),t._v(" and "),s("code",[t._v("!==")]),t._v(" except for these cases:")]),t._v(" "),s("ul",[s("li",[t._v("Comparing two literal values")]),t._v(" "),s("li",[t._v("Evaluating the value of "),s("code",[t._v("typeof")])]),t._v(" "),s("li",[t._v("Comparing against "),s("code",[t._v("null")])])]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for the "),s("code",[t._v('"smart"')]),t._v(" option:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "smart"]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// comparing two variables requires ===")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// only one side is a literal")]),t._v("\nfoo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nbananas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// comparing to undefined requires ===")]),t._v("\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for the "),s("code",[t._v('"smart"')]),t._v(" option:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint eqeqeq: ["error", "smart"]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nfoo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("h3",{attrs:{id:"allow-null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-null"}},[t._v("#")]),t._v(" allow-null")]),t._v(" "),s("p",[s("strong",[t._v("Deprecated:")]),t._v(" Instead of using this option use "),s("code",[t._v('"always"')]),t._v(" and pass a "),s("code",[t._v('"null"')]),t._v(" option property with value "),s("code",[t._v('"ignore"')]),t._v(". This will tell ESLint to always enforce strict equality except when comparing with the "),s("code",[t._v("null")]),t._v(" literal.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"null"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ignore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),s("p",[t._v("If you don't want to enforce a style for using equality operators, then it's safe to disable this rule.")])])}),[],!1,null,null,null);s.default=r.exports}}]);