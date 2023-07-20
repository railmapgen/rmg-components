import{j as e}from"./jsx-runtime-94f6e698.js";import{R as g}from"./rmg-fields-f5f85adc.js";import{r as t}from"./index-8db94870.js";import"./index-b79bff57.js";import{A as B,a as D}from"./chunk-PK3U2DQU-4337c45e.js";import{F}from"./chunk-MPFPK3CX-f34fe2a1.js";import{B as V}from"./chunk-6CSUKJP7-6f35fd63.js";import{T as l}from"./chunk-P74GIWPW-ec21aa29.js";import{R as O}from"./rmg-multi-line-string-81fb9bb8.js";import{B as N}from"./chunk-NAA7TEES-9f41ecf3.js";import"./rmg-label-30304b46.js";import"./chunk-IJBC3YLI-5e030575.js";import"./index-f800231c.js";import"./index-bf97d06a.js";import"./chunk-QEVFQ4EU-3b04e59c.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./rmg-debounced-input-5e3e96cc.js";import"./chunk-QJA5SDDN-a1422c7f.js";import"./rmg-select-d31abc92.js";import"./rmg-throttled-slider-041ff164.js";import"./index-b1d0288f.js";import"./index-59be8a2a.js";import"./getPrototypeOf-624f05c9.js";import"./chunk-3HSDMH4Y-f8388221.js";import"./chunk-HPA3SDH4-e0036574.js";import"./index-a91c9d3c.js";import"./chunk-QODHG6BI-d658ec75.js";import"./chunk-DKFDJSXF-c2d13a22.js";import"./emotion-react.browser.esm-b050abe7.js";const me={title:"RmgFields",component:g},f=()=>{const[n,p]=t.useState(""),[a,m]=t.useState(""),[i,r]=t.useState(""),[o,u]=t.useState("en"),[c,x]=t.useState(5),[s,S]=t.useState(5),[d,b]=t.useState(""),[w,v]=t.useState(!1),M=[{type:"input",label:"Debounced input field",placeholder:"Enter text",value:n,onChange:p},{type:"input",label:"Debounced number field",placeholder:"Enter number",value:n,validator:R=>!isNaN(Number(R)),onChange:m},{type:"select",label:"Select field",options:{"":"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:[""],value:i,onChange:r},{type:"select",label:"Select field with optgroup",options:{"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}},value:o,onChange:u},{type:"slider",label:"Integer slider field",value:c,min:0,max:10,onChange:x},{type:"slider",label:"Slider field",value:s,min:0,max:10,step:.1,onChange:S,leftIcon:e.jsx(B,{}),rightIcon:e.jsx(D,{})},{type:"textarea",label:"Multiline field",placeholder:"Please enter multiline text...",value:d,onChange:b,minW:"full"},{type:"switch",label:"Switch field",isChecked:w,onChange:v,oneLine:!0,minW:"full"},{type:"switch",label:"Disabled switch field",isChecked:!1,isDisabled:!0,oneLine:!0,minW:"full"}],W=()=>{p(""),m(""),r(""),u("en"),x(5),S(5),b(""),v(!1)};return e.jsxs(F,{children:[e.jsx(V,{w:320,children:e.jsx(g,{fields:M,minW:100})}),e.jsxs(V,{children:[e.jsxs(l,{children:["Debounced input field: ",n]}),e.jsxs(l,{children:["Debounced number field: ",a]}),e.jsxs(l,{children:["Select field: ",i]}),e.jsxs(l,{children:["Select with group field: ",o]}),e.jsxs(l,{children:["Integer slider field: ",c]}),e.jsxs(l,{children:["Slider field: ",s]}),e.jsxs(l,{children:["Debounced multiline field: ",e.jsx(O,{text:d,delimiter:`
`})]}),e.jsxs(l,{children:["Switch field: ",w.toString()]}),e.jsx(l,{children:"Disabled switch field: false"}),e.jsx(N,{onClick:()=>W(),children:"Reset all"})]})]})},h=()=>{const[n,p]=t.useState(0),[a,m]=t.useState(0),[i,r]=t.useState(!1),[o,u]=t.useState(!1);t.useEffect(()=>{r(!1),n&&a&&n>a&&u(!0)},[n]),t.useEffect(()=>{u(!1),n&&a&&n>a&&r(!0)},[a]);const c=Array(10).fill(0).reduce((s,S,d)=>({...s,[d+1]:(d+1).toString()}),{0:"Please select..."}),x=[{type:"select",label:"Min",value:n,options:c,disabledOptions:[0],onChange:s=>p(s),isInvalid:i},{type:"select",label:"Max",value:a,options:c,disabledOptions:[0],onChange:s=>m(s),isInvalid:o}];return e.jsxs(V,{w:320,children:[e.jsx(l,{children:"Please select a range"}),e.jsx(g,{fields:x}),e.jsxs(l,{children:["Your range: ",n&&a&&!i&&!o?`from ${n} to ${a}`:"invalid"]})]})};var C,T,E;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectWithGroupValue, setSelectWithGroupValue] = useState('en');
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
    type: 'select',
    label: 'Select field with optgroup',
    options: {
      'Main languages': {
        en: 'English',
        zh: 'Chinese'
      },
      'Other languages': {
        ja: 'Japanese'
      }
    },
    value: selectWithGroupValue,
    onChange: setSelectWithGroupValue
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
    setSelectWithGroupValue('en');
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
                <Text>Select with group field: {selectWithGroupValue}</Text>
                <Text>Integer slider field: {intSliderValue}</Text>
                <Text>Slider field: {sliderValue}</Text>
                <Text>Debounced multiline field: {<RmgMultiLineString text={textareaValue} delimiter={'\\n'} />}</Text>
                <Text>Switch field: {switchValue.toString()}</Text>
                <Text>Disabled switch field: false</Text>

                <Button onClick={() => handleReset()}>Reset all</Button>
            </Box>
        </Flex>;
}`,...(E=(T=f.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var y,j,I;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(I=(j=h.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const xe=["Basic","TwoWayControlledSelects"];export{f as Basic,h as TwoWayControlledSelects,xe as __namedExportsOrder,me as default};
//# sourceMappingURL=rmg-fields.stories-6df087ab.js.map
