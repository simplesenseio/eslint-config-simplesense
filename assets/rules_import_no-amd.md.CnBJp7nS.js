import{_ as i,c as s,o as a,a3 as t}from"./chunks/framework.vIlBslkg.js";const E=JSON.parse('{"title":"import/no-amd","description":"","frontmatter":{},"headers":[],"relativePath":"rules/import/no-amd.md","filePath":"rules/import/no-amd.md"}'),e={name:"rules/import/no-amd.md"},n=t(`<h1 id="import-no-amd" tabindex="-1">import/no-amd <a class="header-anchor" href="#import-no-amd" aria-label="Permalink to &quot;import/no-amd&quot;">​</a></h1><p>Reports <code>require([array], ...)</code> and <code>define([array], ...)</code> function calls at the module scope. Will not report if !=2 arguments, or first argument is not a literal array.</p><p>Intended for temporary use when migrating to pure ES6 modules.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This will be reported:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span></code></pre></div><p>CommonJS <code>require</code> is still valid.</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you don&#39;t mind mixing module systems (sometimes this is useful), you probably don&#39;t want this rule.</p><p>It is also fairly noisy if you have a larger codebase that is being transitioned from AMD to ES6 modules.</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2><p>Special thanks to @xjamundx for donating his no-define rule as a start to this.</p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h2><ul><li><a href="./no-commonjs"><code>no-commonjs</code></a>: report CommonJS <code>require</code> and <code>exports</code></li><li>Source: <a href="https://github.com/xjamundx/eslint-plugin-modules" target="_blank" rel="noreferrer">https://github.com/xjamundx/eslint-plugin-modules</a></li></ul>`,14),r=[n];function o(l,h,p,d,k,u){return a(),s("div",null,r)}const m=i(e,[["render",o]]);export{E as __pageData,m as default};
