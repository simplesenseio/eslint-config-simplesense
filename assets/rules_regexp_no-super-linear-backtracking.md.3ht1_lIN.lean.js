import{_ as t,D as l,c as r,I as n,w as h,a3 as e,o as k,j as i,a as s}from"./chunks/framework.vIlBslkg.js";const f=JSON.parse('{"title":"regexp/no-super-linear-backtracking","description":"disallow exponential and polynomial backtracking","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-super-linear-backtracking","description":"disallow exponential and polynomial backtracking","since":"v0.13.0"},"headers":[],"relativePath":"rules/regexp/no-super-linear-backtracking.md","filePath":"rules/regexp/no-super-linear-backtracking.md"}'),o={name:"rules/regexp/no-super-linear-backtracking.md"},p=e("",7),d=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-super-linear-backtracking: "error" */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:a"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"c"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// not all cases can automatically be fixed")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\s"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"."),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")(?=:)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"."),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\s"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"=)"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1),c=e("",17);function g(F,u,y,E,b,D){const a=l("eslint-code-block");return k(),r("div",null,[p,n(a,{fix:""},{default:h(()=>[d]),_:1}),c])}const _=t(o,[["render",g]]);export{f as __pageData,_ as default};