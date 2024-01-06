import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as i}from"./rmg-multi-select-94RR2zsG.js";import{r as n}from"./index-4g5l5LRQ.js";import{R as m}from"./rmg-label-s1gPcp7l.js";import{B as p}from"./chunk-PULVB27S-fsjjELE9.js";import{T as u}from"./chunk-2OOHT3W5-2ne8H1Mq.js";import"./index-818H0KCj.js";import"./chunk-ZJJGQIVY-G-YO8yX9.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-7D6N5TE5-jonzsY0A.js";import"./chunk-56K2BSAJ-0Ei77FdK.js";import"./index-IGsecODW.js";import"./index-ohh_DJAR.js";import"./index-eGeiRRs6.js";import"./emotion-react.browser.esm-7hhy0pJv.js";import"./chunk-R5W6LHQW-w_hUyVb1.js";import"./chunk-24I2HV4N-2pl4hl1n.js";import"./index-6Tfs0cS0.js";import"./motion-wzXf7Hoo.js";import"./chunk-DY5QRMBO-HUTS3H-i.js";import"./chunk-2GBDXOMA-JjmgjW91.js";import"./index-obPvAbvY.js";import"./chunk-Z6RXEUPO-gr2qFrxx.js";const z={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=n.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(p,{children:[e.jsx(m,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const A=["Basic"];export{t as Basic,A as __namedExportsOrder,z as default};
