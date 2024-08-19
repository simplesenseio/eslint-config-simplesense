import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.vIlBslkg.js";const g=JSON.parse('{"title":"non-existent-operator","description":"","frontmatter":{},"headers":[],"relativePath":"rules/sonarjs/non-existent-operator.md","filePath":"rules/sonarjs/non-existent-operator.md"}'),t={name:"rules/sonarjs/non-existent-operator.md"},n=e(`<h1 id="non-existent-operator" tabindex="-1">non-existent-operator <a class="header-anchor" href="#non-existent-operator" aria-label="Permalink to &quot;non-existent-operator&quot;">​</a></h1><p>🔧 <em>fixable</em></p><p>The use of operators pairs (<code>=+</code>, <code>=-</code> or <code>=!</code>) where the reversed, single operator was meant (<code>+=</code>, <code>-=</code> or <code>!=</code>) will compile and run, but not produce the expected results.</p><p>This rule raises an issue when <code>=+</code>, <code>=-</code> and <code>=!</code> are used without any space between the two operators and when there is at least one whitespace after.</p><h2 id="noncompliant-code-example" tabindex="-1">Noncompliant Code Example <a class="header-anchor" href="#noncompliant-code-example" aria-label="Permalink to &quot;Noncompliant Code Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Noncompliant; target = -3. Is that really what&#39;s meant?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Noncompliant; target = 3</span></span></code></pre></div><h2 id="compliant-solution" tabindex="-1">Compliant Solution <a class="header-anchor" href="#compliant-solution" aria-label="Permalink to &quot;Compliant Solution&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Compliant; intent to assign inverse value of num is clear</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num;</span></span></code></pre></div>`,8),l=[n];function p(h,o,r,k,d,c){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
