import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as i}from"./index-VWDHqyU8.js";import{r as m}from"./index-4g5l5LRQ.js";import{R as u}from"./rmg-multi-line-string-d604F8Hk.js";import{B as p}from"./chunk-PULVB27S-T0wR8Lw9.js";import{T as c}from"./chunk-2OOHT3W5-sHQFM59z.js";import"./chunk-56K2BSAJ-YmVMgeUu.js";import"./index-818H0KCj.js";import"./index-IGsecODW.js";import"./chunk-ZJJGQIVY-x0BkbaAD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-AZVKQZKI-MDSw90Or.js";import"./chunk-R3DH46PF-AVI-Wkee.js";const v={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(p,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(c,{children:["Your input: ",e.jsx(u,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,v as default};
