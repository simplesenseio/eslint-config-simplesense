(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{596:function(e,t,s){"use strict";s.r(t);var a=s(9),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vue-valid-v-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-valid-v-else"}},[e._v("#")]),e._v(" vue/valid-v-else")]),e._v(" "),s("blockquote",[s("p",[e._v("enforce valid "),s("code",[e._v("v-else")]),e._v(" directives")])]),e._v(" "),s("ul",[s("li",[e._v("⚙️ This rule is included in all of "),s("code",[e._v('"plugin:vue/vue3-essential"')]),e._v(", "),s("code",[e._v('"plugin:vue/essential"')]),e._v(", "),s("code",[e._v('"plugin:vue/vue3-strongly-recommended"')]),e._v(", "),s("code",[e._v('"plugin:vue/strongly-recommended"')]),e._v(", "),s("code",[e._v('"plugin:vue/vue3-recommended"')]),e._v(" and "),s("code",[e._v('"plugin:vue/recommended"')]),e._v(".")])]),e._v(" "),s("p",[e._v("This rule checks whether every "),s("code",[e._v("v-else")]),e._v(" directive is valid.")]),e._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),s("p",[e._v("This rule reports "),s("code",[e._v("v-else")]),e._v(" directives in the following cases:")]),e._v(" "),s("ul",[s("li",[e._v("The directive has that argument. E.g. "),s("code",[e._v('<div v-if="foo"></div><div v-else:aaa></div>')])]),e._v(" "),s("li",[e._v("The directive has that modifier. E.g. "),s("code",[e._v('<div v-if="foo"></div><div v-else.bbb></div>')])]),e._v(" "),s("li",[e._v("The directive has that attribute value. E.g. "),s("code",[e._v('<div v-if="foo"></div><div v-else="bar"></div>')])]),e._v(" "),s("li",[e._v("The directive is on the elements that the previous element don't have "),s("code",[e._v("v-if")]),e._v("/"),s("code",[e._v("v-else-if")]),e._v(" directives. E.g. "),s("code",[e._v("<div v-else></div>")])]),e._v(" "),s("li",[e._v("The directive is on the elements which have "),s("code",[e._v("v-if")]),e._v("/"),s("code",[e._v("v-else-if")]),e._v(" directives. E.g. "),s("code",[e._v('<div v-if="foo" v-else></div>')])])]),e._v(" "),s("eslint-code-block",{attrs:{rules:{"vue/valid-v-else":["error"]}}},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- ✓ GOOD --\x3e")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("v-else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- ✗ BAD --\x3e")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("v-else")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("v-else:")]),e._v("aaa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("v-else.bbb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),s("p",[e._v("Nothing.")]),e._v(" "),s("h2",{attrs:{id:"related-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[e._v("#")]),e._v(" 👫 Related Rules")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/rules/vue/valid-v-if.html"}},[e._v("vue/valid-v-if")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/rules/vue/valid-v-else-if.html"}},[e._v("vue/valid-v-else-if")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/rules/vue/no-parsing-error.html"}},[e._v("vue/no-parsing-error")])],1)]),e._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),s("p",[e._v("This rule was introduced in eslint-plugin-vue v3.11.0")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/valid-v-else.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/valid-v-else.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=v.exports}}]);