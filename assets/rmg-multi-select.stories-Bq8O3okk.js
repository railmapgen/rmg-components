import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as l}from"./rmg-multi-select-B6W-c4UD.js";import{r as m}from"./index-l2PZgWEW.js";import{R as p}from"./rmg-label-DGET3yYX.js";import{B as n}from"./box-BzyDp4Vq.js";import{T as u}from"./text-CJHeydjz.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./popover-content-CzLH0bCI.js";import"./use-merge-refs-D5j2VCPL.js";import"./use-callback-ref-Dj4FKvIb.js";import"./owner-Gy7R3qQx.js";import"./is-element-C52yPwBl.js";import"./use-safe-layout-effect-Cmtk91ip.js";import"./use-update-effect-CYAyYmx7.js";import"./focusable-crJ8ziAt.js";import"./use-outside-click-DfGn5dTp.js";import"./call-all-DDzecCnU.js";import"./theming-props-0pEswy1w.js";import"./context-cwyNcBuw.js";import"./proxy-COICayAC.js";import"./define-styles-BSAHv3yx.js";import"./popover-anchor-gfsSCyUL.js";import"./badge-DfPChy9-.js";import"./popover-body-Dlj5EWYS.js";import"./icon-B9qoL11O.js";import"./children-DWIC1-M1.js";import"./emotion-react.browser.esm-RUFYoBmu.js";import"./use-checkbox-CE8a58PH.js";import"./use-form-control-BPHXiTF4.js";import"./attr-sHTFgF0E.js";const K={title:"RmgMultiSelect",component:l},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(n,{children:[e.jsx(p,{label:"Service",children:e.jsx(l,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const N=["Basic"];export{t as Basic,N as __namedExportsOrder,K as default};
