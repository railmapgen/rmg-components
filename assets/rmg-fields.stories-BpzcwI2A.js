import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as V}from"./rmg-fields-bFf9bsLf.js";import{r as t}from"./index-YTOF1_EJ.js";import"./index-cHAvcxUb.js";import{R as E}from"./rmg-button-group-CbXfNEP-.js";import{F as N}from"./flex-DQjtzar9.js";import{B as S}from"./box-BemYKwwm.js";import{T as n}from"./text-BVacSSXG.js";import{B as P}from"./button-X5yNzHuh.js";import{A,a as $}from"./ArrowForward-MoOK21Yi.js";import{R as _}from"./rmg-multi-line-string-CvCnlQ3N.js";import"./rmg-label-Bk9uVUBb.js";import"./use-style-config-CZvBo0tQ.js";import"./use-form-control-0_APRVQN.js";import"./context-CXQEnuw_.js";import"./theming-props-BSFQkWYI.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./icon-BjAU1tzt.js";import"./rmg-debounced-input-DJS3FF3x.js";import"./input-0Wh662oD.js";import"./rmg-select-0uU4Rk9l.js";import"./rmg-throttled-slider-x-vnJFim.js";import"./index-Div-JSaP.js";import"./icon-button-Ba8Z97Xm.js";import"./use-callback-ref-DWfjZ6Ol.js";import"./use-controllable-state-n041KlKk.js";import"./use-update-effect-BBuVyHsC.js";import"./owner-Gy7R3qQx.js";import"./is-element-C52yPwBl.js";import"./use-checkbox-CczcoHae.js";import"./use-safe-layout-effect-CW26zb7A.js";import"./emotion-react.browser.esm-CQsZap0v.js";import"./define-styles-BSAHv3yx.js";import"./create-icon-VbnoivrD.js";const je={title:"RmgFields",component:V},x=()=>{const[l,m]=t.useState(""),[a,f]=t.useState(""),[s,r]=t.useState(""),[o,u]=t.useState("en"),[c,h]=t.useState(5),[i,b]=t.useState(5),[d,v]=t.useState(""),[w,y]=t.useState(!1),[T,C]=t.useState("black"),[k,O]=t.useState("red"),[j,B]=t.useState("right"),L=[{type:"input",label:"Debounced input field",placeholder:"Enter text",value:l,onChange:m},{type:"input",label:"Debounced number field",placeholder:"Enter number",value:l,validator:p=>!isNaN(Number(p)),onChange:f},{type:"select",label:"Select field",options:{"":"Please select...",opt1:"Option 1",opt2:"Option 2"},disabledOptions:[""],value:s,onChange:r},{type:"select",label:"Select field with optgroup",options:{"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}},value:o,onChange:u},{type:"slider",label:"Integer slider field",value:c,min:0,max:10,onChange:h},{type:"slider",label:"Slider field",value:i,min:0,max:10,step:.1,onChange:b,leftIcon:e.jsx(A,{}),rightIcon:e.jsx($,{})},{type:"textarea",label:"Multiline field",placeholder:"Please enter multiline text...",value:d,onChange:v,minW:"full"},{type:"switch",label:"Switch field",isChecked:w,onChange:y,oneLine:!0,minW:"full"},{type:"switch",label:"Disabled switch field",isChecked:!1,isDisabled:!0,oneLine:!0,minW:"full"},{type:"custom",label:"Foreground colour",component:e.jsx(E,{selections:[{value:"black",label:"Black"},{value:"white",label:"White"}],defaultValue:T,onChange:p=>C(p)})},{type:"custom",label:"Direction",component:e.jsx(E,{selections:[{value:"left",label:"Left"},{value:"right",label:"Right"}],defaultValue:j,onChange:p=>B(p)}),oneLine:!0},{type:"output",label:"Output field",value:"Some static value"},{type:"output",label:"Long output field",value:"Some very long static value which overflows",noWrap:!0},{type:"output",label:"Wrapped output field",value:"Some very very long static value with pretty word wrap"}],G=()=>{m(""),f(""),r(""),u("en"),h(5),b(5),v(""),y(!1),C("black"),O("red"),B("right")};return e.jsxs(N,{children:[e.jsx(S,{w:320,children:e.jsx(V,{fields:L,minW:100})}),e.jsxs(S,{children:[e.jsxs(n,{children:["Debounced input field: ",l]}),e.jsxs(n,{children:["Debounced number field: ",a]}),e.jsxs(n,{children:["Select field: ",s]}),e.jsxs(n,{children:["Select with group field: ",o]}),e.jsxs(n,{children:["Integer slider field: ",c]}),e.jsxs(n,{children:["Slider field: ",i]}),e.jsxs(n,{children:["Debounced multiline field: ",e.jsx(_,{text:d,delimiter:`
`})]}),e.jsxs(n,{children:["Switch field: ",w.toString()]}),e.jsx(n,{children:"Disabled switch field: false"}),e.jsxs(n,{children:["Button group field: ",T]}),e.jsxs(n,{children:["Button group field: ",k]}),e.jsxs(n,{children:["Button group field: ",j]}),e.jsx(P,{onClick:()=>G(),children:"Reset all"})]})]})},g=()=>{const[l,m]=t.useState(0),[a,f]=t.useState(0),[s,r]=t.useState(!1),[o,u]=t.useState(!1);t.useEffect(()=>{r(!1),l&&a&&l>a&&u(!0)},[l]),t.useEffect(()=>{u(!1),l&&a&&l>a&&r(!0)},[a]);const c=Array(10).fill(0).reduce((i,b,d)=>({...i,[d+1]:(d+1).toString()}),{0:"Please select..."}),h=[{type:"select",label:"Min",value:l,options:c,disabledOptions:[0],onChange:i=>m(i),isInvalid:s},{type:"select",label:"Max",value:a,options:c,disabledOptions:[0],onChange:i=>f(i),isInvalid:o}];return e.jsxs(S,{w:320,children:[e.jsx(n,{children:"Please select a range"}),e.jsx(V,{fields:h}),e.jsxs(n,{children:["Your range: ",l&&a&&!s&&!o?`from ${l} to ${a}`:"invalid"]})]})};var I,M,W;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
    onChange: value => setMin(value as number),
    isInvalid: minError
  }, {
    type: 'select',
    label: 'Max',
    value: max,
    options: options,
    disabledOptions: [0],
    onChange: value => setMax(value as number),
    isInvalid: maxError
  }];
  return <Box w={320}>
            <Text>Please select a range</Text>
            <RmgFields fields={fields} />

            <Text>Your range: {min && max && !minError && !maxError ? \`from \${min} to \${max}\` : 'invalid'}</Text>
        </Box>;
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Be=["Basic","TwoWayControlledSelects"];export{x as Basic,g as TwoWayControlledSelects,Be as __namedExportsOrder,je as default};