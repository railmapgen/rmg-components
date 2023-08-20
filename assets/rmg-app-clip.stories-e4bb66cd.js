import{j as s}from"./jsx-runtime-4ca860c5.js";import{R as m}from"./rmg-app-clip-5cfa7703.js";import{r as p}from"./index-61bf1805.js";import{B as x}from"./chunk-PULVB27S-dfb23afe.js";import{B as f}from"./chunk-UVUR7MCU-7fc2c9bf.js";import{C}from"./chunk-37N6GCLA-a7cec6af.js";import"./chunk-34PD6CUK-12d89d2c.js";import"./index-6830816b.js";import"./index-e73c685f.js";import"./index-2801d3c9.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-ZJJGQIVY-35f6fb8e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./chunk-UU5OHSNF-722c3088.js";import"./inheritsLoose-7d8f126b.js";import"./index-eaa72e81.js";import"./chunk-RMJG37OC-823e3ac4.js";import"./emotion-react.browser.esm-3572b68e.js";import"./index-c23131f5.js";import"./chunk-2GBDXOMA-4314ad61.js";const F={title:"RmgAppClip",component:m},e=()=>{const[l,t]=p.useState(!1),[a,c]=p.useState("md"),u=["xs","sm","md","lg","xl","full"];return s.jsxs(x,{children:[u.map(o=>s.jsxs(f,{m:4,onClick:()=>{c(o),t(!0)},children:["Open ",o," app clip"]},o)),s.jsxs(m,{size:a,isOpen:l,onClose:()=>t(!1),children:[s.jsx(C,{onClick:()=>t(!1)}),"App clip content goes here"]})]})};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=rmg-app-clip.stories-e4bb66cd.js.map
