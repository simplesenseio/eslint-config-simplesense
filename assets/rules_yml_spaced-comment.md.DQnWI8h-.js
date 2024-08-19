import{_ as t,D as n,c as l,I as o,w as r,a3 as a,o as p,j as s,a as e}from"./chunks/framework.vIlBslkg.js";const q=JSON.parse('{"title":"yml/spaced-comment","description":"enforce consistent spacing after the `#` in a comment","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"yml/spaced-comment","description":"enforce consistent spacing after the `#` in a comment","since":"v0.1.0"},"headers":[],"relativePath":"rules/yml/spaced-comment.md","filePath":"rules/yml/spaced-comment.md"}'),h={name:"rules/yml/spaced-comment.md"},c=a('<h1 id="yml-spaced-comment" tabindex="-1">yml/spaced-comment <a class="header-anchor" href="#yml-spaced-comment" aria-label="Permalink to &quot;yml/spaced-comment&quot;">​</a></h1><blockquote><p>enforce consistent spacing after the <code>#</code> in a comment</p></blockquote><ul><li>⚙️ This rule is included in <code>&quot;plugin:yml/standard&quot;</code>.</li><li>🔧 The <code>--fix</code> option on the <a href="https://eslint.org/docs/user-guide/command-line-interface#fixing-problems" target="_blank" rel="noreferrer">command line</a> can automatically fix some of the problems reported by this rule.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule will enforce consistency of spacing after the start of a comment <code>#</code>. It also provides several exceptions for various documentation styles.</p>',5),d=s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/spaced-comment: 'error'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#✗ BAD")])])])],-1),k=a(`<p>ESLint core <code>spaced-comment</code> rule don&#39;t work well in YAML. Turn off that rule in YAML files and use <code>yml/spaced-comment</code> rule.<br> Use the <code>overrides</code> setting to apply these only to YAML files:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  overrides: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      files: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*.yaml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*.yml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      parser: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yaml-eslint-parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;spaced-comment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;yml/spaced-comment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">yml/spaced-comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or &quot;never&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exceptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    markers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span></code></pre></div><ul><li>First option <ul><li><code>&quot;always&quot;</code> ... the <code>#</code> must be followed by at least one whitespace.</li><li><code>&quot;never&quot;</code> ... should be no whitespace following.</li></ul></li><li>Second option <ul><li><code>&quot;exceptions&quot;</code> ... It is an array of string patterns which are considered exceptions to the rule. The rule will not warn when the pattern starts from the beginning of the comment and repeats until the end of the line. Please note that exceptions are ignored if the first argument is <code>&quot;never&quot;</code>.</li><li><code>&quot;markers&quot;</code> ... It is an array of string patterns which are considered markers for docblock-style comments. The <code>&quot;markers&quot;</code> array will apply regardless of the value of the first argument, e.g. <code>&quot;always&quot;</code> or <code>&quot;never&quot;</code>.</li></ul></li></ul><p>See also <a href="https://eslint.org/docs/rules/spaced-comment#options" target="_blank" rel="noreferrer">here</a>.</p><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/spaced-comment" target="_blank" rel="noreferrer">spaced-comment</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-yml v0.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/rules/spaced-comment.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/blob/master/tests/src/rules/spaced-comment.ts" target="_blank" rel="noreferrer">Test source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-yml/tree/master/tests/fixtures/rules/spaced-comment" target="_blank" rel="noreferrer">Test fixture sources</a></li></ul><p><sup>Taken with ❤️ <a href="https://eslint.org/docs/rules/spaced-comment" target="_blank" rel="noreferrer">from ESLint core</a></sup></p>`,13);function m(u,E,g,y,f,b){const i=n("eslint-code-block");return p(),l("div",null,[c,o(i,{fix:""},{default:r(()=>[d]),_:1}),k])}const F=t(h,[["render",m]]);export{q as __pageData,F as default};
