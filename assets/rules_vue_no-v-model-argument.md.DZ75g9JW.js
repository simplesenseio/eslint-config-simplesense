import{_ as t,c as l,I as o,w as n,a3 as s,D as r,o as d,j as e,a as i}from"./chunks/framework.ZJ0k6Sl1.js";const f=JSON.parse('{"title":"vue/no-v-model-argument","description":"disallow adding an argument to `v-model` used in custom component","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/no-v-model-argument","description":"disallow adding an argument to `v-model` used in custom component","since":"v7.0.0"},"headers":[],"relativePath":"rules/vue/no-v-model-argument.md","filePath":"rules/vue/no-v-model-argument.md"}'),h={name:"rules/vue/no-v-model-argument.md"},u=s('<h1 id="vue-no-v-model-argument" tabindex="-1">vue/no-v-model-argument <a class="header-anchor" href="#vue-no-v-model-argument" aria-label="Permalink to &quot;vue/no-v-model-argument&quot;">​</a></h1><blockquote><p>disallow adding an argument to <code>v-model</code> used in custom component</p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/essential&quot;</code>, <code>*.configs[&quot;flat/vue2-essential&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code> and <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>.</li></ul><p>This rule checks whether <code>v-model</code> used on custom component do not have an argument.</p><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports <code>v-model</code> directives in the following cases:</p><ul><li>The directive used on component has an argument. E.g. <code>&lt;MyComponent v-model:aaa=&quot;foo&quot; /&gt;</code></li></ul>',7),c=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- ✓ GOOD -->")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"MyComponent"),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"foo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- ✗ BAD -->")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"MyComponent"),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"aaa"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"foo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),k=s('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="related-rules" tabindex="-1">👫 Related Rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related Rules&quot;">​</a></h2><ul><li><a href="./valid-v-model">vue/valid-v-model</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v7.0.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-v-model-argument.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-v-model-argument.js" target="_blank" rel="noreferrer">Test source</a></li></ul>',8);function m(p,g,E,v,_,y){const a=r("eslint-code-block");return d(),l("div",null,[u,o(a,{rules:{"vue/no-v-model-argument":["error"]}},{default:n(()=>[c]),_:1}),k])}const q=t(h,[["render",m]]);export{f as __pageData,q as default};
