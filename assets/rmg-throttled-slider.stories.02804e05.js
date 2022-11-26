var l=Object.defineProperty;var e=(r,o)=>l(r,"name",{value:o,configurable:!0});import{R as a}from"./rmg-throttled-slider.d1b6c66a.js";import{r as i,a as n,j as t}from"./jsx-runtime.cac6885b.js";import{A as c,a as s}from"./index.esm.8384d72f.js";import{B as m,T as d}from"./index.esm.2bb7c29e.js";import"./index.esm.178b0ab7.js";import"./iframe.81000197.js";import"./index.esm.e6173dde.js";import"./index.esm.363678a0.js";const I={parameters:{storySource:{source:`import { RmgThrottledSlider } from './rmg-throttled-slider';
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
                onThrottledChange={setValue}
                leftIcon={<ArrowBackIcon />}
                rightIcon={<ArrowForwardIcon />}
            />
            <Text>Slider value: {value}</Text>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:27},startBody:{col:21,line:11},endBody:{col:1,line:27}}}}},title:"RmgThrottledSlider",component:a},w=e(()=>{const[r,o]=i.exports.useState(5);return n(m,{children:[t(a,{defaultValue:r,min:0,max:10,onThrottledChange:o,leftIcon:t(c,{}),rightIcon:t(s,{})}),n(d,{children:["Slider value: ",r]})]})},"Basic"),A=["Basic"];export{w as Basic,A as __namedExportsOrder,I as default};
//# sourceMappingURL=rmg-throttled-slider.stories.02804e05.js.map
