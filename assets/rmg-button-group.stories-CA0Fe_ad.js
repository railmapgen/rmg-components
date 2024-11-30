import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{r}from"./index-YTOF1_EJ.js";import{R as l}from"./rmg-button-group-CbXfNEP-.js";import{F as g}from"./flex-DQjtzar9.js";import{B as i}from"./box-BemYKwwm.js";import{T as a}from"./text-BVacSSXG.js";import"./button-X5yNzHuh.js";import"./context-CXQEnuw_.js";import"./use-style-config-CZvBo0tQ.js";import"./theming-props-BSFQkWYI.js";import"./emotion-react.browser.esm-CQsZap0v.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";const F={title:"RmgButtonGroup",component:l},t=()=>{const[s,p]=r.useState("gzmtr"),[n,S]=r.useState(["gzmtr"]),o=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e.jsxs(g,{children:[e.jsxs(i,{w:200,mr:2,children:[e.jsx(l,{selections:o,defaultValue:s,onChange:p}),e.jsx(l,{selections:o,defaultValue:n,onChange:S,multiSelect:!0})]}),e.jsxs(i,{children:[e.jsxs(a,{children:["Single select: ",s]}),e.jsxs(a,{children:["Multi select: ",n.join(",")]})]})]})};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const V=["Basic"];export{t as Basic,V as __namedExportsOrder,F as default};
