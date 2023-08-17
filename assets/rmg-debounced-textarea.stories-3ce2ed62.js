import{j as e}from"./jsx-runtime-4ca860c5.js";import{R as i}from"./index-f591d24a.js";import{r as m}from"./index-61bf1805.js";import{B as u}from"./chunk-PULVB27S-dfb23afe.js";import{T as p}from"./chunk-2OOHT3W5-423ffe97.js";import{R as c}from"./rmg-multi-line-string-05ecb1a2.js";import"./chunk-XRMX4GAI-a9941989.js";import"./index-6830816b.js";import"./index-c23131f5.js";import"./chunk-ZJJGQIVY-35f6fb8e.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./chunk-QJA5SDDN-70753de7.js";const h={title:"RmgDebouncedTextarea"},t=()=>{const[r,n]=m.useState("");return e.jsxs(u,{children:[e.jsx(i,{defaultValue:r,onDebouncedChange:n}),e.jsxs(p,{children:["Your input: ",e.jsx(c,{text:r,delimiter:`
`})]})]})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["Basic"];export{t as Basic,v as __namedExportsOrder,h as default};
//# sourceMappingURL=rmg-debounced-textarea.stories-3ce2ed62.js.map
