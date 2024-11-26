import{_ as a,c as e,a1 as t,o as i}from"./chunks/framework.C4wD7aVO.js";const g=JSON.parse('{"title":"template-tag-spacing","description":"","frontmatter":{"title":"template-tag-spacing","rule_type":"layout","further_reading":["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals","https://exploringjs.com/es6/ch_template-literals.html#_examples-of-using-tagged-template-literals"]},"headers":[],"relativePath":"rules/@stylistic/js/template-tag-spacing.md","filePath":"rules/@stylistic/js/template-tag-spacing.md"}'),l={name:"rules/@stylistic/js/template-tag-spacing.md"};function n(p,s,o,h,r,c){return i(),e("div",null,s[0]||(s[0]=[t('<h1 id="js-template-tag-spacing" tabindex="-1">js/template-tag-spacing <a class="header-anchor" href="#js-template-tag-spacing" aria-label="Permalink to &quot;js/template-tag-spacing&quot;">​</a></h1><p>With ES6, it&#39;s possible to create functions called <a href="#further-reading">tagged template literals</a> where the function parameters consist of a template literal&#39;s strings and expressions.</p><p>When using tagged template literals, it&#39;s possible to insert whitespace between the tag function and the template literal. Since this whitespace is optional, the following lines are equivalent:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hello </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Hello world`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hello </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Hello world`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule aims to maintain consistency around the spacing between template tag functions and their template literals.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;template-tag-spacing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;never&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>This rule has one option whose value can be set to <code>&quot;never&quot;</code> or <code>&quot;always&quot;</code></p><ul><li><code>&quot;never&quot;</code> (default) - Disallows spaces between a tag function and its template literal.</li><li><code>&quot;always&quot;</code> - Requires one or more spaces between a tag function and its template literal.</li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-label="Permalink to &quot;never&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>&quot;never&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-tag-spacing: &quot;error&quot;*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">func </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Hello world`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>&quot;never&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-tag-spacing: &quot;error&quot;*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">func</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Hello world`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h3 id="always" tabindex="-1">always <a class="header-anchor" href="#always" aria-label="Permalink to &quot;always&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;always&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-tag-spacing: [&quot;error&quot;, &quot;always&quot;]*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">func</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Hello world`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;always&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-tag-spacing: [&quot;error&quot;, &quot;always&quot;]*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">func </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Hello world`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you don&#39;t want to be notified about usage of spacing between tag functions and their template literals, then it&#39;s safe to disable this rule.</p>',31)]))}const k=a(l,[["render",n]]);export{g as __pageData,k as default};
