import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as m}from"./rmg-data-table-BFyTQSLj.js";import{B as d}from"./chunk-Z6RXEUPO-BTnRnLFG.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./index-DGaxrVvi.js";const f={title:"RmgDataTable",component:m},a=()=>{const r=[{id:"001",name:"Alice",age:18},{id:"002",name:"Benjamin",age:20},{id:"003",name:"Charlie",age:19}],l=[{label:"ID",displayHandler:s=>e.jsx(d,{children:s.id})},{label:"Name",key:"name"},{label:"Age",key:"age"}];return e.jsx(m,{data:r,fields:l})};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const data: RmgDataTableDataType[] = [{
    id: '001',
    name: 'Alice',
    age: 18
  }, {
    id: '002',
    name: 'Benjamin',
    age: 20
  }, {
    id: '003',
    name: 'Charlie',
    age: 19
  }];
  const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [{
    label: 'ID',
    displayHandler: item => <Badge>{item.id}</Badge>
  }, {
    label: 'Name',
    key: 'name'
  }, {
    label: 'Age',
    key: 'age'
  }];
  return <RmgDataTable data={data} fields={fields} />;
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const B=["Basic"];export{a as Basic,B as __namedExportsOrder,f as default};
