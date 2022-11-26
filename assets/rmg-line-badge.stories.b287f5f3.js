var l=Object.defineProperty;var t=(e,c)=>l(e,"name",{value:c,configurable:!0});import{R as a}from"./rmg-line-badge.6f351b90.js";import{E as s,S as m}from"./index.esm.47e2441f.js";import{a as i,j as o,F as g}from"./jsx-runtime.6cb555d4.js";import{I as r}from"./index.esm.45358366.js";import{H as f}from"./index.esm.09d9eaee.js";import"./index.esm.0104b23d.js";import"./iframe.b1d869d6.js";import"./index.esm.df881371.js";var n=(e=>(e.black="#000",e.white="#fff",e))(n||{});const L={parameters:{storySource:{source:`import { RmgLineBadge } from './rmg-line-badge';
import { MonoColour } from '../util/constants';
import { HStack, IconButton } from '@chakra-ui/react';
import { EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import React from 'react';

export default {
    title: 'RmgLineBadge',
};

export const Basic = () => {
    return (
        <HStack>
            <RmgLineBadge name="1\u53F7\u7EBF" fg={MonoColour.black} bg="#F3D03E" fontSize="1em" showShortName />
            <RmgLineBadge name="1\u53F7\u7EBF" fg={MonoColour.black} bg="#F3D03E" fontSize="1em" />
            <RmgLineBadge
                name="1\u53F7\u7EBF"
                fg={MonoColour.black}
                bg="#F3D03E"
                fontSize="1em"
                actions={
                    <>
                        <IconButton
                            size="xs"
                            variant="ghost"
                            color={MonoColour.black}
                            aria-label="Edit Line 1"
                            icon={<EditIcon />}
                            onClick={console.log}
                        />
                        <IconButton
                            size="xs"
                            variant="ghost"
                            color={MonoColour.black}
                            aria-label="Remove Line 1"
                            icon={<SmallCloseIcon />}
                            onClick={console.log}
                        />
                    </>
                }
            />
        </HStack>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:44},startBody:{col:21,line:11},endBody:{col:1,line:44}}}}},title:"RmgLineBadge"},h=t(()=>i(f,{children:[o(a,{name:"1\u53F7\u7EBF",fg:n.black,bg:"#F3D03E",fontSize:"1em",showShortName:!0}),o(a,{name:"1\u53F7\u7EBF",fg:n.black,bg:"#F3D03E",fontSize:"1em"}),o(a,{name:"1\u53F7\u7EBF",fg:n.black,bg:"#F3D03E",fontSize:"1em",actions:i(g,{children:[o(r,{size:"xs",variant:"ghost",color:n.black,"aria-label":"Edit Line 1",icon:o(s,{}),onClick:console.log}),o(r,{size:"xs",variant:"ghost",color:n.black,"aria-label":"Remove Line 1",icon:o(m,{}),onClick:console.log})]})})]}),"Basic"),C=["Basic"];export{h as Basic,C as __namedExportsOrder,L as default};
//# sourceMappingURL=rmg-line-badge.stories.b287f5f3.js.map
