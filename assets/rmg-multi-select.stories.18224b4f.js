var n=Object.defineProperty;var l=(e,t)=>n(e,"name",{value:t,configurable:!0});import{R as s}from"./rmg-multi-select.40494850.js";import{r as c,a as o,j as r}from"./jsx-runtime.def5eff7.js";import{R as i}from"./rmg-label.53a13385.js";import{B as a,T as m}from"./index.esm.b2b3757c.js";import"./index.esm.e611552d.js";import"./index.esm.6ef52bc8.js";import"./iframe.a291c784.js";import"./index.esm.97fc3c9f.js";import"./index.esm.e1622265.js";import"./index.esm.28d0385d.js";import"./index.esm.a4a9529b.js";import"./index.esm.417ce9c3.js";import"./index.esm.8a3b51cc.js";import"./index.esm.35044409.js";const T={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-multi-select.stories.18224b4f.js.map
