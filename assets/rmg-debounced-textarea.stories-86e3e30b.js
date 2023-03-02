var a=Object.defineProperty;var r=(e,t)=>a(e,"name",{value:t,configurable:!0});import{a as o,j as n}from"./jsx-runtime-ad6454d2.js";import{R as i}from"./index-cbc246de.js";import{r as m}from"./index-2a7246bb.js";import{R as s}from"./rmg-multi-line-string-76ea44f6.js";import{B as u}from"./chunk-6CSUKJP7-895f77d3.js";import{T as c}from"./chunk-P74GIWPW-f4e4a8d1.js";import"./chunk-JSSKUSQH-18a3c636.js";import"./index-348bd907.js";import"./index-7822c6a4.js";import"./chunk-QEVFQ4EU-457e66a5.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-QJA5SDDN-5308f814.js";const L={parameters:{storySource:{source:`import { RmgDebouncedTextarea } from './rmg-debounced-textarea';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { RmgMultiLineString } from '../rmg-multi-line-string';

export default {
    title: 'RmgDebouncedTextarea',
};

export const Basic = () => {
    const [value, setValue] = useState('');

    return (
        <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:19},startBody:{col:21,line:10},endBody:{col:1,line:19}}}}},title:"RmgDebouncedTextarea"},V=r(()=>{const[e,t]=m.useState("");return o(u,{children:[n(i,{defaultValue:e,onDebouncedChange:t}),o(c,{children:["Your input: ",n(s,{text:e,delimiter:`
`})]})]})},"Basic"),v=["Basic"];export{V as Basic,v as __namedExportsOrder,L as default};
//# sourceMappingURL=rmg-debounced-textarea.stories-86e3e30b.js.map
