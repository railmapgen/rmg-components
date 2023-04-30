import{j as t}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{R as a}from"./rmg-loader-9f33f04d.js";import{b as p}from"./rmg-layout-bf111973.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./emotion-react.browser.esm-92f45e4a.js";import"./chunk-MPFPK3CX-57a2fde7.js";const E={title:"RmgLoader",component:a},e=()=>t.jsx(p,{w:400,h:300,border:"1px",children:t.jsx(a,{isIndeterminate:!0})}),r=()=>{const[l,g]=o.useState(0);return o.useEffect(()=>{const R=setInterval(()=>{g(n=>n===100?0:n+20)},2e3);return()=>clearInterval(R)},[]),t.jsx(p,{w:400,h:300,border:"1px",children:t.jsx(a,{value:l})})};var s,m,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const P=["RmgLoaderIndeterminate","RmgLoaderDeterminate"];export{r as RmgLoaderDeterminate,e as RmgLoaderIndeterminate,P as __namedExportsOrder,E as default};
//# sourceMappingURL=rmg-loader.stories-bef63c93.js.map
