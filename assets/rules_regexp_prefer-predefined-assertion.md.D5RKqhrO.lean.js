import{_ as r,c as l,ae as a,G as n,w as h,B as k,o,j as e,a as i}from"./chunks/framework.D_WxFy46.js";const E=JSON.parse('{"title":"regexp/prefer-predefined-assertion","description":"prefer predefined assertion over equivalent lookarounds","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/prefer-predefined-assertion","description":"prefer predefined assertion over equivalent lookarounds","since":"v0.10.0"},"headers":[],"relativePath":"rules/regexp/prefer-predefined-assertion.md","filePath":"rules/regexp/prefer-predefined-assertion.md"}'),d={name:"rules/regexp/prefer-predefined-assertion.md"};function p(g,s,F,c,f,u){const t=k("eslint-code-block");return o(),l("div",null,[s[1]||(s[1]=a('<h1 id="regexp-prefer-predefined-assertion" tabindex="-1">regexp/prefer-predefined-assertion <a class="header-anchor" href="#regexp-prefer-predefined-assertion" aria-label="Permalink to &quot;regexp/prefer-predefined-assertion&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><blockquote><p>prefer predefined assertion over equivalent lookarounds</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>All predefined assertions (<code>\\b</code>, <code>\\B</code>, <code>^</code>, and <code>$</code>) can be expressed as lookaheads and lookbehinds. E.g. <code>/a$/</code> is the same as <code>/a(?![^])/</code>.</p><p>In most cases, it&#39;s better to use the predefined assertions because they are better known.</p>',7)),n(t,{fix:""},{default:h(()=>s[0]||(s[0]=[e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/prefer-predefined-assertion: "error" */')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a(?="),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\W"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a(?!"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"["),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"]"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a(?!"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")(?:"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\s"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"bc"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1)])),_:1}),s[2]||(s[2]=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.10.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/prefer-predefined-assertion.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/prefer-predefined-assertion.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',6))])}const D=r(d,[["render",p]]);export{E as __pageData,D as default};
