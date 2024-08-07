import{_ as l,D as t,c as n,I as r,w as o,a3 as i,o as p,j as s,a as e}from"./chunks/framework.D8Wt_3VJ.js";const w=JSON.parse('{"title":"yml/flow-mapping-curly-spacing","description":"enforce consistent spacing inside braces","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"yml/flow-mapping-curly-spacing","description":"enforce consistent spacing inside braces","since":"v0.1.0"},"headers":[],"relativePath":"rules/yml/flow-mapping-curly-spacing.md","filePath":"rules/yml/flow-mapping-curly-spacing.md"}'),c={name:"rules/yml/flow-mapping-curly-spacing.md"},h=i('<h1 id="yml-flow-mapping-curly-spacing" tabindex="-1">yml/flow-mapping-curly-spacing <a class="header-anchor" href="#yml-flow-mapping-curly-spacing" aria-label="Permalink to &quot;yml/flow-mapping-curly-spacing&quot;">​</a></h1><blockquote><p>enforce consistent spacing inside braces</p></blockquote><ul><li>⚙️ This rule is included in <code>&quot;plugin:yml/standard&quot;</code>.</li><li>🔧 The <code>--fix</code> option on the <a href="https://eslint.org/docs/user-guide/command-line-interface#fixing-problems" target="_blank" rel="noreferrer">command line</a> can automatically fix some of the problems reported by this rule.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule enforces consistent spacing inside braces of flow mappings.</p>',5),d=s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/flow-mapping-curly-spacing: 'error'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- {"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"b"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✗ BAD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- { "),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"b"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }")])])])],-1),k=i(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yml/flow-mapping-curly-spacing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or &quot;never&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">arraysInObjects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    objectsInObjects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><p>Same as <a href="https://eslint.org/docs/rules/object-curly-spacing" target="_blank" rel="noreferrer">object-curly-spacing</a> rule option. See <a href="https://eslint.org/docs/rules/object-curly-spacing#options" target="_blank" rel="noreferrer">here</a> for details.</p><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/object-curly-spacing" target="_blank" rel="noreferrer">object-curly-spacing</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-yml v0.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/flow-mapping-curly-spacing.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/flow-mapping-curly-spacing.ts" target="_blank" rel="noreferrer">Test source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/flow-mapping-curly-spacing" target="_blank" rel="noreferrer">Test fixture sources</a></li></ul><p><sup>Taken with ❤️ <a href="https://eslint.org/docs/rules/object-curly-spacing" target="_blank" rel="noreferrer">from ESLint core</a></sup></p>`,10);function u(g,m,y,f,E,b){const a=t("eslint-code-block");return p(),n("div",null,[h,r(a,{fix:""},{default:o(()=>[d]),_:1}),k])}const D=l(c,[["render",u]]);export{w as __pageData,D as default};
