var i=Object.defineProperty;var l=(e,t)=>i(e,"name",{value:t,configurable:!0});import{R as s}from"./rmg-multi-select-8de0d255.js";import{r as n}from"./index-2a7246bb.js";import{R as c}from"./rmg-label-7b38cfca.js";import{a as o,j as r}from"./jsx-runtime-ad6454d2.js";import{B as a}from"./chunk-6CSUKJP7-66e6822f.js";import{T as m}from"./chunk-P74GIWPW-6ac636ed.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-3NTD6TBK-6f0b0c2a.js";import"./chunk-JSSKUSQH-8dbb8353.js";import"./index-7822c6a4.js";import"./index-4ad6bebe.js";import"./index-44f5ac58.js";import"./emotion-react.browser.esm-608dfa36.js";import"./chunk-7NBWC5PS-249f6b55.js";import"./chunk-DKFDJSXF-f7053077.js";import"./index-71b8f272.js";import"./chunk-KVBLLJMP-d3bccfe1.js";import"./index-e3d200d5.js";import"./chunk-FQXH56BT-95cac044.js";const O={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-multi-select.stories-dfb5c335.js.map
