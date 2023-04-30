import{j as e}from"./jsx-runtime-94f6e698.js";import{R as i}from"./rmg-multi-select-6826cabf.js";import{r as m}from"./index-8db94870.js";import{R as p}from"./rmg-label-13554095.js";import{B as n}from"./chunk-6CSUKJP7-aa140969.js";import{T as u}from"./chunk-P74GIWPW-1683f8b1.js";import"./index-f800231c.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-HPA3SDH4-ec723f7a.js";import"./chunk-IJBC3YLI-975cc9bc.js";import"./index-bf97d06a.js";import"./index-a91c9d3c.js";import"./index-b1d0288f.js";import"./emotion-react.browser.esm-92f45e4a.js";import"./chunk-7NBWC5PS-b5941467.js";import"./chunk-DKFDJSXF-50906ab2.js";import"./index-537d2dd9.js";import"./chunk-KVBLLJMP-317bfedd.js";import"./index-eaa72e81.js";import"./motion-03f83e4d.js";import"./chunk-FQXH56BT-8ffb01c6.js";const w={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(n,{children:[e.jsx(p,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const z=["Basic"];export{t as Basic,z as __namedExportsOrder,w as default};
//# sourceMappingURL=rmg-multi-select.stories-1b45528c.js.map
