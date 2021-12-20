(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{378:function(s,e,t){"use strict";t.r(e);var a=t(9),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"requires-or-disallows-a-whitespace-space-or-tab-beginning-a-comment-spaced-comment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requires-or-disallows-a-whitespace-space-or-tab-beginning-a-comment-spaced-comment"}},[s._v("#")]),s._v(" Requires or disallows a whitespace (space or tab) beginning a comment (spaced-comment)")]),s._v(" "),t("p",[s._v("Some style guides require or disallow a whitespace immediately after the initial "),t("code",[s._v("//")]),s._v(" or "),t("code",[s._v("/*")]),s._v(" of a comment.\nWhitespace after the "),t("code",[s._v("//")]),s._v(" or "),t("code",[s._v("/*")]),s._v(" makes it easier to read text in comments.\nOn the other hand, commenting out code is easier without having to put a whitespace right after the "),t("code",[s._v("//")]),s._v(" or "),t("code",[s._v("/*")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),t("p",[s._v("This rule will enforce consistency of spacing after the start of a comment "),t("code",[s._v("//")]),s._v(" or "),t("code",[s._v("/*")]),s._v(". It also provides several\nexceptions for various documentation styles.")]),s._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),t("p",[s._v("The rule takes two options.")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("The first is a string which be either "),t("code",[s._v('"always"')]),s._v(" or "),t("code",[s._v('"never"')]),s._v(". The default is "),t("code",[s._v('"always"')]),s._v(".")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("If "),t("code",[s._v('"always"')]),s._v(" then the "),t("code",[s._v("//")]),s._v(" or "),t("code",[s._v("/*")]),s._v(" must be followed by at least one whitespace.")])]),s._v(" "),t("li",[t("p",[s._v("If "),t("code",[s._v('"never"')]),s._v(" then there should be no whitespace following.")])])])]),s._v(" "),t("li",[t("p",[s._v("This rule can also take a 2nd option, an object with any of the following keys: "),t("code",[s._v('"exceptions"')]),s._v(" and "),t("code",[s._v('"markers"')]),s._v(".")]),s._v(" "),t("ul",[t("li",[s._v("The "),t("code",[s._v('"exceptions"')]),s._v(" value is an array of string patterns which are considered exceptions to the rule. The rule will not warn when the pattern starts from the beginning of the comment and repeats until the end of the line or "),t("code",[s._v("*/")]),s._v(" if the comment is a single line comment.\nPlease note that exceptions are ignored if the first argument is "),t("code",[s._v('"never"')]),s._v(".")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spaced-comment"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exceptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("ul",[t("li",[s._v("The "),t("code",[s._v('"markers"')]),s._v(" value is an array of string patterns which are considered markers for docblock-style comments,\nsuch as an additional "),t("code",[s._v("/")]),s._v(", used to denote documentation read by doxygen, vsdoc, etc. which must have additional characters.\nThe "),t("code",[s._v('"markers"')]),s._v(" array will apply regardless of the value of the first argument, e.g. "),t("code",[s._v('"always"')]),s._v(" or "),t("code",[s._v('"never"')]),s._v(".")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spaced-comment"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"markers"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])]),s._v(" "),t("p",[s._v("The difference between a marker and an exception is that a marker only appears at the beginning of the comment whereas\nexceptions can occur anywhere in the comment string.")]),s._v(" "),t("p",[s._v("You can also define separate exceptions and markers for block and line comments. The "),t("code",[s._v('"block"')]),s._v(" object can have an additional key "),t("code",[s._v('"balanced"')]),s._v(", a boolean that specifies if inline block comments should have balanced spacing. The default value is "),t("code",[s._v("false")]),s._v(".")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("If "),t("code",[s._v('"balanced": true')]),s._v(" and "),t("code",[s._v('"always"')]),s._v(" then the "),t("code",[s._v("/*")]),s._v(" must be followed by at least one whitespace, and the "),t("code",[s._v("*/")]),s._v(" must be preceded by at least one whitespace.")])]),s._v(" "),t("li",[t("p",[s._v("If "),t("code",[s._v('"balanced": true')]),s._v(" and "),t("code",[s._v('"never"')]),s._v(" then there should be no whitespace following "),t("code",[s._v("/*")]),s._v(" or preceding "),t("code",[s._v("*/")]),s._v(".")])]),s._v(" "),t("li",[t("p",[s._v("If "),t("code",[s._v('"balanced": false')]),s._v(" then balanced whitespace is not enforced.")])])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"spaced-comment"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"line"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"markers"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exceptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"block"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"markers"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exceptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"balanced"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h3",{attrs:{id:"always"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[s._v("#")]),s._v(" always")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule with the "),t("code",[s._v('"always"')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "always"]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//This is a comment with no whitespace at the beginning")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*This is a comment with no whitespace at the beginning */")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "block": { "balanced": true } }] */')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* This is a comment with whitespace at the beginning but not the end*/")]),s._v("\n")])])]),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule with the "),t("code",[s._v('"always"')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always"] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This is a comment with a whitespace at the beginning")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* This is a comment with a whitespace at the beginning */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * This is a comment with a whitespace at the beginning\n */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\nThis comment has a newline\n*/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always"] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n* I am jsdoc\n*/")]),s._v("\n")])])]),t("h3",{attrs:{id:"never"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[s._v("#")]),s._v(" never")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule with the "),t("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "never"]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// This is a comment with a whitespace at the beginning")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* This is a comment with a whitespace at the beginning */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* \\nThis is a comment with a whitespace at the beginning */")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "never", { "block": { "balanced": true } }]*/')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*This is a comment with whitespace at the end */")]),s._v("\n")])])]),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule with the "),t("code",[s._v('"never"')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "never"]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*This is a comment with no whitespace at the beginning */")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "never"]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n* I am jsdoc\n*/")]),s._v("\n")])])]),t("h3",{attrs:{id:"exceptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[s._v("#")]),s._v(" exceptions")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule with the "),t("code",[s._v('"always"')]),s._v(" option combined with "),t("code",[s._v('"exceptions"')]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "block": { "exceptions": ["-"] } }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--------------")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "exceptions": ["-", "+"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//------++++++++")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//------++++++++")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "exceptions": ["-", "+"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*------++++++++*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Comment block */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*------++++++++*/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "line": { "exceptions": ["-+"] } }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*-+-+-+-+-+-+-+*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*-+-+-+-+-+-+-+*/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "block": { "exceptions": ["*"] } }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/******** COMMENT *******/")]),s._v("\n")])])]),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule with the "),t("code",[s._v('"always"')]),s._v(" option combined with "),t("code",[s._v('"exceptions"')]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "exceptions": ["-"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--------------")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "line": { "exceptions": ["-"] } }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--------------")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "exceptions": ["*"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/****************\n * Comment block\n ****************/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "exceptions": ["-+"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//-+-+-+-+-+-+-+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//-+-+-+-+-+-+-+")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*-+-+-+-+-+-+-+*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*-+-+-+-+-+-+-+*/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "block": { "exceptions": ["-+"] } }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*-+-+-+-+-+-+-+*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Comment block")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*-+-+-+-+-+-+-+*/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "block": { "exceptions": ["*"] } }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/***************/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/********\nCOMMENT\n*******/")]),s._v("\n")])])]),t("h3",{attrs:{id:"markers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markers"}},[s._v("#")]),s._v(" markers")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule with the "),t("code",[s._v('"always"')]),s._v(" option combined with "),t("code",[s._v('"markers"')]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "markers": ["/"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("///This is a comment with a marker but without whitespace")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "always", { "block": { "markers": ["!"], "balanced": true } }]*/')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*! This is a comment with a marker but without whitespace at the end*/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "never", { "block": { "markers": ["!"], "balanced": true } }]*/')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*!This is a comment with a marker but with whitespace at the end */")]),s._v("\n")])])]),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule with the "),t("code",[s._v('"always"')]),s._v(" option combined with "),t("code",[s._v('"markers"')]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "markers": ["/"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// This is a comment with a marker")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint spaced-comment: ["error", "never", { "markers": ["!<"] }]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//!<This is a line comment with a marker")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*!<this is a block comment with a marker\nsubsequent lines are ignored\n*/")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint spaced-comment: ["error", "always", { "markers": ["global"] }] */')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*global ABC*/")]),s._v("\n")])])]),t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[s._v("#")]),s._v(" Related Rules")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/rules/eslint-recommended/spaced-line-comment.html"}},[s._v("spaced-line-comment")])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);