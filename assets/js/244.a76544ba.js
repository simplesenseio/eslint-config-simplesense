(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{433:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"node-prefer-global-text-encoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-text-encoder"}},[t._v("#")]),t._v(" node/prefer-global/text-encoder")]),t._v(" "),e("blockquote",[e("p",[t._v("enforce either "),e("code",[t._v("TextEncoder")]),t._v(" or "),e("code",[t._v('require("util").TextEncoder')])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("TextEncoder")]),t._v(" class of "),e("code",[t._v("util")]),t._v(" module is defined as a global variable.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextEncoder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextEncoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//→ true")]),t._v("\n")])])]),e("p",[t._v("It will be readable if we use either "),e("code",[t._v("TextEncoder")]),t._v(" consistently.")]),t._v(" "),e("h2",{attrs:{id:"📖-rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),e("p",[t._v("This rule enforces which "),e("code",[t._v("TextEncoder")]),t._v(" we should use.")]),t._v(" "),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("This rule has a string option.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node/prefer-global/text-encoder"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"never"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v('"always"')]),t._v(" (default) ... enforces to use the global variable "),e("code",[t._v("TextEncoder")]),t._v(" rather than "),e("code",[t._v('require("util").TextEncoder')]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v('"never"')]),t._v(" ... enforces to use "),e("code",[t._v('require("util").TextEncoder')]),t._v(" rather than the global variable "),e("code",[t._v("TextEncoder")]),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"always"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[t._v("#")]),t._v(" always")]),t._v(" "),e("p",[t._v("Examples of 👎 "),e("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error]*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TextEncoder "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Examples of 👍 "),e("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error]*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[t._v("#")]),t._v(" never")]),t._v(" "),e("p",[t._v("Examples of 👎 "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('"never"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error, never]*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Examples of 👍 "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('"never"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error, never]*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TextEncoder "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"🔎-implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[t._v("#")]),t._v(" 🔎 Implementation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"../../../lib/rules/prefer-global/text-encoder.js"}},[t._v("Rule source")])]),t._v(" "),e("li",[e("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/text-encoder.js"}},[t._v("Test source")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);