(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{463:function(s,t,e){"use strict";e.r(t);var a=e(9),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"regexp-no-useless-flag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-useless-flag"}},[s._v("#")]),s._v(" regexp/no-useless-flag")]),s._v(" "),e("blockquote",[e("p",[s._v("disallow unnecessary regex flags")])]),s._v(" "),e("ul",[e("li",[s._v("⚙️ This rule is included in "),e("code",[s._v('"plugin:regexp/recommended"')]),s._v(".")]),s._v(" "),e("li",[s._v("🔧 The "),e("code",[s._v("--fix")]),s._v(" option on the "),e("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[s._v("command line"),e("OutboundLink")],1),s._v(" can automatically fix some of the problems reported by this rule.")])]),s._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" 📖 Rule Details")]),s._v(" "),e("p",[s._v("This will point out present regex flags that do not change the pattern.")]),s._v(" "),e("h3",{attrs:{id:"i-flag-ignorecase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-flag-ignorecase"}},[s._v("#")]),s._v(" "),e("code",[s._v("i")]),s._v(" flag (ignoreCase)")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("i")]),s._v(" flag is only necessary if the pattern contains any characters with case\nvariations. If the pattern contains no such characters, the flag will be\nunnecessary. E.g. "),e("code",[s._v("/\\.{3}/i")])]),s._v(" "),e("eslint-code-block",{attrs:{fix:""}},[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint regexp/no-useless-flag: "error" */')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✓ GOOD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("a|b")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✗ BAD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.{3}")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w+")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("h3",{attrs:{id:"m-flag-multiline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#m-flag-multiline"}},[s._v("#")]),s._v(" "),e("code",[s._v("m")]),s._v(" flag (multiline)")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("m")]),s._v(" flag changes the behavior of the "),e("code",[s._v("^")]),s._v(" and "),e("code",[s._v("$")]),s._v(" assertions. If the pattern\ndoesn't contain these anchors, the "),e("code",[s._v("m")]),s._v(" flag will be unnecessary. E.g. "),e("code",[s._v("/foo|[^\\r\\n]*/m")])]),s._v(" "),e("eslint-code-block",{attrs:{fix:""}},[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint regexp/no-useless-flag: "error" */')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✓ GOOD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^foo$")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("m")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✗ BAD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo|[^\\r\\n]*")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("m")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("a|b")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("m")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("h3",{attrs:{id:"s-flag-dotall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s-flag-dotall"}},[s._v("#")]),s._v(" "),e("code",[s._v("s")]),s._v(" flag (dotAll)")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("s")]),s._v(" flag makes the dot ("),e("code",[s._v(".")]),s._v(") match all characters instead of the usually\nnon-line-terminator characters. If the pattern doesn't contain a dot\ncharacter set, the "),e("code",[s._v("s")]),s._v(" flag will be unnecessary. E.g. "),e("code",[s._v("/[.:]/s")])]),s._v(" "),e("eslint-code-block",{attrs:{fix:""}},[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint regexp/no-useless-flag: "error" */')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✓ GOOD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("a.*?b")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("s")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✗ BAD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[.:]")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("s")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^foo$")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("s")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("h3",{attrs:{id:"g-flag-global"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#g-flag-global"}},[s._v("#")]),s._v(" "),e("code",[s._v("g")]),s._v(" flag (global)")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("g")]),s._v(" flag is used when you need to test a regular expression against all possible string match. If not, it will be unnecessary.")]),s._v(" "),e("eslint-code-block",{attrs:{fix:""}},[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint regexp/no-useless-flag: "error" */')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✓ GOOD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regex1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'table football, foosball'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("array "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" regex1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regex2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("replaceAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✗ BAD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regex3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// You have used it only once.")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regex4 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// You have used it only once.")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'g'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("h3",{attrs:{id:"y-flag-sticky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#y-flag-sticky"}},[s._v("#")]),s._v(" "),e("code",[s._v("y")]),s._v(" flag (sticky)")]),s._v(" "),e("p",[s._v("The "),e("code",[s._v("y")]),s._v(" flag is used when you need to do a sticky search. If not, it will be unnecessary.")]),s._v(" "),e("eslint-code-block",{attrs:{fix:""}},[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint regexp/no-useless-flag: "error" */')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✓ GOOD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regex1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("y")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'table football, foosball'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastIndex "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" array "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" regex1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regex2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("y")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nregex2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("y")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("replaceAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("gy")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regexp3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("y")])]),s._v("\nstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regexp3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✗ BAD */")]),s._v("\nstr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("y")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("h3",{attrs:{id:"other-flags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-flags"}},[s._v("#")]),s._v(" other flags")]),s._v(" "),e("p",[s._v("No other flags will be checked.")]),s._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" 🔧 Options")]),s._v(" "),e("div",{staticClass:"language-json5 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json5"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"regexp/no-useless-flag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignore"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// An array of "i", "m", "s", "g" and "y".')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strictTypes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("ul",[e("li",[e("code",[s._v("ignore")]),s._v(" ... An array of flags to ignore from the check.")]),s._v(" "),e("li",[e("code",[s._v("strictTypes")]),s._v(" ... If "),e("code",[s._v("true")]),s._v(", strictly check the type of object to determine if the regex instance was used in "),e("code",[s._v("search()")]),s._v(" and "),e("code",[s._v("split()")]),s._v(". Default is "),e("code",[s._v("true")]),s._v(". This option is only effective for verifying the "),e("code",[s._v("g")]),s._v(" and "),e("code",[s._v("y")]),s._v(" flags."),e("br"),s._v("\nThis option is always on when using TypeScript.")])]),s._v(" "),e("h3",{attrs:{id:"ignore-s-g"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignore-s-g"}},[s._v("#")]),s._v(" "),e("code",[s._v('"ignore": ["s", "g"]')])]),s._v(" "),e("eslint-code-block",{attrs:{fix:""}},[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint regexp/no-useless-flag: ["error", { "ignore": ["s", "g"] }] */')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✓ GOOD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("s")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✗ BAD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("m")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("h3",{attrs:{id:"stricttypes-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stricttypes-false"}},[s._v("#")]),s._v(" "),e("code",[s._v('"strictTypes": false')])]),s._v(" "),e("eslint-code-block",{attrs:{fix:""}},[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* eslint regexp/no-useless-flag: ["error", { "strictTypes": false }] */')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✓ GOOD */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" notStr "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nnotStr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** @param {object} obj */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("obj")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ✗ BAD */")]),s._v("\nmaybeStr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// The type of "maybeStr" cannot be tracked.')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("maybeStr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    maybeStr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),e("h2",{attrs:{id:"compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[s._v("#")]),s._v(" ❤️ Compatibility")]),s._v(" "),e("p",[s._v("This rule is compatible with "),e("a",{attrs:{href:"https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/no-unnecessary-flag.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("clean-regex/no-unnecessary-flag"),e("OutboundLink")],1),s._v(" rule.")]),s._v(" "),e("h2",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[s._v("#")]),s._v(" 🚀 Version")]),s._v(" "),e("p",[s._v("This rule was introduced in eslint-plugin-regexp v0.9.0")]),s._v(" "),e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[s._v("#")]),s._v(" 🔍 Implementation")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-useless-flag.ts",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rule source"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-useless-flag.ts",target:"_blank",rel:"noopener noreferrer"}},[s._v("Test source"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);