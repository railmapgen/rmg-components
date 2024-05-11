import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r}from"./index-CleY8y_P.js";import{R as l}from"./rmg-button-group-mwgaYTX2.js";import{T as i}from"./chunk-2OOHT3W5-Dos5Muu_.js";import{B as a}from"./chunk-PULVB27S-BYIORNcw.js";import{F as g}from"./chunk-KRPLQIP4-vbZG9yKz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-UVUR7MCU-CDEQ8fQk.js";import"./index-DGaxrVvi.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./emotion-react.browser.esm-BoJAA9QB.js";import"./index-CRSocYPi.js";import"./chunk-R3DH46PF-iWUMGBws.js";const F={title:"RmgButtonGroup",component:l},t=()=>{const[s,p]=r.useState("gzmtr"),[n,S]=r.useState(["gzmtr"]),o=[{label:"MTR",value:"mtr",disabled:!0},{label:"GZMTR",value:"gzmtr"},{label:"SHMetro",value:"shmetro"}];return e.jsxs(g,{children:[e.jsxs(a,{w:200,mr:2,children:[e.jsx(l,{selections:o,defaultValue:s,onChange:p}),e.jsx(l,{selections:o,defaultValue:n,onChange:S,multiSelect:!0})]}),e.jsxs(a,{children:[e.jsxs(i,{children:["Single select: ",s]}),e.jsxs(i,{children:["Multi select: ",n.join(",")]})]})]})};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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