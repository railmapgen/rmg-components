import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{R as o}from"./rmg-select-Bs6VYFx8.js";import{r as l}from"./index-l2PZgWEW.js";import{B as g}from"./box-BzyDp4Vq.js";import{T as p}from"./text-CJHeydjz.js";import{B as f}from"./button-NxOcYH6u.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./theming-props-0pEswy1w.js";import"./use-form-control-BPHXiTF4.js";import"./context-cwyNcBuw.js";import"./use-merge-refs-D5j2VCPL.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./emotion-react.browser.esm-RUFYoBmu.js";import"./define-styles-BSAHv3yx.js";const _={title:"RmgSelect",component:o},t=()=>{const[s,i]=l.useState("undefined"),[r,a]=l.useState("en"),m={undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"},h={"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}};return e.jsxs(g,{children:[e.jsx(o,{defaultValue:s,options:m,disabledOptions:["undefined"],onChange:({target:{value:n}})=>i(n)}),e.jsxs(p,{children:["Your selection: ",s]}),e.jsx(o,{defaultValue:r,options:h,disabledOptions:["zh"],onChange:({target:{value:n}})=>a(n)}),e.jsxs(p,{children:["Your selection: ",r]}),e.jsx(f,{onClick:()=>{i("undefined"),a("en")},children:"Reset"})]})};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const k=["Basic"];export{t as Basic,k as __namedExportsOrder,_ as default};
