(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{300:function(s,t,e){"use strict";e.r(t);var a=e(9),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"disallow-multiple-empty-lines-no-multiple-empty-lines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disallow-multiple-empty-lines-no-multiple-empty-lines"}},[s._v("#")]),s._v(" disallow multiple empty lines (no-multiple-empty-lines)")]),s._v(" "),e("p",[s._v("Some developers prefer to have multiple blank lines removed, while others feel that it helps improve readability. Whitespace is useful for separating logical sections of code, but excess whitespace takes up more of the screen.")]),s._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),e("p",[s._v("This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.")]),s._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),e("p",[s._v("This rule has an object option:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v('"max"')]),s._v(" (default: "),e("code",[s._v("2")]),s._v(") enforces a maximum number of consecutive empty lines.")]),s._v(" "),e("li",[e("code",[s._v('"maxEOF"')]),s._v(" enforces a maximum number of consecutive empty lines at the end of files.")]),s._v(" "),e("li",[e("code",[s._v('"maxBOF"')]),s._v(" enforces a maximum number of consecutive empty lines at the beginning of files.")])]),s._v(" "),e("h3",{attrs:{id:"max"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#max"}},[s._v("#")]),s._v(" max")]),s._v(" "),e("p",[s._v("Examples of "),e("strong",[s._v("incorrect")]),s._v(" code for this rule with the default "),e("code",[s._v('{ "max": 2 }')]),s._v(" option:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: "error"*/')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("Examples of "),e("strong",[s._v("correct")]),s._v(" code for this rule with the default "),e("code",[s._v('{ "max": 2 }')]),s._v(" option:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: "error"*/')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h3",{attrs:{id:"maxeof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxeof"}},[s._v("#")]),s._v(" maxEOF")]),s._v(" "),e("p",[s._v("Examples of "),e("strong",[s._v("incorrect")]),s._v(" code for this rule with the "),e("code",[s._v("{ max: 2, maxEOF: 0 }")]),s._v(" options:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 0 }]*/')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n")])])]),e("p",[s._v("Examples of "),e("strong",[s._v("correct")]),s._v(" code for this rule with the "),e("code",[s._v("{ max: 2, maxEOF: 0 }")]),s._v(" options:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 0 }]*/')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[e("strong",[s._v("Note")]),s._v(": Although this ensures zero empty lines at the EOF, most editors will still show one empty line at the end if the file ends with a line break, as illustrated below. There is no empty line at the end of a file after the last "),e("code",[s._v("\\n")]),s._v(", although editors may show an additional line. A true additional line would be represented by "),e("code",[s._v("\\n\\n")]),s._v(".")]),s._v(" "),e("p",[e("strong",[s._v("Incorrect")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 0 }]*/')]),s._v("⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    ⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("    ⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("    ⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("    ⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n")])])]),e("p",[e("strong",[s._v("Correct")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 0 }]*/')]),s._v("⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    ⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("    ⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("    ⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("⏎\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n")])])]),e("h3",{attrs:{id:"maxbof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxbof"}},[s._v("#")]),s._v(" maxBOF")]),s._v(" "),e("p",[s._v("Examples of "),e("strong",[s._v("incorrect")]),s._v(" code for this rule with the "),e("code",[s._v("{ max: 2, maxBOF: 1 }")]),s._v(" options:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1 }]*/')]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("Examples of "),e("strong",[s._v("correct")]),s._v(" code for this rule with the "),e("code",[s._v("{ max: 2, maxBOF: 1 }")]),s._v(" options:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxBOF": 1}]*/')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[s._v("#")]),s._v(" When Not To Use It")]),s._v(" "),e("p",[s._v("If you do not care about extra blank lines, turn this off.")])])}),[],!1,null,null,null);t.default=r.exports}}]);