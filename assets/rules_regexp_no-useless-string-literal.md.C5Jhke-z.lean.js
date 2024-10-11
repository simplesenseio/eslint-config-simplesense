import{_ as t,c as r,a1 as a,G as n,w as h,B as o,o as k,j as e,a as i}from"./chunks/framework.DHJwed8E.js";const y=JSON.parse('{"title":"regexp/no-useless-string-literal","description":"disallow string disjunction of single characters in `\\\\q{...}`","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-useless-string-literal","description":"disallow string disjunction of single characters in `\\\\q{...}`","since":"v2.0.0-next.12"},"headers":[],"relativePath":"rules/regexp/no-useless-string-literal.md","filePath":"rules/regexp/no-useless-string-literal.md"}'),d={name:"rules/regexp/no-useless-string-literal.md"};function p(g,s,c,u,E,m){const l=o("eslint-code-block");return k(),r("div",null,[s[1]||(s[1]=a('<h1 id="regexp-no-useless-string-literal" tabindex="-1">regexp/no-useless-string-literal <a class="header-anchor" href="#regexp-no-useless-string-literal" aria-label="Permalink to &quot;regexp/no-useless-string-literal&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><blockquote><p>disallow string disjunction of single characters in <code>\\q{...}</code></p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports the string alternatives of a single character in <code>\\q{...}</code>. It can be placed outside <code>\\q{...}</code>.</p>',6)),n(l,{fix:""},{default:h(()=>s[0]||(s[0]=[e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-useless-string-literal: "error" */')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{abc}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{ab|}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{a}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v "),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// => /[a]/v")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{a|bc}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v "),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// => /[a\\q{bc}]/v")])])])],-1)])),_:1}),s[2]||(s[2]=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="./no-empty-alternative">regexp/no-empty-alternative</a></li><li><a href="./no-empty-string-literal">regexp/no-empty-string-literal</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v2.0.0-next.12</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-useless-string-literal.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-useless-string-literal.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',8))])}const f=t(d,[["render",p]]);export{y as __pageData,f as default};
