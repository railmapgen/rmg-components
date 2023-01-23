var g=Object.defineProperty;var l=(t,n)=>g(t,"name",{value:n,configurable:!0});import{R as s,a as r,b as o,c as u}from"./rmg-side-panel-4656b2fa.js";import{r as m}from"./index-2a7246bb.js";import{a as i,j as e}from"./jsx-runtime-ad6454d2.js";import{F as d}from"./chunk-MPFPK3CX-6e694ed5.js";import{B as c}from"./chunk-6CSUKJP7-66e6822f.js";import{T as p}from"./chunk-P74GIWPW-6ac636ed.js";import{B as a}from"./chunk-NAA7TEES-810879e0.js";import"./chunk-DUEJD2BE-32a975b0.js";import"./chunk-DKFDJSXF-f7053077.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-SBTIWJWJ-e14952ce.js";import"./index-348bd907.js";import"./emotion-react.browser.esm-608dfa36.js";import"./index-7822c6a4.js";const C={parameters:{storySource:{source:`import { RmgSidePanel, RmgSidePanelBody, RmgSidePanelFooter, RmgSidePanelHeader } from './rmg-side-panel';
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
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:38},startBody:{col:21,line:10},endBody:{col:1,line:38}},"always-overlay":{startLoc:{col:29,line:40},endLoc:{col:1,line:68},startBody:{col:29,line:40},endBody:{col:1,line:68}}}}},title:"RmgSidePanel",component:s},L=l(()=>{const[t,n]=m.useState(!1);return i(d,{w:"100%",h:400,position:"relative",children:[i(c,{flex:1,children:[e(p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e(a,{onClick:()=>n(!0),children:"Open side panel"})]}),i(s,{isOpen:t,header:"Side panel title",children:[e(r,{onClose:()=>n(!1),children:"Side panel title"}),e(o,{children:"Side panel content goes here"}),e(u,{children:e(a,{children:"Action 1"})})]})]})},"Basic"),j=l(()=>{const[t,n]=m.useState(!1);return i(d,{w:"100%",h:400,position:"relative",children:[i(c,{flex:1,children:[e(p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e(a,{onClick:()=>n(!0),children:"Open side panel"})]}),i(s,{isOpen:t,header:"Side panel title",width:240,alwaysOverlay:!0,children:[e(r,{onClose:()=>n(!1),children:"Side panel title"}),e(o,{children:"Side panel content goes here"}),e(u,{children:e(a,{children:"Action 1"})})]})]})},"AlwaysOverlay"),A=["Basic","AlwaysOverlay"];export{j as AlwaysOverlay,L as Basic,A as __namedExportsOrder,C as default};
//# sourceMappingURL=rmg-side-panel.stories-7eeaef8f.js.map
