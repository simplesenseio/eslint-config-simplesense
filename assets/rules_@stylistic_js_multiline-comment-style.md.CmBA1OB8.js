import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.vIlBslkg.js";const g=JSON.parse('{"title":"multiline-comment-style","description":"","frontmatter":{"title":"multiline-comment-style","rule_type":"suggestion"},"headers":[],"relativePath":"rules/@stylistic/js/multiline-comment-style.md","filePath":"rules/@stylistic/js/multiline-comment-style.md"}'),e={name:"rules/@stylistic/js/multiline-comment-style.md"},t=n(`<h1 id="js-multiline-comment-style" tabindex="-1">js/multiline-comment-style <a class="header-anchor" href="#js-multiline-comment-style" aria-label="Permalink to &quot;js/multiline-comment-style&quot;">​</a></h1><p>Many style guides require a particular style for comments that span multiple lines. For example, some style guides prefer the use of a single block comment for multiline comments, whereas other style guides prefer consecutive line comments.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule aims to enforce a particular style for multiline comments.</p><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><p>This rule has a string option, which can have one of the following values:</p><ul><li><code>&quot;starred-block&quot;</code> (default): Disallows consecutive line comments in favor of block comments. Additionally, requires block comments to have an aligned <code>*</code> character before each line.</li><li><code>&quot;bare-block&quot;</code>: Disallows consecutive line comments in favor of block comments, and disallows block comments from having a <code>&quot;*&quot;</code> character before each line. This option ignores JSDoc comments.</li><li><code>&quot;separate-lines&quot;</code>: Disallows block comments in favor of consecutive line comments. By default, this option ignores JSDoc comments. To also apply this rule to JSDoc comments, set the <code>checkJSDoc</code> option to <code>true</code>.</li></ul><p>The rule always ignores directive comments such as <code>/* eslint-disable */</code>.</p><p>Examples of <strong>incorrect</strong> code for this rule with the default <code>&quot;starred-block&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;starred-block&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// this line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// calls foo()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* this line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">calls foo() */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* this comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * is missing a newline after /*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * this comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * is missing a newline at the end */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* the star in this line should have a space before it</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * the star on the following line should have a space before it</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the default <code>&quot;starred-block&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;starred-block&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * this line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * calls foo()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// single-line comment</span></span></code></pre></div><p>:::</p><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;bare-block&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;bare-block&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// this line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// calls foo()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * this line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * calls foo()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;bare-block&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;bare-block&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* this line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   calls foo() */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;separate-lines&quot;</code> option:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;separate-lines&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* This line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">calls foo() */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * This line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * calls foo()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;separate-lines&quot;</code> option:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;separate-lines&quot;] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// calls foo()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>incorrect</strong> code for this rule with the <code>&quot;separate-lines&quot;</code> option and <code>checkJSDoc</code> set to <code>true</code>:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;separate-lines&quot;, { &quot;checkJSDoc&quot;: true }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * I am a JSDoc comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * and I&#39;m not allowed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule with the <code>&quot;separate-lines&quot;</code> option and <code>checkJSDoc</code> set to <code>true</code>:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint multiline-comment-style: [&quot;error&quot;, &quot;separate-lines&quot;, { &quot;checkJSDoc&quot;: true }] */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// I am a JSDoc comment</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// and I&#39;m not allowed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>:::</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>If you don&#39;t want to enforce a particular style for multiline comments, you can disable the rule.</p>`,42),l=[t];function p(o,h,c,r,k,d){return a(),i("div",null,l)}const m=s(e,[["render",p]]);export{g as __pageData,m as default};
