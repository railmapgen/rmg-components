import{j as o,a as m}from"./jsx-runtime-670450c2.js";import{r as c}from"./index-f1f749bf.js";import{u as a}from"./useUpdatingGetter-c44682b0.js";import"./_commonjsHelpers-042e6b4d.js";const f={title:"useUpdatingGetter",component:a},d=e=>new Promise(r=>{setTimeout(r,e)}),t=()=>{const e=c.useRef([]),r=a(d(5e3),()=>new Date().toISOString());return e.current=e.current.concat(r),o("div",{children:m("div",{children:["Timestamp renders: ",e.current.join(",")]})})};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const renderedTimestamps = useRef<string[]>([]);
  const timestamp = useUpdatingGetter(wait(5000), () => new Date().toISOString());
  renderedTimestamps.current = renderedTimestamps.current.concat(timestamp);
  return <div>
            <div>Timestamp renders: {renderedTimestamps.current.join(',')}</div>
        </div>;
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const v=["Basic"];export{t as Basic,v as __namedExportsOrder,f as default};
//# sourceMappingURL=useUpdatingGetter.stories-844f0863.js.map
