import{_ as e,c as s,o as a,a3 as i}from"./chunks/framework.D8Wt_3VJ.js";const g=JSON.parse('{"title":"vue/jsx-uses-vars","description":"prevent variables used in JSX to be marked as unused","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/jsx-uses-vars","description":"prevent variables used in JSX to be marked as unused","since":"v2.0.0"},"headers":[],"relativePath":"rules/vue/jsx-uses-vars.md","filePath":"rules/vue/jsx-uses-vars.md"}'),t={name:"rules/vue/jsx-uses-vars.md"},n=i(`<h1 id="vue-jsx-uses-vars" tabindex="-1">vue/jsx-uses-vars <a class="header-anchor" href="#vue-jsx-uses-vars" aria-label="Permalink to &quot;vue/jsx-uses-vars&quot;">​</a></h1><blockquote><p>prevent variables used in JSX to be marked as unused</p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/base&quot;</code>, <code>*.configs[&quot;flat/base&quot;]</code>, <code>&quot;plugin:vue/essential&quot;</code>, <code>*.configs[&quot;flat/vue2-essential&quot;]</code>, <code>&quot;plugin:vue/vue3-essential&quot;</code>, <code>*.configs[&quot;flat/essential&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-recommended&quot;</code> and <code>*.configs[&quot;flat/recommended&quot;]</code>.</li></ul><p>Since 0.17.0 the ESLint <code>no-unused-vars</code> rule does not detect variables used in JSX (<a href="https://eslint.org/blog/2015/03/eslint-0.17.0-released#changes-to-jsxreact-handling" target="_blank" rel="noreferrer">see details</a>). This rule will find variables used in JSX and mark them as used.</p><p>This rule only has an effect when the <code>no-unused-vars</code> rule is enabled.</p><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>Without this rule this code triggers warning:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HelloWorld </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./HelloWorld&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HelloWorld</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> msg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>After turning on, <code>HelloWorld</code> is being marked as used and <code>no-unused-vars</code> rule doesn&#39;t report an issue.</p><h2 id="when-not-to-use-it" tabindex="-1">🔇 When Not To Use It <a class="header-anchor" href="#when-not-to-use-it" aria-label="Permalink to &quot;:mute: When Not To Use It&quot;">​</a></h2><p>If you are not using JSX or if you do not use the <code>no-unused-vars</code> rule then you can disable this rule.</p><h2 id="related-rules" tabindex="-1">👫 Related Rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related Rules&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/no-unused-vars" target="_blank" rel="noreferrer">no-unused-vars</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v2.0.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/jsx-uses-vars.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/jsx-uses-vars.js" target="_blank" rel="noreferrer">Test source</a></li></ul>`,17),l=[n];function o(r,u,d,h,p,c){return a(),s("div",null,l)}const v=e(t,[["render",o]]);export{g as __pageData,v as default};
