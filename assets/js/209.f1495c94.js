(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{396:function(s,e,t){"use strict";t.r(e);var a=t(9),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"import-extensions-ensure-consistent-use-of-file-extension-within-the-import-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-extensions-ensure-consistent-use-of-file-extension-within-the-import-path"}},[s._v("#")]),s._v(" import/extensions - Ensure consistent use of file extension within the import path")]),s._v(" "),t("p",[s._v("Some file resolve algorithms allow you to omit the file extension within the import source path. For example the "),t("code",[s._v("node")]),s._v(" resolver can resolve "),t("code",[s._v("./foo/bar")]),s._v(" to the absolute path "),t("code",[s._v("/User/someone/foo/bar.js")]),s._v(" because the "),t("code",[s._v(".js")]),s._v(" extension is resolved automatically by default. Depending on the resolver you can configure more extensions to get resolved automatically.")]),s._v(" "),t("p",[s._v("In order to provide a consistent use of file extensions across your code base, this rule can enforce or disallow the use of certain file extensions.")]),s._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),t("p",[s._v("This rule either takes one string option, one object option, or a string and an object option. If it is the string "),t("code",[s._v('"never"')]),s._v(" (the default value), then the rule forbids the use for any extension. If it is the string "),t("code",[s._v('"always"')]),s._v(", then the rule enforces the use of extensions for all import statements. If it is the string "),t("code",[s._v('"ignorePackages"')]),s._v(", then the rule enforces the use of extensions for all import statements except package imports.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"import/extensions": [<severity>, "never" | "always" | "ignorePackages"]\n')])])]),t("p",[s._v("By providing an object you can configure each extension separately.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"import/extensions": [<severity>, {\n  <extension>: "never" | "always" | "ignorePackages"\n}]\n')])])]),t("p",[s._v("For example "),t("code",[s._v('{ "js": "always", "json": "never" }')]),s._v(" would always enforce the use of the "),t("code",[s._v(".js")]),s._v(" extension but never allow the use of the "),t("code",[s._v(".json")]),s._v(" extension.")]),s._v(" "),t("p",[s._v("By providing both a string and an object, the string will set the default setting for all extensions, and the object can be used to set granular overrides for specific extensions.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"import/extensions": [\n  <severity>,\n  "never" | "always" | "ignorePackages",\n  {\n    <extension>: "never" | "always" | "ignorePackages"\n  }\n]\n')])])]),t("p",[s._v("For example, "),t("code",[s._v('["error", "never", { "svg": "always" }]')]),s._v(' would require that all extensions are omitted, except for "svg".')]),s._v(" "),t("p",[t("code",[s._v("ignorePackages")]),s._v(" can be set as a separate boolean option like this:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"import/extensions": [\n  <severity>,\n  "never" | "always" | "ignorePackages",\n  {\n    ignorePackages: true | false,\n    pattern: {\n      <extension>: "never" | "always" | "ignorePackages"\n    }\n  }\n]\n')])])]),t("p",[s._v("In that case, if you still want to specify extensions, you can do so inside the "),t("strong",[s._v("pattern")]),s._v(" property.\nDefault value of "),t("code",[s._v("ignorePackages")]),s._v(" is "),t("code",[s._v("false")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"exception"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exception"}},[s._v("#")]),s._v(" Exception")]),s._v(" "),t("p",[s._v("When disallowing the use of certain extensions this rule makes an exception and allows the use of extension when the file would not be resolvable without extension.")]),s._v(" "),t("p",[s._v("For example, given the following folder structure:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├── foo\n│   ├── bar.js\n│   ├── bar.json\n")])])]),t("p",[s._v("and this import statement:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo/bar.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("then the extension can’t be omitted because it would then resolve to "),t("code",[s._v("./foo/bar.js")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("p",[s._v('The following patterns are considered problems when configuration set to "never":')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Component "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Component.jsx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" express "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v('The following patterns are not considered problems when configuration set to "never":')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Component "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Component'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" express "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express/index'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v('The following patterns are considered problems when configuration set to "always":')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Component "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Component'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" express "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v('The following patterns are not considered problems when configuration set to "always":')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Component "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Component.jsx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" express "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v('The following patterns are considered problems when configuration set to "ignorePackages":')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Component "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Component'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v('The following patterns are not considered problems when configuration set to "ignorePackages":')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Component "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Component.jsx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" express "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("p",[s._v("The following patterns are not considered problems when configuration set to "),t("code",[s._v("['error', 'always', {ignorePackages: true} ]")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Component "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./Component.jsx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" baz "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo/baz.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" express "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"when-not-to-use-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[s._v("#")]),s._v(" When Not To Use It")]),s._v(" "),t("p",[s._v("If you are not concerned about a consistent usage of file extension.")])])}),[],!1,null,null,null);e.default=n.exports}}]);