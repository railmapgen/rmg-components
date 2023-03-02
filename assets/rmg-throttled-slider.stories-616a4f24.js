var i=Object.defineProperty;var e=(r,o)=>i(r,"name",{value:o,configurable:!0});import{a as n,j as t}from"./jsx-runtime-ad6454d2.js";import{R as a}from"./rmg-throttled-slider-bd4fac4f.js";import{r as l}from"./index-2a7246bb.js";import{A as m,a as c}from"./chunk-PK3U2DQU-d851acc0.js";import{B as s}from"./chunk-6CSUKJP7-895f77d3.js";import{T as d}from"./chunk-P74GIWPW-f4e4a8d1.js";import"./index-44f5ac58.js";import"./index-7822c6a4.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-457e66a5.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./index-649bdcb8.js";import"./chunk-3HSDMH4Y-a4ae7863.js";import"./chunk-NAA7TEES-d5f813a3.js";import"./emotion-react.browser.esm-142bf922.js";import"./chunk-MPFPK3CX-3bead6a5.js";import"./chunk-QODHG6BI-0e4ba925.js";import"./chunk-DKFDJSXF-b09b6c81.js";const _={parameters:{storySource:{source:`import { RmgThrottledSlider } from './rmg-throttled-slider';
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
//# sourceMappingURL=rmg-throttled-slider.stories-616a4f24.js.map
