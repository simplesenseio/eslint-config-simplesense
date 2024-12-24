import{_ as t,D as n,c as o,I as a,w as l,j as e,a as s,a2 as r,o as h}from"./chunks/framework.DKvG-fKI.js";const C=JSON.parse('{"title":"yml/file-extension","description":"enforce YAML file extension","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"yml/file-extension","description":"enforce YAML file extension","since":"v1.2.0"},"headers":[],"relativePath":"rules/yml/file-extension.md","filePath":"rules/yml/file-extension.md"}'),c={name:"rules/yml/file-extension.md"},p=e("h1",{id:"yml-file-extension",tabindex:"-1"},[s("yml/file-extension "),e("a",{class:"header-anchor",href:"#yml-file-extension","aria-label":'Permalink to "yml/file-extension"'},"​")],-1),d=e("blockquote",null,[e("p",null,"enforce YAML file extension")],-1),k=e("h2",{id:"rule-details",tabindex:"-1"},[s("📖 Rule Details "),e("a",{class:"header-anchor",href:"#rule-details","aria-label":'Permalink to ":book: Rule Details"'},"​")],-1),m=e("p",null,"This rule aims to enforce YAML file extension.",-1),u=e("div",{class:"language-yaml vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✓ GOOD")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# filename is `example.yaml`")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/file-extension: 'error'")])])])],-1),f=e("div",{class:"language-yaml vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ✗ BAD")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# filename is `example.yml`")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# eslint yml/file-extension: 'error'")])])])],-1),y=r("",7);function g(_,x,b,E,D,A){const i=n("eslint-code-block");return h(),o("div",null,[p,d,k,m,a(i,{"file-name":"example.yaml"},{default:l(()=>[u]),_:1}),a(i,{"file-name":"example.yaml"},{default:l(()=>[f]),_:1}),y])}const T=t(c,[["render",g]]);export{C as __pageData,T as default};