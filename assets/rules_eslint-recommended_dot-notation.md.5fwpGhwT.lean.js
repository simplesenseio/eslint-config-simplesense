import{_ as a,c as i,ae as t,o as e}from"./chunks/framework.D_WxFy46.js";const c=JSON.parse('{"title":"dot-notation","description":"","frontmatter":{"title":"dot-notation","rule_type":"suggestion"},"headers":[],"relativePath":"rules/eslint-recommended/dot-notation.md","filePath":"rules/eslint-recommended/dot-notation.md"}'),n={name:"rules/eslint-recommended/dot-notation.md"};function o(l,s,p,r,h,d){return e(),i("div",null,s[0]||(s[0]=[t(`<p>In JavaScript, one can access properties using the dot notation (<code>foo.bar</code>) or square-bracket notation (<code>foo[&quot;bar&quot;]</code>). However, the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible. As such, it will warn when it encounters an unnecessary use of square-bracket notation.</p><p>Examples of <strong>incorrect</strong> code for this rule:</p><p>:::incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint dot-notation: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule:</p><p>:::correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint dot-notation: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.bar;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo[bar];    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Property name is a variable, square-bracket notation required</span></span></code></pre></div><p>:::</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>This rule accepts a single options argument:</p><ul><li>Set the <code>allowKeywords</code> option to <code>false</code> (default is <code>true</code>) to follow ECMAScript version 3 compatible style, avoiding dot notation for reserved word properties.</li><li>Set the <code>allowPattern</code> option to a regular expression string to allow bracket notation for property names that match a pattern (by default, no pattern is tested).</li></ul><h3 id="allowkeywords" tabindex="-1">allowKeywords <a class="header-anchor" href="#allowkeywords" aria-label="Permalink to &quot;allowKeywords&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for the <code>{ &quot;allowKeywords&quot;: false }</code> option:</p><p>:::correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint dot-notation: [&quot;error&quot;, { &quot;allowKeywords&quot;: false }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;class&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CS 101&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;class&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Property name is a reserved word, square-bracket notation required</span></span></code></pre></div><p>:::</p><p>Examples of additional <strong>correct</strong> code for the <code>{ &quot;allowKeywords&quot;: false }</code> option:</p><p>:::correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint dot-notation: [&quot;error&quot;, { &quot;allowKeywords&quot;: false }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    #in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.#in; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Dot notation is required for private identifiers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><h3 id="allowpattern" tabindex="-1">allowPattern <a class="header-anchor" href="#allowpattern" aria-label="Permalink to &quot;allowPattern&quot;">​</a></h3><p>For example, when preparing data to be sent to an external API, it is often required to use property names that include underscores. If the <code>camelcase</code> rule is in effect, these <a href="https://en.wikipedia.org/wiki/Snake_case" target="_blank" rel="noreferrer">snake case</a> properties would not be allowed. By providing an <code>allowPattern</code> to the <code>dot-notation</code> rule, these snake case properties can be accessed with bracket notation.</p><p>Examples of <strong>incorrect</strong> code for the sample <code>{ &quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot; }</code> (pattern to find snake case named properties) option:</p><p>:::incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint dot-notation: [&quot;error&quot;, { &quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fooBar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>::: Examples of <strong>correct</strong> code for the sample <code>{ &quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot; }</code> (pattern to find snake case named properties) option:</p><p>:::correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint dot-notation: [&quot;error&quot;, { &quot;allowPattern&quot;: &quot;^[a-z]+(_[a-z]+)+$&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo_bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p>`,33)]))}const g=a(n,[["render",o]]);export{c as __pageData,g as default};
