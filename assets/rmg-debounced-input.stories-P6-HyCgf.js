import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as a}from"./rmg-debounced-input-BhMYZ_lG.js";import{r as o}from"./index-4g5l5LRQ.js";import{R as l}from"./rmg-label-s1gPcp7l.js";import{B as b}from"./chunk-PULVB27S-fsjjELE9.js";import{T as s}from"./chunk-2OOHT3W5-2ne8H1Mq.js";import"./chunk-AZVKQZKI-MDSw90Or.js";import"./chunk-56K2BSAJ-0Ei77FdK.js";import"./index-818H0KCj.js";import"./index-IGsecODW.js";import"./chunk-ZJJGQIVY-G-YO8yX9.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const I={title:"RmgDebouncedInput",component:a},t=()=>{const[i,p]=o.useState(""),[r,g]=o.useState(""),[u,h]=o.useState(""),n=["Guangzhou","Hong Kong","Shanghai"];return e.jsxs(b,{children:[e.jsx(l,{label:"Delay=0ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:i,onDebouncedChange:p,delay:0,optionList:n})}),e.jsx(l,{label:"Delay=500ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:g,optionList:n})}),e.jsx(l,{label:"With validator",children:e.jsx(a,{placeholder:"Enter digits only",defaultValue:u,validator:x=>!isNaN(Number(x)),onDebouncedChange:h,optionList:n})}),e.jsxs(s,{children:["Delay=0ms: ",i]}),e.jsxs(s,{children:["Delay=500ms: ",r]}),e.jsxs(s,{children:["With validator: ",u]})]})};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
