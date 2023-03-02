var i=Object.defineProperty;var e=(r,o)=>i(r,"name",{value:o,configurable:!0});import{a as n,j as t}from"./jsx-runtime-ad6454d2.js";import{R as a}from"./rmg-throttled-slider-23029e7b.js";import{r as l}from"./index-2a7246bb.js";import{A as m,a as c}from"./chunk-PK3U2DQU-8e9bc1b8.js";import{B as s}from"./chunk-6CSUKJP7-67635246.js";import{T as d}from"./chunk-P74GIWPW-8796281a.js";import"./index-44f5ac58.js";import"./index-7822c6a4.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-53e0d211.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./index-3afc483d.js";import"./chunk-3HSDMH4Y-ee9f51c5.js";import"./chunk-NAA7TEES-a4e017b7.js";import"./emotion-react.browser.esm-a0f32db0.js";import"./chunk-MPFPK3CX-d7e84ccb.js";import"./chunk-QODHG6BI-bd04b1d9.js";import"./chunk-DKFDJSXF-bd3c1ed9.js";const _={parameters:{storySource:{source:`import { RmgThrottledSlider } from './rmg-throttled-slider';
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:28},startBody:{col:21,line:11},endBody:{col:1,line:28}}}}},title:"RmgThrottledSlider",component:a},C=e(()=>{const[r,o]=l.useState(5);return n(s,{children:[t(a,{defaultValue:r,min:0,max:10,step:.1,onThrottledChange:o,leftIcon:t(m,{}),rightIcon:t(c,{})}),n(d,{children:["Slider value: ",r]})]})},"Basic"),E=["Basic"];export{C as Basic,E as __namedExportsOrder,_ as default};
//# sourceMappingURL=rmg-throttled-slider.stories-cc08d0d4.js.map
