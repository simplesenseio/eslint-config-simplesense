(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{434:function(a,s,t){"use strict";t.r(s);var e=t(9),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"node-prefer-global-url-search-params"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-prefer-global-url-search-params"}},[a._v("#")]),a._v(" node/prefer-global/url-search-params")]),a._v(" "),t("blockquote",[t("p",[a._v("enforce either "),t("code",[a._v("URLSearchParams")]),a._v(" or "),t("code",[a._v('require("url").URLSearchParams')])])]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("URLSearchParams")]),a._v(" class of "),t("code",[a._v("url")]),a._v(" module is defined as a global variable.")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("URLSearchParams "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("URLSearchParams"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//→ true")]),a._v("\n")])])]),t("p",[a._v("It will be readable if we use either "),t("code",[a._v("URLSearchParams")]),a._v(" consistently.")]),a._v(" "),t("h2",{attrs:{id:"📖-rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[a._v("#")]),a._v(" 📖 Rule Details")]),a._v(" "),t("p",[a._v("This rule enforces which "),t("code",[a._v("URLSearchParams")]),a._v(" we should use.")]),a._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[a._v("#")]),a._v(" Options")]),a._v(" "),t("p",[a._v("This rule has a string option.")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"node/prefer-global/url-search-params"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"always"')]),a._v(" | "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"never"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v('"always"')]),a._v(" (default) ... enforces to use the global variable "),t("code",[a._v("URLSearchParams")]),a._v(" rather than "),t("code",[a._v('require("url").URLSearchParams')]),a._v(".")]),a._v(" "),t("li",[t("code",[a._v('"never"')]),a._v(" ... enforces to use "),t("code",[a._v('require("url").URLSearchParams')]),a._v(" rather than the global variable "),t("code",[a._v("URLSearchParams")]),a._v(".")])]),a._v(" "),t("h4",{attrs:{id:"always"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[a._v("#")]),a._v(" always")]),a._v(" "),t("p",[a._v("Examples of 👎 "),t("strong",[a._v("incorrect")]),a._v(" code for this rule:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error]*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" URLSearchParams "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("Examples of 👍 "),t("strong",[a._v("correct")]),a._v(" code for this rule:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error]*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h4",{attrs:{id:"never"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[a._v("#")]),a._v(" never")]),a._v(" "),t("p",[a._v("Examples of 👎 "),t("strong",[a._v("incorrect")]),a._v(" code for the "),t("code",[a._v('"never"')]),a._v(" option:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error, never]*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("Examples of 👍 "),t("strong",[a._v("correct")]),a._v(" code for the "),t("code",[a._v('"never"')]),a._v(" option:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*eslint node/prefer-global/url-search-params: [error, never]*/")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" URLSearchParams "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" u "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLSearchParams")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h2",{attrs:{id:"🔎-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[a._v("#")]),a._v(" 🔎 Implementation")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../../../lib/rules/prefer-global/url-search-params.js"}},[a._v("Rule source")])]),a._v(" "),t("li",[t("a",{attrs:{href:"../../../tests/lib/rules/prefer-global/url-search-params.js"}},[a._v("Test source")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);