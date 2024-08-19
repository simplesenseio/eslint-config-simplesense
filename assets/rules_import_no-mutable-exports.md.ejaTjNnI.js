import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.vIlBslkg.js";const u=JSON.parse('{"title":"import/no-mutable-exports","description":"","frontmatter":{},"headers":[],"relativePath":"rules/import/no-mutable-exports.md","filePath":"rules/import/no-mutable-exports.md"}'),t={name:"rules/import/no-mutable-exports.md"},n=e(`<h1 id="import-no-mutable-exports" tabindex="-1">import/no-mutable-exports <a class="header-anchor" href="#import-no-mutable-exports" aria-label="Permalink to &quot;import/no-mutable-exports&quot;">​</a></h1><p>Forbids the use of mutable exports with <code>var</code> or <code>let</code>.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>Valid:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><p>...whereas here exports will be reported:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { count } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// reported here</span></span></code></pre></div><h2 id="functions-classes" tabindex="-1">Functions/Classes <a class="header-anchor" href="#functions-classes" aria-label="Permalink to &quot;Functions/Classes&quot;">​</a></h2><p>Note that exported function/class declaration identifiers may be reassigned, but are not flagged by this rule at this time. They may be in the future, if a reassignment is detected, i.e.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// possible future behavior!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// reported here: exported class is reassigned on line [x].</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Counter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KitchenSink </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// not reported here unless you enable no-class-assign</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// this pre-declaration reassignment is valid on account of function hoisting</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getDuke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// not reported here without no-func-assign</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// reported here: exported function is reassigned on line [x].</span></span></code></pre></div><p>To prevent general reassignment of these identifiers, exported or not, you may want to enable the following core ESLint rules:</p><ul><li><a href="https://eslint.org/docs/rules/no-func-assign" target="_blank" rel="noreferrer">no-func-assign</a></li><li><a href="https://eslint.org/docs/rules/no-class-assign" target="_blank" rel="noreferrer">no-class-assign</a></li></ul><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If your environment correctly implements mutable export bindings.</p>`,14),l=[n];function h(p,r,o,k,d,c){return a(),i("div",null,l)}const y=s(t,[["render",h]]);export{u as __pageData,y as default};
