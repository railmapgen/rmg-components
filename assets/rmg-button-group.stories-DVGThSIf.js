import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r}from"./index-l2PZgWEW.js";import{R as l}from"./rmg-button-group-BtleeoNC.js";import{T as i}from"./chunk-2OOHT3W5-DXYVaS7r.js";import{B as a}from"./chunk-PULVB27S-D50L2BCI.js";import{F as g}from"./chunk-KRPLQIP4-BmNtW2Pm.js";import"./chunk-UVUR7MCU-CgH5ZmQc.js";import"./index-C1GouHpy.js";import"./chunk-ZJJGQIVY-PjEMQnTN.js";import"./extends-CCbyfPlC.js";import"./emotion-react.browser.esm-C54oTSLI.js";import"./index-D5j2VCPL.js";import"./chunk-R3DH46PF-iWUMGBws.js";const C={title:"RmgButtonGroup",component:l},t=()=>{const[s,S]=r.useState("gzmtr"),[n,p]=r.useState(["gzmtr"]),o=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e.jsxs(g,{children:[e.jsxs(a,{w:200,mr:2,children:[e.jsx(l,{selections:o,defaultValue:s,onChange:S}),e.jsx(l,{selections:o,defaultValue:n,onChange:p,multiSelect:!0})]}),e.jsxs(a,{children:[e.jsxs(i,{children:["Single select: ",s]}),e.jsxs(i,{children:["Multi select: ",n.join(",")]})]})]})};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["Basic"];export{t as Basic,F as __namedExportsOrder,C as default};
