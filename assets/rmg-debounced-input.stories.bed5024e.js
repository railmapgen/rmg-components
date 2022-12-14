var b=Object.defineProperty;var c=(t,o)=>b(t,"name",{value:o,configurable:!0});import{R as a}from"./rmg-debounced-input.bcba0963.js";import{r as i,a as n,j as e}from"./jsx-runtime.711b232c.js";import{R as s}from"./rmg-label.f996063b.js";import{B as h,T as u}from"./index.esm.57965a73.js";import"./index.esm.1411880c.js";import"./index.esm.63e18ebe.js";import"./iframe.addee52f.js";import"./index.esm.0bb6d3ad.js";import"./index.esm.b2675e82.js";const I={parameters:{storySource:{source:`import { RmgDebouncedInput } from './rmg-debounced-input';
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:54},startBody:{col:21,line:11},endBody:{col:1,line:54}}}}},title:"RmgDebouncedInput",component:a},T=c(()=>{const[t,o]=i.exports.useState(""),[r,m]=i.exports.useState(""),[d,p]=i.exports.useState(""),l=["Guangzhou","Hong Kong","Shanghai"];return n(h,{children:[e(s,{label:"Delay=0ms",children:e(a,{placeholder:"Enter text in fast speed",defaultValue:t,onDebouncedChange:o,delay:0,optionList:l})}),e(s,{label:"Delay=500ms",children:e(a,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:m,optionList:l})}),e(s,{label:"With validator",children:e(a,{placeholder:"Enter digits only",defaultValue:d,validator:g=>!isNaN(Number(g)),onDebouncedChange:p,optionList:l})}),n(u,{children:["Delay=0ms: ",t]}),n(u,{children:["Delay=500ms: ",r]}),n(u,{children:["With validator: ",d]})]})},"Basic"),E=["Basic"];export{T as Basic,E as __namedExportsOrder,I as default};
//# sourceMappingURL=rmg-debounced-input.stories.bed5024e.js.map
