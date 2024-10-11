import{_ as r,c as l,a1 as a,G as n,w as h,B as k,o,j as e,a as s}from"./chunks/framework.DHJwed8E.js";const y=JSON.parse('{"title":"regexp/no-useless-backreference","description":"disallow useless backreferences in regular expressions","frontmatter":{"pageClass":"rule-details","sidebarDepth":0,"title":"regexp/no-useless-backreference","description":"disallow useless backreferences in regular expressions","since":"v0.1.0"},"headers":[],"relativePath":"rules/regexp/no-useless-backreference.md","filePath":"rules/regexp/no-useless-backreference.md"}'),c={name:"rules/regexp/no-useless-backreference.md"};function d(p,i,g,u,f,F){const t=k("eslint-code-block");return o(),l("div",null,[i[1]||(i[1]=a('<h1 id="regexp-no-useless-backreference" tabindex="-1">regexp/no-useless-backreference <a class="header-anchor" href="#regexp-no-useless-backreference" aria-label="Permalink to &quot;regexp/no-useless-backreference&quot;">​</a></h1><p>💼 This rule is enabled in the following configs: 🟢 <code>flat/recommended</code>, 🔵 <code>recommended</code>.</p><blockquote><p>disallow useless backreferences in regular expressions</p></blockquote><h2 id="rule-details" tabindex="-1">📖 Rule Details <a class="header-anchor" href="#rule-details" aria-label="Permalink to &quot;:book: Rule Details&quot;">​</a></h2><p>Backreferences that will always trivially accept serve no function and can be removed.</p><p>This rule is a based on the ESLint core <a href="https://eslint.org/docs/rules/no-useless-backreference" target="_blank" rel="noreferrer">no-useless-backreference</a> rule. It reports all the ESLint core rule reports and some more.</p><h3 id="causes" tabindex="-1">Causes <a class="header-anchor" href="#causes" aria-label="Permalink to &quot;Causes&quot;">​</a></h3><p>Backreferences can be useless for multiple reasons.</p><h4 id="empty-capturing-groups" tabindex="-1">Empty capturing groups <a class="header-anchor" href="#empty-capturing-groups" aria-label="Permalink to &quot;Empty capturing groups&quot;">​</a></h4><p>The simplest reason. The references capturing group does not consume any characters (e.g. <code>/(\\b)a\\1/</code>). Since the capturing group can only capture the empty string, the backreference is guaranteed to accept any input.</p><h4 id="nested-backreferences" tabindex="-1">Nested backreferences <a class="header-anchor" href="#nested-backreferences" aria-label="Permalink to &quot;Nested backreferences&quot;">​</a></h4><p>If a backreference is inside the group it references (e.g. <code>/(a\\1)/</code>), then it is guaranteed to trivially accept.</p><p>This is because the regex engine only sets the text of a capturing group <strong>after</strong> the group has been matched. Since the regex engine is still in the process of matching the group, its capture text is undefined.</p><h4 id="different-alternatives" tabindex="-1">Different alternatives <a class="header-anchor" href="#different-alternatives" aria-label="Permalink to &quot;Different alternatives&quot;">​</a></h4><p>If a backreference and its referenced capturing group are in different alternatives (e.g. <code>/(a)|\\1/</code>), then the backreference will always trivially accept because the captured text of the referenced group is undefined.</p><h4 id="forward-references-and-backward-references" tabindex="-1">Forward references and backward references <a class="header-anchor" href="#forward-references-and-backward-references" aria-label="Permalink to &quot;Forward references and backward references&quot;">​</a></h4><p>Backreferences are supposed to be matched <strong>after</strong> their referenced capturing group. Since regular expressions are matched from left to right, backreferences usually appear to the right of their referenced capturing groups (e.g. <code>/(a)\\1/</code>). However, backreferences can also be placed before (to the left of) their referenced capturing group (e.g. <code>/\\1(a)/</code>). These backreferences are to trivially accept because the captured text of their referenced groups is undefined. We call these backreferences <em>forward references</em>.</p><p>Inside <strong>lookbehind assertions</strong>, regular expressions are matched from right to left and not from left to right. This means that only backreferences now have to appear to the left of their respective capturing group to be matched after them (e.g. <code>/(?&lt;=\\1(a))/</code>). Backreferences placed to before (to the right of) their referenced capturing group inside lookbehinds are guaranteed to trivially accept. We call these backreferences <em>backward references</em>.</p><h4 id="negated-lookaround-assertions" tabindex="-1">Negated lookaround assertions <a class="header-anchor" href="#negated-lookaround-assertions" aria-label="Permalink to &quot;Negated lookaround assertions&quot;">​</a></h4><p>If the referenced capturing group of a backreference is inside a negated lookaround assertion the backreference is also part of, then the backreference will be guaranteed to trivially accept.</p><p>To understand why this is the case, let&#39;s look at the example <code>/(?!(a))\\w\\1/y</code>.</p><ol><li><p>Let&#39;s assume the input string is <code>ab</code>. <br> Since <code>(a)</code> accepts the character <code>a</code>, <code>(?!(a))</code> will reject. So the input is rejected before the backreference <code>\\1</code> can be reached.</p><p>The result of <code>/(?!(a))\\w\\1/y.exec(&quot;ab&quot;)</code> is <code>null</code>.</p></li><li><p>Let&#39;s assume the input string is <code>bc</code>. <br> Since <code>(a)</code> rejects the character <code>b</code>, its captured text will be undefined and <code>(?!(a))</code> will accept. Then <code>\\w</code> will accept and consume the character <code>b</code>. Since the captured text of <code>(a)</code> is undefined, the backreference <code>\\1</code> will trivially accept without consuming characters.</p><p>The result of <code>/(?!(a))\\w\\1/y.exec(&quot;bc&quot;)</code> is <code>[ &#39;b&#39;, undefined, index: 0, input: &#39;bc&#39; ]</code>.</p></li></ol><p>Note that this is only a problem if the backreference is not part of the negated lookaround assertion. I.e. <code>/(?!(a)\\1)\\w/</code> is okay.</p>',23)),n(t,null,{default:h(()=>i[0]||(i[0]=[e("div",{class:"language-js vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'/* eslint regexp/no-useless-backreference: "error" */')]),s(`
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
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"("),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\b"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},")a"),e("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"\\1"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")])])])],-1)])),_:1}),i[2]||(i[2]=a('<h2 id="options" tabindex="-1">🔧 Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;:wrench: Options&quot;">​</a></h2><p>Nothing.</p><h2 id="further-reading" tabindex="-1">📚 Further reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;:books: Further reading&quot;">​</a></h2><ul><li><a href="https://eslint.org/docs/rules/no-useless-backreference" target="_blank" rel="noreferrer">no-useless-backreference</a></li></ul><h2 id="version" tabindex="-1">🚀 Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;:rocket: Version&quot;">​</a></h2><p>This rule was introduced in eslint-plugin-regexp v0.1.0</p><h2 id="implementation" tabindex="-1">🔍 Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;:mag: Implementation&quot;">​</a></h2><ul><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/no-useless-backreference.ts" target="_blank" rel="noreferrer">Rule source</a></li><li><a href="https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/no-useless-backreference.ts" target="_blank" rel="noreferrer">Test source</a></li></ul>',8))])}const E=r(c,[["render",d]]);export{y as __pageData,E as default};
