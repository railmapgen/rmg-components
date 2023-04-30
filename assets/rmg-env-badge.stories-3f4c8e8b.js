import{j as e}from"./jsx-runtime-94f6e698.js";import{R as o}from"./rmg-env-badge-f90a3ce0.js";import{r as i,R as t}from"./index-f87d6104.js";import{u as g}from"./useUpdatingGetter-696ece07.js";import{B as d}from"./chunk-6CSUKJP7-aa140969.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-KVBLLJMP-317bfedd.js";import"./index-b1d0288f.js";import"./index-eaa72e81.js";import"./index-a91c9d3c.js";import"./index-bf97d06a.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./index-f800231c.js";import"./motion-03f83e4d.js";import"./chunk-DUEJD2BE-40e6879b.js";import"./chunk-DKFDJSXF-50906ab2.js";import"./chunk-FQXH56BT-8ffb01c6.js";import"./getPrototypeOf-624f05c9.js";const m=r=>g(i.ready(),r),h={title:"RmgEnvBadge",component:o},n=()=>{const r=m(i.getEnv),a=m(i.getAppVersion);return e.jsxs(d,{children:[e.jsx(o,{environment:t.DEV,version:"0.1.0",popoverHeader:"You're on DEV environment!",popoverBody:"Please visit PRD environment!"}),e.jsx(o,{environment:t.UAT,version:"0.1.0",popoverHeader:"You're on UAT environment!",popoverBody:"Please visit PRD environment!"}),e.jsx(o,{environment:t.PRD,version:"0.1.0"}),e.jsx(o,{environment:r,version:a})]})};var s,p,v;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const environment = useReadyConfig(rmgRuntime.getEnv);
  const appVersion = useReadyConfig(rmgRuntime.getAppVersion);
  return <Box>
            <RmgEnvBadge environment={RmgEnv.DEV} version="0.1.0" popoverHeader="You're on DEV environment!" popoverBody="Please visit PRD environment!" />
            <RmgEnvBadge environment={RmgEnv.UAT} version="0.1.0" popoverHeader="You're on UAT environment!" popoverBody="Please visit PRD environment!" />
            <RmgEnvBadge environment={RmgEnv.PRD} version="0.1.0" />
            <RmgEnvBadge environment={environment} version={appVersion} />
        </Box>;
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const G=["Basic"];export{n as Basic,G as __namedExportsOrder,h as default};
//# sourceMappingURL=rmg-env-badge.stories-3f4c8e8b.js.map
