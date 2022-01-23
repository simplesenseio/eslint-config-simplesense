(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{203:function(e,n,t){"use strict";t.r(n);var s=t(9),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"eslint-comments-disable-enable-pair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint-comments-disable-enable-pair"}},[e._v("#")]),e._v(" eslint-comments/disable-enable-pair")]),e._v(" "),t("blockquote",[t("p",[e._v("require a "),t("code",[e._v("eslint-enable")]),e._v(" comment for every "),t("code",[e._v("eslint-disable")]),e._v(" comment")])]),e._v(" "),t("ul",[t("li",[e._v("🌟 The "),t("code",[e._v('"extends": "plugin:eslint-comments/recommended"')]),e._v(" property in a configuration file enables this rule.")])]),e._v(" "),t("p",[t("code",[e._v("eslint-disable")]),e._v(" directive-comments disable ESLint rules in all lines preceded by the comment.\nIf you forget "),t("code",[e._v("eslint-enable")]),e._v(" directive-comment, you may overlook ESLint warnings unintentionally.")]),e._v(" "),t("p",[e._v("This rule warns "),t("code",[e._v("eslint-disable")]),e._v(" directive-comments if the "),t("code",[e._v("eslint-enable")]),e._v(" directive-comment for that does not exist.")]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" Rule Details")]),e._v(" "),t("p",[e._v("Examples of 👎 "),t("strong",[e._v("incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("eslint-playground",{attrs:{type:"bad",code:"/*eslint eslint-comments/disable-enable-pair: error */\n\n/*eslint-disable no-undef, no-unused-vars */\nvar foo = bar()\n"}}),e._v(" "),t("eslint-playground",{attrs:{type:"bad",code:"/*eslint eslint-comments/disable-enable-pair: error */\n\n/*eslint-disable no-undef, no-unused-vars */\nvar foo = bar()\n/*eslint-enable no-unused-vars */\n"}}),e._v(" "),t("p",[e._v("Examples of 👍 "),t("strong",[e._v("correct")]),e._v(" code for this rule:")]),e._v(" "),t("eslint-playground",{attrs:{type:"good",code:"/*eslint eslint-comments/disable-enable-pair: error */\n\n/*eslint-disable no-undef, no-unused-vars */\nvar foo = bar()\n/*eslint-enable no-undef, no-unused-vars */\n"}}),e._v(" "),t("eslint-playground",{attrs:{type:"good",code:"/*eslint eslint-comments/disable-enable-pair: error */\n\n/*eslint-disable no-undef, no-unused-vars */\nvar foo = bar()\n/*eslint-enable*/\n"}}),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("allowWholeFile")]),e._v(' option lets you allow disabling rules for the entire file while still catching "open" '),t("code",[e._v("eslint-disable")]),e._v(" directives in the middle of a file.")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"eslint-comments/disable-enable-pair"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"allowWholeFile"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Examples of 👎 "),t("strong",[e._v("incorrect")]),e._v(" code for this rule:")]),e._v(" "),t("eslint-playground",{attrs:{type:"bad",code:"/*eslint eslint-comments/disable-enable-pair: [error, {allowWholeFile: true}] */\n\n/*eslint-disable no-undef */\nvar foo = bar()\n/*eslint-disable no-unused-vars */\nvar fizz = buzz()\n"}}),e._v(" "),t("p",[e._v("Examples of 👍 "),t("strong",[e._v("correct")]),e._v(" code for this rule:")]),e._v(" "),t("eslint-playground",{attrs:{type:"good",code:"/*eslint eslint-comments/disable-enable-pair: [error, {allowWholeFile: true}] */\n\n/*eslint-disable no-undef */\nvar foo = bar()\n/*eslint-disable no-unused-vars */\nvar fizz = buzz()\n/*eslint-enable no-unused-vars */\n"}})],1)}),[],!1,null,null,null);n.default=a.exports}}]);