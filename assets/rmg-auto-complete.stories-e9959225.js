var r=Object.defineProperty;var a=(t,o)=>r(t,"name",{value:o,configurable:!0});import{j as i}from"./jsx-runtime-ad6454d2.js";import{R as n}from"./rmg-auto-complete-e45f7b78.js";import{B as l}from"./chunk-6CSUKJP7-9b35427c.js";import"./index-2a7246bb.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./rmg-debounced-input-95ae9ae2.js";import"./chunk-QJA5SDDN-5308f814.js";import"./chunk-JSSKUSQH-d3c1fd16.js";import"./index-348bd907.js";import"./index-7822c6a4.js";import"./chunk-QEVFQ4EU-4f2764db.js";import"./chunk-7NBWC5PS-d415efb0.js";import"./chunk-DKFDJSXF-62d98e4a.js";import"./index-71b8f272.js";import"./chunk-KVBLLJMP-7237d5fc.js";import"./index-44f5ac58.js";import"./index-bd0fd4cb.js";import"./index-4ad6bebe.js";import"./chunk-NAA7TEES-cb2f64e8.js";import"./emotion-react.browser.esm-6433993c.js";const k={parameters:{storySource:{source:`import { Box } from '@chakra-ui/react';
import { RmgAutoComplete } from '.';

export default {
    title: 'RmgAutoComplete',
    component: RmgAutoComplete,
};

export const Basic = () => {
    const data = [
        { id: 'gz', value: 'Guangzhou', additionalValue: '廣州' },
        { id: 'hk', value: 'Hong Kong', additionalValue: '香港' },
        { id: 'sh', value: 'Shanghai', additionalValue: '上海' },
    ];

    return (
        <Box>
            <RmgAutoComplete
                data={data}
                displayValue={item => item.value + ' (' + item.value[0] + ')'} // Guangzhou (G)
                predicate={(item, input) =>
                    item.value.toLowerCase().includes(input.toLowerCase()) ||
                    item.additionalValue.toLowerCase().includes(input.toLowerCase())
                }
            />
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:9},endLoc:{col:1,line:28},startBody:{col:21,line:9},endBody:{col:1,line:28}}}}},title:"RmgAutoComplete",component:n},S=a(()=>i(l,{children:i(n,{data:[{id:"gz",value:"Guangzhou",additionalValue:"廣州"},{id:"hk",value:"Hong Kong",additionalValue:"香港"},{id:"sh",value:"Shanghai",additionalValue:"上海"}],displayValue:o=>o.value+" ("+o.value[0]+")",predicate:(o,e)=>o.value.toLowerCase().includes(e.toLowerCase())||o.additionalValue.toLowerCase().includes(e.toLowerCase())})}),"Basic"),_=["Basic"];export{S as Basic,_ as __namedExportsOrder,k as default};
//# sourceMappingURL=rmg-auto-complete.stories-e9959225.js.map
