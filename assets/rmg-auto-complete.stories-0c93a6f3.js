import{j as t}from"./jsx-runtime-670450c2.js";import{R as l}from"./rmg-auto-complete-419865f7.js";import{B as m}from"./chunk-6CSUKJP7-9c438e99.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./rmg-debounced-input-b1648484.js";import"./chunk-QJA5SDDN-549d352f.js";import"./chunk-JSSKUSQH-f6df1457.js";import"./index-6d9c108a.js";import"./index-ff36e217.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./chunk-7NBWC5PS-d9ab3e8f.js";import"./chunk-DKFDJSXF-c0600d2a.js";import"./index-c3bcc3a8.js";import"./chunk-KVBLLJMP-7614d09d.js";import"./index-0a1c2762.js";import"./index-390de499.js";import"./index-2802deeb.js";import"./motion-07dfd05d.js";import"./chunk-NAA7TEES-fcf38781.js";import"./emotion-react.browser.esm-a44b8d61.js";const H={title:"RmgAutoComplete",component:l},a=()=>t(m,{children:t(l,{data:[{id:"gz",value:"Guangzhou",additionalValue:"廣州"},{id:"hk",value:"Hong Kong",additionalValue:"香港"},{id:"sh",value:"Shanghai",additionalValue:"上海"}],displayValue:o=>o.value+" ("+o.value[0]+")",predicate:(o,e)=>o.value.toLowerCase().includes(e.toLowerCase())||o.additionalValue.toLowerCase().includes(e.toLowerCase())})});var i,r,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const K=["Basic"];export{a as Basic,K as __namedExportsOrder,H as default};
//# sourceMappingURL=rmg-auto-complete.stories-0c93a6f3.js.map
