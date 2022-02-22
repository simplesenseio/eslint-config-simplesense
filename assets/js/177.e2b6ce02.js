(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{366:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quotes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quotes"}},[t._v("#")]),t._v(" quotes")]),t._v(" "),e("p",[t._v("Enforces the consistent use of either backticks, double, or single quotes.")]),t._v(" "),e("p",[t._v("JavaScript allows you to define strings in one of three ways: double quotes, single quotes, and backticks (as of ECMAScript 6). For example:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env es6*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"double"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" single "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" backtick "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("backtick")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6 only")]),t._v("\n")])])]),e("p",[t._v("Each of these lines creates a string and, in some cases, can be used interchangeably. The choice of how to define strings in a codebase is a stylistic one outside of template literals (which allow embedded of expressions to be interpreted).")]),t._v(" "),e("p",[t._v("Many codebases require strings to be defined in a consistent manner.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule enforces the consistent use of either backticks, double, or single quotes.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("This rule has two options, a string option and an object option.")]),t._v(" "),e("p",[t._v("String option:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"double"')]),t._v(" (default) requires the use of double quotes wherever possible")]),t._v(" "),e("li",[e("code",[t._v('"single"')]),t._v(" requires the use of single quotes wherever possible")]),t._v(" "),e("li",[e("code",[t._v('"backtick"')]),t._v(" requires the use of backticks wherever possible")])]),t._v(" "),e("p",[t._v("Object option:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"avoidEscape": true')]),t._v(" allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise")]),t._v(" "),e("li",[e("code",[t._v('"allowTemplateLiterals": true')]),t._v(" allows strings to use backticks")])]),t._v(" "),e("p",[e("strong",[t._v("Deprecated")]),t._v(": The object property "),e("code",[t._v("avoid-escape")]),t._v(" is deprecated; please use the object property "),e("code",[t._v("avoidEscape")]),t._v(" instead.")]),t._v(" "),e("h3",{attrs:{id:"double"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#double"}},[t._v("#")]),t._v(" double")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),e("code",[t._v('"double"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "double"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" single "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" unescaped "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a string containing \"double\" quotes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" backtick "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("back\\ntick")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can use \\n in single or double quoted strings")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the default "),e("code",[t._v('"double"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "double"]*/')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env es6*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"double"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" backtick "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("back\ntick")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// backticks are allowed due to newline")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" backtick "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tag"),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("backtick")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// backticks are allowed due to tag")]),t._v("\n")])])]),e("h3",{attrs:{id:"single"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single"}},[t._v("#")]),t._v(" single")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),e("code",[t._v('"single"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "single"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"double"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" unescaped "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"a string containing 'single' quotes\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"single"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "single"]*/')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env es6*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" single "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" backtick "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("back")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("tick")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// backticks are allowed due to substitution")]),t._v("\n")])])]),e("h3",{attrs:{id:"backticks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backticks"}},[t._v("#")]),t._v(" backticks")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),e("code",[t._v('"backtick"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "backtick"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" single "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"double"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" unescaped "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a string containing `backticks`'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"backtick"')]),t._v(" option:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "backtick"]*/')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*eslint-env es6*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" backtick "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("backtick")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"avoidescape"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avoidescape"}},[t._v("#")]),t._v(" avoidEscape")]),t._v(" "),e("p",[t._v("Examples of additional "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"double", { "avoidEscape": true }')]),t._v(" options:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "double", { "avoidEscape": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" single "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a string containing \"double\" quotes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Examples of additional "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"single", { "avoidEscape": true }')]),t._v(" options:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "single", { "avoidEscape": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"a string containing 'single' quotes\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Examples of additional "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"backtick", { "avoidEscape": true }')]),t._v(" options:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "backtick", { "avoidEscape": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a string containing `backtick` quotes"')]),t._v("\n")])])]),e("h3",{attrs:{id:"allowtemplateliterals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowtemplateliterals"}},[t._v("#")]),t._v(" allowTemplateLiterals")]),t._v(" "),e("p",[t._v("Examples of additional "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"double", { "allowTemplateLiterals": true }')]),t._v(" options:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "double", { "allowTemplateLiterals": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"double"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" double "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("double")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Examples of additional "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"single", { "allowTemplateLiterals": true }')]),t._v(" options:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" single "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" single "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("single")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v('{ "allowTemplateLiterals": false }')]),t._v(" will not disallow the usage of all template literals. If you want to forbid any instance of template literals, use "),e("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-restricted-syntax.html"}},[t._v("no-restricted-syntax")]),t._v(" and target the "),e("code",[t._v("TemplateLiteral")]),t._v(" selector.")],1),t._v(" "),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you do not need consistency in your string styles, you can safely disable this rule.")])])}),[],!1,null,null,null);s.default=n.exports}}]);