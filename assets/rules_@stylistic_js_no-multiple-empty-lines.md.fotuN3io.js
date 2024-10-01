import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.ZJ0k6Sl1.js";const g=JSON.parse('{"title":"no-multiple-empty-lines","description":"","frontmatter":{"title":"no-multiple-empty-lines","rule_type":"layout"},"headers":[],"relativePath":"rules/@stylistic/js/no-multiple-empty-lines.md","filePath":"rules/@stylistic/js/no-multiple-empty-lines.md"}'),t={name:"rules/@stylistic/js/no-multiple-empty-lines.md"},e=n(`<h1 id="js-no-multiple-empty-lines" tabindex="-1">js/no-multiple-empty-lines <a class="header-anchor" href="#js-no-multiple-empty-lines" aria-label="Permalink to &quot;js/no-multiple-empty-lines&quot;">​</a></h1><p>Some developers prefer to have multiple blank lines removed, while others feel that it helps improve readability. Whitespace is useful for separating logical sections of code, but excess whitespace takes up more of the screen.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>This rule has an object option:</p><ul><li><code>&quot;max&quot;</code> (default: <code>2</code>) enforces a maximum number of consecutive empty lines.</li><li><code>&quot;maxEOF&quot;</code> enforces a maximum number of consecutive empty lines at the end of files.</li><li><code>&quot;maxBOF&quot;</code> enforces a maximum number of consecutive empty lines at the beginning of files.</li></ul><h3 id="max" tabindex="-1">max <a class="header-anchor" href="#max" aria-label="Permalink to &quot;max&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>{ &quot;max&quot;: 2 }</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: &quot;error&quot;*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>{ &quot;max&quot;: 2 }</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: &quot;error&quot;*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h3 id="maxeof" tabindex="-1">maxEOF <a class="header-anchor" href="#maxeof" aria-label="Permalink to &quot;maxEOF&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>{ max: 2, maxEOF: 0 }</code> options:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: [&quot;error&quot;, { &quot;max&quot;: 2, &quot;maxEOF&quot;: 0 }]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>{ max: 2, maxEOF: 0 }</code> options:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: [&quot;error&quot;, { &quot;max&quot;: 2, &quot;maxEOF&quot;: 0 }]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p><strong>Note</strong>: Although this ensures zero empty lines at the EOF, most editors will still show one empty line at the end if the file ends with a line break, as illustrated below. There is no empty line at the end of a file after the last <code>\\n</code>, although editors may show an additional line. A true additional line would be represented by <code>\\n\\n</code>.</p><p><strong>Correct</strong>:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: [&quot;error&quot;, { &quot;max&quot;: 2, &quot;maxEOF&quot;: 0 }]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span></code></pre></div><p>:::</p><h3 id="maxbof" tabindex="-1">maxBOF <a class="header-anchor" href="#maxbof" aria-label="Permalink to &quot;maxBOF&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>{ max: 2, maxBOF: 1 }</code> options:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: [&quot;error&quot;, { &quot;max&quot;: 2, &quot;maxBOF&quot;: 1 }]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>{ max: 2, maxBOF: 1 }</code> options:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: [&quot;error&quot;, { &quot;max&quot;: 2, &quot;maxBOF&quot;: 1}]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-multiple-empty-lines: [&quot;error&quot;, { &quot;max&quot;: 2, &quot;maxBOF&quot;: 1}]*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">⏎</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you do not care about extra blank lines, turn this off.</p>`,44),l=[e];function p(h,k,o,r,E,d){return a(),i("div",null,l)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
