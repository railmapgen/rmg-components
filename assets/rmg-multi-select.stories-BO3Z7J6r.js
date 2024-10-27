import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as i}from"./rmg-multi-select-BuUHavSP.js";import{r as m}from"./index-l2PZgWEW.js";import{R as p}from"./rmg-label-klqZd5ku.js";import{B as n}from"./chunk-PULVB27S-D50L2BCI.js";import{T as u}from"./chunk-2OOHT3W5-DXYVaS7r.js";import"./chunk-2GBDXOMA-BaO7P-t9.js";import"./chunk-ZJJGQIVY-PjEMQnTN.js";import"./extends-CCbyfPlC.js";import"./index-C1GouHpy.js";import"./index-DWIC1-M1.js";import"./chunk-Z6RXEUPO-BJHc17We.js";import"./chunk-7D6N5TE5-CoBZc5VW.js";import"./chunk-56K2BSAJ-CAOiX2KR.js";import"./index-D5j2VCPL.js";import"./index-D72gjLle.js";import"./index-C1WesdbD.js";import"./emotion-react.browser.esm-C54oTSLI.js";import"./chunk-R5W6LHQW-B7OhOXBY.js";import"./chunk-KA2477BY-BN_1X1L0.js";import"./chunk-24I2HV4N-BS6z7qfY.js";import"./index-BJzPjEZr.js";import"./proxy-COICayAC.js";import"./chunk-DY5QRMBO-bsmiMn4m.js";import"./chunk-RLMGYZLY-Bh3pS3fk.js";import"./chunk-R3DH46PF-iWUMGBws.js";const F={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(n,{children:[e.jsx(p,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [services, setServices] = useState(['local']);
  const selections = [{
    label: 'Local',
    value: 'local'
  }, {
    label: 'Express',
    value: 'express'
  }, {
    label: 'Direct',
    value: 'direct'
  }];
  return <Box>
            <RmgLabel label="Service">
                <RmgMultiSelect displayValue="Select services" selections={selections} defaultValue={services} onChange={setServices} />
            </RmgLabel>

            <Text>Selected: {services.join(',')}</Text>
        </Box>;
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const G=["Basic"];export{t as Basic,G as __namedExportsOrder,F as default};
