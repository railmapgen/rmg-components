import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as a}from"./rmg-debounced-input-DSTRhqgP.js";import{r as l}from"./index-l2PZgWEW.js";import{R as s}from"./rmg-label-DGET3yYX.js";import{B as b}from"./box-BzyDp4Vq.js";import{T as n}from"./text-CJHeydjz.js";import"./input-C1uKqQaN.js";import"./use-form-control-BPHXiTF4.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./context-cwyNcBuw.js";import"./theming-props-0pEswy1w.js";import"./use-merge-refs-D5j2VCPL.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./icon-B9qoL11O.js";const _={title:"RmgDebouncedInput",component:a},t=()=>{const[i,c]=l.useState(""),[r,g]=l.useState(""),[u,h]=l.useState(""),o=["Guangzhou","Hong Kong","Shanghai"];return e.jsxs(b,{children:[e.jsx(s,{label:"Delay=0ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:i,onDebouncedChange:c,delay:0,optionList:o})}),e.jsx(s,{label:"Delay=500ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:g,optionList:o})}),e.jsx(s,{label:"With validator",children:e.jsx(a,{placeholder:"Enter digits only",defaultValue:u,validator:x=>!isNaN(Number(x)),onDebouncedChange:h,optionList:o})}),e.jsxs(n,{children:["Delay=0ms: ",i]}),e.jsxs(n,{children:["Delay=500ms: ",r]}),e.jsxs(n,{children:["With validator: ",u]})]})};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const z=["Basic"];export{t as Basic,z as __namedExportsOrder,_ as default};
