import{_ as i,c as a,ae as t,o as n}from"./chunks/framework.D_WxFy46.js";const c=JSON.parse('{"title":"Disallow string concatenation with __dirname and __filename (n/no-path-concat)","description":"","frontmatter":{},"headers":[],"relativePath":"rules/n/no-path-concat.md","filePath":"rules/n/no-path-concat.md"}'),e={name:"rules/n/no-path-concat.md"};function h(l,s,p,k,o,r){return n(),a("div",null,s[0]||(s[0]=[t('<h1 id="disallow-string-concatenation-with-dirname-and-filename-n-no-path-concat" tabindex="-1">Disallow string concatenation with <code>__dirname</code> and <code>__filename</code> (<code>n/no-path-concat</code>) <a class="header-anchor" href="#disallow-string-concatenation-with-dirname-and-filename-n-no-path-concat" aria-label="Permalink to &quot;Disallow string concatenation with `__dirname` and `__filename` (`n/no-path-concat`)&quot;">​</a></h1><p>In Node.js, the <code>__dirname</code> and <code>__filename</code> global variables contain the directory path and the file path of the currently executing script file, respectively. Sometimes, developers try to use these variables to create paths to other files, such as:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fullPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __dirname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>However, there are a few problems with this. First, you can&#39;t be sure what type of system the script is running on. Node.js can be run on any computer, including Windows, which uses a different path separator. It&#39;s very easy, therefore, to create an invalid path using string concatenation and assuming Unix-style separators. There&#39;s also the possibility of having double separators, or otherwise ending up with an invalid path.</p><p>In order to avoid any confusion as to how to create the correct path, Node.js provides the <code>path</code> module. This module uses system-specific information to always return the correct value. So you can rewrite the previous example as:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fullPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>This example doesn&#39;t need to include separators as <code>path.join()</code> will do it in the most appropriate manner. Alternately, you can use <code>path.resolve()</code> to retrieve the fully-qualified path:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fullPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Both <code>path.join()</code> and <code>path.resolve()</code> are suitable replacements for string concatenation wherever file or directory paths are being created.</p><h2 id="📖-rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#📖-rule-details" aria-label="Permalink to &quot;📖 Rule Details&quot;">​</a></h2><p>This rule aims to prevent string concatenation of directory paths in Node.js</p><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint n/no-path-concat: &quot;error&quot;*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __dirname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __filename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/foo.js`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__filename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/foo.js`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint n/no-path-concat: &quot;error&quot;*/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__filename, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __dirname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __filename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}_foo.js`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fullPath6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__filename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.test.js`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="🔎-implementation" tabindex="-1">🔎 Implementation <a class="header-anchor" href="#🔎-implementation" aria-label="Permalink to &quot;🔎 Implementation&quot;">​</a></h2><ul><li><a href="../../lib/rules/no-path-concat.js">Rule source</a></li><li><a href="../../tests/lib/rules/no-path-concat.js">Test source</a></li></ul>',17)]))}const E=i(e,[["render",h]]);export{c as __pageData,E as default};
