import{j as e}from"./jsx-runtime-94f6e698.js";import{R as i}from"./index-b79bff57.js";import{r as m}from"./index-8db94870.js";import{R as u}from"./rmg-multi-line-string-81fb9bb8.js";import{B as p}from"./chunk-6CSUKJP7-6f35fd63.js";import{T as c}from"./chunk-P74GIWPW-ec21aa29.js";import"./chunk-IJBC3YLI-5e030575.js";import"./index-f800231c.js";import"./index-bf97d06a.js";import"./chunk-QEVFQ4EU-3b04e59c.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-QJA5SDDN-a1422c7f.js";const h={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(p,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(c,{children:["Your input: ",e.jsx(u,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["Basic"];export{t as Basic,v as __namedExportsOrder,h as default};
//# sourceMappingURL=rmg-debounced-textarea.stories-693d77b5.js.map