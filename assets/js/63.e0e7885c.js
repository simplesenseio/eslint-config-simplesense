(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{257:function(e,t,s){"use strict";s.r(t);var n=s(9),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("This rule was "),t("strong",[e._v("deprecated")]),e._v(" in ESLint v8.53.0. Please use the "),t("a",{attrs:{href:"https://eslint.style/rules/js/linebreak-style",target:"_blank",rel:"noopener noreferrer"}},[e._v("corresponding rule"),t("OutboundLink")],1),e._v(" in "),t("a",{attrs:{href:"https://eslint.style/packages/js",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("@stylistic/eslint-plugin-js")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that\ndifferent line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).")]),e._v(" "),t("p",[e._v("The linebreaks (new lines) used in windows operating system are usually "),t("em",[e._v("carriage returns")]),e._v(" (CR) followed by a "),t("em",[e._v("line feed")]),e._v(" (LF) making it a "),t("em",[e._v("carriage return line feed")]),e._v(" (CRLF)\nwhereas Linux and Unix use a simple "),t("em",[e._v("line feed")]),e._v(" (LF). The corresponding "),t("em",[e._v("control sequences")]),e._v(" are "),t("code",[e._v('"\\n"')]),e._v(" (for LF) and "),t("code",[e._v('"\\r\\n"')]),e._v(" for (CRLF).")]),e._v(" "),t("p",[e._v("Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies, you can activate this rule.")]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" Rule Details")]),e._v(" "),t("p",[e._v("This rule enforces consistent line endings independent of operating system, VCS, or editor used across your codebase.")]),e._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("This rule has a string option:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"unix"')]),e._v(" (default) enforces the usage of Unix line endings: "),t("code",[e._v("\\n")]),e._v(" for LF.")]),e._v(" "),t("li",[t("code",[e._v('"windows"')]),e._v(" enforces the usage of Windows line endings: "),t("code",[e._v("\\r\\n")]),e._v(" for CRLF.")])]),e._v(" "),t("h3",{attrs:{id:"unix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unix"}},[e._v("#")]),e._v(" unix")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("incorrect")]),e._v(" code for this rule with the default "),t("code",[e._v('"unix"')]),e._v(" option:")]),e._v(" "),t("p",[e._v("::: incorrect")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "unix"]*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n\n")])])]),t("p",[e._v(":::")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("correct")]),e._v(" code for this rule with the default "),t("code",[e._v('"unix"')]),e._v(" option:")]),e._v(" "),t("p",[e._v("::: correct")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "unix"]*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n    b "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("params")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do stuff \\n")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n")])])]),t("p",[e._v(":::")]),e._v(" "),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" windows")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("incorrect")]),e._v(" code for this rule with the "),t("code",[e._v('"windows"')]),e._v(" option:")]),e._v(" "),t("p",[e._v("::: incorrect")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "windows"]*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\n")]),e._v("\n")])])]),t("p",[e._v(":::")]),e._v(" "),t("p",[e._v("Examples of "),t("strong",[e._v("correct")]),e._v(" code for this rule with the "),t("code",[e._v('"windows"')]),e._v(" option:")]),e._v(" "),t("p",[e._v("::: correct")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/*eslint linebreak-style: ["error", "windows"]*/')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n    b "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("params")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do stuff \\r\\n")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \\r\\n")]),e._v("\n")])])]),t("p",[e._v(":::")]),e._v(" "),t("h3",{attrs:{id:"using-this-rule-with-version-control-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-this-rule-with-version-control-systems"}},[e._v("#")]),e._v(" Using this rule with version control systems")]),e._v(" "),t("p",[e._v("Version control systems sometimes have special behavior for linebreaks. To make it easy for developers to contribute to your codebase from different platforms, you may want to configure your VCS to handle linebreaks appropriately.")]),e._v(" "),t("p",[e._v("For example, the default behavior of "),t("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git"),t("OutboundLink")],1),e._v(" on Windows systems is to convert LF linebreaks to CRLF when checking out files, but to store the linebreaks as LF when committing a change. This will cause the "),t("code",[e._v("linebreak-style")]),e._v(" rule to report errors if configured with the "),t("code",[e._v('"unix"')]),e._v(" setting, because the files that ESLint sees will have CRLF linebreaks. If you use git, you may want to add a line to your "),t("a",{attrs:{href:"https://git-scm.com/docs/gitattributes",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v(".gitattributes")]),e._v(" file"),t("OutboundLink")],1),e._v(" to prevent git from converting linebreaks in "),t("code",[e._v(".js")]),e._v(" files:")]),e._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[e._v("*.js text eol=lf\n")])])]),t("h2",{attrs:{id:"when-not-to-use-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-it"}},[e._v("#")]),e._v(" When Not To Use It")]),e._v(" "),t("p",[e._v("If you aren't concerned about having different line endings within your code, then you can safely turn this rule off.")]),e._v(" "),t("h2",{attrs:{id:"compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("JSCS")]),e._v(": "),t("a",{attrs:{href:"https://jscs-dev.github.io/rule/validateLineBreaks",target:"_blank",rel:"noopener noreferrer"}},[e._v("validateLineBreaks"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);