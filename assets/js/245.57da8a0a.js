(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{433:function(a,s,t){"use strict";t.r(s);var e=t(9),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"node-prefer-global-url-search-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-url-search-params"}},[a._v("#")]),a._v(" node/prefer-global/url-search-params")]),a._v(" "),s("blockquote",[s("p",[a._v("enforce either "),s("code",[a._v("URLSearchParams")]),a._v(" or "),s("code",[a._v('require("url").URLSearchParams')])])]),a._v(" "),s("p",[a._v("The "),s("code",[a._v("URLSearchParams")]),a._v(" class of "),s("code",[a._v("url")]),a._v(" module is defined as a global variable.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("URLSearchParams "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("URLSearchParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//→ true")]),a._v("\n")])])]),s("p",[a._v("It will be readable if we use either "),s("code",[a._v("URLSearchParams")]),a._v(" consistently.")]),a._v(" "),s("h2",{attrs:{id:"📖-rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[a._v("#")]),a._v(" 📖 Rule Details")]),a._v(" "),s("p",[a._v("This rule enforces which "),s("code",[a._v("URLSearchParams")]),a._v(" we should use.")]),a._v(" "),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[a._v("#")]),a._v(" Options")]),a._v(" "),s("p",[a._v("This rule has a string option.")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"node/prefer-global/url-search-params"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"always"')]),a._v(" | "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"never"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v('"always"')]),a._v(" (default) ... enforces to use the global variable "),s("code",[a._v("URLSearchParams")]),a._v(" rather than "),s("code",[a._v('require("url").URLSearchParams')]),a._v(".")]),a._v(" "),s("li",[s("code",[a._v('"never"')]),a._v(" ... enforces to use "),s("code",[a._v('require("url").URLSearchParams')]),a._v(" rather than the global variable "),s("code",[a._v("URLSearchParams")]),a._v(".")])]),a._v(" "),s("h4",{attrs:{id:"always"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[a._v("#")]),a._v(" always")]),a._v(" "),s("p",[a._v("Examples of 👎 "),s("strong",[a._v("incorrect")]),a._v(" code for this rule:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error]*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" URLSearchParams "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Examples of 👍 "),s("strong",[a._v("correct")]),a._v(" code for this rule:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error]*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h4",{attrs:{id:"never"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[a._v("#")]),a._v(" never")]),a._v(" "),s("p",[a._v("Examples of 👎 "),s("strong",[a._v("incorrect")]),a._v(" code for the "),s("code",[a._v('"never"')]),a._v(" option:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error, never]*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Examples of 👍 "),s("strong",[a._v("correct")]),a._v(" code for the "),s("code",[a._v('"never"')]),a._v(" option:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error, never]*/")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" URLSearchParams "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"🔎-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[a._v("#")]),a._v(" 🔎 Implementation")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"../../../lib/rules/prefer-global/url-search-params.js"}},[a._v("Rule source")])]),a._v(" "),s("li",[s("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/url-search-params.js"}},[a._v("Test source")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);