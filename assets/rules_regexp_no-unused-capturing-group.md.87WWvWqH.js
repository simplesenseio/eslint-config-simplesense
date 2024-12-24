import{_ as t,c as l,a1 as a,G as e,w as n,B as r,o as p,j as i,a as s}from"./chunks/framework.C4wD7aVO.js";const c=JSON.parse('{"title":"regexp/no-unused-capturing-group","description":"disallow unused capturing group","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-unused-capturing-group","description":"disallow unused capturing group","since":"v0.6.0"},"headers":[],"relativePath":"rules/regexp/no-unused-capturing-group.md","filePath":"rules/regexp/no-unused-capturing-group.md"}'),d={name:"rules/regexp/no-unused-capturing-group.md"};function F(g,h,E,y,o,u){const k=r("eslint-code-block");return p(),l("div",null,[h[1]||(h[1]=a('<h1 id="regexp-no-unused-capturing-group" tabindex="-1">regexp/no-unused-capturing-group <a class="header-anchor" href="#regexp-no-unused-capturing-group" aria-label="Permalink to &quot;regexp/no-unused-capturing-group&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><p>🔧💡 This rule is automatically fixable by the <a href="https://eslint.org/docs/latest/user-guide/command-line-interface#--fix" target="_blank" rel="noreferrer"><code>--fix</code> CLI option</a> and manually fixable by <a href="https://eslint.org/docs/latest/use/core-concepts#rule-suggestions" target="_blank" rel="noreferrer">editor suggestions</a>.</p><blockquote><p>disallow unused capturing group</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>This rule reports unused capturing groups.</p>',6)),e(k,{fix:""},{default:n(()=>h[0]||(h[0]=[i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-unused-capturing-group: ["error", { fixable: true }] */')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✓ GOOD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," replaced "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'$1/$2/$3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "2000/12/31"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," replaced "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"y"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"m"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'$<y>/$<m>/$<d>'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "2000/12/31"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," replaced "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"y"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"m"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"d"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," `${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"y"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}/${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"m"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}/${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "2000/12/31"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," isDate "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// true")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," matches "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31 2001-01-01'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"match"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," y "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," matches["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "2000"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," m "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," matches["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "12"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," d "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," matches["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "31"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," index "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"search"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 0")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* ✗ BAD */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," replaced "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'Date'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "Date"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," replaced "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'$1/$2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "2000/12"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," replaced "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"(?<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"y"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"m"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-(?<"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"u"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'$<y>/$<m>'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "2000/12"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," replaced "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"y"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"m"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," `${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"y"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}/${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"m"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// "2000/12"')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," isDate "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// true")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," matches "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31 2001-01-01'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"match"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"g"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'// ["2000-12-31", "2001-01-01"]')]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," index "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '2000-12-31'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"search"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{4}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")-("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\d"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"{2}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 0")])])])],-1)])),_:1}),h[2]||(h[2]=a(`<h3 id="why-no-unused-capturing-groups" tabindex="-1">Why no unused capturing groups? <a class="header-anchor" href="#why-no-unused-capturing-groups" aria-label="Permalink to &quot;Why no unused capturing groups?&quot;">​</a></h3><p>Many people use capturing groups instead of non-capturing groups for convenience. <code>()</code> is simpler and feels more natural than the cryptic-looking <code>(?:)</code>.</p><p>However, using capturing groups in place of non-capturing groups also has negative consequences.</p><h4 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h4><p>Capturing groups are slower than non-capturing groups.</p><p>This is by design. Capturing groups (as the name suggests) captured their matched text. The regex engine has to do extra work every time a capturing group is matched compared to a non-capturing group.</p><h4 id="code-smell" tabindex="-1">Code smell <a class="header-anchor" href="#code-smell" aria-label="Permalink to &quot;Code smell&quot;">​</a></h4><p>A capturing group is intended to store its matched text so it can later be used, e.g. in text replacements.</p><p>That makes a capturing group quite similar to a variable, in that its value (the captured text) is stored (by the regex engine) and can be accessed afterward (by the developer). However, if the captured text is not used, then the capturing group will essentially be an unused variable. This makes the regex harder to understand because other developers will have to constantly ask themselves: &quot;Is this a capturing group because the captured text will be used later on in the code, or because <code>()</code> is faster to type?&quot;</p><p>Using capturing groups only if the captured text is used makes their usage unambiguous and easier for others to understand.</p><h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;regexp/no-unused-capturing-group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;fixable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allowNamed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><p><code>fixable: true | false</code></p><p>This option controls whether the rule is fixable. Defaults to <code>false</code>.</p><p>This rule is not fixable by default. Unused capturing groups can indicate a mistake in the code that uses the regex, so changing the regex might not be the right fix. When enabling this option, be sure to carefully check its changes.</p></li><li><p><code>allowNamed: true | false</code></p><p>Whether unused named capturing groups are allowed. Defaults to <code>false</code>.</p><p>Sometimes named capturing groups can be used to document a regex. In such cases, it can be acceptable to have unused named capturing groups. This option is disabled by default to prevent mistakes.</p></li></ul><h2 id="related-rules" tabindex="-1">👫 Related rules <a class="header-anchor" href="#related-rules" aria-label="Permalink to &quot;:couple: Related rules&quot;">​</a></h2><ul><li><a href="./no-useless-dollar-replacements">regexp/no-useless-dollar-replacements</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.6.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-unused-capturing-group.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-unused-capturing-group.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>`,19))])}const B=t(d,[["render",F]]);export{c as __pageData,B as default};