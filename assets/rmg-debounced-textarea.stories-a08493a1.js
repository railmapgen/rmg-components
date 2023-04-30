import{a as r,j as o}from"./jsx-runtime-670450c2.js";import{R as m}from"./index-8682b39e.js";import{r as u}from"./index-f1f749bf.js";import{R as p}from"./rmg-multi-line-string-84b52852.js";import{B as c}from"./chunk-6CSUKJP7-9c438e99.js";import{T as l}from"./chunk-P74GIWPW-98bbe6ad.js";import"./chunk-JSSKUSQH-f6df1457.js";import"./index-6d9c108a.js";import"./index-ff36e217.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./chunk-QJA5SDDN-549d352f.js";const _={title:"RmgDebouncedTextarea"},e=()=>{const[t,i]=u.useState("");return r(c,{children:[o(m,{defaultValue:t,onDebouncedChange:i}),r(l,{children:["Your input: ",o(p,{text:t,delimiter:`
`})]})]})};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Box>
            <RmgDebouncedTextarea defaultValue={value} onDebouncedChange={setValue} />
            <Text>Your input: {<RmgMultiLineString text={value} delimiter={'\\n'} />}</Text>
        </Box>;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const C=["Basic"];export{e as Basic,C as __namedExportsOrder,_ as default};
//# sourceMappingURL=rmg-debounced-textarea.stories-a08493a1.js.map
