var i=Object.defineProperty;var e=(r,o)=>i(r,"name",{value:o,configurable:!0});import{a as n,j as t}from"./jsx-runtime-ad6454d2.js";import{R as a}from"./rmg-throttled-slider-76d7d138.js";import{r as l}from"./index-2a7246bb.js";import{A as m,a as c}from"./chunk-PK3U2DQU-219967d6.js";import{B as s}from"./chunk-6CSUKJP7-9b35427c.js";import{T as d}from"./chunk-P74GIWPW-fc04cf50.js";import"./index-44f5ac58.js";import"./index-7822c6a4.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-4f2764db.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./index-f996fca0.js";import"./chunk-3HSDMH4Y-1fe7f87c.js";import"./chunk-NAA7TEES-cb2f64e8.js";import"./emotion-react.browser.esm-6433993c.js";import"./chunk-MPFPK3CX-6d7d081c.js";import"./chunk-QODHG6BI-6fb96884.js";import"./chunk-DKFDJSXF-62d98e4a.js";const _={parameters:{storySource:{source:`import { RmgThrottledSlider } from './rmg-throttled-slider';
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
//# sourceMappingURL=rmg-throttled-slider.stories-efccdedc.js.map
