import{_ as s,c as a,o as i,a3 as e}from"./chunks/framework.vIlBslkg.js";const m=JSON.parse('{"title":"no-small-switch","description":"","frontmatter":{},"headers":[],"relativePath":"rules/sonarjs/no-small-switch.md","filePath":"rules/sonarjs/no-small-switch.md"}'),n={name:"rules/sonarjs/no-small-switch.md"},t=e(`<h1 id="no-small-switch" tabindex="-1">no-small-switch <a class="header-anchor" href="#no-small-switch" aria-label="Permalink to &quot;no-small-switch&quot;">​</a></h1><p><code>switch</code> statements are useful when there are many different cases depending on the value of the same expression.</p><p>For just one or two cases however, the code will be more readable with <code>if</code> statements.</p><h2 id="noncompliant-code-example" tabindex="-1">Noncompliant Code Example <a class="header-anchor" href="#noncompliant-code-example" aria-label="Permalink to &quot;Noncompliant Code Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (variable) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    doSomethingElse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="compliant-solution" tabindex="-1">Compliant Solution <a class="header-anchor" href="#compliant-solution" aria-label="Permalink to &quot;Compliant Solution&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (variable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomethingElse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="see" tabindex="-1">See <a class="header-anchor" href="#see" aria-label="Permalink to &quot;See&quot;">​</a></h2><ul><li> MISRA C:2004, 15.5 - Every switch statement shall have at least one case clause. </li><li> MISRA C++:2008, 6-4-8 - Every switch statement shall have at least one case-clause. </li><li> MISRA C:2012, 16.6 - Every switch statement shall have at least two switch-clauses </li></ul>`,9),l=[t];function h(p,o,k,r,c,d){return i(),a("div",null,l)}const g=s(n,[["render",h]]);export{m as __pageData,g as default};
