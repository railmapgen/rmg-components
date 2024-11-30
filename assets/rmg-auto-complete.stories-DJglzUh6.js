import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{R as l}from"./rmg-auto-complete-BxGdkShh.js";import{r as c}from"./index-l2PZgWEW.js";import{H as u}from"./h-stack-cUKF_l-z.js";import{B as g}from"./button-NxOcYH6u.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./popover-content-CzLH0bCI.js";import"./use-merge-refs-D5j2VCPL.js";import"./use-callback-ref-Dj4FKvIb.js";import"./owner-Gy7R3qQx.js";import"./is-element-C52yPwBl.js";import"./use-safe-layout-effect-Cmtk91ip.js";import"./use-update-effect-CYAyYmx7.js";import"./focusable-crJ8ziAt.js";import"./use-outside-click-DfGn5dTp.js";import"./call-all-DDzecCnU.js";import"./theming-props-0pEswy1w.js";import"./context-cwyNcBuw.js";import"./proxy-COICayAC.js";import"./define-styles-BSAHv3yx.js";import"./flex-m7aLVNfQ.js";import"./box-BzyDp4Vq.js";import"./children-DWIC1-M1.js";import"./input-C1uKqQaN.js";import"./use-form-control-BPHXiTF4.js";import"./attr-sHTFgF0E.js";import"./popover-anchor-gfsSCyUL.js";import"./use-controllable-state-BexJ4yna.js";import"./stack-BTMNAlm1.js";import"./emotion-react.browser.esm-RUFYoBmu.js";const Q={title:"RmgAutoComplete",component:l},t=()=>{const n=[{id:"gz",flag:"🇨🇳",name:{en:"Guangzhou",zh:"廣州"}},{id:"hk",flag:"🇭🇰",name:{en:"Hong Kong",zh:"香港"}},{id:"london",flag:"🇬🇧",name:{en:"London",zh:"倫敦"}}].map(e=>({...e,value:e.name.en})),[p,a]=c.useState(n[2]);return o.jsxs(u,{children:[o.jsx(l,{data:n,displayHandler:e=>`${e.flag} ${e.name.en}`,filter:(e,m)=>m.id.toLowerCase().includes(e.toLowerCase())||Object.values(m.name).some(d=>d.toLowerCase().includes(e.toLowerCase())),value:p.value,onChange:e=>{a(e),alert(JSON.stringify(e))}}),o.jsx(g,{onClick:()=>a(n[0]),children:"set"})]})};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const T=["Basic"];export{t as Basic,T as __namedExportsOrder,Q as default};
