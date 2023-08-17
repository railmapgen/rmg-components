import{j as e}from"./jsx-runtime-4ca860c5.js";import{R as o}from"./rmg-env-badge-853d42b3.js";import{r as i,R as t}from"./index-a7f40554.js";import{u as g}from"./useUpdatingGetter-3f9276bd.js";import{B as d}from"./chunk-PULVB27S-dfb23afe.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-24I2HV4N-d252c289.js";import"./index-dcfef637.js";import"./index-eaa72e81.js";import"./index-e73c685f.js";import"./index-c23131f5.js";import"./chunk-ZJJGQIVY-35f6fb8e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./index-6830816b.js";import"./motion-2f764dbc.js";import"./chunk-37N6GCLA-a7cec6af.js";import"./chunk-2GBDXOMA-4314ad61.js";import"./chunk-Z6RXEUPO-3e919507.js";const m=r=>g(i.ready(),r),_={title:"RmgEnvBadge",component:o},n=()=>{const r=m(i.getEnv),a=m(i.getAppVersion);return e.jsxs(d,{children:[e.jsx(o,{environment:t.DEV,version:"0.1.0",popoverHeader:"You're on DEV environment!",popoverBody:"Please visit PRD environment!"}),e.jsx(o,{environment:t.UAT,version:"0.1.0",popoverHeader:"You're on UAT environment!",popoverBody:"Please visit PRD environment!"}),e.jsx(o,{environment:t.PRD,version:"0.1.0"}),e.jsx(o,{environment:r,version:a})]})};var s,p,v;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const environment = useReadyConfig(rmgRuntime.getEnv);
  const appVersion = useReadyConfig(rmgRuntime.getAppVersion);
  return <Box>
            <RmgEnvBadge environment={RmgEnv.DEV} version="0.1.0" popoverHeader="You're on DEV environment!" popoverBody="Please visit PRD environment!" />
            <RmgEnvBadge environment={RmgEnv.UAT} version="0.1.0" popoverHeader="You're on UAT environment!" popoverBody="Please visit PRD environment!" />
            <RmgEnvBadge environment={RmgEnv.PRD} version="0.1.0" />
            <RmgEnvBadge environment={environment} version={appVersion} />
        </Box>;
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const h=["Basic"];export{n as Basic,h as __namedExportsOrder,_ as default};
//# sourceMappingURL=rmg-env-badge.stories-88442dda.js.map
