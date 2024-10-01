import{_ as e,c as s,o as i,a3 as a}from"./chunks/framework.ZJ0k6Sl1.js";const g=JSON.parse('{"title":"Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement()","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/prefer-modern-dom-apis.md","filePath":"rules/unicorn/prefer-modern-dom-apis.md"}'),n={name:"rules/unicorn/prefer-modern-dom-apis.md"},r=a(`<h1 id="prefer-before-over-insertbefore-replacewith-over-replacechild-prefer-one-of-before-after-append-or-prepend-over-insertadjacenttext-and-insertadjacentelement" tabindex="-1">Prefer <code>.before()</code> over <code>.insertBefore()</code>, <code>.replaceWith()</code> over <code>.replaceChild()</code>, prefer one of <code>.before()</code>, <code>.after()</code>, <code>.append()</code> or <code>.prepend()</code> over <code>insertAdjacentText()</code> and <code>insertAdjacentElement()</code> <a class="header-anchor" href="#prefer-before-over-insertbefore-replacewith-over-replacechild-prefer-one-of-before-after-append-or-prepend-over-insertadjacenttext-and-insertadjacentelement" aria-label="Permalink to &quot;Prefer \`.before()\` over \`.insertBefore()\`, \`.replaceWith()\` over \`.replaceChild()\`, prefer one of \`.before()\`, \`.after()\`, \`.append()\` or \`.prepend()\` over \`insertAdjacentText()\` and \`insertAdjacentElement()\`&quot;">​</a></h1><p>💼 This rule is enabled in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><p>Enforces the use of:</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith" target="_blank" rel="noreferrer">childNode.replaceWith(newNode)</a> over <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild" target="_blank" rel="noreferrer">parentNode.replaceChild(newNode, oldNode)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before" target="_blank" rel="noreferrer">referenceNode.before(newNode)</a> over <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore" target="_blank" rel="noreferrer">parentNode.insertBefore(newNode, referenceNode)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before" target="_blank" rel="noreferrer">referenceNode.before(&#39;text&#39;)</a> over <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText" target="_blank" rel="noreferrer">referenceNode.insertAdjacentText(&#39;beforebegin&#39;, &#39;text&#39;)</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before" target="_blank" rel="noreferrer">referenceNode.before(newNode)</a> over <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement" target="_blank" rel="noreferrer">referenceNode.insertAdjacentElement(&#39;beforebegin&#39;, newNode)</a></li></ul><p>There are some advantages of using the newer DOM APIs, like:</p><ul><li>Traversing to the parent node is not necessary.</li><li>Appending multiple nodes at once.</li><li>Both <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMString" target="_blank" rel="noreferrer"><code>DOMString</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element" target="_blank" rel="noreferrer">DOM node objects</a> can be manipulated.</li></ul><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(baz, bar);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(baz, bar);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertAdjacentText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;position&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bar);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertAdjacentElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;position&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bar);</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prepend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prepend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prepend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,11),t=[r];function l(p,h,o,k,d,E){return i(),s("div",null,t)}const f=e(n,[["render",l]]);export{g as __pageData,f as default};
