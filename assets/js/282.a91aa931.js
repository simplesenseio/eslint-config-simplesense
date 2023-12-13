(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{477:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-no-misleading-capturing-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-misleading-capturing-group"}},[e._v("#")]),e._v(" regexp/no-misleading-capturing-group")]),e._v(" "),t("p",[e._v("💼 This rule is enabled in the ✅ "),t("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),t("p",[e._v("💡 This rule is manually fixable by "),t("a",{attrs:{href:"https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions",target:"_blank",rel:"noopener noreferrer"}},[e._v("editor suggestions"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow capturing groups that do not behave as one would expect")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("This rule reports capturing groups that capture less text than their pattern might suggest.")]),e._v(" "),t("p",[e._v("E.g. in "),t("code",[e._v("/a+(a*)/")]),e._v(", "),t("code",[e._v("(a*)")]),e._v(" will "),t("strong",[e._v("always")]),e._v(" capture 0 characters because all "),t("code",[e._v("a")]),e._v("s are already consumed by "),t("code",[e._v("a+")]),e._v(". This is quite surprising behavior because "),t("code",[e._v("a*")]),e._v(" suggests that the capturing group captures as many "),t("code",[e._v("a")]),e._v("s as possible.")]),e._v(" "),t("p",[e._v("Misleading capturing groups in regex indicate either unnecessary code that can be removed or an error in the regex. Which one it is, depends on the intended behavior of the regex and cannot be determined by this rule.")]),e._v(" "),t("p",[e._v("E.g. if the above example is really supposed to capture 0 characters, then the regex should be changed to "),t("code",[e._v("/a+()/")]),e._v(" to make the intention explicit. Otherwise, then the parts of the regex surrounding "),t("code",[e._v("(a*)")]),e._v(" have to be rewritten.")]),e._v(" "),t("p",[e._v("This rule generally assumes that the regex behaves correctly, despite its misleading form, when suggesting fixes. Suggested fixes therefor remove the misleading elements "),t("strong",[e._v("without changing the behavior")]),e._v(" of the regex.")]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-misleading-capturing-group: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a+(b*)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a+(a*)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\w+(\\d*)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("^(a*).+")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/no-misleading-capturing-group"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"reportBacktrackingEnds"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[t("p",[t("code",[e._v("reportBacktrackingEnds")])]),e._v(" "),t("p",[e._v("This rule will report quantifiers at the end of capturing groups that might backtrack for certain strings.")]),e._v(" "),t("p",[e._v("E.g. when "),t("code",[e._v("/^(a*).+$/m")]),e._v(" is used to match the string "),t("code",[e._v('"aa"')]),e._v(", then "),t("code",[e._v("a*")]),e._v(" will capture both "),t("code",[e._v("a")]),e._v("s at first, but is then forced to give up the last "),t("code",[e._v("a")]),e._v(" to "),t("code",[e._v(".+")]),e._v(" to make the whole regex accept. So "),t("code",[e._v("(a*)")]),e._v(" only capture the first "),t("code",[e._v("a")]),e._v(". This is misleading because one would expect that "),t("code",[e._v("(a*)")]),e._v(" should capture all "),t("code",[e._v("a")]),e._v("s at the start of the string, but this is not the case.")]),e._v(" "),t("p",[e._v("Because this behavior might be intentional, some users might want to turn off this type of reporting.")])])]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v1.12.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-misleading-capturing-group.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-misleading-capturing-group.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);