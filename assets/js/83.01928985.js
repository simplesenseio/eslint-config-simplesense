(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{274:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Disallows reassigning exceptions in "),e("code",[t._v("catch")]),t._v(" clauses.")]),t._v(" "),e("p",[t._v("If a "),e("code",[t._v("catch")]),t._v(" clause in a "),e("code",[t._v("try")]),t._v(" statement accidentally (or purposely) assigns another value to the exception parameter, it is impossible to refer to the error from that point on.\nSince there is no "),e("code",[t._v("arguments")]),t._v(" object to offer alternative access to this data, assignment of the parameter is absolutely destructive.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule disallows reassigning exceptions in "),e("code",[t._v("catch")]),t._v(" clauses.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-ex-assign: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-ex-assign: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://bocoup.com/blog/the-catch-with-try-catch",target:"_blank",rel:"noopener noreferrer"}},[t._v('The "catch" with try...catch'),e("OutboundLink")],1),t._v(" by Ben Alman explains how the exception identifier can leak into the outer scope in IE 6-8")])])])}),[],!1,null,null,null);s.default=n.exports}}]);