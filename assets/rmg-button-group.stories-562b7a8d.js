import{a as e,j as s}from"./jsx-runtime-670450c2.js";import{r as i}from"./index-f1f749bf.js";import{R as l}from"./rmg-button-group-7dfbfe5f.js";import{F as d}from"./chunk-MPFPK3CX-501e08a9.js";import{T as a}from"./chunk-P74GIWPW-98bbe6ad.js";import{B as c}from"./chunk-6CSUKJP7-9c438e99.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-NAA7TEES-fcf38781.js";import"./index-6d9c108a.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./emotion-react.browser.esm-a44b8d61.js";import"./index-ff36e217.js";const V={title:"RmgButtonGroup",component:l},t=()=>{const[n,p]=i.useState("gzmtr"),[o,g]=i.useState(["gzmtr"]),r=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e(d,{children:[e(c,{w:200,children:[s(l,{selections:r,defaultValue:n,onChange:p}),s(l,{selections:r,defaultValue:o,onChange:g,multiSelect:!0})]}),e(c,{children:[e(a,{children:["Single select: ",n]}),e(a,{children:["Multi select: ",o.join(",")]})]})]})};var u,m,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(S=(m=t.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};const _=["Basic"];export{t as Basic,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=rmg-button-group.stories-562b7a8d.js.map
