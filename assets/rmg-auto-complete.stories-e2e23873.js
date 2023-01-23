var r=Object.defineProperty;var a=(t,o)=>r(t,"name",{value:o,configurable:!0});import{R as n}from"./rmg-auto-complete-9fab249d.js";import{j as i}from"./jsx-runtime-ad6454d2.js";import{B as l}from"./chunk-6CSUKJP7-66e6822f.js";import"./index-2a7246bb.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./rmg-debounced-input-b7b264e4.js";import"./chunk-QJA5SDDN-5308f814.js";import"./chunk-JSSKUSQH-8dbb8353.js";import"./index-348bd907.js";import"./index-7822c6a4.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./chunk-7NBWC5PS-249f6b55.js";import"./chunk-DKFDJSXF-f7053077.js";import"./index-71b8f272.js";import"./chunk-KVBLLJMP-d3bccfe1.js";import"./index-44f5ac58.js";import"./index-e3d200d5.js";import"./index-4ad6bebe.js";import"./chunk-NAA7TEES-810879e0.js";import"./emotion-react.browser.esm-608dfa36.js";const k={parameters:{storySource:{source:`import { Box } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-auto-complete.stories-e2e23873.js.map
