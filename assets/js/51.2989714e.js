(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{245:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This rule was "),e("strong",[t._v("deprecated")]),t._v(" in ESLint v8.53.0. Please use the corresponding rule in "),e("a",{attrs:{href:"https://eslint.style/packages/js",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("@stylistic/eslint-plugin-js")]),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("JavaScript allows you to place newlines before or after a dot in a member expression.")]),t._v(" "),e("p",[t._v("Consistency in placing a newline before or after the dot can greatly increase readability.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" universe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        galaxy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" universe\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("galaxy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule aims to enforce newline consistency in member expressions. This rule prevents the use of mixed newlines around the dot in a member expression.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("The rule takes one option, a string:")]),t._v(" "),e("ul",[e("li",[t._v("If it is "),e("code",[t._v('"object"')]),t._v(" (default), the dot in a member expression should be on the same line as the object portion.")]),t._v(" "),e("li",[t._v("If it is "),e("code",[t._v('"property"')]),t._v(", the dot in a member expression should be on the same line as the property portion.")])]),t._v(" "),e("h3",{attrs:{id:"object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" object")]),t._v(" "),e("p",[t._v("The default "),e("code",[t._v('"object"')]),t._v(" option requires the dot to be on the same line as the object.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the default "),e("code",[t._v('"object"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint dot-location: ["error", "object"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the default "),e("code",[t._v('"object"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint dot-location: ["error", "object"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nproperty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    object\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nproperty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" baz "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"property"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[t._v("#")]),t._v(" property")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v('"property"')]),t._v(" option requires the dot to be on the same line as the property.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('"property"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint dot-location: ["error", "property"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nproperty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('"property"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint dot-location: ["error", "property"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("You can turn this rule off if you are not concerned with the consistency of newlines before or after dots in member expressions.")])])}),[],!1,null,null,null);e.default=r.exports}}]);