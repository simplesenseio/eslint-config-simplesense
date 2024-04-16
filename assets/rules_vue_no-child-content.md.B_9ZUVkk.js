import{_ as a,D as l,c as n,I as o,w as h,a3 as t,o as r,l as e,a as i}from"./chunks/framework.ClQ4Qie4.js";const _=JSON.parse('{"title":"vue/no-child-content","description":"disallow element\'s child contents which would be overwritten by a directive like `v-html` or `v-text`","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/no-child-content","description":"disallow element\'s child contents which would be overwritten by a directive like `v-html` or `v-text`","since":"v8.1.0"},"headers":[],"relativePath":"rules/vue/no-child-content.md","filePath":"rules/vue/no-child-content.md"}'),d={name:"rules/vue/no-child-content.md"},c=t('<h1 id="vue-no-child-content" tabindex="-1">vue/no-child-content <a class="header-anchor" href="#vue-no-child-content" aria-label="Permalink to &quot;vue/no-child-content&quot;">​</a></h1><blockquote><p>disallow element&#39;s child contents which would be overwritten by a directive like <code>v-html</code> or <code>v-text</code></p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/vue3-essential&quot;</code>, <code>*.configs[&quot;flat/essential&quot;]</code>, <code>&quot;plugin:vue/essential&quot;</code>, <code>*.configs[&quot;flat/vue2-essential&quot;]</code>, <code>&quot;plugin:vue/vue3-strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-recommended&quot;</code>, <code>*.configs[&quot;flat/recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code> and <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>.</li><li>💡 Some problems reported by this rule are manually fixable by editor <a href="https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions" target="_blank" rel="noreferrer">suggestions</a>.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports child content of elements that have a directive which overwrites that child content. By default, those are <code>v-html</code> and <code>v-text</code>, additional ones (e.g. <a href="https://vue-i18n.intlify.dev/api/directive.html" target="_blank" rel="noreferrer">Vue I18n&#39;s <code>v-t</code> directive</a>) can be configured manually.</p>',5),k=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- ✓ GOOD -->")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">child content</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-html"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"replacesChildContent"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- ✗ BAD -->")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-html"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"replacesChildContent"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">child content</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),u=t(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vue/no-child-content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;additionalDirectives&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// checks v-foo directive</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><code>additionalDirectives</code> ... An array of additional directives to check, without the <code>v-</code> prefix. Empty by default; <code>v-html</code> and <code>v-text</code> are always checked.</li></ul><h2 id="further-reading" tabindex="-1">📚 Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further Reading&quot;">​</a></h2><ul><li><a href="https://vuejs.org/api/built-in-directives.html#v-html" target="_blank" rel="noreferrer"><code>v-html</code> directive</a></li><li><a href="https://vuejs.org/api/built-in-directives.html#v-text" target="_blank" rel="noreferrer"><code>v-text</code> directive</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v8.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-child-content.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-child-content.js" target="_blank" rel="noreferrer">Test source</a></li></ul>`,9);function p(E,g,v,m,y,b){const s=l("eslint-code-block");return r(),n("div",null,[c,o(s,{rules:{"vue/no-child-content":["error"]}},{default:h(()=>[k]),_:1}),u])}const q=a(d,[["render",p]]);export{_ as __pageData,q as default};
