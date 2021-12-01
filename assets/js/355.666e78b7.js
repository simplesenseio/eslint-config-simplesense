(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{542:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"disallow-unused-object-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disallow-unused-object-properties"}},[t._v("#")]),t._v(" Disallow unused object properties")]),t._v(" "),e("p",[t._v("✅ "),e("em",[t._v("This rule is part of the "),e("a",{attrs:{href:"https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("recommended"),e("OutboundLink")],1),t._v(" config.")])]),t._v(" "),e("p",[t._v("Unused properties, much like unused variables, are often a result of incomplete refactoring and may confuse readers.")]),t._v(" "),e("p",[t._v("This rule is primarily useful when you use objects to group constants or model enumerations. It is much harder to predict class properties usage, and practically impossible to predict reflective property access. This rule ignores cases like that.")]),t._v(" "),e("h2",{attrs:{id:"example-use-cases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-use-cases"}},[t._v("#")]),t._v(" Example use cases")]),t._v(" "),e("p",[t._v("When using "),e("a",{attrs:{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("React"),e("OutboundLink")],1),t._v("'s inline styles or one of "),e("a",{attrs:{href:"https://michelebertoli.github.io/css-in-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("many CSS-in-JS"),e("OutboundLink")],1),t._v(" like "),e("a",{attrs:{href:"https://github.com/threepointone/glamor",target:"_blank",rel:"noopener noreferrer"}},[t._v("glamor"),e("OutboundLink")],1),t._v(", one might find it helpful to group component styles into a constant object. Later you might remove one of the styles, but forget to remove its definition, especially if the component grew in complexity by that time. If these were defined as separate constants, ESLint's builtin "),e("code",[t._v("no-unused-vars")]),t._v(" rule would have helped, but they are not. That's when the "),e("code",[t._v("no-unused-properties")]),t._v(" rules becomes useful.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" styles "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsuccess"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tdanger"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- Property `danger` is defined but never used")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" styles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This issue extends to most enumeration and const-like use cases. Below is an example straight from "),e("a",{attrs:{href:"https://github.com/twbs/bootstrap/blob/19f70f9d4ccca132f196011958c1b72462c698e7/js/src/scrollspy.js#L44",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap's "),e("code",[t._v("scrollspy")]),e("OutboundLink")],1),t._v(". The file contains about 300 lines of DOM/jQuery complexity. It's practically impossible to notice the issue manually. But this extra property indicates that authors intended but forgot to handle dropdown menus specially, or at least have a useless constant defined.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ClassName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DROPDOWN_ITEM")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dropdown-item'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DROPDOWN_MENU")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dropdown-menu'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- Property `DROPDOWN_MENU` is defined but never used")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTIVE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"fail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fail"}},[t._v("#")]),t._v(" Fail")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tused"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tunused"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- Property `unused` is defined but never used.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("used"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("used"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"pass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pass"}},[t._v("#")]),t._v(" Pass")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tused"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tusedToo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The whole object is used")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("used"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usedToo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Every property is used individually")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unpredictable, all properties are considered to be used")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Objects with methods are skipped too, all properties are considered used")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tused"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"scope-and-limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scope-and-limitations"}},[t._v("#")]),t._v(" Scope and limitations")]),t._v(" "),e("p",[t._v("This rule tries hard not to report potentially used properties as unused. Basically, all supported use cases are enum-like as shown above, more complex cases are ignored. Detailed list of limitations follows.")]),t._v(" "),e("ul",[e("li",[t._v("Does not predict dynamic property access. That is, "),e("code",[t._v("object[keys]")]),t._v(" says that all properties of an object are potentially used. This is as unpredictable for this rule as "),e("code",[t._v("eval(...)")]),t._v(" is for the "),e("code",[t._v("no-unused-vars")]),t._v(" rule.")]),t._v(" "),e("li",[t._v("Same goes for computed property keys in object definitions, like "),e("code",[t._v("{[key]: value}")]),t._v(".")]),t._v(" "),e("li",[t._v("If a variable is unused, it is not checked. This is done to play nicely with the "),e("code",[t._v("no-unused-vars")]),t._v(" rule, which everybody should have enabled at all times.")]),t._v(" "),e("li",[t._v("Does not check objects used as an argument. If you call "),e("code",[t._v("f(object)")]),t._v(", it behaves like you used all of its properties, since it's hard to predict what a function would do with the object.")]),t._v(" "),e("li",[t._v("If you call a method on an object, it is ignored. Because of "),e("code",[t._v("this")]),t._v(", it's basically the same as calling a function on an object.")]),t._v(" "),e("li",[t._v("If you assign to an object, it is ignored. Even if the key you assign to is static.")]),t._v(" "),e("li",[t._v("Classes are not checked.")]),t._v(" "),e("li",[t._v("Prototypes are not checked. Only own properties are.")]),t._v(" "),e("li",[t._v("Does not follow objects across files. If you export an object, it's like if you used all of its properties.")])]),t._v(" "),e("p",[t._v("If you want to lift some of these limitations, you should try tools like "),e("a",{attrs:{href:"https://flow.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://www.typescriptlang.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);