var _=Object.defineProperty;var c=(o,i)=>_(o,"name",{value:i,configurable:!0});import{j as p}from"./jsx-runtime-ad6454d2.js";import{r as m}from"./index-2a7246bb.js";import{a as x,B}from"./chunk-NAA7TEES-cb2f64e8.js";import{k as R,l as V,g as G}from"./chunk-QEVFQ4EU-4f2764db.js";var T={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},k={horizontal:o=>({"& > *:not(style) ~ *:not(style)":{marginStart:o}}),vertical:o=>({"& > *:not(style) ~ *:not(style)":{marginTop:o}})},v=R(c(function(i,n){const{size:a,colorScheme:d,variant:l,className:s,spacing:f="0.5rem",isAttached:t,isDisabled:r,orientation:e="horizontal",...u}=i,g=V("chakra-button__group",s),h=m.useMemo(()=>({size:a,colorScheme:d,variant:l,isDisabled:r}),[a,d,l,r]);let S={display:"inline-flex",...t?T[e]:k[e](f)};const b=e==="vertical";return p(x,{value:h,children:p(G.div,{ref:n,role:"group",__css:S,className:g,"data-attached":t?"":void 0,"data-orientation":e,flexDir:b?"column":void 0,...u})})},"ButtonGroup2"));v.displayName="ButtonGroup";function y(o){const{selections:i,defaultValue:n,onChange:a,multiSelect:d}=o,[l,s]=m.useState(n);m.useEffect(()=>{n.toString()&&s(n)},[n.toString()]);const f=c(t=>{if(d){const r=l,e=r.includes(t)?r.filter(u=>u!==t):[...r,t];s(e),a==null||a(e)}else s(t),a==null||a(t)},"handleToggle");return p(v,{size:"xs",isAttached:!0,colorScheme:"primary",variant:"outline",children:i.map((t,r)=>{const e=typeof l=="object"&&l.includes(t.value)||l===t.value,u=r!==i.length-1&&!e?"-px":void 0;return p(B,{role:"checkbox","aria-checked":e,variant:e?"solid":"outline",mr:u,isDisabled:t.disabled,onClick:()=>f(t.value),children:t.label},t.value.toString())})})}c(y,"RmgButtonGroup");try{y.displayName="RmgButtonGroup",y.__docgenInfo={description:"",displayName:"RmgButtonGroup",props:{selections:{defaultValue:null,description:"",name:"selections",required:!0,type:{name:"ButtonGroupSelection<T>[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string | boolean | T[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T) => void) | ((value: T[]) => void)"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!1,type:{name:"boolean"}}}}}catch{}export{y as R};
//# sourceMappingURL=rmg-button-group-32dacd14.js.map