import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as n}from"./rmg-env-badge-_0CDRrZH.js";import{r as i,R as t}from"./index--xwJswh5.js";import{u as g}from"./useUpdatingGetter-XnWH89bq.js";import{B as d}from"./chunk-PULVB27S-T0wR8Lw9.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./chunk-24I2HV4N--9u-gXk1.js";import"./index-eGeiRRs6.js";import"./index-6Tfs0cS0.js";import"./index-ohh_DJAR.js";import"./index-IGsecODW.js";import"./chunk-ZJJGQIVY-x0BkbaAD.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-818H0KCj.js";import"./motion-wzXf7Hoo.js";import"./chunk-RLMGYZLY-1PaQ2Kew.js";import"./chunk-37N6GCLA-jWBudFek.js";import"./chunk-2GBDXOMA-jh7I9nJM.js";import"./chunk-Z6RXEUPO-Qj3izexI.js";const m=r=>g(i.ready(),r),h={title:"RmgEnvBadge",component:n},o=()=>{const r=m(i.getEnv),a=m(i.getAppVersion);return e.jsxs(d,{children:[e.jsx(n,{environment:t.DEV,version:"0.1.0",popoverHeader:"You're on DEV environment!",popoverBody:"Please visit PRD environment!"}),e.jsx(n,{environment:t.UAT,version:"0.1.0",popoverHeader:"You're on UAT environment!",popoverBody:"Please visit PRD environment!"}),e.jsx(n,{environment:t.PRD,version:"0.1.0"}),e.jsx(n,{environment:r,version:a})]})};var s,p,v;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const environment = useReadyConfig(rmgRuntime.getEnv);
  const appVersion = useReadyConfig(rmgRuntime.getAppVersion);
  return <Box>
            <RmgEnvBadge environment={RmgEnv.DEV} version="0.1.0" popoverHeader="You're on DEV environment!" popoverBody="Please visit PRD environment!" />
            <RmgEnvBadge environment={RmgEnv.UAT} version="0.1.0" popoverHeader="You're on UAT environment!" popoverBody="Please visit PRD environment!" />
            <RmgEnvBadge environment={RmgEnv.PRD} version="0.1.0" />
            <RmgEnvBadge environment={environment} version={appVersion} />
        </Box>;
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const G=["Basic"];export{o as Basic,G as __namedExportsOrder,h as default};
