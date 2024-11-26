import{_ as e,c as i,o,a3 as t}from"./chunks/framework.vIlBslkg.js";const g=JSON.parse('{"title":"Disallow unsupported ECMAScript built-ins on the specified version (n/no-unsupported-features/es-builtins)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/es-builtins.md","filePath":"rules/n/es-builtins.md"}'),s={name:"rules/n/es-builtins.md"},a=t(`<h1 id="disallow-unsupported-ecmascript-built-ins-on-the-specified-version-n-no-unsupported-features-es-builtins" tabindex="-1">Disallow unsupported ECMAScript built-ins on the specified version (<code>n/no-unsupported-features/es-builtins</code>) <a class="header-anchor" href="#disallow-unsupported-ecmascript-built-ins-on-the-specified-version-n-no-unsupported-features-es-builtins" aria-label="Permalink to &quot;Disallow unsupported ECMAScript built-ins on the specified version (\`n/no-unsupported-features/es-builtins\`)&quot;">​</a></h1><p>💼 This rule is enabled in the following <a href="https://github.com/eslint-community/eslint-plugin-n#-configs" target="_blank" rel="noreferrer">configs</a>: 🟢 <code>recommended-module</code>, ✅ <code>recommended-script</code>.</p><p>ECMAScript standard is updating every two months. You can check <a href="https://node.green/" target="_blank" rel="noreferrer">node.green</a> to know which Node.js version supports each ECMAScript feature.</p><p>This rule reports unsupported ECMAScript built-in variables on the configured Node.js version as lint errors. Editor integrations of ESLint would be useful to know it in real-time.</p><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><h3 id="supported-ecmascript-features" tabindex="-1">Supported ECMAScript features <a class="header-anchor" href="#supported-ecmascript-features" aria-label="Permalink to &quot;Supported ECMAScript features&quot;">​</a></h3><p>This rule supports ECMAScript 2019 and proposals that have been approved as Stage 4 by August 2019. See also <a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md" target="_blank" rel="noreferrer">TC39 finished proposals</a>.</p><h3 id="configured-node-js-version-range" tabindex="-1">Configured Node.js version range <a class="header-anchor" href="#configured-node-js-version-range" aria-label="Permalink to &quot;Configured Node.js version range&quot;">​</a></h3><p><a href="./../../../README#configured-nodejs-version-range">Configured Node.js version range</a></p><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;n/no-unsupported-features/es-builtins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=16.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ignores&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h4><p>As mentioned above, this rule reads the <a href="https://docs.npmjs.com/files/package.json#engines" target="_blank" rel="noreferrer"><code>engines</code></a> field of <code>package.json</code>. But, you can overwrite the version by <code>version</code> option.</p><p>The <code>version</code> option accepts <a href="https://github.com/npm/node-semver#range-grammar" target="_blank" rel="noreferrer">the valid version range of <code>node-semver</code></a>.</p><h4 id="ignores" tabindex="-1">ignores <a class="header-anchor" href="#ignores" aria-label="Permalink to &quot;ignores&quot;">​</a></h4><p>If you are using transpilers, maybe you want to ignore the warnings about some features. You can use this <code>ignores</code> option to ignore the given features.</p><p>The <code>&quot;ignores&quot;</code> option accepts an array of the following strings.</p><details><p><strong>ES2021:</strong></p><ul><li><code>&quot;AggregateError&quot;</code></li><li><code>&quot;Promise.any&quot;</code></li><li><code>&quot;WeakRef&quot;</code></li><li><code>&quot;FinalizationRegistry&quot;</code></li></ul><p><strong>ES2020:</strong></p><ul><li><code>&quot;BigInt&quot;</code></li><li><code>&quot;BigInt64Array&quot;</code></li><li><code>&quot;BigUint64Array&quot;</code></li><li><code>&quot;Promise.allSettled&quot;</code></li><li><code>&quot;globalThis&quot;</code></li></ul><p><strong>ES2019:</strong></p><ul><li><code>&quot;Object.fromEntries&quot;</code></li></ul><p><strong>ES2017:</strong></p><ul><li><code>&quot;Atomics&quot;</code></li><li><code>&quot;Object.values&quot;</code></li><li><code>&quot;Object.entries&quot;</code></li><li><code>&quot;Object.getOwnPropertyDescriptors&quot;</code></li><li><code>&quot;SharedArrayBuffer&quot;</code></li></ul><p><strong>ES2015:</strong></p><ul><li><code>&quot;Array.from&quot;</code></li><li><code>&quot;Array.of&quot;</code></li><li><code>&quot;Map&quot;</code></li><li><code>&quot;Math.acosh&quot;</code></li><li><code>&quot;Math.asinh&quot;</code></li><li><code>&quot;Math.atanh&quot;</code></li><li><code>&quot;Math.cbrt&quot;</code></li><li><code>&quot;Math.clz32&quot;</code></li><li><code>&quot;Math.cosh&quot;</code></li><li><code>&quot;Math.expm1&quot;</code></li><li><code>&quot;Math.fround&quot;</code></li><li><code>&quot;Math.hypot&quot;</code></li><li><code>&quot;Math.imul&quot;</code></li><li><code>&quot;Math.log10&quot;</code></li><li><code>&quot;Math.log1p&quot;</code></li><li><code>&quot;Math.log2&quot;</code></li><li><code>&quot;Math.sign&quot;</code></li><li><code>&quot;Math.sinh&quot;</code></li><li><code>&quot;Math.tanh&quot;</code></li><li><code>&quot;Math.trunc&quot;</code></li><li><code>&quot;Number.EPSILON&quot;</code></li><li><code>&quot;Number.isFinite&quot;</code></li><li><code>&quot;Number.isInteger&quot;</code></li><li><code>&quot;Number.isNaN&quot;</code></li><li><code>&quot;Number.isSafeInteger&quot;</code></li><li><code>&quot;Number.MAX_SAFE_INTEGER&quot;</code></li><li><code>&quot;Number.MIN_SAFE_INTEGER&quot;</code></li><li><code>&quot;Number.parseFloat&quot;</code></li><li><code>&quot;Number.parseInt&quot;</code></li><li><code>&quot;Object.assign&quot;</code></li><li><code>&quot;Object.getOwnPropertySymbols&quot;</code></li><li><code>&quot;Object.is&quot;</code></li><li><code>&quot;Object.setPrototypeOf&quot;</code></li><li><code>&quot;Promise&quot;</code></li><li><code>&quot;Proxy&quot;</code></li><li><code>&quot;Reflect&quot;</code></li><li><code>&quot;Set&quot;</code></li><li><code>&quot;String.fromCodePoint&quot;</code></li><li><code>&quot;String.raw&quot;</code></li><li><code>&quot;Symbol&quot;</code></li><li><code>&quot;Int8Array&quot;</code></li><li><code>&quot;Uint8Array&quot;</code></li><li><code>&quot;Uint8ClampedArray&quot;</code></li><li><code>&quot;Int16Array&quot;</code></li><li><code>&quot;Uint16Array&quot;</code></li><li><code>&quot;Int32Array&quot;</code></li><li><code>&quot;Uint32Array&quot;</code></li><li><code>&quot;Float32Array&quot;</code></li><li><code>&quot;Float64Array&quot;</code></li><li><code>&quot;DataView&quot;</code></li><li><code>&quot;WeakMap&quot;</code></li><li><code>&quot;WeakSet&quot;</code></li></ul></details><h3 id="shared-settings" tabindex="-1">Shared Settings <a class="header-anchor" href="#shared-settings" aria-label="Permalink to &quot;Shared Settings&quot;">​</a></h3><p>The following options can be set by <a href="http://eslint.org/docs/user-guide/configuring.html#adding-shared-settings" target="_blank" rel="noreferrer">shared settings</a>. Several rules have the same option, but we can set this option at once.</p><ul><li><code>version</code></li></ul><p>For Example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=16.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-unsupported-features/es-builtins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;ignores&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="known-limitations" tabindex="-1">Known limitations <a class="header-anchor" href="#known-limitations" aria-label="Permalink to &quot;Known limitations&quot;">​</a></h3><p>This rule cannot find non-static things. For example:</p><ul><li>New properties and methods of instances.</li><li>New parameters of functions.</li><li>New <code>options</code> properties of function parameters.</li><li>New events.</li></ul><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../../lib/rules/no-unsupported-features/es-builtins.js">Rule source</a></li><li><a href="../../../tests/lib/rules/no-unsupported-features/es-builtins.js">Test source</a></li></ul>`,28),n=[a];function l(r,u,d,c,p,h){return o(),i("div",null,n)}const k=e(s,[["render",l]]);export{g as __pageData,k as default};