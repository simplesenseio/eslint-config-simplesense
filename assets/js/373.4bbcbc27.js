(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{565:function(s,t,n){"use strict";n.r(t);var e=n(9),a=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"enforce-specifying-rules-to-disable-in-eslint-disable-comments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enforce-specifying-rules-to-disable-in-eslint-disable-comments"}},[s._v("#")]),s._v(" Enforce specifying rules to disable in "),t("code",[s._v("eslint-disable")]),s._v(" comments")]),s._v(" "),t("p",[s._v("💼 This rule is enabled in the ✅ "),t("code",[s._v("recommended")]),s._v(" "),t("a",{attrs:{href:"https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs",target:"_blank",rel:"noopener noreferrer"}},[s._v("config"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("This rule makes you specify the rules you want to disable when using "),t("code",[s._v("eslint-disable")]),s._v(", "),t("code",[s._v("eslint-disable-line")]),s._v(" or "),t("code",[s._v("eslint-disable-next-line")]),s._v(" comments.")]),s._v(" "),t("p",[s._v("If you want to disable an ESLint rule in a file or on a specific line, you can add a comment.")]),s._v(" "),t("p",[s._v("On a single line:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-line no-console")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-next-line no-console")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("On the whole (rest of the) file:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* eslint-disable no-console */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("You don't have to specify any rules (like "),t("code",[s._v("no-console")]),s._v(" in the examples above), but you should, as you might otherwise hide useful errors.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* eslint-disable */")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// `message` is not defined, but it won't be reported")]),s._v("\n")])])]),t("p",[s._v("This rule enforces specifying the rules to disable. If you want to disable ESLint on a file altogether, you should ignore it through "),t("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v(".eslintignore")]),t("OutboundLink")],1),s._v(" for ESLint or through the "),t("a",{attrs:{href:"https://github.com/xojs/xo#ignores",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("ignores")]),s._v(" property"),t("OutboundLink")],1),s._v(" in "),t("code",[s._v("package.json")]),s._v(" for "),t("code",[s._v("XO")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"fail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fail"}},[s._v("#")]),s._v(" Fail")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* eslint-disable */")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-line")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-next-line")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"pass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pass"}},[s._v("#")]),s._v(" Pass")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* eslint-disable no-console */")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-line no-console")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-next-line no-console")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);