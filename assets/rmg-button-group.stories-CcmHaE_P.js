import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r}from"./index-l2PZgWEW.js";import{R as l}from"./rmg-button-group-DHgzbloQ.js";import{F as g}from"./flex-m7aLVNfQ.js";import{B as i}from"./box-BzyDp4Vq.js";import{T as a}from"./text-CJHeydjz.js";import"./button-NxOcYH6u.js";import"./context-cwyNcBuw.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./theming-props-0pEswy1w.js";import"./emotion-react.browser.esm-RUFYoBmu.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-D5j2VCPL.js";import"./attr-sHTFgF0E.js";const V={title:"RmgButtonGroup",component:l},t=()=>{const[s,p]=r.useState("gzmtr"),[n,S]=r.useState(["gzmtr"]),o=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e.jsxs(g,{children:[e.jsxs(i,{w:200,mr:2,children:[e.jsx(l,{selections:o,defaultValue:s,onChange:p}),e.jsx(l,{selections:o,defaultValue:n,onChange:S,multiSelect:!0})]}),e.jsxs(i,{children:[e.jsxs(a,{children:["Single select: ",s]}),e.jsxs(a,{children:["Multi select: ",n.join(",")]})]})]})};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [singleSelect, setSingleSelect] = useState('gzmtr');
  const [multiSelect, setMultiSelect] = useState(['gzmtr']);
  const selections = [{
    label: 'MTR',
    value: 'mtr',
    disabled: true
  }, {
    label: 'GZMTR',
    value: 'gzmtr'
  }, {
    label: 'SHMetro',
    value: 'shmetro'
  }];
  return <Flex>
            <Box w={200} mr={2}>
                <RmgButtonGroup selections={selections} defaultValue={singleSelect} onChange={setSingleSelect} />
                <RmgButtonGroup selections={selections} defaultValue={multiSelect} onChange={setMultiSelect} multiSelect />
            </Box>

            <Box>
                <Text>Single select: {singleSelect}</Text>
                <Text>Multi select: {multiSelect.join(',')}</Text>
            </Box>
        </Flex>;
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,V as default};
