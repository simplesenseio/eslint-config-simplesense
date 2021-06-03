(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{419:function(e,t,s){"use strict";s.r(t);var r=s(9),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"node-no-unsupported-features-es-builtins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-no-unsupported-features-es-builtins"}},[e._v("#")]),e._v(" node/no-unsupported-features/es-builtins")]),e._v(" "),s("blockquote",[s("p",[e._v("disallow unsupported ECMAScript built-ins on the specified version")]),e._v(" "),s("ul",[s("li",[e._v("⭐️ This rule is included in "),s("code",[e._v("plugin:node/recommended")]),e._v(" preset.")])])]),e._v(" "),s("p",[e._v("ECMAScript standard is updating every two months.\nYou can check "),s("a",{attrs:{href:"https://node.green/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.green"),s("OutboundLink")],1),e._v(" to know which Node.js version supports each ECMAScript feature.")]),e._v(" "),s("p",[e._v("This rule reports unsupported ECMAScript built-in variables on the configured Node.js version as lint errors.\nEditor integrations of ESLint would be useful to know it in real-time.")]),e._v(" "),s("h2",{attrs:{id:"📖-rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),s("h3",{attrs:{id:"supported-ecmascript-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-ecmascript-features"}},[e._v("#")]),e._v(" Supported ECMAScript features")]),e._v(" "),s("p",[e._v("This rule supports ECMAScript 2019 and proposals that have been approved as Stage 4 by August 2019.\nSee also "),s("a",{attrs:{href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("TC39 finished proposals"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"configured-node-js-version-range"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configured-node-js-version-range"}},[e._v("#")]),e._v(" Configured Node.js version range")]),e._v(" "),s("p",[e._v("This rule reads the "),s("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),s("OutboundLink")],1),e._v(" field of "),s("code",[e._v("package.json")]),e._v(" to detect which Node.js versions your module is supporting.")]),e._v(" "),s("p",[e._v("I recommend the use of the "),s("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),s("OutboundLink")],1),e._v(" field because it's the official way that indicates which Node.js versions your module is supporting.\nFor example of "),s("code",[e._v("package.json")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"your-module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"engines"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=8.0.0"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("If you omit the "),s("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),s("OutboundLink")],1),e._v(" field, this rule chooses "),s("code",[e._v(">=8.0.0")]),e._v(" as the configured Node.js version since "),s("code",[e._v("8")]),e._v(" is the minimum version the community is maintaining (see also "),s("a",{attrs:{href:"https://github.com/nodejs/Release#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Release Working Group"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node/no-unsupported-features/es-builtins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=8.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ignores"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h4",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),s("p",[e._v("As mentioned above, this rule reads the "),s("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),s("OutboundLink")],1),e._v(" field of "),s("code",[e._v("package.json")]),e._v(".\nBut, you can overwrite the version by "),s("code",[e._v("version")]),e._v(" option.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("version")]),e._v(" option accepts "),s("a",{attrs:{href:"https://github.com/npm/node-semver#range-grammar",target:"_blank",rel:"noopener noreferrer"}},[e._v("the valid version range of "),s("code",[e._v("node-semver")]),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"ignores"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignores"}},[e._v("#")]),e._v(" ignores")]),e._v(" "),s("p",[e._v("If you are using transpilers, maybe you want to ignore the warnings about some features.\nYou can use this "),s("code",[e._v("ignores")]),e._v(" option to ignore the given features.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v('"ignores"')]),e._v(" option accepts an array of the following strings.")]),e._v(" "),s("details",[s("p",[s("strong",[e._v("ES2020:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v('"BigInt"')])]),e._v(" "),s("li",[s("code",[e._v('"BigInt64Array"')])]),e._v(" "),s("li",[s("code",[e._v('"BigUint64Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Promise.allSettled"')])]),e._v(" "),s("li",[s("code",[e._v('"globalThis"')])])]),e._v(" "),s("p",[s("strong",[e._v("ES2019:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v('"Object.fromEntries"')])])]),e._v(" "),s("p",[s("strong",[e._v("ES2017:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v('"Atomics"')])]),e._v(" "),s("li",[s("code",[e._v('"Object.values"')])]),e._v(" "),s("li",[s("code",[e._v('"Object.entries"')])]),e._v(" "),s("li",[s("code",[e._v('"Object.getOwnPropertyDescriptors"')])]),e._v(" "),s("li",[s("code",[e._v('"SharedArrayBuffer"')])])]),e._v(" "),s("p",[s("strong",[e._v("ES2015:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v('"Array.from"')])]),e._v(" "),s("li",[s("code",[e._v('"Array.of"')])]),e._v(" "),s("li",[s("code",[e._v('"Map"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.acosh"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.asinh"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.atanh"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.cbrt"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.clz32"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.cosh"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.expm1"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.fround"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.hypot"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.imul"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.log10"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.log1p"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.log2"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.sign"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.sinh"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.tanh"')])]),e._v(" "),s("li",[s("code",[e._v('"Math.trunc"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.EPSILON"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.isFinite"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.isInteger"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.isNaN"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.isSafeInteger"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.MAX_SAFE_INTEGER"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.MIN_SAFE_INTEGER"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.parseFloat"')])]),e._v(" "),s("li",[s("code",[e._v('"Number.parseInt"')])]),e._v(" "),s("li",[s("code",[e._v('"Object.assign"')])]),e._v(" "),s("li",[s("code",[e._v('"Object.getOwnPropertySymbols"')])]),e._v(" "),s("li",[s("code",[e._v('"Object.is"')])]),e._v(" "),s("li",[s("code",[e._v('"Object.setPrototypeOf"')])]),e._v(" "),s("li",[s("code",[e._v('"Promise"')])]),e._v(" "),s("li",[s("code",[e._v('"Proxy"')])]),e._v(" "),s("li",[s("code",[e._v('"Reflect"')])]),e._v(" "),s("li",[s("code",[e._v('"Set"')])]),e._v(" "),s("li",[s("code",[e._v('"String.fromCodePoint"')])]),e._v(" "),s("li",[s("code",[e._v('"String.raw"')])]),e._v(" "),s("li",[s("code",[e._v('"Symbol"')])]),e._v(" "),s("li",[s("code",[e._v('"Int8Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Uint8Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Uint8ClampedArray"')])]),e._v(" "),s("li",[s("code",[e._v('"Int16Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Uint16Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Int32Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Uint32Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Float32Array"')])]),e._v(" "),s("li",[s("code",[e._v('"Float64Array"')])]),e._v(" "),s("li",[s("code",[e._v('"DataView"')])]),e._v(" "),s("li",[s("code",[e._v('"WeakMap"')])]),e._v(" "),s("li",[s("code",[e._v('"WeakSet"')])])])]),e._v(" "),s("h3",{attrs:{id:"known-limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations"}},[e._v("#")]),e._v(" Known limitations")]),e._v(" "),s("p",[e._v("This rule cannot find non-static things.\nFor example:")]),e._v(" "),s("ul",[s("li",[e._v("New properties and methods of instances.")]),e._v(" "),s("li",[e._v("New parameters of functions.")]),e._v(" "),s("li",[e._v("New "),s("code",[e._v("options")]),e._v(" properties of function parameters.")]),e._v(" "),s("li",[e._v("New events.")])]),e._v(" "),s("h2",{attrs:{id:"🔎-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[e._v("#")]),e._v(" 🔎 Implementation")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"../../../lib/rules/no-unsupported-features/es-builtins.js"}},[e._v("Rule source")])]),e._v(" "),s("li",[s("a",{attrs:{href:"../../../tests/lib/rules/no-unsupported-features/es-builtins.js"}},[e._v("Test source")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);