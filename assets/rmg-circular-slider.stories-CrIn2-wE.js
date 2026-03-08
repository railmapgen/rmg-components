import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as r}from"./rmg-circular-slider-rXT0h5C4.js";import{r as n}from"./index-YTOF1_EJ.js";import{B as o}from"./box-D6KG7-BB.js";import{T as t}from"./text-CHlwKSpP.js";import{V as l}from"./v-stack-xgEv0GJW.js";import{H as q}from"./h-stack-CgKZGsc7.js";import"./use-style-config-Ltp0mO6k.js";import"./theming-props-MwSyLzPB.js";import"./stack-BndYsCEc.js";import"./children-DxTy7EQl.js";const Z={title:"RmgCircularSlider",component:r},c=()=>{const[a,s]=n.useState(0);return e.jsxs(o,{children:[e.jsx(r,{defaultValue:a,onChange:s}),e.jsxs(t,{mt:2,children:["Current value: ",a,"°"]})]})},i=()=>{const[a,s]=n.useState(0);return e.jsxs(o,{children:[e.jsx(r,{defaultValue:a,min:0,max:100,onChange:s}),e.jsxs(t,{mt:2,children:["Current value: ",a," (range: 0-100)"]})]})},d=()=>{const[a,s]=n.useState(0);return e.jsx(o,{children:e.jsxs(l,{align:"start",spacing:4,children:[e.jsx(t,{children:"Snap step: 30° (every 30 degrees)"}),e.jsx(r,{defaultValue:a,snapStep:30,snapThreshold:3,onChange:s}),e.jsxs(t,{children:["Current value: ",a,"°"]})]})})},p=()=>{const[a,s]=n.useState(0),u=[90,180,270];return e.jsx(o,{children:e.jsxs(l,{align:"start",spacing:4,children:[e.jsx(t,{children:"Disabled values: 90°, 180°, 270°"}),e.jsx(r,{defaultValue:a,disabledValues:u,onChange:s}),e.jsxs(t,{children:["Current value: ",a,"°"]})]})})},x=()=>{const[a,s]=n.useState(0),[u,W]=n.useState(45),[V,O]=n.useState(90);return e.jsxs(q,{spacing:8,children:[e.jsxs(l,{children:[e.jsx(r,{defaultValue:a,size:80,onChange:s}),e.jsxs(t,{children:["Size: 80px (",a,"°)"]})]}),e.jsxs(l,{children:[e.jsx(r,{defaultValue:u,size:120,onChange:W}),e.jsxs(t,{children:["Size: 120px (",u,"°)"]})]}),e.jsxs(l,{children:[e.jsx(r,{defaultValue:V,size:160,onChange:O}),e.jsxs(t,{children:["Size: 160px (",V,"°)"]})]})]})},m=()=>{const[a,s]=n.useState(0);return e.jsx(o,{children:e.jsxs(l,{align:"start",spacing:4,children:[e.jsx(t,{children:"Step: 5 (moves 5 degrees at a time with keyboard)"}),e.jsx(r,{defaultValue:a,step:5,onChange:s}),e.jsxs(t,{children:["Current value: ",a,"°"]})]})})},S=()=>{const[a,s]=n.useState(45),u=[180];return e.jsx(o,{children:e.jsxs(l,{align:"start",spacing:4,children:[e.jsx(t,{children:"Large slider with 180° disabled"}),e.jsx(r,{defaultValue:a,size:200,disabledValues:u,snapStep:45,snapThreshold:3,onChange:s}),e.jsxs(t,{children:["Current value: ",a,"° ",a%45===0?"(snapped to 45° mark)":""]})]})})};var g,h,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <Box>
            <RmgCircularSlider defaultValue={value} onChange={setValue} />
            <Text mt={2}>Current value: {value}°</Text>
        </Box>;
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,j,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <Box>
            <RmgCircularSlider defaultValue={value} min={0} max={100} onChange={setValue} />
            <Text mt={2}>Current value: {value} (range: 0-100)</Text>
        </Box>;
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var f,k,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <Box>
            <VStack align="start" spacing={4}>
                <Text>Snap step: 30° (every 30 degrees)</Text>
                <RmgCircularSlider defaultValue={value} snapStep={30} snapThreshold={3} onChange={setValue} />
                <Text>Current value: {value}°</Text>
            </VStack>
        </Box>;
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var z,B,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const disabledValues = [90, 180, 270];
  return <Box>
            <VStack align="start" spacing={4}>
                <Text>Disabled values: 90°, 180°, 270°</Text>
                <RmgCircularSlider defaultValue={value} disabledValues={disabledValues} onChange={setValue} />
                <Text>Current value: {value}°</Text>
            </VStack>
        </Box>;
}`,...(R=(B=p.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var w,y,D;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(45);
  const [value3, setValue3] = useState(90);
  return <HStack spacing={8}>
            <VStack>
                <RmgCircularSlider defaultValue={value1} size={80} onChange={setValue1} />
                <Text>Size: 80px ({value1}°)</Text>
            </VStack>
            <VStack>
                <RmgCircularSlider defaultValue={value2} size={120} onChange={setValue2} />
                <Text>Size: 120px ({value2}°)</Text>
            </VStack>
            <VStack>
                <RmgCircularSlider defaultValue={value3} size={160} onChange={setValue3} />
                <Text>Size: 160px ({value3}°)</Text>
            </VStack>
        </HStack>;
}`,...(D=(y=x.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var H,L,E;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <Box>
            <VStack align="start" spacing={4}>
                <Text>Step: 5 (moves 5 degrees at a time with keyboard)</Text>
                <RmgCircularSlider defaultValue={value} step={5} onChange={setValue} />
                <Text>Current value: {value}°</Text>
            </VStack>
        </Box>;
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var _,A,F;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(45);
  const disabledValues = [180];
  return <Box>
            <VStack align="start" spacing={4}>
                <Text>Large slider with 180° disabled</Text>
                <RmgCircularSlider defaultValue={value} size={200} disabledValues={disabledValues} snapStep={45} snapThreshold={3} onChange={setValue} />
                <Text>
                    Current value: {value}° {value % 45 === 0 ? '(snapped to 45° mark)' : ''}
                </Text>
            </VStack>
        </Box>;
}`,...(F=(A=S.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const $=["Basic","CustomRange","CustomSnapStep","DisabledValues","CustomSize","CustomStep","LargeWithAllFeatures"];export{c as Basic,i as CustomRange,x as CustomSize,d as CustomSnapStep,m as CustomStep,p as DisabledValues,S as LargeWithAllFeatures,$ as __namedExportsOrder,Z as default};
