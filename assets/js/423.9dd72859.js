(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{612:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue-no-v-html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-no-v-html"}},[t._v("#")]),t._v(" vue/no-v-html")]),t._v(" "),e("blockquote",[e("p",[t._v("disallow use of v-html to prevent XSS attack")])]),t._v(" "),e("ul",[e("li",[t._v("⚙️ This rule is included in "),e("code",[t._v('"plugin:vue/vue3-recommended"')]),t._v(" and "),e("code",[t._v('"plugin:vue/recommended"')]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),e("p",[t._v("This rule reports all uses of "),e("code",[t._v("v-html")]),t._v(" directive in order to reduce the risk of injecting potentially unsafe / unescaped html into the browser leading to Cross-Site Scripting (XSS) attacks.")]),t._v(" "),e("eslint-code-block",{attrs:{rules:{"vue/no-v-html":["error"]}}},[e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✓ GOOD --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ someHTML }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✗ BAD --\x3e")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("someHTML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),e("p",[t._v("Nothing.")]),t._v(" "),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" 🔇 When Not To Use It")]),t._v(" "),e("p",[t._v("If you are certain the content passed to "),e("code",[t._v("v-html")]),t._v(" is sanitized HTML you can disable this rule.")]),t._v(" "),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" 📚 Further Reading")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.sqreen.io/xss-in-vue-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XSS in Vue.js"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" 🚀 Version")]),t._v(" "),e("p",[t._v("This rule was introduced in eslint-plugin-vue v4.7.0")]),t._v(" "),e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-v-html.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-v-html.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);