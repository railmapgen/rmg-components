import{j as e}from"./jsx-runtime-4ca860c5.js";import{r}from"./index-61bf1805.js";import{R as l}from"./rmg-button-group-96c2c411.js";import{F as g}from"./chunk-KRPLQIP4-7a7d7866.js";import{B as i}from"./chunk-PULVB27S-dfb23afe.js";import{T as a}from"./chunk-2OOHT3W5-423ffe97.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-UVUR7MCU-7fc2c9bf.js";import"./index-6830816b.js";import"./chunk-ZJJGQIVY-35f6fb8e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./emotion-react.browser.esm-3572b68e.js";import"./index-c23131f5.js";const C={title:"RmgButtonGroup",component:l},t=()=>{const[s,S]=r.useState("gzmtr"),[n,p]=r.useState(["gzmtr"]),o=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e.jsxs(g,{children:[e.jsxs(i,{w:200,children:[e.jsx(l,{selections:o,defaultValue:s,onChange:S}),e.jsx(l,{selections:o,defaultValue:n,onChange:p,multiSelect:!0})]}),e.jsxs(i,{children:[e.jsxs(a,{children:["Single select: ",s]}),e.jsxs(a,{children:["Multi select: ",n.join(",")]})]})]})};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
            <Box w={200}>
                <RmgButtonGroup selections={selections} defaultValue={singleSelect} onChange={setSingleSelect} />
                <RmgButtonGroup selections={selections} defaultValue={multiSelect} onChange={setMultiSelect} multiSelect />
            </Box>

            <Box>
                <Text>Single select: {singleSelect}</Text>
                <Text>Multi select: {multiSelect.join(',')}</Text>
            </Box>
        </Flex>;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const F=["Basic"];export{t as Basic,F as __namedExportsOrder,C as default};
//# sourceMappingURL=rmg-button-group.stories-b0638b66.js.map
