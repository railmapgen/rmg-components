import{j as a}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{R}from"./rmg-label-30304b46.js";import{R as j}from"./rmg-debounced-input-5e3e96cc.js";import{R as v}from"./index-b79bff57.js";import{R as w}from"./rmg-select-d31abc92.js";import{R as C}from"./rmg-throttled-slider-041ff164.js";import{u as S}from"./chunk-HPA3SDH4-e0036574.js";import{f as N,b as F,o as I,c as m,d as L,h as d}from"./chunk-QEVFQ4EU-3b04e59c.js";import{F as D}from"./chunk-MPFPK3CX-f34fe2a1.js";var b=N(function(c,h){const t=F("Switch",c),{spacing:s="0.5rem",children:i,...l}=I(c),{state:r,getInputProps:e,getCheckboxProps:o,getRootProps:n,getLabelProps:x}=S(l),_=u.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...t.container}),[t.container]),y=u.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...t.track}),[t.track]),k=u.useMemo(()=>({userSelect:"none",marginStart:s,...t.label}),[s,t.label]);return a.jsxs(m.label,{...n(),className:L("chakra-switch",c.className),__css:_,children:[a.jsx("input",{className:"chakra-switch__input",...e({},h)}),a.jsx(m.span,{...o(),className:"chakra-switch__track",__css:y,children:a.jsx(m.span,{__css:t.thumb,className:"chakra-switch__thumb","data-checked":d(r.isChecked),"data-hover":d(r.isHovered)})}),i&&a.jsx(m.span,{className:"chakra-switch__label",...x(),__css:k,children:i})]})});b.displayName="Switch";function g(p){const{fields:c,noLabel:h,minW:t}=p;return a.jsx(D,{wrap:"wrap",children:c.map((s,i)=>{if(s.hidden)return a.jsx(u.Fragment,{},i);const l=s.minW||t,r=l==="full";return a.jsx(R,{className:r?"mw-full":"",label:s.label,flex:r?void 0:1,minW:r?void 0:l,noLabel:h,oneLine:s.oneLine,children:(e=>{switch(e.type){case"input":return a.jsx(j,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList});case"textarea":return a.jsx(v,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange});case"slider":return a.jsx(C,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon});case"select":return a.jsx(w,{defaultValue:e.value,onChange:({target:{value:o}})=>{var n;return(n=e.onChange)==null?void 0:n.call(e,typeof e.value=="number"?Number(o):o.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid});case"switch":return a.jsx(b,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:({target:{checked:o}})=>{var n;return(n=e.onChange)==null?void 0:n.call(e,o)}});case"custom":return e.component;default:return a.jsx("div",{})}})(s)},i)})})}try{g.displayName="RmgFields",g.__docgenInfo={description:"",displayName:"RmgFields",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"RmgFieldsField<T>[]"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},minW:{defaultValue:null,description:"",name:"minW",required:!1,type:{name:'number | "full" | `${number}px`'}}}}}catch{}export{g as R};
//# sourceMappingURL=rmg-fields-f5f85adc.js.map