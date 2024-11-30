import{j as g}from"./jsx-runtime-D_3pcrNB.js";import{r as c,R as U}from"./index-YTOF1_EJ.js";import{c as A,f as C,a as Ot,b as Re,d as jt}from"./use-style-config-CZvBo0tQ.js";import{o as Ne,c as J}from"./theming-props-BSFQkWYI.js";import{I as Ae}from"./icon-BjAU1tzt.js";import{c as nt}from"./context-CXQEnuw_.js";import{P as Vt,b as wt,c as Et}from"./popover-content-h29T3bdv.js";import{u as Pe}from"./use-merge-refs-CDN4nSPx.js";import{F as qe}from"./flex-DQjtzar9.js";import{B as lt}from"./box-BemYKwwm.js";import{g as Rt}from"./children-DxTy7EQl.js";import{I as Nt}from"./input-0Wh662oD.js";import{S as rt}from"./button-X5yNzHuh.js";import{P as At}from"./popover-anchor-CkMtYGyI.js";import{u as Pt}from"./use-controllable-state-n041KlKk.js";import{u as qt}from"./use-update-effect-BBuVyHsC.js";const ot=A("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});ot.displayName="Center";const Lt={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};C(function(t,n){const{axis:l="both",...r}=t;return g.jsx(A.div,{ref:n,__css:Lt[l],...r,position:"absolute"})});const Ee=C(function(t,n){const{borderLeftWidth:l,borderBottomWidth:r,borderTopWidth:a,borderRightWidth:o,borderWidth:i,borderStyle:d,borderColor:h,...p}=Ot("Divider",t),{className:v,orientation:u="horizontal",__css:y,...f}=Ne(t),S={vertical:{borderLeftWidth:l||o||i||"1px",height:"100%"},horizontal:{borderBottomWidth:r||a||i||"1px",width:"100%"}};return g.jsx(A.hr,{ref:n,"aria-orientation":u,...f,__css:{...p,border:"0",borderColor:h,borderStyle:d,...S[u],...y},className:J("chakra-divider",v)})});Ee.displayName="Divider";const[Tt,Ft]=nt({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),at=C(function(t,n){const l=Re("Input",t),{children:r,className:a,...o}=Ne(t),i=J("chakra-input__group",a),d={},h=Rt(r),p=l.field;h.forEach(u=>{l&&(p&&u.type.id==="InputLeftElement"&&(d.paddingStart=p.height??p.h),p&&u.type.id==="InputRightElement"&&(d.paddingEnd=p.height??p.h),u.type.id==="InputRightAddon"&&(d.borderEndRadius=0),u.type.id==="InputLeftAddon"&&(d.borderStartRadius=0))});const v=h.map(u=>{var f,S;const y=jt({size:((f=u.props)==null?void 0:f.size)||t.size,variant:((S=u.props)==null?void 0:S.variant)||t.variant});return u.type.id!=="Input"?c.cloneElement(u,y):c.cloneElement(u,Object.assign(y,d,u.props))});return g.jsx(A.div,{className:i,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...l.group},"data-group":!0,...o,children:g.jsx(Tt,{value:l,children:v})})});at.displayName="InputGroup";const kt=A("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),pe=C(function(t,n){const{placement:l="left",...r}=t,a=Ft(),o=a.field,d={[l==="left"?"insetStart":"insetEnd"]:"0",width:(o==null?void 0:o.height)??(o==null?void 0:o.h),height:(o==null?void 0:o.height)??(o==null?void 0:o.h),fontSize:o==null?void 0:o.fontSize,...a.element};return g.jsx(kt,{ref:n,__css:d,...r})});pe.id="InputElement";pe.displayName="InputElement";const st=C(function(t,n){const{className:l,...r}=t,a=J("chakra-input__left-element",l);return g.jsx(pe,{ref:n,placement:"left",className:a,...r})});st.id="InputLeftElement";st.displayName="InputLeftElement";const Le=C(function(t,n){const{className:l,...r}=t,a=J("chakra-input__right-element",l);return g.jsx(pe,{ref:n,placement:"right",className:a,...r})});Le.id="InputRightElement";Le.displayName="InputRightElement";const[Wt,it]=nt({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),ut=C((e,t)=>{const n=Re("Tag",e),l=Ne(e),r={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return g.jsx(Wt,{value:n,children:g.jsx(A.span,{ref:t,...l,__css:r})})});ut.displayName="Tag";const dt=C((e,t)=>{const n=it();return g.jsx(A.span,{ref:t,noOfLines:1,...e,__css:n.label})});dt.displayName="TagLabel";const Dt=C((e,t)=>g.jsx(Ae,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}));Dt.displayName="TagLeftIcon";const Mt=C((e,t)=>g.jsx(Ae,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}));Mt.displayName="TagRightIcon";const pt=e=>g.jsx(Ae,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:g.jsx("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});pt.displayName="TagCloseIcon";const ct=C((e,t)=>{const{isDisabled:n,children:l,...r}=e,o={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...it().closeButton};return g.jsx(A.button,{ref:t,"aria-label":"close",...r,type:"button",disabled:n,__css:o,children:l||g.jsx(pt,{})})});ct.displayName="TagCloseButton";const ft=C(function(t,n){const{spacing:l="0.5rem",spacingX:r,spacingY:a,children:o,justify:i,direction:d,align:h,className:p,shouldWrapChildren:v,...u}=t,y=c.useMemo(()=>v?c.Children.map(o,(f,S)=>g.jsx(ce,{children:f},S)):o,[o,v]);return g.jsx(A.div,{ref:n,className:J("chakra-wrap",p),...u,children:g.jsx(A.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:i,alignItems:h,flexDirection:d,listStyleType:"none",gap:l,columnGap:r,rowGap:a,padding:"0"},children:y})})});ft.displayName="Wrap";const ce=C(function(t,n){const{className:l,...r}=t;return g.jsx(A.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:J("chakra-wrap__listitem",l),...r})});ce.displayName="WrapItem";var mt={exports:{}},ne={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function zt(){if(Ue)return ne;Ue=1;var e=U,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(i,d,h){var p,v={},u=null,y=null;h!==void 0&&(u=""+h),d.key!==void 0&&(u=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)l.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(i&&i.defaultProps)for(p in d=i.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:t,type:i,key:u,ref:y,props:v,_owner:r.current}}return ne.Fragment=n,ne.jsx=o,ne.jsxs=o,ne}mt.exports=zt();var m=mt.exports;const[Bt,B]=Gt();function Gt(){const e=c.createContext(void 0);e.displayName="AutoCompleteContext";function t(){var n;const l=c.useContext(e),r="useAutoCompleteContext: `context` is undefined. Seems you forgot to wrap all autoomplete components within `<AutoComplete />`";if(!l){const a=new Error(r);throw a.name="ContextError",(n=Error.captureStackTrace)==null||n.call(Error,a,t),a}return l}return[e.Provider,t,e]}function Ht(e){return e==null?void 0:e[0]}function we(e){return e!=null&&e.length?e[e.length-1]:void 0}function vt(e,t,n=1,l=!0){if(t===0)return-1;let r=e+n;return e===-1&&(r=n>0?0:t-1),l?r=(r%t+t)%t:r=Math.max(0,Math.min(r,t-1)),r}function Yt(e,t,n=!0){return vt(e,t,-1,n)}function $t(e,t,n=!0){const l=vt(e,t.length,1,n);return t[l]}function Kt(e,t,n=!0){const l=Yt(e,t.length,n);return t[l]}function Te(e){return Array.isArray(e)}function Qt(e){return Te(e)&&e.length===0}function Fe(e){return e!==null&&typeof e=="object"&&!Te(e)}function Xt(e){return Fe(e)&&Object.keys(e).length===0}function yt(e){return Te(e)?Qt(e):Fe(e)?Xt(e):e==null||e===""}function de(e){return typeof e>"u"}function gt(e){return typeof e<"u"}function Ut(e,t){const n={};return t.forEach(l=>{l in e&&(n[l]=e[l])}),n}function ke(e,t){const n={...e};return t.forEach(l=>{delete n[l]}),n}function Jt(e){return typeof e=="function"}function _(e,...t){return Jt(e)?e(...t):e}var fe=function(e,t){for(var n,l=c.Children.toArray(e),r=0,a=l;r<a.length;r++){var o=a[r];if(t(o))return o;if(!((n=o.props)===null||n===void 0)&&n.children){var i=fe(o.props.children,t);if(i)return i}}},ue=function(e,t){for(var n=0,l=t.length,r=e.length;n<l;n++,r++)e[r]=t[n];return e},ht=function(e,t){for(var n,l=c.Children.toArray(e),r=[],a=0,o=l;a<o.length;a++){var i=o[a];t(i)&&(r=ue(ue([],r),[i])),!((n=i.props)===null||n===void 0)&&n.children&&(r=ue(ue([],r),ht(i.props.children,t)))}return r};function Je(e,t,n=2){function l(v,u){v=" ".repeat(u-1)+v.toLowerCase()+" ".repeat(u-1);let y=new Array(v.length-u+1);for(let f=0;f<y.length;f++)y[f]=v.slice(f,f+u);return y}if(!(e!=null&&e.length)||!(t!=null&&t.length))return 0;let r=e.length<t.length?e:t,a=e.length<t.length?t:e,o=l(r,n),i=l(a,n),d=new Set(o),h=i.length,p=0;for(let v of i)d.delete(v)&&p++;return p/h}const We=e=>{var t;return(t=typeof e=="string"||typeof e=="number"?e:e[Object.keys(e)[0]])==null?void 0:t.toString()},Zt=(e,t)=>typeof e!="string"||yt(t)?e:e.toString().replace(new RegExp(ln(t),"gi"),n=>`<mark>${n}</mark>`),en=e=>ht(e,t=>{var n;return((n=t==null?void 0:t.type)==null?void 0:n.displayName)==="AutoCompleteItem"}).map(t=>{const n=Ut(t.props,["value","label","fixed","disabled"]),{getValue:l=We}=t.props,r=l(n.value);return{...gt(n.label)?n:{...n,label:r},value:r,originalValue:n.value}}),tn=()=>({bg:"whiteAlpha.100",_light:{bg:"gray.200"}}),nn=(e,t,n)=>(t==null?void 0:t.toLowerCase().indexOf(e==null?void 0:e.toLowerCase()))>=0||(n==null?void 0:n.toLowerCase().indexOf(e==null?void 0:e.toLowerCase()))>=0||Je(e,t)>=.5||Je(e,n)>=.5;function ln(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}const rn=(e,t)=>fe(e,n=>{var l;return((l=n==null?void 0:n.type)==null?void 0:l.displayName)==="AutoCompleteItem"&&n.props.value===(t==null?void 0:t.value)}),on=(e,t)=>fe(e,n=>{var l;return((l=n==null?void 0:n.type)==null?void 0:l.displayName)==="AutoCompleteItem"&&n.props.value===(t==null?void 0:t.value)}),an=(e,t)=>gt(fe(e,n=>{var l,r;const a=_(((l=n.props)==null?void 0:l.getValue)||We,((r=n.props)==null?void 0:r.value)||{});return t.some(o=>o.value===a)})),sn=(e,t)=>{const n={},l={},{field:r}=e;return r&&Object.keys(r).forEach(a=>{if(a.startsWith("--input")===!1)n[a]=r[a];else{let o=r[a];const i=a.replace("--input-","").replace(/-([a-z])/g,function(d){return d[1].toUpperCase()});o.indexOf(".")!==-1&&(o=o.substring(o.indexOf(".")+1)),l[i]=o}}),{...t&&{...n,...l,_focusWithin:e.field._focus,pos:"relative",minH:9,py:1.5,spacing:3},cursor:"text",h:"fit-content"}};function un(e){var t;let{prefocusFirstItem:n=!0,closeOnBlur:l=!0,creatable:r,emphasize:a,emptyState:o=!0,defaultEmptyStateProps:i={},freeSolo:d,isReadOnly:h,listAllValuesOnFocus:p,maxSuggestions:v,multiple:u,closeOnSelect:y=!u,defaultValue:f,defaultValues:S=f?[f]:[],onReady:q,defaultIsOpen:me,disableFilter:le,isLoading:re=!1,placement:Z="bottom",restoreOnBlurIfEmpty:ve=!d,shouldRenderSuggestions:ye=()=>!0,submitKeys:oe=[],suggestWhenEmpty:ge,value:G,values:he=G?typeof G=="string"?[G]:[...G]:void 0}=e;d=d||(u?!0:e.freeSolo);const{isOpen:E,onClose:D,onOpen:$}=Et({defaultIsOpen:me}),be=c.useMemo(()=>_(e.children,{isOpen:E,onClose:D,onOpen:$}),[e.children,E]),N=c.useMemo(()=>en(be),[be]),L=c.useRef(null),Me=c.useRef(null),ae=c.useRef(null),K=c.useRef(null),[ze,se]=c.useState(!1);let ie="";u?ie="":de(S)?de(he)||(ie=he[0]):ie=S[0];const[T,ee]=c.useState(ie??""),xe=c.useMemo(()=>le?N:N.filter(s=>s.fixed||_(e.filter||nn,T,s.value,s.label)||ze).filter((s,x)=>v?s.fixed||x<v:!0),[T,N,ze,v,le]),Be=r?[{value:T,noFilter:!0,creatable:!0}]:[],O=c.useMemo(()=>[...xe,...Be],[xe,Be]),[F,Ie]=Pt({defaultValue:S.map(s=>s==null?void 0:s.toString()),value:he,onChange:s=>{const x=O.find(I=>I.value===s[0]);if(!x)return;const j=s.map(I=>O.find(k=>k.value===I));_(e.onChange,u?s:s[0],u?j:x)}});c.useEffect(()=>{O.length===0&&!o&&E&&D()},[O.length,o,E]);const[Q,M]=c.useState(n?(t=N[0])==null?void 0:t.value:null),St=e.maxSelections||F.length+1,Se=O.findIndex(s=>s.value===Q),Ge=$t(Se,O,!!e.rollNavigation),He=Kt(Se,O,!!e.rollNavigation),H=Ht(O),Ye=we(O),$e=!O.some(s=>s.value===Q);c.useEffect(()=>{var s;$e&&M(n?(s=N[0])==null?void 0:s.value:null)},[$e]),qt(()=>{n&&M(H==null?void 0:H.value)},[T,H==null?void 0:H.value]),c.useEffect(()=>{var s;!E&&n&&M((s=N[0])==null?void 0:s.value)},[E]),c.useEffect(()=>{E&&p&&se(!0)},[E,p,se]),c.useEffect(()=>{const s=N.find(x=>x.value===Q);_(e.onOptionFocus,{item:s,focusMethod:K.current,isNewInput:s==null?void 0:s.creatable})},[Q,e.onOptionFocus]);const Ce=s=>{var x,j;const I=O.find(R=>R.value===s),k=(I==null?void 0:I.label)||(I==null?void 0:I.value);ee(()=>u?"":k??""),!F.includes(s)&&F.length<St&&Ie(R=>u?[...R,s]:[s]),u&&((x=L.current)==null||x.focus()),e.focusInputOnSelect&&((j=L.current)==null||j.focus()),_(e.onSelectOption,{item:I,selectMethod:K.current,isNewInput:I==null?void 0:I.creatable}),I!=null&&I.creatable&&_(e.onCreateOption,{item:ke(I,["noFilter"]),selectMethod:K.current}),y&&D()},Ke=(s,x)=>{var j;Ie(R=>{const Y=N.find(z=>z.value===s);return Y?(_(e.onTagRemoved,s,Y,R),R.filter(z=>z!==s)):R});const I=N.find(R=>R.value===s),k=(I==null?void 0:I.label)||(I==null?void 0:I.value);T===k&&ee(""),x&&((j=L.current)==null||j.focus())},Ct=s=>{var x;Ie([]),s&&((x=L.current)==null||x.focus())},Qe=u?F.map(s=>{var x;return{label:((x=N.find(j=>j.value===(s==null?void 0:s.toString())))==null?void 0:x.label)||s,onRemove:()=>Ke(s)}}):[];return c.useEffect(()=>{_(q,{tags:Qe})},[F]),{autoCompleteProps:e,children:be,filteredList:O,filteredResults:xe,focusedValue:Q,defaultEmptyStateProps:i,getEmptyStateProps:s=>{if(O.every(x=>x.noFilter)&&o&&!r)return typeof o=="boolean"?s:_(o,{query:T})},getGroupProps:s=>{const x=an(s.children,O);return{divider:{hasFirstChild:rn(s.children,H),hasLastChild:on(s.children,we(O.filter(j=>de(j==null?void 0:j.noFilter))))},group:{display:x?"initial":"none"}}},getInputProps:(s,x)=>{const{onBlur:j,onChange:I,onFocus:k,onKeyDown:R,variant:Y,...z}=s;return{wrapper:{ref:Me,onClick:()=>{var b;(b=L==null?void 0:L.current)==null||b.focus()},...sn(x,u),...z},input:{isReadOnly:h,onFocus:b=>{_(k,b),e.openOnFocus&&!h&&$(),e.selectOnFocus&&b.target.select(),p&&se(!0)},onBlur:b=>{var P,V;_(j,b);const w=b.relatedTarget===(ae==null?void 0:ae.current)||((P=ae.current)==null?void 0:P.contains(b.relatedTarget)),_e=(V=Me.current)==null?void 0:V.contains(b.relatedTarget);if(!w&&!_e&&(l&&D(),!F.includes(b.target.value)&&ve)){const Oe=we(F),X=N.find(je=>je.value===Oe),W=(X==null?void 0:X.label)||(X==null?void 0:X.value)||"";ee(W)}},onChange:b=>{const P=b.target.value;_(I,b),ee(P);const V=yt(P);_(ye,P)&&(!V||ge)?$():D(),se(!1)},onKeyDown:b=>{var P;_(R,b),K.current="keyboard";const{key:V}=b,w=O[Se];if(["Enter",...oe].includes(V)){w&&!(w!=null&&w.disabled)&&E?Ce(w==null?void 0:w.value):(P=L.current)==null||P.focus(),b.preventDefault();return}if(V==="ArrowDown"){E?M(Ge==null?void 0:Ge.value):$(),b.preventDefault();return}if(V==="ArrowUp"){E?M(He==null?void 0:He.value):$(),b.preventDefault();return}if(V==="Tab"){E&&w&&!(w!=null&&w.disabled)?Ce(w==null?void 0:w.value):D();return}if(V==="Home"){M(H==null?void 0:H.value),b.preventDefault();return}if(V==="End"){M(Ye==null?void 0:Ye.value),b.preventDefault();return}V==="Escape"&&(D(),b.preventDefault())},value:T,variant:u?"unstyled":Y,...z}}},getItemProps:(s,x)=>{var j;const{_fixed:I,_focus:k,children:R,disabled:Y,label:z,value:b,fixed:P,getValue:V=We,onClick:w,onMouseOver:_e,sx:Oe,...X}=s,W=x?b:(j=V(b))==null?void 0:j.toString(),je=W===Q,_t=O.findIndex(te=>te.value===W)>=0,Ve=R||z||W;return{item:{...typeof Ve!="string"||!a?{children:Ve}:{dangerouslySetInnerHTML:{__html:Zt(Ve,T)}},"aria-selected":F.includes(W),"aria-disabled":Y,_disabled:{opacity:.4,cursor:"not-allowed",userSelect:"none"},onClick:te=>{var Xe;_(w,te),Y?(Xe=L.current)==null||Xe.focus():Ce(W)},onMouseOver:te=>{_(_e,te),M(W),K.current="mouse"},sx:{...Oe,mark:{color:"inherit",bg:"transparent",...Fe(a)?a:{fontWeight:a?"extrabold":"inherit"}}},...je&&(k||tn()),...P&&I,...X},root:{isValidSuggestion:_t,value:W}}},inputRef:L,interactionRef:K,isLoading:re,isOpen:E,itemList:N,listRef:ae,onClose:D,onOpen:$,placement:Z,query:T,removeItem:Ke,resetItems:Ct,setQuery:ee,tags:Qe,value:G,values:F}}const bt=C((e,t)=>{const n=un(e),{children:l,isOpen:r,onClose:a,onOpen:o,placement:i,resetItems:d,removeItem:h}=n;c.useImperativeHandle(t,()=>({resetItems:d,removeItem:h}));const{matchWidth:p=!0}=n.autoCompleteProps;return m.jsx(Bt,{value:n,children:m.jsx(Vt,{isLazy:!0,isOpen:r,onClose:a,onOpen:o,autoFocus:!1,placement:i,closeOnBlur:!0,matchWidth:p,children:m.jsx(A.div,{w:"full",ref:t,children:l})})})});bt.displayName="AutoComplete";const xt=C((e,t)=>{const{focusedValue:n,getItemProps:l,interactionRef:r}=B(),a=c.useRef(),o=Pe(t,a),i=l(e),{isValidSuggestion:d,value:h}=i.root,p=n===h;c.useEffect(()=>{var S;p&&r.current==="keyboard"&&((S=a==null?void 0:a.current)==null||S.scrollIntoView({behavior:"smooth",block:"nearest"}))},[p,r]),c.useEffect(()=>{typeof h!="string"&&console.warn("wow"),typeof h!="string"&&de(e.getValue)&&console.error("You must define the `getValue` prop, when an Item's value is not a string")},[]);const{children:v,dangerouslySetInnerHTML:u,...y}=i.item,f=ke(y,["groupId"]);return d?m.jsx(qe,{ref:o,...dn,...f,children:v||m.jsx("span",{dangerouslySetInnerHTML:u})}):null});xt.displayName="AutoCompleteItem";const dn={mx:"2",px:"2",py:"2",rounded:"md",cursor:"pointer"},pn=C((e,t)=>{const{children:n,showDivider:l,...r}=e,a=ke(r,["groupSibling"]),{getGroupProps:o}=B(),{group:i}=o(e),d=mn(e);return m.jsxs(lt,{ref:t,...i,...a,children:[m.jsx(Ee,{...d.top}),n,m.jsx(Ee,{...d.bottom})]})}),cn=C((e,t)=>m.jsx(qe,{...fn,...e,ref:t}));pn.displayName="AutoCompleteGroup";cn.displayName="AutoCompleteGroupTitle";const fn={ml:5,my:1,fontSize:"xs",letterSpacing:"wider",fontWeight:"extrabold",textTransform:"uppercase"},mn=e=>{const{getGroupProps:t}=B(),n=e.groupSibling,{divider:{hasFirstChild:l,hasLastChild:r}}=t(e),a={my:2,borderColor:e.dividerColor},o={...a,mb:4,display:!e.showDivider||l?"none":""},i={...a,display:!e.showDivider||r||n?"none":""};return{top:o,bottom:i}},Ze=C((e,t)=>{const{isLoading:n}=B(),{loadingIcon:l,...r}=e;return m.jsxs(at,{children:[m.jsx(Nt,{...r,ref:t}),n&&m.jsx(Le,{children:l||m.jsx(rt,{})})]})}),De=C((e,t)=>{const{autoCompleteProps:n,inputRef:l,getInputProps:r,tags:a,setQuery:o,value:i,itemList:d}=B(),{children:h,isInvalid:p,hidePlaceholder:v,...u}=e,{value:y}=u;c.useEffect(()=>{if(i!==void 0&&(typeof i=="string"||i instanceof String)){const oe=d.find(G=>G.value===i),ge=oe===void 0?i:oe.label;o(ge)}},[i]),c.useEffect(()=>{y!==void 0&&(typeof y=="string"||y instanceof String)&&o(y)},[y]);const f=Re("Input",e);let{wrapper:S,input:q}=r(u,f);const{ref:me,...le}=S,re=Pe(t,l),Z=_(h,{tags:a});v&&(q={...q,placeholder:Array.isArray(Z)&&Z.length?void 0:q.placeholder});const ve=m.jsx(Ze,{isInvalid:p,...q,ref:re}),ye=m.jsxs(ft,{"aria-invalid":p,...le,ref:me,children:[Z,m.jsx(ce,{as:Ze,...q,ref:re})]});return m.jsx(At,{children:n.multiple?ye:ve})});De.displayName="Input";De.id="Input";const vn=e=>{const{getEmptyStateProps:t,defaultEmptyStateProps:n}=B(),l=t(m.jsx(qe,{...yn,...n,children:"No options found!"}));return m.jsx(lt,{...e,children:l})},yn={fontSize:"sm",align:"center",justify:"center",fontWeight:"bold",fontStyle:"italic"},et=["AutoCompleteGroup","AutoCompleteItem","AutoCompleteCreatable"],gn=e=>{const t=U.Children.map(e,(l,r)=>{var a;if(((a=l==null?void 0:l.type)==null?void 0:a.displayName)==="AutoCompleteGroup"){const o=U.Children.toArray(e)[r+1];return U.cloneElement(l,{groupSibling:o?o.type.displayName==="AutoCompleteGroup":!1})}return l}),n=U.Children.toArray(t).filter(l=>{var r;return!et.includes((r=l==null?void 0:l.type)==null?void 0:r.displayName)});return[U.Children.toArray(t).filter(l=>{var r;return et.includes((r=l==null?void 0:l.type)==null?void 0:r.displayName)}),n]},It=C((e,t)=>{const{children:n,loadingState:l,...r}=e,{listRef:a,isLoading:o}=B(),i=Pe(t,a),[d,h]=gn(n);return m.jsxs(wt,{ref:i,w:"inherit",...hn,...r,children:[o&&m.jsx(ot,{children:l||m.jsx(rt,{size:"md"})}),!o&&m.jsxs(m.Fragment,{children:[d,m.jsx(vn,{}),h]})]})});It.displayName="AutoCompleteList";const hn={py:"4",opacity:"0",bg:"#232934",rounded:"md",maxH:"350px",border:"none",shadow:"base",zIndex:"popover",overflowY:"auto",_light:{bg:"#ffffff"},_focus:{boxShadow:"none"}};c.memo(e=>{const{label:t,onRemove:n,disabled:l,...r}=e;return m.jsx(ce,{children:m.jsxs(ut,{borderRadius:"md",fontWeight:"normal",...l&&tt,...r,children:[m.jsx(dt,{children:t}),m.jsx(ct,{onClick:()=>!l&&_(n),cursor:"pointer",...l&&tt})]})})});const tt={cursor:"text",userSelect:"none",opacity:.4,_focus:{boxShadow:"none"}};function Tn(e){const{data:t,displayHandler:n,filter:l,value:r,onChange:a,InputProps:o,InputPropsByState:i,ListProps:d,ItemProps:h,...p}=e,v=(y,f)=>{if(!l)return!0;const S=t.find(q=>q.id===f);return S?l(y,S):!1},u=(y,f)=>{var S;Array.isArray(f)?a==null||a((S=f[0])==null?void 0:S.originalValue):a==null||a(f.originalValue)};return g.jsx(bt,{value:r,filter:v,onChange:u,suggestWhenEmpty:!0,openOnFocus:!0,...p,children:({isOpen:y})=>g.jsxs(g.Fragment,{children:[g.jsx(bn,{variant:"flushed",size:"sm",h:6,autoComplete:"off",value:r,...(i==null?void 0:i(y))??o}),g.jsx(It,{role:"menu",py:1,...d,children:t.map(f=>g.jsx(xt,{value:f,label:f.value,role:"menuitem",fontSize:"sm",p:1,mx:1,...h,children:n?n(f):f.value},f.id))})]})})}const bn=({value:e,...t})=>{const{setQuery:n}=B();return c.useEffect(()=>{n(e??"")},[e]),g.jsx(De,{...t})};try{rmgautocomplete.displayName="rmgautocomplete",rmgautocomplete.__docgenInfo={description:"",displayName:"rmgautocomplete",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},displayHandler:{defaultValue:null,description:"",name:"displayHandler",required:!1,type:{name:"((item: T) => string | number | ReactElement<any, string | JSXElementConstructor<any>>)"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"((query: string, item: T) => boolean)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: T) => void)"}},InputProps:{defaultValue:null,description:"",name:"InputProps",required:!1,type:{name:"AutoCompleteInputProps"}},InputPropsByState:{defaultValue:null,description:"",name:"InputPropsByState",required:!1,type:{name:"((isOpen: boolean) => AutoCompleteInputProps)"}},ListProps:{defaultValue:null,description:"",name:"ListProps",required:!1,type:{name:"AutoCompleteListProps"}},ItemProps:{defaultValue:null,description:"",name:"ItemProps",required:!1,type:{name:"AutoCompleteItemProps"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},closeOnBlur:{defaultValue:null,description:"",name:"closeOnBlur",required:!1,type:{name:"boolean"}},closeOnSelect:{defaultValue:null,description:"",name:"closeOnSelect",required:!1,type:{name:"boolean"}},prefocusFirstItem:{defaultValue:null,description:"",name:"prefocusFirstItem",required:!1,type:{name:"boolean"}},creatable:{defaultValue:null,description:"",name:"creatable",required:!1,type:{name:"boolean"}},defaultEmptyStateProps:{defaultValue:null,description:"",name:"defaultEmptyStateProps",required:!1,type:{name:"FlexProps"}},defaultIsOpen:{defaultValue:null,description:"",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"any[]"}},disableFilter:{defaultValue:null,description:"",name:"disableFilter",required:!1,type:{name:"boolean"}},emphasize:{defaultValue:null,description:"",name:"emphasize",required:!1,type:{name:"boolean | SystemStyleObject"}},emptyState:{defaultValue:null,description:"",name:"emptyState",required:!1,type:{name:"MaybeRenderProp<{ query: any; }>"}},focusInputOnSelect:{defaultValue:null,description:"",name:"focusInputOnSelect",required:!1,type:{name:"boolean"}},freeSolo:{defaultValue:null,description:"",name:"freeSolo",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},listAllValuesOnFocus:{defaultValue:null,description:"",name:"listAllValuesOnFocus",required:!1,type:{name:"boolean"}},matchWidth:{defaultValue:null,description:"",name:"matchWidth",required:!1,type:{name:"boolean"}},maxSelections:{defaultValue:null,description:"",name:"maxSelections",required:!1,type:{name:"number"}},maxSuggestions:{defaultValue:null,description:"",name:"maxSuggestions",required:!1,type:{name:"number"}},onCreateOption:{defaultValue:null,description:"",name:"onCreateOption",required:!1,type:{name:'((params: { item: Item; selectMethod: "mouse" | "keyboard" | null; }) => boolean | void)'}},onSelectOption:{defaultValue:null,description:"",name:"onSelectOption",required:!1,type:{name:'((params: { item: Item; selectMethod: "mouse" | "keyboard" | null; isNewInput?: boolean; }) => boolean | void)'}},onOptionFocus:{defaultValue:null,description:"",name:"onOptionFocus",required:!1,type:{name:'((params: { item: Item; focusMethod: "mouse" | "keyboard" | null; isNewInput?: boolean; }) => boolean | void)'}},onTagRemoved:{defaultValue:null,description:"",name:"onTagRemoved",required:!1,type:{name:"((removedTag: any, item: Item, tags: ItemTag[]) => void)"}},onReady:{defaultValue:null,description:"",name:"onReady",required:!1,type:{name:"((params: OnReadyProps) => void)"}},openOnFocus:{defaultValue:null,description:"",name:"openOnFocus",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"auto"'},{value:'"end"'},{value:'"start"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"start-start"'},{value:'"start-end"'},{value:'"end-start"'},{value:'"end-end"'}]}},restoreOnBlurIfEmpty:{defaultValue:null,description:"",name:"restoreOnBlurIfEmpty",required:!1,type:{name:"boolean"}},rollNavigation:{defaultValue:null,description:"",name:"rollNavigation",required:!1,type:{name:"boolean"}},selectOnFocus:{defaultValue:null,description:"",name:"selectOnFocus",required:!1,type:{name:"boolean"}},shouldRenderSuggestions:{defaultValue:null,description:"",name:"shouldRenderSuggestions",required:!1,type:{name:"((value: string) => boolean)"}},submitKeys:{defaultValue:null,description:"",name:"submitKeys",required:!1,type:{name:"string[]"}},suggestWhenEmpty:{defaultValue:null,description:"",name:"suggestWhenEmpty",required:!1,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"any[]"}}}}}catch{}export{Tn as R};
