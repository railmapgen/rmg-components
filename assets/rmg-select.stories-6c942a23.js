var c=Object.defineProperty;var n=(e,t)=>c(e,"name",{value:t,configurable:!0});import{a as o,j as i}from"./jsx-runtime-ad6454d2.js";import{R as s}from"./rmg-select-940702b4.js";import{r as l}from"./index-2a7246bb.js";import{B as a}from"./chunk-6CSUKJP7-895f77d3.js";import{T as p}from"./chunk-P74GIWPW-f4e4a8d1.js";import{B as m}from"./chunk-NAA7TEES-d5f813a3.js";import"./chunk-QEVFQ4EU-457e66a5.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-JSSKUSQH-18a3c636.js";import"./index-348bd907.js";import"./index-7822c6a4.js";import"./emotion-react.browser.esm-142bf922.js";const k={parameters:{storySource:{source:`import { Box, Button, Text } from '@chakra-ui/react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:33},startBody:{col:21,line:10},endBody:{col:1,line:33}}}}},title:"RmgSelect",component:s},y=n(()=>{const[e,t]=l.useState("undefined");return o(a,{children:[i(s,{defaultValue:e,options:{undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:["undefined"],onChange:({target:{value:r}})=>t(r)}),o(p,{children:["Your selection: ",e]}),i(m,{onClick:()=>t("undefined"),children:"Reset"})]})},"Basic"),_=["Basic"];export{y as Basic,_ as __namedExportsOrder,k as default};
//# sourceMappingURL=rmg-select.stories-6c942a23.js.map
