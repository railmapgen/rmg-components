import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{R as l}from"./rmg-auto-complete-C0fSeiGa.js";import{r as c}from"./index-l2PZgWEW.js";import{H as u}from"./chunk-3ASUQ6PA-CT5eOcsQ.js";import{B as g}from"./chunk-UVUR7MCU-CgH5ZmQc.js";import"./chunk-ZJJGQIVY-PjEMQnTN.js";import"./extends-CCbyfPlC.js";import"./chunk-24I2HV4N-BS6z7qfY.js";import"./index-C1WesdbD.js";import"./index-BJzPjEZr.js";import"./index-D72gjLle.js";import"./index-D5j2VCPL.js";import"./index-C1GouHpy.js";import"./proxy-COICayAC.js";import"./chunk-DY5QRMBO-bsmiMn4m.js";import"./chunk-AZVKQZKI-DA0n83G2.js";import"./chunk-KA2477BY-BN_1X1L0.js";import"./chunk-KRPLQIP4-BmNtW2Pm.js";import"./chunk-PULVB27S-D50L2BCI.js";import"./index-DWIC1-M1.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-6CVSDS6C-C-0SusQO.js";import"./chunk-56K2BSAJ-CAOiX2KR.js";import"./chunk-ZHMYA64R-DvZj5YEz.js";import"./emotion-react.browser.esm-C54oTSLI.js";const K={title:"RmgAutoComplete",component:l},t=()=>{const n=[{id:"gz",flag:"🇨🇳",name:{en:"Guangzhou",zh:"廣州"}},{id:"hk",flag:"🇭🇰",name:{en:"Hong Kong",zh:"香港"}},{id:"london",flag:"🇬🇧",name:{en:"London",zh:"倫敦"}}].map(e=>({...e,value:e.name.en})),[p,a]=c.useState(n[2]);return o.jsxs(u,{children:[o.jsx(l,{data:n,displayHandler:e=>`${e.flag} ${e.name.en}`,filter:(e,m)=>m.id.toLowerCase().includes(e.toLowerCase())||Object.values(m.name).some(d=>d.toLowerCase().includes(e.toLowerCase())),value:p.value,onChange:e=>{a(e),alert(JSON.stringify(e))}}),o.jsx(g,{onClick:()=>a(n[0]),children:"set"})]})};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const data = [{
    id: 'gz',
    flag: '🇨🇳',
    name: {
      en: 'Guangzhou',
      zh: '廣州'
    }
  }, {
    id: 'hk',
    flag: '🇭🇰',
    name: {
      en: 'Hong Kong',
      zh: '香港'
    }
  }, {
    id: 'london',
    flag: '🇬🇧',
    name: {
      en: 'London',
      zh: '倫敦'
    }
  }].map(item => ({
    ...item,
    value: item.name.en
  }));
  const [selectedItem, setSelectedItem] = useState(data[2]);
  return <HStack>
            <RmgAutoComplete data={data} displayHandler={item => \`\${item.flag} \${item.name.en}\`} filter={(query, item) => item.id.toLowerCase().includes(query.toLowerCase()) || Object.values(item.name).some(name => name.toLowerCase().includes(query.toLowerCase()))} value={selectedItem.value} onChange={item => {
      setSelectedItem(item);
      alert(JSON.stringify(item));
    }} />
            <Button onClick={() => setSelectedItem(data[0])}>set</Button>
        </HStack>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const N=["Basic"];export{t as Basic,N as __namedExportsOrder,K as default};
