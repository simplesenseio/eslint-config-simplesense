(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{323:function(s,e,t){"use strict";t.r(e);var a=t(9),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"no-trailing-spaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-trailing-spaces"}},[s._v("#")]),s._v(" no-trailing-spaces")]),s._v(" "),t("p",[s._v("Disallows trailing whitespace at the end of lines.")]),s._v(" "),t("p",[s._v("Sometimes in the course of editing files, you can end up with extra whitespace at the end of lines. These whitespace differences can be picked up by source control systems and flagged as diffs, causing frustration for developers. While this extra whitespace causes no functional issues, many code conventions require that trailing spaces be removed before check-in.")]),s._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),t("p",[s._v("This rule disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines.")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-trailing-spaces: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//•••••")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" baz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//••")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//•••••")]),s._v("\n")])])]),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-trailing-spaces: "error"*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" baz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),t("p",[s._v("This rule has an object option:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('"skipBlankLines": false')]),s._v(" (default) disallows trailing whitespace on empty lines")]),s._v(" "),t("li",[t("code",[s._v('"skipBlankLines": true')]),s._v(" allows trailing whitespace on empty lines")]),s._v(" "),t("li",[t("code",[s._v('"ignoreComments": false')]),s._v(" (default) disallows trailing whitespace in comment blocks")]),s._v(" "),t("li",[t("code",[s._v('"ignoreComments": true')]),s._v(" allows trailing whitespace in comment blocks")])]),s._v(" "),t("h3",{attrs:{id:"skipblanklines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skipblanklines"}},[s._v("#")]),s._v(" skipBlankLines")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule with the "),t("code",[s._v('{ "skipBlankLines": true }')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" baz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//•••••")]),s._v("\n")])])]),t("h3",{attrs:{id:"ignorecomments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignorecomments"}},[s._v("#")]),s._v(" ignoreComments")]),s._v(" "),t("p",[s._v("Examples of "),t("strong",[s._v("correct")]),s._v(" code for this rule with the "),t("code",[s._v('{ "ignoreComments": true }')]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*eslint no-trailing-spaces: ["error", { "ignoreComments": true }]*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//foo•")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//•••••")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n *•baz\n *••\n *•bar\n */")]),s._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);