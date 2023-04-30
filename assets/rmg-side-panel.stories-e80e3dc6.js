import{a as n,j as e}from"./jsx-runtime-670450c2.js";import{R as r,a as g,b as v,c as h}from"./rmg-side-panel-3244fc8b.js";import{r as S}from"./index-f1f749bf.js";import{F as f}from"./chunk-MPFPK3CX-501e08a9.js";import{B as P}from"./chunk-6CSUKJP7-9c438e99.js";import{T as O}from"./chunk-P74GIWPW-98bbe6ad.js";import{B as s}from"./chunk-NAA7TEES-fcf38781.js";import"./chunk-DUEJD2BE-5a59a5ca.js";import"./chunk-DKFDJSXF-c0600d2a.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./chunk-SBTIWJWJ-7f9ce7b6.js";import"./index-6d9c108a.js";import"./emotion-react.browser.esm-a44b8d61.js";import"./index-ff36e217.js";const M={title:"RmgSidePanel",component:r},a=()=>{const[l,i]=S.useState(!1);return n(f,{w:"100%",h:400,position:"relative",children:[n(P,{flex:1,children:[e(O,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e(s,{onClick:()=>i(!0),children:"Open side panel"})]}),n(r,{isOpen:l,header:"Side panel title",children:[e(g,{onClose:()=>i(!1),children:"Side panel title"}),e(v,{children:"Side panel content goes here"}),e(h,{children:e(s,{children:"Action 1"})})]})]})},t=()=>{const[l,i]=S.useState(!1);return n(f,{w:"100%",h:400,position:"relative",children:[n(P,{flex:1,children:[e(O,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e(s,{onClick:()=>i(!0),children:"Open side panel"})]}),n(r,{isOpen:l,header:"Side panel title",width:240,alwaysOverlay:!0,children:[e(g,{onClose:()=>i(!1),children:"Side panel title"}),e(v,{children:"Side panel content goes here"}),e(h,{children:e(s,{children:"Action 1"})})]})]})};var o,u,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <Flex w="100%" h={400} position="relative">
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
        </Flex>;
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <Flex w="100%" h={400} position="relative">
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
        </Flex>;
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const N=["Basic","AlwaysOverlay"];export{t as AlwaysOverlay,a as Basic,N as __namedExportsOrder,M as default};
//# sourceMappingURL=rmg-side-panel.stories-e80e3dc6.js.map
