(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{685:function(s,t,a){"use strict";a.r(t);var e=a(9),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"node-prefer-global-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-url"}},[s._v("#")]),s._v(" node/prefer-global/url")]),s._v(" "),a("blockquote",[a("p",[s._v("enforce either "),a("code",[s._v("URL")]),s._v(" or "),a("code",[s._v('require("url").URL')])])]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("URL")]),s._v(" class of "),a("code",[s._v("url")]),s._v(" module is defined as a global variable.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//→ true")]),s._v("\n")])])]),a("p",[s._v("It will be readable if we use either "),a("code",[s._v("URL")]),s._v(" consistently.")]),s._v(" "),a("h2",{attrs:{id:"📖-rule-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[s._v("#")]),s._v(" 📖 Rule Details")]),s._v(" "),a("p",[s._v("This rule enforces which "),a("code",[s._v("URL")]),s._v(" we should use.")]),s._v(" "),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),a("p",[s._v("This rule has a string option.")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node/prefer-global/url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"never"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v('"always"')]),s._v(" (default) ... enforces to use the global variable "),a("code",[s._v("URL")]),s._v(" rather than "),a("code",[s._v('require("url").URL')]),s._v(".")]),s._v(" "),a("li",[a("code",[s._v('"never"')]),s._v(" ... enforces to use "),a("code",[s._v('require("url").URL')]),s._v(" rather than the global variable "),a("code",[s._v("URL")]),s._v(".")])]),s._v(" "),a("h4",{attrs:{id:"always"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[s._v("#")]),s._v(" always")]),s._v(" "),a("p",[s._v("Examples of 👎 "),a("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/url: [error]*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Examples of 👍 "),a("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/url: [error]*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h4",{attrs:{id:"never"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[s._v("#")]),s._v(" never")]),s._v(" "),a("p",[s._v("Examples of 👎 "),a("strong",[s._v("incorrect")]),s._v(" code for the "),a("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/url: [error, never]*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Examples of 👍 "),a("strong",[s._v("correct")]),s._v(" code for the "),a("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*eslint node/prefer-global/url: [error, never]*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"🔎-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[s._v("#")]),s._v(" 🔎 Implementation")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"../../../lib/rules/prefer-global/url.js"}},[s._v("Rule source")])]),s._v(" "),a("li",[a("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/url.js"}},[s._v("Test source")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);