import{_ as a,D as l,c as r,I as o,w as n,a2 as s,o as h,j as e,a as i}from"./chunks/framework.DKvG-fKI.js";const _=JSON.parse('{"title":"vue/require-v-for-key","description":"require `v-bind:key` with `v-for` directives","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/require-v-for-key","description":"require `v-bind:key` with `v-for` directives","since":"v3.0.0"},"headers":[],"relativePath":"rules/vue/require-v-for-key.md","filePath":"rules/vue/require-v-for-key.md"}'),d={name:"rules/vue/require-v-for-key.md"},k=s('<h1 id="vue-require-v-for-key" tabindex="-1">vue/require-v-for-key <a class="header-anchor" href="#vue-require-v-for-key" aria-label="Permalink to &quot;vue/require-v-for-key&quot;">​</a></h1><blockquote><p>require <code>v-bind:key</code> with <code>v-for</code> directives</p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/vue3-essential&quot;</code>, <code>*.configs[&quot;flat/essential&quot;]</code>, <code>&quot;plugin:vue/essential&quot;</code>, <code>*.configs[&quot;flat/vue2-essential&quot;]</code>, <code>&quot;plugin:vue/vue3-strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-recommended&quot;</code>, <code>*.configs[&quot;flat/recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code> and <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports the elements which have <code>v-for</code> and do not have <code>v-bind:key</code> with exception to custom components.</p>',5),u=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- ✓ GOOD -->")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," v-for"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"todo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"in"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," todos"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"key"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"todo.id"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- ✗ BAD -->")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," v-for"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"todo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"in"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," todos"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),c=s('<div class="warning custom-block"><p class="custom-block-title">Note</p><p>This rule does not report missing <code>v-bind:key</code> on custom components. It will be reported by <a href="./valid-v-for">vue/valid-v-for</a> rule.</p></div><h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="related-rules" tabindex="-1">👫 Related Rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related Rules&quot;">​</a></h2><ul><li><a href="./valid-v-for">vue/valid-v-for</a></li><li><a href="./v-if-else-key">vue/v-if-else-key</a></li></ul><h2 id="further-reading" tabindex="-1">📚 Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further Reading&quot;">​</a></h2><ul><li><a href="https://vuejs.org/style-guide/rules-essential.html#use-keyed-v-for" target="_blank" rel="noreferrer">Style guide - Keyed v-for</a></li><li><a href="https://v2.vuejs.org/v2/guide/list.html#v-for-with-a-Component" target="_blank" rel="noreferrer">Guide (for v2) - v-for with a Component</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v3.0.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/require-v-for-key.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/require-v-for-key.js" target="_blank" rel="noreferrer">Test source</a></li></ul>',11);function p(v,g,E,f,y,m){const t=l("eslint-code-block");return h(),r("div",null,[k,o(t,{rules:{"vue/require-v-for-key":["error"]}},{default:n(()=>[u]),_:1}),c])}const b=a(d,[["render",p]]);export{_ as __pageData,b as default};