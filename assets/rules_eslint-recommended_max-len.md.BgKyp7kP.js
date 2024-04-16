import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.ClQ4Qie4.js";const u=JSON.parse('{"title":"max-len","description":"","frontmatter":{"title":"max-len","rule_type":"layout","related_rules":["complexity","max-depth","max-nested-callbacks","max-params","max-statements"]},"headers":[],"relativePath":"rules/eslint-recommended/max-len.md","filePath":"rules/eslint-recommended/max-len.md"}'),e={name:"rules/eslint-recommended/max-len.md"},n=t(`<p>This rule was <strong>deprecated</strong> in ESLint v8.53.0. Please use the <a href="https://eslint.style/rules/js/max-len" target="_blank" rel="noreferrer">corresponding rule</a> in <a href="https://eslint.style/packages/js" target="_blank" rel="noreferrer"><code>@stylistic/eslint-plugin-js</code></a>.</p><p>Very long lines of code in any language can be difficult to read. In order to aid in readability and maintainability many coders have developed a convention to limit lines of code to X number of characters (traditionally 80 characters).</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a bar.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;baz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;difficult&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;to read&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// very long</span></span></code></pre></div><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule enforces a maximum line length to increase code readability and maintainability. The length of a line is defined as the number of Unicode characters in the line.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>This rule can have up to two numbers as positional arguments (for <code>code</code> and <code>tabWidth</code> options), followed by an object option (provided positional arguments have priority):</p><ul><li><code>&quot;code&quot;</code> (default <code>80</code>) enforces a maximum line length</li><li><code>&quot;tabWidth&quot;</code> (default <code>4</code>) specifies the character width for tab characters</li><li><code>&quot;comments&quot;</code> enforces a maximum line length for comments; defaults to value of <code>code</code></li><li><code>&quot;ignorePattern&quot;</code> ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON</li><li><code>&quot;ignoreComments&quot;: true</code> ignores all trailing comments and comments on their own line</li><li><code>&quot;ignoreTrailingComments&quot;: true</code> ignores only trailing comments</li><li><code>&quot;ignoreUrls&quot;: true</code> ignores lines that contain a URL</li><li><code>&quot;ignoreStrings&quot;: true</code> ignores lines that contain a double-quoted or single-quoted string</li><li><code>&quot;ignoreTemplateLiterals&quot;: true</code> ignores lines that contain a template literal</li><li><code>&quot;ignoreRegExpLiterals&quot;: true</code> ignores lines that contain a RegExp literal</li></ul><h3 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;code&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>{ &quot;code&quot;: 80 }</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;code&quot;: 80 }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a bar.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;baz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;difficult&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;to read&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>{ &quot;code&quot;: 80 }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;code&quot;: 80 }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a bar.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;baz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;easier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;to read&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>:::</p><h3 id="tabwidth" tabindex="-1">tabWidth <a class="header-anchor" href="#tabwidth" aria-label="Permalink to &quot;tabWidth&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>{ &quot;tabWidth&quot;: 4 }</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;code&quot;: 80, &quot;tabWidth&quot;: 4 }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a bar.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;baz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } };</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>{ &quot;tabWidth&quot;: 4 }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;code&quot;: 80, &quot;tabWidth&quot;: 4 }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a bar.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;baz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		};</span></span></code></pre></div><p>:::</p><h3 id="comments" tabindex="-1">comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;comments&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>{ &quot;comments&quot;: 65 }</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;comments&quot;: 65 }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * This is a comment that violates the maximum line length we have specified</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">**/</span></span></code></pre></div><p>:::</p><h3 id="ignorecomments" tabindex="-1">ignoreComments <a class="header-anchor" href="#ignorecomments" aria-label="Permalink to &quot;ignoreComments&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;ignoreComments&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;ignoreComments&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * This is a really really really really really really really really really long comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">**/</span></span></code></pre></div><p>:::</p><h3 id="ignoretrailingcomments" tabindex="-1">ignoreTrailingComments <a class="header-anchor" href="#ignoretrailingcomments" aria-label="Permalink to &quot;ignoreTrailingComments&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;ignoreTrailingComments&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;ignoreTrailingComments&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is a really really really really really really really long comment</span></span></code></pre></div><p>:::</p><h3 id="ignoreurls" tabindex="-1">ignoreUrls <a class="header-anchor" href="#ignoreurls" aria-label="Permalink to &quot;ignoreUrls&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;ignoreUrls&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;ignoreUrls&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://www.example.com/really/really/really/really/really/really/really/long&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h3 id="ignorestrings" tabindex="-1">ignoreStrings <a class="header-anchor" href="#ignorestrings" aria-label="Permalink to &quot;ignoreStrings&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;ignoreStrings&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;ignoreStrings&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> longString </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;this is a really really really really really long string!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h3 id="ignoretemplateliterals" tabindex="-1">ignoreTemplateLiterals <a class="header-anchor" href="#ignoretemplateliterals" aria-label="Permalink to &quot;ignoreTemplateLiterals&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;ignoreTemplateLiterals&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;ignoreTemplateLiterals&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> longTemplateLiteral </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`this is a really really really really really long template literal!\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h3 id="ignoreregexpliterals" tabindex="-1">ignoreRegExpLiterals <a class="header-anchor" href="#ignoreregexpliterals" aria-label="Permalink to &quot;ignoreRegExpLiterals&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for this rule with the <code>{ &quot;ignoreRegExpLiterals&quot;: true }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len: [&quot;error&quot;, { &quot;ignoreRegExpLiterals&quot;: true }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> longRegExpLiteral </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">this is a really really really really really long regular expression!</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h3 id="ignorepattern" tabindex="-1">ignorePattern <a class="header-anchor" href="#ignorepattern" aria-label="Permalink to &quot;ignorePattern&quot;">​</a></h3><p>Examples of <strong>correct</strong> code for this rule with the <code>ignorePattern</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint max-len:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[&quot;error&quot;, { &quot;ignorePattern&quot;: &quot;^\\\\s*var\\\\s.+=\\\\s*require\\\\s*\\\\(&quot; }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dep </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;really/really/really/really/really/really/really/really/long/module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>:::</p>`,66),l=[n];function o(r,h,p,k,d,c){return a(),i("div",null,l)}const E=s(e,[["render",o]]);export{u as __pageData,E as default};
