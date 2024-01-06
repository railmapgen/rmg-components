import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as i}from"./rmg-multi-select-h81Xlsa9.js";import{r as m}from"./index-4g5l5LRQ.js";import{R as n}from"./rmg-label-Ud4Gds9Q.js";import{B as p}from"./chunk-PULVB27S-T0wR8Lw9.js";import{T as u}from"./chunk-2OOHT3W5-sHQFM59z.js";import"./chunk-2GBDXOMA-jh7I9nJM.js";import"./chunk-ZJJGQIVY-x0BkbaAD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-818H0KCj.js";import"./index-obPvAbvY.js";import"./chunk-Z6RXEUPO-Qj3izexI.js";import"./chunk-7D6N5TE5-XJsBEMLp.js";import"./chunk-56K2BSAJ-YmVMgeUu.js";import"./index-IGsecODW.js";import"./index-ohh_DJAR.js";import"./index-eGeiRRs6.js";import"./emotion-react.browser.esm-Y08UVQfg.js";import"./chunk-R5W6LHQW-sl5gtt5E.js";import"./chunk-KA2477BY-NeCTj7jt.js";import"./chunk-24I2HV4N--9u-gXk1.js";import"./index-6Tfs0cS0.js";import"./motion-wzXf7Hoo.js";import"./chunk-DY5QRMBO-F_aDQcd9.js";import"./chunk-RLMGYZLY-1PaQ2Kew.js";import"./chunk-R3DH46PF-AVI-Wkee.js";const G={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(p,{children:[e.jsx(n,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
