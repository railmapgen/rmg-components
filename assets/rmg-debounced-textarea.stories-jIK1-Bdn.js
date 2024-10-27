import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as i}from"./index-CK-LySdG.js";import{r as m}from"./index-l2PZgWEW.js";import{R as u}from"./rmg-multi-line-string-Ba72zgYU.js";import{B as p}from"./chunk-PULVB27S-D50L2BCI.js";import{T as c}from"./chunk-2OOHT3W5-DXYVaS7r.js";import"./chunk-56K2BSAJ-CAOiX2KR.js";import"./index-C1GouHpy.js";import"./index-D5j2VCPL.js";import"./chunk-ZJJGQIVY-PjEMQnTN.js";import"./extends-CCbyfPlC.js";import"./chunk-AZVKQZKI-DA0n83G2.js";import"./chunk-R3DH46PF-iWUMGBws.js";const h={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(p,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(c,{children:["Your input: ",e.jsx(u,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["Basic"];export{t as Basic,v as __namedExportsOrder,h as default};
