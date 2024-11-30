import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as m}from"./rmg-data-table-BkbjloOk.js";import{B as d}from"./badge-Cn7uns25.js";import"./index-YTOF1_EJ.js";import"./use-style-config-CZvBo0tQ.js";import"./context-CXQEnuw_.js";import"./theming-props-BSFQkWYI.js";const y={title:"RmgDataTable",component:m},a=()=>{const r=[{id:"001",name:"Alice",age:18},{id:"002",name:"Benjamin",age:20},{id:"003",name:"Charlie",age:19}],l=[{label:"ID",displayHandler:s=>e.jsx(d,{children:s.id})},{label:"Name",key:"name"},{label:"Age",key:"age"}];return e.jsx(m,{data:r,fields:l})};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const f=["Basic"];export{a as Basic,f as __namedExportsOrder,y as default};
