import{_ as t,D as h,c as l,I as r,w as n,a3 as e,o,j as i,a as s}from"./chunks/framework.D8Wt_3VJ.js";const A=JSON.parse('{"title":"regexp/simplify-set-operations","description":"require simplify set operations","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/simplify-set-operations","description":"require simplify set operations","since":"v2.0.0-next.11"},"headers":[],"relativePath":"rules/regexp/simplify-set-operations.md","filePath":"rules/regexp/simplify-set-operations.md"}'),k={name:"rules/regexp/simplify-set-operations.md"},p=e('<h1 id="regexp-simplify-set-operations" tabindex="-1">regexp/simplify-set-operations <a class="header-anchor" href="#regexp-simplify-set-operations" aria-label="Permalink to &quot;regexp/simplify-set-operations&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><blockquote><p>require simplify set operations</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule aims to optimize patterns by simplifying set operations in character classes (with <code>v</code> flag).</p><p>This rule does not report simple nested negations. (e.g. <code>/[^[^abc]]/v</code>)<br> If you want to report simple nested negations, use the <a href="./negation">regexp/negation</a> rule.</p>',7),d=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/simplify-set-operations: "error" */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// -> /[a--b]/v")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"a]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// -> /[a--b]/v")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"--"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// -> /[a&&b]/v")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"a]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// -> /[^ab]/v")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"a]["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// -> /[^a&&b]/v")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"--"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"ab]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," re "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"b]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v;")])])])],-1),c=e('<h3 id="how-does-this-rule-work" tabindex="-1">How does this rule work? <a class="header-anchor" href="#how-does-this-rule-work" aria-label="Permalink to &quot;How does this rule work?&quot;">​</a></h3><p>This rule attempts to simplify set operations in the ways listed below:</p><h4 id="de-morgan-s-laws" tabindex="-1">De Morgan&#39;s laws <a class="header-anchor" href="#de-morgan-s-laws" aria-label="Permalink to &quot;De Morgan&#39;s laws&quot;">​</a></h4><p>This rule uses De Morgan&#39;s laws to look for patterns that can convert multiple negations into a single negation, reports on them, and auto-fix them.<br> For example, <code>/[[^a]&amp;&amp;[^b]]/v</code> is equivalent to <code>/[^ab]/v</code>, and <code>/[[^a][^b]]/v</code> is equivalent to <code>/[^a&amp;&amp;b]/v</code>.</p><p>See <a href="https://en.wikipedia.org/wiki/De_Morgan&#39;s_laws" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/De_Morgan&#39;s_laws</a>.</p><h4 id="conversion-from-the-intersection-to-the-subtraction" tabindex="-1">Conversion from the intersection to the subtraction <a class="header-anchor" href="#conversion-from-the-intersection-to-the-subtraction" aria-label="Permalink to &quot;Conversion from the intersection to the subtraction&quot;">​</a></h4><p>Intersection sets with complement operands can be converted to difference sets.<br> The rule looks for character class intersection with negation operands, reports on them, auto-fix them.<br> For example, <code>/[a&amp;&amp;[^b]]/v</code> is equivalent to <code>/[a--b]/v</code>, <code>/[[^a]&amp;&amp;b]/v</code> is equivalent to <code>/[b--a]/v</code>.</p><h4 id="conversion-from-the-subtraction-to-the-intersection" tabindex="-1">Conversion from the subtraction to the intersection <a class="header-anchor" href="#conversion-from-the-subtraction-to-the-intersection" aria-label="Permalink to &quot;Conversion from the subtraction to the intersection&quot;">​</a></h4><p>Difference set with a complement operand on the right side can be converted to intersection sets.<br> The rule looks for character class subtraction with negation operand on the right side, reports on them, auto-fix them.<br> For example, <code>/[a--[^b]]/v</code> is equivalent to <code>/[a&amp;&amp;b]/v</code>.</p><h3 id="auto-fixes" tabindex="-1">Auto Fixes <a class="header-anchor" href="#auto-fixes" aria-label="Permalink to &quot;Auto Fixes&quot;">​</a></h3><p>This rule&#39;s auto-fix does not remove unnecessary brackets. For example, <code>/[[^a]&amp;&amp;[^b]]/v</code> will be automatically fixed to <code>/[^[a][b]]/v</code>.<br> If you want to remove unnecessary brackets (e.g. auto-fixed to <code>/[^ab]/v</code>), use <a href="./no-useless-character-class">regexp/no-useless-character-class</a> rule together.</p><h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="./negation">regexp/negation</a></li><li><a href="./no-useless-character-class">regexp/no-useless-character-class</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v2.0.0-next.11</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/simplify-set-operations.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/simplify-set-operations.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',19);function E(g,y,u,m,b,f){const a=h("eslint-code-block");return o(),l("div",null,[p,r(a,{fix:""},{default:n(()=>[d]),_:1}),c])}const v=t(k,[["render",E]]);export{A as __pageData,v as default};