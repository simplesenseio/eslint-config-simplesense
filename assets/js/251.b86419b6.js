(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{444:function(s,t,a){"use strict";a.r(t);var e=a(9),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-no-new-require"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-no-new-require"}},[s._v("#")]),s._v(" node/no-new-require")]),s._v(" "),t("blockquote",[t("p",[s._v("disallow "),t("code",[s._v("new")]),s._v(" operators with calls to "),t("code",[s._v("require")])])]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("require")]),s._v(" function is used to include modules that exist in separate files, such as:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appHeader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app-header'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Some modules return a constructor which can potentially lead to code such as:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appHeader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app-header'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Unfortunately, this introduces a high potential for confusion since the code author likely meant to write:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appHeader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app-header'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("For this reason, it is usually best to disallow this particular expression.")]),s._v(" "),t("h2",{attrs:{id:"📖-rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[s._v("#")]),s._v(" 📖 Rule Details")]),s._v(" "),t("p",[s._v("This rule aims to eliminate use of the "),t("code",[s._v("new require")]),s._v(" expression.")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint node/no-new-require: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appHeader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app-header'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint node/no-new-require: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" AppHeader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app-header'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" appHeader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppHeader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"🔎-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[s._v("#")]),s._v(" 🔎 Implementation")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../../lib/rules/no-new-require.js"}},[s._v("Rule source")])]),s._v(" "),t("li",[t("a",{attrs:{href:"../../tests/lib/rules/no-new-require.js"}},[s._v("Test source")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);