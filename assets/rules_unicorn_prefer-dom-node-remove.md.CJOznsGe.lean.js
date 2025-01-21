import{_ as i,c as s,ae as a,o as r}from"./chunks/framework.D_WxFy46.js";const k=JSON.parse('{"title":"Prefer childNode.remove() over parentNode.removeChild(childNode)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/prefer-dom-node-remove.md","filePath":"rules/unicorn/prefer-dom-node-remove.md"}'),o={name:"rules/unicorn/prefer-dom-node-remove.md"};function t(n,e,l,d,h,p){return r(),s("div",null,e[0]||(e[0]=[a('<h1 id="prefer-childnode-remove-over-parentnode-removechild-childnode" tabindex="-1">Prefer <code>childNode.remove()</code> over <code>parentNode.removeChild(childNode)</code> <a class="header-anchor" href="#prefer-childnode-remove-over-parentnode-removechild-childnode" aria-label="Permalink to &quot;Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`&quot;">​</a></h1><p>💼 This rule is enabled in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>🔧💡 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a> and manually fixable by <a href="https://eslint.org/docs/latest/use/core-concepts#rule-suggestions" target="_blank" rel="noreferrer">editor suggestions</a>.</p><p>Enforces the use of, for example, <code>child.remove();</code> over <code>child.parentNode.removeChild(child);</code>. The DOM function <a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove" target="_blank" rel="noreferrer"><code>Node#remove()</code></a> is preferred over the indirect removal of an object with <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild" target="_blank" rel="noreferrer"><code>Node#removeChild()</code></a>.</p><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>',8)]))}const m=i(o,[["render",t]]);export{k as __pageData,m as default};
