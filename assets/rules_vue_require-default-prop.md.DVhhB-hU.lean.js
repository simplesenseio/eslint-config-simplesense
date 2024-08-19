import{_ as l,D as t,c as n,I as r,w as h,a3 as i,o,j as e,a as s}from"./chunks/framework.vIlBslkg.js";const b=JSON.parse('{"title":"vue/require-default-prop","description":"require default value for props","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"vue/require-default-prop","description":"require default value for props","since":"v3.13.0"},"headers":[],"relativePath":"rules/vue/require-default-prop.md","filePath":"rules/vue/require-default-prop.md"}'),d={name:"rules/vue/require-default-prop.md"},p=i("",5),u=e("div",{class:"language-vue vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  props: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    /* ✓ GOOD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    a: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      type: Number,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      required: "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    b: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      type: Number,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      default: "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    c: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      type: Number,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      default: "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      required: "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    d: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      type: Boolean, "),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// Boolean is the only type that doesn't require default")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    /* ✗ BAD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    e: Number,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    f: [Number, String],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    g: [Boolean, Number],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    j: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      type: Number")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    i: {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      type: Number,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      required: "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),k=i("",10);function E(c,g,f,y,m,q){const a=t("eslint-code-block");return o(),n("div",null,[p,r(a,{rules:{"vue/require-default-prop":["error"]}},{default:h(()=>[u]),_:1}),k])}const v=l(d,[["render",E]]);export{b as __pageData,v as default};
