(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{677:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"yml-no-irregular-whitespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yml-no-irregular-whitespace"}},[e._v("#")]),e._v(" yml/no-irregular-whitespace")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow irregular whitespace")])]),e._v(" "),t("ul",[t("li",[e._v("⚙️ This rule is included in "),t("code",[e._v('"plugin:yml/recommended"')]),e._v(" and "),t("code",[e._v('"plugin:yml/standard"')]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[t("code",[e._v("yml/no-irregular-whitespace")]),e._v(" rule is aimed at catching invalid whitespace that is not a normal tab and space. Some of these characters may cause issues in YAML parsers and others will be a debugging issue to spot.\n"),t("code",[e._v("yml/no-irregular-whitespace")]),e._v(" rule is the similar rule as core "),t("a",{attrs:{href:"https://eslint.org/docs/rules/no-irregular-whitespace",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-irregular-whitespace"),t("OutboundLink")],1),e._v(" rule but it applies to the source code in YAML.")]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# eslint yml/no-irregular-whitespace: 'error'")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ✓ GOOD")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" b\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ✗ BAD")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("c")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \vd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  ^ LINE TABULATION (U+000B)")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("yml/no-irregular-whitespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" error\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("skipQuotedScalars")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("skipComments")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n")])])]),t("ul",[t("li",[t("code",[e._v("skipQuotedScalars")]),e._v(" ... if "),t("code",[e._v("true")]),e._v(", allows any whitespace characters in quoted scalars. default "),t("code",[e._v("true")])]),e._v(" "),t("li",[t("code",[e._v("skipComments")]),e._v(" ... if "),t("code",[e._v("true")]),e._v(", allows any whitespace characters in comments. default "),t("code",[e._v("false")])])]),e._v(" "),t("h3",{attrs:{id:"skipquotedscalars-true-default"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skipquotedscalars-true-default"}},[e._v("#")]),e._v(" "),t("code",[e._v('"skipQuotedScalars": true')]),e._v(" (default)")]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# eslint yml/no-irregular-whitespace: [error, {skipQuotedScalars: true}]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ✓ GOOD")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\vfoo'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  ^ LINE TABULATION (U+000B)")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\vbar"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  ^ LINE TABULATION (U+000B)")]),e._v("\n")])])])]),e._v(" "),t("h3",{attrs:{id:"skipquotedscalars-false"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skipquotedscalars-false"}},[e._v("#")]),e._v(" "),t("code",[e._v('"skipQuotedScalars": false')])]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# eslint yml/no-irregular-whitespace: [error, {skipQuotedScalars: false}]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ✗ BAD")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\vfoo'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  ^ LINE TABULATION (U+000B)")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\vbar"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  ^ LINE TABULATION (U+000B)")]),e._v("\n")])])])]),e._v(" "),t("h3",{attrs:{id:"skipcomments-true"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skipcomments-true"}},[e._v("#")]),e._v(" "),t("code",[e._v('"skipComments": true')])]),e._v(" "),t("eslint-code-block",[t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# eslint yml/no-irregular-whitespace: [error, {skipComments: true}]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ✓ GOOD")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# [\v]< LINE TABULATION (U+000B)")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"related-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[e._v("#")]),e._v(" 👫 Related rules")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://eslint.org/docs/rules/no-irregular-whitespace",target:"_blank",rel:"noopener noreferrer"}},[e._v("no-irregular-whitespace"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-yml v0.1.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/no-irregular-whitespace.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/no-irregular-whitespace.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/no-irregular-whitespace",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test fixture sources"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("sup",[e._v("Taken with ❤️ "),t("a",{attrs:{href:"https://eslint.org/docs/rules/no-irregular-whitespace",target:"_blank",rel:"noopener noreferrer"}},[e._v("from ESLint core"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);