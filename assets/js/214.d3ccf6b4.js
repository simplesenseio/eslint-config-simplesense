(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{406:function(t,s,e){"use strict";e.r(s);var r=e(9),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("For a vast majority of use cases, the result of the "),s("code",[t._v("typeof")]),t._v(" operator is one of the following string literals: "),s("code",[t._v('"undefined"')]),t._v(", "),s("code",[t._v('"object"')]),t._v(", "),s("code",[t._v('"boolean"')]),t._v(", "),s("code",[t._v('"number"')]),t._v(", "),s("code",[t._v('"string"')]),t._v(", "),s("code",[t._v('"function"')]),t._v(", "),s("code",[t._v('"symbol"')]),t._v(", and "),s("code",[t._v('"bigint"')]),t._v(". It is usually a typing mistake to compare the result of a "),s("code",[t._v("typeof")]),t._v(" operator to other string literals.")]),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("p",[t._v("This rule enforces comparing "),s("code",[t._v("typeof")]),t._v(" expressions to valid string literals.")]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("This rule has an object option:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"requireStringLiterals": true')]),t._v(" requires "),s("code",[t._v("typeof")]),t._v(" expressions to only be compared to string literals or other "),s("code",[t._v("typeof")]),t._v(" expressions, and disallows comparisons to any other value.")])]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: "error"*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strnig"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefimed"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nunber"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fucntion"')]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: "error"*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" baz\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" qux\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code with the "),s("code",[t._v('{ "requireStringLiterals": true }')]),t._v(" option:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: ["error", { "requireStringLiterals": true }]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Object\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strnig"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" qux "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some invalid type"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" anotherVariable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code with the "),s("code",[t._v('{ "requireStringLiterals": true }')]),t._v(" option:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: ["error", { "requireStringLiterals": true }]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" qux\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),s("p",[t._v("You may want to turn this rule off if you will be using the "),s("code",[t._v("typeof")]),t._v(" operator on host objects.")])])}),[],!1,null,null,null);s.default=a.exports}}]);