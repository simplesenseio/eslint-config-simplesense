import{_ as o,c as r,ae as a,G as n,w as t,B as h,o as p,j as e,a as i}from"./chunks/framework.D_WxFy46.js";const E=JSON.parse('{"title":"yml/block-sequence-hyphen-indicator-newline","description":"enforce consistent line breaks after `-` indicator","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"yml/block-sequence-hyphen-indicator-newline","description":"enforce consistent line breaks after `-` indicator","since":"v0.5.0"},"headers":[],"relativePath":"rules/yml/block-sequence-hyphen-indicator-newline.md","filePath":"rules/yml/block-sequence-hyphen-indicator-newline.md"}'),c={name:"rules/yml/block-sequence-hyphen-indicator-newline.md"};function k(d,s,u,y,g,m){const l=h("eslint-code-block");return p(),r("div",null,[s[2]||(s[2]=a('<h1 id="yml-block-sequence-hyphen-indicator-newline" tabindex="-1">yml/block-sequence-hyphen-indicator-newline <a class="header-anchor" href="#yml-block-sequence-hyphen-indicator-newline" aria-label="Permalink to &quot;yml/block-sequence-hyphen-indicator-newline&quot;">​</a></h1><blockquote><p>enforce consistent line breaks after <code>-</code> indicator</p></blockquote><ul><li>⚙️ This rule is included in <code>&quot;plugin:yml/standard&quot;</code>.</li><li>🔧 The <code>--fix</code> option on the <a href="https://eslint.org/docs/user-guide/command-line-interface#fixing-problems" target="_blank" rel="noreferrer">command line</a> can automatically fix some of the problems reported by this rule.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule aims to enforce consistent line breaks after <code>-</code> indicator.</p>',5)),n(l,{fix:""},{default:t(()=>s[0]||(s[0]=[e("div",{class:"language-yaml vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/block-sequence-hyphen-indicator-newline: 'error'")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"GOOD"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✗ BAD")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"-")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'  "BAD"')])])])],-1)])),_:1}),s[3]||(s[3]=a(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yml/block-sequence-hyphen-indicator-newline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">never</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or &quot;always&quot; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nestedHyphen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or &quot;never&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">blockMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">never</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or &quot;always&quot;</span></span></code></pre></div><ul><li><p>Styles</p><ul><li><code>&quot;always&quot;</code> ... Requires line breaks after after <code>-</code> indicator of block style sequences.</li><li><code>&quot;never&quot;</code> ... Disallow line breaks after after <code>-</code> indicator of block style sequences.</li></ul></li><li><p>Properties</p><ul><li><code>nestedHyphen</code> ... Specifies the style to apply to nested hyphens. default <code>&quot;always&quot;</code></li><li><code>blockMapping</code> ... Specifies the style to apply to block mapping. If unspecified, the value of <code>Styles</code> is used.</li></ul></li></ul><h3 id="blockmapping-always" tabindex="-1"><code>&quot;blockMapping&quot;: &quot;always&quot;</code> <a class="header-anchor" href="#blockmapping-always" aria-label="Permalink to &quot;\`&quot;blockMapping&quot;: &quot;always&quot;\`&quot;">​</a></h3>`,4)),n(l,{fix:""},{default:t(()=>s[1]||(s[1]=[e("div",{class:"language-yaml vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/block-sequence-hyphen-indicator-newline: ['error', 'never', { blockMapping: 'always' }]")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"-")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  keyA"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"GOOD"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- { "),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"keyB"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"GOOD"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✗ BAD")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"key"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"BAD"')])])])],-1)])),_:1}),s[4]||(s[4]=a('<h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="./flow-sequence-bracket-newline">yml/flow-sequence-bracket-newline</a></li><li><a href="./flow-mapping-curly-newline">yml/flow-mapping-curly-newline</a></li><li><a href="./key-spacing">yml/key-spacing</a></li><li><a href="./block-mapping-question-indicator-newline">yml/block-mapping-question-indicator-newline</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-yml v0.5.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/block-sequence-hyphen-indicator-newline.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/block-sequence-hyphen-indicator-newline.ts" target="_blank" rel="noreferrer">Test source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/block-sequence-hyphen-indicator-newline" target="_blank" rel="noreferrer">Test fixture sources</a></li></ul>',6))])}const f=o(c,[["render",k]]);export{E as __pageData,f as default};
