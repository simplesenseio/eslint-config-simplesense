import{_ as t,D as r,c as l,I as h,w as n,a3 as s,o,j as e,a as i}from"./chunks/framework.D8Wt_3VJ.js";const D=JSON.parse('{"title":"regexp/prefer-set-operation","description":"prefer character class set operations instead of lookarounds","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/prefer-set-operation","description":"prefer character class set operations instead of lookarounds","since":"v2.0.0-next.9"},"headers":[],"relativePath":"rules/regexp/prefer-set-operation.md","filePath":"rules/regexp/prefer-set-operation.md"}'),p={name:"rules/regexp/prefer-set-operation.md"},k=s('<h1 id="regexp-prefer-set-operation" tabindex="-1">regexp/prefer-set-operation <a class="header-anchor" href="#regexp-prefer-set-operation" aria-label="Permalink to &quot;regexp/prefer-set-operation&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><blockquote><p>prefer character class set operations instead of lookarounds</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>Regular expressions with the <code>v</code> flag have access to character class set operations (e.g. <code>/[\\s&amp;&amp;\\p{ASCII}]/v</code>, <code>/[\\w--\\d]/v</code>). These are more readable and performant than using lookarounds to achieve the same effect. For example, <code>/(?!\\d)\\w/v</code> is the same as <code>/[\\w--\\d]/v</code>.</p>',6),d=e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/prefer-set-operation: "error" */')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // requires the v flag")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u"),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," // requires the v flag")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?!"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"\\d)\\w"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"var foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?!"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"\\s)[\\w\\"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"P"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{ASCII}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")])])])],-1),c=s('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v2.0.0-next.9</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/prefer-set-operation.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/prefer-set-operation.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',6);function g(u,f,E,F,_,m){const a=r("eslint-code-block");return o(),l("div",null,[k,h(a,{fix:""},{default:n(()=>[d]),_:1}),c])}const b=t(p,[["render",g]]);export{D as __pageData,b as default};
