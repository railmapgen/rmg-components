import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{R as u}from"./rmg-auto-complete-56B9xFfK.js";import{r as d}from"./index-4g5l5LRQ.js";import{H as c}from"./chunk-3ASUQ6PA-w6k_hwUc.js";import{B as g}from"./chunk-UVUR7MCU-N-PTybSK.js";import"./chunk-ITIKTQWJ-KytNL84X.js";import"./chunk-ZJJGQIVY-x0BkbaAD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-24I2HV4N--9u-gXk1.js";import"./index-eGeiRRs6.js";import"./index-6Tfs0cS0.js";import"./index-ohh_DJAR.js";import"./index-IGsecODW.js";import"./index-818H0KCj.js";import"./motion-wzXf7Hoo.js";import"./chunk-DY5QRMBO-F_aDQcd9.js";import"./chunk-AZVKQZKI-MDSw90Or.js";import"./chunk-KA2477BY-NeCTj7jt.js";import"./chunk-KRPLQIP4-avfFEcPQ.js";import"./chunk-PULVB27S-T0wR8Lw9.js";import"./index-obPvAbvY.js";import"./chunk-R3DH46PF-AVI-Wkee.js";import"./chunk-6CVSDS6C-1R5Q2Z0B.js";import"./chunk-56K2BSAJ-YmVMgeUu.js";import"./emotion-react.browser.esm-Y08UVQfg.js";const J={title:"RmgAutoComplete",component:u},t=()=>{const n=[{id:"gz",flag:"🇨🇳",name:{en:"Guangzhou",zh:"廣州"}},{id:"hk",flag:"🇭🇰",name:{en:"Hong Kong",zh:"香港"}},{id:"london",flag:"🇬🇧",name:{en:"London",zh:"倫敦"}}].map(e=>({...e,value:e.name.en})),[l,a]=d.useState(n[2]);return o.jsxs(c,{children:[o.jsx(u,{data:n,displayHandler:e=>`${e.flag} ${e.name.en}`,filter:(e,m)=>m.id.toLowerCase().includes(e.toLowerCase())||Object.values(m.name).some(p=>p.toLowerCase().includes(e.toLowerCase())),value:l.value,onChange:e=>{a(e),alert(JSON.stringify(e))}}),o.jsx(g,{onClick:()=>a(n[0]),children:"set"})]})};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
