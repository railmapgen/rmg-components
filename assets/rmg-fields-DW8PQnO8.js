import{j as a}from"./jsx-runtime-CGpYA4L6.js";import{r as h}from"./index-CleY8y_P.js";import{R as j}from"./rmg-label-HR1s1Lmt.js";import{R as w}from"./rmg-debounced-input-DfhsuQa2.js";import{R as C}from"./index-DIKQh-S-.js";import{R as k}from"./rmg-select-hPAtE0Sd.js";import{R as v}from"./rmg-throttled-slider-zWWYz63w.js";import{f as S,b as D,o as N,c as p,d as I,a as W}from"./chunk-ZJJGQIVY-D9s8d0El.js";import{u as F}from"./chunk-7D6N5TE5-i1xKKXqd.js";import{F as L}from"./chunk-KRPLQIP4-vbZG9yKz.js";var b=S(function(n,i){const t=D("Switch",n),{spacing:s="0.5rem",children:l,...m}=N(n),{getIndicatorProps:u,getInputProps:e,getCheckboxProps:c,getRootProps:r,getLabelProps:x}=F(m),_=h.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...t.container}),[t.container]),y=h.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...t.track}),[t.track]),R=h.useMemo(()=>({userSelect:"none",marginStart:s,...t.label}),[s,t.label]);return a.jsxs(p.label,{...r(),className:I("chakra-switch",n.className),__css:_,children:[a.jsx("input",{className:"chakra-switch__input",...e({},i)}),a.jsx(p.span,{...c(),className:"chakra-switch__track",__css:y,children:a.jsx(p.span,{__css:t.thumb,className:"chakra-switch__thumb",...u()})}),l&&a.jsx(p.span,{className:"chakra-switch__label",...x(),__css:R,children:l})]})});b.displayName="Switch";const d=o=>{const{children:n,noWrap:i}=o,t=W("RmgOutput",{noWrap:i});return a.jsx(p.output,{sx:t,children:n})};try{d.displayName="RmgOutput",d.__docgenInfo={description:"",displayName:"RmgOutput",props:{noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}}}}}catch{}function g(o){const{fields:n,noLabel:i,minW:t}=o;return a.jsx(L,{wrap:"wrap",children:n.map((s,l)=>{if(s.hidden)return a.jsx(h.Fragment,{},l);const m=s.minW||t,u=m==="full";return a.jsx(j,{className:u?"mw-full":"",label:s.label,flex:u?void 0:1,minW:u?void 0:m,noLabel:i,oneLine:s.oneLine,children:(e=>{switch(e.type){case"input":return a.jsx(w,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList,isDisabled:e.isDisabled});case"output":return a.jsx(d,{noWrap:e.noWrap,children:e.value});case"textarea":return a.jsx(C,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange,isDisabled:e.isDisabled});case"slider":return a.jsx(v,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon,isDisabled:e.isDisabled});case"select":return a.jsx(k,{defaultValue:e.value,onChange:({target:{value:c}})=>{var r;return(r=e.onChange)==null?void 0:r.call(e,typeof e.value=="number"?Number(c):c.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid,isDisabled:e.isDisabled});case"switch":return a.jsx(b,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:({target:{checked:c}})=>{var r;return(r=e.onChange)==null?void 0:r.call(e,c)}});case"custom":return e.component;default:return a.jsx("div",{})}})(s)},l)})})}try{g.displayName="RmgFields",g.__docgenInfo={description:"",displayName:"RmgFields",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"RmgFieldsField<T>[]"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},minW:{defaultValue:null,description:"",name:"minW",required:!1,type:{name:'number | `${number}px` | "full"'}}}}}catch{}export{g as R};