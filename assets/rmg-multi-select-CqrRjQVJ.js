import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as c}from"./index-CleY8y_P.js";import{I as $}from"./chunk-2GBDXOMA-DxAeh1k-.js";import{c as N}from"./index-DGaxrVvi.js";import{g as z}from"./index-BnL1FQTH.js";import{c as u,f as v,b as w,o as V,k as G,d as U,a as W}from"./chunk-ZJJGQIVY-D9s8d0El.js";import{B as X}from"./chunk-Z6RXEUPO-BTnRnLFG.js";import{B as F}from"./chunk-PULVB27S-BYIORNcw.js";import{u as H}from"./chunk-7D6N5TE5-i1xKKXqd.js";import{k as b}from"./emotion-react.browser.esm-BoJAA9QB.js";import{u as J}from"./chunk-R5W6LHQW-BcYmCOxF.js";import{P as K,b as Q}from"./chunk-24I2HV4N-BDNbYGOa.js";import{P as Y}from"./chunk-DY5QRMBO-Bg2qY5hc.js";import{P as Z}from"./chunk-RLMGYZLY-DD8SHHIe.js";var[Pe,ee]=N({name:"CheckboxGroupContext",strict:!1});function te(n){const[s,r]=c.useState(n),[t,o]=c.useState(!1);return n!==s&&(o(!0),r(n)),t}function se(n){return e.jsx(u.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...n,children:e.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function ne(n){return e.jsx(u.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...n,children:e.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function re(n){const{isIndeterminate:s,isChecked:r,...t}=n,o=s?ne:se;return r||s?e.jsx(u.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsx(o,{...t})}):null}var oe={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},ie={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},ae=b({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),le=b({from:{opacity:0},to:{opacity:1}}),ce=b({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),R=v(function(s,r){const t=ee(),o={...t,...s},l=w("Checkbox",o),a=V(s),{spacing:d="0.5rem",className:m,children:p,iconColor:y,iconSize:h,icon:k=e.jsx(re,{}),isChecked:_,isDisabled:C=t==null?void 0:t.isDisabled,onChange:i,inputProps:f,...x}=a;let j=_;t!=null&&t.value&&a.value&&(j=t.value.includes(a.value));let I=i;t!=null&&t.onChange&&a.value&&(I=G(t.onChange,i));const{state:g,getInputProps:D,getCheckboxProps:M,getLabelProps:O,getRootProps:T}=H({...x,isDisabled:C,isChecked:j,onChange:I}),L=te(g.isChecked),q=c.useMemo(()=>({animation:L?g.isIndeterminate?`${le} 20ms linear, ${ce} 200ms linear`:`${ae} 200ms linear`:void 0,fontSize:h,color:y,...l.icon}),[y,h,L,g.isIndeterminate,l.icon]),E=c.cloneElement(k,{__css:q,isIndeterminate:g.isIndeterminate,isChecked:g.isChecked});return e.jsxs(u.label,{__css:{...ie,...l.container},className:U("chakra-checkbox",m),...T(),children:[e.jsx("input",{className:"chakra-checkbox__input",...D(f,r)}),e.jsx(u.span,{__css:{...oe,...l.control},className:"chakra-checkbox__control",...M(),children:E}),p&&e.jsx(u.span,{className:"chakra-checkbox__label",...O(),__css:{marginStart:d,...l.label},children:p})]})});R.displayName="Checkbox";var[de,A]=N({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),S=v(function(s,r){const t=w("List",s),{children:o,styleType:l="none",stylePosition:a,spacing:d,...m}=V(s),p=z(o),h=d?{["& > *:not(style) ~ *:not(style)"]:{mt:d}}:{};return e.jsx(de,{value:t,children:e.jsx(u.ul,{ref:r,listStyleType:l,listStylePosition:a,role:"list",__css:{...t.container,...h},...m,children:p})})});S.displayName="List";var ue=v((n,s)=>{const{as:r,...t}=n;return e.jsx(S,{ref:s,as:"ol",styleType:"decimal",marginStart:"1em",...t})});ue.displayName="OrderedList";var me=v(function(s,r){const{as:t,...o}=s;return e.jsx(S,{ref:r,as:"ul",styleType:"initial",marginStart:"1em",...o})});me.displayName="UnorderedList";var B=v(function(s,r){const t=A();return e.jsx(u.li,{ref:r,...s,__css:t.item})});B.displayName="ListItem";var pe=v(function(s,r){const t=A();return e.jsx($,{ref:r,role:"presentation",...s,__css:t.icon})});pe.displayName="ListIcon";const P=n=>{var C;const{displayValue:s,selections:r,defaultValue:t,onChange:o}=n,l=W("RmgMultiSelect"),[a,d]=c.useState(t),[m,p]=c.useState(!1),y=c.useRef(null),h=c.useRef(null);J({ref:y,handler:()=>p(!1)}),c.useEffect(()=>{t.toString()&&d(t)},[t.toString()]);const k=a.filter(i=>r.some(f=>f.value===i)).length,_=(i,f)=>{if(f){if(!a.includes(i.value)){const x=[...a,i.value];d(x),o==null||o(x)}}else{const x=a.filter(j=>j!==i.value);d(x),o==null||o(x)}};return e.jsx(F,{ref:y,sx:l,children:e.jsxs(K,{placement:"bottom-start",isOpen:m,autoFocus:!1,children:[e.jsx(Y,{children:e.jsxs("div",{className:"rmg-multi-select__wrapper",role:"combobox","aria-expanded":m,"aria-controls":(C=h.current)==null?void 0:C.id,"aria-label":s,onClick:()=>p(i=>!i),children:[e.jsxs("div",{className:`rmg-multi-select__field ${m?"active":""}`,children:[e.jsx("span",{children:s}),e.jsxs(X,{colorScheme:k?"blue":void 0,role:"status",children:[k,"/",r.length]})]}),e.jsx("div",{className:"rmg-multi-select__icon-wrapper",children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]})}),e.jsx(Q,{ref:h,children:e.jsx(Z,{children:e.jsx(S,{children:r.map(i=>e.jsx(B,{children:e.jsx(R,{isChecked:a.includes(i.value),isDisabled:i.disabled,onChange:({target:{checked:f}})=>_(i,f),children:i.label})},i.value.toString()))})})})]})})};try{P.displayName="RmgMultiSelect",P.__docgenInfo={description:"",displayName:"RmgMultiSelect",props:{displayValue:{defaultValue:null,description:"",name:"displayValue",required:!0,type:{name:"string"}},selections:{defaultValue:null,description:"",name:"selections",required:!0,type:{name:"Selection[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}}}catch{}export{P as R};