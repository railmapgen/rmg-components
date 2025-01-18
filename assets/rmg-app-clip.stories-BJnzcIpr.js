import{j as s}from"./jsx-runtime-D_3pcrNB.js";import{R as m}from"./rmg-app-clip-Bs3vese0.js";import{r as p}from"./index-YTOF1_EJ.js";import{B as x}from"./box-BemYKwwm.js";import{B as f}from"./button-X5yNzHuh.js";import{C}from"./close-button-BS6xHoDk.js";import"./use-style-config-CZvBo0tQ.js";import"./use-outside-click-Cuk0WFGe.js";import"./use-callback-ref-DWfjZ6Ol.js";import"./portal-CjW0eDgd.js";import"./index-AStQfm9c.js";import"./index-B3O5BJN8.js";import"./context-CXQEnuw_.js";import"./use-safe-layout-effect-CW26zb7A.js";import"./focus-lock-DB9h6qx6.js";import"./focusable-crJ8ziAt.js";import"./is-element-C52yPwBl.js";import"./theming-props-BSFQkWYI.js";import"./emotion-react.browser.esm-CQsZap0v.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";import"./icon-BjAU1tzt.js";const J={title:"RmgAppClip",component:m},e=()=>{const[l,t]=p.useState(!1),[a,c]=p.useState("md"),u=["xs","sm","md","lg","xl","full"];return s.jsxs(x,{children:[u.map(o=>s.jsxs(f,{m:4,onClick:()=>{c(o),t(!0)},children:["Open ",o," app clip"]},o)),s.jsxs(m,{size:a,isOpen:l,onClose:()=>t(!1),children:[s.jsx(C,{onClick:()=>t(!1)}),"App clip content goes here"]})]})};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState('md');
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
  return <Box>
            {sizes.map(s => <Button key={s} m={4} onClick={() => {
      setSize(s);
      setIsOpen(true);
    }}>
                    Open {s} app clip
                </Button>)}

            <RmgAppClip size={size} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <CloseButton onClick={() => setIsOpen(false)} />
                App clip content goes here
            </RmgAppClip>
        </Box>;
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const K=["Basic"];export{e as Basic,K as __namedExportsOrder,J as default};
