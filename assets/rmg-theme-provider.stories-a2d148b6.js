import{j as p}from"./jsx-runtime-4ca860c5.js";import{u as x,R}from"./rmg-theme-provider-0284c843.js";import{r as h}from"./index-61bf1805.js";import{r as C}from"./index-a7f40554.js";import{b}from"./chunk-ZJJGQIVY-35f6fb8e.js";import{R as y}from"./rmg-button-group-96c2c411.js";import"./emotion-react.browser.esm-3572b68e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./chunk-34PD6CUK-12d89d2c.js";import"./index-6830816b.js";import"./index-e73c685f.js";import"./index-2801d3c9.js";import"./_commonjsHelpers-de833af9.js";import"./index-dcfef637.js";import"./motion-2f764dbc.js";import"./chunk-QURMB2UJ-818960f1.js";import"./chunk-3KCBMPN5-085b4368.js";import"./chunk-2GBDXOMA-4314ad61.js";import"./chunk-UVUR7MCU-7fc2c9bf.js";import"./index-c23131f5.js";import"./chunk-37N6GCLA-a7cec6af.js";function L(t,o={}){const{ssr:m=!0,fallback:a}=o,{getWindow:s}=x(),l=Array.isArray(t)?t:[t];let u=Array.isArray(a)?a:[a];u=u.filter(r=>r!=null);const[E,f]=h.useState(()=>l.map((r,n)=>({media:r,matches:m?!!u[n]:s().matchMedia(r).matches})));return h.useEffect(()=>{const r=s();f(l.map(e=>({media:e,matches:r.matchMedia(e).matches})));const n=l.map(e=>r.matchMedia(e)),i=e=>{f(k=>k.slice().map(d=>d.media===e.media?{...d,matches:e.matches}:d))};return n.forEach(e=>{typeof e.addListener=="function"?e.addListener(i):e.addEventListener("change",i)}),()=>{n.forEach(e=>{typeof e.removeListener=="function"?e.removeListener(i):e.removeEventListener("change",i)})}},[s]),E.map(r=>r.matches)}const j=()=>{const{colorMode:t,setColorMode:o}=b(),[m]=L("(prefers-color-scheme: dark)"),a=h.useCallback(s=>{C.setColourMode(s),o(s==="system"?m?"dark":"light":s)},[t,o,m]);return{colourMode:t,setColourMode:a}},Y={title:"RmgThemeProvider",component:R,decorators:[]},P=()=>{const{setColourMode:t}=j(),o=[{label:"System",value:"system"},{label:"Light",value:"light"},{label:"Dark",value:"dark"}];return p.jsx(y,{selections:o,defaultValue:C.getColourMode(),onChange:t})},c=()=>p.jsx(R,{children:p.jsx(P,{})});var g,v,M;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <RmgThemeProvider>
            <Inner />
        </RmgThemeProvider>;
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const Z=["Basic"];export{c as Basic,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=rmg-theme-provider.stories-a2d148b6.js.map