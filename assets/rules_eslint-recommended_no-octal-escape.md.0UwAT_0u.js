import{_ as e,c as t,a1 as s,j as a,o as n}from"./chunks/framework.DHJwed8E.js";const g=JSON.parse('{"title":"no-octal-escape","description":"","frontmatter":{"title":"no-octal-escape","rule_type":"suggestion"},"headers":[],"relativePath":"rules/eslint-recommended/no-octal-escape.md","filePath":"rules/eslint-recommended/no-octal-escape.md"}'),p={name:"rules/eslint-recommended/no-octal-escape.md"};function l(h,i,r,o,k,c){return n(),t("div",null,i[0]||(i[0]=[s('<p>As of the ECMAScript 5 specification, octal escape sequences in string literals are deprecated and should not be used. Unicode escape sequences should be used instead.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Copyright </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\251</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>This rule disallows octal escape sequences in string literals.</p><p>If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.</p><p>Examples of <strong>incorrect</strong> code for this rule:</p>',6),a("p",{"sourceType:":"",script:""},"::: incorrect ",-1),s(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-octal-escape: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Copyright </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\251</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule:</p>`,3),a("p",{"sourceType:":"",script:""},"::: correct ",-1),s(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-octal-escape: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Copyright </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u00A9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// unicode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Copyright </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\xA9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// hexadecimal</span></span></code></pre></div><p>:::</p>`,2)]))}const u=e(p,[["render",l]]);export{g as __pageData,u as default};