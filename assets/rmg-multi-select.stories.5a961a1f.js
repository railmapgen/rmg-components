var n=Object.defineProperty;var l=(e,t)=>n(e,"name",{value:t,configurable:!0});import{R as s}from"./rmg-multi-select.76a861c3.js";import{r as c,a as o,j as r}from"./jsx-runtime.f29acd6c.js";import{R as i}from"./rmg-label.0af69304.js";import{B as a,T as m}from"./index.esm.f10cda7a.js";import"./index.esm.be717af4.js";import"./index.esm.8968f01e.js";import"./iframe.8b94e34e.js";import"./index.esm.babaacc6.js";import"./index.esm.c4f03bd3.js";import"./index.esm.ce0d501f.js";import"./index.esm.0f20b62c.js";import"./index.esm.cb10938e.js";import"./index.esm.67c330a1.js";import"./index.esm.e1de2d7c.js";const T={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-multi-select.stories.5a961a1f.js.map
