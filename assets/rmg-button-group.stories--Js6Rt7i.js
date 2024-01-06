import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r}from"./index-4g5l5LRQ.js";import{R as l}from"./rmg-button-group-2qWM4Ceg.js";import{T as i}from"./chunk-2OOHT3W5-sHQFM59z.js";import{B as a}from"./chunk-PULVB27S-T0wR8Lw9.js";import{F as g}from"./chunk-KRPLQIP4-avfFEcPQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./chunk-UVUR7MCU-QLPb9jvy.js";import"./index-818H0KCj.js";import"./chunk-ZJJGQIVY-x0BkbaAD.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-5PH6ULNP-oD9NqLbq.js";import"./emotion-react.browser.esm-Y08UVQfg.js";import"./index-IGsecODW.js";import"./chunk-R3DH46PF-AVI-Wkee.js";const V={title:"RmgButtonGroup",component:l},t=()=>{const[s,p]=r.useState("gzmtr"),[n,S]=r.useState(["gzmtr"]),o=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e.jsxs(g,{children:[e.jsxs(a,{w:200,mr:2,children:[e.jsx(l,{selections:o,defaultValue:s,onChange:p}),e.jsx(l,{selections:o,defaultValue:n,onChange:S,multiSelect:!0})]}),e.jsxs(a,{children:[e.jsxs(i,{children:["Single select: ",s]}),e.jsxs(i,{children:["Multi select: ",n.join(",")]})]})]})};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
