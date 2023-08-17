import{j as g}from"./jsx-runtime-4ca860c5.js";import{r as f}from"./index-61bf1805.js";import{u as q,a as ft}from"./index-dcfef637.js";import{m as oe}from"./index-c23131f5.js";import{c as Le}from"./index-6830816b.js";import{f as A,d as mt,o as ht,n as St,c as D,u as yt}from"./chunk-ZJJGQIVY-35f6fb8e.js";import"./index-a7f40554.js";import{F as bt}from"./chunk-KRPLQIP4-7a7d7866.js";import{I as Fe}from"./chunk-6QYXN73V-1abba381.js";const Ue=1/60*1e3,gt=typeof performance<"u"?()=>performance.now():()=>Date.now(),We=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(gt()),Ue);function vt(e){let t=[],n=[],r=0,a=!1,u=!1;const o=new WeakSet,p={schedule:(c,s=!1,m=!1)=>{const i=m&&a,h=i?t:n;return s&&o.add(c),h.indexOf(c)===-1&&(h.push(c),i&&a&&(r=t.length)),c},cancel:c=>{const s=n.indexOf(c);s!==-1&&n.splice(s,1),o.delete(c)},process:c=>{if(a){u=!0;return}if(a=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let s=0;s<r;s++){const m=t[s];m(c),o.has(m)&&(p.schedule(m),e())}a=!1,u&&(u=!1,p.process(c))}};return p}const _t=40;let fe=!0,M=!1,me=!1;const E={delta:0,timestamp:0},N=["read","update","preRender","render","postRender"],X=N.reduce((e,t)=>(e[t]=vt(()=>M=!0),e),{}),wt=N.reduce((e,t)=>{const n=X[t];return e[t]=(r,a=!1,u=!1)=>(M||Ct(),n.schedule(r,a,u)),e},{}),xt=N.reduce((e,t)=>(e[t]=X[t].cancel,e),{});N.reduce((e,t)=>(e[t]=()=>X[t].process(E),e),{});const Vt=e=>X[e].process(E),Be=e=>{M=!1,E.delta=fe?Ue:Math.max(Math.min(e-E.timestamp,_t),1),E.timestamp=e,me=!0,N.forEach(Vt),me=!1,M&&(fe=!1,We(Be))},Ct=()=>{M=!0,fe=!0,me||We(Be)},Me=()=>E;function Pt(e){const{value:t,defaultValue:n,onChange:r,shouldUpdate:a=(h,v)=>h!==v}=e,u=q(r),o=q(a),[p,c]=f.useState(n),s=t!==void 0,m=s?t:p,i=q(h=>{const y=typeof h=="function"?h(m):h;o(m,y)&&(s||c(y),u(y))},[s,u,m,o]);return[m,i]}function kt(e){const t=parseFloat(e);return typeof t!="number"||Number.isNaN(t)?0:t}function jt(e,t){let n=kt(e);const r=10**(t??10);return n=Math.round(n*r)/r,t?n.toFixed(t):n.toString()}function Ot(e){if(!Number.isFinite(e))return 0;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n+=1;return n}function Ae(e,t,n){return(e-t)*100/(n-t)}function qt(e,t,n){return(n-t)*e+t}function De(e,t,n){const r=Math.round((e-t)/n)*n+t,a=Ot(n);return jt(r,a)}function ie(e,t,n){return e==null?e:(n<t&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(e,t),n))}var O=e=>e?"":void 0,ue=e=>e?!0:void 0,z=(...e)=>e.filter(Boolean).join(" ");function ce(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}function U(e){const{orientation:t,vertical:n,horizontal:r}=e;return t==="vertical"?n:r}var B={width:0,height:0},W=e=>e||B;function Et(e){const{orientation:t,thumbPercents:n,thumbRects:r,isReversed:a}=e,u=w=>{var C;const $=(C=r[w])!=null?C:B;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...U({orientation:t,vertical:{bottom:`calc(${n[w]}% - ${$.height/2}px)`},horizontal:{left:`calc(${n[w]}% - ${$.width/2}px)`}})}},o=t==="vertical"?r.reduce((w,C)=>W(w).height>W(C).height?w:C,B):r.reduce((w,C)=>W(w).width>W(C).width?w:C,B),p={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...U({orientation:t,vertical:o?{paddingLeft:o.width/2,paddingRight:o.width/2}:{},horizontal:o?{paddingTop:o.height/2,paddingBottom:o.height/2}:{}})},c={position:"absolute",...U({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},s=n.length===1,m=[0,a?100-n[0]:n[0]],i=s?m:n;let h=i[0];!s&&a&&(h=100-h);const v=Math.abs(i[i.length-1]-i[0]),y={...c,...U({orientation:t,vertical:a?{height:`${v}%`,top:`${h}%`}:{height:`${v}%`,bottom:`${h}%`},horizontal:a?{width:`${v}%`,right:`${h}%`}:{width:`${v}%`,left:`${h}%`}})};return{trackStyle:c,innerTrackStyle:y,rootStyle:p,getThumbStyle:u}}function Tt(e){const{isReversed:t,direction:n,orientation:r}=e;return n==="ltr"||r==="vertical"?t:!t}function Rt(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function It(e){const t=Mt(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function He(e){return!!e.touches}function Ft(e){return He(e)&&e.touches.length>1}function Mt(e){var t;return(t=e.view)!=null?t:window}function At(e,t="page"){const n=e.touches[0]||e.changedTouches[0];return{x:n[`${t}X`],y:n[`${t}Y`]}}function Dt(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function Xe(e,t="page"){return He(e)?At(e,t):Dt(e,t)}function Nt(e){return t=>{const n=It(t);(!n||n&&t.button===0)&&e(t)}}function zt(e,t=!1){function n(a){e(a,{point:Xe(a)})}return t?Nt(n):n}function H(e,t,n,r){return Rt(e,t,zt(n,t==="pointerdown"),r)}var $t=Object.defineProperty,Lt=(e,t,n)=>t in e?$t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t,n)=>(Lt(e,typeof t!="symbol"?t+"":t,n),n),Ut=class{constructor(e,t,n){V(this,"history",[]),V(this,"startEvent",null),V(this,"lastEvent",null),V(this,"lastEventInfo",null),V(this,"handlers",{}),V(this,"removeListeners",()=>{}),V(this,"threshold",3),V(this,"win"),V(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const p=de(this.lastEventInfo,this.history),c=this.startEvent!==null,s=Xt(p.offset,{x:0,y:0})>=this.threshold;if(!c&&!s)return;const{timestamp:m}=Me();this.history.push({...p.point,timestamp:m});const{onStart:i,onMove:h}=this.handlers;c||(i==null||i(this.lastEvent,p),this.startEvent=this.lastEvent),h==null||h(this.lastEvent,p)}),V(this,"onPointerMove",(p,c)=>{this.lastEvent=p,this.lastEventInfo=c,wt.update(this.updatePoint,!0)}),V(this,"onPointerUp",(p,c)=>{const s=de(c,this.history),{onEnd:m,onSessionEnd:i}=this.handlers;i==null||i(p,s),this.end(),!(!m||!this.startEvent)&&(m==null||m(p,s))});var r;if(this.win=(r=e.view)!=null?r:window,Ft(e))return;this.handlers=t,n&&(this.threshold=n),e.stopPropagation(),e.preventDefault();const a={point:Xe(e)},{timestamp:u}=Me();this.history=[{...a.point,timestamp:u}];const{onSessionStart:o}=t;o==null||o(e,de(a,this.history)),this.removeListeners=Ht(H(this.win,"pointermove",this.onPointerMove),H(this.win,"pointerup",this.onPointerUp),H(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),xt.update(this.updatePoint)}};function Ne(e,t){return{x:e.x-t.x,y:e.y-t.y}}function de(e,t){return{point:e.point,delta:Ne(e.point,t[t.length-1]),offset:Ne(e.point,t[0]),velocity:Bt(t,.1)}}var Wt=e=>e*1e3;function Bt(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const a=e[e.length-1];for(;n>=0&&(r=e[n],!(a.timestamp-r.timestamp>Wt(t)));)n--;if(!r)return{x:0,y:0};const u=(a.timestamp-r.timestamp)/1e3;if(u===0)return{x:0,y:0};const o={x:(a.x-r.x)/u,y:(a.y-r.y)/u};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ht(...e){return t=>e.reduce((n,r)=>r(n),t)}function pe(e,t){return Math.abs(e-t)}function ze(e){return"x"in e&&"y"in e}function Xt(e,t){if(typeof e=="number"&&typeof t=="number")return pe(e,t);if(ze(e)&&ze(t)){const n=pe(e.x,t.x),r=pe(e.y,t.y);return Math.sqrt(n**2+r**2)}return 0}function Ke(e){const t=f.useRef(null);return t.current=e,t}function Kt(e,t){const{onPan:n,onPanStart:r,onPanEnd:a,onPanSessionStart:u,onPanSessionEnd:o,threshold:p}=t,c=!!(n||r||a||u||o),s=f.useRef(null),m=Ke({onSessionStart:u,onSessionEnd:o,onStart:r,onMove:n,onEnd(i,h){s.current=null,a==null||a(i,h)}});f.useEffect(()=>{var i;(i=s.current)==null||i.updateHandlers(m.current)}),f.useEffect(()=>{const i=e.current;if(!i||!c)return;function h(v){s.current=new Ut(v,m.current,p)}return H(i,"pointerdown",h)},[e,c,m,p]),f.useEffect(()=>()=>{var i;(i=s.current)==null||i.end(),s.current=null},[])}function Yt(e,t){if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const n=e.ownerDocument.defaultView??window,r=new n.ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const[u]=a;let o,p;if("borderBoxSize"in u){const c=u.borderBoxSize,s=Array.isArray(c)?c[0]:c;o=s.inlineSize,p=s.blockSize}else o=e.offsetWidth,p=e.offsetHeight;t({width:o,height:p})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}var Jt=globalThis!=null&&globalThis.document?f.useLayoutEffect:f.useEffect;function Gt(e,t){var n,r;if(!e||!e.parentElement)return;const a=(r=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?r:window,u=new a.MutationObserver(()=>{t()});return u.observe(e.parentElement,{childList:!0}),()=>{u.disconnect()}}function Qt({getNodes:e,observeMutation:t=!0}){const[n,r]=f.useState([]),[a,u]=f.useState(0);return Jt(()=>{const o=e(),p=o.map((c,s)=>Yt(c,m=>{r(i=>[...i.slice(0,s),m,...i.slice(s+1)])}));if(t){const c=o[0];p.push(Gt(c,()=>{u(s=>s+1)}))}return()=>{p.forEach(c=>{c==null||c()})}},[a]),n}function Zt(e){return typeof e=="object"&&e!==null&&"current"in e}function en(e){const[t]=Qt({observeMutation:!1,getNodes(){return[Zt(e)?e.current:e]}});return t}function tn(e){var t;const{min:n=0,max:r=100,onChange:a,value:u,defaultValue:o,isReversed:p,direction:c="ltr",orientation:s="horizontal",id:m,isDisabled:i,isReadOnly:h,onChangeStart:v,onChangeEnd:y,step:w=1,getAriaValueText:C,"aria-valuetext":$,"aria-label":J,"aria-labelledby":he,name:Se,focusThumbOnChange:Ze=!0,...ye}=e,be=q(v),T=q(y),ge=q(C),x=Tt({isReversed:p,direction:c,orientation:s}),[et,G]=Pt({value:u,defaultValue:o??rn(n,r),onChange:a}),[Q,ve]=f.useState(!1),[Z,_e]=f.useState(!1),ee=!(i||h),te=(r-n)/10,R=w||(r-n)/100,S=ie(et,n,r),tt=r-S+n,we=Ae(x?tt:S,n,r),L=s==="vertical",b=Ke({min:n,max:r,step:w,isDisabled:i,value:S,isInteractive:ee,isReversed:x,isVertical:L,eventSource:null,focusThumbOnChange:Ze,orientation:s}),ne=f.useRef(null),re=f.useRef(null),xe=f.useRef(null),nt=f.useId(),Ve=m??nt,[Ce,Pe]=[`slider-thumb-${Ve}`,`slider-track-${Ve}`],rt=f.useCallback(l=>{var d,I;if(!ne.current)return;const _=b.current;_.eventSource="pointer";const P=ne.current.getBoundingClientRect(),{clientX:le,clientY:ct}=(I=(d=l.touches)==null?void 0:d[0])!=null?I:l,dt=L?P.bottom-ct:le-P.left,pt=L?P.height:P.width;let se=dt/pt;x&&(se=1-se);let F=qt(se,_.min,_.max);return _.step&&(F=parseFloat(De(F,_.min,_.step))),F=ie(F,_.min,_.max),F},[L,x,b]),k=f.useCallback(l=>{const d=b.current;d.isInteractive&&(l=parseFloat(De(l,d.min,R)),l=ie(l,d.min,d.max),G(l))},[R,G,b]),j=f.useMemo(()=>({stepUp(l=R){const d=x?S-l:S+l;k(d)},stepDown(l=R){const d=x?S+l:S-l;k(d)},reset(){k(o||0)},stepTo(l){k(l)}}),[k,x,S,R,o]),ke=f.useCallback(l=>{const d=b.current,_={ArrowRight:()=>j.stepUp(),ArrowUp:()=>j.stepUp(),ArrowLeft:()=>j.stepDown(),ArrowDown:()=>j.stepDown(),PageUp:()=>j.stepUp(te),PageDown:()=>j.stepDown(te),Home:()=>k(d.min),End:()=>k(d.max)}[l.key];_&&(l.preventDefault(),l.stopPropagation(),_(l),d.eventSource="keyboard")},[j,k,te,b]),je=(t=ge==null?void 0:ge(S))!=null?t:$,ae=en(re),{getThumbStyle:Oe,rootStyle:qe,trackStyle:Ee,innerTrackStyle:Te}=f.useMemo(()=>{const l=b.current,d=ae??{width:0,height:0};return Et({isReversed:x,orientation:l.orientation,thumbRects:[d],thumbPercents:[we]})},[x,ae,we,b]),Re=f.useCallback(()=>{b.current.focusThumbOnChange&&setTimeout(()=>{var d;return(d=re.current)==null?void 0:d.focus()})},[b]);ft(()=>{const l=b.current;Re(),l.eventSource==="keyboard"&&(T==null||T(l.value))},[S,T]);function Ie(l){const d=rt(l);d!=null&&d!==b.current.value&&G(d)}Kt(xe,{onPanSessionStart(l){const d=b.current;d.isInteractive&&(ve(!0),Re(),Ie(l),be==null||be(d.value))},onPanSessionEnd(){const l=b.current;l.isInteractive&&(ve(!1),T==null||T(l.value))},onPan(l){b.current.isInteractive&&Ie(l)}});const at=f.useCallback((l={},d=null)=>({...l,...ye,ref:oe(d,xe),tabIndex:-1,"aria-disabled":ue(i),"data-focused":O(Z),style:{...l.style,...qe}}),[ye,i,Z,qe]),lt=f.useCallback((l={},d=null)=>({...l,ref:oe(d,ne),id:Pe,"data-disabled":O(i),style:{...l.style,...Ee}}),[i,Pe,Ee]),st=f.useCallback((l={},d=null)=>({...l,ref:d,style:{...l.style,...Te}}),[Te]),ot=f.useCallback((l={},d=null)=>({...l,ref:oe(d,re),role:"slider",tabIndex:ee?0:void 0,id:Ce,"data-active":O(Q),"aria-valuetext":je,"aria-valuemin":n,"aria-valuemax":r,"aria-valuenow":S,"aria-orientation":s,"aria-disabled":ue(i),"aria-readonly":ue(h),"aria-label":J,"aria-labelledby":J?void 0:he,style:{...l.style,...Oe(0)},onKeyDown:ce(l.onKeyDown,ke),onFocus:ce(l.onFocus,()=>_e(!0)),onBlur:ce(l.onBlur,()=>_e(!1))}),[ee,Ce,Q,je,n,r,S,s,i,h,J,he,Oe,ke]),it=f.useCallback((l,d=null)=>{const I=!(l.value<n||l.value>r),_=S>=l.value,P=Ae(l.value,n,r),le={position:"absolute",pointerEvents:"none",...nn({orientation:s,vertical:{bottom:x?`${100-P}%`:`${P}%`},horizontal:{left:x?`${100-P}%`:`${P}%`}})};return{...l,ref:d,role:"presentation","aria-hidden":!0,"data-disabled":O(i),"data-invalid":O(!I),"data-highlighted":O(_),style:{...l.style,...le}}},[i,x,r,n,s,S]),ut=f.useCallback((l={},d=null)=>({...l,ref:d,type:"hidden",value:S,name:Se}),[Se,S]);return{state:{value:S,isFocused:Z,isDragging:Q},actions:j,getRootProps:at,getTrackProps:lt,getInnerTrackProps:st,getThumbProps:ot,getMarkerProps:it,getInputProps:ut}}function nn(e){const{orientation:t,vertical:n,horizontal:r}=e;return t==="vertical"?n:r}function rn(e,t){return t<e?e:e+(t-e)/2}var[an,K]=Le({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[ln,Y]=Le({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),Ye=A((e,t)=>{var n;const r={...e,orientation:(n=e==null?void 0:e.orientation)!=null?n:"horizontal"},a=mt("Slider",r),u=ht(r),{direction:o}=St();u.direction=o;const{getInputProps:p,getRootProps:c,...s}=tn(u),m=c(),i=p({},t);return g.jsx(an,{value:s,children:g.jsx(ln,{value:a,children:g.jsxs(D.div,{...m,className:z("chakra-slider",r.className),__css:a.container,children:[r.children,g.jsx("input",{...i})]})})})});Ye.displayName="Slider";var Je=A((e,t)=>{const{getThumbProps:n}=K(),r=Y(),a=n(e,t);return g.jsx(D.div,{...a,className:z("chakra-slider__thumb",e.className),__css:r.thumb})});Je.displayName="SliderThumb";var Ge=A((e,t)=>{const{getTrackProps:n}=K(),r=Y(),a=n(e,t);return g.jsx(D.div,{...a,className:z("chakra-slider__track",e.className),__css:r.track})});Ge.displayName="SliderTrack";var Qe=A((e,t)=>{const{getInnerTrackProps:n}=K(),r=Y(),a=n(e,t);return g.jsx(D.div,{...a,className:z("chakra-slider__filled-track",e.className),__css:r.filledTrack})});Qe.displayName="SliderFilledTrack";var sn=A((e,t)=>{const{getMarkerProps:n}=K(),r=Y(),a=n(e,t);return g.jsx(D.div,{...a,className:z("chakra-slider__marker",e.className),__css:r.mark})});sn.displayName="SliderMark";const on=(e,t=500)=>{const[n,r]=f.useState(!0),a=f.useRef([]),u=f.useRef(),o=f.useCallback((...p)=>{if(!n){a.current=p;return}r(!1),a.current=[],e(...p)},[n,e]);return f.useEffect(()=>{if(!n)return u.current=window.setTimeout(()=>{r(!0),a.current.length&&e(...a.current)},t),()=>{window.clearTimeout(u.current)}},[n,t]),o};function $e(e){const{defaultValue:t,min:n,max:r,step:a,onThrottledChange:u,leftIcon:o,rightIcon:p}=e,c=yt("RmgThrottledSlider"),[s,m]=f.useState(t??0),i=on(u??(()=>{}),500),h=()=>{const y=Math.min(s+(a??1)*10,r??100);u==null||u(y),m(y)},v=()=>{const y=Math.max(s-(a??1)*10,n??0);u==null||u(y),m(y)};return g.jsxs(bt,{sx:c,children:[o&&g.jsx(Fe,{size:"xs",variant:"ghost","aria-label":"Drag left",icon:o,onClick:v}),g.jsxs(Ye,{value:s,min:n,max:r,step:a,onChange:y=>{i(y),m(y)},children:[g.jsx(Ge,{children:g.jsx(Qe,{})}),g.jsx(Je,{})]}),p&&g.jsx(Fe,{size:"xs",variant:"ghost","aria-label":"Drag right",icon:p,onClick:h})]})}try{$e.displayName="RmgThrottledSlider",$e.__docgenInfo={description:"",displayName:"RmgThrottledSlider",props:{onThrottledChange:{defaultValue:null,description:"",name:"onThrottledChange",required:!1,type:{name:"((value: number) => void)"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As"}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject"}}}}}catch{}export{$e as R};
//# sourceMappingURL=rmg-throttled-slider-796ae003.js.map