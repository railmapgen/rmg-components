import{j as t}from"./jsx-runtime-D_3pcrNB.js";import{R as l}from"./rmg-auto-complete-UVtKD_sq.js";import{r as c}from"./index-YTOF1_EJ.js";import{V as u}from"./v-stack-C6CfU8Ux.js";import{H as g}from"./h-stack-UScz_r2Q.js";import{B as f}from"./button-X5yNzHuh.js";import{T as h}from"./text-BVacSSXG.js";import"./use-style-config-CZvBo0tQ.js";import"./theming-props-BSFQkWYI.js";import"./icon-BjAU1tzt.js";import"./context-CXQEnuw_.js";import"./popover-content-h29T3bdv.js";import"./use-merge-refs-CDN4nSPx.js";import"./use-callback-ref-DWfjZ6Ol.js";import"./owner-Gy7R3qQx.js";import"./is-element-C52yPwBl.js";import"./use-safe-layout-effect-CW26zb7A.js";import"./use-update-effect-BBuVyHsC.js";import"./focusable-crJ8ziAt.js";import"./use-outside-click-Cuk0WFGe.js";import"./call-all-DDzecCnU.js";import"./proxy-sAlfivGQ.js";import"./define-styles-BSAHv3yx.js";import"./flex-DQjtzar9.js";import"./box-BemYKwwm.js";import"./children-DxTy7EQl.js";import"./input-0Wh662oD.js";import"./use-form-control-0_APRVQN.js";import"./attr-sHTFgF0E.js";import"./popover-anchor-CkMtYGyI.js";import"./use-controllable-state-n041KlKk.js";import"./stack-hKhd1sv6.js";import"./emotion-react.browser.esm-CQsZap0v.js";const W={title:"RmgAutoComplete",component:l},o=()=>{const n=[{id:"gz",flag:"🇨🇳",name:{en:"Guangzhou",zh:"廣州"}},{id:"hk",flag:"🇭🇰",name:{en:"Hong Kong",zh:"香港"}},{id:"london",flag:"🇬🇧",name:{en:"London",zh:"倫敦"}}].map(e=>({...e,value:e.name.en})),[a,m]=c.useState(n[2]);return t.jsxs(u,{children:[t.jsxs(g,{children:[t.jsx(l,{data:n,displayHandler:e=>`${e.flag} ${e.name.en}`,filter:(e,r)=>r.id.toLowerCase().includes(e.toLowerCase())||Object.values(r.name).some(d=>d.toLowerCase().includes(e.toLowerCase())),value:a.value,onChange:m}),t.jsx(f,{onClick:()=>m(n[0]),children:"set"})]}),t.jsx(h,{children:JSON.stringify(a)})]})};var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
  return <VStack>
            <HStack>
                <RmgAutoComplete data={data} displayHandler={item => \`\${item.flag} \${item.name.en}\`} filter={(query, item) => item.id.toLowerCase().includes(query.toLowerCase()) || Object.values(item.name).some(name => name.toLowerCase().includes(query.toLowerCase()))} value={selectedItem.value} onChange={setSelectedItem} />
                <Button onClick={() => setSelectedItem(data[0])}>set</Button>
            </HStack>
            <Text>{JSON.stringify(selectedItem)}</Text>
        </VStack>;
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const X=["Basic"];export{o as Basic,X as __namedExportsOrder,W as default};
