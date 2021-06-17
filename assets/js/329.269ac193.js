(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{517:function(t,n,e){"use strict";e.r(n);var a=e(9),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"prefer-modern-dom-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prefer-modern-dom-apis"}},[t._v("#")]),t._v(" Prefer modern DOM APIs")]),t._v(" "),e("p",[t._v("Enforces the use of:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith",target:"_blank",rel:"noopener noreferrer"}},[t._v("childNode.replaceWith(newNode)"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild",target:"_blank",rel:"noopener noreferrer"}},[t._v("parentNode.replaceChild(newNode, oldNode)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.before(newNode)"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore",target:"_blank",rel:"noopener noreferrer"}},[t._v("parentNode.insertBefore(newNode, referenceNode)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.before('text')"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.insertAdjacentText('beforebegin', 'text')"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.before(newNode)"),e("OutboundLink")],1),t._v(" over "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement",target:"_blank",rel:"noopener noreferrer"}},[t._v("referenceNode.insertAdjacentElement('beforebegin', newNode)"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("There are some advantages of using the newer DOM APIs, like:")]),t._v(" "),e("ul",[e("li",[t._v("Traversing to the parent node is not necessary.")]),t._v(" "),e("li",[t._v("Appending multiple nodes at once.")]),t._v(" "),e("li",[t._v("Both "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMString",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("DOMString")]),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM node objects"),e("OutboundLink")],1),t._v(" can be manipulated.")])]),t._v(" "),e("p",[t._v("This rule is fixable.")]),t._v(" "),e("h2",{attrs:{id:"fail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fail"}},[t._v("#")]),t._v(" Fail")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertAdjacentText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'position'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertAdjacentElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'position'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"pass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pass"}},[t._v("#")]),t._v(" Pass")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);