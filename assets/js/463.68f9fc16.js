(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{649:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-valid-v-else-if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-valid-v-else-if"}},[t._v("#")]),t._v(" vue/valid-v-else-if")]),t._v(" "),s("blockquote",[s("p",[t._v("enforce valid "),s("code",[t._v("v-else-if")]),t._v(" directives")])]),t._v(" "),s("ul",[s("li",[t._v("⚙️ This rule is included in all of "),s("code",[t._v('"plugin:vue/vue3-essential"')]),t._v(", "),s("code",[t._v('"plugin:vue/essential"')]),t._v(", "),s("code",[t._v('"plugin:vue/vue3-strongly-recommended"')]),t._v(", "),s("code",[t._v('"plugin:vue/strongly-recommended"')]),t._v(", "),s("code",[t._v('"plugin:vue/vue3-recommended"')]),t._v(" and "),s("code",[t._v('"plugin:vue/recommended"')]),t._v(".")])]),t._v(" "),s("p",[t._v("This rule checks whether every "),s("code",[t._v("v-else-if")]),t._v(" directive is valid.")]),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),s("p",[t._v("This rule reports "),s("code",[t._v("v-else-if")]),t._v(" directives in the following cases:")]),t._v(" "),s("ul",[s("li",[t._v("The directive has that argument. E.g. "),s("code",[t._v('<div v-if="foo"></div><div v-else-if:aaa="bar"></div>')])]),t._v(" "),s("li",[t._v("The directive has that modifier. E.g. "),s("code",[t._v('<div v-if="foo"></div><div v-else-if.bbb="bar"></div>')])]),t._v(" "),s("li",[t._v("The directive does not have that attribute value. E.g. "),s("code",[t._v('<div v-if="foo"></div><div v-else-if></div>')])]),t._v(" "),s("li",[t._v("The directive is on the elements that the previous element don't have "),s("code",[t._v("v-if")]),t._v("/"),s("code",[t._v("v-else-if")]),t._v(" directives. E.g. "),s("code",[t._v('<div v-else-if="bar"></div>')])]),t._v(" "),s("li",[t._v("The directive is on the elements which have "),s("code",[t._v("v-if")]),t._v("/"),s("code",[t._v("v-else")]),t._v(" directives. E.g. "),s("code",[t._v('<div v-if="foo" v-else-if="bar"></div>')])])]),t._v(" "),s("eslint-code-block",{attrs:{rules:{"vue/valid-v-else-if":["error"]}}},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✓ GOOD --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-else-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ✗ BAD --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-else-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-else-if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-else-if:")]),t._v("aaa")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-else-if.bbb")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This rule does not check syntax errors in directives because it's checked by "),s("RouterLink",{attrs:{to:"/rules/vue/no-parsing-error.html"}},[t._v("vue/no-parsing-error")]),t._v(" rule.")],1)]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),s("p",[t._v("Nothing.")]),t._v(" "),s("h2",{attrs:{id:"related-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[t._v("#")]),t._v(" 👫 Related Rules")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/rules/vue/valid-v-if.html"}},[t._v("vue/valid-v-if")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/rules/vue/valid-v-else.html"}},[t._v("vue/valid-v-else")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/rules/vue/no-parsing-error.html"}},[t._v("vue/no-parsing-error")])],1)]),t._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" 🚀 Version")]),t._v(" "),s("p",[t._v("This rule was introduced in eslint-plugin-vue v3.11.0")]),t._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/valid-v-else-if.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/valid-v-else-if.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);