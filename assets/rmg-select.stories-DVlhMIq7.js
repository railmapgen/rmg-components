import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as o}from"./rmg-select-hPAtE0Sd.js";import{r as l}from"./index-CleY8y_P.js";import{B as g}from"./chunk-PULVB27S-BYIORNcw.js";import{T as p}from"./chunk-2OOHT3W5-Dos5Muu_.js";import{B as f}from"./chunk-UVUR7MCU-CDEQ8fQk.js";import"./chunk-ZJJGQIVY-D9s8d0El.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-wuaF3a4J.js";import"./chunk-56K2BSAJ-DdNIyAaK.js";import"./index-DGaxrVvi.js";import"./index-CRSocYPi.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./emotion-react.browser.esm-BoJAA9QB.js";const V={title:"RmgSelect",component:o},n=()=>{const[s,i]=l.useState("undefined"),[r,a]=l.useState("en"),m={undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"},h={"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}};return e.jsxs(g,{children:[e.jsx(o,{defaultValue:s,options:m,disabledOptions:["undefined"],onChange:({target:{value:t}})=>i(t)}),e.jsxs(p,{children:["Your selection: ",s]}),e.jsx(o,{defaultValue:r,options:h,disabledOptions:["zh"],onChange:({target:{value:t}})=>a(t)}),e.jsxs(p,{children:["Your selection: ",r]}),e.jsx(f,{onClick:()=>{i("undefined"),a("en")},children:"Reset"})]})};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [selection, setSelection] = useState('undefined');
  const [selectionWithGroup, setSelectionWithGroup] = useState('en');
  const options = {
    undefined: 'Please select...',
    opt1: 'Option 1',
    opt2: 'Option 2'
  };
  const optionsWithGroup: Record<string, Record<string, string>> = {
    'Main languages': {
      en: 'English',
      zh: 'Chinese'
    },
    'Other languages': {
      ja: 'Japanese'
    }
  };
  return <Box>
            <RmgSelect defaultValue={selection} options={options} disabledOptions={['undefined']} onChange={({
      target: {
        value
      }
    }) => setSelection(value)} />
            <Text>Your selection: {selection}</Text>

            <RmgSelect defaultValue={selectionWithGroup} options={optionsWithGroup} disabledOptions={['zh']} onChange={({
      target: {
        value
      }
    }) => setSelectionWithGroup(value)} />
            <Text>Your selection: {selectionWithGroup}</Text>

            <Button onClick={() => {
      setSelection('undefined');
      setSelectionWithGroup('en');
    }}>
                Reset
            </Button>
        </Box>;
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Y=["Basic"];export{n as Basic,Y as __namedExportsOrder,V as default};
