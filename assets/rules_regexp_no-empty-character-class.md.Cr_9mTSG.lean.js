import{_ as t,c as r,I as l,w as h,a3 as i,D as n,o as c,j as s,a}from"./chunks/framework.ZJ0k6Sl1.js";const b=JSON.parse('{"title":"regexp/no-empty-character-class","description":"disallow character classes that match no characters","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-empty-character-class","description":"disallow character classes that match no characters","since":"v1.2.0"},"headers":[],"relativePath":"rules/regexp/no-empty-character-class.md","filePath":"rules/regexp/no-empty-character-class.md"}'),k={name:"rules/regexp/no-empty-character-class.md"},o=i("",7),p=s("div",{class:"language-js vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-empty-character-class: "error" */')]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"[d]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"[a-z]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"["),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"[\\s\\S]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"abc"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"[]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"["),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"^"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\s\\S]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1),d=i("",8);function g(y,F,E,u,m,_){const e=n("eslint-code-block");return c(),r("div",null,[o,l(e,null,{default:h(()=>[p]),_:1}),d])}const C=t(k,[["render",g]]);export{b as __pageData,C as default};
