import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.D8Wt_3VJ.js";const g=JSON.parse('{"title":"Do not use document.cookie directly","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/no-document-cookie.md","filePath":"rules/unicorn/no-document-cookie.md"}'),n={name:"rules/unicorn/no-document-cookie.md"},t=e(`<h1 id="do-not-use-document-cookie-directly" tabindex="-1">Do not use <code>document.cookie</code> directly <a class="header-anchor" href="#do-not-use-document-cookie-directly" aria-label="Permalink to &quot;Do not use \`document.cookie\` directly&quot;">​</a></h1><p>💼 This rule is enabled in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>It&#39;s not recommended to use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie" target="_blank" rel="noreferrer"><code>document.cookie</code></a> directly as it&#39;s easy to get the string wrong. Instead, you should use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API" target="_blank" rel="noreferrer">Cookie Store API</a> or a <a href="https://www.npmjs.com/search?q=cookie" target="_blank" rel="noreferrer">cookie library</a>.</p><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.cookie </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;foo=bar&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;; Path=/&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;; Domain=example.com&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;; expires=Fri, 31 Dec 9999 23:59:59 GMT&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;; Secure&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.cookie </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;; foo=bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cookieStore.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	expires: Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	domain: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.cookie.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Cookies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;js-cookie&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cookies.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,10),h=[t];function l(p,k,o,r,d,c){return a(),i("div",null,h)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
