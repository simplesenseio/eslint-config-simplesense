import{_ as t,D as l,c as n,I as h,w as o,a3 as e,o as r,l as i,a as s}from"./chunks/framework.ClQ4Qie4.js";const f=JSON.parse('{"title":"regexp/no-optional-assertion","description":"disallow optional assertions","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-optional-assertion","description":"disallow optional assertions","since":"v0.9.0"},"headers":[],"relativePath":"rules/regexp/no-optional-assertion.md","filePath":"rules/regexp/no-optional-assertion.md"}'),k={name:"rules/regexp/no-optional-assertion.md"},p=e('<h1 id="regexp-no-optional-assertion" tabindex="-1">regexp/no-optional-assertion <a class="header-anchor" href="#regexp-no-optional-assertion" aria-label="Permalink to &quot;regexp/no-optional-assertion&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><blockquote><p>disallow optional assertions</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>Assertions that are quantified (directly or indirectly) can be considered optional if the quantifier has a minimum of zero.</p><p>A simple example is the following pattern: <code>/a(?:$)*b/</code>. The <code>$</code> assertion will reject, but if that happens it will simply be ignored because of the <code>*</code> quantifier. The assertion is optional, serving no function whatsoever.</p><p>More generally, an assertion is optional, if there exists a parent quantifier with a minimum of zero such that all possible paths of the quantified element that contain the assertion do not consume characters.</p><p>Here&#39;s an example: <code>a(?:foo|(?&lt;!-)(?:-|\\b))*b</code>. The <code>\\b</code> is optional. However, the lookbehind <code>(?&lt;!-)</code> is not optional because the group <code>(?:-|\\b)</code> right after it can consume a character.</p><p>Optional assertions don&#39;t affect the pattern in any way. They are essentially dead code.</p>',9),d=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-optional-assertion: "error" */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?::"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|\\b"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a(?:"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a(?:foo"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<!-)(?:-"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|\\b"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"))"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// The `\\b` is optional.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";   "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// warns about `^`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?::"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// warns about `$`")])])])],-1),c=e('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="compatibility" tabindex="-1">❤️ Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;:heart: Compatibility&quot;">​</a></h2><p>This rule was taken from <a href="https://github.com/RunDevelopment/eslint-plugin-clean-regex" target="_blank" rel="noreferrer">eslint-plugin-clean-regex</a>.<br> This rule is compatible with <a href="https://github.com/RunDevelopment/eslint-plugin-clean-regex/blob/master/docs/rules/no-optional-assertion.md" target="_blank" rel="noreferrer">clean-regex/no-optional-assertion</a> rule.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.9.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-optional-assertion.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-optional-assertion.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',8);function g(F,y,u,D,E,b){const a=l("eslint-code-block");return r(),n("div",null,[p,h(a,null,{default:o(()=>[d]),_:1}),c])}const _=t(k,[["render",g]]);export{f as __pageData,_ as default};
