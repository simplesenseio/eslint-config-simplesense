import{_ as a,D as l,c as n,I as r,w as h,a3 as e,o,l as i,a as s}from"./chunks/framework.ClQ4Qie4.js";const F=JSON.parse('{"title":"vue/return-in-emits-validator","description":"enforce that a return statement is present in emits validator","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/return-in-emits-validator","description":"enforce that a return statement is present in emits validator","since":"v7.0.0"},"headers":[],"relativePath":"rules/vue/return-in-emits-validator.md","filePath":"rules/vue/return-in-emits-validator.md"}'),k={name:"rules/vue/return-in-emits-validator.md"},d=e('<h1 id="vue-return-in-emits-validator" tabindex="-1">vue/return-in-emits-validator <a class="header-anchor" href="#vue-return-in-emits-validator" aria-label="Permalink to &quot;vue/return-in-emits-validator&quot;">​</a></h1><blockquote><p>enforce that a return statement is present in emits validator</p></blockquote><ul><li>⚙️ This rule is included in all of <code>&quot;plugin:vue/vue3-essential&quot;</code>, <code>*.configs[&quot;flat/essential&quot;]</code>, <code>&quot;plugin:vue/essential&quot;</code>, <code>*.configs[&quot;flat/vue2-essential&quot;]</code>, <code>&quot;plugin:vue/vue3-strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/strongly-recommended&quot;</code>, <code>*.configs[&quot;flat/vue2-strongly-recommended&quot;]</code>, <code>&quot;plugin:vue/vue3-recommended&quot;</code>, <code>*.configs[&quot;flat/recommended&quot;]</code>, <code>&quot;plugin:vue/recommended&quot;</code> and <code>*.configs[&quot;flat/vue2-recommended&quot;]</code>.</li></ul><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule enforces that a <code>return</code> statement is present in <code>emits</code> validators.</p>',5),u=i("div",{class:"language-vue vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  emits: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    /* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    foo"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"evt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (evt) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    bar"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    baz"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"evt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (evt) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    /* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    qux"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {},")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    quux"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"evt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"evt) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),p=e('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="further-reading" tabindex="-1">📚 Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further Reading&quot;">​</a></h2><ul><li><a href="https://vuejs.org/guide/components/events.html#events-validation" target="_blank" rel="noreferrer">Guide - Custom Events / Validate Emitted Events</a></li><li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0030-emits-option.md" target="_blank" rel="noreferrer">Vue RFCs - 0030-emits-option</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-vue v7.0.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/return-in-emits-validator.js" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/return-in-emits-validator.js" target="_blank" rel="noreferrer">Test source</a></li></ul>',8);function c(E,g,m,v,y,f){const t=l("eslint-code-block");return o(),n("div",null,[d,r(t,{rules:{"vue/return-in-emits-validator":["error"]}},{default:h(()=>[u]),_:1}),p])}const q=a(k,[["render",c]]);export{F as __pageData,q as default};
