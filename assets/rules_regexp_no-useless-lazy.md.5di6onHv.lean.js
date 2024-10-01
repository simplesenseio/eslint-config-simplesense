import{_ as t,c as l,I as h,w as n,a3 as e,D as r,o as k,j as i,a as s}from"./chunks/framework.ZJ0k6Sl1.js";const _=JSON.parse('{"title":"regexp/no-useless-lazy","description":"disallow unnecessarily non-greedy quantifiers","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-useless-lazy","description":"disallow unnecessarily non-greedy quantifiers","since":"v0.10.0"},"headers":[],"relativePath":"rules/regexp/no-useless-lazy.md","filePath":"rules/regexp/no-useless-lazy.md"}'),o={name:"rules/regexp/no-useless-lazy.md"},p=e("",8),d=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-useless-lazy: "error" */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4,}?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2,4}?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"[\\s\\S]"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"bar"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{1}?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2,2}?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"ab"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"c"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1),c=e("",6);function g(y,F,E,u,D,f){const a=r("eslint-code-block");return k(),l("div",null,[p,h(a,{fix:""},{default:n(()=>[d]),_:1}),c])}const b=t(o,[["render",g]]);export{_ as __pageData,b as default};
