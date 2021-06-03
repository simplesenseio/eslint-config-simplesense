(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{397:function(t,e,r){"use strict";r.r(e);var s=r(9),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"import-first"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#import-first"}},[t._v("#")]),t._v(" import/first")]),t._v(" "),r("p",[t._v("This rule reports any imports that come after non-import\nstatements.")]),t._v(" "),r("h2",{attrs:{id:"rule-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foo "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some module-level initializer")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("initWith")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bar "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./bar'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- reported")]),t._v("\n")])])]),r("p",[t._v("Providing "),r("code",[t._v("absolute-first")]),t._v(" as an option will report any absolute imports (i.e.\npackages) that come after any relative imports:")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foo "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bar "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./bar'")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" _ "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- reported")]),t._v("\n")])])]),r("p",[t._v("If you really want import type ordering, check out "),r("RouterLink",{attrs:{to:"/rules/import/order.html"}},[r("code",[t._v("import/order")])]),t._v(".")],1),t._v(" "),r("p",[t._v("Notably, "),r("code",[t._v("import")]),t._v("s are hoisted, which means the imported modules will be evaluated\nbefore any of the statements interspersed between them. Keeping all "),r("code",[t._v("import")]),t._v("s together\nat the top of the file may prevent surprises resulting from this part of the spec.")]),t._v(" "),r("h3",{attrs:{id:"on-directives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on-directives"}},[t._v("#")]),t._v(" On directives")]),t._v(" "),r("p",[t._v("Directives are allowed as long as they occur strictly before any "),r("code",[t._v("import")]),t._v(" declarations,\nas follows:")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use super-mega-strict'")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" suchFoo "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lame-fake-module-name'")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no report here")]),t._v("\n")])])]),r("p",[t._v("A directive in this case is assumed to be a single statement that contains only\na literal string-valued expression.")]),t._v(" "),r("p",[r("code",[t._v("'use strict'")]),t._v(" would be a good example, except that "),r("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules are always in strict\nmode"),r("OutboundLink")],1),t._v(" so it would be surprising to see a "),r("code",[t._v("'use strict'")]),t._v(" sharing a file with "),r("code",[t._v("import")]),t._v("s and\n"),r("code",[t._v("export")]),t._v("s.")]),t._v(" "),r("p",[t._v("Given that, see "),r("a",{attrs:{href:"https://github.com/benmosher/eslint-plugin-import/issues/255",target:"_blank",rel:"noopener noreferrer"}},[t._v("#255"),r("OutboundLink")],1),t._v(" for the reasoning.")]),t._v(" "),r("h3",{attrs:{id:"with-fixer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#with-fixer"}},[t._v("#")]),t._v(" With Fixer")]),t._v(" "),r("p",[t._v("This rule contains a fixer to reorder in-body import to top, the following criteria applied:")]),t._v(" "),r("ol",[r("li",[t._v("Never re-order relative to each other, even if "),r("code",[t._v("absolute-first")]),t._v(" is set.")]),t._v(" "),r("li",[t._v("If an import creates an identifier, and that identifier is referenced at module level "),r("em",[t._v("before")]),t._v(" the import itself, that won't be re-ordered.")])]),t._v(" "),r("h2",{attrs:{id:"when-not-to-use-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),r("p",[t._v("If you don't mind imports being sprinkled throughout, you may not want to\nenable this rule.")]),t._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/rules/import/order.html"}},[r("code",[t._v("import/order")])]),t._v(": a major step up from "),r("code",[t._v("absolute-first")])],1),t._v(" "),r("li",[t._v("Issue "),r("a",{attrs:{href:"https://github.com/benmosher/eslint-plugin-import/issues/255",target:"_blank",rel:"noopener noreferrer"}},[t._v("#255"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);