import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as i}from"./index-DIKQh-S-.js";import{r as m}from"./index-CleY8y_P.js";import{R as u}from"./rmg-multi-line-string-DIDQbrxa.js";import{B as p}from"./chunk-PULVB27S-BYIORNcw.js";import{T as c}from"./chunk-2OOHT3W5-Dos5Muu_.js";import"./chunk-56K2BSAJ-DdNIyAaK.js";import"./index-DGaxrVvi.js";import"./index-CRSocYPi.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./chunk-AZVKQZKI-fWIVeWGF.js";import"./chunk-R3DH46PF-iWUMGBws.js";const v={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(p,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(c,{children:["Your input: ",e.jsx(u,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,v as default};
