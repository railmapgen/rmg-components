var g=Object.defineProperty;var s=(t,n)=>g(t,"name",{value:n,configurable:!0});import{r as c,a as e,j as a}from"./jsx-runtime.6cb555d4.js";import{R as l}from"./rmg-button-group.116b2d78.js";import{F as p,B as i,T as u}from"./index.esm.09d9eaee.js";import"./iframe.b1d869d6.js";import"./index.esm.45358366.js";import"./index.esm.df881371.js";import"./index.esm.0104b23d.js";const T={parameters:{storySource:{source:`import React, { useState } from 'react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:38},startBody:{col:21,line:10},endBody:{col:1,line:38}}}}},title:"RmgButtonGroup",component:l},b=s(()=>{const[t,n]=c.exports.useState("gzmtr"),[o,m]=c.exports.useState(["gzmtr"]),r=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e(p,{children:[e(i,{w:200,children:[a(l,{selections:r,defaultValue:t,onChange:n}),a(l,{selections:r,defaultValue:o,onChange:m,multiSelect:!0})]}),e(i,{children:[e(u,{children:["Single select: ",t]}),e(u,{children:["Multi select: ",o.join(",")]})]})]})},"Basic"),G=["Basic"];export{b as Basic,G as __namedExportsOrder,T as default};
//# sourceMappingURL=rmg-button-group.stories.02f1eb1c.js.map
