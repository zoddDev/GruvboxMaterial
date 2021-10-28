!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s="qPAi")}({"0IZj":function(e,t,s){"use strict";try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}},Gpc1:function(e,t,s){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},I3Xu:function(e,t,s){"use strict";try{self["workbox:routing:5.1.3"]&&_()}catch(e){}},OvAC:function(e,t){e.exports=function(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},VdJd:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"localize",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var n,r=(n=s("XPvw"))&&n.__esModule?n:{default:n};var a,i,o,c,l,u,h=(a={blacklistedNodeNames:["STYLE"]},i=null,o={characterData:!0,childList:!0,subtree:!0},c=function(e){return e&&"string"==typeof e},l=function(e){var t=function(e){for(var t,s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,(function(e){return/[^\s]/.test(e.nodeValue)?a.blacklistedNodeNames.includes(e.parentElement.nodeName)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT})),n=[];t=s.nextNode();)n.push(t);return n}(e),s=!0,n=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(s=(o=l.next()).done);s=!0){var u=o.value,h=u.nodeValue;c(h)&&(u.nodeValue=(0,r.default)(h,a))}}catch(e){n=!0,i=e}finally{try{s||null==l.return||l.return()}finally{if(n)throw i}}},u=function(e){var t=!0,s=!1,n=void 0;try{for(var u,h=e[Symbol.iterator]();!(t=(u=h.next()).done);t=!0){var d=u.value;if("childList"===d.type&&d.addedNodes.length>0)i.disconnect(),d.addedNodes.forEach(l),i.observe(document.body,o);else if("characterData"===d.type){var f=d.target.nodeValue,p=a.blacklistedNodeNames.includes(d.target.parentElement.nodeName);c(f)&&!p&&(i.disconnect(),d.target.nodeValue=(0,r.default)(f,a),i.observe(document.body,o))}}}catch(e){s=!0,n=e}finally{try{t||null==h.return||h.return()}finally{if(s)throw n}}},{start:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.strategy,s=void 0===t?"accented":t,n=e.blacklistedNodeNames,r=void 0===n?a.blacklistedNodeNames:n;a.blacklistedNodeNames=r,a.strategy=s,l(document.body),(i=new MutationObserver(u)).observe(document.body,o)},stop:function(){i&&i.disconnect()},localize:r.default});t.default=h},XPvw:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={accented:{prefix:"",postfix:"",map:{a:"ȧ",A:"Ȧ",b:"ƀ",B:"Ɓ",c:"ƈ",C:"Ƈ",d:"ḓ",D:"Ḓ",e:"ḗ",E:"Ḗ",f:"ƒ",F:"Ƒ",g:"ɠ",G:"Ɠ",h:"ħ",H:"Ħ",i:"ī",I:"Ī",j:"ĵ",J:"Ĵ",k:"ķ",K:"Ķ",l:"ŀ",L:"Ŀ",m:"ḿ",M:"Ḿ",n:"ƞ",N:"Ƞ",o:"ǿ",O:"Ǿ",p:"ƥ",P:"Ƥ",q:"ɋ",Q:"Ɋ",r:"ř",R:"Ř",s:"ş",S:"Ş",t:"ŧ",T:"Ŧ",v:"ṽ",V:"Ṽ",u:"ŭ",U:"Ŭ",w:"ẇ",W:"Ẇ",x:"ẋ",X:"Ẋ",y:"ẏ",Y:"Ẏ",z:"ẑ",Z:"Ẑ"},elongate:!0},bidi:{prefix:"‮",postfix:"‬",map:{a:"ɐ",A:"∀",b:"q",B:"Ԑ",c:"ɔ",C:"Ↄ",d:"p",D:"ᗡ",e:"ǝ",E:"Ǝ",f:"ɟ",F:"Ⅎ",g:"ƃ",G:"⅁",h:"ɥ",H:"H",i:"ı",I:"I",j:"ɾ",J:"ſ",k:"ʞ",K:"Ӽ",l:"ʅ",L:"⅂",m:"ɯ",M:"W",n:"u",N:"N",o:"o",O:"O",p:"d",P:"Ԁ",q:"b",Q:"Ò",r:"ɹ",R:"ᴚ",s:"s",S:"S",t:"ʇ",T:"⊥",u:"n",U:"∩",v:"ʌ",V:"Ʌ",w:"ʍ",W:"M",x:"x",X:"X",y:"ʎ",Y:"⅄",z:"z",Z:"Z"},elongate:!1}},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.strategy,r=void 0===s?"accented":s,a=n[r],i="",o=!0,c=!1,l=void 0;try{for(var u,h=e[Symbol.iterator]();!(o=(u=h.next()).done);o=!0){var d=u.value;if(a.map[d]){var f=d.toLowerCase();!a.elongate||"a"!==f&&"e"!==f&&"o"!==f&&"u"!==f?i+=a.map[d]:i+=a.map[d]+a.map[d]}else i+=d}}catch(e){c=!0,l=e}finally{try{o||null==h.return||h.return()}finally{if(c)throw l}}return i.startsWith(a.prefix)&&i.endsWith(a.postfix)?i:a.prefix+i+a.postfix};t.default=r},myed:function(e,t,s){"use strict";try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}},qPAi:function(e,t,s){"use strict";s.r(t);s("Gpc1");const n=[],r={get:()=>n,add(e){n.push(...e)}};s("xgXd");const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[a.prefix,e,a.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||i(a.precache),c=e=>e||i(a.runtime),l=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),u=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class h extends Error{constructor(e,t){super(u(e,t)),this.name=e,this.details=t}}const d=new Set;const f=(e,t)=>e.filter(e=>t in e),p=async({request:e,mode:t,plugins:s=[]})=>{const n=f(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},m=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const a=await self.caches.open(e),i=await p({plugins:r,request:t,mode:"read"});let o=await a.match(i,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:o,request:i})}return o},g=async({cacheName:e,request:t,response:s,event:n,plugins:r=[],matchOptions:a})=>{const i=await p({plugins:r,request:t,mode:"write"});if(!s)throw new h("cache-put-with-no-response",{url:l(i.url)});const o=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:n,plugins:r,response:s,request:i});if(!o)return void 0;const c=await self.caches.open(e),u=f(r,"cacheDidUpdate"),g=u.length>0?await m({cacheName:e,matchOptions:a,request:i}):null;try{await c.put(i,o)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of d)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:g,newResponse:o,request:i})},y=m,w=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=f(n,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,r=e.clone();e=await n.call(t,{request:r,event:s})}}catch(e){throw new h("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:s,request:i,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:a.clone(),request:i.clone()});throw e}};let _;async function v(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=t?t(n):n,a=function(){if(void 0===_){const e=new Response("");if("body"in e)try{new Response(e.body),_=!0}catch(e){_=!1}_=!1}return _}()?s.body:await s.blob();return new Response(a,r)}function b(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class R{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=b(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){t.join(", ");1}}}async install({event:e,plugins:t}={}){const s=[],n=[],r=await self.caches.open(this._cacheName),a=await r.keys(),i=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const o=s.map(({cacheKey:s,url:n})=>{const r=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:a,event:e,integrity:r,plugins:t,url:n})});await Promise.all(o);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:t,cacheMode:s,event:n,plugins:r,integrity:a}){const i=new Request(t,{integrity:a,cache:s,credentials:"same-origin"});let o,c=await w({event:n,plugins:r,request:i});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:n,request:i,response:c}):c.status<400))throw new h("bad-precaching-response",{url:t,status:c.status});c.redirected&&(c=await v(c)),await g({event:n,plugins:r,response:c,request:e===t?i:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new h("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new h("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let x;const O=()=>(x||(x=new R),x);const N=(e,t)=>{const s=O().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let q=!1;function T(e){q||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const r=o();self.addEventListener("fetch",a=>{const i=N(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let o=self.caches.open(r).then(e=>e.match(i)).then(e=>e||fetch(i));a.respondWith(o)})})(e),q=!0)}const E=e=>{const t=O(),s=r.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},L=e=>{const t=O();e.waitUntil(t.activate())};s("I3Xu");const U=e=>e&&"object"==typeof e?e:{handle:e};class P{constructor(e,t,s="GET"){this.handler=U(t),this.match=e,this.method=s}}class C extends P{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(e=>this._match(e),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this._denylist)if(e.test(s))return!1;return!!this._allowlist.some(e=>e.test(s))}}class S extends P{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class M{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let a=r&&r.handler;if(!a&&this._defaultHandler&&(a=this._defaultHandler),!a)return void 0;let i;try{i=a.handle({url:s,request:e,event:t,params:n})}catch(e){i=Promise.reject(e)}return i instanceof Promise&&this._catchHandler&&(i=i.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),i}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const a=r.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=U(e)}setCatchHandler(e){this._catchHandler=U(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new h("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let j;const k=()=>(j||(j=new M,j.addFetchListener(),j.addCacheListener()),j);function A(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0;n=new P(({url:e})=>e.href===r.href,t,s)}else if(e instanceof RegExp)n=new S(e,t,s);else if("function"==typeof e)n=new P(e,t,s);else{if(!(e instanceof P))throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return k().registerRoute(n),n}s("myed");class D{constructor(e={}){this._cacheName=c(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,n=await y({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(n)0;else{0;try{n=await this._getFromNetwork(t,e)}catch(e){s=e}0}if(!n)throw new h("no-response",{url:t.url,error:s});return n}async _getFromNetwork(e,t){const s=await w({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),r=g({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(r)}catch(e){0}return s}}const K={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class I{constructor(e={}){if(this._cacheName=c(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[K,...e.plugins]}else this._plugins=[K];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let r;if(this._networkTimeoutSeconds){const{id:a,promise:i}=this._getTimeoutPromise({request:t,event:e,logs:s});r=a,n.push(i)}const a=this._getNetworkPromise({timeoutId:r,request:t,event:e,logs:s});n.push(a);let i=await Promise.race(n);if(i||(i=await a),!i)throw new h("no-response",{url:t.url});return i}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let r,a;try{a=await w({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){r=e}if(e&&clearTimeout(e),r||!a)a=await this._respondFromCache({request:t,event:n});else{const e=a.clone(),s=g({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){0}}return a}_respondFromCache({event:e,request:t}){return y({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}class F{constructor(e={}){this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions}async handle({event:e,request:t}){let s,n;"string"==typeof t&&(t=new Request(t));try{n=await w({request:t,event:e,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){s=e}if(!n)throw new h("no-response",{url:t.url,error:s});return n}}const W=/https:\/\/.*\.app\.spotify\.com\/.*/;const H="app-shell-cache-v1",B="data-cache-v1";var z=s("OvAC"),V=s.n(z);function X(e){e.then(()=>{})}class J{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:r,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(i,o)=>{const c=i.objectStore(e),l=t?c.index(t):c,u=[],h=l.openCursor(s,n);h.onsuccess=()=>{const e=h.result;e?(u.push(a?e:e.value),r&&u.length>=r?o(u):e.continue()):o(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,r)=>{const a=s.objectStore(t),i=a[e].apply(a,n);i.onsuccess=()=>r(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}J.prototype.OPEN_TIMEOUT=2e3;const G={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(G))for(const s of t)s in IDBObjectStore.prototype&&(J.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});s("0IZj");const Q="cache-entries",Y=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class Z{constructor(e){this._cacheName=e,this._db=new J("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(Q,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=Y(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(Q,s)}async getTimestamp(e){return(await this._db.get(Q,this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction(Q,"readwrite",(s,n)=>{const r=s.objectStore(Q).index("timestamp").openCursor(null,"prev"),a=[];let i=0;r.onsuccess=()=>{const s=r.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?a.push(s.value):i++),s.continue()}else n(a)}}),n=[];for(const e of s)await this._db.delete(Q,e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+Y(e)}}class ${constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new Z(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,X(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class ee{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const r=this._isResponseDateFresh(n),a=this._getCacheExpiration(s);X(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return r?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),d.add(t))}_getCacheExpiration(e){if(e===c())throw new h("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new $(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}function te(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}const se=200,ne=["timestamp"],re={cacheKeyWillBeUsed:async({request:e})=>{const t=new URL(e.url);ne.forEach(e=>{t.searchParams.delete(e)});const s=t.toString();return s!==e.url?s:e}},ae=(e={})=>new ee(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?te(Object(s),!0).forEach((function(t){V()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):te(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({maxAgeSeconds:2592e3},e));async function ie(e){const t=await caches.open(H);await t.put("/",e.clone())}const oe=[/https:\/\/api\.spotify\.com\/.*/,/https:\/\/spclient\.wg\.spotify\.com\/.*/];const ce=[/.*\/cdn\/fonts\/.*/,/\/fonts\/.*/];const le=[/.*\/cdn\/generated\/.*/];const ue=[/.*\/cdn\/images\/.*/,/https:\/\/pl\.scdn\.co\/images\/pl\/.*/,/https:\/\/i\.scdn\.co\/image\/.*/,/https:\/\/t\.scdn\.co\/images\/.*/,/https:\/\/mosaic\.scdn\.co\/.*/,/https:\/\/dailymix-images\.scdn\.co\/.*/,/https:\/\/open\.scdn\.co\/cdn\/images\/.*/];const he="LOGOUT_REQUEST";var de=s("VdJd"),fe=s.n(de);let pe,me,ge;!function(e){e.ar="ar",e.cs="cs",e.de="de",e.el="el",e.en="en",e.es419="es-419",e.es="es",e.fi="fi",e.frCA="fr-CA",e.fr="fr",e.he="he",e.hu="hu",e.id="id",e.it="it",e.ja="ja",e.ko="ko",e.ms="ms",e.nl="nl",e.pl="pl",e.ptBR="pt-BR",e.ru="ru",e.sv="sv",e.th="th",e.tr="tr",e.vi="vi",e.zhTW="zh-TW"}(pe||(pe={})),function(e){e.AR="، ",e.EN=", "}(me||(me={})),function(e){e.ZERO="zero",e.ONE="one",e.TWO="two",e.FEW="few",e.MANY="many",e.OTHER="other"}(ge||(ge={}));let ye={};const we=e=>{switch(e){case"ar":return"ar-u-nu-latn";default:return e}};new class{constructor(){V()(this,"_locale",void 0),V()(this,"_dictionary",void 0),V()(this,"_isPseudoLocalizationOn",void 0),this._dictionary={},this._locale=pe.en,this._isPseudoLocalizationOn=!1}setDictionary(e){this._dictionary=e}setLocale(e){this._locale=e}getLocale(){return this._locale}enablePseudoLocalization(){this._isPseudoLocalizationOn=!0}disablePseudoLocalization(){this._isPseudoLocalizationOn=!1}toLocaleLowerCase(e){return null==e?void 0:e.toLocaleLowerCase(this._locale)}toLocaleUpperCase(e){return null==e?void 0:e.toLocaleUpperCase(this._locale)}get(e,...t){const s=e in this._dictionary?this._dictionary[e]:e;let n;if("string"!=typeof s){const e=t[0],r=((e,t)=>{try{return(ye[e]||(ye[e]=new Intl.PluralRules(e))).select(t)}catch{return ge.OTHER}})(this._locale,parseInt(e,10));s[r]?n=s[r]:s.other&&(n=s.other)}else n=s;if((null==t?void 0:t.length)>0)for(let e=0;e<t.length;e++){const s=t[e];if(null!=s)if("string"==typeof s)n=n.replace(`{${e}}`,s);else if("number"==typeof s)n=n.replace(`{${e}}`,this.formatNumber(s));else if("object"==typeof s)for(const e of Object.keys(s)){const t=s[e];n=n.replace(`%${e}%`,t)}}return this._isPseudoLocalizationOn&&(n=fe.a.localize(n)),n}getSeparator(){switch(this._locale){case pe.ar:return me.AR;default:return me.EN}}formatNumber(e){return e.toLocaleString(we(this._locale))}formatDate(e,t=null){const s=t||{year:"numeric",month:"long",day:"numeric"};return new Intl.DateTimeFormat(we(this._locale),s).format(e)}formatRelativeDate(e,t=null){var s;const n=new Date(Date.now());if((e=new Date(e)).getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&(null===(s=Intl)||void 0===s?void 0:s.RelativeTimeFormat)){const t=e.getTime()-n.getTime(),{days:s,hours:a,minutes:i,seconds:o}=(r=t,{seconds:Math.round(r/1e3),minutes:Math.round(r/1e3/60),hours:Math.round(r/1e3/60/60),days:Math.round(r/1e3/60/60/24)}),c=new Intl.RelativeTimeFormat;return s||a||i?s||a?s?c.format(s,"days"):c.format(a,"hours"):c.format(i,"minutes"):c.format(o,"seconds")}var r;return this.formatDate(e,t)}__resetForTests(){this._dictionary={},this._locale=pe.en,ye={}}};pe.en;const _e=he;var ve;self.__WB_DISABLE_DEV_LOGS=!0,function(e){O().addToCacheList(e),e.length>0&&(self.addEventListener("install",E),self.addEventListener("activate",L))}([]||[]),T(ve),A(W,new F),addEventListener("install",e=>e.waitUntil(async function(){try{const e=await fetch("/");e&&ie(e)}catch{}}())),A(new C(async({request:e})=>{try{const t=await fetch(e),{headers:s,status:n}=t,r=s.has("X-Spotify-Open-Index");return n===se&&r&&await ie(t),t}catch{return async function(){return await caches.match("/",{cacheName:H})||Response.error()}()}})),function(){const e=new I({cacheName:B,plugins:[ae({maxEntries:500}),re],matchOptions:{ignoreVary:!0}});oe.map(t=>A(t,e))}(),function(){const e=new D({cacheName:"fonts-v1"});ce.map(t=>A(t,e))}(),function(){const e=new D({cacheName:"generated-v1",plugins:[ae()]});le.map(t=>A(t,e))}(),function(){const e=new D({cacheName:"images-v1",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[ae({purgeOnQuotaError:!0,maxEntries:300})]});ue.map(t=>A(t,e))}(),addEventListener("message",e=>{!async function(e){switch(e.type){case _e:self.caches.delete(H),self.caches.delete(B)}}(e.data)}),addEventListener("message",async e=>{const t=await async function(e){return e.type,Promise.resolve()}(e.data);if(t){const[s]=e.ports;s.postMessage(JSON.stringify(t))}})},xgXd:function(e,t,s){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}}});