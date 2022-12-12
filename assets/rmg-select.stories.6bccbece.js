var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{R as i}from"./rmg-select.4f1d815a.js";import{r as l,a as o,j as s}from"./jsx-runtime.f29acd6c.js";import{B as a,T as p}from"./index.esm.f10cda7a.js";import{B as d}from"./index.esm.9ff6ed4c.js";import"./index.esm.c4f03bd3.js";import"./index.esm.8968f01e.js";import"./iframe.8b94e34e.js";import"./index.esm.ce0d501f.js";const T={parameters:{storySource:{source:`import { Box, Button, Text } from '@chakra-ui/react';
import { RmgSelect } from './rmg-select';
import { useState } from 'react';

export default {
    title: 'RmgSelect',
    component: RmgSelect,
};

export const Basic = () => {
    const [selection, setSelection] = useState('undefined');

    const options = {
        undefined: 'Please select...',
        opt1: 'Option 1',
        opt2: 'Option 2',
    };

    return (
        <Box>
            <RmgSelect
                defaultValue={selection}
                options={options}
                disabledOptions={['undefined']}
                onChange={({ target: { value } }) => setSelection(value)}
            />

            <Text>Your selection: {selection}</Text>

            <Button onClick={() => setSelection('undefined')}>Reset</Button>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:33},startBody:{col:21,line:10},endBody:{col:1,line:33}}}}},title:"RmgSelect",component:i},C=n(()=>{const[e,t]=l.exports.useState("undefined");return o(a,{children:[s(i,{defaultValue:e,options:{undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:["undefined"],onChange:({target:{value:c}})=>t(c)}),o(p,{children:["Your selection: ",e]}),s(d,{onClick:()=>t("undefined"),children:"Reset"})]})},"Basic"),b=["Basic"];export{C as Basic,b as __namedExportsOrder,T as default};
//# sourceMappingURL=rmg-select.stories.6bccbece.js.map
