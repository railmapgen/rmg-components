import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as i}from"./index-4f3kVbPx.js";import{r as m}from"./index-l2PZgWEW.js";import{B as u}from"./box-BzyDp4Vq.js";import{T as p}from"./text-CJHeydjz.js";import{R as c}from"./rmg-multi-line-string-DgG4p2Gv.js";import"./use-form-control-BPHXiTF4.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./context-cwyNcBuw.js";import"./theming-props-0pEswy1w.js";import"./use-merge-refs-D5j2VCPL.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";const v={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(u,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(p,{children:["Your input: ",e.jsx(c,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,v as default};
