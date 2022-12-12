var a=Object.defineProperty;var s=(r,t)=>a(r,"name",{value:t,configurable:!0});import{R as n}from"./rmg-env-badge.2407ebde.js";import{R as e,r as i}from"./index.20564a1c.js";import{r as m,a as g,j as o}from"./jsx-runtime.f29acd6c.js";import{B as c}from"./index.esm.f10cda7a.js";import"./index.esm.cb10938e.js";import"./index.esm.8968f01e.js";import"./iframe.8b94e34e.js";import"./index.esm.babaacc6.js";import"./index.esm.67c330a1.js";import"./index.esm.ce0d501f.js";import"./index.esm.e1de2d7c.js";const A={parameters:{storySource:{source:`import { RmgEnvBadge } from './rmg-env-badge';
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
//# sourceMappingURL=rmg-env-badge.stories.5d46668c.js.map
