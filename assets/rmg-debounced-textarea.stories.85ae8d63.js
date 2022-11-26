var a=Object.defineProperty;var r=(e,t)=>a(e,"name",{value:t,configurable:!0});import{R as i}from"./index.049b4e72.js";import{r as s,a as o,j as n}from"./jsx-runtime.6cb555d4.js";import{R as u}from"./rmg-multi-line-string.590d9ed5.js";import{B as m,T as c}from"./index.esm.09d9eaee.js";import"./index.esm.b831e639.js";import"./index.esm.0104b23d.js";import"./iframe.b1d869d6.js";import"./index.esm.df881371.js";import"./index.esm.47820208.js";const D={parameters:{storySource:{source:`import { RmgDebouncedTextarea } from './rmg-debounced-textarea';
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
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:19},startBody:{col:21,line:10},endBody:{col:1,line:19}}}}},title:"RmgDebouncedTextarea"},S=r(()=>{const[e,t]=s.exports.useState("");return o(m,{children:[n(i,{defaultValue:e,onDebouncedChange:t}),o(c,{children:["Your input: ",n(u,{text:e,delimiter:`
`})]})]})},"Basic"),h=["Basic"];export{S as Basic,h as __namedExportsOrder,D as default};
//# sourceMappingURL=rmg-debounced-textarea.stories.85ae8d63.js.map
