var a=Object.defineProperty;var e=(t,r)=>a(t,"name",{value:r,configurable:!0});import{a as s,j as n}from"./jsx-runtime-ad6454d2.js";import{R as i}from"./rmg-error-boundary-475134ad.js";import{R as c}from"./index-2a7246bb.js";import"./index-649bdcb8.js";import"./chunk-QEVFQ4EU-457e66a5.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./index-0c1cc494.js";import"./index-7822c6a4.js";import"./index-348bd907.js";import"./index-4ad6bebe.js";import"./index-c141005a.js";import"./chunk-DUEJD2BE-5bbdf678.js";import"./chunk-DKFDJSXF-b09b6c81.js";import"./chunk-P74GIWPW-f4e4a8d1.js";import"./chunk-NAA7TEES-d5f813a3.js";import"./emotion-react.browser.esm-142bf922.js";import"./chunk-SBTIWJWJ-9e0970d8.js";class o extends c.Component{constructor(r){super(r),this.state={counter:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(({counter:r})=>({counter:r+1}))}render(){if(this.state.counter===5)throw new Error("I crashed!");return s("h1",{onClick:this.handleClick,children:["Click me: ",this.state.counter]})}}e(o,"BuggyCounter");try{o.displayName="BuggyCounter",o.__docgenInfo={description:"",displayName:"BuggyCounter",props:{}}}catch{}const j={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:16},startBody:{col:21,line:10},endBody:{col:1,line:16}}}}},title:"RmgErrorBoundary",component:i},I=e(()=>n(i,{allowReset:!0,children:n(o,{})}),"Basic"),L=["Basic"];export{I as Basic,L as __namedExportsOrder,j as default};
//# sourceMappingURL=rmg-error-boundary.stories-0f0fbc79.js.map
