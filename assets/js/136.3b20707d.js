(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{327:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"disallow-undeclared-variables-no-undef"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disallow-undeclared-variables-no-undef"}},[t._v("#")]),t._v(" Disallow Undeclared Variables (no-undef)")]),t._v(" "),e("p",[t._v("This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for example, from forgetting the "),e("code",[t._v("var")]),t._v(" keyword in a "),e("code",[t._v("for")]),t._v(" loop initializer).")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a "),e("code",[t._v("/*global ...*/")]),t._v(" comment, or specified in the "),e("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring#specifying-globals",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("globals")]),t._v(" key in the configuration file"),e("OutboundLink")],1),t._v(". A common use case for these is if you intentionally use globals that are defined elsewhere (e.g. in a script sourced from HTML).")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("someFunction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with "),e("code",[t._v("global")]),t._v(" declaration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*global someFunction, a*/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("someFunction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Note that this rule does not disallow assignments to read-only global variables.\nSee "),e("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-global-assign.html"}},[t._v("no-global-assign")]),t._v(" if you also want to disallow those assignments.")],1),t._v(" "),e("p",[t._v("This rule also does not disallow redeclarations of global variables.\nSee "),e("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-redeclare.html"}},[t._v("no-redeclare")]),t._v(" if you also want to disallow those redeclarations.")],1),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("typeof")]),t._v(" set to true will warn for variables used inside typeof check (Default false).")])]),t._v(" "),e("h3",{attrs:{id:"typeof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[t._v("#")]),t._v(" typeof")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the default "),e("code",[t._v('{ "typeof": false }')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" UndefinedIdentifier "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("You can use this option if you want to prevent "),e("code",[t._v("typeof")]),t._v(" check on a variable which has not been declared.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('{ "typeof": true }')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: ["error", { "typeof": true }] */')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('{ "typeof": true }')]),t._v(" option with "),e("code",[t._v("global")]),t._v(" declaration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*global a*/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: ["error", { "typeof": true }] */')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"environments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[t._v("#")]),t._v(" Environments")]),t._v(" "),e("p",[t._v("For convenience, ESLint provides shortcuts that pre-define global variables exposed by popular libraries and runtime environments. This rule supports these environments, as listed in "),e("RouterLink",{attrs:{to:"/rules/user-guide/configuring/language-options.html#specifying-environments"}},[t._v("Specifying Environments")]),t._v(".  A few examples are given below.")],1),t._v(" "),e("h3",{attrs:{id:"browser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser"}},[t._v("#")]),t._v(" browser")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with "),e("code",[t._v("browser")]),t._v(" environment:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env browser*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with "),e("code",[t._v("node")]),t._v(" environment:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env node*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If explicit declaration of global variables is not to your taste.")]),t._v(" "),e("h2",{attrs:{id:"related-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[t._v("#")]),t._v(" Related Rules")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-global-assign.html"}},[t._v("no-global-assign")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-redeclare.html"}},[t._v("no-redeclare")])],1)]),t._v(" "),e("h2",{attrs:{id:"compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),e("p",[t._v("This rule provides compatibility with treatment of global variables in "),e("a",{attrs:{href:"http://jshint.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSHint"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"http://www.jslint.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSLint"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);