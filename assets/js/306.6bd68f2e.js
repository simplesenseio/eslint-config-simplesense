(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{495:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"elseif-without-else"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elseif-without-else"}},[t._v("#")]),t._v(" elseif-without-else")]),t._v(" "),a("p",[t._v("This rule applies whenever an "),a("code",[t._v("if")]),t._v(" statement is followed by one or more "),a("code",[t._v("else if")]),t._v(" statements; the final "),a("code",[t._v("else if")]),t._v(" should be followed by an "),a("code",[t._v("else")]),t._v(" statement.")]),t._v(" "),a("p",[t._v("The requirement for a final "),a("code",[t._v("else")]),t._v(" statement is defensive programming.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("else")]),t._v(" statement should either take appropriate action or contain a suitable comment as to why no action is taken. This is consistent with the requirement to have a final "),a("code",[t._v("default")]),t._v(" clause in a "),a("code",[t._v("switch")]),t._v(" statement.")]),t._v(" "),a("h2",{attrs:{id:"noncompliant-code-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noncompliant-code-example"}},[t._v("#")]),t._v(" Noncompliant Code Example")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"compliant-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compliant-solution"}},[t._v("#")]),t._v(" Compliant Solution")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unexpected value for x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"see"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see"}},[t._v("#")]),t._v(" See")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://wiki.sei.cmu.edu/confluence/display/c/MSC01-C.+Strive+for+logical+completeness"}},[t._v("CERT, MSC01-C.")]),t._v(" - Strive for logical completeness ")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://wiki.sei.cmu.edu/confluence/display/java/MSC57-J.+Strive+for+logical+completeness"}},[t._v("CERT, MSC57-J.")]),t._v(" - Strive for logical completeness ")])])])}),[],!1,null,null,null);s.default=n.exports}}]);