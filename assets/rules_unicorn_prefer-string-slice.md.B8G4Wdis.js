import{_ as e,c as s,o as r,a3 as t}from"./chunks/framework.D8Wt_3VJ.js";const u=JSON.parse('{"title":"Prefer String#slice() over String#substr() and String#substring()","description":"","frontmatter":{},"headers":[],"relativePath":"rules/unicorn/prefer-string-slice.md","filePath":"rules/unicorn/prefer-string-slice.md"}'),a={name:"rules/unicorn/prefer-string-slice.md"},i=t('<h1 id="prefer-string-slice-over-string-substr-and-string-substring" tabindex="-1">Prefer <code>String#slice()</code> over <code>String#substr()</code> and <code>String#substring()</code> <a class="header-anchor" href="#prefer-string-slice-over-string-substr-and-string-substring" aria-label="Permalink to &quot;Prefer `String#slice()` over `String#substr()` and `String#substring()`&quot;">​</a></h1><p>💼 This rule is enabled in the ✅ <code>recommended</code> <a href="https://github.com/sindresorhus/eslint-plugin-unicorn#preset-configs-eslintconfigjs" target="_blank" rel="noreferrer">config</a>.</p><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" target="_blank" rel="noreferrer"><code>String#substr()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" target="_blank" rel="noreferrer"><code>String#substring()</code></a> are the two lesser known legacy ways to slice a string. It&#39;s better to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank" rel="noreferrer"><code>String#slice()</code></a> as it&#39;s a more popular option with clearer behavior that has a consistent <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank" rel="noreferrer"><code>Array</code> counterpart</a>.</p><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start, length);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(indexStart, indexEnd);</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(beginIndex, endIndex);</span></span></code></pre></div>',8),n=[i];function o(l,c,d,p,h,g){return r(),s("div",null,n)}const f=e(a,[["render",o]]);export{u as __pageData,f as default};
