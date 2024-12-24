import{_ as t,D as l,c as r,I as n,w as h,a3 as i,o,l as e,a as s}from"./chunks/framework.ClQ4Qie4.js";const D=JSON.parse('{"title":"regexp/no-useless-string-literal","description":"disallow string disjunction of single characters in `\\\\q{...}`","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-useless-string-literal","description":"disallow string disjunction of single characters in `\\\\q{...}`","since":"v2.0.0-next.12"},"headers":[],"relativePath":"rules/regexp/no-useless-string-literal.md","filePath":"rules/regexp/no-useless-string-literal.md"}'),k={name:"rules/regexp/no-useless-string-literal.md"},d=i("",6),p=e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-useless-string-literal: "error" */')]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{abc}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{ab|}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{a}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v "),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// => /[a]/v")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," /"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[\\q{a|bc}]"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"v "),e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// => /[a\\q{bc}]/v")])])])],-1),c=i("",8);function g(u,E,_,m,y,b){const a=l("eslint-code-block");return o(),r("div",null,[d,n(a,{fix:""},{default:h(()=>[p]),_:1}),c])}const A=t(k,[["render",g]]);export{D as __pageData,A as default};