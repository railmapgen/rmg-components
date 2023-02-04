var p=Object.defineProperty;var s=(t,n)=>p(t,"name",{value:n,configurable:!0});import{a as e,j as i}from"./jsx-runtime-ad6454d2.js";import{r as c}from"./index-2a7246bb.js";import{R as o}from"./rmg-button-group-32dacd14.js";import{F as g}from"./chunk-MPFPK3CX-6d7d081c.js";import{T as a}from"./chunk-P74GIWPW-fc04cf50.js";import{B as u}from"./chunk-6CSUKJP7-9b35427c.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-NAA7TEES-cb2f64e8.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-4f2764db.js";import"./emotion-react.browser.esm-6433993c.js";import"./index-7822c6a4.js";const j={parameters:{storySource:{source:`import React, { useState } from 'react';
import { RmgButtonGroup } from './rmg-button-group';
import { Box, Flex, Text } from '@chakra-ui/react';

export default {
    title: 'RmgButtonGroup',
    component: RmgButtonGroup,
};

export const Basic = () => {
    const [singleSelect, setSingleSelect] = useState('gzmtr');
    const [multiSelect, setMultiSelect] = useState(['gzmtr']);

    const selections = [
        { label: 'MTR', value: 'mtr', disabled: true },
        { label: 'GZMTR', value: 'gzmtr' },
        { label: 'SHMetro', value: 'shmetro' },
    ];

    return (
        <Flex>
            <Box w={200}>
                <RmgButtonGroup selections={selections} defaultValue={singleSelect} onChange={setSingleSelect} />
                <RmgButtonGroup
                    selections={selections}
                    defaultValue={multiSelect}
                    onChange={setMultiSelect}
                    multiSelect
                />
            </Box>

            <Box>
                <Text>Single select: {singleSelect}</Text>
                <Text>Multi select: {multiSelect.join(',')}</Text>
            </Box>
        </Flex>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:38},startBody:{col:21,line:10},endBody:{col:1,line:38}}}}},title:"RmgButtonGroup",component:o},F=s(()=>{const[t,n]=c.useState("gzmtr"),[l,m]=c.useState(["gzmtr"]),r=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e(g,{children:[e(u,{w:200,children:[i(o,{selections:r,defaultValue:t,onChange:n}),i(o,{selections:r,defaultValue:l,onChange:m,multiSelect:!0})]}),e(u,{children:[e(a,{children:["Single select: ",t]}),e(a,{children:["Multi select: ",l.join(",")]})]})]})},"Basic"),C=["Basic"];export{F as Basic,C as __namedExportsOrder,j as default};
//# sourceMappingURL=rmg-button-group.stories-ff152d36.js.map