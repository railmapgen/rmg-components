var a=Object.defineProperty;var s=(r,t)=>a(r,"name",{value:t,configurable:!0});import{R as n}from"./rmg-env-badge.bc621285.js";import{R as e,r as i}from"./index.100218d1.js";import{r as m,a as g,j as o}from"./jsx-runtime.16943203.js";import{B as c}from"./index.esm.d1d0265b.js";import"./index.esm.f7fddd7a.js";import"./index.esm.9a7e6aa0.js";import"./iframe.d24d3684.js";import"./index.esm.afe5c729.js";import"./index.esm.daf71255.js";import"./index.esm.d9a71e89.js";import"./index.esm.879731d4.js";const A={parameters:{storySource:{source:`import { RmgEnvBadge } from './rmg-env-badge';
import { Box } from '@chakra-ui/react';
import rmgRuntime, { RmgEnv } from '@railmapgen/rmg-runtime';
import { useEffect, useState } from 'react';

export default {
    title: 'RmgEnvBadge',
    component: RmgEnvBadge,
};

export const Basic = () => {
    const [environment, setEnvironment] = useState(RmgEnv.PRD);
    const [appVersion, setAppVersion] = useState('unknown');

    useEffect(() => {
        rmgRuntime.ready().then(() => {
            setEnvironment(rmgRuntime.getEnv());
            setAppVersion(rmgRuntime.getAppVersion());
        });
    }, []);

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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:40},startBody:{col:21,line:11},endBody:{col:1,line:40}}}}},title:"RmgEnvBadge",component:n},S=s(()=>{const[r,t]=m.exports.useState(e.PRD),[v,p]=m.exports.useState("unknown");return m.exports.useEffect(()=>{i.ready().then(()=>{t(i.getEnv()),p(i.getAppVersion())})},[]),g(c,{children:[o(n,{environment:e.DEV,version:"0.1.0",popoverHeader:"You're on DEV environment!",popoverBody:"Please visit PRD environment!"}),o(n,{environment:e.UAT,version:"0.1.0",popoverHeader:"You're on UAT environment!",popoverBody:"Please visit PRD environment!"}),o(n,{environment:e.PRD,version:"0.1.0"}),o(n,{environment:r,version:v})]})},"Basic"),h=["Basic"];export{S as Basic,h as __namedExportsOrder,A as default};
//# sourceMappingURL=rmg-env-badge.stories.d75e012b.js.map
