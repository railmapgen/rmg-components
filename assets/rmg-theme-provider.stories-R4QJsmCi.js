import{j as p}from"./jsx-runtime-vNq4Oc-g.js";import{u as x,R}from"./rmg-theme-provider---OnEy6D.js";import{r as h}from"./index-4g5l5LRQ.js";import{r as C}from"./index--xwJswh5.js";import{u as y}from"./chunk-ZJJGQIVY-x0BkbaAD.js";import{R as L}from"./rmg-button-group-ZVDugaVm.js";import"./emotion-react.browser.esm-Y08UVQfg.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./chunk-34PD6CUK-3XgrAvau.js";import"./index-818H0KCj.js";import"./index-ohh_DJAR.js";import"./index-jmm5gWkb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./chunk-ITIKTQWJ-KytNL84X.js";import"./index-eGeiRRs6.js";import"./motion-wzXf7Hoo.js";import"./chunk-QURMB2UJ-sETI66GB.js";import"./chunk-3KCBMPN5-No9lCcwg.js";import"./chunk-2GBDXOMA-jh7I9nJM.js";import"./chunk-UVUR7MCU-N-PTybSK.js";import"./index-IGsecODW.js";import"./chunk-37N6GCLA-jWBudFek.js";function b(t,o={}){const{ssr:m=!0,fallback:a}=o,{getWindow:s}=x(),u=Array.isArray(t)?t:[t];let l=Array.isArray(a)?a:[a];l=l.filter(r=>r!=null);const[E,f]=h.useState(()=>u.map((r,n)=>({media:r,matches:m?!!l[n]:s().matchMedia(r).matches})));return h.useEffect(()=>{const r=s();f(u.map(e=>({media:e,matches:r.matchMedia(e).matches})));const n=u.map(e=>r.matchMedia(e)),i=e=>{f(k=>k.slice().map(d=>d.media===e.media?{...d,matches:e.matches}:d))};return n.forEach(e=>{typeof e.addListener=="function"?e.addListener(i):e.addEventListener("change",i)}),()=>{n.forEach(e=>{typeof e.removeListener=="function"?e.removeListener(i):e.removeEventListener("change",i)})}},[s]),E.map(r=>r.matches)}const j=()=>{const{colorMode:t,setColorMode:o}=y(),[m]=b("(prefers-color-scheme: dark)"),a=h.useCallback(s=>{C.setColourMode(s),o(s==="system"?m?"dark":"light":s)},[t,o,m]);return{colourMode:t,setColourMode:a}},Z={title:"RmgThemeProvider",component:R,decorators:[]},P=()=>{const{setColourMode:t}=j(),o=[{label:"System",value:"system"},{label:"Light",value:"light"},{label:"Dark",value:"dark"}];return p.jsx(L,{selections:o,defaultValue:C.getColourMode(),onChange:t})},c=()=>p.jsx(R,{children:p.jsx(P,{})});var g,v,M;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <RmgThemeProvider>
            <Inner />
        </RmgThemeProvider>;
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const $=["Basic"];export{c as Basic,$ as __namedExportsOrder,Z as default};
