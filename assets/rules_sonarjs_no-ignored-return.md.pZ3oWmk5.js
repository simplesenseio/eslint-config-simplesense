import{_ as e,c as a,o as s,a3 as i}from"./chunks/framework.vIlBslkg.js";const g=JSON.parse('{"title":"no-ignored-return","description":"","frontmatter":{},"headers":[],"relativePath":"rules/sonarjs/no-ignored-return.md","filePath":"rules/sonarjs/no-ignored-return.md"}'),t={name:"rules/sonarjs/no-ignored-return.md"},n=i('<h1 id="no-ignored-return" tabindex="-1">no-ignored-return <a class="header-anchor" href="#no-ignored-return" aria-label="Permalink to &quot;no-ignored-return&quot;">​</a></h1><p>When the call to a function doesn’t have any side effects, what is the point of making the call if the results are ignored? In such case, either the function call is useless and should be dropped or the source code doesn’t behave as expected.</p><p>To prevent generating any false-positives, this rule triggers an issues only on a predefined list of known objects &amp; functions.</p><h2 id="noncompliant-code-example" tabindex="-1">Noncompliant Code Example <a class="header-anchor" href="#noncompliant-code-example" aria-label="Permalink to &quot;Noncompliant Code Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastIndexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;e&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Noncompliant</span></span></code></pre></div><h2 id="compliant-solution" tabindex="-1">Compliant Solution <a class="header-anchor" href="#compliant-solution" aria-label="Permalink to &quot;Compliant Solution&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> char </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastIndexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;e&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="note" tabindex="-1">Note <a class="header-anchor" href="#note" aria-label="Permalink to &quot;Note&quot;">​</a></h2><p>The rule relies on type information and requires the use of <code>typescript-eslint/parser</code>.</p><h2 id="see" tabindex="-1">See <a class="header-anchor" href="#see" aria-label="Permalink to &quot;See&quot;">​</a></h2><ul><li><a href="https://wiki.sei.cmu.edu/confluence/x/mtYxBQ">CERT, EXP12-C.</a> - Do not ignore values returned by functions</li><li><a href="https://wiki.sei.cmu.edu/confluence/x/xzdGBQ">CERT, EXP00-J.</a> - Do not ignore values returned by methods</li></ul>',11),o=[n];function l(r,h,p,d,c,u){return s(),a("div",null,o)}const E=e(t,[["render",l]]);export{g as __pageData,E as default};
