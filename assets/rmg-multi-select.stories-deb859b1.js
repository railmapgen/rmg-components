import{a as r,j as s}from"./jsx-runtime-670450c2.js";import{R as a}from"./rmg-multi-select-32e8e5b2.js";import{r as m}from"./index-f1f749bf.js";import{R as p}from"./rmg-label-c244f4e0.js";import{B as n}from"./chunk-6CSUKJP7-9c438e99.js";import{T as u}from"./chunk-P74GIWPW-98bbe6ad.js";import"./index-6d9c108a.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./chunk-3NTD6TBK-b04e9b6d.js";import"./chunk-JSSKUSQH-f6df1457.js";import"./index-ff36e217.js";import"./index-2802deeb.js";import"./index-0a1c2762.js";import"./emotion-react.browser.esm-a44b8d61.js";import"./chunk-7NBWC5PS-d9ab3e8f.js";import"./chunk-DKFDJSXF-c0600d2a.js";import"./index-c3bcc3a8.js";import"./chunk-KVBLLJMP-7614d09d.js";import"./index-390de499.js";import"./motion-07dfd05d.js";import"./chunk-FQXH56BT-6847d39d.js";const A={title:"RmgMultiSelect",component:a},e=()=>{const[t,c]=m.useState(["local"]);return r(n,{children:[s(p,{label:"Service",children:s(a,{displayValue:"Select services",selections:[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}],defaultValue:t,onChange:c})}),r(u,{children:["Selected: ",t.join(",")]})]})};var o,l,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const F=["Basic"];export{e as Basic,F as __namedExportsOrder,A as default};
//# sourceMappingURL=rmg-multi-select.stories-deb859b1.js.map
