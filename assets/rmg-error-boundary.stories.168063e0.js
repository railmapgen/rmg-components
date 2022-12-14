var s=Object.defineProperty;var e=(t,r)=>s(t,"name",{value:r,configurable:!0});import{R as a}from"./rmg-error-boundary.b286dcc3.js";import{R as c,a as i,j as n}from"./jsx-runtime.711b232c.js";import"./index.03b9dda4.js";import"./index.esm.63e18ebe.js";import"./iframe.addee52f.js";import"./index.aa3de729.js";import"./index.esm.b2675e82.js";import"./index.esm.1d0ca704.js";import"./index.esm.8fac31b9.js";import"./index.esm.57965a73.js";import"./index.esm.14cd0817.js";import"./index.esm.d2da2483.js";class o extends c.Component{constructor(r){super(r),this.state={counter:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(({counter:r})=>({counter:r+1}))}render(){if(this.state.counter===5)throw new Error("I crashed!");return i("h1",{onClick:this.handleClick,children:["Click me: ",this.state.counter]})}}e(o,"BuggyCounter");try{o.displayName="BuggyCounter",o.__docgenInfo={description:"",displayName:"BuggyCounter",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/rmg-error-boundary/buggy-counter.tsx#BuggyCounter"]={docgenInfo:o.__docgenInfo,name:"BuggyCounter",path:"src/rmg-error-boundary/buggy-counter.tsx#BuggyCounter"})}catch{}const E={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{basic:{startLoc:{col:21,line:10},endLoc:{col:1,line:16},startBody:{col:21,line:10},endBody:{col:1,line:16}}}}},title:"RmgErrorBoundary",component:a},S=e(()=>n(a,{allowReset:!0,children:n(o,{})}),"Basic"),x=["Basic"];export{S as Basic,x as __namedExportsOrder,E as default};
//# sourceMappingURL=rmg-error-boundary.stories.168063e0.js.map
