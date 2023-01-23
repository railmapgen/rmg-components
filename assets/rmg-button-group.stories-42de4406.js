var p=Object.defineProperty;var s=(t,n)=>p(t,"name",{value:n,configurable:!0});import{r as i}from"./index-2a7246bb.js";import{R as o}from"./rmg-button-group-1c4125bb.js";import{a as e,j as c}from"./jsx-runtime-ad6454d2.js";import{F as g}from"./chunk-MPFPK3CX-6e694ed5.js";import{T as a}from"./chunk-P74GIWPW-6ac636ed.js";import{B as u}from"./chunk-6CSUKJP7-66e6822f.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-NAA7TEES-810879e0.js";import"./index-348bd907.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./emotion-react.browser.esm-608dfa36.js";import"./index-7822c6a4.js";const j={parameters:{storySource:{source:`import React, { useState } from 'react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:38},startBody:{col:21,line:10},endBody:{col:1,line:38}}}}},title:"RmgButtonGroup",component:o},F=s(()=>{const[t,n]=i.useState("gzmtr"),[l,m]=i.useState(["gzmtr"]),r=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e(g,{children:[e(u,{w:200,children:[c(o,{selections:r,defaultValue:t,onChange:n}),c(o,{selections:r,defaultValue:l,onChange:m,multiSelect:!0})]}),e(u,{children:[e(a,{children:["Single select: ",t]}),e(a,{children:["Multi select: ",l.join(",")]})]})]})},"Basic"),C=["Basic"];export{F as Basic,C as __namedExportsOrder,j as default};
//# sourceMappingURL=rmg-button-group.stories-42de4406.js.map
