import{a as n,j as a}from"./jsx-runtime-670450c2.js";import{R as g}from"./rmg-fields-4fcabc2b.js";import{r as e}from"./index-f1f749bf.js";import"./index-8682b39e.js";import{A as R,a as F}from"./chunk-PK3U2DQU-be8f6b0c.js";import{F as O}from"./chunk-MPFPK3CX-501e08a9.js";import{B as V}from"./chunk-6CSUKJP7-9c438e99.js";import{T as i}from"./chunk-P74GIWPW-98bbe6ad.js";import{R as N}from"./rmg-multi-line-string-84b52852.js";import{B as W}from"./chunk-NAA7TEES-fcf38781.js";import"./rmg-label-c244f4e0.js";import"./chunk-JSSKUSQH-f6df1457.js";import"./index-6d9c108a.js";import"./index-ff36e217.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./rmg-debounced-input-b1648484.js";import"./chunk-QJA5SDDN-549d352f.js";import"./rmg-select-cef7a22e.js";import"./rmg-throttled-slider-103018f9.js";import"./index-0a1c2762.js";import"./index-20979b68.js";import"./getPrototypeOf-624f05c9.js";import"./chunk-3HSDMH4Y-64a8ce19.js";import"./chunk-3NTD6TBK-b04e9b6d.js";import"./index-2802deeb.js";import"./chunk-QODHG6BI-63c5c2a0.js";import"./chunk-DKFDJSXF-c0600d2a.js";import"./emotion-react.browser.esm-a44b8d61.js";const pe={title:"RmgFields",component:g},x=()=>{const[t,p]=e.useState(""),[l,f]=e.useState(""),[r,o]=e.useState(""),[u,d]=e.useState(5),[c,S]=e.useState(5),[s,b]=e.useState(""),[m,w]=e.useState(!1),M=[{type:"input",label:"Debounced input field",placeholder:"Enter text",value:t,onChange:p},{type:"input",label:"Debounced number field",placeholder:"Enter number",value:t,validator:D=>!isNaN(Number(D)),onChange:f},{type:"select",label:"Select field",options:{"":"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:[""],value:r,onChange:o},{type:"slider",label:"Integer slider field",value:u,min:0,max:10,onChange:d},{type:"slider",label:"Slider field",value:c,min:0,max:10,step:.1,onChange:S,leftIcon:a(R,{}),rightIcon:a(F,{})},{type:"textarea",label:"Multiline field",placeholder:"Please enter multiline text...",value:s,onChange:b,minW:"full"},{type:"switch",label:"Switch field",isChecked:m,onChange:w,oneLine:!0,minW:"full"},{type:"switch",label:"Disabled switch field",isChecked:!1,isDisabled:!0,oneLine:!0,minW:"full"}],B=()=>{p(""),f(""),o(""),d(5),S(5),b(""),w(!1)};return n(O,{children:[a(V,{w:320,children:a(g,{fields:M,minW:100})}),n(V,{children:[n(i,{children:["Debounced input field: ",t]}),n(i,{children:["Debounced number field: ",l]}),n(i,{children:["Select field: ",r]}),n(i,{children:["Integer slider field: ",u]}),n(i,{children:["Slider field: ",c]}),n(i,{children:["Debounced multiline field: ",a(N,{text:s,delimiter:`
`})]}),n(i,{children:["Switch field: ",m.toString()]}),a(i,{children:"Disabled switch field: false"}),a(W,{onClick:()=>B(),children:"Reset all"})]})]})},h=()=>{const[t,p]=e.useState(0),[l,f]=e.useState(0),[r,o]=e.useState(!1),[u,d]=e.useState(!1);e.useEffect(()=>{o(!1),t&&l&&t>l&&d(!0)},[t]),e.useEffect(()=>{d(!1),t&&l&&t>l&&o(!0)},[l]);const c=Array(10).fill(0).reduce((s,b,m)=>({...s,[m+1]:(m+1).toString()}),{0:"Please select..."});return n(V,{w:320,children:[a(i,{children:"Please select a range"}),a(g,{fields:[{type:"select",label:"Min",value:t,options:c,disabledOptions:[0],onChange:s=>p(s),isInvalid:r},{type:"select",label:"Max",value:l,options:c,disabledOptions:[0],onChange:s=>f(s),isInvalid:u}]}),n(i,{children:["Your range: ",t&&l&&!r&&!u?`from ${t} to ${l}`:"invalid"]})]})};var v,T,C;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(C=(T=x.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,y,I;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(I=(y=h.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const fe=["Basic","TwoWayControlledSelects"];export{x as Basic,h as TwoWayControlledSelects,fe as __namedExportsOrder,pe as default};
//# sourceMappingURL=rmg-fields.stories-38c588c0.js.map
