(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{357:function(t,s,e){"use strict";e.r(s);var n=e(9),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"require-or-disallow-padding-lines-between-statements-padding-line-between-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require-or-disallow-padding-lines-between-statements-padding-line-between-statements"}},[t._v("#")]),t._v(" Require or disallow padding lines between statements (padding-line-between-statements)")]),t._v(" "),e("p",[t._v("This rule requires or disallows blank lines between the given 2 kinds of statements.\nProperly blank lines help developers to understand the code.")]),t._v(" "),e("p",[t._v("For example, the following configuration requires a blank line between a variable declaration and a "),e("code",[t._v("return")]),t._v(" statement.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "var", next: "return" }\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule does nothing if no configurations are provided.")]),t._v(" "),e("p",[t._v("A configuration is an object which has 3 properties; "),e("code",[t._v("blankLine")]),t._v(", "),e("code",[t._v("prev")]),t._v(" and "),e("code",[t._v("next")]),t._v(". For example, "),e("code",[t._v('{ blankLine: "always", prev: "var", next: "return" }')]),t._v(' means "one or more blank lines are required between a variable declaration and a '),e("code",[t._v("return")]),t._v(' statement."\nYou can supply any number of configurations. If a statement pair matches multiple configurations, the last matched configuration will be used.')]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"padding-line-between-statements"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ...\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[e("p",[e("code",[t._v("LINEBREAK_TYPE")]),t._v(" is one of the following.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"any"')]),t._v(" just ignores the statement pair.")]),t._v(" "),e("li",[e("code",[t._v('"never"')]),t._v(" disallows blank lines.")]),t._v(" "),e("li",[e("code",[t._v('"always"')]),t._v(" requires one or more blank lines. Note it does not count lines that comments exist as blank lines.")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("STATEMENT_TYPE")]),t._v(" is one of the following, or an array of the following.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"*"')]),t._v(" is wildcard. This matches any statements.")]),t._v(" "),e("li",[e("code",[t._v('"block"')]),t._v(" is lonely blocks.")]),t._v(" "),e("li",[e("code",[t._v('"block-like"')]),t._v(" is block like statements. This matches statements that the last token is the closing brace of blocks; e.g. "),e("code",[t._v("{ }")]),t._v(", "),e("code",[t._v("if (a) { }")]),t._v(", and "),e("code",[t._v("while (a) { }")]),t._v(". Also matches immediately invoked function expression statements.")]),t._v(" "),e("li",[e("code",[t._v('"break"')]),t._v(" is "),e("code",[t._v("break")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"case"')]),t._v(" is "),e("code",[t._v("case")]),t._v(" clauses in "),e("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"cjs-export"')]),t._v(" is "),e("code",[t._v("export")]),t._v(" statements of CommonJS; e.g. "),e("code",[t._v("module.exports = 0")]),t._v(", "),e("code",[t._v("module.exports.foo = 1")]),t._v(", and "),e("code",[t._v("exports.foo = 2")]),t._v(". This is a special case of assignment.")]),t._v(" "),e("li",[e("code",[t._v('"cjs-import"')]),t._v(" is "),e("code",[t._v("import")]),t._v(" statements of CommonJS; e.g. "),e("code",[t._v('const foo = require("foo")')]),t._v(". This is a special case of variable declarations.")]),t._v(" "),e("li",[e("code",[t._v('"class"')]),t._v(" is "),e("code",[t._v("class")]),t._v(" declarations.")]),t._v(" "),e("li",[e("code",[t._v('"const"')]),t._v(" is "),e("code",[t._v("const")]),t._v(" variable declarations, both single-line and multiline.")]),t._v(" "),e("li",[e("code",[t._v('"continue"')]),t._v(" is "),e("code",[t._v("continue")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"debugger"')]),t._v(" is "),e("code",[t._v("debugger")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"default"')]),t._v(" is "),e("code",[t._v("default")]),t._v(" clauses in "),e("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"directive"')]),t._v(" is directive prologues. This matches directives; e.g. "),e("code",[t._v('"use strict"')]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v('"do"')]),t._v(" is "),e("code",[t._v("do-while")]),t._v(" statements. This matches all statements that the first token is "),e("code",[t._v("do")]),t._v(" keyword.")]),t._v(" "),e("li",[e("code",[t._v('"empty"')]),t._v(" is empty statements.")]),t._v(" "),e("li",[e("code",[t._v('"export"')]),t._v(" is "),e("code",[t._v("export")]),t._v(" declarations.")]),t._v(" "),e("li",[e("code",[t._v('"expression"')]),t._v(" is expression statements.")]),t._v(" "),e("li",[e("code",[t._v('"for"')]),t._v(" is "),e("code",[t._v("for")]),t._v(" loop families. This matches all statements that the first token is "),e("code",[t._v("for")]),t._v(" keyword.")]),t._v(" "),e("li",[e("code",[t._v('"function"')]),t._v(" is function declarations.")]),t._v(" "),e("li",[e("code",[t._v('"if"')]),t._v(" is "),e("code",[t._v("if")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"iife"')]),t._v(" is immediately invoked function expression statements. This matches calls on a function expression, optionally prefixed with a unary operator.")]),t._v(" "),e("li",[e("code",[t._v('"import"')]),t._v(" is "),e("code",[t._v("import")]),t._v(" declarations.")]),t._v(" "),e("li",[e("code",[t._v('"let"')]),t._v(" is "),e("code",[t._v("let")]),t._v(" variable declarations, both single-line and multiline.")]),t._v(" "),e("li",[e("code",[t._v('"multiline-block-like"')]),t._v(" is block like statements. This is the same as "),e("code",[t._v("block-like")]),t._v(" type, but only if the block is multiline.")]),t._v(" "),e("li",[e("code",[t._v('"multiline-const"')]),t._v(" is multiline "),e("code",[t._v("const")]),t._v(" variable declarations.")]),t._v(" "),e("li",[e("code",[t._v('"multiline-expression"')]),t._v(" is expression statements. This is the same as "),e("code",[t._v("expression")]),t._v(" type, but only if the statement is multiline.")]),t._v(" "),e("li",[e("code",[t._v('"multiline-let"')]),t._v(" is multiline "),e("code",[t._v("let")]),t._v(" variable declarations.")]),t._v(" "),e("li",[e("code",[t._v('"multiline-var"')]),t._v(" is multiline "),e("code",[t._v("var")]),t._v(" variable declarations.")]),t._v(" "),e("li",[e("code",[t._v('"return"')]),t._v(" is "),e("code",[t._v("return")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"singleline-const"')]),t._v(" is single-line "),e("code",[t._v("const")]),t._v(" variable declarations.")]),t._v(" "),e("li",[e("code",[t._v('"singleline-let"')]),t._v(" is single-line "),e("code",[t._v("let")]),t._v(" variable declarations.")]),t._v(" "),e("li",[e("code",[t._v('"singleline-var"')]),t._v(" is single-line "),e("code",[t._v("var")]),t._v(" variable declarations.")]),t._v(" "),e("li",[e("code",[t._v('"switch"')]),t._v(" is "),e("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"throw"')]),t._v(" is "),e("code",[t._v("throw")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"try"')]),t._v(" is "),e("code",[t._v("try")]),t._v(" statements.")]),t._v(" "),e("li",[e("code",[t._v('"var"')]),t._v(" is "),e("code",[t._v("var")]),t._v(" variable declarations, both single-line and multiline.")]),t._v(" "),e("li",[e("code",[t._v('"while"')]),t._v(" is "),e("code",[t._v("while")]),t._v(" loop statements.")]),t._v(" "),e("li",[e("code",[t._v('"with"')]),t._v(" is "),e("code",[t._v("with")]),t._v(" statements.")])])])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("p",[t._v("This configuration would require blank lines before all "),e("code",[t._v("return")]),t._v(" statements, like the "),e("a",{attrs:{href:"https://eslint.org/docs/rules/newline-before-return",target:"_blank",rel:"noopener noreferrer"}},[t._v("newline-before-return"),e("OutboundLink")],1),t._v(" rule.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: "*", next: "return" }]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "*", next: "return" }\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: "*", next: "return" }]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "*", next: "return" }\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("hr"),t._v(" "),e("p",[t._v("This configuration would require blank lines after every sequence of variable declarations, like the "),e("a",{attrs:{href:"https://eslint.org/docs/rules/newline-after-var",target:"_blank",rel:"noopener noreferrer"}},[t._v("newline-after-var"),e("OutboundLink")],1),t._v(" rule.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},\n    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},\n    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("hr"),t._v(" "),e("p",[t._v("This configuration would require blank lines after all directive prologues, like the "),e("a",{attrs:{href:"https://eslint.org/docs/rules/lines-around-directive",target:"_blank",rel:"noopener noreferrer"}},[t._v("lines-around-directive"),e("OutboundLink")],1),t._v(" rule.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "directive", next: "*" },\n    { blankLine: "any",    prev: "directive", next: "directive" }\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "directive", next: "*" },\n    { blankLine: "any",    prev: "directive", next: "directive" }\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use asm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("hr"),t._v(" "),e("p",[t._v("This configuration would require blank lines between clauses in "),e("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: ["case", "default"], next: "*" }]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["case", "default"], next: "*" }\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quux")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for the "),e("code",[t._v('[{ blankLine: "always", prev: ["case", "default"], next: "*" }]')]),t._v(" configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["case", "default"], next: "*" }\n]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quux")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLineAfterVariableDeclaration",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLineAfterVariableDeclaration"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLinesAfterBlocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLinesAfterBlocks"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewLinesAfterBlocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewLinesAfterBlocks"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLinesAfterUseStrict",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLinesAfterUseStrict"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewLinesAfterUseStrict",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewLinesAfterUseStrict"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLinesBeforeExport",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLinesBeforeExport"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewLinesBeforeExport",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewLinesBeforeExport"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewlinesBeforeKeywords",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewlinesBeforeKeywords"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("JSCS:")]),t._v(" "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewlinesBeforeKeywords",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewlinesBeforeKeywords"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you don't want to notify warnings about linebreaks, then it's safe to disable this rule.")])])}),[],!1,null,null,null);s.default=a.exports}}]);