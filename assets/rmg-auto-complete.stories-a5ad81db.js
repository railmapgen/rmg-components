import{j as t}from"./jsx-runtime-94f6e698.js";import{R as m}from"./rmg-auto-complete-561cb114.js";import{B as l}from"./chunk-6CSUKJP7-6f35fd63.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./rmg-debounced-input-5e3e96cc.js";import"./chunk-QJA5SDDN-a1422c7f.js";import"./chunk-IJBC3YLI-5e030575.js";import"./index-f800231c.js";import"./index-bf97d06a.js";import"./chunk-QEVFQ4EU-3b04e59c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-KVBLLJMP-d9850d16.js";import"./index-b1d0288f.js";import"./index-eaa72e81.js";import"./index-a91c9d3c.js";import"./motion-ccbe7ff5.js";import"./chunk-7NBWC5PS-66b7e30f.js";import"./chunk-DKFDJSXF-c2d13a22.js";import"./index-537d2dd9.js";import"./chunk-RMJG37OC-cad496b8.js";import"./chunk-NAA7TEES-9f41ecf3.js";import"./emotion-react.browser.esm-b050abe7.js";const E={title:"RmgAutoComplete",component:m},a=()=>{const u=[{id:"gz",value:"Guangzhou",additionalValue:"廣州"},{id:"hk",value:"Hong Kong",additionalValue:"香港"},{id:"sh",value:"Shanghai",additionalValue:"上海"}];return t.jsx(l,{children:t.jsx(m,{data:u,displayValue:o=>o.value+" ("+o.value[0]+")",predicate:(o,e)=>o.value.toLowerCase().includes(e.toLowerCase())||o.additionalValue.toLowerCase().includes(e.toLowerCase())})})};var i,r,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=rmg-auto-complete.stories-a5ad81db.js.map
