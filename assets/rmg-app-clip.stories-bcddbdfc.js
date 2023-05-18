import{j as s}from"./jsx-runtime-94f6e698.js";import{R as m}from"./rmg-app-clip-b695aa39.js";import{r as p}from"./index-8db94870.js";import{B as x}from"./chunk-NAA7TEES-9f41ecf3.js";import{C as f}from"./chunk-DUEJD2BE-f3e16273.js";import{B as C}from"./chunk-6CSUKJP7-6f35fd63.js";import"./chunk-RMJG37OC-cad496b8.js";import"./chunk-YLCZP3C4-081dfab9.js";import"./index-f800231c.js";import"./index-a91c9d3c.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-QEVFQ4EU-3b04e59c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./emotion-react.browser.esm-b050abe7.js";import"./index-bf97d06a.js";import"./chunk-DKFDJSXF-c2d13a22.js";const v={title:"RmgAppClip",component:m},e=()=>{const[l,t]=p.useState(!1),[a,c]=p.useState("md"),u=["xs","sm","md","lg","xl","full"];return s.jsxs(C,{children:[u.map(o=>s.jsxs(x,{m:4,onClick:()=>{c(o),t(!0)},children:["Open ",o," app clip"]},o)),s.jsxs(m,{size:a,isOpen:l,onClose:()=>t(!1),children:[s.jsx(f,{onClick:()=>t(!1)}),"App clip content goes here"]})]})};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const w=["Basic"];export{e as Basic,w as __namedExportsOrder,v as default};
//# sourceMappingURL=rmg-app-clip.stories-bcddbdfc.js.map
