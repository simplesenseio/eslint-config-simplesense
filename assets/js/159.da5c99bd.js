(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{351:function(t,s,a){"use strict";a.r(s);var n=a(9),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("The optional chaining ("),s("code",[t._v("?.")]),t._v(") expression can short-circuit with a return value of "),s("code",[t._v("undefined")]),t._v(". Therefore, treating an evaluated optional chaining expression as a function, object, number, etc., can cause TypeError or unexpected results. For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\nbar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\n")])])]),s("p",[t._v("Also, parentheses limit the scope of short-circuiting in chains. For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\n")])])]),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),s("p",[t._v("This rule aims to detect some cases where the use of optional chaining doesn't prevent runtime errors. In particular, it flags optional chaining expressions in positions where short-circuiting to "),s("code",[t._v("undefined")]),t._v(" causes throwing a TypeError afterward.")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("incorrect")]),t._v(" code for this rule:")]),t._v(" "),s("p",[t._v('::: incorrect { "sourceType": "script" }')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-optional-chaining: "error"*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[t._v("Examples of "),s("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),s("p",[t._v("::: correct")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-optional-chaining: "error"*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("This rule has an object option:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("disallowArithmeticOperators")]),t._v(": Disallow arithmetic operations on optional chaining expressions (Default "),s("code",[t._v("false")]),t._v("). If this is "),s("code",[t._v("true")]),t._v(", this rule warns arithmetic operations on optional chaining expressions, which possibly result in "),s("code",[t._v("NaN")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"disallowarithmeticoperators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disallowarithmeticoperators"}},[t._v("#")]),t._v(" disallowArithmeticOperators")]),t._v(" "),s("p",[t._v("With this option set to "),s("code",[t._v("true")]),t._v(" the rule is enforced for:")]),t._v(" "),s("ul",[s("li",[t._v("Unary operators: "),s("code",[t._v("-")]),t._v(", "),s("code",[t._v("+")])]),t._v(" "),s("li",[t._v("Arithmetic operators: "),s("code",[t._v("+")]),t._v(", "),s("code",[t._v("-")]),t._v(", "),s("code",[t._v("/")]),t._v(", "),s("code",[t._v("*")]),t._v(", "),s("code",[t._v("%")]),t._v(", "),s("code",[t._v("**")])]),t._v(" "),s("li",[t._v("Assignment operators: "),s("code",[t._v("+=")]),t._v(", "),s("code",[t._v("-=")]),t._v(", "),s("code",[t._v("/=")]),t._v(", "),s("code",[t._v("*=")]),t._v(", "),s("code",[t._v("%=")]),t._v(", "),s("code",[t._v("**=")])])]),t._v(" "),s("p",[t._v("Examples of additional "),s("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),s("code",[t._v('{ "disallowArithmeticOperators": true }')]),t._v(" option:")]),t._v(" "),s("p",[t._v("::: incorrect")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-unsafe-optional-chaining: ["error", { "disallowArithmeticOperators": true }]*/')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbaz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v(":::")])])}),[],!1,null,null,null);s.default=r.exports}}]);