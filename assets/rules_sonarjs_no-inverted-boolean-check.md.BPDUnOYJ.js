import{_ as s,c as i,a1 as e,o as n}from"./chunks/framework.DHJwed8E.js";const k=JSON.parse('{"title":"no-inverted-boolean-check","description":"","frontmatter":{},"headers":[],"relativePath":"rules/sonarjs/no-inverted-boolean-check.md","filePath":"rules/sonarjs/no-inverted-boolean-check.md"}'),t={name:"rules/sonarjs/no-inverted-boolean-check.md"};function l(o,a,p,h,r,c){return n(),i("div",null,a[0]||(a[0]=[e(`<h1 id="no-inverted-boolean-check" tabindex="-1">no-inverted-boolean-check <a class="header-anchor" href="#no-inverted-boolean-check" aria-label="Permalink to &quot;no-inverted-boolean-check&quot;">​</a></h1><p>🔧 <em>fixable</em></p><p>It is needlessly complex to invert the result of a boolean comparison. The opposite comparison should be made instead.</p><h2 id="noncompliant-code-example" tabindex="-1">Noncompliant Code Example <a class="header-anchor" href="#noncompliant-code-example" aria-label="Permalink to &quot;Noncompliant Code Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Noncompliant</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="compliant-solution" tabindex="-1">Compliant Solution <a class="header-anchor" href="#compliant-solution" aria-label="Permalink to &quot;Compliant Solution&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,7)]))}const m=s(t,[["render",l]]);export{k as __pageData,m as default};
