var l=Object.defineProperty;var a=(e,o)=>l(e,"name",{value:o,configurable:!0});import{R as i}from"./rmg-auto-complete.0f4992d5.js";import{j as n}from"./jsx-runtime.4889c434.js";import{B as u}from"./index.esm.381ad692.js";import"./rmg-debounced-input.1b99f3b8.js";import"./index.esm.80d04f83.js";import"./index.esm.2ed42a8b.js";import"./iframe.394cccab.js";import"./index.esm.7bb734c7.js";import"./index.esm.3ded612a.js";import"./index.esm.c3e89734.js";import"./index.esm.9e071a76.js";import"./index.esm.c9350490.js";import"./index.esm.7adac4ee.js";import"./index.esm.7471f004.js";const A={parameters:{storySource:{source:`import { Box } from '@chakra-ui/react';
import { RmgAutoComplete } from '.';

export default {
    title: 'RmgAutoComplete',
    component: RmgAutoComplete,
};

export const Basic = () => {
    const data = [
        { id: 'gz', value: 'Guangzhou', additionalValue: '\u5EE3\u5DDE' },
        { id: 'hk', value: 'Hong Kong', additionalValue: '\u9999\u6E2F' },
        { id: 'sh', value: 'Shanghai', additionalValue: '\u4E0A\u6D77' },
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
`,locationsMap:{basic:{startLoc:{col:21,line:9},endLoc:{col:1,line:28},startBody:{col:21,line:9},endBody:{col:1,line:28}}}}},title:"RmgAutoComplete",component:i},f=a(()=>n(u,{children:n(i,{data:[{id:"gz",value:"Guangzhou",additionalValue:"\u5EE3\u5DDE"},{id:"hk",value:"Hong Kong",additionalValue:"\u9999\u6E2F"},{id:"sh",value:"Shanghai",additionalValue:"\u4E0A\u6D77"}],displayValue:o=>o.value+" ("+o.value[0]+")",predicate:(o,t)=>o.value.toLowerCase().includes(t.toLowerCase())||o.additionalValue.toLowerCase().includes(t.toLowerCase())})}),"Basic"),R=["Basic"];export{f as Basic,R as __namedExportsOrder,A as default};
//# sourceMappingURL=rmg-auto-complete.stories.7f1e7dc1.js.map
