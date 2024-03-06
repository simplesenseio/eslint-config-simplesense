(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{429:function(e,o,s){"use strict";s.r(o);var t=s(9),v=Object(t.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"node-no-unsupported-features-node-builtins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-no-unsupported-features-node-builtins"}},[e._v("#")]),e._v(" node/no-unsupported-features/node-builtins")]),e._v(" "),o("blockquote",[o("p",[e._v("disallow unsupported Node.js built-in APIs on the specified version")]),e._v(" "),o("ul",[o("li",[e._v("⭐️ This rule is included in "),o("code",[e._v("plugin:node/recommended")]),e._v(" preset.")])])]),e._v(" "),o("p",[e._v("Node.js community is improving built-in APIs continuously.\nYou can check "),o("a",{attrs:{href:"https://nodejs.org/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Documentation"),o("OutboundLink")],1),e._v(" to know which Node.js version supports each Node.js API.")]),e._v(" "),o("p",[e._v("This rule reports unsupported Node.js built-in APIs on the configured Node.js version as lint errors.\nEditor integrations of ESLint would be useful to know it in real-time.")]),e._v(" "),o("h2",{attrs:{id:"📖-rule-details"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#📖-rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),o("p",[e._v("This rule reports APIs of Node.js built-in APIs on the basis of "),o("a",{attrs:{href:"https://nodejs.org/docs/v13.2.0/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js v13.2.0 Documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"configured-node-js-version-range"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configured-node-js-version-range"}},[e._v("#")]),e._v(" Configured Node.js version range")]),e._v(" "),o("p",[e._v("This rule reads the "),o("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),o("OutboundLink")],1),e._v(" field of "),o("code",[e._v("package.json")]),e._v(" to detect which Node.js versions your module is supporting.")]),e._v(" "),o("p",[e._v("I recommend the use of the "),o("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),o("OutboundLink")],1),e._v(" field because it's the official way that indicates which Node.js versions your module is supporting.\nFor example of "),o("code",[e._v("package.json")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"your-module"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0.0"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"engines"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=8.0.0"')]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("If you omit the "),o("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),o("OutboundLink")],1),e._v(" field, this rule chooses "),o("code",[e._v(">=8.0.0")]),e._v(" as the configured Node.js version since "),o("code",[e._v("8")]),e._v(" is the minimum version the community is maintaining (see also "),o("a",{attrs:{href:"https://github.com/nodejs/Release#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Release Working Group"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("h3",{attrs:{id:"options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node/no-unsupported-features/node-builtins"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('">=8.0.0"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ignores"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("h4",{attrs:{id:"version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),o("p",[e._v("As mentioned above, this rule reads the "),o("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("engines"),o("OutboundLink")],1),e._v(" field of "),o("code",[e._v("package.json")]),e._v(".\nBut, you can overwrite the version by "),o("code",[e._v("version")]),e._v(" option.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("version")]),e._v(" option accepts "),o("a",{attrs:{href:"https://github.com/npm/node-semver#range-grammar",target:"_blank",rel:"noopener noreferrer"}},[e._v("the valid version range of "),o("code",[e._v("node-semver")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"ignores"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ignores"}},[e._v("#")]),e._v(" ignores")]),e._v(" "),o("p",[e._v("If you are using transpilers, maybe you want to ignore the warnings about some features.\nYou can use this "),o("code",[e._v("ignores")]),e._v(" option to ignore the given features.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v('"ignores"')]),e._v(" option accepts an array of the following strings.")]),e._v(" "),o("details",[o("p",[o("strong",[e._v("Globals:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"Buffer.alloc"')])]),e._v(" "),o("li",[o("code",[e._v('"Buffer.allocUnsafe"')])]),e._v(" "),o("li",[o("code",[e._v('"Buffer.allocUnsafeSlow"')])]),e._v(" "),o("li",[o("code",[e._v('"Buffer.from"')])]),e._v(" "),o("li",[o("code",[e._v('"TextDecoder"')])]),e._v(" "),o("li",[o("code",[e._v('"TextEncoder"')])]),e._v(" "),o("li",[o("code",[e._v('"URL"')])]),e._v(" "),o("li",[o("code",[e._v('"URLSearchParams"')])]),e._v(" "),o("li",[o("code",[e._v('"console.clear"')])]),e._v(" "),o("li",[o("code",[e._v('"console.count"')])]),e._v(" "),o("li",[o("code",[e._v('"console.countReset"')])]),e._v(" "),o("li",[o("code",[e._v('"console.debug"')])]),e._v(" "),o("li",[o("code",[e._v('"console.dirxml"')])]),e._v(" "),o("li",[o("code",[e._v('"console.group"')])]),e._v(" "),o("li",[o("code",[e._v('"console.groupCollapsed"')])]),e._v(" "),o("li",[o("code",[e._v('"console.groupEnd"')])]),e._v(" "),o("li",[o("code",[e._v('"console.table"')])]),e._v(" "),o("li",[o("code",[e._v('"console.markTimeline"')])]),e._v(" "),o("li",[o("code",[e._v('"console.profile"')])]),e._v(" "),o("li",[o("code",[e._v('"console.profileEnd"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timeLog"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timeStamp"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timeline"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timelineEnd"')])]),e._v(" "),o("li",[o("code",[e._v('"process.allowedNodeEnvironmentFlags"')])]),e._v(" "),o("li",[o("code",[e._v('"process.argv0"')])]),e._v(" "),o("li",[o("code",[e._v('"process.channel"')])]),e._v(" "),o("li",[o("code",[e._v('"process.cpuUsage"')])]),e._v(" "),o("li",[o("code",[e._v('"process.emitWarning"')])]),e._v(" "),o("li",[o("code",[e._v('"process.getegid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.geteuid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.hasUncaughtExceptionCaptureCallback"')])]),e._v(" "),o("li",[o("code",[e._v('"process.hrtime.bigint"')])]),e._v(" "),o("li",[o("code",[e._v('"process.ppid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.release"')])]),e._v(" "),o("li",[o("code",[e._v('"process.report"')])]),e._v(" "),o("li",[o("code",[e._v('"process.setegid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.seteuid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.setUncaughtExceptionCaptureCallback"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stdout.getColorDepth"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stdout.hasColor"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stderr.getColorDepth"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stderr.hasColor"')])]),e._v(" "),o("li",[o("code",[e._v('"queueMicrotask"')])]),e._v(" "),o("li",[o("code",[e._v('"require.resolve.paths"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("assert")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"assert.deepStrictEqual"')])]),e._v(" "),o("li",[o("code",[e._v('"assert.doesNotReject"')])]),e._v(" "),o("li",[o("code",[e._v('"assert.notDeepStrictEqual"')])]),e._v(" "),o("li",[o("code",[e._v('"assert.rejects"')])]),e._v(" "),o("li",[o("code",[e._v('"assert.strict"')])]),e._v(" "),o("li",[o("code",[e._v('"assert.strict.doesNotReject"')])]),e._v(" "),o("li",[o("code",[e._v('"assert.strict.rejects"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("async_hooks")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"async_hooks"')])]),e._v(" "),o("li",[o("code",[e._v('"async_hooks.createHook"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("buffer")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"buffer.Buffer.alloc"')])]),e._v(" "),o("li",[o("code",[e._v('"buffer.Buffer.allocUnsafe"')])]),e._v(" "),o("li",[o("code",[e._v('"buffer.Buffer.allocUnsafeSlow"')])]),e._v(" "),o("li",[o("code",[e._v('"buffer.Buffer.from"')])]),e._v(" "),o("li",[o("code",[e._v('"buffer.constants"')])]),e._v(" "),o("li",[o("code",[e._v('"buffer.kMaxLength"')])]),e._v(" "),o("li",[o("code",[e._v('"buffer.transcode"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("child_process")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"child_process.ChildProcess"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("console")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"console.clear"')])]),e._v(" "),o("li",[o("code",[e._v('"console.count"')])]),e._v(" "),o("li",[o("code",[e._v('"console.countReset"')])]),e._v(" "),o("li",[o("code",[e._v('"console.debug"')])]),e._v(" "),o("li",[o("code",[e._v('"console.dirxml"')])]),e._v(" "),o("li",[o("code",[e._v('"console.group"')])]),e._v(" "),o("li",[o("code",[e._v('"console.groupCollapsed"')])]),e._v(" "),o("li",[o("code",[e._v('"console.groupEnd"')])]),e._v(" "),o("li",[o("code",[e._v('"console.table"')])]),e._v(" "),o("li",[o("code",[e._v('"console.markTimeline"')])]),e._v(" "),o("li",[o("code",[e._v('"console.profile"')])]),e._v(" "),o("li",[o("code",[e._v('"console.profileEnd"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timeLog"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timeStamp"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timeline"')])]),e._v(" "),o("li",[o("code",[e._v('"console.timelineEnd"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("crypto")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"crypto.Certificate.exportChallenge"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.Certificate.exportPublicKey"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.Certificate.verifySpkac"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.KeyObject"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.createPrivateKey"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.createPublicKey"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.createSecretKey"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.constants"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.fips"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.generateKeyPair"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.generateKeyPairSync"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.getCurves"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.getFips"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.privateEncrypt"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.publicDecrypt"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.randomFillSync"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.randomFill"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.scrypt"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.scryptSync"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.setFips"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.sign"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.timingSafeEqual"')])]),e._v(" "),o("li",[o("code",[e._v('"crypto.verify"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("dns")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"dns.Resolver"')])]),e._v(" "),o("li",[o("code",[e._v('"dns.resolvePtr"')])]),e._v(" "),o("li",[o("code",[e._v('"dns.promises"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("events")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"events.EventEmitter.once"')])]),e._v(" "),o("li",[o("code",[e._v('"events.once"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("fs")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"fs.Dirent"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.copyFile"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.copyFileSync"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.mkdtemp"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.mkdtempSync"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.realpath.native"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.realpathSync.native"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.promises"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.writev"')])]),e._v(" "),o("li",[o("code",[e._v('"fs.writevSync"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("http2")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"http2"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("inspector")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"inspector"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("module")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"module.Module.builtinModules"')])]),e._v(" "),o("li",[o("code",[e._v('"module.Module.createRequireFromPath"')])]),e._v(" "),o("li",[o("code",[e._v('"module.Module.createRequire"')])]),e._v(" "),o("li",[o("code",[e._v('"module.Module.syncBuiltinESMExports"')])]),e._v(" "),o("li",[o("code",[e._v('"module.builtinModules"')])]),e._v(" "),o("li",[o("code",[e._v('"module.createRequireFromPath"')])]),e._v(" "),o("li",[o("code",[e._v('"module.createRequire"')])]),e._v(" "),o("li",[o("code",[e._v('"module.syncBuiltinESMExports"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("os")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"os.constants"')])]),e._v(" "),o("li",[o("code",[e._v('"os.constants.priority"')])]),e._v(" "),o("li",[o("code",[e._v('"os.getPriority"')])]),e._v(" "),o("li",[o("code",[e._v('"os.homedir"')])]),e._v(" "),o("li",[o("code",[e._v('"os.setPriority"')])]),e._v(" "),o("li",[o("code",[e._v('"os.userInfo"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("path")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"path.toNamespacedPath"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("perf_hooks")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"perf_hooks"')])]),e._v(" "),o("li",[o("code",[e._v('"perf_hooks.monitorEventLoopDelay"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("process")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"process.allowedNodeEnvironmentFlags"')])]),e._v(" "),o("li",[o("code",[e._v('"process.argv0"')])]),e._v(" "),o("li",[o("code",[e._v('"process.channel"')])]),e._v(" "),o("li",[o("code",[e._v('"process.cpuUsage"')])]),e._v(" "),o("li",[o("code",[e._v('"process.emitWarning"')])]),e._v(" "),o("li",[o("code",[e._v('"process.getegid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.geteuid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.hasUncaughtExceptionCaptureCallback"')])]),e._v(" "),o("li",[o("code",[e._v('"process.hrtime.bigint"')])]),e._v(" "),o("li",[o("code",[e._v('"process.ppid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.release"')])]),e._v(" "),o("li",[o("code",[e._v('"process.report"')])]),e._v(" "),o("li",[o("code",[e._v('"process.resourceUsage"')])]),e._v(" "),o("li",[o("code",[e._v('"process.setegid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.seteuid"')])]),e._v(" "),o("li",[o("code",[e._v('"process.setUncaughtExceptionCaptureCallback"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stdout.getColorDepth"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stdout.hasColor"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stderr.getColorDepth"')])]),e._v(" "),o("li",[o("code",[e._v('"process.stderr.hasColor"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("stream")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"stream.Readable.from"')])]),e._v(" "),o("li",[o("code",[e._v('"stream.finished"')])]),e._v(" "),o("li",[o("code",[e._v('"stream.pipeline"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("trace_events")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"trace_events"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("url")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"url.URL"')])]),e._v(" "),o("li",[o("code",[e._v('"url.URLSearchParams"')])]),e._v(" "),o("li",[o("code",[e._v('"url.domainToASCII"')])]),e._v(" "),o("li",[o("code",[e._v('"url.domainToUnicode"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("util")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"util.callbackify"')])]),e._v(" "),o("li",[o("code",[e._v('"util.formatWithOptions"')])]),e._v(" "),o("li",[o("code",[e._v('"util.getSystemErrorName"')])]),e._v(" "),o("li",[o("code",[e._v('"util.inspect.custom"')])]),e._v(" "),o("li",[o("code",[e._v('"util.inspect.defaultOptions"')])]),e._v(" "),o("li",[o("code",[e._v('"util.inspect.replDefaults"')])]),e._v(" "),o("li",[o("code",[e._v('"util.isDeepStrictEqual"')])]),e._v(" "),o("li",[o("code",[e._v('"util.promisify"')])]),e._v(" "),o("li",[o("code",[e._v('"util.TextDecoder"')])]),e._v(" "),o("li",[o("code",[e._v('"util.TextEncoder"')])]),e._v(" "),o("li",[o("code",[e._v('"util.types"')])]),e._v(" "),o("li",[o("code",[e._v('"util.types.isBoxedPrimitive"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("v8")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"v8"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.DefaultDeserializer"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.DefaultSerializer"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.Deserializer"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.Serializer"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.cachedDataVersionTag"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.deserialize"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.getHeapCodeStatistics"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.getHeapSnapshot"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.getHeapSpaceStatistics"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.serialize"')])]),e._v(" "),o("li",[o("code",[e._v('"v8.writeHeapSnapshot"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("vm")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"vm.Module"')])]),e._v(" "),o("li",[o("code",[e._v('"vm.compileFunction"')])])]),e._v(" "),o("p",[o("strong",[o("code",[e._v("worker_threads")]),e._v(" module:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"worker_threads"')])])])]),e._v(" "),o("h3",{attrs:{id:"known-limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations"}},[e._v("#")]),e._v(" Known limitations")]),e._v(" "),o("p",[e._v("This rule cannot find non-static things.\nFor example:")]),e._v(" "),o("ul",[o("li",[e._v("New properties and methods of instances.")]),e._v(" "),o("li",[e._v("New parameters of functions.")]),e._v(" "),o("li",[e._v("New "),o("code",[e._v("options")]),e._v(" properties of function parameters.")]),e._v(" "),o("li",[e._v("New events.")])]),e._v(" "),o("h2",{attrs:{id:"🔎-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🔎-implementation"}},[e._v("#")]),e._v(" 🔎 Implementation")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"../../../lib/rules/no-unsupported-features/node-builtins.js"}},[e._v("Rule source")])]),e._v(" "),o("li",[o("a",{attrs:{href:"../../../tests/lib/rules/no-unsupported-features/node-builtins.js"}},[e._v("Test source")])])])])}),[],!1,null,null,null);o.default=v.exports}}]);