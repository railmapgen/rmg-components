var b=Object.defineProperty;var c=(t,o)=>b(t,"name",{value:o,configurable:!0});import{R as a}from"./rmg-debounced-input-b7b264e4.js";import{r as i}from"./index-2a7246bb.js";import{R as s}from"./rmg-label-7b38cfca.js";import{a as n,j as e}from"./jsx-runtime-ad6454d2.js";import{B as h}from"./chunk-6CSUKJP7-66e6822f.js";import{T as u}from"./chunk-P74GIWPW-6ac636ed.js";import"./chunk-QJA5SDDN-5308f814.js";import"./chunk-JSSKUSQH-8dbb8353.js";import"./index-348bd907.js";import"./index-7822c6a4.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";const C={parameters:{storySource:{source:`import { RmgDebouncedInput } from './rmg-debounced-input';
import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RmgLabel } from '../rmg-label';

export default {
    title: 'RmgDebouncedInput',
    component: RmgDebouncedInput,
};

export const Basic = () => {
    const [value0, setValue0] = useState('');
    const [value500, setValue500] = useState('');
    const [digitValue, setDigitValue] = useState('');

    const optionList = ['Guangzhou', 'Hong Kong', 'Shanghai'];

    return (
        <Box>
            <RmgLabel label="Delay=0ms">
                <RmgDebouncedInput
                    placeholder="Enter text in fast speed"
                    defaultValue={value0}
                    onDebouncedChange={setValue0}
                    delay={0}
                    optionList={optionList}
                />
            </RmgLabel>

            <RmgLabel label="Delay=500ms">
                <RmgDebouncedInput
                    placeholder="Enter text in fast speed"
                    defaultValue={value500}
                    onDebouncedChange={setValue500}
                    optionList={optionList}
                />
            </RmgLabel>

            <RmgLabel label="With validator">
                <RmgDebouncedInput
                    placeholder="Enter digits only"
                    defaultValue={digitValue}
                    validator={value => !isNaN(Number(value))}
                    onDebouncedChange={setDigitValue}
                    optionList={optionList}
                />
            </RmgLabel>

            <Text>Delay=0ms: {value0}</Text>
            <Text>Delay=500ms: {value500}</Text>
            <Text>With validator: {digitValue}</Text>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:54},startBody:{col:21,line:11},endBody:{col:1,line:54}}}}},title:"RmgDebouncedInput",component:a},N=c(()=>{const[t,o]=i.useState(""),[r,m]=i.useState(""),[d,p]=i.useState(""),l=["Guangzhou","Hong Kong","Shanghai"];return n(h,{children:[e(s,{label:"Delay=0ms",children:e(a,{placeholder:"Enter text in fast speed",defaultValue:t,onDebouncedChange:o,delay:0,optionList:l})}),e(s,{label:"Delay=500ms",children:e(a,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:m,optionList:l})}),e(s,{label:"With validator",children:e(a,{placeholder:"Enter digits only",defaultValue:d,validator:g=>!isNaN(Number(g)),onDebouncedChange:p,optionList:l})}),n(u,{children:["Delay=0ms: ",t]}),n(u,{children:["Delay=500ms: ",r]}),n(u,{children:["With validator: ",d]})]})},"Basic"),W=["Basic"];export{N as Basic,W as __namedExportsOrder,C as default};
//# sourceMappingURL=rmg-debounced-input.stories-a4bc7b1e.js.map
