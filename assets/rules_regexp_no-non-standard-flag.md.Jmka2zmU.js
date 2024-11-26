import{_ as n,D as t,c as l,I as r,w as o,a3 as e,o as h,j as a,a as s}from"./chunks/framework.vIlBslkg.js";const D=JSON.parse('{"title":"regexp/no-non-standard-flag","description":"disallow non-standard flags","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-non-standard-flag","description":"disallow non-standard flags","since":"v0.9.0"},"headers":[],"relativePath":"rules/regexp/no-non-standard-flag.md","filePath":"rules/regexp/no-non-standard-flag.md"}'),d={name:"rules/regexp/no-non-standard-flag.md"},p=e('<h1 id="regexp-no-non-standard-flag" tabindex="-1">regexp/no-non-standard-flag <a class="header-anchor" href="#regexp-no-non-standard-flag" aria-label="Permalink to &quot;regexp/no-non-standard-flag&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><blockquote><p>disallow non-standard flags</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports non-standard flags.</p><p>Some JavaScript runtime implementations allow special flags not defined in the ECMAScript standard. These flags are experimental and should not be used in production code.</p>',6),k=a("div",{class:"language-js vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"js"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-non-standard-flag: "error" */')]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b"),a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"c"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"guy"),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),a("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," RegExp"),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"(?:a|a)*b"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"l"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")])])])],-1),c=e('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.9.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-non-standard-flag.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-non-standard-flag.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',6);function g(u,_,f,m,E,b){const i=t("eslint-code-block");return h(),l("div",null,[p,r(i,null,{default:o(()=>[k]),_:1}),c])}const y=n(d,[["render",g]]);export{D as __pageData,y as default};