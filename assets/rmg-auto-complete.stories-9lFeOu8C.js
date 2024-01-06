import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{R as i}from"./rmg-auto-complete-gQ98lHxs.js";import{r as d}from"./index-4g5l5LRQ.js";import"./chunk-ITIKTQWJ-KytNL84X.js";import"./chunk-ZJJGQIVY-x0BkbaAD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-24I2HV4N--9u-gXk1.js";import"./index-eGeiRRs6.js";import"./index-6Tfs0cS0.js";import"./index-ohh_DJAR.js";import"./index-IGsecODW.js";import"./index-818H0KCj.js";import"./motion-wzXf7Hoo.js";import"./chunk-DY5QRMBO-F_aDQcd9.js";import"./chunk-AZVKQZKI-MDSw90Or.js";import"./chunk-KA2477BY-NeCTj7jt.js";import"./chunk-KRPLQIP4-avfFEcPQ.js";import"./chunk-PULVB27S-T0wR8Lw9.js";import"./index-obPvAbvY.js";import"./chunk-R3DH46PF-AVI-Wkee.js";import"./chunk-6CVSDS6C-1R5Q2Z0B.js";import"./chunk-56K2BSAJ-YmVMgeUu.js";import"./chunk-5PH6ULNP-oD9NqLbq.js";import"./emotion-react.browser.esm-Y08UVQfg.js";const q={title:"RmgAutoComplete",component:i},o=()=>{const t=[{id:"gz",flag:"🇨🇳",name:{en:"Guangzhou",zh:"廣州"}},{id:"hk",flag:"🇭🇰",name:{en:"Hong Kong",zh:"香港"}},{id:"london",flag:"🇬🇧",name:{en:"London",zh:"倫敦"}}],[s,u]=d.useState(t[2]);return l.jsx(i,{data:t,displayValue:e=>`${e.flag} ${e.name.en}`,filter:(e,n)=>n.id.toLowerCase().includes(e.toLowerCase())||Object.values(n.name).some(p=>p.toLowerCase().includes(e.toLowerCase())),value:s,onChange:e=>{u(e),alert(JSON.stringify(e))}})};var a,r,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
  }];
  const [value, setValue] = useState(data[2]);
  return <RmgAutoComplete data={data} displayValue={item => \`\${item.flag} \${item.name.en}\`} filter={(query, item) => item.id.toLowerCase().includes(query.toLowerCase()) || Object.values(item.name).some(name => name.toLowerCase().includes(query.toLowerCase()))} value={value} onChange={item => {
    setValue(item);
    alert(JSON.stringify(item));
  }} />;
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const G=["Basic"];export{o as Basic,G as __namedExportsOrder,q as default};
