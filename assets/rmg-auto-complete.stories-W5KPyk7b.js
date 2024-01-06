import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{R as u}from"./rmg-auto-complete-wkE8CpTQ.js";import{B as l}from"./chunk-PULVB27S-fsjjELE9.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./rmg-debounced-input-BhMYZ_lG.js";import"./chunk-AZVKQZKI-MDSw90Or.js";import"./chunk-56K2BSAJ-0Ei77FdK.js";import"./index-818H0KCj.js";import"./index-IGsecODW.js";import"./chunk-ZJJGQIVY-G-YO8yX9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-24I2HV4N-2pl4hl1n.js";import"./index-eGeiRRs6.js";import"./index-6Tfs0cS0.js";import"./index-ohh_DJAR.js";import"./motion-wzXf7Hoo.js";import"./chunk-DY5QRMBO-HUTS3H-i.js";import"./chunk-2GBDXOMA-JjmgjW91.js";import"./index-obPvAbvY.js";import"./chunk-R5W6LHQW-w_hUyVb1.js";import"./chunk-UVUR7MCU-XHz5wHrf.js";import"./emotion-react.browser.esm-7hhy0pJv.js";const k={title:"RmgAutoComplete",component:u},a=()=>{const m=[{id:"gz",value:"Guangzhou",additionalValue:"廣州"},{id:"hk",value:"Hong Kong",additionalValue:"香港"},{id:"sh",value:"Shanghai",additionalValue:"上海"}];return t.jsx(l,{children:t.jsx(u,{data:m,displayValue:o=>o.value+" ("+o.value[0]+")",predicate:(o,e)=>o.value.toLowerCase().includes(e.toLowerCase())||o.additionalValue.toLowerCase().includes(e.toLowerCase())})})};var i,r,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const y=["Basic"];export{a as Basic,y as __namedExportsOrder,k as default};
