(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{312:function(e,s,t){"use strict";t.r(s);var a=t(9),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Regular expressions can be very complex and difficult to understand, which is why it's important to keep them as simple as possible in order to avoid mistakes. One of the more error-prone things you can do with a regular expression is to use more than one space, such as:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo   bar")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("In this regular expression, it's very hard to tell how many spaces are intended to be matched. It's better to use only one space and then specify how many spaces are expected, such as:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo {3}bar")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("Now it is very clear that three spaces are expected to be matched.")]),e._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" Rule Details")]),e._v(" "),s("p",[e._v("This rule disallows multiple spaces in regular expression literals.")]),e._v(" "),s("p",[e._v("Examples of "),s("strong",[e._v("incorrect")]),e._v(" code for this rule:")]),e._v(" "),s("p",[e._v("::: incorrect")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-regex-spaces: "error"*/')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo   bar")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo   bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v(":::")]),e._v(" "),s("p",[e._v("Examples of "),s("strong",[e._v("correct")]),e._v(" code for this rule:")]),e._v(" "),s("p",[e._v("::: correct")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-regex-spaces: "error"*/')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("foo {3}bar")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" re "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo {3}bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v(":::")]),e._v(" "),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[e._v("#")]),e._v(" When Not To Use It")]),e._v(" "),s("p",[e._v("If you want to allow multiple spaces in a regular expression, then you can safely turn this rule off.")])])}),[],!1,null,null,null);s.default=r.exports}}]);