import{_ as e,c as s,o,a2 as i}from"./chunks/framework.DKvG-fKI.js";const k=JSON.parse('{"title":"Disallow unsupported ECMAScript syntax on the specified version (n/no-unsupported-features/es-syntax)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/es-syntax.md","filePath":"rules/n/es-syntax.md"}'),t={name:"rules/n/es-syntax.md"},a=i(`<h1 id="disallow-unsupported-ecmascript-syntax-on-the-specified-version-n-no-unsupported-features-es-syntax" tabindex="-1">Disallow unsupported ECMAScript syntax on the specified version (<code>n/no-unsupported-features/es-syntax</code>) <a class="header-anchor" href="#disallow-unsupported-ecmascript-syntax-on-the-specified-version-n-no-unsupported-features-es-syntax" aria-label="Permalink to &quot;Disallow unsupported ECMAScript syntax on the specified version (\`n/no-unsupported-features/es-syntax\`)&quot;">​</a></h1><p>💼 This rule is enabled in the following <a href="https://github.com/eslint-community/eslint-plugin-n#-configs" target="_blank" rel="noreferrer">configs</a>: ☑️ <code>flat/recommended</code>, 🟢 <code>flat/recommended-module</code>, ✅ <code>flat/recommended-script</code>, ☑️ <code>recommended</code>, 🟢 <code>recommended-module</code>, ✅ <code>recommended-script</code>.</p><p>ECMAScript standard is updating every two months. You can check <a href="https://node.green/" target="_blank" rel="noreferrer">node.green</a> to know which Node.js version supports each ECMAScript feature.</p><p>This rule reports unsupported ECMAScript syntax on the configured Node.js version as lint errors. Editor integrations of ESLint would be useful to know it in real-time.</p><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><h3 id="supported-ecmascript-features" tabindex="-1">Supported ECMAScript features <a class="header-anchor" href="#supported-ecmascript-features" aria-label="Permalink to &quot;Supported ECMAScript features&quot;">​</a></h3><p>This rule supports ECMAScript 2019 and proposals that have been approved as Stage 4 by August 2019. See also <a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md" target="_blank" rel="noreferrer">TC39 finished proposals</a>.</p><p>Please configure your <code>.eslintrc</code> file to succeed to succeed in parsing the syntax. For example, set <code>2020</code> to <code>parserOptions.ecmaVersion</code>.</p><h3 id="configured-node-js-version-range" tabindex="-1">Configured Node.js version range <a class="header-anchor" href="#configured-node-js-version-range" aria-label="Permalink to &quot;Configured Node.js version range&quot;">​</a></h3><p><a href="./../../../README#configured-nodejs-version-range">Configured Node.js version range</a></p><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;n/no-unsupported-features/es-syntax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=16.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ignores&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h4><p>As mentioned above, this rule reads the <a href="https://docs.npmjs.com/files/package.json#engines" target="_blank" rel="noreferrer"><code>engines</code></a> field of <code>package.json</code>. But, you can overwrite the version by <code>version</code> option.</p><p>The <code>version</code> option accepts <a href="https://github.com/npm/node-semver#range-grammar" target="_blank" rel="noreferrer">the valid version range of <code>node-semver</code></a>.</p><h4 id="ignores" tabindex="-1">ignores <a class="header-anchor" href="#ignores" aria-label="Permalink to &quot;ignores&quot;">​</a></h4><p>If you are using transpilers, maybe you want to ignore the warnings about some features. You can use this <code>ignores</code> option to ignore the given features.</p><p>The <code>&quot;ignores&quot;</code> option accepts an array of the following strings.</p><details><p><strong>ES2020:</strong></p><ul><li><code>&quot;bigint&quot;</code></li><li><code>&quot;dynamicImport&quot;</code></li><li><code>&quot;optionalChaining&quot;</code></li><li><code>&quot;nullishCoalescingOperators&quot;</code></li></ul><p><strong>ES2019:</strong></p><ul><li><code>&quot;jsonSuperset&quot;</code></li><li><code>&quot;optionalCatchBinding&quot;</code></li></ul><p><strong>ES2018:</strong></p><ul><li><code>&quot;asyncIteration&quot;</code></li><li><code>&quot;malformedTemplateLiterals&quot;</code></li><li><code>&quot;regexpLookbehind&quot;</code></li><li><code>&quot;regexpNamedCaptureGroups&quot;</code></li><li><code>&quot;regexpS&quot;</code></li><li><code>&quot;regexpUnicodeProperties&quot;</code></li><li><code>&quot;restSpreadProperties&quot;</code></li></ul><p><strong>ES2017:</strong></p><ul><li><code>&quot;asyncFunctions&quot;</code></li><li><code>&quot;trailingCommasInFunctions&quot;</code></li></ul><p><strong>ES2016:</strong></p><ul><li><code>&quot;exponentialOperators&quot;</code></li></ul><p><strong>ES2015:</strong></p><ul><li><code>&quot;arrowFunctions&quot;</code></li><li><code>&quot;binaryNumericLiterals&quot;</code></li><li><code>&quot;blockScopedFunctions&quot;</code></li><li><code>&quot;blockScopedVariables&quot;</code></li><li><code>&quot;classes&quot;</code></li><li><code>&quot;computedProperties&quot;</code></li><li><code>&quot;defaultParameters&quot;</code></li><li><code>&quot;destructuring&quot;</code></li><li><code>&quot;forOfLoops&quot;</code></li><li><code>&quot;generators&quot;</code></li><li><code>&quot;modules&quot;</code></li><li><code>&quot;new.target&quot;</code></li><li><code>&quot;objectSuperProperties&quot;</code></li><li><code>&quot;octalNumericLiterals&quot;</code></li><li><code>&quot;propertyShorthands&quot;</code></li><li><code>&quot;regexpU&quot;</code></li><li><code>&quot;regexpY&quot;</code></li><li><code>&quot;restParameters&quot;</code></li><li><code>&quot;spreadElements&quot;</code></li><li><code>&quot;templateLiterals&quot;</code></li><li><code>&quot;unicodeCodePointEscapes&quot;</code></li></ul></details><h3 id="shared-settings" tabindex="-1">Shared Settings <a class="header-anchor" href="#shared-settings" aria-label="Permalink to &quot;Shared Settings&quot;">​</a></h3><p>The following options can be set by <a href="http://eslint.org/docs/user-guide/configuring.html#adding-shared-settings" target="_blank" rel="noreferrer">shared settings</a>. Several rules have the same option, but we can set this option at once.</p><ul><li><code>version</code></li></ul><p>For Example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=16.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-unsupported-features/es-syntax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;ignores&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../../lib/rules/no-unsupported-features/es-syntax.js">Rule source</a></li><li><a href="../../../tests/lib/rules/no-unsupported-features/es-syntax.js">Test source</a></li></ul>`,26),n=[a];function r(l,d,p,u,c,h){return o(),s("div",null,n)}const q=e(t,[["render",r]]);export{k as __pageData,q as default};
