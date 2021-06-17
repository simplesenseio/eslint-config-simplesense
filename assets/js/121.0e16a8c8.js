(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{309:function(e,a,t){"use strict";t.r(a);var s=t(9),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"disallow-variable-redeclaration-no-redeclare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disallow-variable-redeclaration-no-redeclare"}},[e._v("#")]),e._v(" disallow variable redeclaration (no-redeclare)")]),e._v(" "),t("p",[e._v("In JavaScript, it's possible to redeclare the same variable name using "),t("code",[e._v("var")]),e._v(". This can lead to confusion as to where the variable is actually declared and initialized.")]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" Rule Details")]),e._v(" "),t("p",[e._v("This rule is aimed at eliminating variables that have multiple declarations in the same scope.")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-redeclare: "error"*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Examples of "),t("strong",[e._v("correct")]),e._v(" code for this rule:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-redeclare: "error"*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("This rule takes one optional argument, an object with a boolean property "),t("code",[e._v('"builtinGlobals"')]),e._v(". It defaults to "),t("code",[e._v("true")]),e._v(".\nIf set to "),t("code",[e._v("true")]),e._v(", this rule also checks redeclaration of built-in globals, such as "),t("code",[e._v("Object")]),e._v(", "),t("code",[e._v("Array")]),e._v(", "),t("code",[e._v("Number")]),e._v("...")]),e._v(" "),t("h3",{attrs:{id:"builtinglobals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#builtinglobals"}},[e._v("#")]),e._v(" builtinGlobals")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v('"builtinGlobals"')]),e._v(" option will check for redeclaration of built-in globals in global scope.")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("incorrect")]),e._v(" code for the "),t("code",[e._v('{ "builtinGlobals": true }')]),e._v(" option:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" Object "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Examples of "),t("strong",[e._v("incorrect")]),e._v(" code for the "),t("code",[e._v('{ "builtinGlobals": true }')]),e._v(" option and the "),t("code",[e._v("browser")]),e._v(" environment:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint no-redeclare: ["error", { "builtinGlobals": true }]*/')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*eslint-env browser*/")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" top "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("The "),t("code",[e._v("browser")]),e._v(" environment has many built-in global variables (for example, "),t("code",[e._v("top")]),e._v("). Some of built-in global variables cannot be redeclared.")]),e._v(" "),t("p",[e._v("Note that when using the "),t("code",[e._v("node")]),e._v(" or "),t("code",[e._v("commonjs")]),e._v(" environments (or "),t("code",[e._v("ecmaFeatures.globalReturn")]),e._v(', if using the default parser), the top scope of a program is not actually the global scope, but rather a "module" scope. When this is the case, declaring a variable named after a builtin global is not a redeclaration, but rather a shadowing of the global variable. In that case, the '),t("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-shadow.html"}},[t("code",[e._v("no-shadow")])]),e._v(" rule with the "),t("code",[e._v('"builtinGlobals"')]),e._v(" option should be used.")],1),e._v(" "),t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[e._v("#")]),e._v(" Related Rules")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-shadow.html"}},[e._v("no-shadow")])],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);