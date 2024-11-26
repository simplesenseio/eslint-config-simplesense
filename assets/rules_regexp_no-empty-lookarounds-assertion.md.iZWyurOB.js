import{_ as l,c as o,a1 as a,G as h,w as n,B as r,o as k,j as s,a as i}from"./chunks/framework.C4wD7aVO.js";const u=JSON.parse('{"title":"regexp/no-empty-lookarounds-assertion","description":"disallow empty lookahead assertion or empty lookbehind assertion","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-empty-lookarounds-assertion","description":"disallow empty lookahead assertion or empty lookbehind assertion","since":"v0.1.0"},"headers":[],"relativePath":"rules/regexp/no-empty-lookarounds-assertion.md","filePath":"rules/regexp/no-empty-lookarounds-assertion.md"}'),p={name:"rules/regexp/no-empty-lookarounds-assertion.md"};function d(y,e,c,g,F,E){const t=r("eslint-code-block");return k(),o("div",null,[e[1]||(e[1]=a('<h1 id="regexp-no-empty-lookarounds-assertion" tabindex="-1">regexp/no-empty-lookarounds-assertion <a class="header-anchor" href="#regexp-no-empty-lookarounds-assertion" aria-label="Permalink to &quot;regexp/no-empty-lookarounds-assertion&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><blockquote><p>disallow empty lookahead assertion or empty lookbehind assertion</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports empty lookahead assertion or empty lookbehind assertion.</p><h3 id="what-are-empty-lookarounds" tabindex="-1">What are <em>empty lookarounds</em>? <a class="header-anchor" href="#what-are-empty-lookarounds" aria-label="Permalink to &quot;What are _empty lookarounds_?&quot;">​</a></h3><p>An empty lookaround is a lookaround for which at least one path in the lookaround expression contains only elements that do not consume characters and do not assert characters. This means that the lookaround expression will trivially accept any input string.</p><p><strong>Examples:</strong></p><ul><li><code>(?=)</code>: One of the simplest empty lookarounds.</li><li><code>(?=a*)</code>: It is possible for <code>a*</code> to not consume characters, therefore the lookahead is <em>empty</em>.</li><li><code>(?=a|b*)</code>: Only one path has to not consume characters. Since it is possible for <code>b*</code> to not consume characters, the lookahead is <em>empty</em>.</li><li><code>(?=a|$)</code>: This is <strong>not</strong> an empty lookaround. <code>$</code> does not <em>consume</em> characters but it does <em>assert</em> characters. Similarly, all other standard assertions (<code>\\b</code>, <code>\\B</code>, <code>^</code>) are also not empty.</li></ul><h3 id="why-are-empty-lookarounds-a-problem" tabindex="-1">Why are empty lookarounds a problem? <a class="header-anchor" href="#why-are-empty-lookarounds-a-problem" aria-label="Permalink to &quot;Why are empty lookarounds a problem?&quot;">​</a></h3><p>Because empty lookarounds accept the empty string, they are essentially non-functional. They will always trivially reject/accept.</p><p>E.g. <code>(?=b?)\\w</code> will match <code>a</code> just fine. <code>(?=b?)</code> will always trivially accept no matter the input string. The same also happens for negated lookarounds but they will trivially reject. E.g. <code>(?!b?)\\w</code> won&#39;t match any input strings.</p><p>The only way to fix empty lookarounds is to either remove them or to rewrite the lookaround expression to be non-empty.</p>',13)),h(t,null,{default:n(()=>e[0]||(e[0]=[s("div",{class:"language-js vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-empty-lookarounds-assertion: "error" */')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"x(?=y)"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"x(?!y)"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<=y)x"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<!y)x"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"x(?=)"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"x(?!)"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<=)x"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<!)x"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?=b"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!b"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1)])),_:1}),e[2]||(e[2]=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-empty-lookarounds-assertion.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-empty-lookarounds-assertion.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',6))])}const D=l(p,[["render",d]]);export{u as __pageData,D as default};
