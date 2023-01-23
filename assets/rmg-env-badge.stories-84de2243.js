var p=Object.defineProperty;var t=(n,r)=>p(n,"name",{value:r,configurable:!0});import{R as e}from"./rmg-env-badge-701a18a2.js";import{r as m,R as i}from"./index-f996fca0.js";import{u as a}from"./useUpdatingGetter-cdff84f2.js";import{a as v,j as o}from"./jsx-runtime-ad6454d2.js";import{B as g}from"./chunk-6CSUKJP7-66e6822f.js";import"./index-2a7246bb.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-KVBLLJMP-d3bccfe1.js";import"./index-44f5ac58.js";import"./index-e3d200d5.js";import"./index-4ad6bebe.js";import"./index-7822c6a4.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./index-348bd907.js";import"./chunk-DUEJD2BE-32a975b0.js";import"./chunk-DKFDJSXF-f7053077.js";import"./chunk-FQXH56BT-95cac044.js";const s=t(n=>a(m.ready(),n),"useReadyConfig"),Y={parameters:{storySource:{source:`import { RmgEnvBadge } from './rmg-env-badge';
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:33},startBody:{col:21,line:11},endBody:{col:1,line:33}}}}},title:"RmgEnvBadge",component:e},h=t(()=>{const n=s(m.getEnv),r=s(m.getAppVersion);return v(g,{children:[o(e,{environment:i.DEV,version:"0.1.0",popoverHeader:"You're on DEV environment!",popoverBody:"Please visit PRD environment!"}),o(e,{environment:i.UAT,version:"0.1.0",popoverHeader:"You're on UAT environment!",popoverBody:"Please visit PRD environment!"}),o(e,{environment:i.PRD,version:"0.1.0"}),o(e,{environment:n,version:r})]})},"Basic"),j=["Basic"];export{h as Basic,j as __namedExportsOrder,Y as default};
//# sourceMappingURL=rmg-env-badge.stories-84de2243.js.map
