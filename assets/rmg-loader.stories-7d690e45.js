var i=Object.defineProperty;var n=(r,t)=>i(r,"name",{value:t,configurable:!0});import{j as e}from"./jsx-runtime-ad6454d2.js";import{r as m}from"./index-2a7246bb.js";import{R as o}from"./rmg-loader-6f7c5b87.js";import{b as d}from"./rmg-layout-12b6df6c.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-QEVFQ4EU-4f2764db.js";import"./emotion-react.browser.esm-6433993c.js";import"./chunk-MPFPK3CX-6d7d081c.js";const I={parameters:{storySource:{source:`import React, { useEffect, useState } from 'react';
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
`,locationsMap:{"rmg-loader-indeterminate":{startLoc:{col:38,line:10},endLoc:{col:1,line:16},startBody:{col:38,line:10},endBody:{col:1,line:16}},"rmg-loader-determinate":{startLoc:{col:36,line:18},endLoc:{col:1,line:40},startBody:{col:36,line:18},endBody:{col:1,line:40}}}}},title:"RmgLoader",component:o},x=n(()=>e(d,{w:400,h:300,border:"1px",children:e(o,{isIndeterminate:!0})}),"RmgLoaderIndeterminate"),h=n(()=>{const[r,t]=m.useState(0);return m.useEffect(()=>{const l=setInterval(()=>{t(a=>a===100?0:a+20)},2e3);return()=>clearInterval(l)},[]),e(d,{w:400,h:300,border:"1px",children:e(o,{value:r})})},"RmgLoaderDeterminate"),y=["RmgLoaderIndeterminate","RmgLoaderDeterminate"];export{h as RmgLoaderDeterminate,x as RmgLoaderIndeterminate,y as __namedExportsOrder,I as default};
//# sourceMappingURL=rmg-loader.stories-7d690e45.js.map
