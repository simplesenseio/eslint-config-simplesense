import{_ as t,D as l,c as n,I as h,w as r,a3 as a,o,l as s,a as i}from"./chunks/framework.ClQ4Qie4.js";const _=JSON.parse('{"title":"regexp/no-misleading-unicode-character","description":"disallow multi-code-point characters in character classes and quantifiers","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-misleading-unicode-character","description":"disallow multi-code-point characters in character classes and quantifiers","since":"v1.2.0"},"headers":[],"relativePath":"rules/regexp/no-misleading-unicode-character.md","filePath":"rules/regexp/no-misleading-unicode-character.md"}'),p={name:"rules/regexp/no-misleading-unicode-character.md"},k=a(`<h1 id="regexp-no-misleading-unicode-character" tabindex="-1">regexp/no-misleading-unicode-character <a class="header-anchor" href="#regexp-no-misleading-unicode-character" aria-label="Permalink to &quot;regexp/no-misleading-unicode-character&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧💡 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a> and manually fixable by <a href="https://eslint.org/docs/latest/use/core-concepts#rule-suggestions" target="_blank" rel="noreferrer">editor suggestions</a>.</p><blockquote><p>disallow multi-code-point characters in character classes and quantifiers</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports misleading Unicode characters.</p><p>Some Unicode characters like &#39;❇️&#39;, &#39;🏴‍☠️&#39;, and &#39;👨‍👩‍👦&#39; consist of multiple code points. This causes problems in character classes and around quantifiers. E.g.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[❇️🏴‍☠️]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;🏴‍☠️&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">👨‍👩‍👦</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{2,4}$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;👨‍👩‍👦👨‍👩‍👦&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><p>This rule is inspired by the <a href="https://eslint.org/docs/rules/no-misleading-character-class" target="_blank" rel="noreferrer">no-misleading-character-class</a> rule.</p>`,9),d=s("div",{class:"language-js vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-misleading-unicode-character: "error" */')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"👍"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"👨‍👩‍👦"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"👍"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"[❇️🏴‍☠️👨‍👩‍👦]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"❤️"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1),c=a(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;regexp/no-unused-capturing-group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;fixable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><p><code>fixable: true | false</code></p><p>This option controls whether the rule is fixable. Defaults to <code>false</code>.</p><p>This rule is not fixable by default. Misleading Unicode characters can typically be fixed automatically by assuming that users want to treat one displayed character as one regex character. However, this assumption is not useful in all languages, so this rule provides suggestions instead of fixes by default.</p></li></ul><h2 id="further-reading" tabindex="-1">📚 Further reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further reading&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/no-misleading-character-class" target="_blank" rel="noreferrer">no-misleading-character-class</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v1.2.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-misleading-unicode-character.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-misleading-unicode-character.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>`,9);function g(u,E,F,y,m,f){const e=l("eslint-code-block");return o(),n("div",null,[k,h(e,{fix:""},{default:r(()=>[d]),_:1}),c])}const C=t(p,[["render",g]]);export{_ as __pageData,C as default};
