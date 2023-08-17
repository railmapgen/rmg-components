import{j as t}from"./jsx-runtime-4ca860c5.js";import{R as m}from"./rmg-auto-complete-f4ba9d86.js";import{B as l}from"./chunk-PULVB27S-dfb23afe.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./rmg-debounced-input-e0253478.js";import"./chunk-QJA5SDDN-70753de7.js";import"./chunk-XRMX4GAI-a9941989.js";import"./index-6830816b.js";import"./index-c23131f5.js";import"./chunk-ZJJGQIVY-35f6fb8e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./chunk-RMJG37OC-823e3ac4.js";import"./chunk-24I2HV4N-d252c289.js";import"./index-dcfef637.js";import"./index-eaa72e81.js";import"./index-e73c685f.js";import"./motion-2f764dbc.js";import"./chunk-DY5QRMBO-da789a6a.js";import"./chunk-2GBDXOMA-4314ad61.js";import"./index-23143ea6.js";import"./chunk-UVUR7MCU-7fc2c9bf.js";import"./emotion-react.browser.esm-3572b68e.js";const E={title:"RmgAutoComplete",component:m},a=()=>{const u=[{id:"gz",value:"Guangzhou",additionalValue:"廣州"},{id:"hk",value:"Hong Kong",additionalValue:"香港"},{id:"sh",value:"Shanghai",additionalValue:"上海"}];return t.jsx(l,{children:t.jsx(m,{data:u,displayValue:o=>o.value+" ("+o.value[0]+")",predicate:(o,e)=>o.value.toLowerCase().includes(e.toLowerCase())||o.additionalValue.toLowerCase().includes(e.toLowerCase())})})};var i,r,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const data = [{
    id: 'gz',
    value: 'Guangzhou',
    additionalValue: '廣州'
  }, {
    id: 'hk',
    value: 'Hong Kong',
    additionalValue: '香港'
  }, {
    id: 'sh',
    value: 'Shanghai',
    additionalValue: '上海'
  }];
  return <Box>
            <RmgAutoComplete data={data} displayValue={item => item.value + ' (' + item.value[0] + ')'} // Guangzhou (G)
    predicate={(item, input) => item.value.toLowerCase().includes(input.toLowerCase()) || item.additionalValue.toLowerCase().includes(input.toLowerCase())} />
        </Box>;
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const H=["Basic"];export{a as Basic,H as __namedExportsOrder,E as default};
//# sourceMappingURL=rmg-auto-complete.stories-336baf52.js.map
