import{_ as l,c as r,ae as t,G as n,w as h,B as o,o as k,j as i,a as s}from"./chunks/framework.D_WxFy46.js";const f=JSON.parse('{"title":"regexp/no-useless-string-literal","description":"disallow string disjunction of single characters in `\\\\q{...}`","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-useless-string-literal","description":"disallow string disjunction of single characters in `\\\\q{...}`","since":"v2.0.0-next.12"},"headers":[],"relativePath":"rules/regexp/no-useless-string-literal.md","filePath":"rules/regexp/no-useless-string-literal.md"}'),d={name:"rules/regexp/no-useless-string-literal.md"};function p(g,e,c,u,F,b){const a=o("eslint-code-block");return k(),r("div",null,[e[1]||(e[1]=t('<h1 id="regexp-no-useless-string-literal" tabindex="-1">regexp/no-useless-string-literal <a class="header-anchor" href="#regexp-no-useless-string-literal" aria-label="Permalink to &quot;regexp/no-useless-string-literal&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><blockquote><p>disallow string disjunction of single characters in <code>\\q{...}</code></p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports the string alternatives of a single character in <code>\\q{...}</code>. It can be placed outside <code>\\q{...}</code>.</p>',6)),n(a,{fix:""},{default:h(()=>e[0]||(e[0]=[i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-useless-string-literal: "error" */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"["),i("span",{style:{"--shiki-light":"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#85E89D","--shiki-dark-font-weight":"bold"}},"\\q"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{abc}]"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"v")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"["),i("span",{style:{"--shiki-light":"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#85E89D","--shiki-dark-font-weight":"bold"}},"\\q"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{ab|}]"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"v")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"["),i("span",{style:{"--shiki-light":"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#85E89D","--shiki-dark-font-weight":"bold"}},"\\q"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{a}]"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"v"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," // => /[a]/v")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"["),i("span",{style:{"--shiki-light":"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#85E89D","--shiki-dark-font-weight":"bold"}},"\\q"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"{a|bc}]"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"v"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," // => /[a\\q{bc}]/v")])])])],-1)])),_:1}),e[2]||(e[2]=t('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="./no-empty-alternative">regexp/no-empty-alternative</a></li><li><a href="./no-empty-string-literal">regexp/no-empty-string-literal</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v2.0.0-next.12</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-useless-string-literal.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-useless-string-literal.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',8))])}const m=l(d,[["render",p]]);export{f as __pageData,m as default};
