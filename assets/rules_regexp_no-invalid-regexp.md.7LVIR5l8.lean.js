import{_ as t,c as r,a1 as a,G as n,w as h,B as o,o as p,j as i,a as e}from"./chunks/framework.DHJwed8E.js";const y=JSON.parse('{"title":"regexp/no-invalid-regexp","description":"disallow invalid regular expression strings in `RegExp` constructors","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-invalid-regexp","description":"disallow invalid regular expression strings in `RegExp` constructors","since":"v1.0.0"},"headers":[],"relativePath":"rules/regexp/no-invalid-regexp.md","filePath":"rules/regexp/no-invalid-regexp.md"}'),k={name:"rules/regexp/no-invalid-regexp.md"};function d(g,s,c,E,u,F){const l=o("eslint-code-block");return p(),r("div",null,[s[1]||(s[1]=a('<h1 id="regexp-no-invalid-regexp" tabindex="-1">regexp/no-invalid-regexp <a class="header-anchor" href="#regexp-no-invalid-regexp" aria-label="Permalink to &quot;regexp/no-invalid-regexp&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><blockquote><p>disallow invalid regular expression strings in <code>RegExp</code> constructors</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports invalid regular expression patterns given to <code>RegExp</code> constructors.</p>',5)),n(l,null,{default:h(()=>s[0]||(s[0]=[i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-invalid-regexp: "error" */')]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RegExp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'foo'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RegExp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'[a'"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ']'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RegExp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\\\"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RegExp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'[a-Z]*'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RegExp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\\\"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"p{Foo}'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'u'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," space"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\\\"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"s*'")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RegExp"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'='"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," space "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '+("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\\\"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"w+)'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'u'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])])],-1)])),_:1}),s[2]||(s[2]=a('<h3 id="differences-to-eslint-s-no-invalid-regexp-rule" tabindex="-1">Differences to ESLint&#39;s <code>no-invalid-regexp</code> rule <a class="header-anchor" href="#differences-to-eslint-s-no-invalid-regexp-rule" aria-label="Permalink to &quot;Differences to ESLint&#39;s `no-invalid-regexp` rule&quot;">​</a></h3><p>This rule is almost functionally equivalent to ESLint&#39;s <a href="https://eslint.org/docs/rules/no-invalid-regexp" target="_blank" rel="noreferrer">no-invalid-regexp</a> rule. The only difference is that this rule doesn&#39;t validate flags (see <a href="./no-non-standard-flag.html">no-non-standard-flag</a>).</p><p>There are two reasons we provide this rule:</p><ol><li><p>Better error reporting.</p><p>Instead of reporting the whole invalid string, this rule will try to report the exact position of the syntax error.</p></li><li><p>Better support for complex constructor calls.</p><p>ESLint&#39;s rule only validates <code>RegExp</code> constructors called with simple string literals. This rule also supports operations (e.g. string concatenation) and variables to some degree.</p></li></ol><h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="further-reading" tabindex="-1">📚 Further reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further reading&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/no-invalid-regexp" target="_blank" rel="noreferrer">no-invalid-regexp</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v1.0.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-invalid-regexp.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-invalid-regexp.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',12))])}const f=t(k,[["render",d]]);export{y as __pageData,f as default};
