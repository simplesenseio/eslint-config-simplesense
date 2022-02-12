(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{239:function(e,t,s){"use strict";s.r(t);var n=s(9),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"linebreak-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linebreak-style"}},[e._v("#")]),e._v(" linebreak-style")]),e._v(" "),s("p",[e._v("Enforces consistent linebreak style.")]),e._v(" "),s("p",[e._v("When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that\ndifferent line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).")]),e._v(" "),s("p",[e._v("The linebreaks (new lines) used in windows operating system are usually "),s("em",[e._v("carriage returns")]),e._v(" (CR) followed by a "),s("em",[e._v("line feed")]),e._v(" (LF) making it a "),s("em",[e._v("carriage return line feed")]),e._v(" (CRLF)\nwhereas Linux and Unix use a simple "),s("em",[e._v("line feed")]),e._v(" (LF). The corresponding "),s("em",[e._v("control sequences")]),e._v(" are "),s("code",[e._v('"\\n"')]),e._v(" (for LF) and "),s("code",[e._v('"\\r\\n"')]),e._v(" for (CRLF).")]),e._v(" "),s("p",[e._v("Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies, you can activate this rule.")]),e._v(" "),s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" Rule Details")]),e._v(" "),s("p",[e._v("This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.")]),e._v(" "),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),s("p",[e._v("This rule has a string option:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v('"unix"')]),e._v(" (default) enforces the usage of Unix line endings: "),s("code",[e._v("\\n")]),e._v(" for LF.")]),e._v(" "),s("li",[s("code",[e._v('"windows"')]),e._v(" enforces the usage of Windows line endings: "),s("code",[e._v("\\r\\n")]),e._v(" for CRLF.")])]),e._v(" "),s("h3",{attrs:{id:"unix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unix"}},[e._v("#")]),e._v(" unix")]),e._v(" "),s("p",[e._v("Examples of "),s("strong",[e._v("incorrect")]),e._v(" code for this rule with the default "),s("code",[e._v('"unix"')]),e._v(" option:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "unix"]*/')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n\n")])])]),s("p",[e._v("Examples of "),s("strong",[e._v("correct")]),e._v(" code for this rule with the default "),s("code",[e._v('"unix"')]),e._v(" option:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "unix"]*/')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do stuff \\n")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" windows")]),e._v(" "),s("p",[e._v("Examples of "),s("strong",[e._v("incorrect")]),e._v(" code for this rule with the "),s("code",[e._v('"windows"')]),e._v(" option:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "windows"]*/')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n")])])]),s("p",[e._v("Examples of "),s("strong",[e._v("correct")]),e._v(" code for this rule with the "),s("code",[e._v('"windows"')]),e._v(" option:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "windows"]*/')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do stuff \\r\\n")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n")])])]),s("h3",{attrs:{id:"using-this-rule-with-version-control-systems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-this-rule-with-version-control-systems"}},[e._v("#")]),e._v(" Using this rule with version control systems")]),e._v(" "),s("p",[e._v("Version control systems sometimes have special behavior for linebreaks. To make it easy for developers to contribute to your codebase from different platforms, you may want to configure your VCS to handle linebreaks appropriately.")]),e._v(" "),s("p",[e._v("For example, the default behavior of "),s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git"),s("OutboundLink")],1),e._v(" on Windows systems is to convert LF linebreaks to CRLF when checking out files, but to store the linebreaks as LF when committing a change. This will cause the "),s("code",[e._v("linebreak-style")]),e._v(" rule to report errors if configured with the "),s("code",[e._v('"unix"')]),e._v(" setting, because the files that ESLint sees will have CRLF linebreaks. If you use git, you may want to add a line to your "),s("a",{attrs:{href:"https://git-scm.com/docs/gitattributes",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v(".gitattributes")]),e._v(" file"),s("OutboundLink")],1),e._v(" to prevent git from converting linebreaks in "),s("code",[e._v(".js")]),e._v(" files:")]),e._v(" "),s("div",{staticClass:"language-pt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("*.js text eol=lf\n")])])]),s("h2",{attrs:{id:"when-not-to-use-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[e._v("#")]),e._v(" When Not To Use It")]),e._v(" "),s("p",[e._v("If you aren't concerned about having different line endings within your code, then you can safely turn this rule off.")]),e._v(" "),s("h2",{attrs:{id:"compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("JSCS")]),e._v(": "),s("a",{attrs:{href:"https://jscs-dev.github.io/rule/validateLineBreaks",target:"_blank",rel:"noopener noreferrer"}},[e._v("validateLineBreaks"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);