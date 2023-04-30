import{j as e}from"./jsx-runtime-94f6e698.js";import{R as a}from"./rmg-debounced-input-c3a7719e.js";import{r as l}from"./index-8db94870.js";import{R as s}from"./rmg-label-13554095.js";import{B as b}from"./chunk-6CSUKJP7-aa140969.js";import{T as n}from"./chunk-P74GIWPW-1683f8b1.js";import"./chunk-QJA5SDDN-a1422c7f.js";import"./chunk-IJBC3YLI-975cc9bc.js";import"./index-f800231c.js";import"./index-bf97d06a.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";const I={title:"RmgDebouncedInput",component:a},t=()=>{const[i,p]=l.useState(""),[r,g]=l.useState(""),[u,h]=l.useState(""),o=["Guangzhou","Hong Kong","Shanghai"];return e.jsxs(b,{children:[e.jsx(s,{label:"Delay=0ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:i,onDebouncedChange:p,delay:0,optionList:o})}),e.jsx(s,{label:"Delay=500ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:g,optionList:o})}),e.jsx(s,{label:"With validator",children:e.jsx(a,{placeholder:"Enter digits only",defaultValue:u,validator:x=>!isNaN(Number(x)),onDebouncedChange:h,optionList:o})}),e.jsxs(n,{children:["Delay=0ms: ",i]}),e.jsxs(n,{children:["Delay=500ms: ",r]}),e.jsxs(n,{children:["With validator: ",u]})]})};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [value0, setValue0] = useState('');
  const [value500, setValue500] = useState('');
  const [digitValue, setDigitValue] = useState('');
  const optionList = ['Guangzhou', 'Hong Kong', 'Shanghai'];
  return <Box>
            <RmgLabel label="Delay=0ms">
                <RmgDebouncedInput placeholder="Enter text in fast speed" defaultValue={value0} onDebouncedChange={setValue0} delay={0} optionList={optionList} />
            </RmgLabel>

            <RmgLabel label="Delay=500ms">
                <RmgDebouncedInput placeholder="Enter text in fast speed" defaultValue={value500} onDebouncedChange={setValue500} optionList={optionList} />
            </RmgLabel>

            <RmgLabel label="With validator">
                <RmgDebouncedInput placeholder="Enter digits only" defaultValue={digitValue} validator={value => !isNaN(Number(value))} onDebouncedChange={setDigitValue} optionList={optionList} />
            </RmgLabel>

            <Text>Delay=0ms: {value0}</Text>
            <Text>Delay=500ms: {value500}</Text>
            <Text>With validator: {digitValue}</Text>
        </Box>;
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["Basic"];export{t as Basic,N as __namedExportsOrder,I as default};
//# sourceMappingURL=rmg-debounced-input.stories-5d5330d2.js.map
