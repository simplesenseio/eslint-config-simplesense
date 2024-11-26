import{_ as i,c as a,a1 as e,o as t}from"./chunks/framework.DHJwed8E.js";const c=JSON.parse('{"title":"import/export","description":"","frontmatter":{},"headers":[],"relativePath":"rules/import/export.md","filePath":"rules/import/export.md"}'),n={name:"rules/import/export.md"};function l(p,s,h,r,k,o){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="import-export" tabindex="-1">import/export <a class="header-anchor" href="#import-export" aria-label="Permalink to &quot;import/export&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: ❗ <code>errors</code>, ☑️ <code>recommended</code>.</p><p>Reports funny business with exports, like repeated exports of names or defaults.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*...*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Multiple default exports.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> makeClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> makeClass </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Multiple default exports.</span></span></code></pre></div><p>or</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*...*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Multiple exports of name &#39;foo&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*...*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Multiple exports of name &#39;foo&#39;.</span></span></code></pre></div><p>In the case of named/default re-export, all <code>n</code> re-exports will be reported, as at least <code>n-1</code> of them are clearly mistakes, but it is not clear which one (if any) is intended. Could be the result of copy/paste, code duplication with intent to rename, etc.</p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h2><ul><li>Lee Byron&#39;s <a href="https://github.com/leebyron/ecmascript-more-export-from" target="_blank" rel="noreferrer">ES7</a> export proposal</li></ul>`,10)]))}const g=i(n,[["render",l]]);export{c as __pageData,g as default};