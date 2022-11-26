var n=Object.defineProperty;var l=(e,t)=>n(e,"name",{value:t,configurable:!0});import{R as s}from"./rmg-multi-select.4a81488b.js";import{r as c,a as o,j as r}from"./jsx-runtime.6cb555d4.js";import{R as i}from"./rmg-label.723cd17b.js";import{B as a,T as m}from"./index.esm.09d9eaee.js";import"./index.esm.1790fe35.js";import"./index.esm.0104b23d.js";import"./iframe.b1d869d6.js";import"./index.esm.a3a16a3d.js";import"./index.esm.b831e639.js";import"./index.esm.df881371.js";import"./index.esm.47820208.js";import"./index.esm.a60d3d5e.js";import"./index.esm.5b980a41.js";import"./index.esm.11c13e82.js";const T={parameters:{storySource:{source:`import { Box, Text } from '@chakra-ui/react';
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
//# sourceMappingURL=rmg-multi-select.stories.ff70ac3a.js.map
