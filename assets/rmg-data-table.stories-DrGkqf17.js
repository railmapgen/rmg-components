import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as m}from"./rmg-data-table-Ay0Rjb2y.js";import{B as d}from"./chunk-Z6RXEUPO-gr2qFrxx.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./chunk-ZJJGQIVY-G-YO8yX9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-818H0KCj.js";const f={title:"RmgDataTable",component:m},a=()=>{const r=[{id:"001",name:"Alice",age:18},{id:"002",name:"Benjamin",age:20},{id:"003",name:"Charlie",age:19}],l=[{label:"ID",displayHandler:s=>e.jsx(d,{children:s.id})},{label:"Name",key:"name"},{label:"Age",key:"age"}];return e.jsx(m,{data:r,fields:l})};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
