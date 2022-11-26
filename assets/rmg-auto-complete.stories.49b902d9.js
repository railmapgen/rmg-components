var l=Object.defineProperty;var a=(e,o)=>l(e,"name",{value:o,configurable:!0});import{R as i}from"./rmg-auto-complete.71b6496d.js";import{j as n}from"./jsx-runtime.cac6885b.js";import{B as u}from"./index.esm.2bb7c29e.js";import"./rmg-debounced-input.073ae9d7.js";import"./index.esm.77736ccf.js";import"./index.esm.178b0ab7.js";import"./iframe.81000197.js";import"./index.esm.9f2ec38f.js";import"./index.esm.363678a0.js";import"./index.esm.79b62cac.js";import"./index.esm.e6173dde.js";import"./index.esm.ed70b3fc.js";import"./index.esm.d0c79f4f.js";import"./index.esm.a296a2ac.js";const A={parameters:{storySource:{source:`import { Box } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-auto-complete.stories.49b902d9.js.map
