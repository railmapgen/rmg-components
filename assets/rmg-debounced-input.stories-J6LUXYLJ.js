import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as a}from"./rmg-debounced-input-U4eaUzPD.js";import{r as o}from"./index-4g5l5LRQ.js";import{R as l}from"./rmg-label-Ud4Gds9Q.js";import{B as b}from"./chunk-PULVB27S-T0wR8Lw9.js";import{T as s}from"./chunk-2OOHT3W5-sHQFM59z.js";import"./chunk-AZVKQZKI-MDSw90Or.js";import"./chunk-6CVSDS6C-1R5Q2Z0B.js";import"./chunk-56K2BSAJ-YmVMgeUu.js";import"./index-818H0KCj.js";import"./index-IGsecODW.js";import"./chunk-ZJJGQIVY-x0BkbaAD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-R3DH46PF-AVI-Wkee.js";const W={title:"RmgDebouncedInput",component:a},t=()=>{const[i,c]=o.useState(""),[r,g]=o.useState(""),[u,h]=o.useState(""),n=["Guangzhou","Hong Kong","Shanghai"];return e.jsxs(b,{children:[e.jsx(l,{label:"Delay=0ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:i,onDebouncedChange:c,delay:0,optionList:n})}),e.jsx(l,{label:"Delay=500ms",children:e.jsx(a,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:g,optionList:n})}),e.jsx(l,{label:"With validator",children:e.jsx(a,{placeholder:"Enter digits only",defaultValue:u,validator:x=>!isNaN(Number(x)),onDebouncedChange:h,optionList:n})}),e.jsxs(s,{children:["Delay=0ms: ",i]}),e.jsxs(s,{children:["Delay=500ms: ",r]}),e.jsxs(s,{children:["With validator: ",u]})]})};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
