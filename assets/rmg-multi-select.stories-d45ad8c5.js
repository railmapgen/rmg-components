var i=Object.defineProperty;var l=(e,t)=>i(e,"name",{value:t,configurable:!0});import{a as o,j as r}from"./jsx-runtime-ad6454d2.js";import{R as s}from"./rmg-multi-select-260a804d.js";import{r as n}from"./index-2a7246bb.js";import{R as c}from"./rmg-label-1012e11d.js";import{B as a}from"./chunk-6CSUKJP7-67635246.js";import{T as m}from"./chunk-P74GIWPW-8796281a.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-53e0d211.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-3NTD6TBK-c0b083ee.js";import"./chunk-JSSKUSQH-a12a99d5.js";import"./index-7822c6a4.js";import"./index-4ad6bebe.js";import"./index-44f5ac58.js";import"./emotion-react.browser.esm-a0f32db0.js";import"./chunk-7NBWC5PS-213bf456.js";import"./chunk-DKFDJSXF-bd3c1ed9.js";import"./index-71b8f272.js";import"./chunk-KVBLLJMP-6aa9c80b.js";import"./index-204e2e81.js";import"./motion-90ac95bf.js";import"./chunk-FQXH56BT-5143b260.js";const q={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
import { RmgMultiSelect } from './rmg-multi-select';
import { useState } from 'react';
import { RmgLabel } from '../rmg-label';

export default {
    title: 'RmgMultiSelect',
    component: RmgMultiSelect,
};

export const Basic = () => {
    const [services, setServices] = useState(['local']);

    const selections = [
        { label: 'Local', value: 'local' },
        { label: 'Express', value: 'express' },
        { label: 'Direct', value: 'direct' },
    ];

    return (
        <Box>
            <RmgLabel label="Service">
                <RmgMultiSelect
                    displayValue="Select services"
                    selections={selections}
                    defaultValue={services}
                    onChange={setServices}
                />
            </RmgLabel>

            <Text>Selected: {services.join(',')}</Text>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:34},startBody:{col:21,line:11},endBody:{col:1,line:34}}}}},title:"RmgMultiSelect",component:s},w=l(()=>{const[e,t]=n.useState(["local"]);return o(a,{children:[r(c,{label:"Service",children:r(s,{displayValue:"Select services",selections:[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}],defaultValue:e,onChange:t})}),o(m,{children:["Selected: ",e.join(",")]})]})},"Basic"),z=["Basic"];export{w as Basic,z as __namedExportsOrder,q as default};
//# sourceMappingURL=rmg-multi-select.stories-d45ad8c5.js.map
