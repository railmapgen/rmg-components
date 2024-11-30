import{j as t}from"./jsx-runtime-D_3pcrNB.js";import{r as o}from"./index-YTOF1_EJ.js";import{R as a}from"./rmg-loader-BowiZDPu.js";import{R as p}from"./rmg-layout-BYFF9FrQ.js";import"./use-style-config-CZvBo0tQ.js";import"./flex-DQjtzar9.js";import"./emotion-react.browser.esm-CQsZap0v.js";import"./define-styles-BSAHv3yx.js";const E={title:"RmgLoader",component:a},e=()=>t.jsx(p,{w:400,h:300,border:"1px",children:t.jsx(a,{isIndeterminate:!0})}),r=()=>{const[l,g]=o.useState(0);return o.useEffect(()=>{const R=setInterval(()=>{g(n=>n===100?0:n+20)},2e3);return()=>clearInterval(R)},[]),t.jsx(p,{w:400,h:300,border:"1px",children:t.jsx(a,{value:l})})};var s,m,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <RmgPage w={400} h={300} border="1px">
            <RmgLoader isIndeterminate={true} />
        </RmgPage>;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const P=["RmgLoaderIndeterminate","RmgLoaderDeterminate"];export{r as RmgLoaderDeterminate,e as RmgLoaderIndeterminate,P as __namedExportsOrder,E as default};
