import{c as k}from"./index-DGaxrVvi.js";import{m as I}from"./index-CRSocYPi.js";import{f as H,b as $,o as w,d as q,c as _,e as c,g as P,h as T}from"./chunk-ZJJGQIVY-D9s8d0El.js";import{r as u}from"./index-CleY8y_P.js";import{j as y}from"./jsx-runtime-CGpYA4L6.js";var[A,E]=k({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[M,S]=k({strict:!1,name:"FormControlContext"});function L(i){const{id:r,isRequired:t,isInvalid:l,isDisabled:e,isReadOnly:s,...m}=i,f=u.useId(),a=r||`field-${f}`,b=`${a}-label`,v=`${a}-feedback`,F=`${a}-helptext`,[C,x]=u.useState(!1),[p,h]=u.useState(!1),[n,g]=u.useState(!1),O=u.useCallback((o={},d=null)=>({id:F,...o,ref:I(d,R=>{R&&h(!0)})}),[F]),j=u.useCallback((o={},d=null)=>({...o,ref:d,"data-focus":c(n),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s),id:o.id!==void 0?o.id:b,htmlFor:o.htmlFor!==void 0?o.htmlFor:a}),[a,e,n,l,s,b]),D=u.useCallback((o={},d=null)=>({id:v,...o,ref:I(d,R=>{R&&x(!0)}),"aria-live":"polite"}),[v]),N=u.useCallback((o={},d=null)=>({...o,...m,ref:d,role:"group","data-focus":c(n),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s)}),[m,e,n,l,s]),B=u.useCallback((o={},d=null)=>({...o,ref:d,role:"presentation","aria-hidden":!0,children:o.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!e,isFocused:!!n,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:C,setHasFeedbackText:x,hasHelpText:p,setHasHelpText:h,id:a,labelId:b,feedbackId:v,helpTextId:F,htmlProps:m,getHelpTextProps:O,getErrorMessageProps:D,getRootProps:N,getLabelProps:j,getRequiredIndicatorProps:B}}var z=H(function(r,t){const l=$("Form",r),e=w(r),{getRootProps:s,htmlProps:m,...f}=L(e),a=q("chakra-form-control",r.className);return y.jsx(M,{value:f,children:y.jsx(A,{value:l,children:y.jsx(_.div,{...s({},t),className:a,__css:l.container})})})});z.displayName="FormControl";var G=H(function(r,t){const l=S(),e=E(),s=q("chakra-form__helper-text",r.className);return y.jsx(_.div,{...l==null?void 0:l.getHelpTextProps(r,t),__css:e.helperText,className:s})});G.displayName="FormHelperText";function X(i){const{isDisabled:r,isInvalid:t,isReadOnly:l,isRequired:e,...s}=J(i);return{...s,disabled:r,readOnly:l,required:e,"aria-invalid":P(t),"aria-required":P(e),"aria-readonly":P(l)}}function J(i){var r,t,l;const e=S(),{id:s,disabled:m,readOnly:f,required:a,isRequired:b,isInvalid:v,isReadOnly:F,isDisabled:C,onFocus:x,onBlur:p,...h}=i,n=i["aria-describedby"]?[i["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&n.push(e.feedbackId),e!=null&&e.hasHelpText&&n.push(e.helpTextId),{...h,"aria-describedby":n.join(" ")||void 0,id:s??(e==null?void 0:e.id),isDisabled:(r=m??C)!=null?r:e==null?void 0:e.isDisabled,isReadOnly:(t=f??F)!=null?t:e==null?void 0:e.isReadOnly,isRequired:(l=a??b)!=null?l:e==null?void 0:e.isRequired,isInvalid:v??(e==null?void 0:e.isInvalid),onFocus:T(e==null?void 0:e.onFocus,x),onBlur:T(e==null?void 0:e.onBlur,p)}}export{z as F,S as a,E as b,J as c,X as u};