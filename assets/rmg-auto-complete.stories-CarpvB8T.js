import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{R as l}from"./rmg-auto-complete-COASMs3F.js";import{r as c}from"./index-l2PZgWEW.js";import{H as u}from"./chunk-3ASUQ6PA-DLWg8rFO.js";import{B as g}from"./chunk-UVUR7MCU-ClMFwOOR.js";import"./chunk-ITIKTQWJ-C1RxwjPJ.js";import"./chunk-ZJJGQIVY-G7EJoKQ9.js";import"./extends-CCbyfPlC.js";import"./chunk-24I2HV4N-DAWbi5WC.js";import"./index-C1WesdbD.js";import"./index-BJzPjEZr.js";import"./index-D72gjLle.js";import"./index-D5j2VCPL.js";import"./index-C1GouHpy.js";import"./proxy-COICayAC.js";import"./chunk-DY5QRMBO-C9nBwvEV.js";import"./chunk-AZVKQZKI-DA0n83G2.js";import"./chunk-KA2477BY-BN_1X1L0.js";import"./chunk-KRPLQIP4-D5dNO0im.js";import"./chunk-PULVB27S-BvTYsj2L.js";import"./index-DWIC1-M1.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-6CVSDS6C-BMjadXQn.js";import"./chunk-56K2BSAJ-BTjm4QzQ.js";import"./chunk-ZHMYA64R-CdWuC5az.js";import"./emotion-react.browser.esm-DJ_JGAiU.js";const N={title:"RmgAutoComplete",component:l},t=()=>{const n=[{id:"gz",flag:"🇨🇳",name:{en:"Guangzhou",zh:"廣州"}},{id:"hk",flag:"🇭🇰",name:{en:"Hong Kong",zh:"香港"}},{id:"london",flag:"🇬🇧",name:{en:"London",zh:"倫敦"}}].map(e=>({...e,value:e.name.en})),[p,a]=c.useState(n[2]);return o.jsxs(u,{children:[o.jsx(l,{data:n,displayHandler:e=>`${e.flag} ${e.name.en}`,filter:(e,m)=>m.id.toLowerCase().includes(e.toLowerCase())||Object.values(m.name).some(d=>d.toLowerCase().includes(e.toLowerCase())),value:p.value,onChange:e=>{a(e),alert(JSON.stringify(e))}}),o.jsx(g,{onClick:()=>a(n[0]),children:"set"})]})};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const D=["Basic"];export{t as Basic,D as __namedExportsOrder,N as default};
