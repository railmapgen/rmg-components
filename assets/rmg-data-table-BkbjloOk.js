import{j as a}from"./jsx-runtime-D_3pcrNB.js";import{r as u}from"./index-YTOF1_EJ.js";import{f as d,b as x,c,a as T}from"./use-style-config-CZvBo0tQ.js";import{c as h}from"./context-CXQEnuw_.js";import{o as _,c as f}from"./theming-props-BSFQkWYI.js";const[j,i]=h({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),b=d((s,t)=>{const e=x("Table",s),{className:o,layout:m,...r}=_(s);return a.jsx(j,{value:e,children:a.jsx(c.table,{ref:t,__css:{tableLayout:m,...e.table},className:f("chakra-table",o),...r})})});b.displayName="Table";const g=d((s,t)=>{const e=i();return a.jsx(c.tbody,{...s,ref:t,__css:e.tbody})}),R=d(({isNumeric:s,...t},e)=>{const o=i();return a.jsx(c.td,{...t,ref:e,__css:o.td,"data-is-numeric":s})}),S=d(({isNumeric:s,...t},e)=>{const o=i();return a.jsx(c.th,{...t,ref:e,__css:o.th,"data-is-numeric":s})}),D=d((s,t)=>{const e=i();return a.jsx(c.thead,{...s,ref:t,__css:e.thead})}),p=d((s,t)=>{const e=i();return a.jsx(c.tr,{...s,ref:t,__css:e.tr})});function y(s){const{data:t,fields:e}=s,o=T("RmgDataTable"),m=t.map(r=>({data:r,display:e.reduce((l,n)=>n.key?{...l,[n.label]:{value:(r[n.key]||"").toString()}}:{...l,[n.label]:{value:n.displayHandler(r)}},{})}));return a.jsxs(b,{size:"sm",sx:o,children:[a.jsx(D,{children:a.jsx(p,{children:e.map((r,l)=>r.hidden?a.jsx(u.Fragment,{},l):a.jsx(S,{p:1,children:r.label},l))})}),a.jsx(g,{children:m.map(r=>a.jsx(p,{children:e.map((l,n)=>l.hidden?a.jsx(u.Fragment,{},n):a.jsx(R,{p:1,children:r.display[l.label].value},r.data.id+"-"+n))},r.data.id))})]})}try{y.displayName="RmgDataTable",y.__docgenInfo={description:"",displayName:"RmgDataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"RmgDataTableFieldType<T>[]"}}}}}catch{}export{y as R};