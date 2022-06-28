(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{386:function(t,s,e){"use strict";e.r(s);var r=e(9),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Enforces comparing "),e("code",[t._v("typeof")]),t._v(" expressions against valid strings.")]),t._v(" "),e("p",[t._v("For a vast majority of use cases, the result of the "),e("code",[t._v("typeof")]),t._v(" operator is one of the following string literals: "),e("code",[t._v('"undefined"')]),t._v(", "),e("code",[t._v('"object"')]),t._v(", "),e("code",[t._v('"boolean"')]),t._v(", "),e("code",[t._v('"number"')]),t._v(", "),e("code",[t._v('"string"')]),t._v(", "),e("code",[t._v('"function"')]),t._v(", "),e("code",[t._v('"symbol"')]),t._v(", and "),e("code",[t._v('"bigint"')]),t._v(". It is usually a typing mistake to compare the result of a "),e("code",[t._v("typeof")]),t._v(" operator to other string literals.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule enforces comparing "),e("code",[t._v("typeof")]),t._v(" expressions to valid string literals.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("This rule has an object option:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"requireStringLiterals": true')]),t._v(" requires "),e("code",[t._v("typeof")]),t._v(" expressions to only be compared to string literals or other "),e("code",[t._v("typeof")]),t._v(" expressions, and disallows comparisons to any other value.")])]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strnig"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefimed"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nunber"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fucntion"')]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" baz\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" qux\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code with the "),e("code",[t._v('{ "requireStringLiterals": true }')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: ["error", { "requireStringLiterals": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Object\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" baz "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strnig"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" qux "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some invalid type"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" baz "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" anotherVariable\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code with the "),e("code",[t._v('{ "requireStringLiterals": true }')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint valid-typeof: ["error", { "requireStringLiterals": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" baz "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" qux\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("You may want to turn this rule off if you will be using the "),e("code",[t._v("typeof")]),t._v(" operator on host objects.")])])}),[],!1,null,null,null);s.default=a.exports}}]);