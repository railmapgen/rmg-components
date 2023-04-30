import{a as v,j as a}from"./jsx-runtime-670450c2.js";import{r as u}from"./index-f1f749bf.js";import{R as w}from"./rmg-label-c244f4e0.js";import{R as C}from"./rmg-debounced-input-b1648484.js";import{R}from"./index-8682b39e.js";import{R as S}from"./rmg-select-cef7a22e.js";import{R as N}from"./rmg-throttled-slider-103018f9.js";import{u as F}from"./chunk-3NTD6TBK-b04e9b6d.js";import{l as I,o as L,p as D,g as m,n as V,v as g}from"./chunk-QEVFQ4EU-efd3d6a4.js";import{F as M}from"./chunk-MPFPK3CX-501e08a9.js";var b=I(function(c,h){const t=L("Switch",c),{spacing:n="0.5rem",children:l,...i}=D(c),{state:r,getInputProps:e,getCheckboxProps:o,getRootProps:s,getLabelProps:_}=F(i),y=u.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...t.container}),[t.container]),x=u.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...t.track}),[t.track]),k=u.useMemo(()=>({userSelect:"none",marginStart:n,...t.label}),[n,t.label]);return v(m.label,{...s(),className:V("chakra-switch",c.className),__css:y,children:[a("input",{className:"chakra-switch__input",...e({},h)}),a(m.span,{...o(),className:"chakra-switch__track",__css:x,children:a(m.span,{__css:t.thumb,className:"chakra-switch__thumb","data-checked":g(r.isChecked),"data-hover":g(r.isHovered)})}),l&&a(m.span,{className:"chakra-switch__label",..._(),__css:k,children:l})]})});b.displayName="Switch";function d(p){const{fields:c,noLabel:h,minW:t}=p;return a(M,{wrap:"wrap",children:c.map((n,l)=>{if(n.hidden)return a(u.Fragment,{},l);const i=n.minW||t,r=i==="full";return a(w,{className:r?"mw-full":"",label:n.label,flex:r?void 0:1,minW:r?void 0:i,noLabel:h,oneLine:n.oneLine,children:(e=>{switch(e.type){case"input":return a(C,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList});case"textarea":return a(R,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange});case"slider":return a(N,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon});case"select":return a(S,{defaultValue:e.value,onChange:({target:{value:o}})=>{var s;return(s=e.onChange)==null?void 0:s.call(e,typeof e.value=="number"?Number(o):o.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid});case"switch":return a(b,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:({target:{checked:o}})=>{var s;return(s=e.onChange)==null?void 0:s.call(e,o)}});case"custom":return e.component;default:return a("div",{})}})(n)},l)})})}try{d.displayName="RmgFields",d.__docgenInfo={description:"",displayName:"RmgFields",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"RmgFieldsField<T>[]"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},minW:{defaultValue:null,description:"",name:"minW",required:!1,type:{name:'number | "full" | `${number}px`'}}}}}catch{}export{d as R};
//# sourceMappingURL=rmg-fields-4fcabc2b.js.map
