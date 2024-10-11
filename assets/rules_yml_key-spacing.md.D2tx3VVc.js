import{_ as n,c as t,a1 as a,G as r,w as h,B as p,o,j as s,a as i}from"./chunks/framework.DHJwed8E.js";const b=JSON.parse('{"title":"yml/key-spacing","description":"enforce consistent spacing between keys and values in mapping pairs","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"yml/key-spacing","description":"enforce consistent spacing between keys and values in mapping pairs","since":"v0.3.0"},"headers":[],"relativePath":"rules/yml/key-spacing.md","filePath":"rules/yml/key-spacing.md"}'),k={name:"rules/yml/key-spacing.md"};function c(d,e,g,u,y,m){const l=p("eslint-code-block");return o(),t("div",null,[e[1]||(e[1]=a('<h1 id="yml-key-spacing" tabindex="-1">yml/key-spacing <a class="header-anchor" href="#yml-key-spacing" aria-label="Permalink to &quot;yml/key-spacing&quot;">​</a></h1><blockquote><p>enforce consistent spacing between keys and values in mapping pairs</p></blockquote><ul><li>⚙️ This rule is included in <code>&quot;plugin:yml/standard&quot;</code>.</li><li>🔧 The <code>--fix</code> option on the <a href="https://eslint.org/docs/user-guide/command-line-interface#fixing-problems" target="_blank" rel="noreferrer">command line</a> can automatically fix some of the problems reported by this rule.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule enforces consistent spacing between keys and values in mapping pairs. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed.</p>',5)),r(l,{fix:""},{default:h(()=>e[0]||(e[0]=[s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/key-spacing: 'error'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # ✓ GOOD")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'  "GOOD"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"foo"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # ✗ BAD")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'  "BAD"'),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' :"bar"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"---")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"GOOD"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"foo"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- ? "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"GOOD"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  : "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"foo"')])])])],-1)])),_:1}),e[2]||(e[2]=a(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yml/key-spacing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">beforeColon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    afterColon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">strict</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or &quot;minimum&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # &quot;align&quot;: &quot;value&quot; or &quot;colon&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # &quot;singleLine&quot;: {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # &quot;multiLine&quot;: {}</span></span></code></pre></div><p>Same as <a href="https://eslint.org/docs/rules/key-spacing" target="_blank" rel="noreferrer">key-spacing</a> rule option. See <a href="https://eslint.org/docs/rules/key-spacing#options" target="_blank" rel="noreferrer">here</a> for details.</p><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/key-spacing" target="_blank" rel="noreferrer">key-spacing</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-yml v0.3.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/key-spacing.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/key-spacing.ts" target="_blank" rel="noreferrer">Test source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/key-spacing" target="_blank" rel="noreferrer">Test fixture sources</a></li></ul><p><sup>Taken with ❤️ <a href="https://eslint.org/docs/rules/key-spacing" target="_blank" rel="noreferrer">from ESLint core</a></sup></p>`,10))])}const f=n(k,[["render",c]]);export{b as __pageData,f as default};
