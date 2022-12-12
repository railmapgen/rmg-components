var l=Object.defineProperty;var a=(e,o)=>l(e,"name",{value:o,configurable:!0});import{R as i}from"./rmg-auto-complete.20e391d0.js";import{j as n}from"./jsx-runtime.f29acd6c.js";import{B as u}from"./index.esm.f10cda7a.js";import"./rmg-debounced-input.a0ca4f6f.js";import"./index.esm.0f20b62c.js";import"./index.esm.8968f01e.js";import"./iframe.8b94e34e.js";import"./index.esm.c4f03bd3.js";import"./index.esm.ce0d501f.js";import"./index.esm.cb10938e.js";import"./index.esm.babaacc6.js";import"./index.esm.67c330a1.js";import"./index.esm.e1de2d7c.js";import"./index.esm.9ff6ed4c.js";const A={parameters:{storySource:{source:`import { Box } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-auto-complete.stories.ae794a89.js.map
