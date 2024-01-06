import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{R as m}from"./rmg-app-clip-3cyzaNUy.js";import{r as p}from"./index-4g5l5LRQ.js";import{B as x}from"./chunk-UVUR7MCU-XHz5wHrf.js";import{C as f}from"./chunk-37N6GCLA-9LLaW1ed.js";import{B as C}from"./chunk-PULVB27S-fsjjELE9.js";import"./chunk-R5W6LHQW-w_hUyVb1.js";import"./chunk-34PD6CUK-3XgrAvau.js";import"./index-818H0KCj.js";import"./index-ohh_DJAR.js";import"./index-jmm5gWkb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./chunk-ZJJGQIVY-G-YO8yX9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-UU5OHSNF-Yj_PKKxF.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-6Tfs0cS0.js";import"./emotion-react.browser.esm-7hhy0pJv.js";import"./index-IGsecODW.js";import"./chunk-2GBDXOMA-JjmgjW91.js";const F={title:"RmgAppClip",component:m},e=()=>{const[l,t]=p.useState(!1),[a,c]=p.useState("md"),u=["xs","sm","md","lg","xl","full"];return s.jsxs(C,{children:[u.map(o=>s.jsxs(x,{m:4,onClick:()=>{c(o),t(!0)},children:["Open ",o," app clip"]},o)),s.jsxs(m,{size:a,isOpen:l,onClose:()=>t(!1),children:[s.jsx(f,{onClick:()=>t(!1)}),"App clip content goes here"]})]})};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
