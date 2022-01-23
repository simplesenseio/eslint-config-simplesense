(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{244:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"require-constructor-names-to-begin-with-a-capital-letter-new-cap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-constructor-names-to-begin-with-a-capital-letter-new-cap"}},[t._v("#")]),t._v(" require constructor names to begin with a capital letter (new-cap)")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("new")]),t._v(" operator in JavaScript creates a new instance of a particular type of object. That type of object is represented by a constructor function. Since constructor functions are just regular functions, the only defining characteristic is that "),a("code",[t._v("new")]),t._v(" is being used as part of the call. Native JavaScript functions begin with an uppercase letter to distinguish those functions that are to be used as constructors from functions that are not. Many style guides recommend following this pattern to more easily determine which functions are to be used as constructors.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"rule-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),a("p",[t._v("This rule requires constructor names to begin with a capital letter. Certain built-in identifiers are exempt from this rule. These identifiers are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Array")])]),t._v(" "),a("li",[a("code",[t._v("Boolean")])]),t._v(" "),a("li",[a("code",[t._v("Date")])]),t._v(" "),a("li",[a("code",[t._v("Error")])]),t._v(" "),a("li",[a("code",[t._v("Function")])]),t._v(" "),a("li",[a("code",[t._v("Number")])]),t._v(" "),a("li",[a("code",[t._v("Object")])]),t._v(" "),a("li",[a("code",[t._v("RegExp")])]),t._v(" "),a("li",[a("code",[t._v("String")])]),t._v(" "),a("li",[a("code",[t._v("Symbol")])])]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: "error"*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("p",[t._v("This rule has an object option:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"newIsCap": true')]),t._v(" (default) requires all "),a("code",[t._v("new")]),t._v(" operators to be called with uppercase-started functions.")]),t._v(" "),a("li",[a("code",[t._v('"newIsCap": false')]),t._v(" allows "),a("code",[t._v("new")]),t._v(" operators to be called with lowercase-started or uppercase-started functions.")]),t._v(" "),a("li",[a("code",[t._v('"capIsNew": true')]),t._v(" (default) requires all uppercase-started functions to be called with "),a("code",[t._v("new")]),t._v(" operators.")]),t._v(" "),a("li",[a("code",[t._v('"capIsNew": false')]),t._v(" allows uppercase-started functions to be called without "),a("code",[t._v("new")]),t._v(" operators.")]),t._v(" "),a("li",[a("code",[t._v('"newIsCapExceptions"')]),t._v(" allows specified lowercase-started function names to be called with the "),a("code",[t._v("new")]),t._v(" operator.")]),t._v(" "),a("li",[a("code",[t._v('"newIsCapExceptionPattern"')]),t._v(" allows any lowercase-started function names that match the specified regex pattern to be called with the "),a("code",[t._v("new")]),t._v(" operator.")]),t._v(" "),a("li",[a("code",[t._v('"capIsNewExceptions"')]),t._v(" allows specified uppercase-started function names to be called without the "),a("code",[t._v("new")]),t._v(" operator.")]),t._v(" "),a("li",[a("code",[t._v('"capIsNewExceptionPattern"')]),t._v(" allows any uppercase-started function names that match the specified regex pattern to be called without the "),a("code",[t._v("new")]),t._v(" operator.")]),t._v(" "),a("li",[a("code",[t._v('"properties": true')]),t._v(" (default) enables checks on object properties")]),t._v(" "),a("li",[a("code",[t._v('"properties": false')]),t._v(" disables checks on object properties")])]),t._v(" "),a("h3",{attrs:{id:"newiscap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#newiscap"}},[t._v("#")]),t._v(" newIsCap")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),a("code",[t._v('{ "newIsCap": true }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "newIsCap": true }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with the default "),a("code",[t._v('{ "newIsCap": true }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "newIsCap": true }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "newIsCap": false }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "newIsCap": false }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"capisnew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capisnew"}},[t._v("#")]),t._v(" capIsNew")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),a("code",[t._v('{ "capIsNew": true }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "capIsNew": true }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colleague "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with the default "),a("code",[t._v('{ "capIsNew": true }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "capIsNew": true }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colleague "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "capIsNew": false }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "capIsNew": false }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colleague "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"newiscapexceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#newiscapexceptions"}},[t._v("#")]),t._v(" newIsCapExceptions")]),t._v(" "),a("p",[t._v("Examples of additional "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "newIsCapExceptions": ["events"] }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "newIsCapExceptions": ["events"] }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" events "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'events'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" emitter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("events")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"newiscapexceptionpattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#newiscapexceptionpattern"}},[t._v("#")]),t._v(" newIsCapExceptionPattern")]),t._v(" "),a("p",[t._v("Examples of additional "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "newIsCapExceptionPattern": "^person\\\\.." }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "newIsCapExceptionPattern": "^person\\\\.." }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("acquaintance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bestFriend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("friend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of additional "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "newIsCapExceptionPattern": "\\\\.bar$" }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "newIsCapExceptionPattern": "\\\\.bar$" }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"capisnewexceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capisnewexceptions"}},[t._v("#")]),t._v(" capIsNewExceptions")]),t._v(" "),a("p",[t._v("Examples of additional "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "capIsNewExceptions": ["Person"] }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "capIsNewExceptions": ["Person"] }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"capisnewexceptionpattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capisnewexceptionpattern"}},[t._v("#")]),t._v(" capIsNewExceptionPattern")]),t._v(" "),a("p",[t._v("Examples of additional "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "capIsNewExceptionPattern": "^person\\\\.." }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "capIsNewExceptionPattern": "^person\\\\.." }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Acquaintance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bestFriend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Friend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of additional "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "capIsNewExceptionPattern": "\\\\.Bar$" }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "capIsNewExceptionPattern": "\\\\.Bar$" }]*/')]),t._v("\n\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of additional "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "capIsNewExceptionPattern": "^Foo" }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "capIsNewExceptionPattern": "^Foo" }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foobar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" properties")]),t._v(" "),a("p",[t._v("Examples of "),a("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),a("code",[t._v('{ "properties": true }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "properties": true }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("acquaintance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with the default "),a("code",[t._v('{ "properties": true }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "properties": true }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Acquaintance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Examples of "),a("strong",[t._v("correct")]),t._v(" code for this rule with the "),a("code",[t._v('{ "properties": false }')]),t._v(" option:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint new-cap: ["error", { "properties": false }]*/')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" friend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("acquaintance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"when-not-to-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),a("p",[t._v("If you have conventions that don't require an uppercase letter for constructors, or don't require capitalized functions be only used as constructors, turn this rule off.")])])}),[],!1,null,null,null);s.default=n.exports}}]);