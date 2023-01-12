var s=Object.defineProperty;var n=(e,t)=>s(e,"name",{value:t,configurable:!0});import{r as i,j as o,a}from"./jsx-runtime.4889c434.js";import{u as r}from"./useUpdatingGetter.b3f940d7.js";import"./iframe.394cccab.js";const l={parameters:{storySource:{source:`import { useRef } from 'react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:14},endLoc:{col:1,line:24},startBody:{col:21,line:14},endBody:{col:1,line:24}}}}},title:"useUpdatingGetter",component:r},m=n(e=>new Promise(t=>{setTimeout(t,e)}),"wait"),g=n(()=>{const e=i.exports.useRef([]),t=r(m(5e3),()=>new Date().toISOString());return e.current=e.current.concat(t),o("div",{children:a("div",{children:["Timestamp renders: ",e.current.join(",")]})})},"Basic"),f=["Basic"];export{g as Basic,f as __namedExportsOrder,l as default};
//# sourceMappingURL=useUpdatingGetter.stories.9cb80821.js.map
