import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as a}from"./rmg-debounced-input-CNI6z-W-.js";import{r as l}from"./index-YTOF1_EJ.js";import{R as s}from"./rmg-label-cSd5ZoT_.js";import{B as b}from"./box-DK0ghdlA.js";import{T as n}from"./text-D3HMmHaH.js";import"./input-bB7IpTGB.js";import"./use-form-control-DBMiy26T.js";import"./use-style-config-Be-hB2Uk.js";import"./context-CXQEnuw_.js";import"./theming-props-CtumPZyV.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./icon-BmjnIw9M.js";const W={title:"RmgDebouncedInput",component:a},t=()=>{const[i,c]=l.useState(""),[r,g]=l.useState(""),[u,h]=l.useState(""),o=["Guangzhou","Hong Kong","Shanghai"];return e.jsxs(b,{children:[e.jsx(s,{label:"Delay=0ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:i,onDebouncedChange:c,delay:0,optionList:o})}),e.jsx(s,{label:"Delay=500ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:g,optionList:o})}),e.jsx(s,{label:"With validator",children:e.jsx(a,{placeholder:"Enter digits only",defaultValue:u,validator:x=>!isNaN(Number(x)),onDebouncedChange:h,optionList:o})}),e.jsxs(n,{children:["Delay=0ms: ",i]}),e.jsxs(n,{children:["Delay=500ms: ",r]}),e.jsxs(n,{children:["With validator: ",u]})]})};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["Basic"];export{t as Basic,_ as __namedExportsOrder,W as default};
