import{j as e}from"./jsx-runtime-94f6e698.js";import{R as m}from"./rmg-data-table-331186a6.js";import{B as d}from"./chunk-FQXH56BT-3852c711.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-QEVFQ4EU-3b04e59c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./index-f800231c.js";const f={title:"RmgDataTable",component:m},a=()=>{const r=[{id:"001",name:"Alice",age:18},{id:"002",name:"Benjamin",age:20},{id:"003",name:"Charlie",age:19}],l=[{label:"ID",displayHandler:s=>e.jsx(d,{children:s.id})},{label:"Name",key:"name"},{label:"Age",key:"age"}];return e.jsx(m,{data:r,fields:l})};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=rmg-data-table.stories-f1846d2a.js.map
