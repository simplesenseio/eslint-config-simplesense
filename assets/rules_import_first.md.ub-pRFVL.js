import{_ as e,c as i,o as s,a2 as a}from"./chunks/framework.DKvG-fKI.js";const u=JSON.parse('{"title":"import/first","description":"","frontmatter":{},"headers":[],"relativePath":"rules/import/first.md","filePath":"rules/import/first.md"}'),t={name:"rules/import/first.md"},r=a(`<h1 id="import-first" tabindex="-1">import/first <a class="header-anchor" href="#import-first" aria-label="Permalink to &quot;import/first&quot;">​</a></h1><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><p>This rule reports any imports that come after non-import statements.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// some module-level initializer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./bar&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // &lt;- reported</span></span></code></pre></div><p>Providing <code>absolute-first</code> as an option will report any absolute imports (i.e. packages) that come after any relative imports:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;foo&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lodash&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // &lt;- reported</span></span></code></pre></div><p>If you really want import type ordering, check out <a href="./order"><code>import/order</code></a>.</p><p>Notably, <code>import</code>s are hoisted, which means the imported modules will be evaluated before any of the statements interspersed between them. Keeping all <code>import</code>s together at the top of the file may prevent surprises resulting from this part of the spec.</p><h3 id="on-directives" tabindex="-1">On directives <a class="header-anchor" href="#on-directives" aria-label="Permalink to &quot;On directives&quot;">​</a></h3><p>Directives are allowed as long as they occur strictly before any <code>import</code> declarations, as follows:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;use super-mega-strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { suchFoo } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lame-fake-module-name&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // no report here</span></span></code></pre></div><p>A directive in this case is assumed to be a single statement that contains only a literal string-valued expression.</p><p><code>&#39;use strict&#39;</code> would be a good example, except that <a href="https://262.ecma-international.org/6.0/#sec-strict-mode-code" target="_blank" rel="noreferrer">modules are always in strict mode</a> so it would be surprising to see a <code>&#39;use strict&#39;</code> sharing a file with <code>import</code>s and <code>export</code>s.</p><p>Given that, see <a href="https://github.com/import-js/eslint-plugin-import/issues/255" target="_blank" rel="noreferrer">#255</a> for the reasoning.</p><h3 id="with-fixer" tabindex="-1">With Fixer <a class="header-anchor" href="#with-fixer" aria-label="Permalink to &quot;With Fixer&quot;">​</a></h3><p>This rule contains a fixer to reorder in-body import to top, the following criteria applied:</p><ol><li>Never re-order relative to each other, even if <code>absolute-first</code> is set.</li><li>If an import creates an identifier, and that identifier is referenced at module level <em>before</em> the import itself, that won&#39;t be re-ordered.</li></ol><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you don&#39;t mind imports being sprinkled throughout, you may not want to enable this rule.</p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h2><ul><li><a href="./order"><code>import/order</code></a>: a major step up from <code>absolute-first</code></li><li>Issue <a href="https://github.com/import-js/eslint-plugin-import/issues/255" target="_blank" rel="noreferrer">#255</a></li></ul>`,22),n=[r];function o(l,p,h,d,c,k){return s(),i("div",null,n)}const g=e(t,[["render",o]]);export{u as __pageData,g as default};
