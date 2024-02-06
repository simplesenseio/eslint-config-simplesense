(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{452:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"node-prefer-global-text-decoder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-text-decoder"}},[e._v("#")]),e._v(" node/prefer-global/text-decoder")]),e._v(" "),t("blockquote",[t("p",[e._v("enforce either "),t("code",[e._v("TextDecoder")]),e._v(" or "),t("code",[e._v('require("util").TextDecoder')])])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("TextDecoder")]),e._v(" class of "),t("code",[e._v("util")]),e._v(" module is defined as a global variable.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("TextDecoder "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"util"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("TextDecoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//→ true")]),e._v("\n")])])]),t("p",[e._v("It will be readable if we use either "),t("code",[e._v("TextDecoder")]),e._v(" consistently.")]),e._v(" "),t("h2",{attrs:{id:"📖-rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("This rule enforces which "),t("code",[e._v("TextDecoder")]),e._v(" we should use.")]),e._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("This rule has a string option.")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node/prefer-global/text-decoder"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"always"')]),e._v(" | "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"never"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[t("code",[e._v('"always"')]),e._v(" (default) ... enforces to use the global variable "),t("code",[e._v("TextDecoder")]),e._v(" rather than "),t("code",[e._v('require("util").TextDecoder')]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v('"never"')]),e._v(" ... enforces to use "),t("code",[e._v('require("util").TextDecoder')]),e._v(" rather than the global variable "),t("code",[e._v("TextDecoder")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"always"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[e._v("#")]),e._v(" always")]),e._v(" "),t("p",[e._v("Examples of 👎 "),t("strong",[e._v("incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*eslint node/prefer-global/text-decoder: [error]*/")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" TextDecoder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"util"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextDecoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Examples of 👍 "),t("strong",[e._v("correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*eslint node/prefer-global/text-decoder: [error]*/")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextDecoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("h4",{attrs:{id:"never"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[e._v("#")]),e._v(" never")]),e._v(" "),t("p",[e._v("Examples of 👎 "),t("strong",[e._v("incorrect")]),e._v(" code for the "),t("code",[e._v('"never"')]),e._v(" option:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*eslint node/prefer-global/text-decoder: [error, never]*/")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextDecoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Examples of 👍 "),t("strong",[e._v("correct")]),e._v(" code for the "),t("code",[e._v('"never"')]),e._v(" option:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*eslint node/prefer-global/text-decoder: [error, never]*/")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" TextDecoder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"util"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextDecoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("h2",{attrs:{id:"🔎-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[e._v("#")]),e._v(" 🔎 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../../../lib/rules/prefer-global/text-decoder.js"}},[e._v("Rule source")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/text-decoder.js"}},[e._v("Test source")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);