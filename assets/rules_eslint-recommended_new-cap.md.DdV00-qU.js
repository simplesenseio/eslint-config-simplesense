import{_ as s,c as i,o as a,a2 as e}from"./chunks/framework.DKvG-fKI.js";const g=JSON.parse('{"title":"new-cap","description":"","frontmatter":{"title":"new-cap","rule_type":"suggestion"},"headers":[],"relativePath":"rules/eslint-recommended/new-cap.md","filePath":"rules/eslint-recommended/new-cap.md"}'),t={name:"rules/eslint-recommended/new-cap.md"},n=e(`<p>The <code>new</code> operator in JavaScript creates a new instance of a particular type of object. That type of object is represented by a constructor function. Since constructor functions are just regular functions, the only defining characteristic is that <code>new</code> is being used as part of the call. Native JavaScript functions begin with an uppercase letter to distinguish those functions that are to be used as constructors from functions that are not. Many style guides recommend following this pattern to more easily determine which functions are to be used as constructors.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule requires constructor names to begin with a capital letter. Certain built-in identifiers are exempt from this rule. These identifiers are:</p><ul><li><code>Array</code></li><li><code>Boolean</code></li><li><code>Date</code></li><li><code>Error</code></li><li><code>Function</code></li><li><code>Number</code></li><li><code>Object</code></li><li><code>RegExp</code></li><li><code>String</code></li><li><code>Symbol</code></li><li><code>BigInt</code></li></ul><p>Examples of <strong>correct</strong> code for this rule:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arg);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>This rule has an object option:</p><ul><li><code>&quot;newIsCap&quot;: true</code> (default) requires all <code>new</code> operators to be called with uppercase-started functions.</li><li><code>&quot;newIsCap&quot;: false</code> allows <code>new</code> operators to be called with lowercase-started or uppercase-started functions.</li><li><code>&quot;capIsNew&quot;: true</code> (default) requires all uppercase-started functions to be called with <code>new</code> operators.</li><li><code>&quot;capIsNew&quot;: false</code> allows uppercase-started functions to be called without <code>new</code> operators.</li><li><code>&quot;newIsCapExceptions&quot;</code> allows specified lowercase-started function names to be called with the <code>new</code> operator.</li><li><code>&quot;newIsCapExceptionPattern&quot;</code> allows any lowercase-started function names that match the specified regex pattern to be called with the <code>new</code> operator.</li><li><code>&quot;capIsNewExceptions&quot;</code> allows specified uppercase-started function names to be called without the <code>new</code> operator.</li><li><code>&quot;capIsNewExceptionPattern&quot;</code> allows any uppercase-started function names that match the specified regex pattern to be called without the <code>new</code> operator.</li><li><code>&quot;properties&quot;: true</code> (default) enables checks on object properties</li><li><code>&quot;properties&quot;: false</code> disables checks on object properties</li></ul><h3 id="newiscap" tabindex="-1">newIsCap <a class="header-anchor" href="#newiscap" aria-label="Permalink to &quot;newIsCap&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>{ &quot;newIsCap&quot;: true }</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;newIsCap&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>{ &quot;newIsCap&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;newIsCap&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;newIsCap&quot;: false }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;newIsCap&quot;: false }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><h3 id="capisnew" tabindex="-1">capIsNew <a class="header-anchor" href="#capisnew" aria-label="Permalink to &quot;capIsNew&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>{ &quot;capIsNew&quot;: true }</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;capIsNew&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colleague </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>{ &quot;capIsNew&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;capIsNew&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colleague </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;capIsNew&quot;: false }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;capIsNew&quot;: false }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colleague </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><h3 id="newiscapexceptions" tabindex="-1">newIsCapExceptions <a class="header-anchor" href="#newiscapexceptions" aria-label="Permalink to &quot;newIsCapExceptions&quot;">​</a></h3><p>Examples of additional <strong>correct</strong> code for this rule with the <code>{ &quot;newIsCapExceptions&quot;: [&quot;events&quot;] }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;newIsCapExceptions&quot;: [&quot;events&quot;] }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> events </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;events&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emitter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> events</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><h3 id="newiscapexceptionpattern" tabindex="-1">newIsCapExceptionPattern <a class="header-anchor" href="#newiscapexceptionpattern" aria-label="Permalink to &quot;newIsCapExceptionPattern&quot;">​</a></h3><p>Examples of additional <strong>correct</strong> code for this rule with the <code>{ &quot;newIsCapExceptionPattern&quot;: &quot;^person\\\\..&quot; }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;newIsCapExceptionPattern&quot;: &quot;^person\\\\..&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acquaintance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bestFriend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">friend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of additional <strong>correct</strong> code for this rule with the <code>{ &quot;newIsCapExceptionPattern&quot;: &quot;\\\\.bar$&quot; }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;newIsCapExceptionPattern&quot;: &quot;\\\\.bar$&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><h3 id="capisnewexceptions" tabindex="-1">capIsNewExceptions <a class="header-anchor" href="#capisnewexceptions" aria-label="Permalink to &quot;capIsNewExceptions&quot;">​</a></h3><p>Examples of additional <strong>correct</strong> code for this rule with the <code>{ &quot;capIsNewExceptions&quot;: [&quot;Person&quot;] }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;capIsNewExceptions&quot;: [&quot;Person&quot;] }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arg);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><h3 id="capisnewexceptionpattern" tabindex="-1">capIsNewExceptionPattern <a class="header-anchor" href="#capisnewexceptionpattern" aria-label="Permalink to &quot;capIsNewExceptionPattern&quot;">​</a></h3><p>Examples of additional <strong>correct</strong> code for this rule with the <code>{ &quot;capIsNewExceptionPattern&quot;: &quot;^person\\\\..&quot; }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;capIsNewExceptionPattern&quot;: &quot;^person\\\\..&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Acquaintance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bestFriend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Friend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of additional <strong>correct</strong> code for this rule with the <code>{ &quot;capIsNewExceptionPattern&quot;: &quot;\\\\.Bar$&quot; }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;capIsNewExceptionPattern&quot;: &quot;\\\\.Bar$&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of additional <strong>correct</strong> code for this rule with the <code>{ &quot;capIsNewExceptionPattern&quot;: &quot;^Foo&quot; }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;capIsNewExceptionPattern&quot;: &quot;^Foo&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foobar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>:::</p><h3 id="properties" tabindex="-1">properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;properties&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>{ &quot;properties&quot;: true }</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;properties&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acquaintance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>{ &quot;properties&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;properties&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Acquaintance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;properties&quot;: false }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint new-cap: [&quot;error&quot;, { &quot;properties&quot;: false }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> friend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acquaintance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you have conventions that don&#39;t require an uppercase letter for constructors, or don&#39;t require capitalized functions be only used as constructors, turn this rule off.</p>`,85),p=[n];function l(o,h,r,c,k,d){return a(),i("div",null,p)}const E=s(t,[["render",l]]);export{g as __pageData,E as default};
