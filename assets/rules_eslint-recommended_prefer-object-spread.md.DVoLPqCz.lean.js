import{_ as i,c as a,a1 as n,o as e}from"./chunks/framework.DHJwed8E.js";const o=JSON.parse('{"title":"prefer-object-spread","description":"","frontmatter":{"title":"prefer-object-spread","rule_type":"suggestion"},"headers":[],"relativePath":"rules/eslint-recommended/prefer-object-spread.md","filePath":"rules/eslint-recommended/prefer-object-spread.md"}'),t={name:"rules/eslint-recommended/prefer-object-spread.md"};function l(p,s,h,r,k,E){return e(),a("div",null,s[0]||(s[0]=[n(`<p>When Object.assign is called using an object literal as the first argument, this rule requires using the object spread syntax instead. This rule also warns on cases where an <code>Object.assign</code> call is made using a single argument that is an object literal, in this case, the <code>Object.assign</code> call is not needed.</p><p>Introduced in ES2018, object spread is a declarative alternative which may perform better than the more dynamic, imperative <code>Object.assign</code>.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>Examples of <strong>incorrect</strong> code for this rule:</p><p>::: incorrect</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint prefer-object-spread: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, foo);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, {foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, baz);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, baz, { foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}, { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baz });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Object.assign with a single argument that is an object literal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ foo: bar });</span></span></code></pre></div><p>:::</p><p>Examples of <strong>correct</strong> code for this rule:</p><p>::: correct</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint prefer-object-spread: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baz, foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Any Object.assign call without an object literal as the first argument</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, { bar: baz });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, bar);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, { bar, baz });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo, { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baz });</span></span></code></pre></div><p>:::</p><h2 id="when-not-to-use-it" tabindex="-1">When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;When Not To Use It&quot;">​</a></h2><p>This rule should not be used unless ES2018 is supported in your codebase.</p>`,13)]))}const c=i(t,[["render",l]]);export{o as __pageData,c as default};
