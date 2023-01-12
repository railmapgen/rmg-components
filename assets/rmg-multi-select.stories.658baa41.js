var n=Object.defineProperty;var l=(e,t)=>n(e,"name",{value:t,configurable:!0});import{R as s}from"./rmg-multi-select.8481bb59.js";import{r as c,a as o,j as r}from"./jsx-runtime.4889c434.js";import{R as i}from"./rmg-label.7f3207eb.js";import{B as a,T as m}from"./index.esm.381ad692.js";import"./index.esm.ba9ad0ff.js";import"./index.esm.2ed42a8b.js";import"./iframe.394cccab.js";import"./index.esm.9e071a76.js";import"./index.esm.7bb734c7.js";import"./index.esm.3ded612a.js";import"./index.esm.80d04f83.js";import"./index.esm.c3e89734.js";import"./index.esm.c9350490.js";import"./index.esm.7adac4ee.js";const T={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-multi-select.stories.658baa41.js.map
