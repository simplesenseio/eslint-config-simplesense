(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{311:function(e,s,t){"use strict";t.r(s);var a=t(9),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"disallow-multiple-spaces-in-regular-expression-literals-no-regex-spaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disallow-multiple-spaces-in-regular-expression-literals-no-regex-spaces"}},[e._v("#")]),e._v(" disallow multiple spaces in regular expression literals (no-regex-spaces)")]),e._v(" "),t("p",[e._v("Regular expressions can be very complex and difficult to understand, which is why it's important to keep them as simple as possible in order to avoid mistakes. One of the more error-prone things you can do with a regular expression is to use more than one space, such as:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo   bar")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("In this regular expression, it's very hard to tell how many spaces are intended to be matched. It's better to use only one space and then specify how many spaces are expected, such as:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo {3}bar")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Now it is very clear that three spaces are expected to be matched.")]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" Rule Details")]),e._v(" "),t("p",[e._v("This rule disallows multiple spaces in regular expression literals.")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-regex-spaces: "error"*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo   bar")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RegExp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo   bar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Examples of "),t("strong",[e._v("correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-regex-spaces: "error"*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo {3}bar")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RegExp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo {3}bar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"when-not-to-use-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[e._v("#")]),e._v(" When Not To Use It")]),e._v(" "),t("p",[e._v("If you want to allow multiple spaces in a regular expression, then you can safely turn this rule off.")]),e._v(" "),t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[e._v("#")]),e._v(" Related Rules")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-div-regex.html"}},[e._v("no-div-regex")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-control-regex.html"}},[e._v("no-control-regex")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);