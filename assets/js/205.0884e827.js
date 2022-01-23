(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{395:function(t,s,e){"use strict";e.r(s);var a=e(9),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"import-exports-last"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-exports-last"}},[t._v("#")]),t._v(" import/exports-last")]),t._v(" "),e("p",[t._v("This rule enforces that all exports are declared at the bottom of the file. This rule will report any export declarations that comes before any non-export statements.")]),t._v(" "),e("h2",{attrs:{id:"this-will-be-reported"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#this-will-be-reported"}},[t._v("#")]),t._v(" This will be reported")]),t._v(" "),e("div",{staticClass:"language-JS extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bool "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" bool\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n\n")])])]),e("div",{staticClass:"language-JS extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bool "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"this-will-not-be-reported"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#this-will-not-be-reported"}},[t._v("#")]),t._v(" This will not be reported")]),t._v(" "),e("div",{staticClass:"language-JS extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bool "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" bool\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World 🌍'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you don't mind exports being sprinkled throughout a file, you may not want to enable this rule.")]),t._v(" "),e("h4",{attrs:{id:"es6-exports-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6-exports-only"}},[t._v("#")]),t._v(" ES6 exports only")]),t._v(" "),e("p",[t._v("The exports-last rule is currently only working on ES6 exports. You may not want to enable this rule if you're using CommonJS exports.")]),t._v(" "),e("p",[t._v("If you need CommonJS support feel free to open an issue or create a PR.")])])}),[],!1,null,null,null);s.default=r.exports}}]);