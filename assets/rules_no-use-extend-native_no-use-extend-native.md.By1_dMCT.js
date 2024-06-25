import{_ as s,c as e,o as a,a2 as i}from"./chunks/framework.DKvG-fKI.js";const E=JSON.parse('{"title":"Prevent using extended native objects","description":"","frontmatter":{},"headers":[],"relativePath":"rules/no-use-extend-native/no-use-extend-native.md","filePath":"rules/no-use-extend-native/no-use-extend-native.md"}'),t={name:"rules/no-use-extend-native/no-use-extend-native.md"},n=i(`<h1 id="prevent-using-extended-native-objects" tabindex="-1">Prevent using extended native objects <a class="header-anchor" href="#prevent-using-extended-native-objects" aria-label="Permalink to &quot;Prevent using extended native objects&quot;">​</a></h1><h2 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;Fail&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;unicorn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.green;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">customFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="pass" tabindex="-1">Pass <a class="header-anchor" href="#pass" aria-label="Permalink to &quot;Pass&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;unicorn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,5),l=[n];function h(d,p,o,r,c,k){return a(),e("div",null,l)}const g=s(t,[["render",h]]);export{E as __pageData,g as default};
