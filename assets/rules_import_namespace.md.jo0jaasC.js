import{_ as i,c as a,ae as e,o as n}from"./chunks/framework.D_WxFy46.js";const c=JSON.parse('{"title":"import/namespace","description":"","frontmatter":{},"headers":[],"relativePath":"rules/import/namespace.md","filePath":"rules/import/namespace.md"}'),t={name:"rules/import/namespace.md"};function p(l,s,h,r,k,o){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="import-namespace" tabindex="-1">import/namespace <a class="header-anchor" href="#import-namespace" aria-label="Permalink to &quot;import/namespace&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: ❗ <code>errors</code>, ☑️ <code>recommended</code>.</p><p>Enforces names exist at the time they are dereferenced, when imported as a full namespace (i.e. <code>import * as foo from &#39;./foo&#39;; foo.bar();</code> will report if <code>bar</code> is not exported by <code>./foo</code>.).</p><p>Will report at the import declaration if there are <em>no</em> exported names found.</p><p>Also, will report for computed references (i.e. <code>foo[&quot;bar&quot;]()</code>).</p><p>Reports on assignment to a member of an imported namespace.</p><p>Note: for packages, the plugin will find exported names from <a href="https://github.com/rollup/rollup/wiki/jsnext:main" target="_blank" rel="noreferrer"><code>jsnext:main</code></a>, if present in <code>package.json</code>. Redux&#39;s npm module includes this key, and thereby is lintable, for example.</p><p>A module path that is <a href="./../README#importignore">ignored</a> or not <a href="https://github.com/bmeck/UnambiguousJavaScriptGrammar" target="_blank" rel="noreferrer">unambiguously an ES module</a> will not be reported when imported.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>Currently, this rule does not check for possible redefinition of the namespace in an intermediate scope. Adherence to the ESLint <code>no-shadow</code> rule for namespaces will prevent this from being a problem.</p><p>For <a href="https://github.com/leebyron/ecmascript-more-export-from" target="_blank" rel="noreferrer">ES7</a>, reports if an exported namespace would be empty (no names exported from the referenced module.)</p><p>Given:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @module ./named-exports</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { b }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExportedClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ES7</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deep </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./deep&#39;</span></span></code></pre></div><p>and:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @module ./deep</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;MC2&quot;</span></span></code></pre></div><p>See what is valid and reported:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @module ./foo</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> names </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./named-exports&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> great</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> names.a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> names.b  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// so great https://youtu.be/ei7mb8UxEl8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> notGreat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomethingWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(names.c) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Reported: &#39;c&#39; not found in imported namespace &#39;names&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> names </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// also reported, only for &#39;c&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// also tunnels through re-exported namespaces!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deepTrouble</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomethingWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(names.deep.e) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomethingWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(names.deep.f) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Reported: &#39;f&#39; not found in deeply imported namespace &#39;names.deep&#39;.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><h4 id="allowcomputed" tabindex="-1"><code>allowComputed</code> <a class="header-anchor" href="#allowcomputed" aria-label="Permalink to &quot;\`allowComputed\`&quot;">​</a></h4><p>Defaults to <code>false</code>. When false, will report the following:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint import/namespace: [2, { allowComputed: false }]*/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./a&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a[x] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Unable to validate computed reference to imported namespace &#39;a&#39;.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>When set to <code>true</code>, the above computed namespace member reference is allowed, but still can&#39;t be statically analyzed any further.</p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h2><ul><li>Lee Byron&#39;s <a href="https://github.com/leebyron/ecmascript-more-export-from" target="_blank" rel="noreferrer">ES7</a> export proposal</li><li><a href="./../../README#importignore"><code>import/ignore</code></a> setting</li><li><a href="./Rollup"><code>jsnext:main</code></a></li></ul>`,24)]))}const g=i(t,[["render",p]]);export{c as __pageData,g as default};
