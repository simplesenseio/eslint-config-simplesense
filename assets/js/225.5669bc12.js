(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{412:function(s,t,e){"use strict";e.r(t);var a=e(9),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"node-prefer-global-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-console"}},[s._v("#")]),s._v(" node/prefer-global/console")]),s._v(" "),e("blockquote",[e("p",[s._v("enforce either "),e("code",[s._v("console")]),s._v(" or "),e("code",[s._v('require("console")')])])]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("console")]),s._v(" module is defined as a global variable.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("console "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//→ true")]),s._v("\n")])])]),e("p",[s._v("It will be readable if we use either "),e("code",[s._v("console")]),s._v(" consistently.")]),s._v(" "),e("h2",{attrs:{id:"📖-rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[s._v("#")]),s._v(" 📖 Rule Details")]),s._v(" "),e("p",[s._v("This rule enforces which "),e("code",[s._v("console")]),s._v(" we should use.")]),s._v(" "),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),e("p",[s._v("This rule has a string option.")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node/prefer-global/console"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),s._v(" | "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"never"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("ul",[e("li",[e("code",[s._v('"always"')]),s._v(" (default) ... enforces to use the global variable "),e("code",[s._v("console")]),s._v(" rather than "),e("code",[s._v('require("console")')]),s._v(".")]),s._v(" "),e("li",[e("code",[s._v('"never"')]),s._v(" ... enforces to use "),e("code",[s._v('require("console")')]),s._v(" rather than the global variable "),e("code",[s._v("console")]),s._v(".")])]),s._v(" "),e("h4",{attrs:{id:"always"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[s._v("#")]),s._v(" always")]),s._v(" "),e("p",[s._v("Examples of 👎 "),e("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/console: [error]*/")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" console "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[s._v("Examples of 👍 "),e("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/console: [error]*/")]),s._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("h4",{attrs:{id:"never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[s._v("#")]),s._v(" never")]),s._v(" "),e("p",[s._v("Examples of 👎 "),e("strong",[s._v("incorrect")]),s._v(" code for the "),e("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/console: [error, never]*/")]),s._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[s._v("Examples of 👍 "),e("strong",[s._v("correct")]),s._v(" code for the "),e("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/console: [error, never]*/")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" console "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("h2",{attrs:{id:"🔎-implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[s._v("#")]),s._v(" 🔎 Implementation")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"../../../lib/rules/prefer-global/console.js"}},[s._v("Rule source")])]),s._v(" "),e("li",[e("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/console.js"}},[s._v("Test source")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);