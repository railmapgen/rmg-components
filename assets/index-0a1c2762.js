import{r}from"./index-f1f749bf.js";function a(t,n=[]){const e=r.useRef(t);return r.useEffect(()=>{e.current=t}),r.useCallback((...u)=>{var c;return(c=e.current)==null?void 0:c.call(e,...u)},n)}function o(t,n){const e=r.useRef(!1),u=r.useRef(!1);r.useEffect(()=>{if(e.current&&u.current)return t();u.current=!0},n),r.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[])}export{o as a,a as u};
//# sourceMappingURL=index-0a1c2762.js.map
