var i=Object.defineProperty;var l=(e,t)=>i(e,"name",{value:t,configurable:!0});import{a as o,j as r}from"./jsx-runtime-ad6454d2.js";import{R as s}from"./rmg-multi-select-ecfe87b6.js";import{r as n}from"./index-2a7246bb.js";import{R as c}from"./rmg-label-fd49ad70.js";import{B as a}from"./chunk-6CSUKJP7-9b35427c.js";import{T as m}from"./chunk-P74GIWPW-fc04cf50.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-4f2764db.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-3NTD6TBK-f90a8891.js";import"./chunk-JSSKUSQH-d3c1fd16.js";import"./index-7822c6a4.js";import"./index-4ad6bebe.js";import"./index-44f5ac58.js";import"./emotion-react.browser.esm-6433993c.js";import"./chunk-7NBWC5PS-d415efb0.js";import"./chunk-DKFDJSXF-62d98e4a.js";import"./index-71b8f272.js";import"./chunk-KVBLLJMP-7237d5fc.js";import"./index-bd0fd4cb.js";import"./chunk-FQXH56BT-3a33acd8.js";const O={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:34},startBody:{col:21,line:11},endBody:{col:1,line:34}}}}},title:"RmgMultiSelect",component:s},q=l(()=>{const[e,t]=n.useState(["local"]);return o(a,{children:[r(c,{label:"Service",children:r(s,{displayValue:"Select services",selections:[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}],defaultValue:e,onChange:t})}),o(m,{children:["Selected: ",e.join(",")]})]})},"Basic"),w=["Basic"];export{q as Basic,w as __namedExportsOrder,O as default};
//# sourceMappingURL=rmg-multi-select.stories-8d8b08cd.js.map
