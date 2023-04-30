import{a as t,j as e}from"./jsx-runtime-670450c2.js";import{R as o}from"./rmg-debounced-input-b1648484.js";import{r as n}from"./index-f1f749bf.js";import{R as s}from"./rmg-label-c244f4e0.js";import{B as x}from"./chunk-6CSUKJP7-9c438e99.js";import{T as i}from"./chunk-P74GIWPW-98bbe6ad.js";import"./chunk-QJA5SDDN-549d352f.js";import"./chunk-JSSKUSQH-f6df1457.js";import"./index-6d9c108a.js";import"./index-ff36e217.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";const j={title:"RmgDebouncedInput",component:o},a=()=>{const[r,g]=n.useState(""),[u,h]=n.useState(""),[d,b]=n.useState(""),l=["Guangzhou","Hong Kong","Shanghai"];return t(x,{children:[e(s,{label:"Delay=0ms",children:e(o,{placeholder:"Enter text in fast speed",defaultValue:r,onDebouncedChange:g,delay:0,optionList:l})}),e(s,{label:"Delay=500ms",children:e(o,{placeholder:"Enter text in fast speed",defaultValue:u,onDebouncedChange:h,optionList:l})}),e(s,{label:"With validator",children:e(o,{placeholder:"Enter digits only",defaultValue:d,validator:D=>!isNaN(Number(D)),onDebouncedChange:b,optionList:l})}),t(i,{children:["Delay=0ms: ",r]}),t(i,{children:["Delay=500ms: ",u]}),t(i,{children:["With validator: ",d]})]})};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["Basic"];export{a as Basic,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=rmg-debounced-input.stories-5e149a5f.js.map
