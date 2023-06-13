(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{357:function(t,s,n){"use strict";n.r(s);var e=n(9),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This rule requires or disallows blank lines between the given 2 kinds of statements.\nProperly blank lines help developers to understand the code.")]),t._v(" "),s("p",[t._v("For example, the following configuration requires a blank line between a variable declaration and a "),s("code",[t._v("return")]),t._v(" statement.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "var", next: "return" }\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("p",[t._v("This rule does nothing if no configurations are provided.")]),t._v(" "),s("p",[t._v("A configuration is an object which has 3 properties; "),s("code",[t._v("blankLine")]),t._v(", "),s("code",[t._v("prev")]),t._v(" and "),s("code",[t._v("next")]),t._v(". For example, "),s("code",[t._v('{ blankLine: "always", prev: "var", next: "return" }')]),t._v(' means "one or more blank lines are required between a variable declaration and a '),s("code",[t._v("return")]),t._v(' statement."\nYou can supply any number of configurations. If a statement pair matches multiple configurations, the last matched configuration will be used.')]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"padding-line-between-statements"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blankLine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LINEBREAK_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" STATEMENT_TYPE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[s("code",[t._v("LINEBREAK_TYPE")]),t._v(" is one of the following.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"any"')]),t._v(" just ignores the statement pair.")]),t._v(" "),s("li",[s("code",[t._v('"never"')]),t._v(" disallows blank lines.")]),t._v(" "),s("li",[s("code",[t._v('"always"')]),t._v(" requires one or more blank lines. Note it does not count lines that comments exist as blank lines.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("STATEMENT_TYPE")]),t._v(" is one of the following, or an array of the following.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"*"')]),t._v(" is wildcard. This matches any statements.")]),t._v(" "),s("li",[s("code",[t._v('"block"')]),t._v(" is lonely blocks.")]),t._v(" "),s("li",[s("code",[t._v('"block-like"')]),t._v(" is block like statements. This matches statements that the last token is the closing brace of blocks; e.g. "),s("code",[t._v("{ }")]),t._v(", "),s("code",[t._v("if (a) { }")]),t._v(", and "),s("code",[t._v("while (a) { }")]),t._v(". Also matches immediately invoked function expression statements.")]),t._v(" "),s("li",[s("code",[t._v('"break"')]),t._v(" is "),s("code",[t._v("break")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"case"')]),t._v(" is "),s("code",[t._v("case")]),t._v(" clauses in "),s("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"cjs-export"')]),t._v(" is "),s("code",[t._v("export")]),t._v(" statements of CommonJS; e.g. "),s("code",[t._v("module.exports = 0")]),t._v(", "),s("code",[t._v("module.exports.foo = 1")]),t._v(", and "),s("code",[t._v("exports.foo = 2")]),t._v(". This is a special case of assignment.")]),t._v(" "),s("li",[s("code",[t._v('"cjs-import"')]),t._v(" is "),s("code",[t._v("import")]),t._v(" statements of CommonJS; e.g. "),s("code",[t._v('const foo = require("foo")')]),t._v(". This is a special case of variable declarations.")]),t._v(" "),s("li",[s("code",[t._v('"class"')]),t._v(" is "),s("code",[t._v("class")]),t._v(" declarations.")]),t._v(" "),s("li",[s("code",[t._v('"const"')]),t._v(" is "),s("code",[t._v("const")]),t._v(" variable declarations, both single-line and multiline.")]),t._v(" "),s("li",[s("code",[t._v('"continue"')]),t._v(" is "),s("code",[t._v("continue")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"debugger"')]),t._v(" is "),s("code",[t._v("debugger")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"default"')]),t._v(" is "),s("code",[t._v("default")]),t._v(" clauses in "),s("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"directive"')]),t._v(" is directive prologues. This matches directives; e.g. "),s("code",[t._v('"use strict"')]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v('"do"')]),t._v(" is "),s("code",[t._v("do-while")]),t._v(" statements. This matches all statements that the first token is "),s("code",[t._v("do")]),t._v(" keyword.")]),t._v(" "),s("li",[s("code",[t._v('"empty"')]),t._v(" is empty statements.")]),t._v(" "),s("li",[s("code",[t._v('"export"')]),t._v(" is "),s("code",[t._v("export")]),t._v(" declarations.")]),t._v(" "),s("li",[s("code",[t._v('"expression"')]),t._v(" is expression statements.")]),t._v(" "),s("li",[s("code",[t._v('"for"')]),t._v(" is "),s("code",[t._v("for")]),t._v(" loop families. This matches all statements that the first token is "),s("code",[t._v("for")]),t._v(" keyword.")]),t._v(" "),s("li",[s("code",[t._v('"function"')]),t._v(" is function declarations.")]),t._v(" "),s("li",[s("code",[t._v('"if"')]),t._v(" is "),s("code",[t._v("if")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"iife"')]),t._v(" is immediately invoked function expression statements. This matches calls on a function expression, optionally prefixed with a unary operator.")]),t._v(" "),s("li",[s("code",[t._v('"import"')]),t._v(" is "),s("code",[t._v("import")]),t._v(" declarations.")]),t._v(" "),s("li",[s("code",[t._v('"let"')]),t._v(" is "),s("code",[t._v("let")]),t._v(" variable declarations, both single-line and multiline.")]),t._v(" "),s("li",[s("code",[t._v('"multiline-block-like"')]),t._v(" is block like statements. This is the same as "),s("code",[t._v("block-like")]),t._v(" type, but only if the block is multiline.")]),t._v(" "),s("li",[s("code",[t._v('"multiline-const"')]),t._v(" is multiline "),s("code",[t._v("const")]),t._v(" variable declarations.")]),t._v(" "),s("li",[s("code",[t._v('"multiline-expression"')]),t._v(" is expression statements. This is the same as "),s("code",[t._v("expression")]),t._v(" type, but only if the statement is multiline.")]),t._v(" "),s("li",[s("code",[t._v('"multiline-let"')]),t._v(" is multiline "),s("code",[t._v("let")]),t._v(" variable declarations.")]),t._v(" "),s("li",[s("code",[t._v('"multiline-var"')]),t._v(" is multiline "),s("code",[t._v("var")]),t._v(" variable declarations.")]),t._v(" "),s("li",[s("code",[t._v('"return"')]),t._v(" is "),s("code",[t._v("return")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"singleline-const"')]),t._v(" is single-line "),s("code",[t._v("const")]),t._v(" variable declarations.")]),t._v(" "),s("li",[s("code",[t._v('"singleline-let"')]),t._v(" is single-line "),s("code",[t._v("let")]),t._v(" variable declarations.")]),t._v(" "),s("li",[s("code",[t._v('"singleline-var"')]),t._v(" is single-line "),s("code",[t._v("var")]),t._v(" variable declarations.")]),t._v(" "),s("li",[s("code",[t._v('"switch"')]),t._v(" is "),s("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"throw"')]),t._v(" is "),s("code",[t._v("throw")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"try"')]),t._v(" is "),s("code",[t._v("try")]),t._v(" statements.")]),t._v(" "),s("li",[s("code",[t._v('"var"')]),t._v(" is "),s("code",[t._v("var")]),t._v(" variable declarations, both single-line and multiline.")]),t._v(" "),s("li",[s("code",[t._v('"while"')]),t._v(" is "),s("code",[t._v("while")]),t._v(" loop statements.")]),t._v(" "),s("li",[s("code",[t._v('"with"')]),t._v(" is "),s("code",[t._v("with")]),t._v(" statements.")])])])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("This configuration would require blank lines before all "),s("code",[t._v("return")]),t._v(" statements, like the "),s("a",{attrs:{href:"newline-before-return"}},[t._v("newline-before-return")]),t._v(" rule.")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: "*", next: "return" }]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "*", next: "return" }\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: "*", next: "return" }]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "*", next: "return" }\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("This configuration would require blank lines after every sequence of variable declarations, like the "),s("a",{attrs:{href:"newline-after-var"}},[t._v("newline-after-var")]),t._v(" rule.")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},\n    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["const", "let", "var"], next: "*"},\n    { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("This configuration would require blank lines after all directive prologues, like the "),s("a",{attrs:{href:"lines-around-directive"}},[t._v("lines-around-directive")]),t._v(" rule.")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "directive", next: "*" },\n    { blankLine: "any",    prev: "directive", next: "directive" }\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" }]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: "directive", next: "*" },\n    { blankLine: "any",    prev: "directive", next: "directive" }\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use asm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("This configuration would require blank lines between clauses in "),s("code",[t._v("switch")]),t._v(" statements.")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: ["case", "default"], next: "*" }]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["case", "default"], next: "*" }\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quux")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for the "),s("code",[t._v('[{ blankLine: "always", prev: ["case", "default"], next: "*" }]')]),t._v(" configuration:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint padding-line-between-statements: [\n    "error",\n    { blankLine: "always", prev: ["case", "default"], next: "*" }\n]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quux")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),s("p",[t._v("If you don't want to notify warnings about linebreaks, then it's safe to disable this rule.")]),t._v(" "),s("h2",{attrs:{id:"compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLineAfterVariableDeclaration",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLineAfterVariableDeclaration"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLinesAfterBlocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLinesAfterBlocks"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewLinesAfterBlocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewLinesAfterBlocks"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLinesAfterUseStrict",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLinesAfterUseStrict"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewLinesAfterUseStrict",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewLinesAfterUseStrict"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewLinesBeforeExport",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewLinesBeforeExport"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewLinesBeforeExport",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewLinesBeforeExport"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/requirePaddingNewlinesBeforeKeywords",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirePaddingNewlinesBeforeKeywords"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("JSCS:")]),t._v(" "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/disallowPaddingNewlinesBeforeKeywords",target:"_blank",rel:"noopener noreferrer"}},[t._v("disallowPaddingNewlinesBeforeKeywords"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);