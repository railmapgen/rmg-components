import{j as s}from"./jsx-runtime-CGpYA4L6.js";import{R as m}from"./rmg-app-clip-BZUiz-Mr.js";import{r as p}from"./index-CleY8y_P.js";import{B as x}from"./chunk-UVUR7MCU-CDEQ8fQk.js";import{C as f}from"./chunk-37N6GCLA-BqK_rOQz.js";import{B as C}from"./chunk-PULVB27S-BYIORNcw.js";import"./chunk-R5W6LHQW-BcYmCOxF.js";import"./chunk-KA2477BY-C8aLqnrw.js";import"./chunk-34PD6CUK-CMN9yjOQ.js";import"./index-DGaxrVvi.js";import"./index-BDB9_2GA.js";import"./index-C2jgcCTd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./chunk-UU5OHSNF-BNzlMt1T.js";import"./inheritsLoose-B7h9gheN.js";import"./index-BJzPjEZr.js";import"./emotion-react.browser.esm-BoJAA9QB.js";import"./index-CRSocYPi.js";import"./chunk-2GBDXOMA-DxAeh1k-.js";const G={title:"RmgAppClip",component:m},e=()=>{const[l,t]=p.useState(!1),[a,c]=p.useState("md"),u=["xs","sm","md","lg","xl","full"];return s.jsxs(C,{children:[u.map(o=>s.jsxs(x,{m:4,onClick:()=>{c(o),t(!0)},children:["Open ",o," app clip"]},o)),s.jsxs(m,{size:a,isOpen:l,onClose:()=>t(!1),children:[s.jsx(f,{onClick:()=>t(!1)}),"App clip content goes here"]})]})};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const H=["Basic"];export{e as Basic,H as __namedExportsOrder,G as default};
