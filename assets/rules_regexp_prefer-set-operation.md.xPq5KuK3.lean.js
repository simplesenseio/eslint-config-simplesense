import{_ as t,D as r,c as l,I as h,w as n,a2 as s,o,j as e,a as i}from"./chunks/framework.DKvG-fKI.js";const D=JSON.parse('{"title":"regexp/prefer-set-operation","description":"prefer character class set operations instead of lookarounds","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/prefer-set-operation","description":"prefer character class set operations instead of lookarounds","since":"v2.0.0-next.9"},"headers":[],"relativePath":"rules/regexp/prefer-set-operation.md","filePath":"rules/regexp/prefer-set-operation.md"}'),p={name:"rules/regexp/prefer-set-operation.md"},k=s("",6),d=e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/prefer-set-operation: "error" */')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // requires the v flag")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?!"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u"),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," // requires the v flag")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?!"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"\\d)\\w"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"var foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?!"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"\\s)[\\w\\"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"P"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{ASCII}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")])])])],-1),c=s("",6);function g(u,f,E,F,_,m){const a=r("eslint-code-block");return o(),l("div",null,[k,h(a,{fix:""},{default:n(()=>[d]),_:1}),c])}const b=t(p,[["render",g]]);export{D as __pageData,b as default};
