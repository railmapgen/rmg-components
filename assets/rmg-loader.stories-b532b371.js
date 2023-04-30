import{j as t}from"./jsx-runtime-670450c2.js";import{r as o}from"./index-f1f749bf.js";import{R as a}from"./rmg-loader-737b9e85.js";import{b as p}from"./rmg-layout-29a76a2e.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-QEVFQ4EU-efd3d6a4.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./emotion-react.browser.esm-a44b8d61.js";import"./chunk-MPFPK3CX-501e08a9.js";const E={title:"RmgLoader",component:a},e=()=>t(p,{w:400,h:300,border:"1px",children:t(a,{isIndeterminate:!0})}),r=()=>{const[l,g]=o.useState(0);return o.useEffect(()=>{const R=setInterval(()=>{g(n=>n===100?0:n+20)},2e3);return()=>clearInterval(R)},[]),t(p,{w:400,h:300,border:"1px",children:t(a,{value:l})})};var s,m,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const V=["RmgLoaderIndeterminate","RmgLoaderDeterminate"];export{r as RmgLoaderDeterminate,e as RmgLoaderIndeterminate,V as __namedExportsOrder,E as default};
//# sourceMappingURL=rmg-loader.stories-b532b371.js.map
