import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as l}from"./rmg-multi-select-Ciphkga2.js";import{r as m}from"./index-YTOF1_EJ.js";import{R as p}from"./rmg-label-D66pgBjy.js";import{B as n}from"./box-D6KG7-BB.js";import{T as u}from"./text-CHlwKSpP.js";import"./use-style-config-Ltp0mO6k.js";import"./popover-content-CypLHs9z.js";import"./use-merge-refs-CDN4nSPx.js";import"./use-callback-ref-DWfjZ6Ol.js";import"./owner-Gy7R3qQx.js";import"./is-element-C52yPwBl.js";import"./use-safe-layout-effect-CW26zb7A.js";import"./use-update-effect-BBuVyHsC.js";import"./focusable-crJ8ziAt.js";import"./use-outside-click-Cuk0WFGe.js";import"./call-all-DDzecCnU.js";import"./theming-props-MwSyLzPB.js";import"./context-CXQEnuw_.js";import"./proxy-Bkuy0yg-.js";import"./define-styles-BSAHv3yx.js";import"./popover-anchor-sqa2GHxH.js";import"./badge-p_Tm0Ug3.js";import"./popover-body-DFKYZ_cI.js";import"./icon-Cu2HGl0Z.js";import"./children-DxTy7EQl.js";import"./emotion-react.browser.esm-BnJwjeil.js";import"./use-checkbox-BdaAIXtV.js";import"./use-form-control-sDxIUhH2.js";import"./attr-sHTFgF0E.js";const J={title:"RmgMultiSelect",component:l},t=()=>{const[r,a]=m.useState(["local"]),c=[{label:"Local",value:"local"},{label:"Express",value:"express"},{label:"Direct",value:"direct"}];return e.jsxs(n,{children:[e.jsx(p,{label:"Service",children:e.jsx(l,{displayValue:"Select services",selections:c,defaultValue:r,onChange:a})}),e.jsxs(u,{children:["Selected: ",r.join(",")]})]})};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const K=["Basic"];export{t as Basic,K as __namedExportsOrder,J as default};
