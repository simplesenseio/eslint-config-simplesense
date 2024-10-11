import{_ as a,c as i,a1 as e,o as n}from"./chunks/framework.DHJwed8E.js";const c=JSON.parse('{"title":"Enforce a case style for filenames","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/filename-case.md","filePath":"rules/unicorn/filename-case.md"}'),t={name:"rules/unicorn/filename-case.md"};function l(p,s,h,o,k,r){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="enforce-a-case-style-for-filenames" tabindex="-1">Enforce a case style for filenames <a class="header-anchor" href="#enforce-a-case-style-for-filenames" aria-label="Permalink to &quot;Enforce a case style for filenames&quot;">​</a></h1><p>💼 This rule is enabled in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>Enforces all linted files to have their names in a certain case style and lowercase file extension. The default is <code>kebabCase</code>.</p><p>Files named <code>index.js</code>, <code>index.mjs</code>, <code>index.cjs</code>, <code>index.ts</code>, <code>index.tsx</code>, <code>index.vue</code> are ignored as they can&#39;t change case (Only a problem with <code>pascalCase</code>).</p><p>Characters in the filename except <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, <code>-</code>, and <code>_</code> are ignored.</p><h2 id="cases" tabindex="-1">Cases <a class="header-anchor" href="#cases" aria-label="Permalink to &quot;Cases&quot;">​</a></h2><h3 id="kebabcase" tabindex="-1"><code>kebabCase</code> <a class="header-anchor" href="#kebabcase" aria-label="Permalink to &quot;\`kebabCase\`&quot;">​</a></h3><ul><li><code>foo-bar.js</code></li><li><code>foo-bar.test.js</code></li><li><code>foo-bar.test-utils.js</code></li></ul><h3 id="camelcase" tabindex="-1"><code>camelCase</code> <a class="header-anchor" href="#camelcase" aria-label="Permalink to &quot;\`camelCase\`&quot;">​</a></h3><ul><li><code>fooBar.js</code></li><li><code>fooBar.test.js</code></li><li><code>fooBar.testUtils.js</code></li></ul><h3 id="snakecase" tabindex="-1"><code>snakeCase</code> <a class="header-anchor" href="#snakecase" aria-label="Permalink to &quot;\`snakeCase\`&quot;">​</a></h3><ul><li><code>foo_bar.js</code></li><li><code>foo_bar.test.js</code></li><li><code>foo_bar.test_utils.js</code></li></ul><h3 id="pascalcase" tabindex="-1"><code>pascalCase</code> <a class="header-anchor" href="#pascalcase" aria-label="Permalink to &quot;\`pascalCase\`&quot;">​</a></h3><ul><li><code>FooBar.js</code></li><li><code>FooBar.Test.js</code></li><li><code>FooBar.TestUtils.js</code></li></ul><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="case" tabindex="-1">case <a class="header-anchor" href="#case" aria-label="Permalink to &quot;case&quot;">​</a></h3><p>Type: <code>string</code></p><p>You can set the <code>case</code> option like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kebabCase&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="cases-1" tabindex="-1">cases <a class="header-anchor" href="#cases-1" aria-label="Permalink to &quot;cases&quot;">​</a></h3><p>Type: <code>{[type: string]: boolean}</code></p><p>You can set the <code>cases</code> option to allow multiple cases:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;cases&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;camelCase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;pascalCase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="ignore" tabindex="-1">ignore <a class="header-anchor" href="#ignore" aria-label="Permalink to &quot;ignore&quot;">​</a></h3><p>Type: <code>Array&lt;string | RegExp&gt;</code><br> Default: <code>[]</code></p><p>Filenames to ignore.</p><p>When a string is given, it&#39;s interpreted as a regular expressions inside a string. Needed for ESLint config in JSON.</p><p>Sometimes you may have non-standard filenames in a project. This option lets you ignore those files.</p><p>For example:</p><ul><li>Vendor packages that are not published and was copy-pasted.</li><li>Ignore some files when you use <a href="https://github.com/eslint/eslint-plugin-markdown" target="_blank" rel="noreferrer">eslint-plugin-markdown</a>, for example <code>README.md</code>.</li><li>Some tools may require special names for some files.</li></ul><p>Don&#39;t forget that you must escape special characters that you don&#39;t want to be interpreted as part of the regex, for example, if you have <code>[</code> in the actual filename. For example, to match <code>[id].js</code>, use <code>/^\\[id]\\.js$/</code> or <code>&#39;^\\\\[id]\\\\.js$&#39;</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kebabCase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;ignore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;^FOOBAR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.js$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;^(B|b)az&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.SOMETHING</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.js$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">vendor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">i</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="multiplefileextensions" tabindex="-1">multipleFileExtensions <a class="header-anchor" href="#multiplefileextensions" aria-label="Permalink to &quot;multipleFileExtensions&quot;">​</a></h3><p>Type: <code>boolean</code><br> Default: <code>true</code></p><p>Whether to treat additional, <code>.</code>-separated parts of a filename as parts of the extension rather than parts of the filename.</p><p>Note that the parts of the filename treated as the extension will not have the filename case enforced.</p><p>For example:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pascalCase&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Results</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.Test.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.TestUtils.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.testUtils.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.test.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utils.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.test_utils.js</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unicorn/filename-case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;case&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pascalCase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;multipleFileExtensions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Results</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.Test.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ FooBar.TestUtils.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">❌ FooBar.testUtils.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">❌ FooBar.test.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">❌ FooBar.test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utils.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">❌ FooBar.test_utils.js</span></span></code></pre></div>`,39)]))}const E=a(t,[["render",l]]);export{c as __pageData,E as default};
