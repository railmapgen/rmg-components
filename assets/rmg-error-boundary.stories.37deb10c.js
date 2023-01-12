var s=Object.defineProperty;var e=(t,r)=>s(t,"name",{value:r,configurable:!0});import{R as a}from"./rmg-error-boundary.58688afa.js";import{R as c,a as i,j as n}from"./jsx-runtime.def5eff7.js";import"./index.04f2df3b.js";import"./index.esm.6ef52bc8.js";import"./iframe.a291c784.js";import"./index.a54abfad.js";import"./index.esm.28d0385d.js";import"./index.esm.35044409.js";import"./index.esm.8a3b51cc.js";import"./index.esm.b2b3757c.js";import"./index.esm.ac99eb95.js";import"./index.esm.e7e14eb6.js";class o extends c.Component{constructor(r){super(r),this.state={counter:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(({counter:r})=>({counter:r+1}))}render(){if(this.state.counter===5)throw new Error("I crashed!");return i("h1",{onClick:this.handleClick,children:["Click me: ",this.state.counter]})}}e(o,"BuggyCounter");try{o.displayName="BuggyCounter",o.__docgenInfo={description:"",displayName:"BuggyCounter",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/rmg-error-boundary/buggy-counter.tsx#BuggyCounter"]={docgenInfo:o.__docgenInfo,name:"BuggyCounter",path:"src/rmg-error-boundary/buggy-counter.tsx#BuggyCounter"})}catch{}const E={parameters:{storySource:{source:`import React from 'react';
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
//# sourceMappingURL=rmg-error-boundary.stories.37deb10c.js.map
