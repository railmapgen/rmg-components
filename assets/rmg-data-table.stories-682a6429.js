import{j as e}from"./jsx-runtime-670450c2.js";import{R as m}from"./rmg-data-table-f2c1bb1f.js";import{B as l}from"./chunk-FQXH56BT-6847d39d.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./index-6d9c108a.js";const B={title:"RmgDataTable",component:m},a=()=>e(m,{data:[{id:"001",name:"Alice",age:18},{id:"002",name:"Benjamin",age:20},{id:"003",name:"Charlie",age:19}],fields:[{label:"ID",displayHandler:r=>e(l,{children:r.id})},{label:"Name",key:"name"},{label:"Age",key:"age"}]});var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const R=["Basic"];export{a as Basic,R as __namedExportsOrder,B as default};
//# sourceMappingURL=rmg-data-table.stories-682a6429.js.map
