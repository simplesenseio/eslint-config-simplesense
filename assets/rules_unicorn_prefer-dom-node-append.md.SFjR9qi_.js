import{_ as e,c as a,o as s,a3 as i}from"./chunks/framework.D8Wt_3VJ.js";const g=JSON.parse('{"title":"Prefer Node#append() over Node#appendChild()","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/prefer-dom-node-append.md","filePath":"rules/unicorn/prefer-dom-node-append.md"}'),n={name:"rules/unicorn/prefer-dom-node-append.md"},d=i('<h1 id="prefer-node-append-over-node-appendchild" tabindex="-1">Prefer <code>Node#append()</code> over <code>Node#appendChild()</code> <a class="header-anchor" href="#prefer-node-append-over-node-appendchild" aria-label="Permalink to &quot;Prefer `Node#append()` over `Node#appendChild()`&quot;">​</a></h1><p>💼 This rule is enabled in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><p>Enforces the use of, for example, <code>document.body.append(div);</code> over <code>document.body.appendChild(div);</code> for DOM nodes. There are <a href="https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append" target="_blank" rel="noreferrer">some advantages of using <code>Node#append()</code></a>, like the ability to append multiple nodes and to append both <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMString" target="_blank" rel="noreferrer"><code>DOMString</code></a> and DOM node objects.</p><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar);</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',8),o=[d];function t(p,r,l,h,c,k){return s(),a("div",null,o)}const E=e(n,[["render",t]]);export{g as __pageData,E as default};
