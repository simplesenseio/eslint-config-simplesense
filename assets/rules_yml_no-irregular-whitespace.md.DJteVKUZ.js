import{_ as r,D as n,c as h,I as i,w as l,a3 as t,j as s,a as e,o}from"./chunks/framework.vIlBslkg.js";const v=JSON.parse('{"title":"yml/no-irregular-whitespace","description":"disallow irregular whitespace","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"yml/no-irregular-whitespace","description":"disallow irregular whitespace","since":"v0.1.0"},"headers":[],"relativePath":"rules/yml/no-irregular-whitespace.md","filePath":"rules/yml/no-irregular-whitespace.md"}'),c={name:"rules/yml/no-irregular-whitespace.md"},p=t('<h1 id="yml-no-irregular-whitespace" tabindex="-1">yml/no-irregular-whitespace <a class="header-anchor" href="#yml-no-irregular-whitespace" aria-label="Permalink to &quot;yml/no-irregular-whitespace&quot;">​</a></h1><blockquote><p>disallow irregular whitespace</p></blockquote><ul><li>⚙️ This rule is included in <code>&quot;plugin:yml/recommended&quot;</code> and <code>&quot;plugin:yml/standard&quot;</code>.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p><code>yml/no-irregular-whitespace</code> rule is aimed at catching invalid whitespace that is not a normal tab and space. Some of these characters may cause issues in YAML parsers and others will be a debugging issue to spot. <code>yml/no-irregular-whitespace</code> rule is the similar rule as core <a href="https://eslint.org/docs/rules/no-irregular-whitespace" target="_blank" rel="noreferrer">no-irregular-whitespace</a> rule but it applies to the source code in YAML.</p>',5),d=s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/no-irregular-whitespace: 'error'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"a"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"b")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✗ BAD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"c"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": \v"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"d")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#  ^ LINE TABULATION (U+000B)")])])])],-1),u=t(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yml/no-irregular-whitespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">skipQuotedScalars</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    skipComments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><ul><li><code>skipQuotedScalars</code> ... if <code>true</code>, allows any whitespace characters in quoted scalars. default <code>true</code></li><li><code>skipComments</code> ... if <code>true</code>, allows any whitespace characters in comments. default <code>false</code></li></ul><h3 id="skipquotedscalars-true-default" tabindex="-1"><code>&quot;skipQuotedScalars&quot;: true</code> (default) <a class="header-anchor" href="#skipquotedscalars-true-default" aria-label="Permalink to &quot;\`&quot;skipQuotedScalars&quot;: true\` (default)&quot;">​</a></h3>`,4),k=s("div",{class:"language-yml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/no-irregular-whitespace: [error, {skipQuotedScalars: true}]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'\vfoo'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#  ^ LINE TABULATION (U+000B)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"\vbar"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#  ^ LINE TABULATION (U+000B)")])])])],-1),g=s("h3",{id:"skipquotedscalars-false",tabindex:"-1"},[s("code",null,'"skipQuotedScalars": false'),e(),s("a",{class:"header-anchor",href:"#skipquotedscalars-false","aria-label":'Permalink to "`"skipQuotedScalars": false`"'},"​")],-1),m=s("div",{class:"language-yml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/no-irregular-whitespace: [error, {skipQuotedScalars: false}]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✗ BAD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'\vfoo'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#  ^ LINE TABULATION (U+000B)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"- "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"\vbar"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#  ^ LINE TABULATION (U+000B)")])])])],-1),y=s("h3",{id:"skipcomments-true",tabindex:"-1"},[s("code",null,'"skipComments": true'),e(),s("a",{class:"header-anchor",href:"#skipcomments-true","aria-label":'Permalink to "`"skipComments": true`"'},"​")],-1),_=s("div",{class:"language-yml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/no-irregular-whitespace: [error, {skipComments: true}]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# [\v]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"< LINE TABULATION (U+000B)")])])])],-1),E=t('<h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/no-irregular-whitespace" target="_blank" rel="noreferrer">no-irregular-whitespace</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-yml v0.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/no-irregular-whitespace.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/no-irregular-whitespace.ts" target="_blank" rel="noreferrer">Test source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/no-irregular-whitespace" target="_blank" rel="noreferrer">Test fixture sources</a></li></ul><p><sup>Taken with ❤️ <a href="https://eslint.org/docs/rules/no-irregular-whitespace" target="_blank" rel="noreferrer">from ESLint core</a></sup></p>',7);function b(A,f,D,w,C,T){const a=n("eslint-code-block");return o(),h("div",null,[p,i(a,null,{default:l(()=>[d]),_:1}),u,i(a,null,{default:l(()=>[k]),_:1}),g,i(a,null,{default:l(()=>[m]),_:1}),y,i(a,null,{default:l(()=>[_]),_:1}),E])}const F=r(c,[["render",b]]);export{v as __pageData,F as default};
