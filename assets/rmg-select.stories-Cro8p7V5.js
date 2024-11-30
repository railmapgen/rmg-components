import{j as e}from"./jsx-runtime-D_3pcrNB.js";import{R as o}from"./rmg-select-0uU4Rk9l.js";import{r as l}from"./index-YTOF1_EJ.js";import{B as g}from"./box-BemYKwwm.js";import{T as p}from"./text-BVacSSXG.js";import{B as f}from"./button-X5yNzHuh.js";import"./use-style-config-CZvBo0tQ.js";import"./theming-props-BSFQkWYI.js";import"./use-form-control-0_APRVQN.js";import"./context-CXQEnuw_.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./emotion-react.browser.esm-CQsZap0v.js";import"./define-styles-BSAHv3yx.js";const Y={title:"RmgSelect",component:o},n=()=>{const[s,i]=l.useState("undefined"),[r,a]=l.useState("en"),m={undefined:"Please select...",opt1:"Option 1",opt2:"Option 2"},h={"Main languages":{en:"English",zh:"Chinese"},"Other languages":{ja:"Japanese"}};return e.jsxs(g,{children:[e.jsx(o,{defaultValue:s,options:m,disabledOptions:["undefined"],onChange:({target:{value:t}})=>i(t)}),e.jsxs(p,{children:["Your selection: ",s]}),e.jsx(o,{defaultValue:r,options:h,disabledOptions:["zh"],onChange:({target:{value:t}})=>a(t)}),e.jsxs(p,{children:["Your selection: ",r]}),e.jsx(f,{onClick:()=>{i("undefined"),a("en")},children:"Reset"})]})};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _=["Basic"];export{n as Basic,_ as __namedExportsOrder,Y as default};
