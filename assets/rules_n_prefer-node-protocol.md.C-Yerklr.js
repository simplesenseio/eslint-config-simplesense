import{_ as i,c as e,a1 as a,o as n}from"./chunks/framework.DHJwed8E.js";const c=JSON.parse('{"title":"Enforce using the node: protocol when importing Node.js builtin modules (n/prefer-node-protocol)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/prefer-node-protocol.md","filePath":"rules/n/prefer-node-protocol.md"}'),t={name:"rules/n/prefer-node-protocol.md"};function o(r,s,l,p,h,d){return n(),e("div",null,s[0]||(s[0]=[a(`<h1 id="enforce-using-the-node-protocol-when-importing-node-js-builtin-modules-n-prefer-node-protocol" tabindex="-1">Enforce using the <code>node:</code> protocol when importing Node.js builtin modules (<code>n/prefer-node-protocol</code>) <a class="header-anchor" href="#enforce-using-the-node-protocol-when-importing-node-js-builtin-modules-n-prefer-node-protocol" aria-label="Permalink to &quot;Enforce using the \`node:\` protocol when importing Node.js builtin modules (\`n/prefer-node-protocol\`)&quot;">​</a></h1><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><p>Older built-in Node modules such as fs now can be imported via either their name or <code>node:</code> + their name:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fs&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node:fs&quot;</span></span></code></pre></div><p>The prefixed versions are nice because they can&#39;t be overridden by user modules and are similarly formatted to prefix-only modules such as node:test.</p><p>Note that Node.js support for this feature began in:</p><blockquote><p>v16.0.0, v14.18.0 (<code>require()</code>)<br> v14.13.1, v12.20.0 (<code>import</code>)</p></blockquote><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><p>This rule enforces that <code>node:</code> protocol is prepended to built-in Node modules when importing or exporting built-in Node modules.</p><p>👍 Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint n/prefer-node-protocol: error */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node:fs&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { promises } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node:fs&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node:fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>👎 Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint n/prefer-node-protocol: error */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fs&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { promises } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fs&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="configured-node-js-version-range" tabindex="-1">Configured Node.js version range <a class="header-anchor" href="#configured-node-js-version-range" aria-label="Permalink to &quot;Configured Node.js version range&quot;">​</a></h3><p><a href="./../../../README#configured-nodejs-version-range">Configured Node.js version range</a></p><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;n/prefer-node-protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=16.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h4><p>As mentioned above, this rule reads the [<code>engines</code>] field of <code>package.json</code>. But, you can overwrite the version by <code>version</code> option.</p><p>The <code>version</code> option accepts <a href="https://github.com/npm/node-semver#range-grammar" target="_blank" rel="noreferrer">the valid version range of <code>node-semver</code></a>.</p><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../lib/rules/prefer-node-protocol.js">Rule source</a></li><li><a href="../../tests/lib/rules/prefer-node-protocol.js">Test source</a></li></ul>`,22)]))}const u=i(t,[["render",o]]);export{c as __pageData,u as default};
