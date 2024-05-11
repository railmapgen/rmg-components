import{j as o}from"./jsx-runtime-CGpYA4L6.js";import{R as u}from"./rmg-auto-complete-BLLfDC-F.js";import{r as d}from"./index-CleY8y_P.js";import{H as c}from"./chunk-3ASUQ6PA-DUIqzYik.js";import{B as g}from"./chunk-UVUR7MCU-CDEQ8fQk.js";import"./chunk-ITIKTQWJ-B0xz0Bxa.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./chunk-24I2HV4N-BDNbYGOa.js";import"./index-Cii9CPQx.js";import"./index-BJzPjEZr.js";import"./index-BDB9_2GA.js";import"./index-CRSocYPi.js";import"./index-DGaxrVvi.js";import"./motion-T_VaYMRm.js";import"./chunk-DY5QRMBO-Bg2qY5hc.js";import"./chunk-AZVKQZKI-fWIVeWGF.js";import"./chunk-KA2477BY-C8aLqnrw.js";import"./chunk-KRPLQIP4-vbZG9yKz.js";import"./chunk-PULVB27S-BYIORNcw.js";import"./index-BnL1FQTH.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-6CVSDS6C-CDOw_8Zr.js";import"./chunk-56K2BSAJ-DdNIyAaK.js";import"./emotion-react.browser.esm-BoJAA9QB.js";const J={title:"RmgAutoComplete",component:u},t=()=>{const n=[{id:"gz",flag:"🇨🇳",name:{en:"Guangzhou",zh:"廣州"}},{id:"hk",flag:"🇭🇰",name:{en:"Hong Kong",zh:"香港"}},{id:"london",flag:"🇬🇧",name:{en:"London",zh:"倫敦"}}].map(e=>({...e,value:e.name.en})),[l,a]=d.useState(n[2]);return o.jsxs(c,{children:[o.jsx(u,{data:n,displayHandler:e=>`${e.flag} ${e.name.en}`,filter:(e,m)=>m.id.toLowerCase().includes(e.toLowerCase())||Object.values(m.name).some(p=>p.toLowerCase().includes(e.toLowerCase())),value:l.value,onChange:e=>{a(e),alert(JSON.stringify(e))}}),o.jsx(g,{onClick:()=>a(n[0]),children:"set"})]})};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const K=["Basic"];export{t as Basic,K as __namedExportsOrder,J as default};
