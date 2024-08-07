import{_ as t,D as l,c as n,I as r,w as h,a3 as e,o,j as s,a as i}from"./chunks/framework.D8Wt_3VJ.js";const _=JSON.parse('{"title":"regexp/no-useless-assertions","description":"disallow assertions that are known to always accept (or reject)","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-useless-assertions","description":"disallow assertions that are known to always accept (or reject)","since":"v0.9.0"},"headers":[],"relativePath":"rules/regexp/no-useless-assertions.md","filePath":"rules/regexp/no-useless-assertions.md"}'),k={name:"rules/regexp/no-useless-assertions.md"},p=e("",6),d=s("div",{class:"language-js vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-useless-assertions: "error" */')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\b"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"foo"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\b"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"#"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\b"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"foo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// \\b will always accept")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"foo"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\b"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"bar"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";  "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// \\b will always reject")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"$"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"foo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";      "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// $ will always reject")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\w"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// (?=\\w) will always accept")])])])],-1),c=e("",10);function g(u,y,F,b,m,E){const a=l("eslint-code-block");return o(),n("div",null,[p,r(a,null,{default:h(()=>[d]),_:1}),c])}const f=t(k,[["render",g]]);export{_ as __pageData,f as default};
