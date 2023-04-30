import{j as e}from"./jsx-runtime-94f6e698.js";import{R as V}from"./rmg-fields-673c0460.js";import{r as t}from"./index-8db94870.js";import"./index-b08b8ff7.js";import{A as R,a as B}from"./chunk-PK3U2DQU-03aa93ca.js";import{F as D}from"./chunk-MPFPK3CX-57a2fde7.js";import{B as b}from"./chunk-6CSUKJP7-aa140969.js";import{T as s}from"./chunk-P74GIWPW-1683f8b1.js";import{R as F}from"./rmg-multi-line-string-4f638461.js";import{B as O}from"./chunk-NAA7TEES-feaaf6f8.js";import"./rmg-label-13554095.js";import"./chunk-IJBC3YLI-975cc9bc.js";import"./index-f800231c.js";import"./index-bf97d06a.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./rmg-debounced-input-c3a7719e.js";import"./chunk-QJA5SDDN-a1422c7f.js";import"./rmg-select-78fb5b85.js";import"./rmg-throttled-slider-a012ae3a.js";import"./index-b1d0288f.js";import"./index-f87d6104.js";import"./getPrototypeOf-624f05c9.js";import"./chunk-3HSDMH4Y-b00c7912.js";import"./chunk-HPA3SDH4-ec723f7a.js";import"./index-a91c9d3c.js";import"./chunk-QODHG6BI-83a8d938.js";import"./chunk-DKFDJSXF-50906ab2.js";import"./emotion-react.browser.esm-92f45e4a.js";const ce={title:"RmgFields",component:V},f=()=>{const[n,m]=t.useState(""),[l,p]=t.useState(""),[a,r]=t.useState(""),[o,u]=t.useState(5),[d,x]=t.useState(5),[i,S]=t.useState(""),[c,g]=t.useState(!1),I=[{type:"input",label:"Debounced input field",placeholder:"Enter text",value:n,onChange:m},{type:"input",label:"Debounced number field",placeholder:"Enter number",value:n,validator:M=>!isNaN(Number(M)),onChange:p},{type:"select",label:"Select field",options:{"":"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:[""],value:a,onChange:r},{type:"slider",label:"Integer slider field",value:o,min:0,max:10,onChange:u},{type:"slider",label:"Slider field",value:d,min:0,max:10,step:.1,onChange:x,leftIcon:e.jsx(R,{}),rightIcon:e.jsx(B,{})},{type:"textarea",label:"Multiline field",placeholder:"Please enter multiline text...",value:i,onChange:S,minW:"full"},{type:"switch",label:"Switch field",isChecked:c,onChange:g,oneLine:!0,minW:"full"},{type:"switch",label:"Disabled switch field",isChecked:!1,isDisabled:!0,oneLine:!0,minW:"full"}],j=()=>{m(""),p(""),r(""),u(5),x(5),S(""),g(!1)};return e.jsxs(D,{children:[e.jsx(b,{w:320,children:e.jsx(V,{fields:I,minW:100})}),e.jsxs(b,{children:[e.jsxs(s,{children:["Debounced input field: ",n]}),e.jsxs(s,{children:["Debounced number field: ",l]}),e.jsxs(s,{children:["Select field: ",a]}),e.jsxs(s,{children:["Integer slider field: ",o]}),e.jsxs(s,{children:["Slider field: ",d]}),e.jsxs(s,{children:["Debounced multiline field: ",e.jsx(F,{text:i,delimiter:`
`})]}),e.jsxs(s,{children:["Switch field: ",c.toString()]}),e.jsx(s,{children:"Disabled switch field: false"}),e.jsx(O,{onClick:()=>j(),children:"Reset all"})]})]})},h=()=>{const[n,m]=t.useState(0),[l,p]=t.useState(0),[a,r]=t.useState(!1),[o,u]=t.useState(!1);t.useEffect(()=>{r(!1),n&&l&&n>l&&u(!0)},[n]),t.useEffect(()=>{u(!1),n&&l&&n>l&&r(!0)},[l]);const d=Array(10).fill(0).reduce((i,S,c)=>({...i,[c+1]:(c+1).toString()}),{0:"Please select..."}),x=[{type:"select",label:"Min",value:n,options:d,disabledOptions:[0],onChange:i=>m(i),isInvalid:a},{type:"select",label:"Max",value:l,options:d,disabledOptions:[0],onChange:i=>p(i),isInvalid:o}];return e.jsxs(b,{w:320,children:[e.jsx(s,{children:"Please select a range"}),e.jsx(V,{fields:x}),e.jsxs(s,{children:["Your range: ",n&&l&&!a&&!o?`from ${n} to ${l}`:"invalid"]})]})};var w,v,T;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [intSliderValue, setIntSliderValue] = useState(5);
  const [sliderValue, setSliderValue] = useState(5);
  const [textareaValue, setTextareaValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const fields: RmgFieldsField<string>[] = [{
    type: 'input',
    label: 'Debounced input field',
    placeholder: 'Enter text',
    value: inputValue,
    onChange: setInputValue
  }, {
    type: 'input',
    label: 'Debounced number field',
    placeholder: 'Enter number',
    value: inputValue,
    validator: value => !isNaN(Number(value)),
    onChange: setNumberValue
  }, {
    type: 'select',
    label: 'Select field',
    options: {
      '': 'Please select...',
      opt1: 'Option 1',
      opt2: 'Option 2'
    },
    disabledOptions: [''],
    value: selectValue,
    onChange: setSelectValue
  }, {
    type: 'slider',
    label: 'Integer slider field',
    value: intSliderValue,
    min: 0,
    max: 10,
    onChange: setIntSliderValue
  }, {
    type: 'slider',
    label: 'Slider field',
    value: sliderValue,
    min: 0,
    max: 10,
    step: 0.1,
    onChange: setSliderValue,
    leftIcon: <ArrowBackIcon />,
    rightIcon: <ArrowForwardIcon />
  }, {
    type: 'textarea',
    label: 'Multiline field',
    placeholder: 'Please enter multiline text...',
    value: textareaValue,
    onChange: setTextareaValue,
    minW: 'full'
  }, {
    type: 'switch',
    label: 'Switch field',
    isChecked: switchValue,
    onChange: setSwitchValue,
    oneLine: true,
    minW: 'full'
  }, {
    type: 'switch',
    label: 'Disabled switch field',
    isChecked: false,
    isDisabled: true,
    oneLine: true,
    minW: 'full'
  }];
  const handleReset = () => {
    setInputValue('');
    setNumberValue('');
    setSelectValue('');
    setIntSliderValue(5);
    setSliderValue(5);
    setTextareaValue('');
    setSwitchValue(false);
  };
  return <Flex>
            <Box w={320}>
                <RmgFields fields={fields} minW={100} />
            </Box>

            <Box>
                <Text>Debounced input field: {inputValue}</Text>
                <Text>Debounced number field: {numberValue}</Text>
                <Text>Select field: {selectValue}</Text>
                <Text>Integer slider field: {intSliderValue}</Text>
                <Text>Slider field: {sliderValue}</Text>
                <Text>Debounced multiline field: {<RmgMultiLineString text={textareaValue} delimiter={'\\n'} />}</Text>
                <Text>Switch field: {switchValue.toString()}</Text>
                <Text>Disabled switch field: false</Text>

                <Button onClick={() => handleReset()}>Reset all</Button>
            </Box>
        </Flex>;
}`,...(T=(v=f.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var E,C,y;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);
  useEffect(() => {
    setMinError(false);
    if (min && max && min > max) {
      setMaxError(true);
    }
  }, [min]);
  useEffect(() => {
    setMaxError(false);
    if (min && max && min > max) {
      setMinError(true);
    }
  }, [max]);
  const options = Array(10).fill(0).reduce<Record<number, string>>((acc, cur, idx) => ({
    ...acc,
    [idx + 1]: (idx + 1).toString()
  }), {
    0: 'Please select...'
  });
  const fields: RmgFieldsField[] = [{
    type: 'select',
    label: 'Min',
    value: min,
    options: options,
    disabledOptions: [0],
    onChange: value => setMin((value as number)),
    isInvalid: minError
  }, {
    type: 'select',
    label: 'Max',
    value: max,
    options: options,
    disabledOptions: [0],
    onChange: value => setMax((value as number)),
    isInvalid: maxError
  }];
  return <Box w={320}>
            <Text>Please select a range</Text>
            <RmgFields fields={fields} />

            <Text>Your range: {min && max && !minError && !maxError ? \`from \${min} to \${max}\` : 'invalid'}</Text>
        </Box>;
}`,...(y=(C=h.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const me=["Basic","TwoWayControlledSelects"];export{f as Basic,h as TwoWayControlledSelects,me as __namedExportsOrder,ce as default};
//# sourceMappingURL=rmg-fields.stories-d5eb86a7.js.map
