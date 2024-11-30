import{j as Ae}from"./jsx-runtime-D_3pcrNB.js";import{r as h}from"./index-YTOF1_EJ.js";import{m as fe}from"./use-merge-refs-CDN4nSPx.js";import{u as Ve}from"./use-callback-ref-DWfjZ6Ol.js";import{a as jt,b as $t}from"./owner-Gy7R3qQx.js";import{u as Ft}from"./use-safe-layout-effect-CW26zb7A.js";import{u as gt}from"./use-update-effect-BBuVyHsC.js";import{g as Lt,i as Mt,a as ot}from"./focusable-crJ8ziAt.js";import{u as Wt}from"./use-outside-click-Cuk0WFGe.js";import{c as J,a as Ht}from"./call-all-DDzecCnU.js";import{b as It,j as zt,r as Vt,c as yt,f as bt}from"./use-style-config-CZvBo0tQ.js";import{o as Nt,c as qt}from"./theming-props-BSFQkWYI.js";import{c as wt}from"./context-CXQEnuw_.js";import{m as Ut}from"./proxy-sAlfivGQ.js";import{d as Xt}from"./define-styles-BSAHv3yx.js";function Yt(e){const{wasSelected:t,enabled:r,isSelected:o,mode:n="unmount"}=e;return!!(!r||o||n==="keepMounted"&&t)}function Ue(e,t,r,o){const n=Ve(r);return h.useEffect(()=>{const a=typeof e=="function"?e():e??document;if(!(!r||!a))return a.addEventListener(t,n,o),()=>{a.removeEventListener(t,n,o)}},[t,e,o,n,r]),()=>{const a=typeof e=="function"?e():e??document;a==null||a.removeEventListener(t,n,o)}}function Kt(e){const{isOpen:t,ref:r}=e,[o,n]=h.useState(t),[a,u]=h.useState(!1);return h.useEffect(()=>{a||(n(t),u(!0))},[t,a,o]),Ue(()=>r.current,"animationend",()=>{n(t)}),{present:!(t?!1:!o),onComplete(){var c;const s=jt(r.current),f=new s.CustomEvent("animationend",{bubbles:!0});(c=r.current)==null||c.dispatchEvent(f)}}}function Gt(e={}){const{onClose:t,onOpen:r,isOpen:o,id:n}=e,a=Ve(r),u=Ve(t),[i,s]=h.useState(e.defaultIsOpen||!1),f=o!==void 0?o:i,c=o!==void 0,p=h.useId(),g=n??`disclosure-${p}`,v=h.useCallback(()=>{c||s(!1),u==null||u()},[c,u]),P=h.useCallback(()=>{c||s(!0),a==null||a()},[c,a]),y=h.useCallback(()=>{f?v():P()},[f,P,v]);function l(w={}){return{...w,"aria-expanded":f,"aria-controls":g,onClick(E){var m;(m=w.onClick)==null||m.call(w,E),y()}}}function b(w={}){return{...w,hidden:!f,id:g}}return{isOpen:f,onOpen:P,onClose:v,onToggle:y,isControlled:c,getButtonProps:l,getDisclosureProps:b}}function Jt(e){const t=e.current;if(!t)return!1;const r=$t(t);return!r||t.contains(r)?!1:!!Mt(r)}function Qt(e,t){const{shouldFocus:r,visible:o,focusRef:n}=t,a=r&&!o;gt(()=>{if(!a||Jt(e))return;const u=(n==null?void 0:n.current)||e.current;let i;if(u)return i=requestAnimationFrame(()=>{u.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(i)}},[a,e,n])}const Zt={preventScroll:!0,shouldFocus:!1};function _t(e,t=Zt){const{focusRef:r,preventScroll:o,shouldFocus:n,visible:a}=t,u=er(e)?e.current:e,i=n&&a,s=h.useRef(i),f=h.useRef(a);Ft(()=>{!f.current&&a&&(s.current=i),f.current=a},[a,i]);const c=h.useCallback(()=>{if(!(!a||!u||!s.current)&&(s.current=!1,!u.contains(document.activeElement)))if(r!=null&&r.current)requestAnimationFrame(()=>{var p;(p=r.current)==null||p.focus({preventScroll:o})});else{const p=Lt(u);p.length>0&&requestAnimationFrame(()=>{p[0].focus({preventScroll:o})})}},[a,o,u,r]);gt(()=>{c()},[c]),Ue(u,"transitionend",c)}function er(e){return"current"in e}function tr(e){return"current"in e}const xt=()=>typeof window<"u";function rr(){const e=navigator.userAgentData;return(e==null?void 0:e.platform)??navigator.platform}const or=e=>xt()&&e.test(navigator.vendor),nr=e=>xt()&&e.test(rr()),ar=()=>nr(/mac|iphone|ipad|ipod/i),ir=()=>ar()&&or(/apple/i);function sr(e){const{ref:t,elements:r,enabled:o}=e,n=()=>{var a;return((a=t.current)==null?void 0:a.ownerDocument)??document};Ue(n,"pointerdown",a=>{var f,c;if(!ir()||!o)return;const u=((c=(f=a.composedPath)==null?void 0:f.call(a))==null?void 0:c[0])??a.target,s=(r??[t]).some(p=>{const g=tr(p)?p.current:p;return(g==null?void 0:g.contains(u))||g===u});n().activeElement!==u&&s&&(a.preventDefault(),u.focus())})}var W="top",N="bottom",q="right",H="left",Xe="auto",De=[W,N,q,H],he="start",Se="end",cr="clippingParents",Ot="viewport",Ce="popper",ur="reference",nt=De.reduce(function(e,t){return e.concat([t+"-"+he,t+"-"+Se])},[]),Pt=[].concat(De,[Xe]).reduce(function(e,t){return e.concat([t,t+"-"+he,t+"-"+Se])},[]),fr="beforeRead",lr="read",pr="afterRead",dr="beforeMain",vr="main",mr="afterMain",hr="beforeWrite",gr="write",yr="afterWrite",br=[fr,lr,pr,dr,vr,mr,hr,gr,yr];function Z(e){return e?(e.nodeName||"").toLowerCase():null}function I(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function pe(e){var t=I(e).Element;return e instanceof t||e instanceof Element}function V(e){var t=I(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ye(e){if(typeof ShadowRoot>"u")return!1;var t=I(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function wr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!V(a)||!Z(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(u){var i=n[u];i===!1?a.removeAttribute(u):a.setAttribute(u,i===!0?"":i)}))})}function xr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},u=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),i=u.reduce(function(s,f){return s[f]="",s},{});!V(n)||!Z(n)||(Object.assign(n.style,i),Object.keys(a).forEach(function(s){n.removeAttribute(s)}))})}}const Or={name:"applyStyles",enabled:!0,phase:"write",fn:wr,effect:xr,requires:["computeStyles"]};function Q(e){return e.split("-")[0]}var le=Math.max,Me=Math.min,ge=Math.round;function Ne(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Ct(){return!/^((?!chrome|android).)*safari/i.test(Ne())}function ye(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&V(e)&&(n=e.offsetWidth>0&&ge(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ge(o.height)/e.offsetHeight||1);var u=pe(e)?I(e):window,i=u.visualViewport,s=!Ct()&&r,f=(o.left+(s&&i?i.offsetLeft:0))/n,c=(o.top+(s&&i?i.offsetTop:0))/a,p=o.width/n,g=o.height/a;return{width:p,height:g,top:c,right:f+p,bottom:c+g,left:f,x:f,y:c}}function Ke(e){var t=ye(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function Et(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ye(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function re(e){return I(e).getComputedStyle(e)}function Pr(e){return["table","td","th"].indexOf(Z(e))>=0}function ie(e){return((pe(e)?e.ownerDocument:e.document)||window.document).documentElement}function We(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(Ye(e)?e.host:null)||ie(e)}function at(e){return!V(e)||re(e).position==="fixed"?null:e.offsetParent}function Cr(e){var t=/firefox/i.test(Ne()),r=/Trident/i.test(Ne());if(r&&V(e)){var o=re(e);if(o.position==="fixed")return null}var n=We(e);for(Ye(n)&&(n=n.host);V(n)&&["html","body"].indexOf(Z(n))<0;){var a=re(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function Te(e){for(var t=I(e),r=at(e);r&&Pr(r)&&re(r).position==="static";)r=at(r);return r&&(Z(r)==="html"||Z(r)==="body"&&re(r).position==="static")?t:r||Cr(e)||t}function Ge(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ee(e,t,r){return le(e,Me(t,r))}function Er(e,t,r){var o=Ee(e,t,r);return o>r?r:o}function Rt(){return{top:0,right:0,bottom:0,left:0}}function At(e){return Object.assign({},Rt(),e)}function St(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Rr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,At(typeof t!="number"?t:St(t,De))};function Ar(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,u=r.modifiersData.popperOffsets,i=Q(r.placement),s=Ge(i),f=[H,q].indexOf(i)>=0,c=f?"height":"width";if(!(!a||!u)){var p=Rr(n.padding,r),g=Ke(a),v=s==="y"?W:H,P=s==="y"?N:q,y=r.rects.reference[c]+r.rects.reference[s]-u[s]-r.rects.popper[c],l=u[s]-r.rects.reference[s],b=Te(a),w=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,E=y/2-l/2,m=p[v],C=w-g[c]-p[P],x=w/2-g[c]/2+E,R=Ee(m,x,C),A=s;r.modifiersData[o]=(t={},t[A]=R,t.centerOffset=R-x,t)}}function Sr(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||Et(t.elements.popper,n)&&(t.elements.arrow=n))}const kr={name:"arrow",enabled:!0,phase:"main",fn:Ar,effect:Sr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function be(e){return e.split("-")[1]}var Dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Tr(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:ge(r*n)/n||0,y:ge(o*n)/n||0}}function it(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,u=e.offsets,i=e.position,s=e.gpuAcceleration,f=e.adaptive,c=e.roundOffsets,p=e.isFixed,g=u.x,v=g===void 0?0:g,P=u.y,y=P===void 0?0:P,l=typeof c=="function"?c({x:v,y}):{x:v,y};v=l.x,y=l.y;var b=u.hasOwnProperty("x"),w=u.hasOwnProperty("y"),E=H,m=W,C=window;if(f){var x=Te(r),R="clientHeight",A="clientWidth";if(x===I(r)&&(x=ie(r),re(x).position!=="static"&&i==="absolute"&&(R="scrollHeight",A="scrollWidth")),x=x,n===W||(n===H||n===q)&&a===Se){m=N;var k=p&&x===C&&C.visualViewport?C.visualViewport.height:x[R];y-=k-o.height,y*=s?1:-1}if(n===H||(n===W||n===N)&&a===Se){E=q;var d=p&&x===C&&C.visualViewport?C.visualViewport.width:x[A];v-=d-o.width,v*=s?1:-1}}var S=Object.assign({position:i},f&&Dr),L=c===!0?Tr({x:v,y},I(r)):{x:v,y};if(v=L.x,y=L.y,s){var B;return Object.assign({},S,(B={},B[m]=w?"0":"",B[E]=b?"0":"",B.transform=(C.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",B))}return Object.assign({},S,(t={},t[m]=w?y+"px":"",t[E]=b?v+"px":"",t.transform="",t))}function Br(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,u=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,f={placement:Q(t.placement),variation:be(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,it(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:u,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,it(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const jr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Br,data:{}};var $e={passive:!0};function $r(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,u=o.resize,i=u===void 0?!0:u,s=I(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach(function(c){c.addEventListener("scroll",r.update,$e)}),i&&s.addEventListener("resize",r.update,$e),function(){a&&f.forEach(function(c){c.removeEventListener("scroll",r.update,$e)}),i&&s.removeEventListener("resize",r.update,$e)}}const Fr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:$r,data:{}};var Lr={left:"right",right:"left",bottom:"top",top:"bottom"};function Le(e){return e.replace(/left|right|bottom|top/g,function(t){return Lr[t]})}var Mr={start:"end",end:"start"};function st(e){return e.replace(/start|end/g,function(t){return Mr[t]})}function Je(e){var t=I(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Qe(e){return ye(ie(e)).left+Je(e).scrollLeft}function Wr(e,t){var r=I(e),o=ie(e),n=r.visualViewport,a=o.clientWidth,u=o.clientHeight,i=0,s=0;if(n){a=n.width,u=n.height;var f=Ct();(f||!f&&t==="fixed")&&(i=n.offsetLeft,s=n.offsetTop)}return{width:a,height:u,x:i+Qe(e),y:s}}function Hr(e){var t,r=ie(e),o=Je(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=le(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),u=le(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-o.scrollLeft+Qe(e),s=-o.scrollTop;return re(n||r).direction==="rtl"&&(i+=le(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:u,x:i,y:s}}function Ze(e){var t=re(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function kt(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:V(e)&&Ze(e)?e:kt(We(e))}function Re(e,t){var r;t===void 0&&(t=[]);var o=kt(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=I(o),u=n?[a].concat(a.visualViewport||[],Ze(o)?o:[]):o,i=t.concat(u);return n?i:i.concat(Re(We(u)))}function qe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ir(e,t){var r=ye(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function ct(e,t,r){return t===Ot?qe(Wr(e,r)):pe(t)?Ir(t,r):qe(Hr(ie(e)))}function zr(e){var t=Re(We(e)),r=["absolute","fixed"].indexOf(re(e).position)>=0,o=r&&V(e)?Te(e):e;return pe(o)?t.filter(function(n){return pe(n)&&Et(n,o)&&Z(n)!=="body"}):[]}function Vr(e,t,r,o){var n=t==="clippingParents"?zr(e):[].concat(t),a=[].concat(n,[r]),u=a[0],i=a.reduce(function(s,f){var c=ct(e,f,o);return s.top=le(c.top,s.top),s.right=Me(c.right,s.right),s.bottom=Me(c.bottom,s.bottom),s.left=le(c.left,s.left),s},ct(e,u,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Dt(e){var t=e.reference,r=e.element,o=e.placement,n=o?Q(o):null,a=o?be(o):null,u=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(n){case W:s={x:u,y:t.y-r.height};break;case N:s={x:u,y:t.y+t.height};break;case q:s={x:t.x+t.width,y:i};break;case H:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var f=n?Ge(n):null;if(f!=null){var c=f==="y"?"height":"width";switch(a){case he:s[f]=s[f]-(t[c]/2-r[c]/2);break;case Se:s[f]=s[f]+(t[c]/2-r[c]/2);break}}return s}function ke(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,u=a===void 0?e.strategy:a,i=r.boundary,s=i===void 0?cr:i,f=r.rootBoundary,c=f===void 0?Ot:f,p=r.elementContext,g=p===void 0?Ce:p,v=r.altBoundary,P=v===void 0?!1:v,y=r.padding,l=y===void 0?0:y,b=At(typeof l!="number"?l:St(l,De)),w=g===Ce?ur:Ce,E=e.rects.popper,m=e.elements[P?w:g],C=Vr(pe(m)?m:m.contextElement||ie(e.elements.popper),s,c,u),x=ye(e.elements.reference),R=Dt({reference:x,element:E,strategy:"absolute",placement:n}),A=qe(Object.assign({},E,R)),k=g===Ce?A:x,d={top:C.top-k.top+b.top,bottom:k.bottom-C.bottom+b.bottom,left:C.left-k.left+b.left,right:k.right-C.right+b.right},S=e.modifiersData.offset;if(g===Ce&&S){var L=S[n];Object.keys(d).forEach(function(B){var Y=[q,N].indexOf(B)>=0?1:-1,K=[W,N].indexOf(B)>=0?"y":"x";d[B]+=L[K]*Y})}return d}function Nr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,u=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?Pt:s,c=be(o),p=c?i?nt:nt.filter(function(P){return be(P)===c}):De,g=p.filter(function(P){return f.indexOf(P)>=0});g.length===0&&(g=p);var v=g.reduce(function(P,y){return P[y]=ke(e,{placement:y,boundary:n,rootBoundary:a,padding:u})[Q(y)],P},{});return Object.keys(v).sort(function(P,y){return v[P]-v[y]})}function qr(e){if(Q(e)===Xe)return[];var t=Le(e);return[st(e),t,st(t)]}function Ur(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,u=r.altAxis,i=u===void 0?!0:u,s=r.fallbackPlacements,f=r.padding,c=r.boundary,p=r.rootBoundary,g=r.altBoundary,v=r.flipVariations,P=v===void 0?!0:v,y=r.allowedAutoPlacements,l=t.options.placement,b=Q(l),w=b===l,E=s||(w||!P?[Le(l)]:qr(l)),m=[l].concat(E).reduce(function(ne,G){return ne.concat(Q(G)===Xe?Nr(t,{placement:G,boundary:c,rootBoundary:p,padding:f,flipVariations:P,allowedAutoPlacements:y}):G)},[]),C=t.rects.reference,x=t.rects.popper,R=new Map,A=!0,k=m[0],d=0;d<m.length;d++){var S=m[d],L=Q(S),B=be(S)===he,Y=[W,N].indexOf(L)>=0,K=Y?"width":"height",j=ke(t,{placement:S,boundary:c,rootBoundary:p,altBoundary:g,padding:f}),M=Y?B?q:H:B?N:W;C[K]>x[K]&&(M=Le(M));var _=Le(M),z=[];if(a&&z.push(j[L]<=0),i&&z.push(j[M]<=0,j[_]<=0),z.every(function(ne){return ne})){k=S,A=!1;break}R.set(S,z)}if(A)for(var ee=P?3:1,oe=function(G){var ae=m.find(function(ue){var te=R.get(ue);if(te)return te.slice(0,G).every(function(we){return we})});if(ae)return k=ae,"break"},se=ee;se>0;se--){var ce=oe(se);if(ce==="break")break}t.placement!==k&&(t.modifiersData[o]._skip=!0,t.placement=k,t.reset=!0)}}const Xr={name:"flip",enabled:!0,phase:"main",fn:Ur,requiresIfExists:["offset"],data:{_skip:!1}};function ut(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ft(e){return[W,q,N,H].some(function(t){return e[t]>=0})}function Yr(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,u=ke(t,{elementContext:"reference"}),i=ke(t,{altBoundary:!0}),s=ut(u,o),f=ut(i,n,a),c=ft(s),p=ft(f);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}const Kr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Yr};function Gr(e,t,r){var o=Q(e),n=[H,W].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,u=a[0],i=a[1];return u=u||0,i=(i||0)*n,[H,q].indexOf(o)>=0?{x:i,y:u}:{x:u,y:i}}function Jr(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,u=Pt.reduce(function(c,p){return c[p]=Gr(p,t.rects,a),c},{}),i=u[t.placement],s=i.x,f=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=u}const Qr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Jr};function Zr(e){var t=e.state,r=e.name;t.modifiersData[r]=Dt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const _r={name:"popperOffsets",enabled:!0,phase:"read",fn:Zr,data:{}};function eo(e){return e==="x"?"y":"x"}function to(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,u=r.altAxis,i=u===void 0?!1:u,s=r.boundary,f=r.rootBoundary,c=r.altBoundary,p=r.padding,g=r.tether,v=g===void 0?!0:g,P=r.tetherOffset,y=P===void 0?0:P,l=ke(t,{boundary:s,rootBoundary:f,padding:p,altBoundary:c}),b=Q(t.placement),w=be(t.placement),E=!w,m=Ge(b),C=eo(m),x=t.modifiersData.popperOffsets,R=t.rects.reference,A=t.rects.popper,k=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,d=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(x){if(a){var B,Y=m==="y"?W:H,K=m==="y"?N:q,j=m==="y"?"height":"width",M=x[m],_=M+l[Y],z=M-l[K],ee=v?-A[j]/2:0,oe=w===he?R[j]:A[j],se=w===he?-A[j]:-R[j],ce=t.elements.arrow,ne=v&&ce?Ke(ce):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Rt(),ae=G[Y],ue=G[K],te=Ee(0,R[j],ne[j]),we=E?R[j]/2-ee-te-ae-d.mainAxis:oe-te-ae-d.mainAxis,He=E?-R[j]/2+ee+te+ue+d.mainAxis:se+te+ue+d.mainAxis,U=t.elements.arrow&&Te(t.elements.arrow),xe=U?m==="y"?U.clientTop||0:U.clientLeft||0:0,Oe=(B=S==null?void 0:S[m])!=null?B:0,Ie=M+we-Oe-xe,ze=M+He-Oe,Be=Ee(v?Me(_,Ie):_,M,v?le(z,ze):z);x[m]=Be,L[m]=Be-M}if(i){var O,$=m==="x"?W:H,D=m==="x"?N:q,T=x[C],X=C==="y"?"height":"width",de=T+l[$],je=T-l[D],Pe=[W,H].indexOf(b)!==-1,_e=(O=S==null?void 0:S[C])!=null?O:0,et=Pe?de:T-R[X]-A[X]-_e+d.altAxis,tt=Pe?T+R[X]+A[X]-_e-d.altAxis:je,rt=v&&Pe?Er(et,T,tt):Ee(v?et:de,T,v?tt:je);x[C]=rt,L[C]=rt-T}t.modifiersData[o]=L}}const ro={name:"preventOverflow",enabled:!0,phase:"main",fn:to,requiresIfExists:["offset"]};function oo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function no(e){return e===I(e)||!V(e)?Je(e):oo(e)}function ao(e){var t=e.getBoundingClientRect(),r=ge(t.width)/e.offsetWidth||1,o=ge(t.height)/e.offsetHeight||1;return r!==1||o!==1}function io(e,t,r){r===void 0&&(r=!1);var o=V(t),n=V(t)&&ao(t),a=ie(t),u=ye(e,n,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((Z(t)!=="body"||Ze(a))&&(i=no(t)),V(t)?(s=ye(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=Qe(a))),{x:u.left+i.scrollLeft-s.x,y:u.top+i.scrollTop-s.y,width:u.width,height:u.height}}function so(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var u=[].concat(a.requires||[],a.requiresIfExists||[]);u.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&n(s)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function co(e){var t=so(e);return br.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function uo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function fo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var lt={placement:"bottom",modifiers:[],strategy:"absolute"};function pt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function lo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?lt:n;return function(i,s,f){f===void 0&&(f=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},lt,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},p=[],g=!1,v={state:c,setOptions:function(b){var w=typeof b=="function"?b(c.options):b;y(),c.options=Object.assign({},a,c.options,w),c.scrollParents={reference:pe(i)?Re(i):i.contextElement?Re(i.contextElement):[],popper:Re(s)};var E=co(fo([].concat(o,c.options.modifiers)));return c.orderedModifiers=E.filter(function(m){return m.enabled}),P(),v.update()},forceUpdate:function(){if(!g){var b=c.elements,w=b.reference,E=b.popper;if(pt(w,E)){c.rects={reference:io(w,Te(E),c.options.strategy==="fixed"),popper:Ke(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(d){return c.modifiersData[d.name]=Object.assign({},d.data)});for(var m=0;m<c.orderedModifiers.length;m++){if(c.reset===!0){c.reset=!1,m=-1;continue}var C=c.orderedModifiers[m],x=C.fn,R=C.options,A=R===void 0?{}:R,k=C.name;typeof x=="function"&&(c=x({state:c,options:A,name:k,instance:v})||c)}}}},update:uo(function(){return new Promise(function(l){v.forceUpdate(),l(c)})}),destroy:function(){y(),g=!0}};if(!pt(i,s))return v;v.setOptions(f).then(function(l){!g&&f.onFirstUpdate&&f.onFirstUpdate(l)});function P(){c.orderedModifiers.forEach(function(l){var b=l.name,w=l.options,E=w===void 0?{}:w,m=l.effect;if(typeof m=="function"){var C=m({state:c,name:b,instance:v,options:E}),x=function(){};p.push(C||x)}})}function y(){p.forEach(function(l){return l()}),p=[]}return v}}var po=[Fr,_r,jr,Or,Qr,Xr,ro,kr,Kr],vo=lo({defaultModifiers:po});const ve=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),F={arrowShadowColor:ve("--popper-arrow-shadow-color"),arrowSize:ve("--popper-arrow-size","8px"),arrowSizeHalf:ve("--popper-arrow-size-half"),arrowBg:ve("--popper-arrow-bg"),transformOrigin:ve("--popper-transform-origin"),arrowOffset:ve("--popper-arrow-offset")};function mo(e){if(e.includes("top"))return"1px 1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 0px 0 var(--popper-arrow-shadow-color)"}const ho={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},go=e=>ho[e],dt={scroll:!0,resize:!0};function yo(e){let t;return typeof e=="object"?t={enabled:!0,options:{...dt,...e}}:t={enabled:e,options:dt},t}const bo={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},wo={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{vt(e)},effect:({state:e})=>()=>{vt(e)}},vt=e=>{e.elements.popper.style.setProperty(F.transformOrigin.var,go(e.placement))},xo={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{Oo(e)}},Oo=e=>{var r;if(!e.placement)return;const t=Po(e.placement);if((r=e.elements)!=null&&r.arrow&&t){Object.assign(e.elements.arrow.style,{[t.property]:t.value,width:F.arrowSize.varRef,height:F.arrowSize.varRef,zIndex:-1});const o={[F.arrowSizeHalf.var]:`calc(${F.arrowSize.varRef} / 2 - 1px)`,[F.arrowOffset.var]:`calc(${F.arrowSizeHalf.varRef} * -1)`};for(const n in o)e.elements.arrow.style.setProperty(n,o[n])}},Po=e=>{if(e.startsWith("top"))return{property:"bottom",value:F.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:F.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:F.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:F.arrowOffset.varRef}},Co={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{mt(e)},effect:({state:e})=>()=>{mt(e)}},mt=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;const r=mo(e.placement);r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:F.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},Eo={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},Ro={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function Ao(e,t="ltr"){var o;const r=((o=Eo[e])==null?void 0:o[t])||e;return t==="ltr"?r:Ro[e]??r}function So(e={}){const{enabled:t=!0,modifiers:r,placement:o="bottom",strategy:n="absolute",arrowPadding:a=8,eventListeners:u=!0,offset:i,gutter:s=8,flip:f=!0,boundary:c="clippingParents",preventOverflow:p=!0,matchWidth:g,direction:v="ltr"}=e,P=h.useRef(null),y=h.useRef(null),l=h.useRef(null),b=Ao(o,v),w=h.useRef(()=>{}),E=h.useCallback(()=>{var d;!t||!P.current||!y.current||((d=w.current)==null||d.call(w),l.current=vo(P.current,y.current,{placement:b,modifiers:[Co,xo,wo,{...bo,enabled:!!g},{name:"eventListeners",...yo(u)},{name:"arrow",options:{padding:a}},{name:"offset",options:{offset:i??[0,s]}},{name:"flip",enabled:!!f,options:{padding:8}},{name:"preventOverflow",enabled:!!p,options:{boundary:c}},...r??[]],strategy:n}),l.current.forceUpdate(),w.current=l.current.destroy)},[b,t,r,g,u,a,i,s,f,p,c,n]);h.useEffect(()=>()=>{var d;!P.current&&!y.current&&((d=l.current)==null||d.destroy(),l.current=null)},[]);const m=h.useCallback(d=>{P.current=d,E()},[E]),C=h.useCallback((d={},S=null)=>({...d,ref:fe(m,S)}),[m]),x=h.useCallback(d=>{y.current=d,E()},[E]),R=h.useCallback((d={},S=null)=>({...d,ref:fe(x,S),style:{...d.style,position:n,minWidth:g?void 0:"max-content",inset:"0 auto auto 0"}}),[n,x,g]),A=h.useCallback((d={},S=null)=>{const{size:L,shadowColor:B,bg:Y,style:K,...j}=d;return{...j,ref:S,"data-popper-arrow":"",style:ko(d)}},[]),k=h.useCallback((d={},S=null)=>({...d,ref:S,"data-popper-arrow-inner":""}),[]);return{update(){var d;(d=l.current)==null||d.update()},forceUpdate(){var d;(d=l.current)==null||d.forceUpdate()},transformOrigin:F.transformOrigin.varRef,referenceRef:m,popperRef:x,getPopperProps:R,getArrowProps:A,getArrowInnerProps:k,getReferenceProps:C}}function ko(e){const{size:t,shadowColor:r,bg:o,style:n}=e,a={...n,position:"absolute"};return t&&(a["--popper-arrow-size"]=t),r&&(a["--popper-arrow-shadow-color"]=r),o&&(a["--popper-arrow-bg"]=o),a}const[Do,Tt]=wt({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[To,Bo]=wt({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),me={click:"click",hover:"hover"};function jo(e={}){const{closeOnBlur:t=!0,closeOnEsc:r=!0,initialFocusRef:o,id:n,returnFocusOnClose:a=!0,autoFocus:u=!0,arrowSize:i,arrowShadowColor:s,trigger:f=me.click,openDelay:c=200,closeDelay:p=200,isLazy:g,lazyBehavior:v="unmount",computePositionOnMount:P,...y}=e,{isOpen:l,onClose:b,onOpen:w,onToggle:E}=Gt(e),[m,C]=h.useState(a);h.useEffect(()=>C(a),[a]);const x=h.useRef(null),R=h.useRef(null),A=h.useRef(null),k=h.useRef(!1),d=h.useRef(!1);l&&(d.current=!0);const[S,L]=h.useState(!1),[B,Y]=h.useState(!1),K=h.useId(),j=n??K,[M,_,z,ee]=["popover-trigger","popover-content","popover-header","popover-body"].map(O=>`${O}-${j}`),{referenceRef:oe,getArrowProps:se,getPopperProps:ce,getArrowInnerProps:ne,forceUpdate:G}=So({...y,enabled:l||!!P}),ae=Kt({isOpen:l,ref:A});sr({enabled:l,ref:R}),Qt(A,{focusRef:R,visible:l,shouldFocus:m&&f===me.click}),_t(A,{focusRef:o,visible:l,shouldFocus:u&&f===me.click}),Wt({enabled:l&&t,ref:A,handler(O){var D;const $=((D=O.composedPath)==null?void 0:D.call(O)[0])??[O.target];Fe(R.current,$)||($&&C(!ot($)),b())}});const ue=Yt({wasSelected:d.current,enabled:g,mode:v,isSelected:ae.present}),te=h.useCallback((O={},$=null)=>{const D={...O,style:{...O.style,transformOrigin:F.transformOrigin.varRef,[F.arrowSize.var]:i?`${i}px`:void 0,[F.arrowShadowColor.var]:s},ref:fe(A,$),children:ue?O.children:null,id:_,tabIndex:-1,role:"dialog",onKeyDown:J(O.onKeyDown,T=>{T.nativeEvent.isComposing||r&&T.key==="Escape"&&(T.preventDefault(),T.stopPropagation(),b())}),onBlur:J(O.onBlur,T=>{const X=ht(T),de=Fe(A.current,X),je=Fe(R.current,X),Pe=!de&&!je;X&&C(!ot(X)),l&&t&&Pe&&b()}),"aria-labelledby":S?z:void 0,"aria-describedby":B?ee:void 0};return f===me.hover&&(D.role="tooltip",D.onMouseEnter=J(O.onMouseEnter,()=>{k.current=!0}),D.onMouseLeave=J(O.onMouseLeave,T=>{T.nativeEvent.relatedTarget!==null&&(k.current=!1,setTimeout(()=>b(),p))})),D},[ue,_,S,z,B,ee,f,r,b,l,t,p,s,i]),we=h.useCallback((O={},$=null)=>ce({...O,style:{visibility:l?"visible":"hidden",...O.style}},$),[l,ce]),He=h.useCallback((O,$=null)=>({...O,ref:fe($,x,oe)}),[x,oe]),U=h.useRef(),xe=h.useRef(),Oe=h.useCallback(O=>{x.current==null&&oe(O)},[oe]),Ie=h.useCallback((O={},$=null)=>{const D={...O,ref:fe(R,$,Oe),id:M,"aria-haspopup":"dialog","aria-expanded":l,"aria-controls":_};return f===me.click&&(D.onClick=J(O.onClick,E)),f===me.hover&&(D.onFocus=J(O.onFocus,()=>{U.current===void 0&&w()}),D.onBlur=J(O.onBlur,T=>{const X=ht(T),de=!Fe(A.current,X);l&&t&&de&&b()}),D.onKeyDown=J(O.onKeyDown,T=>{T.key==="Escape"&&b()}),D.onMouseEnter=J(O.onMouseEnter,()=>{k.current=!0,U.current=window.setTimeout(()=>w(),c)}),D.onMouseLeave=J(O.onMouseLeave,()=>{k.current=!1,U.current&&(clearTimeout(U.current),U.current=void 0),xe.current=window.setTimeout(()=>{k.current===!1&&b()},p)})),D},[M,l,_,f,Oe,E,w,t,b,c,p]);h.useEffect(()=>()=>{U.current&&clearTimeout(U.current),xe.current&&clearTimeout(xe.current)},[]);const ze=h.useCallback((O={},$=null)=>({...O,id:z,ref:fe($,D=>{L(!!D)})}),[z]),Be=h.useCallback((O={},$=null)=>({...O,id:ee,ref:fe($,D=>{Y(!!D)})}),[ee]);return{forceUpdate:G,isOpen:l,onAnimationComplete:ae.onComplete,onClose:b,getAnchorProps:He,getArrowProps:se,getArrowInnerProps:ne,getPopoverPositionerProps:we,getPopoverProps:te,getTriggerProps:Ie,getHeaderProps:ze,getBodyProps:Be}}function Fe(e,t){return e===t||(e==null?void 0:e.contains(t))}function ht(e){const t=e.currentTarget.ownerDocument.activeElement;return e.relatedTarget??t}function $o(e){const t=It("Popover",e),{children:r,...o}=Nt(e),n=zt(),a=jo({...o,direction:n.direction});return Ae.jsx(Do,{value:a,children:Ae.jsx(To,{value:t,children:Vt(r,{isOpen:a.isOpen,onClose:a.onClose,forceUpdate:a.forceUpdate})})})}$o.displayName="Popover";function Fo(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}const Lo={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},Mo=yt(Ut.section),Bt=bt(function(t,r){const{variants:o=Lo,...n}=t,{isOpen:a}=Tt();return Ae.jsx(Mo,{ref:r,variants:Fo(o),initial:!1,animate:a?"enter":"exit",...n})});Bt.displayName="PopoverTransition";const Wo=bt(function(t,r){const{rootProps:o,motionProps:n,...a}=t,{getPopoverProps:u,getPopoverPositionerProps:i,onAnimationComplete:s}=Tt(),f=Bo(),c=Xt({position:"relative",display:"flex",flexDirection:"column",...f.content});return Ae.jsx(yt.div,{...i(o),__css:f.popper,className:"chakra-popover__popper",children:Ae.jsx(Bt,{...n,...u(a,r),onAnimationComplete:Ht(s,a.onAnimationComplete),className:qt("chakra-popover__content",t.className),__css:c})})});Wo.displayName="PopoverContent";export{$o as P,Bo as a,Wo as b,Gt as c,Tt as u};