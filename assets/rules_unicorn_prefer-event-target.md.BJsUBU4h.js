import{_ as e,c as s,o as a,a3 as i}from"./chunks/framework.vIlBslkg.js";const v=JSON.parse('{"title":"Prefer EventTarget over EventEmitter","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/prefer-event-target.md","filePath":"rules/unicorn/prefer-event-target.md"}'),t={name:"rules/unicorn/prefer-event-target.md"},n=i('<h1 id="prefer-eventtarget-over-eventemitter" tabindex="-1">Prefer <code>EventTarget</code> over <code>EventEmitter</code> <a class="header-anchor" href="#prefer-eventtarget-over-eventemitter" aria-label="Permalink to &quot;Prefer `EventTarget` over `EventEmitter`&quot;">​</a></h1><p>💼 This rule is enabled in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>While <a href="https://nodejs.org/api/events.html#class-eventemitter" target="_blank" rel="noreferrer"><code>EventEmitter</code></a> is only available in Node.js, <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget" target="_blank" rel="noreferrer"><code>EventTarget</code></a> is also available in <em>Deno</em> and browsers.</p><p>This rule reduces the bundle size and makes your code more cross-platform friendly.</p><p>See the <a href="https://nodejs.org/api/events.html#eventtarget-and-event-api" target="_blank" rel="noreferrer">differences</a> between <code>EventEmitter</code> and <code>EventTarget</code>.</p><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {EventEmitter} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:event&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> emitter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventTarget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventTarget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>',11),r=[n];function l(h,p,o,d,k,c){return a(),s("div",null,r)}const E=e(t,[["render",l]]);export{v as __pageData,E as default};
