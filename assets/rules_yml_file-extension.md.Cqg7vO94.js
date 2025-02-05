import{_ as n,c as o,j as e,a as i,G as a,w as t,ae as r,B as p,o as h}from"./chunks/framework.D_WxFy46.js";const x=JSON.parse('{"title":"yml/file-extension","description":"enforce YAML file extension","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"yml/file-extension","description":"enforce YAML file extension","since":"v1.2.0"},"headers":[],"relativePath":"rules/yml/file-extension.md","filePath":"rules/yml/file-extension.md"}'),d={name:"rules/yml/file-extension.md"};function k(m,s,c,u,f,y){const l=p("eslint-code-block");return h(),o("div",null,[s[2]||(s[2]=e("h1",{id:"yml-file-extension",tabindex:"-1"},[i("yml/file-extension "),e("a",{class:"header-anchor",href:"#yml-file-extension","aria-label":'Permalink to "yml/file-extension"'},"​")],-1)),s[3]||(s[3]=e("blockquote",null,[e("p",null,"enforce YAML file extension")],-1)),s[4]||(s[4]=e("h2",{id:"rule-details",tabindex:"-1"},[i("📖 Rule Details "),e("a",{class:"header-anchor",href:"#rule-details","aria-label":'Permalink to ":book: Rule Details"'},"​")],-1)),s[5]||(s[5]=e("p",null,"This rule aims to enforce YAML file extension.",-1)),a(l,{"file-name":"example.yaml"},{default:t(()=>s[0]||(s[0]=[e("div",{class:"language-yaml vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# filename is `example.yaml`")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/file-extension: 'error'")])])])],-1)])),_:1}),a(l,{"file-name":"example.yaml"},{default:t(()=>s[1]||(s[1]=[e("div",{class:"language-yaml vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✗ BAD")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# filename is `example.yml`")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/file-extension: 'error'")])])])],-1)])),_:1}),s[6]||(s[6]=r(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yml/file-extension</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">extension</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yaml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or &#39;yml&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    caseSensitive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><ul><li><code>extension</code> ... The extension you want to enforce. Default is <code>&quot;yaml&quot;</code>.</li><li><code>caseSensitive</code> ... Specify <code>true</code> to enforce lowercase extension. Default is <code>true</code>.</li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-yml v1.2.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/file-extension.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/file-extension.ts" target="_blank" rel="noreferrer">Test source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/file-extension" target="_blank" rel="noreferrer">Test fixture sources</a></li></ul>`,7))])}const b=n(d,[["render",k]]);export{x as __pageData,b as default};
