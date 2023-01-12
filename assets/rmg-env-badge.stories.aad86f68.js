var a=Object.defineProperty;var t=(n,r)=>a(n,"name",{value:r,configurable:!0});import{R as e}from"./rmg-env-badge.3060ec73.js";import{r as m,R as i}from"./index.04f2df3b.js";import{u as v}from"./useUpdatingGetter.b3f940d7.js";import{a as p,j as o}from"./jsx-runtime.4889c434.js";import{B as g}from"./index.esm.381ad692.js";import"./index.esm.c3e89734.js";import"./index.esm.2ed42a8b.js";import"./iframe.394cccab.js";import"./index.esm.9e071a76.js";import"./index.esm.c9350490.js";import"./index.esm.3ded612a.js";import"./index.esm.7adac4ee.js";const s=t(n=>v(m.ready(),n),"useReadyConfig"),A={parameters:{storySource:{source:`import { RmgEnvBadge } from './rmg-env-badge';
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:33},startBody:{col:21,line:11},endBody:{col:1,line:33}}}}},title:"RmgEnvBadge",component:e},C=t(()=>{const n=s(m.getEnv),r=s(m.getAppVersion);return p(g,{children:[o(e,{environment:i.DEV,version:"0.1.0",popoverHeader:"You're on DEV environment!",popoverBody:"Please visit PRD environment!"}),o(e,{environment:i.UAT,version:"0.1.0",popoverHeader:"You're on UAT environment!",popoverBody:"Please visit PRD environment!"}),o(e,{environment:i.PRD,version:"0.1.0"}),o(e,{environment:n,version:r})]})},"Basic"),U=["Basic"];export{C as Basic,U as __namedExportsOrder,A as default};
//# sourceMappingURL=rmg-env-badge.stories.aad86f68.js.map
