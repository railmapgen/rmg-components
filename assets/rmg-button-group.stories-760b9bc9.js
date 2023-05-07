import{j as e}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import{R as l}from"./rmg-button-group-e4da6d47.js";import{F as g}from"./chunk-MPFPK3CX-f34fe2a1.js";import{T as i}from"./chunk-P74GIWPW-ec21aa29.js";import{B as a}from"./chunk-6CSUKJP7-6f35fd63.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-NAA7TEES-9f41ecf3.js";import"./index-f800231c.js";import"./chunk-QEVFQ4EU-3b04e59c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./emotion-react.browser.esm-b050abe7.js";import"./index-bf97d06a.js";const C={title:"RmgButtonGroup",component:l},t=()=>{const[s,S]=r.useState("gzmtr"),[n,p]=r.useState(["gzmtr"]),o=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e.jsxs(g,{children:[e.jsxs(a,{w:200,children:[e.jsx(l,{selections:o,defaultValue:s,onChange:S}),e.jsx(l,{selections:o,defaultValue:n,onChange:p,multiSelect:!0})]}),e.jsxs(a,{children:[e.jsxs(i,{children:["Single select: ",s]}),e.jsxs(i,{children:["Multi select: ",n.join(",")]})]})]})};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=rmg-button-group.stories-760b9bc9.js.map
