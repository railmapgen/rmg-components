import{j as s}from"./jsx-runtime-DWbWqHZ-.js";import{R as m}from"./rmg-app-clip-C3-JLlCS.js";import{r as p}from"./index-l2PZgWEW.js";import{B as x}from"./box-BzyDp4Vq.js";import{B as f}from"./button-NxOcYH6u.js";import{C}from"./close-button-BsHH3WKA.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./use-outside-click-DfGn5dTp.js";import"./use-callback-ref-Dj4FKvIb.js";import"./portal-rWVpBEm5.js";import"./index-Ct2Sj-xx.js";import"./context-cwyNcBuw.js";import"./use-safe-layout-effect-Cmtk91ip.js";import"./focus-lock-YZarQW1E.js";import"./inheritsLoose-B7h9gheN.js";import"./focusable-crJ8ziAt.js";import"./is-element-C52yPwBl.js";import"./theming-props-0pEswy1w.js";import"./emotion-react.browser.esm-RUFYoBmu.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-D5j2VCPL.js";import"./attr-sHTFgF0E.js";import"./icon-B9qoL11O.js";const K={title:"RmgAppClip",component:m},e=()=>{const[l,t]=p.useState(!1),[a,c]=p.useState("md"),u=["xs","sm","md","lg","xl","full"];return s.jsxs(x,{children:[u.map(o=>s.jsxs(f,{m:4,onClick:()=>{c(o),t(!0)},children:["Open ",o," app clip"]},o)),s.jsxs(m,{size:a,isOpen:l,onClose:()=>t(!1),children:[s.jsx(C,{onClick:()=>t(!1)}),"App clip content goes here"]})]})};var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const L=["Basic"];export{e as Basic,L as __namedExportsOrder,K as default};
