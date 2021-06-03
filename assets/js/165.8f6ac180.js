(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{352:function(a,t,s){"use strict";s.r(t);var e=s(9),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"require-or-disallow-newlines-around-variable-declarations-one-var-declaration-per-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-or-disallow-newlines-around-variable-declarations-one-var-declaration-per-line"}},[a._v("#")]),a._v(" require or disallow newlines around variable declarations (one-var-declaration-per-line)")]),a._v(" "),s("p",[a._v("Some developers declare multiple var statements on the same line:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Others prefer to declare one var per line.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Keeping to one of these styles across a project's codebase can help with maintaining code consistency.")]),a._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[a._v("#")]),a._v(" Rule Details")]),a._v(" "),s("p",[a._v("This rule enforces a consistent newlines around variable declarations. This rule ignores variable declarations inside "),s("code",[a._v("for")]),a._v(" loop conditionals.")]),a._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[a._v("#")]),a._v(" Options")]),a._v(" "),s("p",[a._v("This rule has a single string option:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v('"initializations"')]),a._v(" (default) enforces a newline around variable initializations")]),a._v(" "),s("li",[s("code",[a._v('"always"')]),a._v(" enforces a newline around variable declarations")])]),a._v(" "),s("h3",{attrs:{id:"initializations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initializations"}},[a._v("#")]),a._v(" initializations")]),a._v(" "),s("p",[a._v("Examples of "),s("strong",[a._v("incorrect")]),a._v(" code for this rule with the default "),s("code",[a._v('"initializations"')]),a._v(" option:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "initializations"]*/')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Examples of "),s("strong",[a._v("correct")]),a._v(" code for this rule with the default "),s("code",[a._v('"initializations"')]),a._v(" option:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "initializations"]*/')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"always"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[a._v("#")]),a._v(" always")]),a._v(" "),s("p",[a._v("Examples of "),s("strong",[a._v("incorrect")]),a._v(" code for this rule with the "),s("code",[a._v('"always"')]),a._v(" option:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "always"]*/')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Examples of "),s("strong",[a._v("correct")]),a._v(" code for this rule with the "),s("code",[a._v('"always"')]),a._v(" option:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "always"]*/')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"related-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[a._v("#")]),a._v(" Related Rules")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/rules/eslint-recommended/one-var.html"}},[a._v("one-var")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);