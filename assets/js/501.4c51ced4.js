(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{692:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"yml-block-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yml-block-mapping"}},[t._v("#")]),t._v(" yml/block-mapping")]),t._v(" "),a("blockquote",[a("p",[t._v("require or disallow block style mappings.")])]),t._v(" "),a("ul",[a("li",[t._v("⚙️ This rule is included in "),a("code",[t._v('"plugin:yml/standard"')]),t._v(".")]),t._v(" "),a("li",[t._v("🔧 The "),a("code",[t._v("--fix")]),t._v(" option on the "),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("command line"),a("OutboundLink")],1),t._v(" can automatically fix some of the problems reported by this rule.")])]),t._v(" "),a("h2",{attrs:{id:"rule-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),a("p",[t._v("This rule aims to use consistent style of block or flow styles.")]),t._v(" "),a("eslint-code-block",{attrs:{fix:""}},[a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eslint yml/block-mapping: 'error'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ✓ GOOD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ✗ BAD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yml/block-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" error\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" always "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# or "never"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yml/block-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" error\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("singleline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# or "never" or "ignore"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("multiline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# or "never" or "ignore"')]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("Styles")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"always"')]),t._v(" ... Enforce the use of block style mappings.")]),t._v(" "),a("li",[a("code",[t._v('"never"')]),t._v(" ... Disallow the use of block style mappings.")]),t._v(" "),a("li",[a("code",[t._v('"ignore"')]),t._v(" ... Does not apply consistent style.")])])]),t._v(" "),a("li",[a("p",[t._v("Properties")]),t._v(" "),a("ul",[a("li",[t._v("As a string ... Specify the style you want to apply to mappings.")]),t._v(" "),a("li",[a("code",[t._v('"singleline"')]),t._v(" ... Specify the style you want to apply when the mapping is single-line. default "),a("code",[t._v('"ignore"')])]),t._v(" "),a("li",[a("code",[t._v('"multiline"')]),t._v(" ... Specify the style you want to apply when the mapping is multi-line. default "),a("code",[t._v('"always"')])])])])]),t._v(" "),a("h3",{attrs:{id:"always"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#always"}},[t._v("#")]),t._v(" "),a("code",[t._v('"always"')])]),t._v(" "),a("eslint-code-block",{attrs:{fix:""}},[a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eslint yml/block-mapping: ['error', 'always']")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ✓ GOOD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" d\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ✗ BAD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"never"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#never"}},[t._v("#")]),t._v(" "),a("code",[t._v('"never"')])]),t._v(" "),a("eslint-code-block",{attrs:{fix:""}},[a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eslint yml/block-mapping: ['error', 'never']")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ✓ GOOD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ✗ BAD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" b\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" d\n")])])])]),t._v(" "),a("h2",{attrs:{id:"related-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-rules"}},[t._v("#")]),t._v(" 👫 Related rules")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/rules/yml/block-sequence.html"}},[t._v("yml/block-sequence")])],1)]),t._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" 🚀 Version")]),t._v(" "),a("p",[t._v("This rule was introduced in eslint-plugin-yml v0.1.0")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/block-mapping.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/block-mapping.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/block-mapping",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test fixture sources"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);