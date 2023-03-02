var m=Object.defineProperty;var t=(a,e)=>m(a,"name",{value:e,configurable:!0});import{j as n}from"./jsx-runtime-ad6454d2.js";import{R as l}from"./rmg-data-table-9585ab76.js";import{B as o}from"./chunk-FQXH56BT-9b3b24a6.js";import"./index-2a7246bb.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-QEVFQ4EU-457e66a5.js";import"./index-348bd907.js";const T={parameters:{storySource:{source:`import { RmgDataTable, RmgDataTableDataType, RmgDataTableFieldType } from './rmg-data-table';
import { Badge } from '@chakra-ui/react';

export default {
    title: 'RmgDataTable',
    component: RmgDataTable,
};

export const Basic = () => {
    const data: RmgDataTableDataType[] = [
        { id: '001', name: 'Alice', age: 18 },
        { id: '002', name: 'Benjamin', age: 20 },
        { id: '003', name: 'Charlie', age: 19 },
    ];

    const fields: RmgDataTableFieldType<RmgDataTableDataType>[] = [
        { label: 'ID', displayHandler: item => <Badge>{item.id}</Badge> },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
    ];

    return <RmgDataTable data={data} fields={fields} />;
};
`,locationsMap:{basic:{startLoc:{col:21,line:9},endLoc:{col:1,line:23},startBody:{col:21,line:9},endBody:{col:1,line:23}}}}},title:"RmgDataTable",component:l},y=t(()=>n(l,{data:[{id:"001",name:"Alice",age:18},{id:"002",name:"Benjamin",age:20},{id:"003",name:"Charlie",age:19}],fields:[{label:"ID",displayHandler:i=>n(o,{children:i.id})},{label:"Name",key:"name"},{label:"Age",key:"age"}]}),"Basic"),f=["Basic"];export{y as Basic,f as __namedExportsOrder,T as default};
//# sourceMappingURL=rmg-data-table.stories-6b5395b7.js.map
