import{_ as t,D as l,c as n,I as h,w as r,a2 as e,o,j as s,a as i}from"./chunks/framework.DKvG-fKI.js";const _=JSON.parse('{"title":"vue/no-ref-as-operand","description":"disallow use of value wrapped by `ref()` (Composition API) as an operand","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/no-ref-as-operand","description":"disallow use of value wrapped by `ref()` (Composition API) as an operand","since":"v7.0.0"},"headers":[],"relativePath":"rules/vue/no-ref-as-operand.md","filePath":"rules/vue/no-ref-as-operand.md"}'),k={name:"rules/vue/no-ref-as-operand.md"},d=e('<h1 id="vue-no-ref-as-operand" tabindex="-1">vue/no-ref-as-operand <a class="header-anchor" href="#vue-no-ref-as-operand" aria-label="Permalink to &quot;vue/no-ref-as-operand&quot;">​</a></h1><blockquote><p>disallow use of value wrapped by <code>ref()</code> (Composition API) as an operand</p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/vue3-essential&quot;</code>, <code>*.configs[&quot;flat/essential&quot;]</code>, <code>&quot;plugin:vue/essential&quot;</code>, <code>*.configs[&quot;flat/vue2-essential&quot;]</code>, <code>&quot;plugin:vue/vue3-strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-recommended&quot;</code>, <code>*.configs[&quot;flat/recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code> and <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>.</li><li>🔧 The <code>--fix</code> option on the <a href="https://eslint.org/docs/user-guide/command-line-interface#fixing-problems" target="_blank" rel="noreferrer">command line</a> can automatically fix some of the problems reported by this rule.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports cases where a ref is used incorrectly as an operand.<br> You must use <code>.value</code> to access the <code>Ref</code> value.</p>',5),p=s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," count"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," ok"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    /* ✓ GOOD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    count.value"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"++")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    count.value "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    1"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," count.value")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," msg "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ok.value "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'yes'"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," :"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'no'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    /* ✗ BAD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    count"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"++")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    count "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    1"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," count")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," msg "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ok "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'yes'"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," :"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'no'")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      count")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),c=e('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="further-reading" tabindex="-1">📚 Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further Reading&quot;">​</a></h2><ul><li><a href="https://v3.vuejs.org/guide/reactivity-fundamentals.html#creating-standalone-reactive-values-as-refs" target="_blank" rel="noreferrer">Guide - Reactivity - Reactivity Fundamentals / Creating Standalone Reactive Values as <code>refs</code></a></li><li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md" target="_blank" rel="noreferrer">Vue RFCs - 0013-composition-api</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v7.0.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-ref-as-operand.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-ref-as-operand.js" target="_blank" rel="noreferrer">Test source</a></li></ul>',8);function u(g,E,y,f,m,F){const a=l("eslint-code-block");return o(),n("div",null,[d,h(a,{fix:"",rules:{"vue/no-ref-as-operand":["error"]}},{default:r(()=>[p]),_:1}),c])}const b=t(k,[["render",u]]);export{_ as __pageData,b as default};
