import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.ClQ4Qie4.js";const g=JSON.parse('{"title":"template-curly-spacing","description":"","frontmatter":{"title":"template-curly-spacing","rule_type":"layout"},"headers":[],"relativePath":"rules/eslint-recommended/template-curly-spacing.md","filePath":"rules/eslint-recommended/template-curly-spacing.md"}'),t={name:"rules/eslint-recommended/template-curly-spacing.md"},n=e('<p>This rule was <strong>deprecated</strong> in ESLint v8.53.0. Please use the <a href="https://eslint.style/rules/js/template-curly-spacing" target="_blank" rel="noreferrer">corresponding rule</a> in <a href="https://eslint.style/packages/js" target="_blank" rel="noreferrer"><code>@stylistic/eslint-plugin-js</code></a>.</p><p>We can embed expressions in template strings with using a pair of <code>${</code> and <code>}</code>.</p><p>This rule can force usage of spacing <em>within</em> the curly brace pair according to style guides.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hello </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule aims to maintain consistency around the spacing inside of template literals.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;template-curly-spacing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;never&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>This rule has one option which has either <code>&quot;never&quot;</code> or <code>&quot;always&quot;</code> as value.</p><ul><li><code>&quot;never&quot;</code> (by default) - Disallows spaces inside of the curly brace pair.</li><li><code>&quot;always&quot;</code> - Requires one or more spaces inside of the curly brace pair.</li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-label="Permalink to &quot;never&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>&quot;never&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-curly-spacing: &quot;error&quot;*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>&quot;never&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-curly-spacing: &quot;error&quot;*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h3 id="always" tabindex="-1">always <a class="header-anchor" href="#always" aria-label="Permalink to &quot;always&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;always&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-curly-spacing: [&quot;error&quot;, &quot;always&quot;]*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;always&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint template-curly-spacing: [&quot;error&quot;, &quot;always&quot;]*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`hello, ${</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    people</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you don&#39;t want to be notified about usage of spacing inside of template strings, then it&#39;s safe to disable this rule.</p>',31),l=[n];function p(h,r,k,o,d,c){return a(),i("div",null,l)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};