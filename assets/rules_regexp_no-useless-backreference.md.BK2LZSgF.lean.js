import{_ as t,D as r,c as n,I as l,w as h,a3 as i,o as k,l as e,a as s}from"./chunks/framework.ClQ4Qie4.js";const m=JSON.parse('{"title":"regexp/no-useless-backreference","description":"disallow useless backreferences in regular expressions","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-useless-backreference","description":"disallow useless backreferences in regular expressions","since":"v0.1.0"},"headers":[],"relativePath":"rules/regexp/no-useless-backreference.md","filePath":"rules/regexp/no-useless-backreference.md"}'),o={name:"rules/regexp/no-useless-backreference.md"},c=i("",23),d=e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-useless-backreference: "error" */')]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(a)b"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(a"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")b"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\b|"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"a)"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"b"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(a)"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:a"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(a)"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(a"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(a)"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:(a)"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<=(a)"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\b"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")a"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1),p=i("",8);function g(u,f,F,b,y,E){const a=r("eslint-code-block");return k(),n("div",null,[c,l(a,null,{default:h(()=>[d]),_:1}),p])}const _=t(o,[["render",g]]);export{m as __pageData,_ as default};
