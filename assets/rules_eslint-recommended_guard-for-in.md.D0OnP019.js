import{_ as i,c as a,ae as n,o as e}from"./chunks/framework.D_WxFy46.js";const E=JSON.parse('{"title":"guard-for-in","description":"","frontmatter":{"title":"guard-for-in","rule_type":"suggestion","related_rules":["prefer-object-has-own","no-prototype-builtins"],"further_reading":["https://javascriptweblog.wordpress.com/2011/01/04/exploring-javascript-for-in-loops/","https://2ality.com/2012/01/objects-as-maps.html"]},"headers":[],"relativePath":"rules/eslint-recommended/guard-for-in.md","filePath":"rules/eslint-recommended/guard-for-in.md"}'),t={name:"rules/eslint-recommended/guard-for-in.md"};function p(l,s,h,r,o,k){return e(),a("div",null,s[0]||(s[0]=[n(`<p>Looping over objects with a <code>for in</code> loop will include properties that are inherited through the prototype chain. This behavior can lead to unexpected items in your for loop.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>For codebases that do not support ES2022, <code>Object.prototype.hasOwnProperty.call(foo, key)</code> can be used as a check that the property is not inherited.</p><p>For codebases that do support ES2022, <code>Object.hasOwn(foo, key)</code> can be used as a shorter alternative; see <a href="./prefer-object-has-own">prefer-object-has-own</a>.</p><p>Note that simply checking <code>foo.hasOwnProperty(key)</code> is likely to cause an error in some cases; see <a href="./no-prototype-builtins">no-prototype-builtins</a>.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule is aimed at preventing unexpected behavior that could arise from using a <code>for in</code> loop without filtering the results in the loop. As such, it will warn when <code>for in</code> loops do not filter their results with an <code>if</code> statement.</p><p>Examples of <strong>incorrect</strong> code for this rule:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint guard-for-in: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint guard-for-in: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, key)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hasOwnProperty.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, key)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({}.hasOwnProperty.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, key)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p>`,15)]))}const c=i(t,[["render",p]]);export{E as __pageData,c as default};
