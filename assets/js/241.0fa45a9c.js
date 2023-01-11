(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{430:function(s,t,e){"use strict";e.r(t);var a=e(9),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-prefer-global-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-process"}},[s._v("#")]),s._v(" node/prefer-global/process")]),s._v(" "),t("blockquote",[t("p",[s._v("enforce either "),t("code",[s._v("process")]),s._v(" or "),t("code",[s._v('require("process")')])])]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("process")]),s._v(" module is defined as a global variable.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"process"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//→ true")]),s._v("\n")])])]),t("p",[s._v("It will be readable if we use either "),t("code",[s._v("process")]),s._v(" consistently.")]),s._v(" "),t("h2",{attrs:{id:"📖-rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[s._v("#")]),s._v(" 📖 Rule Details")]),s._v(" "),t("p",[s._v("This rule enforces which "),t("code",[s._v("process")]),s._v(" we should use.")]),s._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),t("p",[s._v("This rule has a string option.")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node/prefer-global/process"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),s._v(" | "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"never"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[t("code",[s._v('"always"')]),s._v(" (default) ... enforces to use the global variable "),t("code",[s._v("process")]),s._v(" rather than "),t("code",[s._v('require("process")')]),s._v(".")]),s._v(" "),t("li",[t("code",[s._v('"never"')]),s._v(" ... enforces to use "),t("code",[s._v('require("process")')]),s._v(" rather than the global variable "),t("code",[s._v("process")]),s._v(".")])]),s._v(" "),t("h4",{attrs:{id:"always"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[s._v("#")]),s._v(" always")]),s._v(" "),t("p",[s._v("Examples of 👎 "),t("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/process: [error]*/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" process "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"process"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Examples of 👍 "),t("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/process: [error]*/")]),s._v("\n\nprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h4",{attrs:{id:"never"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[s._v("#")]),s._v(" never")]),s._v(" "),t("p",[s._v("Examples of 👎 "),t("strong",[s._v("incorrect")]),s._v(" code for the "),t("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/process: [error, never]*/")]),s._v("\n\nprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Examples of 👍 "),t("strong",[s._v("correct")]),s._v(" code for the "),t("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/process: [error, never]*/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" process "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"process"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"🔎-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[s._v("#")]),s._v(" 🔎 Implementation")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../../../lib/rules/prefer-global/process.js"}},[s._v("Rule source")])]),s._v(" "),t("li",[t("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/process.js"}},[s._v("Test source")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);