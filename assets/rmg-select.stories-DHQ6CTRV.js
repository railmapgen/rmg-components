import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as o}from"./rmg-select-CerKecN2.js";import{r as l}from"./index-l2PZgWEW.js";import{B as g}from"./chunk-PULVB27S-BvTYsj2L.js";import{T as c}from"./chunk-2OOHT3W5-B56XnfBB.js";import{B as f}from"./chunk-UVUR7MCU-ClMFwOOR.js";import"./chunk-ZJJGQIVY-G7EJoKQ9.js";import"./extends-CCbyfPlC.js";import"./chunk-56K2BSAJ-BTjm4QzQ.js";import"./index-C1GouHpy.js";import"./index-D5j2VCPL.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./emotion-react.browser.esm-DJ_JGAiU.js";const z={title:"RmgSelect",component:o},n=()=>{const[s,i]=l.useState("undefined"),[r,a]=l.useState("en"),m={undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"},h={"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}};return e.jsxs(g,{children:[e.jsx(o,{defaultValue:s,options:m,disabledOptions:["undefined"],onChange:({target:{value:t}})=>i(t)}),e.jsxs(c,{children:["Your selection: ",s]}),e.jsx(o,{defaultValue:r,options:h,disabledOptions:["zh"],onChange:({target:{value:t}})=>a(t)}),e.jsxs(c,{children:["Your selection: ",r]}),e.jsx(f,{onClick:()=>{i("undefined"),a("en")},children:"Reset"})]})};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const V=["Basic"];export{n as Basic,V as __namedExportsOrder,z as default};
