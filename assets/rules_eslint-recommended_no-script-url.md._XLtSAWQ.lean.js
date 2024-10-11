import{_ as e,c as i,a1 as a,o as t}from"./chunks/framework.DHJwed8E.js";const u=JSON.parse('{"title":"no-script-url","description":"","frontmatter":{"title":"no-script-url","rule_type":"suggestion","further_reading":["https://stackoverflow.com/questions/13497971/what-is-the-matter-with-script-targeted-urls"]},"headers":[],"relativePath":"rules/eslint-recommended/no-script-url.md","filePath":"rules/eslint-recommended/no-script-url.md"}'),r={name:"rules/eslint-recommended/no-script-url.md"};function n(l,s,o,p,c,d){return t(),i("div",null,s[0]||(s[0]=[a(`<p>Using <code>javascript:</code> URLs is considered by some as a form of <code>eval</code>. Code passed in <code>javascript:</code> URLs has to be parsed and evaluated by the browser in the same way that <code>eval</code> is processed.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>Examples of <strong>incorrect</strong> code for this rule:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-script-url: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;javascript:void(0)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`javascript:void(0)\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><ul><li><strong>JSHint</strong>: This rule corresponds to <code>scripturl</code> rule of JSHint.</li></ul>`,8)]))}const k=e(r,[["render",n]]);export{u as __pageData,k as default};
