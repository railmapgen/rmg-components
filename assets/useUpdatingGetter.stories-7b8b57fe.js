var s=Object.defineProperty;var n=(e,t)=>s(e,"name",{value:t,configurable:!0});import{r as i}from"./index-2a7246bb.js";import{u as r}from"./useUpdatingGetter-cdff84f2.js";import{j as o,a}from"./jsx-runtime-ad6454d2.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";const g={parameters:{storySource:{source:`import { useRef } from 'react';
import { useUpdatingGetter } from './useUpdatingGetter';

export default {
    title: 'useUpdatingGetter',
    component: useUpdatingGetter,
};

const wait = (ms: number) =>
    new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });

export const Basic = () => {
    const renderedTimestamps = useRef<string[]>([]);
    const timestamp = useUpdatingGetter(wait(5000), () => new Date().toISOString());
    renderedTimestamps.current = renderedTimestamps.current.concat(timestamp);

    return (
        <div>
            <div>Timestamp renders: {renderedTimestamps.current.join(',')}</div>
        </div>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:14},endLoc:{col:1,line:24},startBody:{col:21,line:14},endBody:{col:1,line:24}}}}},title:"useUpdatingGetter",component:r},m=n(e=>new Promise(t=>{setTimeout(t,e)}),"wait"),f=n(()=>{const e=i.useRef([]),t=r(m(5e3),()=>new Date().toISOString());return e.current=e.current.concat(t),o("div",{children:a("div",{children:["Timestamp renders: ",e.current.join(",")]})})},"Basic"),v=["Basic"];export{f as Basic,v as __namedExportsOrder,g as default};
//# sourceMappingURL=useUpdatingGetter.stories-7b8b57fe.js.map
