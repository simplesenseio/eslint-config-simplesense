(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{371:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"require-or-disallow-semicolons-instead-of-asi-semi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-or-disallow-semicolons-instead-of-asi-semi"}},[t._v("#")]),t._v(" require or disallow semicolons instead of ASI (semi)")]),t._v(" "),s("p",[t._v("JavaScript doesn't require semicolons at the end of each statement. In many cases, the JavaScript engine can determine that a semicolon should be in a certain spot and will automatically add it. This feature is known as "),s("strong",[t._v("automatic semicolon insertion (ASI)")]),t._v(" and is considered one of the more controversial features of JavaScript. For example, the following lines are both valid:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" website "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint.org"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("On the first line, the JavaScript engine will automatically insert a semicolon, so this is not considered a syntax error. The JavaScript engine still knows how to interpret the line and knows that the line end indicates the end of the statement.")]),t._v(" "),s("p",[t._v("In the debate over ASI, there are generally two schools of thought. The first is that we should treat ASI as if it didn't exist and always include semicolons manually. The rationale is that it's easier to always include semicolons than to try to remember when they are or are not required, and thus decreases the possibility of introducing an error.")]),t._v(" "),s("p",[t._v("However, the ASI mechanism can sometimes be tricky to people who are using semicolons. For example, consider this code:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This may look like a "),s("code",[t._v("return")]),t._v(" statement that returns an object literal, however, the JavaScript engine will interpret this code as:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Effectively, a semicolon is inserted after the "),s("code",[t._v("return")]),t._v(" statement, causing the code below it (a labeled literal inside a block) to be unreachable. This rule and the "),s("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-unreachable.html"}},[t._v("no-unreachable")]),t._v(" rule will protect your code from such cases.")],1),t._v(" "),s("p",[t._v("On the other side of the argument are those who say that since semicolons are inserted automatically, they are optional and do not need to be inserted manually. However, the ASI mechanism can also be tricky to people who don't use semicolons. For example, consider this code:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globalCounter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    globalCounter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("increment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("In this example, a semicolon will not be inserted after the first line, causing a run-time error (because an empty object is called as if it's a function). The "),s("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-unexpected-multiline.html"}},[t._v("no-unexpected-multiline")]),t._v(" rule can protect your code from such cases.")],1),t._v(" "),s("p",[t._v("Although ASI allows for more freedom over your coding style, it can also make your code behave in an unexpected way, whether you use semicolons or not. Therefore, it is best to know when ASI takes place and when it does not, and have ESLint protect your code from these potentially unexpected cases. In short, as once described by Isaac Schlueter, a "),s("code",[t._v("\\n")]),t._v(" character always ends a statement (just like a semicolon) unless one of the following is true:")]),t._v(" "),s("ol",[s("li",[t._v("The statement has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with "),s("code",[t._v(".")]),t._v(" or "),s("code",[t._v(",")]),t._v(".)")]),t._v(" "),s("li",[t._v("The line is "),s("code",[t._v("--")]),t._v(" or "),s("code",[t._v("++")]),t._v(" (in which case it will decrement/increment the next token.)")]),t._v(" "),s("li",[t._v("It is a "),s("code",[t._v("for()")]),t._v(", "),s("code",[t._v("while()")]),t._v(", "),s("code",[t._v("do")]),t._v(", "),s("code",[t._v("if()")]),t._v(", or "),s("code",[t._v("else")]),t._v(", and there is no "),s("code",[t._v("{")])]),t._v(" "),s("li",[t._v("The next line starts with "),s("code",[t._v("[")]),t._v(", "),s("code",[t._v("(")]),t._v(", "),s("code",[t._v("+")]),t._v(", "),s("code",[t._v("*")]),t._v(", "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("-")]),t._v(", "),s("code",[t._v(",")]),t._v(", "),s("code",[t._v(".")]),t._v(", or some other binary operator that can only be found between two tokens in a single expression.")])]),t._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("p",[t._v("This rule enforces consistent use of semicolons.")]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("This rule has two options, a string option and an object option.")]),t._v(" "),s("p",[t._v("String option:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"always"')]),t._v(" (default) requires semicolons at the end of statements")]),t._v(" "),s("li",[s("code",[t._v('"never"')]),t._v(" disallows semicolons as the end of statements (except to disambiguate statements beginning with "),s("code",[t._v("[")]),t._v(", "),s("code",[t._v("(")]),t._v(", "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("+")]),t._v(", or "),s("code",[t._v("-")]),t._v(")")])]),t._v(" "),s("p",[t._v("Object option (when "),s("code",[t._v('"always"')]),t._v("):")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"omitLastInOneLineBlock": true')]),t._v(" ignores the last semicolon in a block in which its braces (and therefore the content of the block) are in the same line")])]),t._v(" "),s("p",[t._v("Object option (when "),s("code",[t._v('"never"')]),t._v("):")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"beforeStatementContinuationChars": "any"')]),t._v(" (default) ignores semicolons (or lacking semicolon) at the end of statements if the next line starts with "),s("code",[t._v("[")]),t._v(", "),s("code",[t._v("(")]),t._v(", "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("+")]),t._v(", or "),s("code",[t._v("-")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v('"beforeStatementContinuationChars": "always"')]),t._v(" requires semicolons at the end of statements if the next line starts with "),s("code",[t._v("[")]),t._v(", "),s("code",[t._v("(")]),t._v(", "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("+")]),t._v(", or "),s("code",[t._v("-")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v('"beforeStatementContinuationChars": "never"')]),t._v(" disallows semicolons as the end of statements if it doesn't make ASI hazard even if the next line starts with "),s("code",[t._v("[")]),t._v(", "),s("code",[t._v("(")]),t._v(", "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("+")]),t._v(", or "),s("code",[t._v("-")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"always"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[t._v("#")]),t._v(" always")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),s("code",[t._v('"always"')]),t._v(" option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint semi: ["error", "always"]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),t._v("\n\nobject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("method")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for this rule with the default "),s("code",[t._v('"always"')]),t._v(" option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint semi: "error"*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("method")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"never"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[t._v("#")]),t._v(" never")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),s("code",[t._v('"never"')]),t._v(" option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint semi: ["error", "never"]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("method")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for this rule with the "),s("code",[t._v('"never"')]),t._v(" option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint semi: ["error", "never"]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),t._v("\n\nobject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("method")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESLint"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"omitlastinonelineblock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#omitlastinonelineblock"}},[t._v("#")]),t._v(" omitLastInOneLineBlock")]),t._v(" "),s("p",[t._v("Examples of additional "),s("strong",[t._v("correct")]),t._v(" code for this rule with the "),s("code",[t._v('"always", { "omitLastInOneLineBlock": true }')]),t._v(" options:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint semi: ["error", "always", { "omitLastInOneLineBlock": true}] */')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"beforestatementcontinuationchars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforestatementcontinuationchars"}},[t._v("#")]),t._v(" beforeStatementContinuationChars")]),t._v(" "),s("p",[t._v("Examples of additional "),s("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),s("code",[t._v('"never", { "beforeStatementContinuationChars": "always" }')]),t._v(" options:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint semi: ["error", "never", { "beforeStatementContinuationChars": "always"}] */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Examples of additional "),s("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),s("code",[t._v('"never", { "beforeStatementContinuationChars": "never" }')]),t._v(" options:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint semi: ["error", "never", { "beforeStatementContinuationChars": "never"}] */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),s("p",[t._v("If you do not want to enforce semicolon usage (or omission) in any particular way, then you can turn this rule off.")]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding",target:"_blank",rel:"noopener noreferrer"}},[t._v("An Open Letter to JavaScript Leaders Regarding Semicolons"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://inimino.org/~inimino/blog/javascript_semicolons",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Semicolon Insertion"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"related-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[t._v("#")]),t._v(" Related Rules")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-extra-semi.html"}},[t._v("no-extra-semi")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/rules/eslint-recommended/no-unexpected-multiline.html"}},[t._v("no-unexpected-multiline")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/rules/eslint-recommended/semi-spacing.html"}},[t._v("semi-spacing")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);