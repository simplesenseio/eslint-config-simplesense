(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{431:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"node-prefer-global-text-encoder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-text-encoder"}},[t._v("#")]),t._v(" node/prefer-global/text-encoder")]),t._v(" "),s("blockquote",[s("p",[t._v("enforce either "),s("code",[t._v("TextEncoder")]),t._v(" or "),s("code",[t._v('require("util").TextEncoder')])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("TextEncoder")]),t._v(" class of "),s("code",[t._v("util")]),t._v(" module is defined as a global variable.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextEncoder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextEncoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//→ true")]),t._v("\n")])])]),s("p",[t._v("It will be readable if we use either "),s("code",[t._v("TextEncoder")]),t._v(" consistently.")]),t._v(" "),s("h2",{attrs:{id:"📖-rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),s("p",[t._v("This rule enforces which "),s("code",[t._v("TextEncoder")]),t._v(" we should use.")]),t._v(" "),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("This rule has a string option.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node/prefer-global/text-encoder"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"never"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v('"always"')]),t._v(" (default) ... enforces to use the global variable "),s("code",[t._v("TextEncoder")]),t._v(" rather than "),s("code",[t._v('require("util").TextEncoder')]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v('"never"')]),t._v(" ... enforces to use "),s("code",[t._v('require("util").TextEncoder')]),t._v(" rather than the global variable "),s("code",[t._v("TextEncoder")]),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"always"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[t._v("#")]),t._v(" always")]),t._v(" "),s("p",[t._v("Examples of 👎 "),s("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error]*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TextEncoder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Examples of 👍 "),s("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error]*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"never"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[t._v("#")]),t._v(" never")]),t._v(" "),s("p",[t._v("Examples of 👎 "),s("strong",[t._v("incorrect")]),t._v(" code for the "),s("code",[t._v('"never"')]),t._v(" option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error, never]*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Examples of 👍 "),s("strong",[t._v("correct")]),t._v(" code for the "),s("code",[t._v('"never"')]),t._v(" option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint node/prefer-global/text-encoder: [error, never]*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TextEncoder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"🔎-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[t._v("#")]),t._v(" 🔎 Implementation")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"../../../lib/rules/prefer-global/text-encoder.js"}},[t._v("Rule source")])]),t._v(" "),s("li",[s("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/text-encoder.js"}},[t._v("Test source")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);