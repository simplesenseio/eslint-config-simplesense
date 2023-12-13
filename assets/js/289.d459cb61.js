(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{485:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-no-super-linear-backtracking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-super-linear-backtracking"}},[e._v("#")]),e._v(" regexp/no-super-linear-backtracking")]),e._v(" "),t("p",[e._v("💼 This rule is enabled in the ✅ "),t("code",[e._v("plugin:regexp/recommended")]),e._v(" config.")]),e._v(" "),t("p",[e._v("🔧 This rule is automatically fixable by the "),t("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("--fix")]),e._v(" CLI option"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow exponential and polynomial backtracking")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("This rule reports cases of exponential and polynomial backtracking.")]),e._v(" "),t("p",[e._v("These types of backtracking almost always cause an exponential or polynomial worst-case runtime. This super-linear worst-case runtime can be exploited by attackers in what is called "),t("a",{attrs:{href:"https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regular expression Denial of Service - ReDoS"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("eslint-code-block",{attrs:{fix:""}},[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/no-super-linear-backtracking: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a*b+a*$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:a+)?")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:a+)+$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a*b?a*$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(?:a|b|c+)*$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// not all cases can automatically be fixed")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("\\s*(.*?)(?=:)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v(".+?(?=\\s*=)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),t("h3",{attrs:{id:"limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),t("p",[e._v("The rule only implements a very simplistic detection method and can only detect very simple cases of super-linear backtracking right now.")]),e._v(" "),t("p",[e._v("While the detection will improve in the future, this rule will never be able to perfectly detect all cases super-linear backtracking.")]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"regexp/no-super-linear-backtracking"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"report"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"certain"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h3",{attrs:{id:"report"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#report"}},[e._v("#")]),e._v(" "),t("code",[e._v("report")])]),e._v(" "),t("p",[e._v("Every input string that exploits super-linear worst-case runtime can be separated into 3 parts:")]),e._v(" "),t("ol",[t("li",[e._v("A prefix to leads to exploitable part of the regex.")]),e._v(" "),t("li",[e._v("A non-empty string that will be repeated to exploit the ambiguity.")]),e._v(" "),t("li",[e._v("A rejecting suffix that forces the regex engine to backtrack.")])]),e._v(" "),t("p",[e._v("For some regexes it is not possible to find a rejecting suffix even though the regex contains exploitable ambiguity (e.g. "),t("code",[e._v("/(?:a+)+/")]),e._v("). These regexes are safe as long as they are used as is. However, regexes can also be used as building blocks to create more complex regexes. In this case, the ambiguity might cause super-linear backtracking in the composite regex.")]),e._v(" "),t("p",[e._v("These options control whether ambiguity that might cause super-linear backtracking will be reported.")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v('report: "certain"')]),e._v("  ("),t("em",[e._v("default")]),e._v(")")]),e._v(" "),t("p",[e._v("Only certain cases of super-linear backtracking will be reported.")]),e._v(" "),t("p",[e._v("This means that ambiguity will only be reported if this rule can prove that there exists a rejecting suffix.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v('report: "potential"')])]),e._v(" "),t("p",[e._v("All certain and potential cases of super-linear backtracking will be reported.")]),e._v(" "),t("p",[e._v("Potential cases are ones where a rejecting might be possible. Whether the reported potential cases are false positives or not has to be decided by the developer.")])])]),e._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" 📚 Further reading")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regular expression Denial of Service - ReDoS"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/RunDevelopment/scslre",target:"_blank",rel:"noopener noreferrer"}},[e._v("scslre"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.13.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-super-linear-backtracking.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-super-linear-backtracking.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);