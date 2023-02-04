var j=Object.defineProperty;var e=(n,t)=>j(n,"name",{value:t,configurable:!0});const I=e(n=>new Promise(t=>{setTimeout(t,n,`Timeout after ${n/1e3} seconds`)}),"waitFor");var h;(function(n){n.DEV="DEV",n.UAT="UAT",n.PRD="PRD"})(h||(h={}));var y;(function(n){n.GITHUB="GitHub",n.GITLAB="GitLab",n.BITBUCKET="Bitbucket",n.LOCALHOST="localhost",n.UNKNOWN="unknown"})(y||(y={}));var R=globalThis&&globalThis.__awaiter||function(n,t,o,i){function c(r){return r instanceof o?r:new o(function(l){l(r)})}return e(c,"adopt"),new(o||(o=Promise))(function(r,l){function E(a){try{d(i.next(a))}catch(m){l(m)}}e(E,"fulfilled");function S(a){try{d(i.throw(a))}catch(m){l(m)}}e(S,"rejected");function d(a){a.done?r(a.value):c(a.value).then(E,S)}e(d,"step"),d((i=i.apply(n,t||[])).next())})};let T,L,C,N,G;const D=e(()=>{T=!1,L="rmg-unknown",C="unknown",N=h.PRD,G=y.UNKNOWN},"_resetConfig"),H=e(()=>R(void 0,void 0,void 0,function*(){const n=window.location.pathname.split("/")[1],t=n?`/${n}/info.json`:"/info.json",o=yield fetch(t);if(o.ok){const i=yield o.json();L=i.component,C=i.version,N=i.environment,G=i.instance}else throw new Error(`Failed to fetch config from ${t}`)}),"fetchInfoJson"),V=e(()=>R(void 0,void 0,void 0,function*(){try{console.log("[rmg-runtime] Loading config...");const n=yield Promise.race([H(),I(10*1e3)]);n?console.error("[rmg-runtime] Failed to load config.",n):(T=!0,console.log("[rmg-runtime] Config loaded!"))}catch(n){console.error("[rmg-runtime] Failed to load config.",n)}}),"loadWithTimeout"),$=e(()=>T,"isInitialised"),Q=e(()=>L,"getComponent"),B=e(()=>C,"getVersion"),K=e(()=>N,"getEnvironment"),Y=e(()=>G,"getInstance");D();const s={loadWithTimeout:V,isInitialised:$,getComponent:Q,getVersion:B,getEnvironment:K,getInstance:Y,_resetConfig:D};window.dataLayer=window.dataLayer||[];const q=e(()=>{const n=document.createElement("script");n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=G-2HP8Y4MRRQ",document.head.append(n)},"installGtag");function U(...n){if(s.getEnvironment()!==h.DEV)return window.dataLayer.push(arguments);console.log("[rmg-runtime] Not going to send event in DEV environment",n)}e(U,"gtag");const z=e((n,t)=>{U("event",n,t)},"customEvent"),J=e(()=>{q(),U("js",new Date),U("config","G-2HP8Y4MRRQ",{appName:s.getComponent(),version:s.getVersion(),environment:s.getEnvironment(),instance:s.getInstance()})},"init$1"),v={init:J,customEvent:z},X="rmg-runtime-channel",A={};let f;try{f=new BroadcastChannel(X),f.onmessage=n=>{var t;const{event:o,data:i,frameId:c}=n.data;(t=A[o])===null||t===void 0||t.forEach(r=>r(i,c))}}catch(n){console.warn("[rmg-runtime] Failed to initiate broadcast channel. Some features may be unavailable.",n)}const Z=e((n,t)=>{var o;f==null||f.postMessage({event:n,data:t,frameId:(o=window.frameElement)===null||o===void 0?void 0:o.id})},"postEvent"),nn=e((n,t)=>{var o;n in A?(o=A[n])===null||o===void 0||o.push(t):A[n]=[t]},"onMessage"),p={postEvent:Z,onMessage:nn};var u;(function(n){n.SET_LANGUAGE="SET_LANGUAGE",n.OPEN_APP="OPEN_APP",n.UPDATE_URL="UPDATE_URL"})(u||(u={}));const b=e(()=>!window.frameElement,"isStandaloneWindow"),en=e(()=>{if(!b()){const n=document.createElement("style");n.textContent=".rmg-window__header{display: none !important;}",document.head.append(n)}},"injectCss"),tn=e(n=>{p.postEvent(u.OPEN_APP,n)},"openApp"),on=e(n=>{p.postEvent(u.UPDATE_URL,n)},"updateUrl"),an=e(n=>{p.onMessage(u.OPEN_APP,n)},"onAppOpen"),rn=e(n=>{p.onMessage(u.UPDATE_URL,n)},"onUrlUpdate"),w={isStandaloneWindow:b,injectCss:en,openApp:tn,onAppOpen:an,updateUrl:on,onUrlUpdate:rn},M="rmg-runtime__language",_="rmg-runtime__allowAnalytics",F=["en","zh-Hans","zh-Hant"],sn=e(n=>{F.includes(n)&&(p.postEvent(u.SET_LANGUAGE,n),window.localStorage.setItem(M,n))},"setLanguage"),ln=e(()=>{const n=window.localStorage.getItem(M);return n&&F.includes(n)?n:"en"},"getLanguage"),cn=e(n=>{p.onMessage(u.SET_LANGUAGE,n)},"onLanguageChange"),gn=e(()=>window.localStorage.getItem(_)!==null,"isAnalyticsQADone"),O=e(()=>window.localStorage.getItem(_)==="true","isAllowAnalytics"),un=e(n=>{const t=O();return n?(t||(window.localStorage.setItem(_,n.toString()),v.init()),{refreshRequired:!1}):t?(window.localStorage.setItem(_,n.toString()),{refreshRequired:!0}):{refreshRequired:!1}},"allowAnalytics"),g={setLanguage:sn,getLanguage:ln,onLanguageChange:cn,isAnalyticsQADone:gn,isAllowAnalytics:O,allowAnalytics:un},dn=new Date().getTime();function mn(){const n=s.getComponent(),t=window.localStorage.getItem(n+"__startTime");return t===null?new Date().getTime()-dn:new Date().getTime()-Number(t)}e(mn,"getMsSinceStartUp");const wn={getMsSinceStartUp:mn},k=e(()=>{const n=s.getComponent();if(n==="rmg-unknown")throw new Error("[rmg-runtime] Unable to clear storage for unknown app");return n==="railmapgen.github.io"?"rmg-home":n},"getPrefix"),pn=e(()=>{const n=k(),t={};let o=0;for(;o<window.localStorage.length;){const i=window.localStorage.key(o);if(i!=null&&i.startsWith(n+"__")){const c=window.localStorage.getItem(i);c&&(t[i]=c)}o++}return t},"getStorageForCurrentApp"),fn=e(()=>{const n=k();let t=0;for(;t<window.localStorage.length;){const o=window.localStorage.key(t);o!=null&&o.startsWith(n+"__")?(window.localStorage.removeItem(o),console.log(`[rmg-runtime] Removed item ${o}`)):t++}},"clearStorageForCurrentApp"),P={getStorageForCurrentApp:pn,clearStorageForCurrentApp:fn};var W=globalThis&&globalThis.__awaiter||function(n,t,o,i){function c(r){return r instanceof o?r:new o(function(l){l(r)})}return e(c,"adopt"),new(o||(o=Promise))(function(r,l){function E(a){try{d(i.next(a))}catch(m){l(m)}}e(E,"fulfilled");function S(a){try{d(i.throw(a))}catch(m){l(m)}}e(S,"rejected");function d(a){a.done?r(a.value):c(a.value).then(E,S)}e(d,"step"),d((i=i.apply(n,t||[])).next())})};let x=!1;const An=e(()=>W(void 0,void 0,void 0,function*(){yield s.loadWithTimeout(),g.isAnalyticsQADone()?g.isAllowAnalytics()&&(console.log("[rmg-runtime] User has previously allowed GA"),v.init()):w.isStandaloneWindow()&&s.getComponent()!=="rmg-home"&&(console.warn("[rmg-runtime] App is opened in standalone window but analytics Q&A is not finished. GA will be init by default."),v.init()),x=!0}),"init"),hn=e(()=>W(void 0,void 0,void 0,function*(){let n=0;for(;n<=10&&!x;)yield I(1e3),n+=1}),"ready"),vn={ready:hn,getAppName:s.getComponent,getAppVersion:s.getVersion,getEnv:s.getEnvironment,getInstance:s.getInstance,event:v.customEvent,isStandaloneWindow:w.isStandaloneWindow,injectCss:w.injectCss,openApp:w.openApp,onAppOpen:w.onAppOpen,updateUrl:w.updateUrl,onUrlUpdate:w.onUrlUpdate,setLanguage:g.setLanguage,getLanguage:g.getLanguage,onLanguageChange:g.onLanguageChange,isAnalyticsQADone:g.isAnalyticsQADone,isAllowAnalytics:g.isAllowAnalytics,allowAnalytics:g.allowAnalytics,getStorageForCurrentApp:P.getStorageForCurrentApp,clearStorageForCurrentApp:P.clearStorageForCurrentApp,getMsSinceStartUp:wn.getMsSinceStartUp};An().then();window.rmgRuntime=vn;export{h as R,vn as r};
//# sourceMappingURL=index-f996fca0.js.map