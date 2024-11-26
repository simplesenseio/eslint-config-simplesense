(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{257:function(t,e,s){"use strict";s.r(e);var n=s(9),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This rule was "),e("strong",[t._v("deprecated")]),t._v(" in ESLint v8.53.0. Please use the corresponding rule in "),e("a",{attrs:{href:"https://eslint.style/packages/js",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("@stylistic/eslint-plugin-js")]),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that\ndifferent line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).")]),t._v(" "),e("p",[t._v("The linebreaks (new lines) used in windows operating system are usually "),e("em",[t._v("carriage returns")]),t._v(" (CR) followed by a "),e("em",[t._v("line feed")]),t._v(" (LF) making it a "),e("em",[t._v("carriage return line feed")]),t._v(" (CRLF)\nwhereas Linux and Unix use a simple "),e("em",[t._v("line feed")]),t._v(" (LF). The corresponding "),e("em",[t._v("control sequences")]),t._v(" are "),e("code",[t._v('"\\n"')]),t._v(" (for LF) and "),e("code",[t._v('"\\r\\n"')]),t._v(" for (CRLF).")]),t._v(" "),e("p",[t._v("Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies, you can activate this rule.")]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" Rule Details")]),t._v(" "),e("p",[t._v("This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.")]),t._v(" "),e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("This rule has a string option:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"unix"')]),t._v(" (default) enforces the usage of Unix line endings: "),e("code",[t._v("\\n")]),t._v(" for LF.")]),t._v(" "),e("li",[e("code",[t._v('"windows"')]),t._v(" enforces the usage of Windows line endings: "),e("code",[t._v("\\r\\n")]),t._v(" for CRLF.")])]),t._v(" "),e("h3",{attrs:{id:"unix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unix"}},[t._v("#")]),t._v(" unix")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the default "),e("code",[t._v('"unix"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint linebreak-style: ["error", "unix"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\r\\n")]),t._v("\n\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the default "),e("code",[t._v('"unix"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint linebreak-style: ["error", "unix"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\n")]),t._v("\n    b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\n")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\n")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\n")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do stuff \\n")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\n")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" windows")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("incorrect")]),t._v(" code for this rule with the "),e("code",[t._v('"windows"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: incorrect")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint linebreak-style: ["error", "windows"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\n")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("Examples of "),e("strong",[t._v("correct")]),t._v(" code for this rule with the "),e("code",[t._v('"windows"')]),t._v(" option:")]),t._v(" "),e("p",[t._v("::: correct")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*eslint linebreak-style: ["error", "windows"]*/')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\r\\n")]),t._v("\n    b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\r\\n")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\r\\n")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\r\\n")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do stuff \\r\\n")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\r\\n")]),t._v("\n")])])]),e("p",[t._v(":::")]),t._v(" "),e("h3",{attrs:{id:"using-this-rule-with-version-control-systems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-this-rule-with-version-control-systems"}},[t._v("#")]),t._v(" Using this rule with version control systems")]),t._v(" "),e("p",[t._v("Version control systems sometimes have special behavior for linebreaks. To make it easy for developers to contribute to your codebase from different platforms, you may want to configure your VCS to handle linebreaks appropriately.")]),t._v(" "),e("p",[t._v("For example, the default behavior of "),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git"),e("OutboundLink")],1),t._v(" on Windows systems is to convert LF linebreaks to CRLF when checking out files, but to store the linebreaks as LF when committing a change. This will cause the "),e("code",[t._v("linebreak-style")]),t._v(" rule to report errors if configured with the "),e("code",[t._v('"unix"')]),t._v(" setting, because the files that ESLint sees will have CRLF linebreaks. If you use git, you may want to add a line to your "),e("a",{attrs:{href:"https://git-scm.com/docs/gitattributes",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v(".gitattributes")]),t._v(" file"),e("OutboundLink")],1),t._v(" to prevent git from converting linebreaks in "),e("code",[t._v(".js")]),t._v(" files:")]),t._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[t._v("*.js text eol=lf\n")])])]),e("h2",{attrs:{id:"when-not-to-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[t._v("#")]),t._v(" When Not To Use It")]),t._v(" "),e("p",[t._v("If you aren't concerned about having different line endings within your code, then you can safely turn this rule off.")]),t._v(" "),e("h2",{attrs:{id:"compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[t._v("#")]),t._v(" Compatibility")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("JSCS")]),t._v(": "),e("a",{attrs:{href:"https://jscs-dev.github.io/rule/validateLineBreaks",target:"_blank",rel:"noopener noreferrer"}},[t._v("validateLineBreaks"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);