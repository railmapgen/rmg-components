import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as i}from"./index-F7UVL1Ds.js";import{r as m}from"./index-YTOF1_EJ.js";import{B as u}from"./box-DK0ghdlA.js";import{T as p}from"./text-D3HMmHaH.js";import{R as c}from"./rmg-multi-line-string-BOeXWy7V.js";import"./use-form-control-DBMiy26T.js";import"./use-style-config-Be-hB2Uk.js";import"./context-CXQEnuw_.js";import"./theming-props-CtumPZyV.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";const h={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(u,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(p,{children:["Your input: ",e.jsx(c,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["Basic"];export{t as Basic,v as __namedExportsOrder,h as default};
