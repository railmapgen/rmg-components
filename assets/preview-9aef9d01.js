import{j as d}from"./jsx-runtime-670450c2.js";import{g as _,C as R}from"./rmg-theme-provider-15a73fcf.js";import"./rmg-ag-grid-6ea59356.js";import"./rmg-auto-complete-419865f7.js";import"./rmg-button-group-7dfbfe5f.js";import"./rmg-card-cd1d22ea.js";import"./rmg-data-table-f2c1bb1f.js";import"./rmg-debounced-input-b1648484.js";import"./index-8682b39e.js";import"./rmg-enriched-button-44b23e06.js";import"./rmg-env-badge-961b5a37.js";import"./rmg-error-boundary-34ca636d.js";import"./rmg-fields-4fcabc2b.js";import"./rmg-label-c244f4e0.js";import"./rmg-layout-29a76a2e.js";import"./rmg-line-badge-a95b45ee.js";import"./rmg-loader-737b9e85.js";import"./rmg-multi-select-32e8e5b2.js";import"./rmg-select-cef7a22e.js";import"./rmg-side-panel-3244fc8b.js";import"./rmg-throttled-slider-103018f9.js";import"./index-20979b68.js";import"./index-f1f749bf.js";import"./emotion-react.browser.esm-a44b8d61.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./chunk-IFAZDFP5-732b7f6a.js";import"./index-6d9c108a.js";import"./index-2802deeb.js";import"./index-96c5f47c.js";import"./motion-07dfd05d.js";import"./chunk-SBTIWJWJ-7f9ce7b6.js";import"./chunk-DKFDJSXF-c0600d2a.js";import"./chunk-NAA7TEES-fcf38781.js";import"./index-ff36e217.js";import"./index-0a1c2762.js";import"./chunk-DUEJD2BE-5a59a5ca.js";import"./chunk-6CSUKJP7-9c438e99.js";import"./chunk-7NBWC5PS-d9ab3e8f.js";import"./index-c3bcc3a8.js";import"./chunk-KVBLLJMP-7614d09d.js";import"./index-390de499.js";import"./chunk-MPFPK3CX-501e08a9.js";import"./chunk-QJA5SDDN-549d352f.js";import"./chunk-JSSKUSQH-f6df1457.js";import"./rmg-multi-line-string-84b52852.js";import"./chunk-FQXH56BT-6847d39d.js";import"./inheritsLoose-9b928aa8.js";import"./getPrototypeOf-624f05c9.js";import"./chunk-P74GIWPW-98bbe6ad.js";import"./chunk-3NTD6TBK-b04e9b6d.js";import"./chunk-3HSDMH4Y-64a8ce19.js";var y=function(){if(typeof Map<"u")return Map;function t(e,r){var n=-1;return e.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(r){var n=t(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(r,n){var i=t(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},e.prototype.delete=function(r){var n=this.__entries__,i=t(n,r);~i&&n.splice(i,1)},e.prototype.has=function(r){return!!~t(this.__entries__,r)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];r.call(n,s[1],s[0])}},e}()}(),v=typeof window<"u"&&typeof document<"u"&&window.document===document,f=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),M=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(f):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),x=2;function A(t,e){var r=!1,n=!1,i=0;function o(){r&&(r=!1,t()),n&&a()}function s(){M(o)}function a(){var c=Date.now();if(r){if(c-i<x)return;n=!0}else r=!0,n=!1,setTimeout(s,e);i=c}return a}var z=20,T=["top","right","bottom","left","width","height","size","weight"],C=typeof MutationObserver<"u",S=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=A(this.refresh.bind(this),z)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var r=this.observers_,n=r.indexOf(e);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return e.forEach(function(r){return r.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!v||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),C?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!v||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var r=e.propertyName,n=r===void 0?"":r,i=T.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),g=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},u=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||f},w=p(0,0,0,0);function h(t){return parseFloat(t)||0}function b(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce(function(n,i){var o=t["border-"+i+"-width"];return n+h(o)},0)}function D(t){for(var e=["top","right","bottom","left"],r={},n=0,i=e;n<i.length;n++){var o=i[n],s=t["padding-"+o];r[o]=h(s)}return r}function k(t){var e=t.getBBox();return p(0,0,e.width,e.height)}function P(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return w;var n=u(t).getComputedStyle(t),i=D(n),o=i.left+i.right,s=i.top+i.bottom,a=h(n.width),c=h(n.height);if(n.boxSizing==="border-box"&&(Math.round(a+o)!==e&&(a-=b(n,"left","right")+o),Math.round(c+s)!==r&&(c-=b(n,"top","bottom")+s)),!G(t)){var l=Math.round(a+o)-e,m=Math.round(c+s)-r;Math.abs(l)!==1&&(a-=l),Math.abs(m)!==1&&(c-=m)}return p(i.left,i.top,a,c)}var j=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof u(t).SVGGraphicsElement}:function(t){return t instanceof u(t).SVGElement&&typeof t.getBBox=="function"}}();function G(t){return t===u(t).document.documentElement}function L(t){return v?j(t)?k(t):P(t):w}function W(t){var e=t.x,r=t.y,n=t.width,i=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return g(s,{x:e,y:r,width:n,height:i,top:r,right:e+n,bottom:i+r,left:e}),s}function p(t,e,r,n){return{x:t,y:e,width:r,height:n}}var F=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=p(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=L(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),H=function(){function t(e,r){var n=W(r);g(this,{target:e,contentRect:n})}return t}(),q=function(){function t(e,r,n){if(this.activeObservations_=[],this.observations_=new y,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=r,this.callbackCtx_=n}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)||(r.set(e,new F(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)&&(r.delete(e),r.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&e.activeObservations_.push(r)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new H(n.target,n.broadcastRect())});this.callback_.call(e,r,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O=typeof WeakMap<"u"?new WeakMap:new y,E=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=S.getInstance(),n=new q(e,r,this);O.set(this,n)}return t}();["observe","unobserve","disconnect"].forEach(function(t){E.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}});var B=function(){return typeof f.ResizeObserver<"u"?f.ResizeObserver:E}();window.ResizeObserver||(window.ResizeObserver=B);const I=t=>d(R,{theme:_(),children:d("div",{id:"story-wrapper",children:d(t,{})})}),Vt={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},chakra:{theme:_()}},decorators:[I]};export{Vt as default};
//# sourceMappingURL=preview-9aef9d01.js.map
