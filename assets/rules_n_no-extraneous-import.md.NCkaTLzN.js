import{_ as e,c as s,o as a,a3 as t}from"./chunks/framework.vIlBslkg.js";const k=JSON.parse('{"title":"Disallow import declarations which import extraneous modules (n/no-extraneous-import)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/no-extraneous-import.md","filePath":"rules/n/no-extraneous-import.md"}'),o={name:"rules/n/no-extraneous-import.md"},i=t(`<h1 id="disallow-import-declarations-which-import-extraneous-modules-n-no-extraneous-import" tabindex="-1">Disallow <code>import</code> declarations which import extraneous modules (<code>n/no-extraneous-import</code>) <a class="header-anchor" href="#disallow-import-declarations-which-import-extraneous-modules-n-no-extraneous-import" aria-label="Permalink to &quot;Disallow \`import\` declarations which import extraneous modules (\`n/no-extraneous-import\`)&quot;">​</a></h1><p>💼 This rule is enabled in the following <a href="https://github.com/eslint-community/eslint-plugin-n#-configs" target="_blank" rel="noreferrer">configs</a>: 🟢 <code>recommended-module</code>, ✅ <code>recommended-script</code>.</p><p>If an <code>import</code> declaration&#39;s source is extraneous (it&#39;s not written in <code>package.json</code>), the program works in local, but will not work after dependencies are re-installed. It will cause troubles to your team/contributors. This rule disallows <code>import</code> declarations of extraneous modules.</p><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><p>This rule warns <code>import</code> declarations of extraneous modules.</p><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-extraneous-import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;allowModules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;resolvePaths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="allowmodules" tabindex="-1">allowModules <a class="header-anchor" href="#allowmodules" aria-label="Permalink to &quot;allowModules&quot;">​</a></h4><p>This can be configured in the rule options or as a shared setting <a href="./../shared-settings#allowmodules"><code>settings.allowModules</code></a>. Please see the shared settings documentation for more information.</p><h4 id="resolvepaths" tabindex="-1">resolvePaths <a class="header-anchor" href="#resolvepaths" aria-label="Permalink to &quot;resolvePaths&quot;">​</a></h4><p>This can be configured in the rule options or as a shared setting <a href="./../shared-settings#resolvepaths"><code>settings.resolvePaths</code></a>. Please see the shared settings documentation for more information.</p><h4 id="convertpath" tabindex="-1">convertPath <a class="header-anchor" href="#convertpath" aria-label="Permalink to &quot;convertPath&quot;">​</a></h4><p>This can be configured in the rule options or as a shared setting <a href="./../shared-settings#convertpath"><code>settings.convertPath</code></a>. Please see the shared settings documentation for more information.</p><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../lib/rules/no-extraneous-import.js">Rule source</a></li><li><a href="../../tests/lib/rules/no-extraneous-import.js">Test source</a></li></ul>`,15),n=[i];function r(l,h,d,p,c,u){return a(),s("div",null,n)}const g=e(o,[["render",r]]);export{k as __pageData,g as default};
