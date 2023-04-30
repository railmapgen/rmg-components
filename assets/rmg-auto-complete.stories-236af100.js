import{j as t}from"./jsx-runtime-94f6e698.js";import{R as u}from"./rmg-auto-complete-c8225022.js";import{B as m}from"./chunk-6CSUKJP7-aa140969.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./rmg-debounced-input-c3a7719e.js";import"./chunk-QJA5SDDN-a1422c7f.js";import"./chunk-IJBC3YLI-975cc9bc.js";import"./index-f800231c.js";import"./index-bf97d06a.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-7NBWC5PS-b5941467.js";import"./chunk-DKFDJSXF-50906ab2.js";import"./index-537d2dd9.js";import"./chunk-KVBLLJMP-317bfedd.js";import"./index-b1d0288f.js";import"./index-eaa72e81.js";import"./index-a91c9d3c.js";import"./motion-03f83e4d.js";import"./chunk-NAA7TEES-feaaf6f8.js";import"./emotion-react.browser.esm-92f45e4a.js";const y={title:"RmgAutoComplete",component:u},a=()=>{const l=[{id:"gz",value:"Guangzhou",additionalValue:"廣州"},{id:"hk",value:"Hong Kong",additionalValue:"香港"},{id:"sh",value:"Shanghai",additionalValue:"上海"}];return t.jsx(m,{children:t.jsx(u,{data:l,displayValue:o=>o.value+" ("+o.value[0]+")",predicate:(o,e)=>o.value.toLowerCase().includes(e.toLowerCase())||o.additionalValue.toLowerCase().includes(e.toLowerCase())})})};var i,r,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const E=["Basic"];export{a as Basic,E as __namedExportsOrder,y as default};
//# sourceMappingURL=rmg-auto-complete.stories-236af100.js.map
