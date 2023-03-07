(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{354:function(a,t,s){"use strict";s.r(t);var n=s(9),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Some developers declare multiple var statements on the same line:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" baz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Others prefer to declare one var per line.")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    baz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Keeping to one of these styles across a project's codebase can help with maintaining code consistency.")]),a._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[a._v("#")]),a._v(" Rule Details")]),a._v(" "),t("p",[a._v("This rule enforces a consistent newlines around variable declarations. This rule ignores variable declarations inside "),t("code",[a._v("for")]),a._v(" loop conditionals.")]),a._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[a._v("#")]),a._v(" Options")]),a._v(" "),t("p",[a._v("This rule has a single string option:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v('"initializations"')]),a._v(" (default) enforces a newline around variable initializations")]),a._v(" "),t("li",[t("code",[a._v('"always"')]),a._v(" enforces a newline around variable declarations")])]),a._v(" "),t("h3",{attrs:{id:"initializations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initializations"}},[a._v("#")]),a._v(" initializations")]),a._v(" "),t("p",[a._v("Examples of "),t("strong",[a._v("incorrect")]),a._v(" code for this rule with the default "),t("code",[a._v('"initializations"')]),a._v(" option:")]),a._v(" "),t("p",[a._v("::: incorrect")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "initializations"]*/')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v(":::")]),a._v(" "),t("p",[a._v("Examples of "),t("strong",[a._v("correct")]),a._v(" code for this rule with the default "),t("code",[a._v('"initializations"')]),a._v(" option:")]),a._v(" "),t("p",[a._v("::: correct")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "initializations"]*/')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v(":::")]),a._v(" "),t("h3",{attrs:{id:"always"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[a._v("#")]),a._v(" always")]),a._v(" "),t("p",[a._v("Examples of "),t("strong",[a._v("incorrect")]),a._v(" code for this rule with the "),t("code",[a._v('"always"')]),a._v(" option:")]),a._v(" "),t("p",[a._v("::: incorrect")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "always"]*/')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v(":::")]),a._v(" "),t("p",[a._v("Examples of "),t("strong",[a._v("correct")]),a._v(" code for this rule with the "),t("code",[a._v('"always"')]),a._v(" option:")]),a._v(" "),t("p",[a._v("::: correct")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/*eslint one-var-declaration-per-line: ["error", "always"]*/')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint-env es6*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v(":::")])])}),[],!1,null,null,null);t.default=e.exports}}]);