import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.D8Wt_3VJ.js";const y=JSON.parse('{"title":"no-empty-collection","description":"","frontmatter":{},"headers":[],"relativePath":"rules/sonarjs/no-empty-collection.md","filePath":"rules/sonarjs/no-empty-collection.md"}'),t={name:"rules/sonarjs/no-empty-collection.md"},e=n(`<h1 id="no-empty-collection" tabindex="-1">no-empty-collection <a class="header-anchor" href="#no-empty-collection" aria-label="Permalink to &quot;no-empty-collection&quot;">​</a></h1><p>When a collection is empty it makes no sense to access or iterate it. Doing so anyway is surely an error; either population was accidentally omitted or the developer doesn’t understand the situation.</p><h2 id="noncompliant-code-example" tabindex="-1">Noncompliant Code Example <a class="header-anchor" href="#noncompliant-code-example" aria-label="Permalink to &quot;Noncompliant Code Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> strings </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (strings.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Noncompliant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> strings) {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Noncompliant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strings.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Noncompliant</span></span></code></pre></div>`,4),l=[e];function p(o,h,r,k,c,d){return a(),i("div",null,l)}const g=s(t,[["render",p]]);export{y as __pageData,g as default};
