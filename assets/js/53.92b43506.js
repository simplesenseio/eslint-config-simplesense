(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{247:function(e,t,s){"use strict";s.r(t);var n=s(9),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("This rule was "),t("strong",[e._v("deprecated")]),e._v(" in ESLint v8.53.0. Please use the "),t("a",{attrs:{href:"https://eslint.style/rules/js/eol-last",target:"_blank",rel:"noopener noreferrer"}},[e._v("corresponding rule"),t("OutboundLink")],1),e._v(" in "),t("a",{attrs:{href:"https://eslint.style/packages/js",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("@stylistic/eslint-plugin-js")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Trailing newlines in non-empty files are a common UNIX idiom. Benefits of\ntrailing newlines include the ability to concatenate or append to files as well\nas output files to the terminal without interfering with shell prompts.")]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" Rule Details")]),e._v(" "),t("p",[e._v("This rule enforces at least one newline (or absence thereof) at the end\nof non-empty files.")]),e._v(" "),t("p",[e._v("Prior to v0.16.0 this rule also enforced that there was only a single line at\nthe end of the file. If you still want this behavior, consider enabling\n"),t("a",{attrs:{href:"no-multiple-empty-lines"}},[e._v("no-multiple-empty-lines")]),e._v(" with "),t("code",[e._v("maxEOF")]),e._v(" and/or\n"),t("a",{attrs:{href:"no-trailing-spaces"}},[e._v("no-trailing-spaces")]),e._v(".")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("p",[e._v("::: incorrect")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint eol-last: ["error", "always"]*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("doSomething")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v(":::")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("correct")]),e._v(" code for this rule:")]),e._v(" "),t("p",[e._v("::: correct")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint eol-last: ["error", "always"]*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("doSomething")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),t("p",[e._v(":::")]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("This rule has a string option:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"always"')]),e._v(" (default) enforces that files end with a newline (LF)")]),e._v(" "),t("li",[t("code",[e._v('"never"')]),e._v(" enforces that files do not end with a newline")]),e._v(" "),t("li",[t("code",[e._v('"unix"')]),e._v(' (deprecated) is identical to "always"')]),e._v(" "),t("li",[t("code",[e._v('"windows"')]),e._v(' (deprecated) is identical to "always", but will use a CRLF character when autofixing')])]),e._v(" "),t("p",[t("strong",[e._v("Deprecated:")]),e._v(" The options "),t("code",[e._v('"unix"')]),e._v(" and "),t("code",[e._v('"windows"')]),e._v(" are deprecated. If you need to enforce a specific linebreak style, use this rule in conjunction with "),t("code",[e._v("linebreak-style")]),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);