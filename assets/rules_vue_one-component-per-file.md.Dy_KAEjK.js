import{_ as l,D as o,c as r,I as t,w as n,a3 as a,o as h,j as e,a as i}from"./chunks/framework.vIlBslkg.js";const q=JSON.parse('{"title":"vue/one-component-per-file","description":"enforce that each component should be in its own file","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/one-component-per-file","description":"enforce that each component should be in its own file","since":"v7.0.0"},"headers":[],"relativePath":"rules/vue/one-component-per-file.md","filePath":"rules/vue/one-component-per-file.md"}'),c={name:"rules/vue/one-component-per-file.md"},p=a('<h1 id="vue-one-component-per-file" tabindex="-1">vue/one-component-per-file <a class="header-anchor" href="#vue-one-component-per-file" aria-label="Permalink to &quot;vue/one-component-per-file&quot;">​</a></h1><blockquote><p>enforce that each component should be in its own file</p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/vue3-strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-recommended&quot;</code>, <code>*.configs[&quot;flat/recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code> and <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule checks if there is only one component per file.</p>',5),d=e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Vue."),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"component"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'TodoList'"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Vue."),e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"component"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'TodoItem'"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])],-1),u=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  name: "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'my-component'")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),k=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="further-reading" tabindex="-1">📚 Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further Reading&quot;">​</a></h2><ul><li><a href="https://vuejs.org/style-guide/rules-strongly-recommended.html#component-files" target="_blank" rel="noreferrer">Style guide - Component files</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v7.0.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/one-component-per-file.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/one-component-per-file.js" target="_blank" rel="noreferrer">Test source</a></li></ul>',8);function m(g,E,f,_,v,b){const s=o("eslint-code-block");return h(),r("div",null,[p,t(s,{filename:"a.js",language:"javascript",rules:{"vue/one-component-per-file":["error"]}},{default:n(()=>[d]),_:1}),t(s,{rules:{"vue/one-component-per-file":["error"]}},{default:n(()=>[u]),_:1}),k])}const D=l(c,[["render",m]]);export{q as __pageData,D as default};
