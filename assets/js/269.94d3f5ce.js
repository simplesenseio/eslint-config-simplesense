(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{460:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"regexp-no-dupe-disjunctions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp-no-dupe-disjunctions"}},[t._v("#")]),t._v(" regexp/no-dupe-disjunctions")]),t._v(" "),e("p",[t._v("💼 This rule is enabled in the ✅ "),e("code",[t._v("plugin:regexp/recommended")]),t._v(" config.")]),t._v(" "),e("p",[t._v("💡 This rule is manually fixable by "),e("a",{attrs:{href:"https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions",target:"_blank",rel:"noopener noreferrer"}},[t._v("editor suggestions"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("disallow duplicate disjunctions")])]),t._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[t._v("#")]),t._v(" 📖 Rule Details")]),t._v(" "),e("p",[t._v("This rule disallows duplicate disjunctions.")]),t._v(" "),e("eslint-code-block",[e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* eslint regexp/no-dupe-disjunctions: "error" */')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ✓ GOOD */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("a|b")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(a|b)")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(?:a|b)")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ✗ BAD */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("a|a")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(a|a)")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(?:a|a)")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("abc|abc")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[ab]|[ba]")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("a|abc")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".|abc")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".|a|b|c")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" 🔧 Options")]),t._v(" "),e("div",{staticClass:"language-json5 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json5"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"regexp/no-dupe-disjunctions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"report"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trivial"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reportExponentialBacktracking"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"potential"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reportUnreachable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"certain"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"report"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#report"}},[t._v("#")]),t._v(" "),e("code",[t._v("report")])]),t._v(" "),e("p",[t._v("This option control what types of duplications will be reported. The possible values are:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v('report: "trivial"')]),t._v(" ("),e("em",[t._v("default")]),t._v(")")]),t._v(" "),e("p",[t._v("With this option, only trivial cases will be reported. This means that the reported alternative can be removed without affecting the pattern.")]),t._v(" "),e("p",[t._v("Trivial cases include duplicates (e.g. "),e("code",[t._v("a|a")]),t._v(") and subsets (e.g. "),e("code",[t._v("\\w|a")]),t._v(").")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('report: "interesting"')])]),t._v(" "),e("p",[t._v("All trivial cases and superset cases will be reported.")]),t._v(" "),e("p",[t._v("In superset cases, an alternative "),e("em",[t._v("might")]),t._v(" be removable. Whether a reported alternative is removable cannot trivially be decided and depends on the pattern.")]),t._v(" "),e("p",[t._v("E.g. "),e("code",[t._v("Foo|\\w+")]),t._v(" is a superset case because "),e("code",[t._v("\\w+")]),t._v(" is a superset of "),e("code",[t._v("Foo")]),t._v(". In the regex "),e("code",[t._v("/\\b(?:Foo|\\w+)\\b/")]),t._v(", the "),e("code",[t._v("Foo")]),t._v(" alternative can be removed. However in the regex "),e("code",[t._v("/Foo|\\w+/")]),t._v(", the "),e("code",[t._v("Foo")]),t._v(" alternative cannot be removed without affecting the pattern.")]),t._v(" "),e("p",[t._v("Whether a reported alternative is removable has to be decided by the developer.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('report: "all"')])]),t._v(" "),e("p",[t._v("All cases of duplication and partial duplication (overlap) will be reported.")]),t._v(" "),e("p",[t._v("Partial duplication (overlap) is typically not harmful and difficult to remove. E.g. the harmless overlap of "),e("code",[t._v("a.*|.*b")]),t._v(" is "),e("code",[t._v("a.*b")]),t._v(".")]),t._v(" "),e("p",[t._v("Partial duplication is only harmful if it occurs within a quantifier because then it can cause exponential backtracking. By default, this rule will try to report all cases of potential exponential backtracking.")]),t._v(" "),e("p",[t._v("However, the rule might not be able to detect that overlap happens within a quantifier if the regex was constructed at runtime. Example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" partial "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("a.*|.*b")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pattern "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?:"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" partial"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('")+\\nfoo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("If your codebase contained many such partial regexes, then reporting all cases might yield cases that could not be identified as causing exponential backtracking.")])])]),t._v(" "),e("h3",{attrs:{id:"reportexponentialbacktracking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reportexponentialbacktracking"}},[t._v("#")]),t._v(" "),e("code",[t._v("reportExponentialBacktracking")])]),t._v(" "),e("p",[t._v("Partial duplications (overlaps) are only reported by "),e("code",[t._v('report: "all"')]),t._v(" even though they sometimes cause exponential backtracking. This option will force the other "),e("code",[t._v("report")]),t._v(" modes to also report partial duplications if the partial duplications are likely to cause exponential backtracking.")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v('reportExponentialBacktracking: "potential"')]),t._v(" ("),e("em",[t._v("default")]),t._v(")")]),t._v(" "),e("p",[t._v("In this case, this rule will always report partial duplications that "),e("em",[t._v("might")]),t._v(" cause exponential backtracking.")]),t._v(" "),e("p",[t._v("If the plugin cannot prove that a partial duplication is safe (= does not cause exponential backtracking), then the partial duplication will be reported. This might cause some false positives.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('reportExponentialBacktracking: "certain"')])]),t._v(" "),e("p",[t._v("In this case, this rule will report partial duplication that "),e("em",[t._v("can")]),t._v(" cause exponential backtracking.")]),t._v(" "),e("p",[t._v("If the plugin can prove that a partial duplication is unsafe (= causes exponential backtracking), then the partial duplication will be reported. This might cause some false negatives.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('reportExponentialBacktracking: "none"')])]),t._v(" "),e("p",[t._v("In this case, no extra cases of partial duplication will be reported.")])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v('"potential"')]),t._v(" and "),e("code",[t._v('"certain"')]),t._v(" modes differ only in how they handle uncertainty. The rule might be unable to prove that partial duplication is safe or unsafe with 100% certainty. This typically happens around fragment regexes (regexes that are used as fragments to build more complex regexes). Because the rule might not be able to track how a regex fragment is used, it has to make assumptions:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"potential"')]),t._v(" assumes that fragments might be used inside a (logical) star quantifier and reports all partial duplication.")]),t._v(" "),e("li",[e("code",[t._v('"certain"')]),t._v(" assumes that fragments will not be used inside a (logical) star quantifier and will only report partial duplication that is certain to cause exponential backtracking.")])]),t._v(" "),e("p",[e("em",[t._v("Note:")]),t._v(" This option only affects "),e("code",[t._v("report")]),t._v(" modes other than "),e("code",[t._v('"all"')]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"reportunreachable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reportunreachable"}},[t._v("#")]),t._v(" "),e("code",[t._v("reportUnreachable")])]),t._v(" "),e("p",[t._v("All "),e("code",[t._v("report")]),t._v(" modes report unreachable alternatives. These are alternatives that can "),e("em",[t._v("never")]),t._v(" be reached because a previous alternative always accepts before them. I.e. in "),e("code",[t._v('/int|integer/.exec("integer")')]),t._v(", the "),e("code",[t._v("integer")]),t._v(" alternative is unreachable because the "),e("code",[t._v("int")]),t._v(" alternative will always accept before the "),e("code",[t._v("integer")]),t._v(" alternative has a chance to.")]),t._v(" "),e("p",[t._v("However, some regexes are used as fragments to build more complex regexes. Example:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" int "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("int|integer")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pattern "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\\\b(")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("int"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("|\\\\d+)\\\\b")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"integer int"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [ 'integer', 'int' ]")]),t._v("\n")])])]),e("p",[t._v("In these fragments, seemingly unreachable alternatives might not actually be unreachable depending on how the fragment is used.")]),t._v(" "),e("p",[t._v("This option controls how this rule reports unreachable alternatives in fragments.")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v('reportUnreachable: "potential"')])]),t._v(" "),e("p",[t._v("In this case, this rule will always report unreachable alternatives, even in fragments.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" int "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("int|integer")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// report (false positive)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pattern "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\\\b(")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("int"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("|\\\\d+)\\\\b")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" int "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("int|integer")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// report (true positive)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pattern "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("is (")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("int"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v('reportUnreachable: "certain"')]),t._v(" ("),e("em",[t._v("default")]),t._v(")")]),t._v(" "),e("p",[t._v("In this case, this rule will only report unreachable alternatives in non-fragment regexes.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" int "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("int|integer")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no report (true negative)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pattern "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\\\b(")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("int"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("|\\\\d+)\\\\b")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" int "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("int|integer")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no report (false negative)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pattern "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("is (")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("int"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" 🚀 Version")]),t._v(" "),e("p",[t._v("This rule was introduced in eslint-plugin-regexp v0.4.0")]),t._v(" "),e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 🔍 Implementation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-dupe-disjunctions.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-dupe-disjunctions.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);