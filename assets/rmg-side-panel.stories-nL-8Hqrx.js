import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as l,a as c,b as g,c as v}from"./rmg-side-panel-CHiIoPwG.js";import{r as h}from"./index-l2PZgWEW.js";import{F as S}from"./flex-m7aLVNfQ.js";import{B as x}from"./box-BzyDp4Vq.js";import{T as f}from"./text-CJHeydjz.js";import{B as t}from"./button-NxOcYH6u.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./alert-icon-DHCfWQ-G.js";import"./theming-props-0pEswy1w.js";import"./define-styles-BSAHv3yx.js";import"./icon-B9qoL11O.js";import"./context-cwyNcBuw.js";import"./close-button-BsHH3WKA.js";import"./emotion-react.browser.esm-RUFYoBmu.js";import"./use-merge-refs-D5j2VCPL.js";import"./attr-sHTFgF0E.js";const M={title:"RmgSidePanel",component:l},n=()=>{const[s,i]=h.useState(!1);return e.jsxs(S,{w:"100%",h:400,position:"relative",children:[e.jsxs(x,{flex:1,children:[e.jsx(f,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e.jsx(t,{onClick:()=>i(!0),children:"Open side panel"})]}),e.jsxs(l,{isOpen:s,header:"Side panel title",children:[e.jsx(c,{onClose:()=>i(!1),children:"Side panel title"}),e.jsx(g,{children:"Side panel content goes here"}),e.jsx(v,{children:e.jsx(t,{children:"Action 1"})})]})]})},a=()=>{const[s,i]=h.useState(!1);return e.jsxs(S,{w:"100%",h:400,position:"relative",children:[e.jsxs(x,{flex:1,children:[e.jsx(f,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e.jsx(t,{onClick:()=>i(!0),children:"Open side panel"})]}),e.jsxs(l,{isOpen:s,header:"Side panel title",width:240,alwaysOverlay:!0,children:[e.jsx(c,{onClose:()=>i(!1),children:"Side panel title"}),e.jsx(g,{children:"Side panel content goes here"}),e.jsx(v,{children:e.jsx(t,{children:"Action 1"})})]})]})};var r,o,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(u=(o=n.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const N=["Basic","AlwaysOverlay"];export{a as AlwaysOverlay,n as Basic,N as __namedExportsOrder,M as default};
