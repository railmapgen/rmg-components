import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as i}from"./rmg-multi-select-jRQrHCsY.js";import{r as m}from"./index-CleY8y_P.js";import{R as n}from"./rmg-label-DUzWExiz.js";import{B as p}from"./chunk-PULVB27S-BYIORNcw.js";import{T as u}from"./chunk-2OOHT3W5-Dos5Muu_.js";import"./chunk-2GBDXOMA-DxAeh1k-.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./index-DGaxrVvi.js";import"./index-BnL1FQTH.js";import"./chunk-Z6RXEUPO-BTnRnLFG.js";import"./chunk-7D6N5TE5-De1ADlWO.js";import"./chunk-56K2BSAJ-B591cL4b.js";import"./index-CRSocYPi.js";import"./index-BDB9_2GA.js";import"./index-Cii9CPQx.js";import"./emotion-react.browser.esm-BoJAA9QB.js";import"./chunk-R5W6LHQW-BcYmCOxF.js";import"./chunk-KA2477BY-C8aLqnrw.js";import"./chunk-24I2HV4N-BDNbYGOa.js";import"./index-BJzPjEZr.js";import"./motion-T_VaYMRm.js";import"./chunk-DY5QRMBO-Bg2qY5hc.js";import"./chunk-RLMGYZLY-DD8SHHIe.js";import"./chunk-R3DH46PF-iWUMGBws.js";const G={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(p,{children:[e.jsx(n,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const H=["Basic"];export{t as Basic,H as __namedExportsOrder,G as default};
