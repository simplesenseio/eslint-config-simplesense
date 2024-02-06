(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{316:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This rule was "),e("strong",[t._v("deprecated")]),t._v(" in ESLint v8.53.0. Please use the "),e("a",{attrs:{href:"https://eslint.style/rules/js/no-multiple-empty-lines",target:"_blank",rel:"noopener noreferrer"}},[t._v("corresponding rule"),e("OutboundLink")],1),t._v(" in "),e("a",{attrs:{href:"https://eslint.style/packages/js",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("@stylistic/eslint-plugin-js")]),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Some developers prefer to have multiple blank lines removed, while others feel that it helps improve readability. Whitespace is useful for separating logical sections of code, but excess whitespace takes up more of the screen.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("This rule has an object option:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"max"')]),t._v(" (default: "),e("code",[t._v("2")]),t._v(") enforces a maximum number of consecutive empty lines.")]),t._v(" "),e("li",[e("code",[t._v('"maxEOF"')]),t._v(" enforces a maximum number of consecutive empty lines at the end of files.")]),t._v(" "),e("li",[e("code",[t._v('"maxBOF"')]),t._v(" enforces a maximum number of consecutive empty lines at the beginning of files.")])]),t._v(" "),e("h3",{attrs:{id:"max"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max"}},[t._v("#")]),t._v(" max")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),e("code",[t._v('{ "max": 2 }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the default "),e("code",[t._v('{ "max": 2 }')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: "error"*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"maxeof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxeof"}},[t._v("#")]),t._v(" maxEOF")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),e("code",[t._v("{ max: 2, maxEOF: 0 }")]),t._v(" options:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 0 }]*/')]),t._v("⏎\n⏎\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("⏎\n⏎\n⏎\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("⏎\n⏎\n\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v("{ max: 2, maxEOF: 0 }")]),t._v(" options:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 0 }]*/')]),t._v("⏎\n⏎\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("⏎\n⏎\n⏎\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": Although this ensures zero empty lines at the EOF, most editors will still show one empty line at the end if the file ends with a line break, as illustrated below. There is no empty line at the end of a file after the last "),e("code",[t._v("\\n")]),t._v(", although editors may show an additional line. A true additional line would be represented by "),e("code",[t._v("\\n\\n")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Correct")]),t._v(":")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 0 }]*/')]),t._v("⏎\n⏎\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("⏎\n⏎\n⏎\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("⏎\n\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"maxbof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxbof"}},[t._v("#")]),t._v(" maxBOF")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),e("code",[t._v("{ max: 2, maxBOF: 1 }")]),t._v(" options:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1 }]*/')]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v("{ max: 2, maxBOF: 1 }")]),t._v(" options:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1}]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1}]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you do not care about extra blank lines, turn this off.")])])}),[],!1,null,null,null);e.default=r.exports}}]);