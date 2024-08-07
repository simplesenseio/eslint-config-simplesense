import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.D8Wt_3VJ.js";const g=JSON.parse('{"title":"no-warning-comments","description":"","frontmatter":{"title":"no-warning-comments","rule_type":"suggestion"},"headers":[],"relativePath":"rules/eslint-recommended/no-warning-comments.md","filePath":"rules/eslint-recommended/no-warning-comments.md"}'),n={name:"rules/eslint-recommended/no-warning-comments.md"},e=t(`<p>Developers often add comments to code which is not complete or needs review. Most likely you want to fix or review the code, and then remove the comment, before you consider the code to be production ready.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TODO: do something</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// FIXME: this is not a good idea</span></span></code></pre></div><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule reports comments that include any of the predefined terms specified in its configuration.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>This rule has an options object literal:</p><ul><li><code>&quot;terms&quot;</code>: optional array of terms to match. Defaults to <code>[&quot;todo&quot;, &quot;fixme&quot;, &quot;xxx&quot;]</code>. Terms are matched case-insensitively and as whole words: <code>fix</code> would match <code>FIX</code> but not <code>fixing</code>. Terms can consist of multiple words: <code>really bad idea</code>.</li><li><code>&quot;location&quot;</code>: optional string that configures where in your comments to check for matches. Defaults to <code>&quot;start&quot;</code>. The start is from the first non-decorative character, ignoring whitespace, new lines and characters specified in <code>decoration</code>. The other value is match <code>anywhere</code> in comments.</li><li><code>&quot;decoration&quot;</code>: optional array of characters that are ignored at the start of a comment, when location is <code>&quot;start&quot;</code>. Defaults to <code>[]</code>. Any sequence of whitespace or the characters from this property are ignored. This option is ignored when location is <code>&quot;anywhere&quot;</code>.</li></ul><p>Example of <strong>incorrect</strong> code for the default <code>{ &quot;terms&quot;: [&quot;todo&quot;, &quot;fixme&quot;, &quot;xxx&quot;], &quot;location&quot;: &quot;start&quot; }</code> options:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-warning-comments: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">FIXME</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">results</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // TODO</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><p>Example of <strong>correct</strong> code for the default <code>{ &quot;terms&quot;: [&quot;todo&quot;, &quot;fixme&quot;, &quot;xxx&quot;], &quot;location&quot;: &quot;start&quot; }</code> options:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-warning-comments: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">results</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // NOT READY FOR PRIME TIME</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // but too bad, it is not a predefined warning term</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><h3 id="terms-and-location" tabindex="-1">terms and location <a class="header-anchor" href="#terms-and-location" aria-label="Permalink to &quot;terms and location&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for the <code>{ &quot;terms&quot;: [&quot;todo&quot;, &quot;fixme&quot;, &quot;any other term&quot;], &quot;location&quot;: &quot;anywhere&quot; }</code> options:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-warning-comments: [&quot;error&quot;, { &quot;terms&quot;: [&quot;todo&quot;, &quot;fixme&quot;, &quot;any other term&quot;], &quot;location&quot;: &quot;anywhere&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TODO: this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// todo: this too</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Even this: TODO</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * The same goes for this TODO comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Or a fixme</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * as well as any other term</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for the <code>{ &quot;terms&quot;: [&quot;todo&quot;, &quot;fixme&quot;, &quot;any other term&quot;], &quot;location&quot;: &quot;anywhere&quot; }</code> options:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-warning-comments: [&quot;error&quot;, { &quot;terms&quot;: [&quot;todo&quot;, &quot;fixme&quot;, &quot;any other term&quot;], &quot;location&quot;: &quot;anywhere&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is to do</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// even not any other    term</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// any other terminal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * The same goes for block comments</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * with any other interesting term</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * or fix me this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>:::</p><h3 id="decoration-characters" tabindex="-1">Decoration Characters <a class="header-anchor" href="#decoration-characters" aria-label="Permalink to &quot;Decoration Characters&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for the <code>{ &quot;decoration&quot;: [&quot;*&quot;] }</code> options:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-warning-comments: [&quot;error&quot;, { &quot;decoration&quot;: [&quot;*&quot;] }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//***** todo decorative asterisks are ignored *****//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * TODO new lines and asterisks are also ignored in block comments.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>:::</p><p>Examples of <strong>incorrect</strong> code for the <code>{ &quot;decoration&quot;: [&quot;/&quot;, &quot;*&quot;] }</code> options:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-warning-comments: [&quot;error&quot;, { &quot;decoration&quot;: [&quot;/&quot;, &quot;*&quot;] }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">////// TODO decorative slashes and whitespace are ignored //////</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//***** todo decorative asterisks are also ignored *****//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * TODO new lines are also ignored in block comments.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for the <code>{ &quot;decoration&quot;: [&quot;/&quot;, &quot;*&quot;] }</code> options:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-warning-comments: [&quot;error&quot;, { &quot;decoration&quot;: [&quot;/&quot;, &quot;*&quot;] }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//!TODO preceded by non-decoration character</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *!TODO preceded by non-decoration character in a block comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>:::</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><ul><li>If you have a large code base that was not developed with a policy to not use such warning terms, you might get hundreds of warnings / errors which might be counter-productive if you can&#39;t fix all of them (e.g. if you don&#39;t get the time to do it) as you might overlook other warnings / errors or get used to many of them and don&#39;t pay attention on it anymore.</li><li>Same reason as the point above: You shouldn&#39;t configure terms that are used very often (e.g. central parts of the native language used in your comments).</li></ul>`,39),o=[e];function l(p,r,h,c,d,k){return i(),a("div",null,o)}const m=s(n,[["render",l]]);export{g as __pageData,m as default};
