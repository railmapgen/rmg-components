var h=Object.defineProperty;var u=(e,t)=>h(e,"name",{value:t,configurable:!0});import{j as s,a as _}from"./jsx-runtime-ad6454d2.js";import{r as y}from"./index-2a7246bb.js";import{k as o,n as g,o as f,g as i,l as v,j as x}from"./chunk-QEVFQ4EU-4f2764db.js";import{c as S}from"./index-348bd907.js";var[R,c]=S({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),T=o((e,t)=>{const a=g("Table",e),{className:d,layout:m,...r}=f(e);return s(R,{value:a,children:s(i.table,{ref:t,__css:{tableLayout:m,...a.table},className:v("chakra-table",d),...r})})});T.displayName="Table";var D=o((e,t)=>{const a=c();return s(i.thead,{...e,ref:t,__css:a.thead})}),p=o((e,t)=>{const a=c();return s(i.tr,{...e,ref:t,__css:a.tr})}),k=o((e,t)=>{const a=c();return s(i.tbody,{...e,ref:t,__css:a.tbody})}),N=o(({isNumeric:e,...t},a)=>{const d=c();return s(i.td,{...t,ref:a,__css:d.td,"data-is-numeric":e})}),j=o(({isNumeric:e,...t},a)=>{const d=c();return s(i.th,{...t,ref:a,__css:d.th,"data-is-numeric":e})});function b(e){const{data:t,fields:a}=e,d=x("RmgDataTable"),m=t.map(r=>({data:r,display:a.reduce((l,n)=>n.key?{...l,[n.label]:{value:(r[n.key]||"").toString()}}:{...l,[n.label]:{value:n.displayHandler(r)}},{})}));return _(T,{size:"sm",sx:d,children:[s(D,{children:s(p,{children:a.map((r,l)=>r.hidden?s(y.Fragment,{},l):s(j,{p:1,children:r.label},l))})}),s(k,{children:m.map(r=>s(p,{children:a.map((l,n)=>l.hidden?s(y.Fragment,{},n):s(N,{p:1,children:r.display[l.label].value},r.data.id+"-"+n))},r.data.id))})]})}u(b,"RmgDataTable");try{b.displayName="RmgDataTable",b.__docgenInfo={description:"",displayName:"RmgDataTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"RmgDataTableFieldType<T>[]"}}}}}catch{}export{b as R};
//# sourceMappingURL=rmg-data-table-2deefec1.js.map