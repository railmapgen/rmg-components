import{j as a,a as V}from"./jsx-runtime-670450c2.js";import{r as l}from"./index-f1f749bf.js";import{R as v}from"./rmg-debounced-input-b1648484.js";import{u as C,P as R,L as b,a as x}from"./chunk-7NBWC5PS-d9ab3e8f.js";import{P as I,a as _,b as q}from"./chunk-KVBLLJMP-7614d09d.js";import{B as S}from"./chunk-6CSUKJP7-9c438e99.js";import{B as w}from"./chunk-NAA7TEES-fcf38781.js";function c(s){const{data:u,displayValue:n,displayHandler:d,predicate:f,defaultValue:t,onChange:i,isInvalid:y}=s,p=l.useRef(null),[m,r]=l.useState(t?n(t):""),[g,o]=l.useState(!1);C({ref:p,handler:()=>o(!1)}),l.useEffect(()=>{r(t?n(t):"")},[JSON.stringify(u),JSON.stringify(t)]);const h=e=>{r(n(e)),o(!1),i==null||i(e)};return a(S,{ref:p,children:V(I,{placement:"bottom-start",isOpen:g,autoFocus:!1,children:[a(R,{children:a(v,{defaultValue:m,onDebouncedChange:e=>r(e),onFocus:()=>o(!0),isInvalid:y})}),a(_,{w:"unset",minW:200,children:a(q,{p:0,children:a(b,{role:"menu",maxH:270,overflowY:"auto",children:u.filter(e=>f(e,m)).map(e=>a(x,{role:"none",children:a(w,{role:"menuitem",size:"sm",variant:"ghost",justifyContent:"flex-start",flexShrink:0,borderRadius:0,w:"100%",onClick:()=>h(e),children:d?d(e):n(e)})},e.id))})})})]})})}try{c.displayName="RmgAutoComplete",c.__docgenInfo={description:"",displayName:"RmgAutoComplete",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!0,type:{name:"(item: T) => string"}},displayHandler:{defaultValue:null,description:"",name:"displayHandler",required:!1,type:{name:"((item: T) => string | number | ReactElement<any, string | JSXElementConstructor<any>>)"}},predicate:{defaultValue:null,description:"",name:"predicate",required:!0,type:{name:"(item: T, input: string) => boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"{ id: string; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: T) => void)"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}}}}}catch{}export{c as R};
//# sourceMappingURL=rmg-auto-complete-419865f7.js.map
