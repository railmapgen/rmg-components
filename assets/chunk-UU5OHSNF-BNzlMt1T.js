import{_ as j}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import{r as l,R as er}from"./index-CleY8y_P.js";import{_ as rr}from"./inheritsLoose-B7h9gheN.js";import{g as nr}from"./index-BJzPjEZr.js";import{j as tr}from"./jsx-runtime-CGpYA4L6.js";function ur(e,r){if(e==null)return{};var n={},t=Object.keys(e),u,a;for(a=0;a<t.length;a++)u=t[a],!(r.indexOf(u)>=0)&&(n[u]=e[u]);return n}var q="data-focus-lock",me="data-focus-lock-disabled",ar="data-no-focus-lock",or="data-autofocus-inside",ir="data-no-autofocus";function cr(e,r){return typeof e=="function"?e(r):e&&(e.current=r),e}function fr(e,r){var n=l.useState(function(){return{value:e,callback:r,facade:{get current(){return n.value},set current(t){var u=n.value;u!==t&&(n.value=t,n.callback(t,u))}}}})[0];return n.callback=r,n.facade}function sr(e,r){return fr(null,function(n){return e.forEach(function(t){return cr(t,n)})})}var W={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},$=function(){return $=Object.assign||function(r){for(var n,t=1,u=arguments.length;t<u;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},$.apply(this,arguments)};function gn(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,t=Object.getOwnPropertySymbols(e);u<t.length;u++)r.indexOf(t[u])<0&&Object.prototype.propertyIsEnumerable.call(e,t[u])&&(n[t[u]]=e[t[u]]);return n}function yn(e,r,n){for(var t=0,u=r.length,a;t<u;t++)(a||!(t in r))&&(a||(a=Array.prototype.slice.call(r,0,t)),a[t]=r[t]);return e.concat(a||Array.prototype.slice.call(r))}function be(e){return e}function he(e,r){r===void 0&&(r=be);var n=[],t=!1,u={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var o=r(a,t);return n.push(o),function(){n=n.filter(function(i){return i!==o})}},assignSyncMedium:function(a){for(t=!0;n.length;){var o=n;n=[],o.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){t=!0;var o=[];if(n.length){var i=n;n=[],i.forEach(a),o=n}var d=function(){var c=o;o=[],c.forEach(a)},s=function(){return Promise.resolve().then(d)};s(),n={push:function(c){o.push(c),s()},filter:function(c){return o=o.filter(c),n}}}};return u}function Y(e,r){return r===void 0&&(r=be),he(e,r)}function dr(e){e===void 0&&(e={});var r=he(null);return r.options=$({async:!0,ssr:!1},e),r}var pe=Y({},function(e){var r=e.target,n=e.currentTarget;return{target:r,currentTarget:n}}),ge=Y(),lr=Y(),vr=dr({async:!0}),mr=[],M=l.forwardRef(function(r,n){var t,u=l.useState(),a=u[0],o=u[1],i=l.useRef(),d=l.useRef(!1),s=l.useRef(null),c=r.children,f=r.disabled,m=r.noFocusGuards,v=r.persistentFocus,b=r.crossFrame,h=r.autoFocus;r.allowTextSelection;var g=r.group,F=r.className,T=r.whiteList,Re=r.hasPositiveIndices,te=r.shards,Ue=te===void 0?mr:te,ue=r.as,We=ue===void 0?"div":ue,ae=r.lockProps,Be=ae===void 0?{}:ae,Ge=r.sideCar,C=r.returnFocus,He=r.focusOptions,L=r.onActivation,R=r.onDeactivation,je=l.useState({}),qe=je[0],$e=l.useCallback(function(){s.current=s.current||document&&document.activeElement,i.current&&L&&L(i.current),d.current=!0},[L]),Ve=l.useCallback(function(){d.current=!1,R&&R(i.current)},[R]);l.useEffect(function(){f||(s.current=null)},[]);var Ke=l.useCallback(function(y){var I=s.current;if(I&&I.focus){var U=typeof C=="function"?C(I):C;if(U){var ie=typeof U=="object"?U:void 0;s.current=null,y?Promise.resolve().then(function(){return I.focus(ie)}):I.focus(ie)}}},[C]),Qe=l.useCallback(function(y){d.current&&pe.useMedium(y)},[]),Ye=ge.useMedium,ze=l.useCallback(function(y){i.current!==y&&(i.current=y,o(y))},[]),Je=j((t={},t[me]=f&&"disabled",t[q]=g,t),Be),oe=m!==!0,Xe=oe&&m!=="tail",Ze=sr([n,ze]);return l.createElement(l.Fragment,null,oe&&[l.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:f?-1:0,style:W}),Re?l.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:f?-1:1,style:W}):null],!f&&l.createElement(Ge,{id:qe,sideCar:vr,observed:a,disabled:f,persistentFocus:v,crossFrame:b,autoFocus:h,whiteList:T,shards:Ue,onActivation:$e,onDeactivation:Ve,returnFocus:Ke,focusOptions:He}),l.createElement(We,j({ref:Ze},Je,{className:F,onBlur:Ye,onFocus:Qe}),c),Xe&&l.createElement("div",{"data-focus-guard":!0,tabIndex:f?-1:0,style:W}))});M.propTypes={};M.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},A(e)}function br(e,r){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,r||"default");if(A(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function hr(e){var r=br(e,"string");return A(r)=="symbol"?r:String(r)}function pr(e,r,n){return r=hr(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function gr(e,r){function n(t){return t.displayName||t.name||"Component"}return function(u){var a=[],o;function i(){o=e(a.map(function(s){return s.props})),r(o)}var d=function(s){rr(c,s);function c(){return s.apply(this,arguments)||this}c.peek=function(){return o};var f=c.prototype;return f.componentDidMount=function(){a.push(this),i()},f.componentDidUpdate=function(){i()},f.componentWillUnmount=function(){var v=a.indexOf(this);a.splice(v,1),i()},f.render=function(){return er.createElement(u,this.props)},c}(l.PureComponent);return pr(d,"displayName","SideEffect("+n(u)+")"),d}}var p=function(e){for(var r=Array(e.length),n=0;n<e.length;++n)r[n]=e[n];return r},_=function(e){return Array.isArray(e)?e:[e]},ye=function(e){return Array.isArray(e)?e[0]:e},yr=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var r=window.getComputedStyle(e,null);return!r||!r.getPropertyValue?!1:r.getPropertyValue("display")==="none"||r.getPropertyValue("visibility")==="hidden"},Fe=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},Oe=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Fr=function(e,r){return!e||Oe(e)||!yr(e)&&r(Fe(e))},xe=function(e,r){var n=e.get(r);if(n!==void 0)return n;var t=Fr(r,xe.bind(void 0,e));return e.set(r,t),t},Or=function(e,r){return e&&!Oe(e)?Sr(e)?r(Fe(e)):!1:!0},Ee=function(e,r){var n=e.get(r);if(n!==void 0)return n;var t=Or(r,Ee.bind(void 0,e));return e.set(r,t),t},Se=function(e){return e.dataset},xr=function(e){return e.tagName==="BUTTON"},Ie=function(e){return e.tagName==="INPUT"},Ae=function(e){return Ie(e)&&e.type==="radio"},Er=function(e){return!((Ie(e)||xr(e))&&(e.type==="hidden"||e.disabled))},Sr=function(e){var r=e.getAttribute(ir);return![!0,"true",""].includes(r)},z=function(e){var r;return!!(e&&(!((r=Se(e))===null||r===void 0)&&r.focusGuard))},N=function(e){return!z(e)},Ir=function(e){return!!e},Ar=function(e,r){var n=e.tabIndex-r.tabIndex,t=e.index-r.index;if(n){if(!e.tabIndex)return 1;if(!r.tabIndex)return-1}return n||t},Pe=function(e,r,n){return p(e).map(function(t,u){return{node:t,index:u,tabIndex:n&&t.tabIndex===-1?(t.dataset||{}).focusGuard?0:-1:t.tabIndex}}).filter(function(t){return!r||t.tabIndex>=0}).sort(Ar)},Pr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],J=Pr.join(","),wr="".concat(J,", [data-focus-guard]"),we=function(e,r){return p((e.shadowRoot||e).children).reduce(function(n,t){return n.concat(t.matches(r?wr:J)?[t]:[],we(t))},[])},Tr=function(e,r){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?D([e.contentDocument.body],r):[e]},D=function(e,r){return e.reduce(function(n,t){var u,a=we(t,r),o=(u=[]).concat.apply(u,a.map(function(i){return Tr(i,r)}));return n.concat(o,t.parentNode?p(t.parentNode.querySelectorAll(J)).filter(function(i){return i===t}):[])},[])},Cr=function(e){var r=e.querySelectorAll("[".concat(or,"]"));return p(r).map(function(n){return D([n])}).reduce(function(n,t){return n.concat(t)},[])},X=function(e,r){return p(e).filter(function(n){return xe(r,n)}).filter(function(n){return Er(n)})},ce=function(e,r){return r===void 0&&(r=new Map),p(e).filter(function(n){return Ee(r,n)})},V=function(e,r,n){return Pe(X(D(e,n),r),!0,n)},fe=function(e,r){return Pe(X(D(e),r),!1)},_r=function(e,r){return X(Cr(e),r)},x=function(e,r){return e.shadowRoot?x(e.shadowRoot,r):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,r)?!0:p(e.children).some(function(n){var t;if(n instanceof HTMLIFrameElement){var u=(t=n.contentDocument)===null||t===void 0?void 0:t.body;return u?x(u,r):!1}return x(n,r)})},Nr=function(e){for(var r=new Set,n=e.length,t=0;t<n;t+=1)for(var u=t+1;u<n;u+=1){var a=e[t].compareDocumentPosition(e[u]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&r.add(u),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&r.add(t)}return e.filter(function(o,i){return!r.has(i)})},Te=function(e){return e.parentNode?Te(e.parentNode):e},Z=function(e){var r=_(e);return r.filter(Boolean).reduce(function(n,t){var u=t.getAttribute(q);return n.push.apply(n,u?Nr(p(Te(t).querySelectorAll("[".concat(q,'="').concat(u,'"]:not([').concat(me,'="disabled"])')))):[t]),n},[])},kr=function(e){try{return e()}catch{return}},P=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var r=e.activeElement;return r.shadowRoot?P(r.shadowRoot):r instanceof HTMLIFrameElement&&kr(function(){return r.contentWindow.document})?P(r.contentWindow.document):r}},Mr=function(e,r){return e===r},Dr=function(e,r){return!!p(e.querySelectorAll("iframe")).some(function(n){return Mr(n,r)})},Ce=function(e,r){return r===void 0&&(r=P(ye(e).ownerDocument)),!r||r.dataset&&r.dataset.focusGuard?!1:Z(e).some(function(n){return x(n,r)||Dr(n,r)})},Lr=function(e){e===void 0&&(e=document);var r=P(e);return r?p(e.querySelectorAll("[".concat(ar,"]"))).some(function(n){return x(n,r)}):!1},Rr=function(e,r){return r.filter(Ae).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},ee=function(e,r){return Ae(e)&&e.name?Rr(e,r):e},Ur=function(e){var r=new Set;return e.forEach(function(n){return r.add(ee(n,e))}),e.filter(function(n){return r.has(n)})},se=function(e){return e[0]&&e.length>1?ee(e[0],e):e[0]},de=function(e,r){return e.length>1?e.indexOf(ee(e[r],e)):r},_e="NEW_FOCUS",Wr=function(e,r,n,t){var u=e.length,a=e[0],o=e[u-1],i=z(n);if(!(n&&e.indexOf(n)>=0)){var d=n!==void 0?r.indexOf(n):-1,s=t?r.indexOf(t):d,c=t?e.indexOf(t):-1,f=d-s,m=r.indexOf(a),v=r.indexOf(o),b=Ur(r),h=n!==void 0?b.indexOf(n):-1,g=h-(t?b.indexOf(t):d),F=de(e,0),T=de(e,u-1);if(d===-1||c===-1)return _e;if(!f&&c>=0)return c;if(d<=m&&i&&Math.abs(f)>1)return T;if(d>=v&&i&&Math.abs(f)>1)return F;if(f&&Math.abs(g)>1)return c;if(d<=m)return T;if(d>v)return F;if(f)return Math.abs(f)>1?c:(u+c+f)%u}},Br=function(e){return function(r){var n,t=(n=Se(r))===null||n===void 0?void 0:n.autofocus;return r.autofocus||t!==void 0&&t!=="false"||e.indexOf(r)>=0}},Gr=function(e,r,n){var t=e.map(function(a){var o=a.node;return o}),u=ce(t.filter(Br(n)));return u&&u.length?se(u):se(ce(r))},K=function(e,r){return r===void 0&&(r=[]),r.push(e),e.parentNode&&K(e.parentNode.host||e.parentNode,r),r},B=function(e,r){for(var n=K(e),t=K(r),u=0;u<n.length;u+=1){var a=n[u];if(t.indexOf(a)>=0)return a}return!1},Ne=function(e,r,n){var t=_(e),u=_(r),a=t[0],o=!1;return u.filter(Boolean).forEach(function(i){o=B(o||i,i)||o,n.filter(Boolean).forEach(function(d){var s=B(a,d);s&&(!o||x(s,o)?o=s:o=B(s,o))})}),o},Hr=function(e,r){return e.reduce(function(n,t){return n.concat(_r(t,r))},[])},jr=function(e,r){var n=new Map;return r.forEach(function(t){return n.set(t.node,t)}),e.map(function(t){return n.get(t)}).filter(Ir)},qr=function(e,r){var n=P(_(e).length>0?document:ye(e).ownerDocument),t=Z(e).filter(N),u=Ne(n||e,e,t),a=new Map,o=fe(t,a),i=V(t,a).filter(function(v){var b=v.node;return N(b)});if(!(!i[0]&&(i=o,!i[0]))){var d=fe([u],a).map(function(v){var b=v.node;return b}),s=jr(d,i),c=s.map(function(v){var b=v.node;return b}),f=Wr(c,d,n,r);if(f===_e){var m=Gr(o,c,Hr(t,a));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:s[f]}},$r=function(e){var r=Z(e).filter(N),n=Ne(e,e,r),t=new Map,u=V([n],t,!0),a=V(r,t).filter(function(o){var i=o.node;return N(i)}).map(function(o){var i=o.node;return i});return u.map(function(o){var i=o.node,d=o.index;return{node:i,index:d,lockItem:a.indexOf(i)>=0,guard:z(i)}})},Vr=function(e,r){"focus"in e&&e.focus(r),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},G=0,H=!1,ke=function(e,r,n){n===void 0&&(n={});var t=qr(e,r);if(!H&&t){if(G>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),H=!0,setTimeout(function(){H=!1},1);return}G++,Vr(t.node,n.focusOptions),G--}};function re(e){setTimeout(e,1)}var Kr=function(){return document&&document.activeElement===document.body},Qr=function(){return Kr()||Lr()},E=null,O=null,S=null,w=!1,Yr=function(){return!0},zr=function(r){return(E.whiteList||Yr)(r)},Jr=function(r,n){S={observerNode:r,portaledElement:n}},Xr=function(r){return S&&S.portaledElement===r};function le(e,r,n,t){var u=null,a=e;do{var o=t[a];if(o.guard)o.node.dataset.focusAutoGuard&&(u=o);else if(o.lockItem){if(a!==e)return;u=null}else break}while((a+=n)!==r);u&&(u.node.tabIndex=0)}var Zr=function(r){return r&&"current"in r?r.current:r},en=function(r){return r?!!w:w==="meanwhile"},rn=function e(r,n,t){return n&&(n.host===r&&(!n.activeElement||t.contains(n.activeElement))||n.parentNode&&e(r,n.parentNode,t))},nn=function(r,n){return n.some(function(t){return rn(r,t,t)})},k=function(){var r=!1;if(E){var n=E,t=n.observed,u=n.persistentFocus,a=n.autoFocus,o=n.shards,i=n.crossFrame,d=n.focusOptions,s=t||S&&S.portaledElement,c=document&&document.activeElement;if(s){var f=[s].concat(o.map(Zr).filter(Boolean));if((!c||zr(c))&&(u||en(i)||!Qr()||!O&&a)&&(s&&!(Ce(f)||c&&nn(c,f)||Xr(c))&&(document&&!O&&c&&!a?(c.blur&&c.blur(),document.body.focus()):(r=ke(f,O,{focusOptions:d}),S={})),w=!1,O=document&&document.activeElement),document){var m=document&&document.activeElement,v=$r(f),b=v.map(function(h){var g=h.node;return g}).indexOf(m);b>-1&&(v.filter(function(h){var g=h.guard,F=h.node;return g&&F.dataset.focusAutoGuard}).forEach(function(h){var g=h.node;return g.removeAttribute("tabIndex")}),le(b,v.length,1,v),le(b,-1,-1,v))}}}return r},Me=function(r){k()&&r&&(r.stopPropagation(),r.preventDefault())},ne=function(){return re(k)},tn=function(r){var n=r.target,t=r.currentTarget;t.contains(n)||Jr(t,n)},un=function(){return null},De=function(){w="just",re(function(){w="meanwhile"})},an=function(){document.addEventListener("focusin",Me),document.addEventListener("focusout",ne),window.addEventListener("blur",De)},on=function(){document.removeEventListener("focusin",Me),document.removeEventListener("focusout",ne),window.removeEventListener("blur",De)};function cn(e){return e.filter(function(r){var n=r.disabled;return!n})}function fn(e){var r=e.slice(-1)[0];r&&!E&&an();var n=E,t=n&&r&&r.id===n.id;E=r,n&&!t&&(n.onDeactivation(),e.filter(function(u){var a=u.id;return a===n.id}).length||n.returnFocus(!r)),r?(O=null,(!t||n.observed!==r.observed)&&r.onActivation(),k(),re(k)):(on(),O=null)}pe.assignSyncMedium(tn);ge.assignMedium(ne);lr.assignMedium(function(e){return e({moveFocusInside:ke,focusInside:Ce})});const sn=gr(cn,fn)(un);var Q=l.forwardRef(function(r,n){return l.createElement(M,j({sideCar:sn,ref:n},r))}),Le=M.propTypes||{};Le.sideCar;ur(Le,["sideCar"]);Q.propTypes={};var ve,dn=(ve=Q.default)!=null?ve:Q,ln=e=>{const{initialFocusRef:r,finalFocusRef:n,contentRef:t,restoreFocus:u,children:a,isDisabled:o,autoFocus:i,persistentFocus:d,lockFocusAcrossFrames:s}=e,c=l.useCallback(()=>{r!=null&&r.current?r.current.focus():t!=null&&t.current&&nr(t.current).length===0&&requestAnimationFrame(()=>{var b;(b=t.current)==null||b.focus()})},[r,t]),f=l.useCallback(()=>{var v;(v=n==null?void 0:n.current)==null||v.focus()},[n]),m=u&&!n;return tr.jsx(dn,{crossFrame:s,persistentFocus:d,autoFocus:i,disabled:o,onActivation:c,onDeactivation:f,returnFocus:m,children:a})};ln.displayName="FocusLock";export{ln as F,gn as _,$ as a,yn as b,dr as c,sr as u};