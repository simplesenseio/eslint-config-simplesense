import{_ as l,c as r,a1 as a,G as h,w as n,B as o,o as k,j as s,a as e}from"./chunks/framework.DHJwed8E.js";const m=JSON.parse('{"title":"regexp/sort-flags","description":"require regex flags to be sorted","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/sort-flags","description":"require regex flags to be sorted","since":"v0.9.0"},"headers":[],"relativePath":"rules/regexp/sort-flags.md","filePath":"rules/regexp/sort-flags.md"}'),p={name:"rules/regexp/sort-flags.md"};function d(g,i,c,u,f,b){const t=o("eslint-code-block");return k(),r("div",null,[i[1]||(i[1]=a('<h1 id="regexp-sort-flags" tabindex="-1">regexp/sort-flags <a class="header-anchor" href="#regexp-sort-flags" aria-label="Permalink to &quot;regexp/sort-flags&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><blockquote><p>require regex flags to be sorted</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>The flags of JavaScript regular expressions should be sorted alphabetically because the flags of the <code>.flags</code> property of <code>RegExp</code> objects are always sorted. Not sorting flags in regex literals misleads readers into thinking that the order may have some purpose which it doesn&#39;t.</p>',6)),h(t,{fix:""},{default:n(()=>i[0]||(i[0]=[s("div",{class:"language-js vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/sort-flags: "error" */')]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"iu")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"gimsuy")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"mi")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"us")])])])],-1)])),_:1}),i[2]||(i[2]=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="compatibility" tabindex="-1">❤️ Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;:heart: Compatibility&quot;">​</a></h2><p>This rule was taken from <a href="https://github.com/RunDevelopment/eslint-plugin-clean-regex" target="_blank" rel="noreferrer">eslint-plugin-clean-regex</a>.<br> This rule is compatible with <a href="https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/sort-flags.md" target="_blank" rel="noreferrer">clean-regex/sort-flags</a> rule.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.9.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/sort-flags.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/sort-flags.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',8))])}const y=l(p,[["render",d]]);export{m as __pageData,y as default};
