import{_ as i,c as a,a1 as e,o as n}from"./chunks/framework.C4wD7aVO.js";const u=JSON.parse('{"title":"import/no-useless-path-segments","description":"","frontmatter":{},"headers":[],"relativePath":"rules/import/no-useless-path-segments.md","filePath":"rules/import/no-useless-path-segments.md"}'),t={name:"rules/import/no-useless-path-segments.md"};function p(l,s,h,o,k,r){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="import-no-useless-path-segments" tabindex="-1">import/no-useless-path-segments <a class="header-anchor" href="#import-no-useless-path-segments" aria-label="Permalink to &quot;import/no-useless-path-segments&quot;">​</a></h1><p>🔧 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a>.</p><p>Use this rule to prevent unnecessary path segments in import and require statements.</p><h2 id="rule-details" tabindex="-1">Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;Rule Details&quot;">​</a></h2><p>Given the following folder structure:</p><div class="language-pt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-project</span></span>
<span class="line"><span>├── app.js</span></span>
<span class="line"><span>├── footer.js</span></span>
<span class="line"><span>├── header.js</span></span>
<span class="line"><span>└── helpers.js</span></span>
<span class="line"><span>└── helpers</span></span>
<span class="line"><span>    └── index.js</span></span>
<span class="line"><span>├── index.js</span></span>
<span class="line"><span>└── pages</span></span>
<span class="line"><span>    ├── about.js</span></span>
<span class="line"><span>    ├── contact.js</span></span>
<span class="line"><span>    └── index.js</span></span></code></pre></div><p>The following patterns are considered problems:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *  in my-project/app.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./../my-project/pages/about.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages/about.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./../my-project/pages/about&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages/about&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;../my-project/pages/about.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages/about.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;../my-project/pages/about&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages/about&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages//about&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages/about&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages&quot; (except if there is a ./pages.js file)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages&quot; (except if there is a ./pages.js file)</span></span></code></pre></div><p>The following patterns are NOT considered problems:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *  in my-project/app.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./header.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages/about&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="nouselessindex" tabindex="-1">noUselessIndex <a class="header-anchor" href="#nouselessindex" aria-label="Permalink to &quot;noUselessIndex&quot;">​</a></h3><p>If you want to detect unnecessary <code>/index</code> or <code>/index.js</code> (depending on the specified file extensions, see below) imports in your paths, you can enable the option <code>noUselessIndex</code>. By default it is set to <code>false</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;import/no-useless-path-segments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  noUselessIndex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}]</span></span></code></pre></div><p>Additionally to the patterns described above, the following imports are considered problems if <code>noUselessIndex</code> is enabled:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// in my-project/app.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./helpers/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./helpers/&quot; (not auto-fixable to \`./helpers\` because this would lead to an ambiguous import of \`./helpers.js\` and \`./helpers/index.js\`)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages&quot; (auto-fixable)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./pages/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// should be &quot;./pages&quot; (auto-fixable)</span></span></code></pre></div><p>Note: <code>noUselessIndex</code> only avoids ambiguous imports for <code>.js</code> files if you haven&#39;t specified other resolved file extensions. See <a href="https://github.com/import-js/eslint-plugin-import#importextensions" target="_blank" rel="noreferrer">Settings: import/extensions</a> for details.</p><h3 id="commonjs" tabindex="-1">commonjs <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;commonjs&quot;">​</a></h3><p>When set to <code>true</code>, this rule checks CommonJS imports. Default to <code>false</code>.</p>`,19)]))}const g=i(t,[["render",p]]);export{u as __pageData,g as default};
