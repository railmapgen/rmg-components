import{j as d}from"./jsx-runtime-D_3pcrNB.js";import{u as x,R}from"./rmg-theme-provider-B9N4XecG.js";import{r as h}from"./index-YTOF1_EJ.js";import{r as C}from"./index-Div-JSaP.js";import{u as y}from"./use-style-config-CZvBo0tQ.js";import{R as L}from"./rmg-button-group-CbXfNEP-.js";import"./define-styles-BSAHv3yx.js";import"./is-element-C52yPwBl.js";import"./emotion-react.browser.esm-CQsZap0v.js";import"./context-CXQEnuw_.js";import"./portal-Cf0UyORD.js";import"./index-Ck0qM8qm.js";import"./index-B3O5BJN8.js";import"./use-safe-layout-effect-CW26zb7A.js";import"./proxy-sAlfivGQ.js";import"./use-update-effect-BBuVyHsC.js";import"./use-callback-ref-DWfjZ6Ol.js";import"./alert-icon-KpGQ2Gkr.js";import"./theming-props-BSFQkWYI.js";import"./icon-BjAU1tzt.js";import"./button-X5yNzHuh.js";import"./use-merge-refs-CDN4nSPx.js";import"./attr-sHTFgF0E.js";import"./alert-description-S5NLRg4V.js";import"./close-button-BS6xHoDk.js";function b(t,o={}){const{ssr:m=!0,fallback:a}=o,{getWindow:s}=x(),u=Array.isArray(t)?t:[t];let l=Array.isArray(a)?a:[a];l=l.filter(r=>r!=null);const[E,f]=h.useState(()=>u.map((r,i)=>({media:r,matches:m?!!l[i]:s().matchMedia(r).matches})));return h.useEffect(()=>{const r=s();f(u.map(e=>({media:e,matches:r.matchMedia(e).matches})));const i=u.map(e=>r.matchMedia(e)),n=e=>{f(k=>k.slice().map(p=>p.media===e.media?{...p,matches:e.matches}:p))};return i.forEach(e=>{typeof e.addListener=="function"?e.addListener(n):e.addEventListener("change",n)}),()=>{i.forEach(e=>{typeof e.removeListener=="function"?e.removeListener(n):e.removeEventListener("change",n)})}},[s]),E.map(r=>r.matches)}const j=()=>{const{colorMode:t,setColorMode:o}=y(),[m]=b("(prefers-color-scheme: dark)"),a=h.useCallback(s=>{C.setColourMode(s),o(s==="system"?m?"dark":"light":s)},[t,o,m]);return{colourMode:t,setColourMode:a}},ee={title:"RmgThemeProvider",component:R,decorators:[]},P=()=>{const{setColourMode:t}=j(),o=[{label:"System",value:"system"},{label:"Light",value:"light"},{label:"Dark",value:"dark"}];return d.jsx(L,{selections:o,defaultValue:C.getColourMode(),onChange:t})},c=()=>d.jsx(R,{children:d.jsx(P,{})});var g,v,M;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <RmgThemeProvider>
            <Inner />
        </RmgThemeProvider>;
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const re=["Basic"];export{c as Basic,re as __namedExportsOrder,ee as default};