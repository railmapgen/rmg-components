import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as i}from"./rmg-multi-select-CZ1o_H7S.js";import{r as m}from"./index-l2PZgWEW.js";import{R as p}from"./rmg-label-1tvVGcJ4.js";import{B as n}from"./chunk-PULVB27S-BvTYsj2L.js";import{T as u}from"./chunk-2OOHT3W5-B56XnfBB.js";import"./chunk-2GBDXOMA-DSK0xXMw.js";import"./chunk-ZJJGQIVY-G7EJoKQ9.js";import"./extends-CCbyfPlC.js";import"./index-C1GouHpy.js";import"./index-DWIC1-M1.js";import"./chunk-Z6RXEUPO-Bjsz4aJx.js";import"./chunk-7D6N5TE5-n0beFqHo.js";import"./chunk-56K2BSAJ-BTjm4QzQ.js";import"./index-D5j2VCPL.js";import"./index-D72gjLle.js";import"./index-C1WesdbD.js";import"./emotion-react.browser.esm-DJ_JGAiU.js";import"./chunk-R5W6LHQW-B7OhOXBY.js";import"./chunk-KA2477BY-BN_1X1L0.js";import"./chunk-24I2HV4N-DAWbi5WC.js";import"./index-BJzPjEZr.js";import"./proxy-COICayAC.js";import"./chunk-DY5QRMBO-C9nBwvEV.js";import"./chunk-RLMGYZLY-CpdZi_sY.js";import"./chunk-R3DH46PF-iWUMGBws.js";const F={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(n,{children:[e.jsx(p,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
