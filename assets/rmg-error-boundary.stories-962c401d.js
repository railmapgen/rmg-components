var a=Object.defineProperty;var e=(t,r)=>a(t,"name",{value:r,configurable:!0});import{R as i}from"./rmg-error-boundary-fecb34ab.js";import{R as s}from"./index-2a7246bb.js";import{a as c,j as n}from"./jsx-runtime-ad6454d2.js";import"./index-f996fca0.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./index-e3d200d5.js";import"./index-7822c6a4.js";import"./index-348bd907.js";import"./index-4ad6bebe.js";import"./index-c141005a.js";import"./chunk-DUEJD2BE-32a975b0.js";import"./chunk-DKFDJSXF-f7053077.js";import"./chunk-P74GIWPW-6ac636ed.js";import"./chunk-NAA7TEES-810879e0.js";import"./emotion-react.browser.esm-608dfa36.js";import"./chunk-SBTIWJWJ-e14952ce.js";class o extends s.Component{constructor(r){super(r),this.state={counter:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(({counter:r})=>({counter:r+1}))}render(){if(this.state.counter===5)throw new Error("I crashed!");return c("h1",{onClick:this.handleClick,children:["Click me: ",this.state.counter]})}}e(o,"BuggyCounter");try{o.displayName="BuggyCounter",o.__docgenInfo={description:"",displayName:"BuggyCounter",props:{}}}catch{}const j={parameters:{storySource:{source:`import React from 'react';
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
//# sourceMappingURL=rmg-error-boundary.stories-962c401d.js.map
