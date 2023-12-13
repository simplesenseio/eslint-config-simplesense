(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{590:function(t,e,n){"use strict";n.r(e);var a=n(9),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"prefer-before-over-insertbefore-replacewith-over-replacechild-prefer-one-of-before-after-append-or-prepend-over-insertadjacenttext-and-insertadjacentelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prefer-before-over-insertbefore-replacewith-over-replacechild-prefer-one-of-before-after-append-or-prepend-over-insertadjacenttext-and-insertadjacentelement"}},[t._v("#")]),t._v(" Prefer "),e("code",[t._v(".before()")]),t._v(" over "),e("code",[t._v(".insertBefore()")]),t._v(", "),e("code",[t._v(".replaceWith()")]),t._v(" over "),e("code",[t._v(".replaceChild()")]),t._v(", prefer one of "),e("code",[t._v(".before()")]),t._v(", "),e("code",[t._v(".after()")]),t._v(", "),e("code",[t._v(".append()")]),t._v(" or "),e("code",[t._v(".prepend()")]),t._v(" over "),e("code",[t._v("insertAdjacentText()")]),t._v(" and "),e("code",[t._v("insertAdjacentElement()")])]),t._v(" "),e("p",[t._v("💼 This rule is enabled in the ✅ "),e("code",[t._v("recommended")]),t._v(" "),e("a",{attrs:{href:"https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("🔧 This rule is automatically fixable by the "),e("a",{attrs:{href:"https://eslint.org/docs/latest/user-guide/command-line-interface#--fix",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("--fix")]),t._v(" CLI option"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Enforces the use of:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith",target:"_blank",rel:"noopener noreferrer"}},[t._v("childNode.replaceWith(newNode)"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild",target:"_blank",rel:"noopener noreferrer"}},[t._v("parentNode.replaceChild(newNode, oldNode)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.before(newNode)"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore",target:"_blank",rel:"noopener noreferrer"}},[t._v("parentNode.insertBefore(newNode, referenceNode)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.before('text')"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.insertAdjacentText('beforebegin', 'text')"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.before(newNode)"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.insertAdjacentElement('beforebegin', newNode)"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("There are some advantages of using the newer DOM APIs, like:")]),t._v(" "),e("ul",[e("li",[t._v("Traversing to the parent node is not necessary.")]),t._v(" "),e("li",[t._v("Appending multiple nodes at once.")]),t._v(" "),e("li",[t._v("Both "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMString",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("DOMString")]),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM node objects"),e("OutboundLink")],1),t._v(" can be manipulated.")])]),t._v(" "),e("h2",{attrs:{id:"fail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fail"}},[t._v("#")]),t._v(" Fail")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertAdjacentText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'position'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertAdjacentElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'position'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"pass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pass"}},[t._v("#")]),t._v(" Pass")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);