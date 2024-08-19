import{_ as s,c as i,o as e,a3 as n}from"./chunks/framework.vIlBslkg.js";const b=JSON.parse('{"title":"Disallow bin files that npm ignores (n/no-unpublished-bin)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/no-unpublished-bin.md","filePath":"rules/n/no-unpublished-bin.md"}'),a={name:"rules/n/no-unpublished-bin.md"},t=n(`<h1 id="disallow-bin-files-that-npm-ignores-n-no-unpublished-bin" tabindex="-1">Disallow <code>bin</code> files that npm ignores (<code>n/no-unpublished-bin</code>) <a class="header-anchor" href="#disallow-bin-files-that-npm-ignores-n-no-unpublished-bin" aria-label="Permalink to &quot;Disallow \`bin\` files that npm ignores (\`n/no-unpublished-bin\`)&quot;">​</a></h1><p>💼 This rule is enabled in the following <a href="https://github.com/eslint-community/eslint-plugin-n#-configs" target="_blank" rel="noreferrer">configs</a>: 🟢 <code>recommended-module</code>, ✅ <code>recommended-script</code>.</p><p>We can publish CLI commands by <code>npm</code>. It uses <code>bin</code> field of <code>package.json</code>.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;command-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;bin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bin/index.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>At this time, if <code>npm</code> ignores the file, your package will fail to install.</p><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><p>If <code>npm</code> ignores the files in <code>bin</code> field, this rule warns the files.</p><ul><li>If <code>files</code> field does not includes the files in <code>bin</code> field.</li><li>If <code>.npmignore</code> file includes the files in <code>bin</code> field.</li></ul><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-unpublished-bin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;convertPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="convertpath" tabindex="-1">convertPath <a class="header-anchor" href="#convertpath" aria-label="Permalink to &quot;convertPath&quot;">​</a></h4><p>This can be configured in the rule options or as a shared setting <a href="./../shared-settings#convertpath"><code>settings.convertPath</code></a>. Please see the shared settings documentation for more information.</p><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../lib/rules/no-unpublished-bin.js">Rule source</a></li><li><a href="../../tests/lib/rules/no-unpublished-bin.js">Test source</a></li></ul>`,14),l=[t];function o(h,p,d,r,c,u){return e(),i("div",null,l)}const E=s(a,[["render",o]]);export{b as __pageData,E as default};
