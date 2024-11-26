import{_ as a,c as s,a1 as i,o as t}from"./chunks/framework.C4wD7aVO.js";const k=JSON.parse('{"title":"Detects trojan source attacks that employ unicode bidi attacks to inject malicious code (security/detect-bidi-characters)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/security/detect-bidi-characters.md","filePath":"rules/security/detect-bidi-characters.md"}'),n={name:"rules/security/detect-bidi-characters.md"};function r(o,e,c,l,h,p){return t(),s("div",null,e[0]||(e[0]=[i(`<h1 id="detects-trojan-source-attacks-that-employ-unicode-bidi-attacks-to-inject-malicious-code-security-detect-bidi-characters" tabindex="-1">Detects trojan source attacks that employ unicode bidi attacks to inject malicious code (<code>security/detect-bidi-characters</code>) <a class="header-anchor" href="#detects-trojan-source-attacks-that-employ-unicode-bidi-attacks-to-inject-malicious-code-security-detect-bidi-characters" aria-label="Permalink to &quot;Detects trojan source attacks that employ unicode bidi attacks to inject malicious code (\`security/detect-bidi-characters\`)&quot;">​</a></h1><p>⚠️ This rule <em>warns</em> in the ✅ <code>recommended</code> config.</p><p>Detects cases of <a href="https://trojansource.codes" target="_blank" rel="noreferrer">trojan source attacks</a> that employ unicode bidi attacks to inject malicious code</p><h2 id="why-is-trojan-source-important" tabindex="-1">Why is Trojan Source important? <a class="header-anchor" href="#why-is-trojan-source-important" aria-label="Permalink to &quot;Why is Trojan Source important?&quot;">​</a></h2><p>The following publication on the topic of unicode characters attacks, dubbed <a href="https://trojansource.codes/trojan-source.pdf" target="_blank" rel="noreferrer">Trojan Source: Invisible Vulnerabilities</a>, has caused a lot of concern from potential supply chain attacks where adversaries are able to inject malicious code into the source code of a project, slipping by unseen in the code review process.</p><h3 id="an-example" tabindex="-1">An example <a class="header-anchor" href="#an-example" aria-label="Permalink to &quot;An example&quot;">​</a></h3><p>As an example, take the following code where <code>RLO</code>, <code>LRI</code>, <code>PDI</code>, <code>IRI</code> are placeholders to visualise the respective dangerous unicode characters:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accessLevel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (accessLevel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;userRLO LRI// Check if adminPDI IRI&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;You are an admin.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The code above, will be rendered by a text editor as follows:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accessLevel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (accessLevel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Check if admin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;You are an admin.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>By looking at the rendered code above, a user reviewing this code might not notice the injected malicious unicode characters which are actually changing the semantic and the behaviour of the actual code.</p><h3 id="more-information" tabindex="-1">More information <a class="header-anchor" href="#more-information" aria-label="Permalink to &quot;More information&quot;">​</a></h3><p>For more information on the topic, you&#39;re welcome to read on the official website <a href="https://trojansource.codes/" target="_blank" rel="noreferrer">trojansource.codes</a> and the following <a href="https://github.com/nickboucher/trojan-source/" target="_blank" rel="noreferrer">source code repository</a> which contains the source code of the publication.</p><h3 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h3><ul><li><a href="https://certitude.consulting/blog/en/invisible-backdoor/" target="_blank" rel="noreferrer">https://certitude.consulting/blog/en/invisible-backdoor/</a></li><li><a href="https://github.com/lirantal/anti-trojan-source/" target="_blank" rel="noreferrer">https://github.com/lirantal/anti-trojan-source/</a></li><li><a href="https://github.com/lirantal/eslint-plugin-anti-trojan-source" target="_blank" rel="noreferrer">https://github.com/lirantal/eslint-plugin-anti-trojan-source</a></li></ul>`,15)]))}const u=a(n,[["render",r]]);export{k as __pageData,u as default};