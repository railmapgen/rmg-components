import{r as p}from"./index-61bf1805.js";function P(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function R(e,t){var n=p.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}function $(e,t){return R(t||null,function(n){return e.forEach(function(r){return P(r,n)})})}var y=function(){return y=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},y.apply(this,arguments)};function N(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function ee(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function C(e){return e}function W(e,t){t===void 0&&(t=C);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var u=t(i,r);return n.push(u),function(){n=n.filter(function(o){return o!==u})}},assignSyncMedium:function(i){for(r=!0;n.length;){var u=n;n=[],u.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){r=!0;var u=[];if(n.length){var o=n;n=[],o.forEach(i),u=n}var m=function(){var s=u;u=[],s.forEach(i)},d=function(){return Promise.resolve().then(m)};d(),n={push:function(s){u.push(s),d()},filter:function(s){return u=u.filter(s),n}}}};return a}function te(e,t){return t===void 0&&(t=C),W(e,t)}function ne(e){e===void 0&&(e={});var t=W(null);return t.options=y({async:!0,ssr:!1},e),t}var j=function(e){var t=e.sideCar,n=N(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,y({},n))};j.isSideCarExport=!0;function re(e,t){return e.useMedium(t),j}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},_(e,t)}function ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_(e,t)}var T=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},l=new WeakMap,h=new WeakMap,g={},b=0,k=function(e){return e&&(e.host||k(e.parentNode))},I=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=k(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},z=function(e,t,n,r){var a=I(t,Array.isArray(e)?e:[e]);g[n]||(g[n]=new WeakMap);var i=g[n],u=[],o=new Set,m=new Set(a),d=function(c){!c||o.has(c)||(o.add(c),d(c.parentNode))};a.forEach(d);var s=function(c){!c||m.has(c)||Array.prototype.forEach.call(c.children,function(f){if(o.has(f))s(f);else{var v=f.getAttribute(r),x=v!==null&&v!=="false",E=(l.get(f)||0)+1,A=(i.get(f)||0)+1;l.set(f,E),i.set(f,A),u.push(f),E===1&&x&&h.set(f,!0),A===1&&f.setAttribute(n,"true"),x||f.setAttribute(r,"true")}})};return s(t),o.clear(),b++,function(){u.forEach(function(c){var f=l.get(c)-1,v=i.get(c)-1;l.set(c,f),i.set(c,v),f||(h.has(c)||c.removeAttribute(r),h.delete(c)),v||c.removeAttribute(n)}),b--,b||(l=new WeakMap,l=new WeakMap,h=new WeakMap,g={})}},ie=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||T(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),z(r,a,n,"aria-hidden")):function(){return null}},w="right-scroll-bar-position",S="width-before-scroll-bar",B="with-scroll-bars-hidden",D="--removed-body-scroll-bar-size",M,L=function(){if(M)return M;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function G(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=L();return t&&e.setAttribute("nonce",t),e}function Q(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function q(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var H=function(){var e=0,t=null;return{add:function(n){e==0&&(t=G())&&(Q(t,n),q(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},K=function(){var e=H();return function(t,n){p.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},V=function(){var e=K(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},F={left:0,top:0,right:0,gap:0},O=function(e){return parseInt(e||"",10)||0},J=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[O(n),O(r),O(a)]},U=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return F;var t=J(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},X=V(),Y=function(e,t,n,r){var a=e.left,i=e.top,u=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(B,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(w,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(S,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(w," .").concat(w,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(S," .").concat(S,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(D,": ").concat(o,`px;
  }
`)},oe=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,i=p.useMemo(function(){return U(a)},[a]);return p.createElement(X,{styles:Y(i,!t,a,n?"":"!important")})};export{oe as R,ae as _,ne as a,N as b,te as c,y as d,ee as e,S as f,re as g,ie as h,_ as i,V as s,$ as u,w as z};
//# sourceMappingURL=component-2e3c33c8.js.map
