var l=Object.defineProperty;var a=(e,o)=>l(e,"name",{value:o,configurable:!0});import{R as i}from"./rmg-auto-complete.8632ffdb.js";import{j as n}from"./jsx-runtime.def5eff7.js";import{B as u}from"./index.esm.b2b3757c.js";import"./rmg-debounced-input.72ec7757.js";import"./index.esm.a4a9529b.js";import"./index.esm.6ef52bc8.js";import"./iframe.a291c784.js";import"./index.esm.e1622265.js";import"./index.esm.28d0385d.js";import"./index.esm.417ce9c3.js";import"./index.esm.97fc3c9f.js";import"./index.esm.8a3b51cc.js";import"./index.esm.35044409.js";import"./index.esm.ac99eb95.js";const A={parameters:{storySource:{source:`import { Box } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-auto-complete.stories.17a340bb.js.map
