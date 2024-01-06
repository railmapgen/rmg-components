import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as i}from"./index-517p4gs7.js";import{r as m}from"./index-4g5l5LRQ.js";import{R as u}from"./rmg-multi-line-string-rmGHZpCa.js";import{B as p}from"./chunk-PULVB27S-fsjjELE9.js";import{T as c}from"./chunk-2OOHT3W5-2ne8H1Mq.js";import"./chunk-56K2BSAJ-0Ei77FdK.js";import"./index-818H0KCj.js";import"./index-IGsecODW.js";import"./chunk-ZJJGQIVY-G-YO8yX9.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-AZVKQZKI-MDSw90Or.js";const h={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(p,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(c,{children:["Your input: ",e.jsx(u,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["Basic"];export{t as Basic,v as __namedExportsOrder,h as default};
