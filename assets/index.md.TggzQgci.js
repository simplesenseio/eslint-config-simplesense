import{_ as s,c as e,o as i,a3 as a}from"./chunks/framework.D8Wt_3VJ.js";const u=JSON.parse('{"title":"Usage","description":"","frontmatter":{"layout":"home","hero":{"name":"Simplesense","text":"ESLint Config","tagline":"Javascript, Node, Vue, and YAML","image":{"src":"/assets/eslint-logo.svg","alt":"Simplesense"},"actions":[{"theme":"alt","text":"Browse Rules","link":"/rules"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),n={name:"index.md"},t=a(`<div style="display:flex;flex:1;"><p><a href="https://www.npmjs.com/package/eslint-config-simplesense" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/eslint-config-simplesense.svg?style=flat-square" alt="NPM Version"></a></p><span style="display:block;width:16px;"></span><p><a href="https://eslint.org/docs/user-guide/getting-started" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/dependency-version/eslint-config-simplesense/dev/eslint?color=%234b32c3&amp;label=ESLint&amp;logo=eslint&amp;style=flat-square" alt="ESLint"></a></p></div><hr style="margin-bottom:2rem;"><h1 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h1><p>In addition to <code>eslint</code> it&#39;s required that you install <code>sort-package-json</code> as a dev dependency and use it in the package scripts.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-config-simplesense</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sort-package-json</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h2 id="configure-eslint-config-js" tabindex="-1">Configure eslint.config.js <a class="header-anchor" href="#configure-eslint-config-js" aria-label="Permalink to &quot;Configure eslint.config.js&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eslint-config-simplesense&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // your custom configuration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="configure-package-json" tabindex="-1">Configure package.json <a class="header-anchor" href="#configure-package-json" aria-label="Permalink to &quot;Configure package.json&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npm run lint:package-json &amp;&amp; npm run lint:eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lint:package-json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sort-package-json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lint:eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint --fix &#39;**/*.{js,vue,yaml,yml}&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h1 id="what-s-included" tabindex="-1">What&#39;s Included <a class="header-anchor" href="#what-s-included" aria-label="Permalink to &quot;What&#39;s Included&quot;">​</a></h1><ul><li><a href="https://www.npmjs.com/package/eslint-plugin-array-func" target="_blank" rel="noreferrer">eslint-plugin-array-func</a></li><li><a href="https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments" target="_blank" rel="noreferrer">@eslint-community/eslint-plugin-eslint-comments</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-import" target="_blank" rel="noreferrer">eslint-plugin-import</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-no-use-extend-native" target="_blank" rel="noreferrer">eslint-plugin-no-use-extend-native</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-n" target="_blank" rel="noreferrer">eslint-plugin-n</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-optimize-regex" target="_blank" rel="noreferrer">eslint-plugin-optimize-regex</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-regexp" target="_blank" rel="noreferrer">eslint-plugin-regexp</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-security" target="_blank" rel="noreferrer">eslint-plugin-security</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-sonarjs" target="_blank" rel="noreferrer">eslint-plugin-sonarjs</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-unicorn" target="_blank" rel="noreferrer">eslint-plugin-unicorn 🦄</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-vue" target="_blank" rel="noreferrer">eslint-plugin-vue</a></li><li><a href="https://www.npmjs.com/package/eslint-plugin-yml" target="_blank" rel="noreferrer">eslint-plugin-yml</a></li></ul><h1 id="why-use-a-linter" tabindex="-1">Why Use a Linter? <a class="header-anchor" href="#why-use-a-linter" aria-label="Permalink to &quot;Why Use a Linter?&quot;">​</a></h1><blockquote><p>Well run projects have clear consistent coding conventions, with automated enforcement. Not having coding conventions is also a barrier to attracting contributions, and depending on a project that does not welcome (quality!) contributions is itself a risk. Besides checking style, linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time.</p><p>-- <cite><a href="https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7" target="_blank" rel="noreferrer">Sam Roberts</a></cite></p></blockquote>`,14),l=[t];function r(p,o,h,c,g,k){return i(),e("div",null,l)}const m=s(n,[["render",r]]);export{u as __pageData,m as default};