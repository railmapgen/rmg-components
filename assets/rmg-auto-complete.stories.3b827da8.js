var l=Object.defineProperty;var a=(e,o)=>l(e,"name",{value:o,configurable:!0});import{R as i}from"./rmg-auto-complete.fc6b42d8.js";import{j as n}from"./jsx-runtime.711b232c.js";import{B as u}from"./index.esm.57965a73.js";import"./rmg-debounced-input.bcba0963.js";import"./index.esm.1411880c.js";import"./index.esm.63e18ebe.js";import"./iframe.addee52f.js";import"./index.esm.0bb6d3ad.js";import"./index.esm.b2675e82.js";import"./index.esm.e7ac95ee.js";import"./index.esm.8b06c414.js";import"./index.esm.8fac31b9.js";import"./index.esm.1d0ca704.js";import"./index.esm.14cd0817.js";const A={parameters:{storySource:{source:`import { Box } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-auto-complete.stories.3b827da8.js.map
