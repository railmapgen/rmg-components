import{_ as k,a as N}from"./inheritsLoose-7d8f126b.js";import{r as p}from"./index-61bf1805.js";var E=function(e){var n=e.sideCar,t=k(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,N({},t))};E.isSideCarExport=!0;function U(e,n){return e.useMedium(n),E}var R=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},f=new WeakMap,l=new WeakMap,v={},h=0,W=function(e){return e&&(e.host||W(e.parentNode))},T=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=W(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},M=function(e,n,t,r){var i=T(n,Array.isArray(e)?e:[e]);v[t]||(v[t]=new WeakMap);var u=v[t],d=[],c=new Set,_=new Set(i),w=function(a){!a||c.has(a)||(c.add(a),w(a.parentNode))};i.forEach(w);var S=function(a){!a||_.has(a)||Array.prototype.forEach.call(a.children,function(o){if(c.has(o))S(o);else{var s=o.getAttribute(r),b=s!==null&&s!=="false",x=(f.get(o)||0)+1,A=(u.get(o)||0)+1;f.set(o,x),u.set(o,A),d.push(o),x===1&&b&&l.set(o,!0),A===1&&o.setAttribute(t,"true"),b||o.setAttribute(r,"true")}})};return S(n),c.clear(),h++,function(){d.forEach(function(a){var o=f.get(a)-1,s=u.get(a)-1;f.set(a,o),u.set(a,s),o||(l.has(a)||a.removeAttribute(r),l.delete(a)),s||a.removeAttribute(t)}),h--,h||(f=new WeakMap,f=new WeakMap,l=new WeakMap,v={})}},X=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=n||R(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),M(r,i,t,"aria-hidden")):function(){return null}},g="right-scroll-bar-position",m="width-before-scroll-bar",z="with-scroll-bars-hidden",B="--removed-body-scroll-bar-size",C,D=function(){if(C)return C;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function I(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=D();return n&&e.setAttribute("nonce",n),e}function O(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function j(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var G=function(){var e=0,n=null;return{add:function(t){e==0&&(n=I())&&(O(n,t),j(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},L=function(){var e=G();return function(n,t){p.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},P=function(){var e=L(),n=function(t){var r=t.styles,i=t.dynamic;return e(r,i),null};return n},q={left:0,top:0,right:0,gap:0},y=function(e){return parseInt(e||"",10)||0},H=function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],i=n[e==="padding"?"paddingRight":"marginRight"];return[y(t),y(r),y(i)]},K=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return q;var n=H(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},V=P(),F=function(e,n,t,r){var i=e.left,u=e.top,d=e.right,c=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(z,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(g,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(m,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(g," .").concat(g,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(m," .").concat(m,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(B,": ").concat(c,`px;
  }
`)},Y=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r,u=p.useMemo(function(){return K(i)},[i]);return p.createElement(V,{styles:F(u,!n,i,t?"":"!important")})};export{Y as R,U as e,m as f,X as h,P as s,g as z};
//# sourceMappingURL=component-2a26fadb.js.map
