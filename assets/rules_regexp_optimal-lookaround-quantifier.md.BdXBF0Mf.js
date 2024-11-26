import{_ as l,c as h,a1 as e,G as n,w as r,B as k,o,j as i,a as s}from"./chunks/framework.C4wD7aVO.js";const m=JSON.parse('{"title":"regexp/optimal-lookaround-quantifier","description":"disallow the alternatives of lookarounds that end with a non-constant quantifier","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/optimal-lookaround-quantifier","description":"disallow the alternatives of lookarounds that end with a non-constant quantifier","since":"v0.8.0"},"headers":[],"relativePath":"rules/regexp/optimal-lookaround-quantifier.md","filePath":"rules/regexp/optimal-lookaround-quantifier.md"}'),d={name:"rules/regexp/optimal-lookaround-quantifier.md"};function p(g,a,c,F,u,y){const t=k("eslint-code-block");return o(),h("div",null,[a[1]||(a[1]=e('<h1 id="regexp-optimal-lookaround-quantifier" tabindex="-1">regexp/optimal-lookaround-quantifier <a class="header-anchor" href="#regexp-optimal-lookaround-quantifier" aria-label="Permalink to &quot;regexp/optimal-lookaround-quantifier&quot;">​</a></h1><p>⚠️ This rule <em>warns</em> in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>💡 This rule is manually fixable by <a href="https://eslint.org/docs/latest/use/core-concepts#rule-suggestions" target="_blank" rel="noreferrer">editor suggestions</a>.</p><blockquote><p>disallow the alternatives of lookarounds that end with a non-constant quantifier</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>Non-constant quantifiers are quantifiers that describe a range (e.g. <code>?</code>, <code>*</code>, <code>+</code>, <code>{0,1}</code>, <code>{5,9}</code>, <code>{3,}</code>). They have to match some number of times (the minimum) after which further matches are optional until a certain maximum (potentially infinite) is reached.</p><p>It&#39;s obvious that <code>/ba{2}/</code> and <code>/ba{2,6}/</code> will match differently because of the different quantifiers of <code>a</code> but that not the case if for lookarounds. Both <code>/b(?=a{2})/</code> and <code>/b(?=a{2,6})/</code> will match strings the same way. I.e. for the input string <code>&quot;baaa&quot;</code>, both will create the same match arrays. The two regular expressions are actually equivalent, meaning that <code>(?=a{2})</code> is equivalent to <code>(?=a{2,6})</code>.</p><p>More generally, if a non-constant quantifier is an <strong>end</strong> of the expression tree of a <strong>lookahead</strong>, that quantifier can be replaced with a constant quantifier that matched the element minimum-if-the-non-constant-quantifier many times. For <strong>lookbehinds</strong>, the non-constant quantifier has to be at the <strong>start</strong> of the expression tree, as lookbehinds are matched from right to left.</p>',8)),n(t,null,{default:r(()=>a[0]||(a[0]=[i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/optimal-lookaround-quantifier: "error" */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// lookaheads")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\s"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},":)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// lookbehinds")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<=ab"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// lookaheads")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?=ab"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// == /(?=ab)/")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?=ab"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// == /(?=a)/")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!ab"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// == /(?!a)/")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!ab"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{6,}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// == /(?!ab{6})/")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// lookbehinds")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<=a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// == /(?<=ab)/")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<!"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\s"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},",)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// == /(?<!,)/")])])])],-1)])),_:1}),a[2]||(a[2]=e('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="compatibility" tabindex="-1">❤️ Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;:heart: Compatibility&quot;">​</a></h2><p>This rule was taken from <a href="https://github.com/RunDevelopment/eslint-plugin-clean-regex" target="_blank" rel="noreferrer">eslint-plugin-clean-regex</a>.<br> This rule is compatible with <a href="https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/optimal-lookaround-quantifier.md" target="_blank" rel="noreferrer">clean-regex/optimal-lookaround-quantifier</a> rule.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.8.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/optimal-lookaround-quantifier.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/optimal-lookaround-quantifier.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',8))])}const D=l(d,[["render",p]]);export{m as __pageData,D as default};
