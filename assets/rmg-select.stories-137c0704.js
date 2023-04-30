import{a as n,j as s}from"./jsx-runtime-670450c2.js";import{R as c}from"./rmg-select-cef7a22e.js";import{r as l}from"./index-f1f749bf.js";import{B as d}from"./chunk-6CSUKJP7-9c438e99.js";import{T as m}from"./chunk-P74GIWPW-98bbe6ad.js";import{B as u}from"./chunk-NAA7TEES-fcf38781.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./chunk-JSSKUSQH-f6df1457.js";import"./index-6d9c108a.js";import"./index-ff36e217.js";import"./emotion-react.browser.esm-a44b8d61.js";const E={title:"RmgSelect",component:c},e=()=>{const[t,o]=l.useState("undefined");return n(d,{children:[s(c,{defaultValue:t,options:{undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:["undefined"],onChange:({target:{value:p}})=>o(p)}),n(m,{children:["Your selection: ",t]}),s(u,{onClick:()=>o("undefined"),children:"Reset"})]})};var i,r,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [selection, setSelection] = useState('undefined');
  const options = {
    undefined: 'Please select...',
    opt1: 'Option 1',
    opt2: 'Option 2'
  };
  return <Box>
            <RmgSelect defaultValue={selection} options={options} disabledOptions={['undefined']} onChange={({
      target: {
        value
      }
    }) => setSelection(value)} />

            <Text>Your selection: {selection}</Text>

            <Button onClick={() => setSelection('undefined')}>Reset</Button>
        </Box>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const P=["Basic"];export{e as Basic,P as __namedExportsOrder,E as default};
//# sourceMappingURL=rmg-select.stories-137c0704.js.map
