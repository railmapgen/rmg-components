import{j as e}from"./jsx-runtime-94f6e698.js";import{R as c}from"./rmg-select-78fb5b85.js";import{r as l}from"./index-8db94870.js";import{B as d}from"./chunk-6CSUKJP7-aa140969.js";import{T as m}from"./chunk-P74GIWPW-1683f8b1.js";import{B as u}from"./chunk-NAA7TEES-feaaf6f8.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-IJBC3YLI-975cc9bc.js";import"./index-f800231c.js";import"./index-bf97d06a.js";import"./emotion-react.browser.esm-92f45e4a.js";const b={title:"RmgSelect",component:c},t=()=>{const[n,o]=l.useState("undefined"),a={undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"};return e.jsxs(d,{children:[e.jsx(c,{defaultValue:n,options:a,disabledOptions:["undefined"],onChange:({target:{value:p}})=>o(p)}),e.jsxs(m,{children:["Your selection: ",n]}),e.jsx(u,{onClick:()=>o("undefined"),children:"Reset"})]})};var s,i,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const k=["Basic"];export{t as Basic,k as __namedExportsOrder,b as default};
//# sourceMappingURL=rmg-select.stories-8674edfa.js.map
