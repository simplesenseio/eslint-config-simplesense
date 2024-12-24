import{_ as s,c as i,o as e,a3 as a}from"./chunks/framework.vIlBslkg.js";const g=JSON.parse('{"title":"eol-last","description":"","frontmatter":{"title":"eol-last","rule_type":"layout"},"headers":[],"relativePath":"rules/@stylistic/js/eol-last.md","filePath":"rules/@stylistic/js/eol-last.md"}'),t={name:"rules/@stylistic/js/eol-last.md"},n=a(`<h1 id="js-eol-last" tabindex="-1">js/eol-last <a class="header-anchor" href="#js-eol-last" aria-label="Permalink to &quot;js/eol-last&quot;">​</a></h1><p>Trailing newlines in non-empty files are a common UNIX idiom. Benefits of trailing newlines include the ability to concatenate or append to files as well as output files to the terminal without interfering with shell prompts.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule enforces at least one newline (or absence thereof) at the end of non-empty files.</p><p>Prior to v0.16.0 this rule also enforced that there was only a single line at the end of the file. If you still want this behavior, consider enabling <a href="./no-multiple-empty-lines">no-multiple-empty-lines</a> with <code>maxEOF</code> and/or <a href="./no-trailing-spaces">no-trailing-spaces</a>.</p><p>Examples of <strong>incorrect</strong> code for this rule:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint eol-last: [&quot;error&quot;, &quot;always&quot;]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint eol-last: [&quot;error&quot;, &quot;always&quot;]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}⏎</span></span></code></pre></div><p>:::</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>This rule has a string option:</p><ul><li><code>&quot;always&quot;</code> (default) enforces that files end with a newline (LF)</li><li><code>&quot;never&quot;</code> enforces that files do not end with a newline</li><li><code>&quot;unix&quot;</code> (deprecated) is identical to &quot;always&quot;</li><li><code>&quot;windows&quot;</code> (deprecated) is identical to &quot;always&quot;, but will use a CRLF character when autofixing</li></ul><p><strong>Deprecated:</strong> The options <code>&quot;unix&quot;</code> and <code>&quot;windows&quot;</code> are deprecated. If you need to enforce a specific linebreak style, use this rule in conjunction with <code>linebreak-style</code>.</p>`,17),l=[n];function o(p,h,r,d,c,k){return e(),i("div",null,l)}const E=s(t,[["render",o]]);export{g as __pageData,E as default};