(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{409:function(s,t,e){"use strict";e.r(t);var a=e(9),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"import-no-useless-path-segments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-no-useless-path-segments"}},[s._v("#")]),s._v(" import/no-useless-path-segments")]),s._v(" "),e("p",[s._v("Use this rule to prevent unnecessary path segments in import and require statements.")]),s._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),e("p",[s._v("Given the following folder structure:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("my-project\n├── app.js\n├── footer.js\n├── header.js\n└── helpers.js\n└── helpers\n    └── index.js\n└── pages\n    ├── about.js\n    ├── contact.js\n    └── index.js\n")])])]),e("p",[s._v("The following patterns are considered problems:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n *  in my-project/app.js\n */")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./../pages/about.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages/about.js"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./../pages/about"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages/about"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../pages/about.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages/about.js"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../pages/about"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages/about"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages//about"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages/about"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages/index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages" (except if there is a ./pages.js file)')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages/index.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages" (except if there is a ./pages.js file)')]),s._v("\n")])])]),e("p",[s._v("The following patterns are NOT considered problems:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n *  in my-project/app.js\n */")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./header.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages/about"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('".."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" fs "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),e("h3",{attrs:{id:"nouselessindex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nouselessindex"}},[s._v("#")]),s._v(" noUselessIndex")]),s._v(" "),e("p",[s._v("If you want to detect unnecessary "),e("code",[s._v("/index")]),s._v(" or "),e("code",[s._v("/index.js")]),s._v(" (depending on the specified file extensions, see below) imports in your paths, you can enable the option "),e("code",[s._v("noUselessIndex")]),s._v(". By default it is set to "),e("code",[s._v("false")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"import/no-useless-path-segments"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  noUselessIndex"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),e("p",[s._v("Additionally to the patterns described above, the following imports are considered problems if "),e("code",[s._v("noUselessIndex")]),s._v(" is enabled:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// in my-project/app.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./helpers/index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./helpers/" (not auto-fixable to `./helpers` because this would lead to an ambiguous import of `./helpers.js` and `./helpers/index.js`)')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages/index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages" (auto-fixable)')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./pages/index.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// should be "./pages" (auto-fixable)')]),s._v("\n")])])]),e("p",[s._v("Note: "),e("code",[s._v("noUselessIndex")]),s._v(" only avoids ambiguous imports for "),e("code",[s._v(".js")]),s._v(" files if you haven't specified other resolved file extensions. See "),e("a",{attrs:{href:"https://github.com/import-js/eslint-plugin-import#importextensions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Settings: import/extensions"),e("OutboundLink")],1),s._v(" for details.")]),s._v(" "),e("h3",{attrs:{id:"commonjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[s._v("#")]),s._v(" commonjs")]),s._v(" "),e("p",[s._v("When set to "),e("code",[s._v("true")]),s._v(", this rule checks CommonJS imports. Default to "),e("code",[s._v("false")]),s._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);