import{_ as a,c as i,a1 as e,o as t}from"./chunks/framework.C4wD7aVO.js";const k=JSON.parse('{"title":"spaced-comment","description":"","frontmatter":{"title":"spaced-comment","rule_type":"suggestion","related_rules":["spaced-line-comment"]},"headers":[],"relativePath":"rules/@stylistic/js/spaced-comment.md","filePath":"rules/@stylistic/js/spaced-comment.md"}'),n={name:"rules/@stylistic/js/spaced-comment.md"};function p(l,s,o,h,c,d){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="js-spaced-comment" tabindex="-1">js/spaced-comment <a class="header-anchor" href="#js-spaced-comment" aria-label="Permalink to &quot;js/spaced-comment&quot;">​</a></h1><p>Some style guides require or disallow a whitespace immediately after the initial <code>//</code> or <code>/*</code> of a comment. Whitespace after the <code>//</code> or <code>/*</code> makes it easier to read text in comments. On the other hand, commenting out code is easier without having to put a whitespace right after the <code>//</code> or <code>/*</code>.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule will enforce consistency of spacing after the start of a comment <code>//</code> or <code>/*</code>. It also provides several exceptions for various documentation styles.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>The rule takes two options.</p><ul><li><p>The first is a string which be either <code>&quot;always&quot;</code> or <code>&quot;never&quot;</code>. The default is <code>&quot;always&quot;</code>.</p><ul><li><p>If <code>&quot;always&quot;</code> then the <code>//</code> or <code>/*</code> must be followed by at least one whitespace.</p></li><li><p>If <code>&quot;never&quot;</code> then there should be no whitespace following.</p></li></ul></li><li><p>This rule can also take a 2nd option, an object with any of the following keys: <code>&quot;exceptions&quot;</code> and <code>&quot;markers&quot;</code>.</p><ul><li>The <code>&quot;exceptions&quot;</code> value is an array of string patterns which are considered exceptions to the rule. The rule will not warn when the pattern starts from the beginning of the comment and repeats until the end of the line or <code>*/</code> if the comment is a single line comment. Please note that exceptions are ignored if the first argument is <code>&quot;never&quot;</code>.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spaced-comment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;exceptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }]</span></span></code></pre></div><ul><li>The <code>&quot;markers&quot;</code> value is an array of string patterns which are considered markers for docblock-style comments, such as an additional <code>/</code>, used to denote documentation read by doxygen, vsdoc, etc. which must have additional characters. The <code>&quot;markers&quot;</code> array will apply regardless of the value of the first argument, e.g. <code>&quot;always&quot;</code> or <code>&quot;never&quot;</code>.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spaced-comment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;markers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }]</span></span></code></pre></div></li></ul><p>The difference between a marker and an exception is that a marker only appears at the beginning of the comment whereas exceptions can occur anywhere in the comment string.</p><p>You can also define separate exceptions and markers for block and line comments. The <code>&quot;block&quot;</code> object can have an additional key <code>&quot;balanced&quot;</code>, a boolean that specifies if inline block comments should have balanced spacing. The default value is <code>false</code>.</p><ul><li><p>If <code>&quot;balanced&quot;: true</code> and <code>&quot;always&quot;</code> then the <code>/*</code> must be followed by at least one whitespace, and the <code>*/</code> must be preceded by at least one whitespace.</p></li><li><p>If <code>&quot;balanced&quot;: true</code> and <code>&quot;never&quot;</code> then there should be no whitespace following <code>/*</code> or preceding <code>*/</code>.</p></li><li><p>If <code>&quot;balanced&quot;: false</code> then balanced whitespace is not enforced.</p></li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spaced-comment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;line&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;markers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;exceptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;block&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;markers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;exceptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;balanced&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}]</span></span></code></pre></div><h3 id="always" tabindex="-1">always <a class="header-anchor" href="#always" aria-label="Permalink to &quot;always&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;always&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//This is a comment with no whitespace at the beginning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*This is a comment with no whitespace at the beginning */</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;block&quot;: { &quot;balanced&quot;: true } }] */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* This is a comment with whitespace at the beginning but not the end*/</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;always&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is a comment with a whitespace at the beginning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* This is a comment with a whitespace at the beginning */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * This is a comment with a whitespace at the beginning</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**This comment has a newline</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* I am jsdoc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><p>:::</p><h3 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-label="Permalink to &quot;never&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;never&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;never&quot;]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is a comment with a whitespace at the beginning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* This is a comment with a whitespace at the beginning */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* \\nThis is a comment with a whitespace at the beginning */</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;never&quot;, { &quot;block&quot;: { &quot;balanced&quot;: true } }]*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*This is a comment with whitespace at the end */</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;never&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;never&quot;]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*This is a comment with no whitespace at the beginning */</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;never&quot;]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* I am jsdoc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><p>:::</p><h3 id="exceptions" tabindex="-1">exceptions <a class="header-anchor" href="#exceptions" aria-label="Permalink to &quot;exceptions&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;always&quot;</code> option combined with <code>&quot;exceptions&quot;</code>:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;block&quot;: { &quot;exceptions&quot;: [&quot;-&quot;] } }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//--------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//--------------</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;exceptions&quot;: [&quot;-&quot;, &quot;+&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//------++++++++</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//------++++++++</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;exceptions&quot;: [&quot;-&quot;, &quot;+&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*------++++++++*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Comment block */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*------++++++++*/</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;line&quot;: { &quot;exceptions&quot;: [&quot;-+&quot;] } }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*-+-+-+-+-+-+-+*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*-+-+-+-+-+-+-+*/</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;block&quot;: { &quot;exceptions&quot;: [&quot;*&quot;] } }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/******** COMMENT *******/</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;always&quot;</code> option combined with <code>&quot;exceptions&quot;</code>:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;exceptions&quot;: [&quot;-&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//--------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//--------------</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;line&quot;: { &quot;exceptions&quot;: [&quot;-&quot;] } }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//--------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//--------------</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;exceptions&quot;: [&quot;*&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/****************</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ****************/</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;exceptions&quot;: [&quot;-+&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//-+-+-+-+-+-+-+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//-+-+-+-+-+-+-+</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*-+-+-+-+-+-+-+*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*-+-+-+-+-+-+-+*/</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;block&quot;: { &quot;exceptions&quot;: [&quot;-+&quot;] } }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*-+-+-+-+-+-+-+*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Comment block</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*-+-+-+-+-+-+-+*/</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;block&quot;: { &quot;exceptions&quot;: [&quot;*&quot;] } }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/***************/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/********</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">COMMENT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*******/</span></span></code></pre></div><p>:::</p><h3 id="markers" tabindex="-1">markers <a class="header-anchor" href="#markers" aria-label="Permalink to &quot;markers&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;always&quot;</code> option combined with <code>&quot;markers&quot;</code>:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;markers&quot;: [&quot;/&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">///This is a comment with a marker but without whitespace</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;block&quot;: { &quot;markers&quot;: [&quot;!&quot;], &quot;balanced&quot;: true } }]*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*! This is a comment with a marker but without whitespace at the end*/</span></span></code></pre></div><p>:::</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;never&quot;, { &quot;block&quot;: { &quot;markers&quot;: [&quot;!&quot;], &quot;balanced&quot;: true } }]*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*!This is a comment with a marker but with whitespace at the end */</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;always&quot;</code> option combined with <code>&quot;markers&quot;</code>:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;markers&quot;: [&quot;/&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// This is a comment with a marker</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint spaced-comment: [&quot;error&quot;, &quot;never&quot;, { &quot;markers&quot;: [&quot;!&lt;&quot;] }]*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//!&lt;This is a line comment with a marker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*!&lt;this is a block comment with a marker</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">subsequent lines are ignored</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><p>:::</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint spaced-comment: [&quot;error&quot;, &quot;always&quot;, { &quot;markers&quot;: [&quot;global&quot;] }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*global ABC*/</span></span></code></pre></div><p>:::</p>`,98)]))}const u=a(n,[["render",p]]);export{k as __pageData,u as default};
