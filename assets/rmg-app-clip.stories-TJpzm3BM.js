import{j as s}from"./jsx-runtime-DWbWqHZ-.js";import{R as m}from"./rmg-app-clip-Cu8rEO7L.js";import{r as p}from"./index-l2PZgWEW.js";import{B as x}from"./chunk-UVUR7MCU-CgH5ZmQc.js";import{C as f}from"./chunk-37N6GCLA-DHSkdavV.js";import{B as C}from"./chunk-PULVB27S-D50L2BCI.js";import"./chunk-R5W6LHQW-B7OhOXBY.js";import"./chunk-KA2477BY-BN_1X1L0.js";import"./chunk-34PD6CUK-BgEW6MuA.js";import"./index-C1GouHpy.js";import"./index-D72gjLle.js";import"./index-Ct2Sj-xx.js";import"./chunk-ZJJGQIVY-PjEMQnTN.js";import"./extends-CCbyfPlC.js";import"./chunk-UU5OHSNF-CUy8Pwyc.js";import"./inheritsLoose-B7h9gheN.js";import"./index-BJzPjEZr.js";import"./emotion-react.browser.esm-C54oTSLI.js";import"./index-D5j2VCPL.js";import"./chunk-2GBDXOMA-BaO7P-t9.js";const F={title:"RmgAppClip",component:m},e=()=>{const[l,t]=p.useState(!1),[a,c]=p.useState("md"),u=["xs","sm","md","lg","xl","full"];return s.jsxs(C,{children:[u.map(o=>s.jsxs(x,{m:4,onClick:()=>{c(o),t(!0)},children:["Open ",o," app clip"]},o)),s.jsxs(m,{size:a,isOpen:l,onClose:()=>t(!1),children:[s.jsx(f,{onClick:()=>t(!1)}),"App clip content goes here"]})]})};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const G=["Basic"];export{e as Basic,G as __namedExportsOrder,F as default};
