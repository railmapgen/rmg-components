var l=Object.defineProperty;var e=(r,t)=>l(r,"name",{value:t,configurable:!0});import{R as a}from"./rmg-throttled-slider.7d54aacf.js";import{r as i,a as n,j as o}from"./jsx-runtime.4889c434.js";import{A as c,a as s}from"./index.esm.e047dc0b.js";import{B as m,T as d}from"./index.esm.381ad692.js";import"./index.esm.2ed42a8b.js";import"./iframe.394cccab.js";import"./index.esm.9e071a76.js";import"./index.esm.3ded612a.js";import"./index.04f2df3b.js";import"./index.esm.7471f004.js";const A={parameters:{storySource:{source:`import { RmgThrottledSlider } from './rmg-throttled-slider';
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:28},startBody:{col:21,line:11},endBody:{col:1,line:28}}}}},title:"RmgThrottledSlider",component:a},R=e(()=>{const[r,t]=i.exports.useState(5);return n(m,{children:[o(a,{defaultValue:r,min:0,max:10,step:.1,onThrottledChange:t,leftIcon:o(c,{}),rightIcon:o(s,{})}),n(d,{children:["Slider value: ",r]})]})},"Basic"),v=["Basic"];export{R as Basic,v as __namedExportsOrder,A as default};
//# sourceMappingURL=rmg-throttled-slider.stories.b998928c.js.map
