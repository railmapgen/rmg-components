var g=Object.defineProperty;var l=(a,n)=>g(a,"name",{value:n,configurable:!0});import{R as s,a as r,b as o,c as u}from"./rmg-side-panel.5c285dce.js";import{r as m,a as i,j as e}from"./jsx-runtime.4889c434.js";import{F as d,B as c,T as p}from"./index.esm.381ad692.js";import{B as t}from"./index.esm.7471f004.js";import"./index.esm.7adac4ee.js";import"./index.esm.2ed42a8b.js";import"./iframe.394cccab.js";import"./index.esm.b17b3bd6.js";import"./index.esm.3ded612a.js";const b={parameters:{storySource:{source:`import { RmgSidePanel, RmgSidePanelBody, RmgSidePanelFooter, RmgSidePanelHeader } from './rmg-side-panel';
import { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default {
    title: 'RmgSidePanel',
    component: RmgSidePanel,
};

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Flex w="100%" h={400} position="relative">
            <Box flex={1}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus
                    fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh
                    vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada
                    ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula
                    sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis
                    urna nec rutrum posuere.
                </Text>
                <Button onClick={() => setIsOpen(true)}>Open side panel</Button>
            </Box>
            <RmgSidePanel isOpen={isOpen} header="Side panel title">
                <RmgSidePanelHeader onClose={() => setIsOpen(false)}>Side panel title</RmgSidePanelHeader>

                <RmgSidePanelBody>Side panel content goes here</RmgSidePanelBody>

                <RmgSidePanelFooter>
                    <Button>Action 1</Button>
                </RmgSidePanelFooter>
            </RmgSidePanel>
        </Flex>
    );
};

export const AlwaysOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Flex w="100%" h={400} position="relative">
            <Box flex={1}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus
                    fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh
                    vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada
                    ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula
                    sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis
                    urna nec rutrum posuere.
                </Text>
                <Button onClick={() => setIsOpen(true)}>Open side panel</Button>
            </Box>
            <RmgSidePanel isOpen={isOpen} header="Side panel title" width={240} alwaysOverlay>
                <RmgSidePanelHeader onClose={() => setIsOpen(false)}>Side panel title</RmgSidePanelHeader>

                <RmgSidePanelBody>Side panel content goes here</RmgSidePanelBody>

                <RmgSidePanelFooter>
                    <Button>Action 1</Button>
                </RmgSidePanelFooter>
            </RmgSidePanel>
        </Flex>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:38},startBody:{col:21,line:10},endBody:{col:1,line:38}},"always-overlay":{startLoc:{col:29,line:40},endLoc:{col:1,line:68},startBody:{col:29,line:40},endBody:{col:1,line:68}}}}},title:"RmgSidePanel",component:s},q=l(()=>{const[a,n]=m.exports.useState(!1);return i(d,{w:"100%",h:400,position:"relative",children:[i(c,{flex:1,children:[e(p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e(t,{onClick:()=>n(!0),children:"Open side panel"})]}),i(s,{isOpen:a,header:"Side panel title",children:[e(r,{onClose:()=>n(!1),children:"Side panel title"}),e(o,{children:"Side panel content goes here"}),e(u,{children:e(t,{children:"Action 1"})})]})]})},"Basic"),F=l(()=>{const[a,n]=m.exports.useState(!1);return i(d,{w:"100%",h:400,position:"relative",children:[i(c,{flex:1,children:[e(p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e(t,{onClick:()=>n(!0),children:"Open side panel"})]}),i(s,{isOpen:a,header:"Side panel title",width:240,alwaysOverlay:!0,children:[e(r,{onClose:()=>n(!1),children:"Side panel title"}),e(o,{children:"Side panel content goes here"}),e(u,{children:e(t,{children:"Action 1"})})]})]})},"AlwaysOverlay"),w=["Basic","AlwaysOverlay"];export{F as AlwaysOverlay,q as Basic,w as __namedExportsOrder,b as default};
//# sourceMappingURL=rmg-side-panel.stories.eebfa0f0.js.map
