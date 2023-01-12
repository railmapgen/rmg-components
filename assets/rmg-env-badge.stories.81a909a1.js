var v=Object.defineProperty;var t=(o,r)=>v(o,"name",{value:r,configurable:!0});import{R as n}from"./rmg-env-badge.6c27e0d6.js";import{r as m,R as i}from"./index.04f2df3b.js";import{u as s}from"./useReadyConfig.50a0ea4f.js";import{a,j as e}from"./jsx-runtime.def5eff7.js";import{B as p}from"./index.esm.b2b3757c.js";import"./index.esm.417ce9c3.js";import"./index.esm.6ef52bc8.js";import"./iframe.a291c784.js";import"./index.esm.97fc3c9f.js";import"./index.esm.8a3b51cc.js";import"./index.esm.28d0385d.js";import"./index.esm.35044409.js";const V={parameters:{storySource:{source:`import { RmgEnvBadge } from './rmg-env-badge';
import { Box } from '@chakra-ui/react';
import rmgRuntime, { RmgEnv } from '@railmapgen/rmg-runtime';
import { useReadyConfig } from '../hook/useReadyConfig';

export default {
    title: 'RmgEnvBadge',
    component: RmgEnvBadge,
};

export const Basic = () => {
    const environment = useReadyConfig(rmgRuntime.getEnv);
    const appVersion = useReadyConfig(rmgRuntime.getAppVersion);

    return (
        <Box>
            <RmgEnvBadge
                environment={RmgEnv.DEV}
                version="0.1.0"
                popoverHeader="You're on DEV environment!"
                popoverBody="Please visit PRD environment!"
            />
            <RmgEnvBadge
                environment={RmgEnv.UAT}
                version="0.1.0"
                popoverHeader="You're on UAT environment!"
                popoverBody="Please visit PRD environment!"
            />
            <RmgEnvBadge environment={RmgEnv.PRD} version="0.1.0" />
            <RmgEnvBadge environment={environment} version={appVersion} />
        </Box>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:33},startBody:{col:21,line:11},endBody:{col:1,line:33}}}}},title:"RmgEnvBadge",component:n},A=t(()=>{const o=s(m.getEnv),r=s(m.getAppVersion);return a(p,{children:[e(n,{environment:i.DEV,version:"0.1.0",popoverHeader:"You're on DEV environment!",popoverBody:"Please visit PRD environment!"}),e(n,{environment:i.UAT,version:"0.1.0",popoverHeader:"You're on UAT environment!",popoverBody:"Please visit PRD environment!"}),e(n,{environment:i.PRD,version:"0.1.0"}),e(n,{environment:o,version:r})]})},"Basic"),C=["Basic"];export{A as Basic,C as __namedExportsOrder,V as default};
//# sourceMappingURL=rmg-env-badge.stories.81a909a1.js.map
