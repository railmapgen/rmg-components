import{j as e}from"./jsx-runtime-94f6e698.js";import{R as i}from"./rmg-multi-select-0bf80611.js";import{r as m}from"./index-8db94870.js";import{R as p}from"./rmg-label-30304b46.js";import{B as n}from"./chunk-6CSUKJP7-6f35fd63.js";import{T as u}from"./chunk-P74GIWPW-ec21aa29.js";import"./index-f800231c.js";import"./chunk-QEVFQ4EU-3b04e59c.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-HPA3SDH4-e0036574.js";import"./chunk-IJBC3YLI-5e030575.js";import"./index-bf97d06a.js";import"./index-a91c9d3c.js";import"./index-b1d0288f.js";import"./emotion-react.browser.esm-b050abe7.js";import"./chunk-RMJG37OC-cad496b8.js";import"./chunk-KVBLLJMP-d9850d16.js";import"./index-eaa72e81.js";import"./motion-ccbe7ff5.js";import"./chunk-7NBWC5PS-66b7e30f.js";import"./chunk-DKFDJSXF-c2d13a22.js";import"./index-537d2dd9.js";import"./chunk-FQXH56BT-3852c711.js";const z={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(n,{children:[e.jsx(p,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=rmg-multi-select.stories-7ca3ecc5.js.map
