var n=Object.defineProperty;var l=(e,t)=>n(e,"name",{value:t,configurable:!0});import{R as s}from"./rmg-multi-select.3034d98e.js";import{r as c,a as o,j as r}from"./jsx-runtime.16943203.js";import{R as i}from"./rmg-label.9d4e8ce6.js";import{B as a,T as m}from"./index.esm.d1d0265b.js";import"./index.esm.c2052152.js";import"./index.esm.9a7e6aa0.js";import"./iframe.d24d3684.js";import"./index.esm.afe5c729.js";import"./index.esm.7aa2a8c0.js";import"./index.esm.d9a71e89.js";import"./index.esm.fe74b3de.js";import"./index.esm.f7fddd7a.js";import"./index.esm.daf71255.js";import"./index.esm.879731d4.js";const T={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:34},startBody:{col:21,line:11},endBody:{col:1,line:34}}}}},title:"RmgMultiSelect",component:s},V=l(()=>{const[e,t]=c.exports.useState(["local"]);return o(a,{children:[r(i,{label:"Service",children:r(s,{displayValue:"Select services",selections:[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}],defaultValue:e,onChange:t})}),o(m,{children:["Selected: ",e.join(",")]})]})},"Basic"),E=["Basic"];export{V as Basic,E as __namedExportsOrder,T as default};
//# sourceMappingURL=rmg-multi-select.stories.e9247c68.js.map
