import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.vIlBslkg.js";const m=JSON.parse('{"title":"import/named","description":"","frontmatter":{},"headers":[],"relativePath":"rules/import/named.md","filePath":"rules/import/named.md"}'),n={name:"rules/import/named.md"},t=e(`<h1 id="import-named" tabindex="-1">import/named <a class="header-anchor" href="#import-named" aria-label="Permalink to &quot;import/named&quot;">​</a></h1><p>💼🚫 This rule is enabled in the following configs: ❗ <code>errors</code>, ☑️ <code>recommended</code>. This rule is <em>disabled</em> in the ⌨️ <code>typescript</code> config.</p><p>Verifies that all named imports are part of the set of named exports in the referenced module.</p><p>For <code>export</code>, verifies that all named exports exist in the referenced module.</p><p>Note: for packages, the plugin will find exported names from <a href="https://github.com/jsforum/jsforum/issues/5" target="_blank" rel="noreferrer"><code>jsnext:main</code></a> (deprecated) or <code>module</code>, if present in <code>package.json</code>. Redux&#39;s npm module includes this key, and thereby is lintable, for example.</p><p>A module path that is <a href="./../../README#importignore">ignored</a> or not <a href="https://github.com/bmeck/UnambiguousJavaScriptGrammar" target="_blank" rel="noreferrer">unambiguously an ES module</a> will not be reported when imported. Note that type imports and exports, as used by <a href="https://flow.org/" target="_blank" rel="noreferrer">Flow</a>, are always ignored.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>Given:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ./foo.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;I&#39;m so foo&quot;</span></span></code></pre></div><p>The following is considered valid:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ./bar.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { foo } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ES7 proposal</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// node_modules without jsnext:main are not analyzed by default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// (import/ignore setting)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SomeNonsenseThatDoesntExist } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span></span></code></pre></div><p>...and the following are reported:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ./baz.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { notFoo } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ES7 proposal</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { notFoo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> defNotBar } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// will follow &#39;jsnext:main&#39;, if available</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { dontCreateStore } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;redux&#39;</span></span></code></pre></div><h3 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h3><p><a href="./../../README#importignore"><code>import/ignore</code></a> can be provided as a setting to ignore certain modules (node_modules, CoffeeScript, CSS if using Webpack, etc.).</p><p>Given:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .eslintrc (YAML)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  import/ignore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # included by default, but replaced if explicitly configured</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.coffee$     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># can&#39;t parse CoffeeScript (unless a custom polyglot parser was configured)</span></span></code></pre></div><p>and</p><div class="language-coffeescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">coffeescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ./whatever.coffee</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.whatever </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (foo) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span></span></code></pre></div><p>then the following is not reported:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ./foo.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// can&#39;t be analyzed, and ignored, so not reported</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { notWhatever } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./whatever&#39;</span></span></code></pre></div><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you are using CommonJS and/or modifying the exported namespace of any module at runtime, you will likely see false positives with this rule.</p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h2><ul><li><a href="./../../README#importignore"><code>import/ignore</code></a> setting</li><li><a href="https://github.com/jsforum/jsforum/issues/5" target="_blank" rel="noreferrer"><code>jsnext:main</code></a> deprecation</li><li><a href="https://github.com/rollup/rollup/wiki/pkg.module" target="_blank" rel="noreferrer"><code>pkg.module</code></a> (Rollup)</li></ul>`,25),l=[t];function p(h,o,r,d,k,c){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{m as __pageData,u as default};
