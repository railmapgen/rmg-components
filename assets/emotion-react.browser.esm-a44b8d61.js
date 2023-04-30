import{r as _}from"./index-f1f749bf.js";import{A as T,B as F,D as I,E as k}from"./chunk-QEVFQ4EU-efd3d6a4.js";import{a as w}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";var h={},z={get exports(){return h},set exports(e){h=e}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,x=o?Symbol.for("react.element"):60103,C=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,y=o?Symbol.for("react.strict_mode"):60108,m=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,E=o?Symbol.for("react.async_mode"):60111,S=o?Symbol.for("react.concurrent_mode"):60111,b=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,O=o?Symbol.for("react.suspense_list"):60120,$=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,j=o?Symbol.for("react.block"):60121,L=o?Symbol.for("react.fundamental"):60117,q=o?Symbol.for("react.responder"):60118,D=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case x:switch(e=e.type,e){case E:case S:case c:case m:case y:case v:return e;default:switch(e=e&&e.$$typeof,e){case d:case b:case g:case $:case p:return e;default:return r}}case C:return r}}}function A(e){return n(e)===S}t.AsyncMode=E;t.ConcurrentMode=S;t.ContextConsumer=d;t.ContextProvider=p;t.Element=x;t.ForwardRef=b;t.Fragment=c;t.Lazy=g;t.Memo=$;t.Portal=C;t.Profiler=m;t.StrictMode=y;t.Suspense=v;t.isAsyncMode=function(e){return A(e)||n(e)===E};t.isConcurrentMode=A;t.isContextConsumer=function(e){return n(e)===d};t.isContextProvider=function(e){return n(e)===p};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===x};t.isForwardRef=function(e){return n(e)===b};t.isFragment=function(e){return n(e)===c};t.isLazy=function(e){return n(e)===g};t.isMemo=function(e){return n(e)===$};t.isPortal=function(e){return n(e)===C};t.isProfiler=function(e){return n(e)===m};t.isStrictMode=function(e){return n(e)===y};t.isSuspense=function(e){return n(e)===v};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===c||e===S||e===m||e===y||e===v||e===O||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===$||e.$$typeof===p||e.$$typeof===d||e.$$typeof===b||e.$$typeof===L||e.$$typeof===q||e.$$typeof===D||e.$$typeof===j)};t.typeOf=n;(function(e){e.exports=t})(z);var P=h,G={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},N={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[P.ForwardRef]=G;R[P.Memo]=N;var H=F(function(e,r){var f=e.styles,i=T([f],void 0,_.useContext(I)),M=_.useRef();return w(function(){var u=r.key+"-global",s=new r.sheet.constructor({key:u,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),l=!1,a=document.querySelector('style[data-emotion="'+u+" "+i.name+'"]');return r.sheet.tags.length&&(s.before=r.sheet.tags[0]),a!==null&&(l=!0,a.setAttribute("data-emotion",u),s.hydrate([a])),M.current=[s,l],function(){s.flush()}},[r]),w(function(){var u=M.current,s=u[0],l=u[1];if(l){u[1]=!1;return}if(i.next!==void 0&&k(r,i.next,!0),s.tags.length){var a=s.tags[s.tags.length-1].nextElementSibling;s.before=a,s.flush()}r.insert("",i,s,!1)},[r,i.name]),null});function W(){for(var e=arguments.length,r=new Array(e),f=0;f<e;f++)r[f]=arguments[f];return T(r)}var J=function(){var r=W.apply(void 0,arguments),f="animation-"+r.name;return{name:f,styles:"@keyframes "+f+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};export{H as G,J as k};
//# sourceMappingURL=emotion-react.browser.esm-a44b8d61.js.map
