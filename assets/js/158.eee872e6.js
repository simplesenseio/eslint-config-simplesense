(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{351:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Just as developers might type "),e("code",[t._v("-a + b")]),t._v(" when they mean "),e("code",[t._v("-(a + b)")]),t._v(" for the negative of a sum, they might type "),e("code",[t._v("!key in object")]),t._v(" by mistake when they almost certainly mean "),e("code",[t._v("!(key in object)")]),t._v(" to test that a key is not in an object. "),e("code",[t._v("!obj instanceof Ctor")]),t._v(" is similar.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule disallows negating the left operand of the following relational operators:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("in")]),t._v(" operator"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("instanceof")]),t._v(" operator"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-negation: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("key "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// operator precedence makes it equivalent to (!key) in object")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// and type conversion makes it equivalent to (key ? "false" : "true") in object')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("obj "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ctor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// operator precedence makes it equivalent to (!obj) instanceof Ctor")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and it equivalent to always false since boolean values are not objects.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-negation: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// key is not in object")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ctor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj is not an instance of Ctor")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"exception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exception"}},[t._v("#")]),t._v(" Exception")]),t._v(" "),e("p",[t._v("For rare situations when negating the left operand is intended, this rule allows an exception.\nIf the whole negation is explicitly wrapped in parentheses, the rule will not report a problem.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-negation: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// allowed, because the negation is explicitly wrapped in parentheses")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// it is equivalent to (foo ? "false" : "true") in object')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is allowed as an exception for rare situations when that is the intended meaning")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can also make the intention more explicit, with type conversion")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-negation: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is not an allowed exception")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("This rule has an object option:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"enforceForOrderingRelations": false')]),t._v(" (default) allows negation of the left-hand side of ordering relational operators ("),e("code",[t._v("<")]),t._v(", "),e("code",[t._v(">")]),t._v(", "),e("code",[t._v("<=")]),t._v(", "),e("code",[t._v(">=")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v('"enforceForOrderingRelations": true')]),t._v(" disallows negation of the left-hand side of ordering relational operators")])]),t._v(" "),e("h3",{attrs:{id:"enforcefororderingrelations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enforcefororderingrelations"}},[t._v("#")]),t._v(" enforceForOrderingRelations")]),t._v(" "),e("p",[t._v("With this option set to "),e("code",[t._v("true")]),t._v(" the rule is additionally enforced for:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("<")]),t._v(" operator.")]),t._v(" "),e("li",[e("code",[t._v(">")]),t._v(" operator.")]),t._v(" "),e("li",[e("code",[t._v("<=")]),t._v(" operator.")]),t._v(" "),e("li",[e("code",[t._v(">=")]),t._v(" operator.")])]),t._v(" "),e("p",[t._v("The purpose is to avoid expressions such as "),e("code",[t._v("! a < b")]),t._v(" (which is equivalent to "),e("code",[t._v("(a ? 0 : 1) < b")]),t._v(") when what is really intended is "),e("code",[t._v("!(a < b)")]),t._v(".")]),t._v(" "),e("p",[t._v("Examples of additional "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),e("code",[t._v('{ "enforceForOrderingRelations": true }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-negation: ["error", { "enforceForOrderingRelations": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you don't want to notify unsafe logical negations, then it's safe to disable this rule.")])])}),[],!1,null,null,null);e.default=n.exports}}]);