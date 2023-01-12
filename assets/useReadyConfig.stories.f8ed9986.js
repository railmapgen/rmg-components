var c=Object.defineProperty;var o=(e,n)=>c(e,"name",{value:n,configurable:!0});import{u as s}from"./useReadyConfig.50a0ea4f.js";import{r as t,a as r}from"./jsx-runtime.def5eff7.js";import{r as p}from"./index.04f2df3b.js";import"./iframe.a291c784.js";const g={parameters:{storySource:{source:`import { useReadyConfig } from './useReadyConfig';
import { useRef } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';

export default {
    title: 'useReadyConfig',
    component: useReadyConfig,
};

export const Basic = () => {
    const appNameRenders = useRef<string[]>([]);
    const appVersionRenders = useRef<string[]>([]);

    const appName = useReadyConfig(rmgRuntime.getAppName);
    const appVersion = useReadyConfig(rmgRuntime.getAppVersion);

    appNameRenders.current = appNameRenders.current.concat(appName);
    appVersionRenders.current = appVersionRenders.current.concat(appVersion);

    return (
        <div>
            <div>App name renders: {appNameRenders.current}</div>
            <div>App version renders: {appVersionRenders.current}</div>
        </div>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:26},startBody:{col:21,line:10},endBody:{col:1,line:26}}}}},title:"useReadyConfig",component:s},l=o(()=>{const e=t.exports.useRef([]),n=t.exports.useRef([]),a=s(p.getAppName),i=s(p.getAppVersion);return e.current=e.current.concat(a),n.current=n.current.concat(i),r("div",{children:[r("div",{children:["App name renders: ",e.current]}),r("div",{children:["App version renders: ",n.current]})]})},"Basic"),y=["Basic"];export{l as Basic,y as __namedExportsOrder,g as default};
//# sourceMappingURL=useReadyConfig.stories.f8ed9986.js.map
