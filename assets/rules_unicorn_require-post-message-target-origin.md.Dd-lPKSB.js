import{_ as e,c as s,o as a,a3 as t}from"./chunks/framework.ZJ0k6Sl1.js";const u=JSON.parse('{"title":"Enforce using the targetOrigin argument with window.postMessage()","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/require-post-message-target-origin.md","filePath":"rules/unicorn/require-post-message-target-origin.md"}'),i={name:"rules/unicorn/require-post-message-target-origin.md"},r=t('<h1 id="enforce-using-the-targetorigin-argument-with-window-postmessage" tabindex="-1">Enforce using the <code>targetOrigin</code> argument with <code>window.postMessage()</code> <a class="header-anchor" href="#enforce-using-the-targetorigin-argument-with-window-postmessage" aria-label="Permalink to &quot;Enforce using the `targetOrigin` argument with `window.postMessage()`&quot;">​</a></h1><p>🚫 This rule is <em>disabled</em> in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>💡 This rule is manually fixable by <a href="https://eslint.org/docs/latest/use/core-concepts#rule-suggestions" target="_blank" rel="noreferrer">editor suggestions</a>.</p><p>When calling <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage" target="_blank" rel="noreferrer"><code>window.postMessage()</code></a> without the <code>targetOrigin</code> argument, the message cannot be received by any window.</p><p>This rule cannot distinguish between <code>window.postMessage()</code> and other calls like <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage" target="_blank" rel="noreferrer"><code>Worker#postMessage()</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage" target="_blank" rel="noreferrer"><code>MessagePort#postMessage()</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage" target="_blank" rel="noreferrer"><code>Client#postMessage()</code></a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/postMessage" target="_blank" rel="noreferrer"><code>BroadcastChannel#postMessage()</code></a>. Use on your own risk.</p><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',10),n=[r];function o(l,h,p,d,g,c){return a(),s("div",null,n)}const m=e(i,[["render",o]]);export{u as __pageData,m as default};
