import{_ as t,c as o,j as e,t as i,a3 as a,a as n,o as l}from"./chunks/framework.ZJ0k6Sl1.js";const q=JSON.parse('{"title":"Disallow unsupported Node.js built-in APIs on the specified version (n/no-unsupported-features/node-builtins)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/node-builtins.md","filePath":"rules/n/node-builtins.md"}'),r={name:"rules/n/node-builtins.md"},p=a(`<h1 id="disallow-unsupported-node-js-built-in-apis-on-the-specified-version-n-no-unsupported-features-node-builtins" tabindex="-1">Disallow unsupported Node.js built-in APIs on the specified version (<code>n/no-unsupported-features/node-builtins</code>) <a class="header-anchor" href="#disallow-unsupported-node-js-built-in-apis-on-the-specified-version-n-no-unsupported-features-node-builtins" aria-label="Permalink to &quot;Disallow unsupported Node.js built-in APIs on the specified version (\`n/no-unsupported-features/node-builtins\`)&quot;">​</a></h1><p>💼 This rule is enabled in the following <a href="https://github.com/eslint-community/eslint-plugin-n#-configs" target="_blank" rel="noreferrer">configs</a>: 🟢 <code>recommended-module</code>, ✅ <code>recommended-script</code>.</p><p>Node.js community is improving built-in APIs continuously. You can check <a href="https://nodejs.org/api/" target="_blank" rel="noreferrer">Node.js Documentation</a> to know which Node.js version supports each Node.js API.</p><p>This rule reports unsupported Node.js built-in APIs on the configured Node.js version as lint errors. Editor integrations of ESLint would be useful to know it in real-time.</p><p>This only supports the static apis, eg <code>Buffer.from</code> is supported, but <code>Buffer#includes</code> is not.</p><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><p>This rule reports APIs of Node.js built-in APIs on the basis of <a href="https://nodejs.org/docs/v13.2.0/api/" target="_blank" rel="noreferrer">Node.js v13.2.0 Documentation</a>.</p><h3 id="configured-node-js-version-range" tabindex="-1">Configured Node.js version range <a class="header-anchor" href="#configured-node-js-version-range" aria-label="Permalink to &quot;Configured Node.js version range&quot;">​</a></h3><p><a href="./../../../README#configured-nodejs-version-range">Configured Node.js version range</a></p><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;n/no-unsupported-features/node-builtins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=16.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ignores&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h4><p>As mentioned above, this rule reads the <a href="https://docs.npmjs.com/files/package.json#engines" target="_blank" rel="noreferrer"><code>engines</code></a> field of <code>package.json</code>. But, you can overwrite the version by <code>version</code> option.</p><p>The <code>version</code> option accepts <a href="https://github.com/npm/node-semver#range-grammar" target="_blank" rel="noreferrer">the valid version range of <code>node-semver</code></a>.</p><h4 id="allowexperimental" tabindex="-1">allowExperimental <a class="header-anchor" href="#allowexperimental" aria-label="Permalink to &quot;allowExperimental&quot;">​</a></h4><p>This allows you to enable experimental features that are available in your configured node version</p><p>The <code>&quot;allowExperimental&quot;</code> option accepts a boolean value (the default value is <code>false</code>).</p><h4 id="ignores" tabindex="-1">ignores <a class="header-anchor" href="#ignores" aria-label="Permalink to &quot;ignores&quot;">​</a></h4><p>If you are using transpilers, maybe you want to ignore the warnings about some features. You can use this <code>ignores</code> option to ignore the given features.</p><p>The <code>&quot;ignores&quot;</code> option accepts an array of strings.</p>`,20),d={class:"tip custom-block github-alert"},h=e("p",{class:"custom-block-title"},"TIP",-1),u=e("p",null,"You will see the following error messages:",-1),c=e("p",null,[n('The "name" property is what you can use in your '),e("code",null,"ignores"),n(" array You can find the full tree view of the list of the modules over in "),e("a",{href:"https://github.com/eslint-community/eslint-plugin-n/tree/HEAD/lib/unsupported-features/node-builtins-modules",target:"_blank",rel:"noreferrer"},"lib/unsupported-features/node-builtins-modules"),n(". and globals over in "),e("a",{href:"https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/lib/unsupported-features/node-globals.js",target:"_blank",rel:"noreferrer"},"lib/unsupported-features/node-globals.js")],-1),k=a(`<h3 id="shared-settings" tabindex="-1">Shared Settings <a class="header-anchor" href="#shared-settings" aria-label="Permalink to &quot;Shared Settings&quot;">​</a></h3><p>The following options can be set by <a href="http://eslint.org/docs/user-guide/configuring.html#adding-shared-settings" target="_blank" rel="noreferrer">shared settings</a>. Several rules have the same option, but we can set this option at once.</p><ul><li><code>version</code></li></ul><p>For Example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=16.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-unsupported-features/node-builtins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;ignores&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="known-limitations" tabindex="-1">Known limitations <a class="header-anchor" href="#known-limitations" aria-label="Permalink to &quot;Known limitations&quot;">​</a></h3><p>This rule cannot find non-static things. For example:</p><ul><li>New properties and methods of instances.</li><li>New parameters of functions.</li><li>New <code>options</code> properties of function parameters.</li><li>New events.</li></ul><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../../lib/rules/no-unsupported-features/node-builtins.js">Rule source</a></li><li><a href="../../../tests/lib/rules/no-unsupported-features/node-builtins.js">Test source</a></li></ul>`,10);function g(s,E,f,m,b,y){return l(),o("div",null,[p,e("div",d,[h,u,e("ul",null,[e("li",null,[e("code",null,"The '"+i(s.name)+"' is not an experimental feature until Node.js "+i(s.version)+".",1)]),e("li",null,[e("code",null,"The '"+i(s.name)+"' is still an experimental feature and is not supported until Node.js "+i(s.version)+".",1)]),e("li",null,[e("code",null,"The '"+i(s.name)+"' is still an experimental feature",1)])]),c]),k])}const _=t(r,[["render",g]]);export{q as __pageData,_ as default};
