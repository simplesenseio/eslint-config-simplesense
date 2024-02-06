(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{437:function(e,t,s){"use strict";s.r(t);var r=s(9),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"node-no-unsupported-features-es-syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-no-unsupported-features-es-syntax"}},[e._v("#")]),e._v(" node/no-unsupported-features/es-syntax")]),e._v(" "),t("blockquote",[t("p",[e._v("disallow unsupported ECMAScript syntax on the specified version")]),e._v(" "),t("ul",[t("li",[e._v("⭐️ This rule is included in "),t("code",[e._v("plugin:node/recommended")]),e._v(" preset.")])])]),e._v(" "),t("p",[e._v("ECMAScript standard is updating every two months.\nYou can check "),t("a",{attrs:{href:"https://node.green/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.green"),t("OutboundLink")],1),e._v(" to know which Node.js version supports each ECMAScript feature.")]),e._v(" "),t("p",[e._v("This rule reports unsupported ECMAScript syntax on the configured Node.js version as lint errors.\nEditor integrations of ESLint would be useful to know it in real-time.")]),e._v(" "),t("h2",{attrs:{id:"📖-rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("h3",{attrs:{id:"supported-ecmascript-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-ecmascript-features"}},[e._v("#")]),e._v(" Supported ECMAScript features")]),e._v(" "),t("p",[e._v("This rule supports ECMAScript 2019 and proposals that have been approved as Stage 4 by August 2019.\nSee also "),t("a",{attrs:{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("TC39 finished proposals"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Please configure your "),t("code",[e._v(".eslintrc")]),e._v(" file to succeed to succeed in parsing the syntax.\nFor example, set "),t("code",[e._v("2020")]),e._v(" to "),t("code",[e._v("parserOptions.ecmaVersion")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"configured-node-js-version-range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configured-node-js-version-range"}},[e._v("#")]),e._v(" Configured Node.js version range")]),e._v(" "),t("p",[e._v("This rule reads the "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),t("OutboundLink")],1),e._v(" field of "),t("code",[e._v("package.json")]),e._v(" to detect which Node.js versions your module is supporting.")]),e._v(" "),t("p",[e._v("I recommend the use of the "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),t("OutboundLink")],1),e._v(" field because it's the official way that indicates which Node.js versions your module is supporting.\nFor example of "),t("code",[e._v("package.json")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"your-module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"engines"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=8.0.0"')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("If you omit the "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),t("OutboundLink")],1),e._v(" field, this rule chooses "),t("code",[e._v(">=8.0.0")]),e._v(" as the configured Node.js version since "),t("code",[e._v("8")]),e._v(" is the minimum version the community is maintaining (see also "),t("a",{attrs:{href:"https://github.com/nodejs/Release#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Release Working Group"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node/no-unsupported-features/es-syntax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=8.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ignores"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h4",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),t("p",[e._v("As mentioned above, this rule reads the "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),t("OutboundLink")],1),e._v(" field of "),t("code",[e._v("package.json")]),e._v(".\nBut, you can overwrite the version by "),t("code",[e._v("version")]),e._v(" option.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("version")]),e._v(" option accepts "),t("a",{attrs:{href:"https://github.com/npm/node-semver#range-grammar",target:"_blank",rel:"noopener noreferrer"}},[e._v("the valid version range of "),t("code",[e._v("node-semver")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"ignores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignores"}},[e._v("#")]),e._v(" ignores")]),e._v(" "),t("p",[e._v("If you are using transpilers, maybe you want to ignore the warnings about some features.\nYou can use this "),t("code",[e._v("ignores")]),e._v(" option to ignore the given features.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v('"ignores"')]),e._v(" option accepts an array of the following strings.")]),e._v(" "),t("details",[t("p",[t("strong",[e._v("ES2020:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"bigint"')])]),e._v(" "),t("li",[t("code",[e._v('"dynamicImport"')])])]),e._v(" "),t("p",[t("strong",[e._v("ES2019:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"jsonSuperset"')])]),e._v(" "),t("li",[t("code",[e._v('"optionalCatchBinding"')])])]),e._v(" "),t("p",[t("strong",[e._v("ES2018:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"asyncIteration"')])]),e._v(" "),t("li",[t("code",[e._v('"malformedTemplateLiterals"')])]),e._v(" "),t("li",[t("code",[e._v('"regexpLookbehind"')])]),e._v(" "),t("li",[t("code",[e._v('"regexpNamedCaptureGroups"')])]),e._v(" "),t("li",[t("code",[e._v('"regexpS"')])]),e._v(" "),t("li",[t("code",[e._v('"regexpUnicodeProperties"')])]),e._v(" "),t("li",[t("code",[e._v('"restSpreadProperties"')])])]),e._v(" "),t("p",[t("strong",[e._v("ES2017:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"asyncFunctions"')])]),e._v(" "),t("li",[t("code",[e._v('"trailingCommasInFunctions"')])])]),e._v(" "),t("p",[t("strong",[e._v("ES2016:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"exponentialOperators"')])])]),e._v(" "),t("p",[t("strong",[e._v("ES2015:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"arrowFunctions"')])]),e._v(" "),t("li",[t("code",[e._v('"binaryNumericLiterals"')])]),e._v(" "),t("li",[t("code",[e._v('"blockScopedFunctions"')])]),e._v(" "),t("li",[t("code",[e._v('"blockScopedVariables"')])]),e._v(" "),t("li",[t("code",[e._v('"classes"')])]),e._v(" "),t("li",[t("code",[e._v('"computedProperties"')])]),e._v(" "),t("li",[t("code",[e._v('"defaultParameters"')])]),e._v(" "),t("li",[t("code",[e._v('"destructuring"')])]),e._v(" "),t("li",[t("code",[e._v('"forOfLoops"')])]),e._v(" "),t("li",[t("code",[e._v('"generators"')])]),e._v(" "),t("li",[t("code",[e._v('"modules"')])]),e._v(" "),t("li",[t("code",[e._v('"new.target"')])]),e._v(" "),t("li",[t("code",[e._v('"objectSuperProperties"')])]),e._v(" "),t("li",[t("code",[e._v('"octalNumericLiterals"')])]),e._v(" "),t("li",[t("code",[e._v('"propertyShorthands"')])]),e._v(" "),t("li",[t("code",[e._v('"regexpU"')])]),e._v(" "),t("li",[t("code",[e._v('"regexpY"')])]),e._v(" "),t("li",[t("code",[e._v('"restParameters"')])]),e._v(" "),t("li",[t("code",[e._v('"spreadElements"')])]),e._v(" "),t("li",[t("code",[e._v('"templateLiterals"')])]),e._v(" "),t("li",[t("code",[e._v('"unicodeCodePointEscapes"')])])])]),e._v(" "),t("h2",{attrs:{id:"🔎-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[e._v("#")]),e._v(" 🔎 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../../../lib/rules/no-unsupported-features/es-syntax.js"}},[e._v("Rule source")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../../../tests/lib/rules/no-unsupported-features/es-syntax.js"}},[e._v("Test source")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);