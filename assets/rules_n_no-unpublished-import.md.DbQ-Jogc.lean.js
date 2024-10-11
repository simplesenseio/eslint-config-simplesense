import{_ as i,c as e,a1 as a,o as t}from"./chunks/framework.DHJwed8E.js";const k=JSON.parse('{"title":"Disallow import declarations which import private modules (n/no-unpublished-import)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/no-unpublished-import.md","filePath":"rules/n/no-unpublished-import.md"}'),n={name:"rules/n/no-unpublished-import.md"};function o(l,s,p,h,r,d){return t(),e("div",null,s[0]||(s[0]=[a(`<h1 id="disallow-import-declarations-which-import-private-modules-n-no-unpublished-import" tabindex="-1">Disallow <code>import</code> declarations which import private modules (<code>n/no-unpublished-import</code>) <a class="header-anchor" href="#disallow-import-declarations-which-import-private-modules-n-no-unpublished-import" aria-label="Permalink to &quot;Disallow \`import\` declarations which import private modules (\`n/no-unpublished-import\`)&quot;">​</a></h1><p>💼 This rule is enabled in the following <a href="https://github.com/eslint-community/eslint-plugin-n#-configs" target="_blank" rel="noreferrer">configs</a>: 🟢 <code>recommended-module</code>, ✅ <code>recommended-script</code>.</p><p>This is similar to <a href="./no-unpublished-require">no-unpublished-require</a>, but this rule handles <code>import</code> declarations.</p><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><p>If a source code file satisfies all of the following conditions, the file is *published*.</p><ul><li><code>&quot;files&quot;</code> field of <code>package.json</code> includes the file or <code>&quot;files&quot;</code> field of <code>package.json</code> does not exist.</li><li><code>.npmignore</code> does not include the file.</li></ul><p>Then this rule warns <code>import</code> declarations in *published* files if the <code>import</code> declaration imports *unpublished* files or the packages of <code>devDependencies</code>.</p><blockquote><p>This intends to prevent &quot;Module Not Found&quot; error after <code>npm publish</code>.<br> 💡 If you want to import <code>devDependencies</code>, please write <code>.npmignore</code> or <code>&quot;files&quot;</code> field of <code>package.json</code>.</p></blockquote><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-unpublished-import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;allowModules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;convertPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="allowmodules" tabindex="-1">allowModules <a class="header-anchor" href="#allowmodules" aria-label="Permalink to &quot;allowModules&quot;">​</a></h4><p>This can be configured in the rule options or as a shared setting <a href="./../shared-settings#allowmodules"><code>settings.allowModules</code></a>. Please see the shared settings documentation for more information.</p><h4 id="resolvepaths" tabindex="-1">resolvePaths <a class="header-anchor" href="#resolvepaths" aria-label="Permalink to &quot;resolvePaths&quot;">​</a></h4><p>This can be configured in the rule options or as a shared setting <a href="./../shared-settings#resolvepaths"><code>settings.resolvePaths</code></a>. Please see the shared settings documentation for more information.</p><h4 id="convertpath" tabindex="-1">convertPath <a class="header-anchor" href="#convertpath" aria-label="Permalink to &quot;convertPath&quot;">​</a></h4><p>This can be configured in the rule options or as a shared setting <a href="./../shared-settings#convertpath"><code>settings.convertPath</code></a>. Please see the shared settings documentation for more information.</p><h3 id="ignoretypeimport" tabindex="-1">ignoreTypeImport <a class="header-anchor" href="#ignoretypeimport" aria-label="Permalink to &quot;ignoreTypeImport&quot;">​</a></h3><p>If using typescript, you may want to ignore type imports. This option allows you to do that.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-unpublished-import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;ignoreTypeImport&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In this way, the following code will not be reported:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="ignoreprivate" tabindex="-1">ignorePrivate <a class="header-anchor" href="#ignoreprivate" aria-label="Permalink to &quot;ignorePrivate&quot;">​</a></h3><p>In a private package you sometimes want to disable checking for unpublished dependencies, e.g. if the package is not published.</p><p>However, there are situations where you want to mark it as private, though still ensure only published dependencies are used in your source code. An example, for such a case would be a package that is deployed to a server.</p><p>Defaults to <code>true</code>.</p><p>package.json:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;private&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;n/no-unpublished-import&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;ignorePrivate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../lib/rules/no-unpublished-import.js">Rule source</a></li><li><a href="../../tests/lib/rules/no-unpublished-import.js">Test source</a></li></ul>`,30)]))}const u=i(n,[["render",o]]);export{k as __pageData,u as default};
