var s=Object.defineProperty;var n=(r,t)=>s(r,"name",{value:t,configurable:!0});import{j as e,r as m}from"./jsx-runtime.711b232c.js";import{R as o}from"./rmg-loader.4ceb7dd7.js";import{b as d}from"./rmg-layout.d521cdf5.js";import"./iframe.addee52f.js";import"./index.esm.63e18ebe.js";import"./index.esm.57965a73.js";const f={parameters:{storySource:{source:`import React, { useEffect, useState } from 'react';
import { RmgLoader } from './rmg-loader';
import { RmgPage } from '../rmg-layout';

export default {
    title: 'RmgLoader',
    component: RmgLoader,
};

export const RmgLoaderIndeterminate = () => {
    return (
        <RmgPage w={400} h={300} border="1px">
            <RmgLoader isIndeterminate={true} />
        </RmgPage>
    );
};

export const RmgLoaderDeterminate = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue(prevState => {
                if (prevState === 100) {
                    return 0;
                } else {
                    return prevState + 20;
                }
            });
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <RmgPage w={400} h={300} border="1px">
            <RmgLoader value={value} />
        </RmgPage>
    );
};
`,locationsMap:{"rmg-loader-indeterminate":{startLoc:{col:38,line:10},endLoc:{col:1,line:16},startBody:{col:38,line:10},endBody:{col:1,line:16}},"rmg-loader-determinate":{startLoc:{col:36,line:18},endLoc:{col:1,line:40},startBody:{col:36,line:18},endBody:{col:1,line:40}}}}},title:"RmgLoader",component:o},v=n(()=>e(d,{w:400,h:300,border:"1px",children:e(o,{isIndeterminate:!0})}),"RmgLoaderIndeterminate"),x=n(()=>{const[r,t]=m.exports.useState(0);return m.exports.useEffect(()=>{const l=setInterval(()=>{t(a=>a===100?0:a+20)},2e3);return()=>clearInterval(l)},[]),e(d,{w:400,h:300,border:"1px",children:e(o,{value:r})})},"RmgLoaderDeterminate"),I=["RmgLoaderIndeterminate","RmgLoaderDeterminate"];export{x as RmgLoaderDeterminate,v as RmgLoaderIndeterminate,I as __namedExportsOrder,f as default};
//# sourceMappingURL=rmg-loader.stories.02cdc23e.js.map
