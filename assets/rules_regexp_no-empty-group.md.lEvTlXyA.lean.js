import{_ as l,c as h,a1 as a,G as n,w as r,B as k,o as p,j as i,a as s}from"./chunks/framework.C4wD7aVO.js";const m=JSON.parse('{"title":"regexp/no-empty-group","description":"disallow empty group","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-empty-group","description":"disallow empty group","since":"v0.1.0"},"headers":[],"relativePath":"rules/regexp/no-empty-group.md","filePath":"rules/regexp/no-empty-group.md"}'),o={name:"rules/regexp/no-empty-group.md"};function d(g,e,F,y,E,u){const t=k("eslint-code-block");return p(),h("div",null,[e[1]||(e[1]=a('<h1 id="regexp-no-empty-group" tabindex="-1">regexp/no-empty-group <a class="header-anchor" href="#regexp-no-empty-group" aria-label="Permalink to &quot;regexp/no-empty-group&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><blockquote><p>disallow empty group</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports empty groups.</p>',5)),n(t,null,{default:r(()=>e[0]||(e[0]=[i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-empty-group: "error" */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(a)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:a)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// capturing group")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"()"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// non-capturing group")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1)])),_:1}),e[2]||(e[2]=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-empty-group.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-empty-group.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',6))])}const D=l(o,[["render",d]]);export{m as __pageData,D as default};