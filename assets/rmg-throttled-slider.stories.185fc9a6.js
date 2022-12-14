var l=Object.defineProperty;var e=(r,t)=>l(r,"name",{value:t,configurable:!0});import{R as a}from"./rmg-throttled-slider.11bf21b8.js";import{r as i,a as n,j as o}from"./jsx-runtime.711b232c.js";import{A as c,a as s}from"./index.esm.47a12445.js";import{B as m,T as d}from"./index.esm.57965a73.js";import"./index.esm.63e18ebe.js";import"./iframe.addee52f.js";import"./index.esm.8b06c414.js";import"./index.esm.b2675e82.js";import"./index.esm.14cd0817.js";const w={parameters:{storySource:{source:`import { RmgThrottledSlider } from './rmg-throttled-slider';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export default {
    title: 'RmgThrottledSlider',
    component: RmgThrottledSlider,
};

export const Basic = () => {
    const [value, setValue] = useState(5);

    return (
        <Box>
            <RmgThrottledSlider
                defaultValue={value}
                min={0}
                max={10}
                step={0.1}
                onThrottledChange={setValue}
                leftIcon={<ArrowBackIcon />}
                rightIcon={<ArrowForwardIcon />}
            />
            <Text>Slider value: {value}</Text>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:28},startBody:{col:21,line:11},endBody:{col:1,line:28}}}}},title:"RmgThrottledSlider",component:a},A=e(()=>{const[r,t]=i.exports.useState(5);return n(m,{children:[o(a,{defaultValue:r,min:0,max:10,step:.1,onThrottledChange:t,leftIcon:o(c,{}),rightIcon:o(s,{})}),n(d,{children:["Slider value: ",r]})]})},"Basic"),R=["Basic"];export{A as Basic,R as __namedExportsOrder,w as default};
//# sourceMappingURL=rmg-throttled-slider.stories.185fc9a6.js.map
