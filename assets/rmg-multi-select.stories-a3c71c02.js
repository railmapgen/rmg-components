import{j as e}from"./jsx-runtime-4ca860c5.js";import{R as i}from"./rmg-multi-select-34cd866e.js";import{r as m}from"./index-61bf1805.js";import{R as p}from"./rmg-label-d74ad164.js";import{B as n}from"./chunk-PULVB27S-dfb23afe.js";import{T as u}from"./chunk-2OOHT3W5-423ffe97.js";import"./chunk-RMJG37OC-823e3ac4.js";import"./chunk-24I2HV4N-d252c289.js";import"./index-dcfef637.js";import"./index-eaa72e81.js";import"./index-e73c685f.js";import"./index-c23131f5.js";import"./chunk-ZJJGQIVY-35f6fb8e.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./index-6830816b.js";import"./motion-2f764dbc.js";import"./chunk-DY5QRMBO-da789a6a.js";import"./chunk-2GBDXOMA-4314ad61.js";import"./index-23143ea6.js";import"./chunk-Z6RXEUPO-3e919507.js";import"./chunk-7D6N5TE5-7847f1c7.js";import"./chunk-XRMX4GAI-a9941989.js";import"./emotion-react.browser.esm-3572b68e.js";const z={title:"RmgMultiSelect",component:i},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(n,{children:[e.jsx(p,{label:"Service",children:e.jsx(i,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=rmg-multi-select.stories-a3c71c02.js.map
