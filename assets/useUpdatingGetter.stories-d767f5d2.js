import{j as s}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{u as o}from"./useUpdatingGetter-696ece07.js";import"./_commonjsHelpers-042e6b4d.js";const T={title:"useUpdatingGetter",component:o},c=e=>new Promise(r=>{setTimeout(r,e)}),t=()=>{const e=m.useRef([]),r=o(c(5e3),()=>new Date().toISOString());return e.current=e.current.concat(r),s.jsx("div",{children:s.jsxs("div",{children:["Timestamp renders: ",e.current.join(",")]})})};var n,i,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const renderedTimestamps = useRef<string[]>([]);
  const timestamp = useUpdatingGetter(wait(5000), () => new Date().toISOString());
  renderedTimestamps.current = renderedTimestamps.current.concat(timestamp);
  return <div>
            <div>Timestamp renders: {renderedTimestamps.current.join(',')}</div>
        </div>;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const x=["Basic"];export{t as Basic,x as __namedExportsOrder,T as default};
//# sourceMappingURL=useUpdatingGetter.stories-d767f5d2.js.map
