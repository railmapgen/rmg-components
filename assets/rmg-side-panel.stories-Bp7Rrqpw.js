import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as l,a as c,b as g,c as v}from"./rmg-side-panel-DGQAlidx.js";import{r as h}from"./index-YTOF1_EJ.js";import{F as S}from"./flex-DQjtzar9.js";import{B as x}from"./box-BemYKwwm.js";import{T as f}from"./text-BVacSSXG.js";import{B as t}from"./button-X5yNzHuh.js";import"./use-style-config-CZvBo0tQ.js";import"./alert-icon-KpGQ2Gkr.js";import"./theming-props-BSFQkWYI.js";import"./define-styles-BSAHv3yx.js";import"./icon-BjAU1tzt.js";import"./context-CXQEnuw_.js";import"./close-button-BS6xHoDk.js";import"./emotion-react.browser.esm-CQsZap0v.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";const L={title:"RmgSidePanel",component:l},i=()=>{const[s,n]=h.useState(!1);return e.jsxs(S,{w:"100%",h:400,position:"relative",children:[e.jsxs(x,{flex:1,children:[e.jsx(f,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e.jsx(t,{onClick:()=>n(!0),children:"Open side panel"})]}),e.jsxs(l,{isOpen:s,header:"Side panel title",children:[e.jsx(c,{onClose:()=>n(!1),children:"Side panel title"}),e.jsx(g,{children:"Side panel content goes here"}),e.jsx(v,{children:e.jsx(t,{children:"Action 1"})})]})]})},a=()=>{const[s,n]=h.useState(!1);return e.jsxs(S,{w:"100%",h:400,position:"relative",children:[e.jsxs(x,{flex:1,children:[e.jsx(f,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem id diam finibus fermentum. Duis erat metus, placerat eu convallis non, pellentesque vitae mi. Donec vulputate nibh vel nulla vulputate dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent non imperdiet velit. Suspendisse a elementum quam. Pellentesque et tellus luctus, malesuada ligula eget, tristique justo. Donec non pharetra nibh, sed fringilla orci. Maecenas viverra ligula sed lorem venenatis, a lobortis odio varius. Vivamus sagittis aliquam pretium. Phasellus convallis urna nec rutrum posuere."}),e.jsx(t,{onClick:()=>n(!0),children:"Open side panel"})]}),e.jsxs(l,{isOpen:s,header:"Side panel title",width:240,alwaysOverlay:!0,children:[e.jsx(c,{onClose:()=>n(!1),children:"Side panel title"}),e.jsx(g,{children:"Side panel content goes here"}),e.jsx(v,{children:e.jsx(t,{children:"Action 1"})})]})]})};var r,o,u;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(u=(o=i.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const M=["Basic","AlwaysOverlay"];export{a as AlwaysOverlay,i as Basic,M as __namedExportsOrder,L as default};
