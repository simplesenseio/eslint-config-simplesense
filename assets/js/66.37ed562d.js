(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{260:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This rule was "),e("strong",[t._v("deprecated")]),t._v(" in ESLint v8.53.0. Please use the "),e("a",{attrs:{href:"https://eslint.style/rules/js/max-len",target:"_blank",rel:"noopener noreferrer"}},[t._v("corresponding rule"),e("OutboundLink")],1),t._v(" in "),e("a",{attrs:{href:"https://eslint.style/packages/js",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("@stylistic/eslint-plugin-js")]),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Very long lines of code in any language can be difficult to read. In order to aid in readability and maintainability many coders have developed a convention to limit lines of code to X number of characters (traditionally 80 characters).")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a bar."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"baz"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"qux"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a qux"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"difficult"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"to read"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// very long")]),t._v("\n")])])]),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("This rule can have up to two numbers as positional arguments (for "),e("code",[t._v("code")]),t._v(" and "),e("code",[t._v("tabWidth")]),t._v(" options), followed by an object option (provided positional arguments have priority):")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"code"')]),t._v(" (default "),e("code",[t._v("80")]),t._v(") enforces a maximum line length")]),t._v(" "),e("li",[e("code",[t._v('"tabWidth"')]),t._v(" (default "),e("code",[t._v("4")]),t._v(") specifies the character width for tab characters")]),t._v(" "),e("li",[e("code",[t._v('"comments"')]),t._v(" enforces a maximum line length for comments; defaults to value of "),e("code",[t._v("code")])]),t._v(" "),e("li",[e("code",[t._v('"ignorePattern"')]),t._v(" ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON")]),t._v(" "),e("li",[e("code",[t._v('"ignoreComments": true')]),t._v(" ignores all trailing comments and comments on their own line")]),t._v(" "),e("li",[e("code",[t._v('"ignoreTrailingComments": true')]),t._v(" ignores only trailing comments")]),t._v(" "),e("li",[e("code",[t._v('"ignoreUrls": true')]),t._v(" ignores lines that contain a URL")]),t._v(" "),e("li",[e("code",[t._v('"ignoreStrings": true')]),t._v(" ignores lines that contain a double-quoted or single-quoted string")]),t._v(" "),e("li",[e("code",[t._v('"ignoreTemplateLiterals": true')]),t._v(" ignores lines that contain a template literal")]),t._v(" "),e("li",[e("code",[t._v('"ignoreRegExpLiterals": true')]),t._v(" ignores lines that contain a RegExp literal")])]),t._v(" "),e("h3",{attrs:{id:"code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" code")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),e("code",[t._v('{ "code": 80 }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "code": 80 }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a bar."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"baz"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"qux"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a qux"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"difficult"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"to read"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the default "),e("code",[t._v('{ "code": 80 }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "code": 80 }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a bar."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"baz"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"qux"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a qux"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"easier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"to read"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"tabwidth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tabwidth"}},[t._v("#")]),t._v(" tabWidth")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),e("code",[t._v('{ "tabWidth": 4 }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "code": 80, "tabWidth": 4 }]*/')]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a bar."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"baz"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"qux"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a qux"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::\n")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the default "),e("code",[t._v('{ "tabWidth": 4 }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "code": 80, "tabWidth": 4 }]*/')]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a bar."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"baz"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"qux"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a qux"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::\n")]),t._v(" "),e("h3",{attrs:{id:"comments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[t._v("#")]),t._v(" comments")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),e("code",[t._v('{ "comments": 65 }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "comments": 65 }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * This is a comment that violates the maximum line length we have specified\n**/")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"ignorecomments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignorecomments"}},[t._v("#")]),t._v(" ignoreComments")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('{ "ignoreComments": true }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "ignoreComments": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * This is a really really really really really really really really really long comment\n**/")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"ignoretrailingcomments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignoretrailingcomments"}},[t._v("#")]),t._v(" ignoreTrailingComments")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('{ "ignoreTrailingComments": true }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "ignoreTrailingComments": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is a really really really really really really really long comment")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"ignoreurls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignoreurls"}},[t._v("#")]),t._v(" ignoreUrls")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('{ "ignoreUrls": true }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "ignoreUrls": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.example.com/really/really/really/really/really/really/really/long'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"ignorestrings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignorestrings"}},[t._v("#")]),t._v(" ignoreStrings")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('{ "ignoreStrings": true }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "ignoreStrings": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" longString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is a really really really really really long string!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"ignoretemplateliterals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignoretemplateliterals"}},[t._v("#")]),t._v(" ignoreTemplateLiterals")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('{ "ignoreTemplateLiterals": true }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" longTemplateLiteral "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("this is a really really really really really long template literal!")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"ignoreregexpliterals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignoreregexpliterals"}},[t._v("#")]),t._v(" ignoreRegExpLiterals")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('{ "ignoreRegExpLiterals": true }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len: ["error", { "ignoreRegExpLiterals": true }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" longRegExpLiteral "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("this is a really really really really really long regular expression!")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"ignorepattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignorepattern"}},[t._v("#")]),t._v(" ignorePattern")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v("ignorePattern")]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint max-len:\n["error", { "ignorePattern": "^\\\\s*var\\\\s.+=\\\\s*require\\\\s*\\\\(" }]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dep "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'really/really/really/really/really/really/really/really/long/module'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")])])}),[],!1,null,null,null);e.default=r.exports}}]);