import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as V}from"./rmg-fields-DJi9VdI1.js";import{r as t}from"./index-CleY8y_P.js";import"./index-CvUKq8OT.js";import{A as N,a as P}from"./chunk-XEKRR764-CLV-ET9L.js";import{R as E}from"./rmg-button-group-mwgaYTX2.js";import{F as A}from"./chunk-KRPLQIP4-vbZG9yKz.js";import{B as S}from"./chunk-PULVB27S-BYIORNcw.js";import{T as n}from"./chunk-2OOHT3W5-Dos5Muu_.js";import{R as $}from"./rmg-multi-line-string-DIDQbrxa.js";import{B as _}from"./chunk-UVUR7MCU-CDEQ8fQk.js";import"./rmg-label-DUzWExiz.js";import"./chunk-56K2BSAJ-B591cL4b.js";import"./index-DGaxrVvi.js";import"./index-CRSocYPi.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./chunk-2GBDXOMA-DxAeh1k-.js";import"./rmg-debounced-input-Cs_9QwHL.js";import"./chunk-AZVKQZKI-fWIVeWGF.js";import"./chunk-6CVSDS6C-C7mL7kCZ.js";import"./rmg-select-Vld9rHT5.js";import"./rmg-throttled-slider-zWWYz63w.js";import"./index-Cii9CPQx.js";import"./index-CGZp5OEa.js";import"./chunk-6QYXN73V-wsrn9w9v.js";import"./chunk-7D6N5TE5-De1ADlWO.js";import"./index-BDB9_2GA.js";import"./chunk-DEQZ7DVA-DU0BVntC.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./emotion-react.browser.esm-BoJAA9QB.js";const we={title:"RmgFields",component:V},x=()=>{const[l,m]=t.useState(""),[a,f]=t.useState(""),[s,r]=t.useState(""),[o,u]=t.useState("en"),[c,h]=t.useState(5),[i,b]=t.useState(5),[d,v]=t.useState(""),[w,y]=t.useState(!1),[T,C]=t.useState("black"),[k,O]=t.useState("red"),[j,B]=t.useState("right"),L=[{type:"input",label:"Debounced input field",placeholder:"Enter text",value:l,onChange:m},{type:"input",label:"Debounced number field",placeholder:"Enter number",value:l,validator:p=>!isNaN(Number(p)),onChange:f},{type:"select",label:"Select field",options:{"":"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:[""],value:s,onChange:r},{type:"select",label:"Select field with optgroup",options:{"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}},value:o,onChange:u},{type:"slider",label:"Integer slider field",value:c,min:0,max:10,onChange:h},{type:"slider",label:"Slider field",value:i,min:0,max:10,step:.1,onChange:b,leftIcon:e.jsx(N,{}),rightIcon:e.jsx(P,{})},{type:"textarea",label:"Multiline field",placeholder:"Please enter multiline text...",value:d,onChange:v,minW:"full"},{type:"switch",label:"Switch field",isChecked:w,onChange:y,oneLine:!0,minW:"full"},{type:"switch",label:"Disabled switch field",isChecked:!1,isDisabled:!0,oneLine:!0,minW:"full"},{type:"custom",label:"Foreground colour",component:e.jsx(E,{selections:[{value:"black",label:"Black"},{value:"white",label:"White"}],defaultValue:T,onChange:p=>C(p)})},{type:"custom",label:"Direction",component:e.jsx(E,{selections:[{value:"left",label:"Left"},{value:"right",label:"Right"}],defaultValue:j,onChange:p=>B(p)}),oneLine:!0},{type:"output",label:"Output field",value:"Some static value"},{type:"output",label:"Long output field",value:"Some very long static value which overflows",noWrap:!0},{type:"output",label:"Wrapped output field",value:"Some very very long static value with pretty word wrap"}],G=()=>{m(""),f(""),r(""),u("en"),h(5),b(5),v(""),y(!1),C("black"),O("red"),B("right")};return e.jsxs(A,{children:[e.jsx(S,{w:320,children:e.jsx(V,{fields:L,minW:100})}),e.jsxs(S,{children:[e.jsxs(n,{children:["Debounced input field: ",l]}),e.jsxs(n,{children:["Debounced number field: ",a]}),e.jsxs(n,{children:["Select field: ",s]}),e.jsxs(n,{children:["Select with group field: ",o]}),e.jsxs(n,{children:["Integer slider field: ",c]}),e.jsxs(n,{children:["Slider field: ",i]}),e.jsxs(n,{children:["Debounced multiline field: ",e.jsx($,{text:d,delimiter:`
`})]}),e.jsxs(n,{children:["Switch field: ",w.toString()]}),e.jsx(n,{children:"Disabled switch field: false"}),e.jsxs(n,{children:["Button group field: ",T]}),e.jsxs(n,{children:["Button group field: ",k]}),e.jsxs(n,{children:["Button group field: ",j]}),e.jsx(_,{onClick:()=>G(),children:"Reset all"})]})]})},g=()=>{const[l,m]=t.useState(0),[a,f]=t.useState(0),[s,r]=t.useState(!1),[o,u]=t.useState(!1);t.useEffect(()=>{r(!1),l&&a&&l>a&&u(!0)},[l]),t.useEffect(()=>{u(!1),l&&a&&l>a&&r(!0)},[a]);const c=Array(10).fill(0).reduce((i,b,d)=>({...i,[d+1]:(d+1).toString()}),{0:"Please select..."}),h=[{type:"select",label:"Min",value:l,options:c,disabledOptions:[0],onChange:i=>m(i),isInvalid:s},{type:"select",label:"Max",value:a,options:c,disabledOptions:[0],onChange:i=>f(i),isInvalid:o}];return e.jsxs(S,{w:320,children:[e.jsx(n,{children:"Please select a range"}),e.jsx(V,{fields:h}),e.jsxs(n,{children:["Your range: ",l&&a&&!s&&!o?`from ${l} to ${a}`:"invalid"]})]})};var I,M,W;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectWithGroupValue, setSelectWithGroupValue] = useState('en');
  const [intSliderValue, setIntSliderValue] = useState(5);
  const [sliderValue, setSliderValue] = useState(5);
  const [textareaValue, setTextareaValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [fg, setFg] = useState('black');
  const [bg, setBg] = useState('red');
  const [direction, setDirection] = useState('right');
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
  }, {
    type: 'custom',
    label: 'Foreground colour',
    component: <RmgButtonGroup selections={[{
      value: 'black',
      label: 'Black'
    }, {
      value: 'white',
      label: 'White'
    }]} defaultValue={fg} onChange={value => setFg(value)} />
  }, {
    type: 'custom',
    label: 'Direction',
    component: <RmgButtonGroup selections={[{
      value: 'left',
      label: 'Left'
    }, {
      value: 'right',
      label: 'Right'
    }]} defaultValue={direction} onChange={value => setDirection(value)} />,
    oneLine: true
  }, {
    type: 'output',
    label: 'Output field',
    value: 'Some static value'
  }, {
    type: 'output',
    label: 'Long output field',
    value: 'Some very long static value which overflows',
    noWrap: true
  }, {
    type: 'output',
    label: 'Wrapped output field',
    value: 'Some very very long static value with pretty word wrap'
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
    setFg('black');
    setBg('red');
    setDirection('right');
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
                <Text>Button group field: {fg}</Text>
                <Text>Button group field: {bg}</Text>
                <Text>Button group field: {direction}</Text>

                <Button onClick={() => handleReset()}>Reset all</Button>
            </Box>
        </Flex>;
}`,...(W=(M=x.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var R,D,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const ye=["Basic","TwoWayControlledSelects"];export{x as Basic,g as TwoWayControlledSelects,ye as __namedExportsOrder,we as default};
