var m=Object.defineProperty;var i=(a,c)=>m(a,"name",{value:c,configurable:!0});import{R as e}from"./rmg-line-badge-49a2455f.js";import{c as l}from"./chunk-QODHG6BI-140909a8.js";import{j as o,a as t,F as s}from"./jsx-runtime-ad6454d2.js";import{H as g}from"./chunk-HUQHYERK-107808c1.js";import{I as r}from"./chunk-3HSDMH4Y-83da4e47.js";import"./chunk-QEVFQ4EU-9d161fed.js";import"./index-2a7246bb.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./chunk-FQXH56BT-95cac044.js";import"./chunk-DKFDJSXF-f7053077.js";import"./index-71b8f272.js";import"./chunk-NAA7TEES-810879e0.js";import"./index-348bd907.js";import"./emotion-react.browser.esm-608dfa36.js";import"./index-7822c6a4.js";var d=l({displayName:"SmallCloseIcon",viewBox:"0 0 16 16",path:o("path",{d:"M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",fillRule:"evenodd",fill:"currentColor"})}),p=l({displayName:"EditIcon",path:t("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[o("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),o("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),n=(a=>(a.black="#000",a.white="#fff",a))(n||{});const F={parameters:{storySource:{source:`import { RmgLineBadge } from './rmg-line-badge';
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
            <RmgLineBadge name="1号线" fg={MonoColour.black} bg="#F3D03E" fontSize="1em" showShortName />
            <RmgLineBadge name="1号线" fg={MonoColour.black} bg="#F3D03E" fontSize="1em" />
            <RmgLineBadge
                name="1号线"
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
`,locationsMap:{basic:{startLoc:{col:21,line:11},endLoc:{col:1,line:44},startBody:{col:21,line:11},endBody:{col:1,line:44}}}}},title:"RmgLineBadge"},D=i(()=>t(g,{children:[o(e,{name:"1号线",fg:n.black,bg:"#F3D03E",fontSize:"1em",showShortName:!0}),o(e,{name:"1号线",fg:n.black,bg:"#F3D03E",fontSize:"1em"}),o(e,{name:"1号线",fg:n.black,bg:"#F3D03E",fontSize:"1em",actions:t(s,{children:[o(r,{size:"xs",variant:"ghost",color:n.black,"aria-label":"Edit Line 1",icon:o(p,{}),onClick:console.log}),o(r,{size:"xs",variant:"ghost",color:n.black,"aria-label":"Remove Line 1",icon:o(d,{}),onClick:console.log})]})})]}),"Basic"),H=["Basic"];export{D as Basic,H as __namedExportsOrder,F as default};
//# sourceMappingURL=rmg-line-badge.stories-c4d34792.js.map
