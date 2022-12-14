var i=Object.defineProperty;var r=(a,d)=>i(a,"name",{value:d,configurable:!0});import{R as m,a as t,b as g,c as s}from"./rmg-layout.d521cdf5.js";import{R as l}from"./rmg-debounced-input.bcba0963.js";import{R as c}from"./rmg-label.f996063b.js";import{j as e,a as o}from"./jsx-runtime.711b232c.js";import{B as n,d as p}from"./index.esm.57965a73.js";import"./index.esm.63e18ebe.js";import"./iframe.addee52f.js";import"./index.esm.1411880c.js";import"./index.esm.0bb6d3ad.js";import"./index.esm.b2675e82.js";const L={parameters:{storySource:{source:`import { RmgPage, RmgPageHeader, RmgWindow, RmgWindowHeader } from './rmg-layout';
import { Box, Heading } from '@chakra-ui/react';
import { RmgDebouncedInput } from '../rmg-debounced-input';
import { RmgLabel } from '../rmg-label';

export default {
    title: 'RmgLayout',
};

export const Basic = () => {
    return (
        <Box h={400} w={700}>
            <RmgWindow border="1px dashed">
                <RmgWindowHeader border="1px dashed">
                    <Heading as="h4" size="md">
                        RMG Components
                    </Heading>
                </RmgWindowHeader>

                <RmgPage border="1px dashed">
                    <RmgPageHeader border="1px dashed">
                        <RmgLabel label="Quick filter">
                            <RmgDebouncedInput placeholder="Filter anything" />
                        </RmgLabel>
                    </RmgPageHeader>

                    <Box>Page body goes here</Box>
                </RmgPage>
            </RmgWindow>
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:32},startBody:{col:21,line:10},endBody:{col:1,line:32}}}}},title:"RmgLayout"},W=r(()=>e(n,{h:400,w:700,children:o(m,{border:"1px dashed",children:[e(t,{border:"1px dashed",children:e(p,{as:"h4",size:"md",children:"RMG Components"})}),o(g,{border:"1px dashed",children:[e(s,{border:"1px dashed",children:e(c,{label:"Quick filter",children:e(l,{placeholder:"Filter anything"})})}),e(n,{children:"Page body goes here"})]})]})}),"Basic"),j=["Basic"];export{W as Basic,j as __namedExportsOrder,L as default};
//# sourceMappingURL=rmg-layout.stories.0c652d83.js.map
