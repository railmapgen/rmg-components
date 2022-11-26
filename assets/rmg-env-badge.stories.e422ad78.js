var a=Object.defineProperty;var s=(r,t)=>a(r,"name",{value:t,configurable:!0});import{R as n}from"./rmg-env-badge.1c4f7dce.js";import{R as e,r as i}from"./index.100218d1.js";import{r as m,a as g,j as o}from"./jsx-runtime.cac6885b.js";import{B as c}from"./index.esm.2bb7c29e.js";import"./index.esm.79b62cac.js";import"./index.esm.178b0ab7.js";import"./iframe.81000197.js";import"./index.esm.e6173dde.js";import"./index.esm.ed70b3fc.js";import"./index.esm.363678a0.js";import"./index.esm.d0c79f4f.js";const A={parameters:{storySource:{source:`import { RmgEnvBadge } from './rmg-env-badge';
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
//# sourceMappingURL=rmg-env-badge.stories.e422ad78.js.map
