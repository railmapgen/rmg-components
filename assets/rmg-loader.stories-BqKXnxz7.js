import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r as o}from"./index-l2PZgWEW.js";import{R as a}from"./rmg-loader-BeoAW4q0.js";import{R as p}from"./rmg-layout-C0JCyIr-.js";import"./use-style-config--FCIfLZ1.js";import"./extends-CCbyfPlC.js";import"./flex-m7aLVNfQ.js";import"./emotion-react.browser.esm-RUFYoBmu.js";import"./define-styles-BSAHv3yx.js";const P={title:"RmgLoader",component:a},e=()=>t.jsx(p,{w:400,h:300,border:"1px",children:t.jsx(a,{isIndeterminate:!0})}),r=()=>{const[l,g]=o.useState(0);return o.useEffect(()=>{const R=setInterval(()=>{g(n=>n===100?0:n+20)},2e3);return()=>clearInterval(R)},[]),t.jsx(p,{w:400,h:300,border:"1px",children:t.jsx(a,{value:l})})};var s,m,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <RmgPage w={400} h={300} border="1px">
            <RmgLoader isIndeterminate={true} />
        </RmgPage>;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,u,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(prevState => {
        if (prevState === 100) {
          return 0;
        } else {
          return prevState + 20;
        }
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return <RmgPage w={400} h={300} border="1px">
            <RmgLoader value={value} />
        </RmgPage>;
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const b=["RmgLoaderIndeterminate","RmgLoaderDeterminate"];export{r as RmgLoaderDeterminate,e as RmgLoaderIndeterminate,b as __namedExportsOrder,P as default};
