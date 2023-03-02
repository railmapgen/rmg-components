var a=Object.defineProperty;var e=(t,r)=>a(t,"name",{value:r,configurable:!0});import{a as s,j as n}from"./jsx-runtime-ad6454d2.js";import{R as i}from"./rmg-error-boundary-a9af95ec.js";import{R as c}from"./index-2a7246bb.js";import"./index-3afc483d.js";import"./chunk-QEVFQ4EU-53e0d211.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-IFAZDFP5-9f9753b4.js";import"./index-348bd907.js";import"./index-4ad6bebe.js";import"./index-c141005a.js";import"./motion-90ac95bf.js";import"./chunk-SBTIWJWJ-2d523e45.js";import"./chunk-DKFDJSXF-bd3c1ed9.js";import"./chunk-NAA7TEES-a4e017b7.js";import"./emotion-react.browser.esm-a0f32db0.js";import"./index-7822c6a4.js";import"./index-204e2e81.js";import"./chunk-DUEJD2BE-a4adad48.js";import"./chunk-P74GIWPW-8796281a.js";class o extends c.Component{constructor(r){super(r),this.state={counter:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(({counter:r})=>({counter:r+1}))}render(){if(this.state.counter===5)throw new Error("I crashed!");return s("h1",{onClick:this.handleClick,children:["Click me: ",this.state.counter]})}}e(o,"BuggyCounter");try{o.displayName="BuggyCounter",o.__docgenInfo={description:"",displayName:"BuggyCounter",props:{}}}catch{}const L={parameters:{storySource:{source:`import React from 'react';
import { RmgErrorBoundary } from './rmg-error-boundary';
import { BuggyCounter } from './buggy-counter';

export default {
    title: 'RmgErrorBoundary',
    component: RmgErrorBoundary,
};

export const Basic = () => {
    return (
        <RmgErrorBoundary allowReset>
            <BuggyCounter />
        </RmgErrorBoundary>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:16},startBody:{col:21,line:10},endBody:{col:1,line:16}}}}},title:"RmgErrorBoundary",component:i},N=e(()=>n(i,{allowReset:!0,children:n(o,{})}),"Basic"),S=["Basic"];export{N as Basic,S as __namedExportsOrder,L as default};
//# sourceMappingURL=rmg-error-boundary.stories-ed2d3dba.js.map
