(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{325:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for example, from forgetting the "),a("code",[t._v("var")]),t._v(" keyword in a "),a("code",[t._v("for")]),t._v(" loop initializer).")]),t._v(" "),a("h2",{attrs:{id:"rule-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),a("p",[t._v("Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a "),a("code",[t._v("/*global ...*/")]),t._v(" comment, or specified in the "),a("a",{attrs:{href:"../user-guide/configuring/language-options#using-configuration-files-1"}},[a("code",[t._v("globals")]),t._v(" key in the configuration file")]),t._v(". A common use case for these is if you intentionally use globals that are defined elsewhere (e.g. in a script sourced from HTML).")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),a("p",[t._v("::: incorrect")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with "),a("code",[t._v("global")]),t._v(" declaration:")]),t._v(" "),a("p",[t._v("::: correct")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*global someFunction, a*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("Note that this rule does not disallow assignments to read-only global variables.\nSee "),a("a",{attrs:{href:"no-global-assign"}},[t._v("no-global-assign")]),t._v(" if you also want to disallow those assignments.")]),t._v(" "),a("p",[t._v("This rule also does not disallow redeclarations of global variables.\nSee "),a("a",{attrs:{href:"no-redeclare"}},[t._v("no-redeclare")]),t._v(" if you also want to disallow those redeclarations.")]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("typeof")]),t._v(" set to true will warn for variables used inside typeof check (Default false).")])]),t._v(" "),a("h3",{attrs:{id:"typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[t._v("#")]),t._v(" typeof")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for the default "),a("code",[t._v('{ "typeof": false }')]),t._v(" option:")]),t._v(" "),a("p",[t._v("::: correct")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" UndefinedIdentifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("You can use this option if you want to prevent "),a("code",[t._v("typeof")]),t._v(" check on a variable which has not been declared.")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("incorrect")]),t._v(" code for the "),a("code",[t._v('{ "typeof": true }')]),t._v(" option:")]),t._v(" "),a("p",[t._v("::: incorrect")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: ["error", { "typeof": true }] */')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for the "),a("code",[t._v('{ "typeof": true }')]),t._v(" option with "),a("code",[t._v("global")]),t._v(" declaration:")]),t._v(" "),a("p",[t._v("::: correct")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*global a*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: ["error", { "typeof": true }] */')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[t._v("#")]),t._v(" Environments")]),t._v(" "),a("p",[t._v("For convenience, ESLint provides shortcuts that pre-define global variables exposed by popular libraries and runtime environments. This rule supports these environments, as listed in "),a("a",{attrs:{href:"../user-guide/configuring/language-options#specifying-environments"}},[t._v("Specifying Environments")]),t._v(".  A few examples are given below.")]),t._v(" "),a("h3",{attrs:{id:"browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser"}},[t._v("#")]),t._v(" browser")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with "),a("code",[t._v("browser")]),t._v(" environment:")]),t._v(" "),a("p",[t._v("::: correct")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env browser*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("h3",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with "),a("code",[t._v("node")]),t._v(" environment:")]),t._v(" "),a("p",[t._v("::: correct")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-undef: "error"*/')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env node*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"when-not-to-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),a("p",[t._v("If explicit declaration of global variables is not to your taste.")]),t._v(" "),a("h2",{attrs:{id:"compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),a("p",[t._v("This rule provides compatibility with treatment of global variables in "),a("a",{attrs:{href:"http://jshint.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSHint"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"http://www.jslint.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSLint"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);