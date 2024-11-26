import{_ as o,c as r,a1 as a,G as n,w as l,B as p,o as d,j as e,a as i}from"./chunks/framework.C4wD7aVO.js";const F=JSON.parse('{"title":"regexp/prefer-unicode-codepoint-escapes","description":"enforce use of unicode codepoint escapes","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/prefer-unicode-codepoint-escapes","description":"enforce use of unicode codepoint escapes","since":"v0.3.0"},"headers":[],"relativePath":"rules/regexp/prefer-unicode-codepoint-escapes.md","filePath":"rules/regexp/prefer-unicode-codepoint-escapes.md"}'),h={name:"rules/regexp/prefer-unicode-codepoint-escapes.md"};function c(k,s,u,g,f,m){const t=p("eslint-code-block");return d(),r("div",null,[s[1]||(s[1]=a('<h1 id="regexp-prefer-unicode-codepoint-escapes" tabindex="-1">regexp/prefer-unicode-codepoint-escapes <a class="header-anchor" href="#regexp-prefer-unicode-codepoint-escapes" aria-label="Permalink to &quot;regexp/prefer-unicode-codepoint-escapes&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><blockquote><p>enforce use of unicode codepoint escapes</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule enforces the use of Unicode codepoint escapes instead of Unicode escapes using surrogate pairs.</p><p>If you want to enforce characters that do not use surrogate pairs into unicode escapes or unicode code point escapes, use the <a href="./unicode-escape">regexp/unicode-escape</a> rule.</p>',7)),n(t,{fix:""},{default:l(()=>s[0]||(s[0]=[e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/prefer-unicode-codepoint-escapes: "error" */')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#85E89D","--shiki-dark-font-weight":"bold"}},"\\u"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"{1f600}"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"😀"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\ud83d\\ude00"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u")])])])],-1)])),_:1}),s[2]||(s[2]=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="./unicode-escape">regexp/unicode-escape</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.3.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/prefer-unicode-codepoint-escapes.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/prefer-unicode-codepoint-escapes.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',8))])}const x=o(h,[["render",c]]);export{F as __pageData,x as default};
