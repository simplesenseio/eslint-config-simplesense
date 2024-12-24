import{_ as l,D as o,c as r,I as t,w as a,a3 as n,j as e,a as s,o as h}from"./chunks/framework.D8Wt_3VJ.js";const D=JSON.parse('{"title":"vue/no-reserved-component-names","description":"disallow the use of reserved names in component definitions","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/no-reserved-component-names","description":"disallow the use of reserved names in component definitions","since":"v6.1.0"},"headers":[],"relativePath":"rules/vue/no-reserved-component-names.md","filePath":"rules/vue/no-reserved-component-names.md"}'),d={name:"rules/vue/no-reserved-component-names.md"},u=n('<h1 id="vue-no-reserved-component-names" tabindex="-1">vue/no-reserved-component-names <a class="header-anchor" href="#vue-no-reserved-component-names" aria-label="Permalink to &quot;vue/no-reserved-component-names&quot;">​</a></h1><blockquote><p>disallow the use of reserved names in component definitions</p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/vue3-essential&quot;</code>, <code>*.configs[&quot;flat/essential&quot;]</code>, <code>&quot;plugin:vue/essential&quot;</code>, <code>*.configs[&quot;flat/vue2-essential&quot;]</code>, <code>&quot;plugin:vue/vue3-strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-recommended&quot;</code>, <code>*.configs[&quot;flat/recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code> and <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule prevents name collisions between Vue components and standard HTML elements and built-in components.</p>',5),p=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  name: "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'div'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),c=n(`<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vue/no-reserved-component-names&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;disallowVueBuiltInComponents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;disallowVue3BuiltInComponents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><code>disallowVueBuiltInComponents</code> (<code>boolean</code>) ... If <code>true</code>, disallow Vue.js 2.x built-in component names. Default is <code>false</code>.</li><li><code>disallowVue3BuiltInComponents</code> (<code>boolean</code>) ... If <code>true</code>, disallow Vue.js 3.x built-in component names. Default is <code>false</code>.</li></ul><h3 id="disallowvuebuiltincomponents-true" tabindex="-1"><code>&quot;disallowVueBuiltInComponents&quot;: true</code> <a class="header-anchor" href="#disallowvuebuiltincomponents-true" aria-label="Permalink to &quot;\`&quot;disallowVueBuiltInComponents&quot;: true\`&quot;">​</a></h3>`,4),k=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  name: "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'transition-group'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),m=e("h3",{id:"disallowvue3builtincomponents-true",tabindex:"-1"},[e("code",null,'"disallowVue3BuiltInComponents": true'),s(),e("a",{class:"header-anchor",href:"#disallowvue3builtincomponents-true","aria-label":'Permalink to "`"disallowVue3BuiltInComponents": true`"'},"​")],-1),E=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  name: "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'teleport'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),g=n('<h2 id="related-rules" tabindex="-1">👫 Related Rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related Rules&quot;">​</a></h2><ul><li><a href="./multi-word-component-names">vue/multi-word-component-names</a></li></ul><h2 id="further-reading" tabindex="-1">📚 Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further Reading&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noreferrer">List of html elements</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element" target="_blank" rel="noreferrer">List of SVG elements</a></li><li><a href="https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name/22545622#22545622" target="_blank" rel="noreferrer">Kebab case elements</a></li><li><a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name" target="_blank" rel="noreferrer">Valid custom element name</a></li><li><a href="https://vuejs.org/api/built-in-components.html" target="_blank" rel="noreferrer">API - Built-In Components</a></li><li><a href="https://v2.vuejs.org/v2/api/index.html#Built-In-Components" target="_blank" rel="noreferrer">API (for v2) - Built-In Components</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v6.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-reserved-component-names.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-reserved-component-names.js" target="_blank" rel="noreferrer">Test source</a></li></ul>',8);function v(_,b,f,y,q,C){const i=o("eslint-code-block");return h(),r("div",null,[u,t(i,{rules:{"vue/no-reserved-component-names":["error"]}},{default:a(()=>[p]),_:1}),c,t(i,{rules:{"vue/no-reserved-component-names":["error",{disallowVueBuiltInComponents:!0}]}},{default:a(()=>[k]),_:1}),m,t(i,{rules:{"vue/no-reserved-component-names":["error",{disallowVue3BuiltInComponents:!0}]}},{default:a(()=>[E]),_:1}),g])}const F=l(d,[["render",v]]);export{D as __pageData,F as default};