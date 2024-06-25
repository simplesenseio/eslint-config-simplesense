import{_ as i,c as e,o as s,a2 as a}from"./chunks/framework.DKvG-fKI.js";const m=JSON.parse('{"title":"Optimize regex literals (optimize-regex)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/optimize-regex/optimize-regex.md","filePath":"rules/optimize-regex/optimize-regex.md"}'),t={name:"rules/optimize-regex/optimize-regex.md"},l=a(`<h1 id="optimize-regex-literals-optimize-regex" tabindex="-1">Optimize regex literals (optimize-regex) <a class="header-anchor" href="#optimize-regex-literals-optimize-regex" aria-label="Permalink to &quot;Optimize regex literals (optimize-regex)&quot;">​</a></h1><p>This rule enforces an idiomatic and sometimes clearer usage of regexes.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> re</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[a-zA-Z_0-9][A-Z_\\da-z]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> re</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span></code></pre></div><p>The two regexes have the exact same functionality.</p>`,8),n=[l];function p(r,h,o,k,d,g){return s(),e("div",null,n)}const u=i(t,[["render",p]]);export{m as __pageData,u as default};
