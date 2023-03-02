var C=Object.defineProperty;var s=(o,t)=>C(o,"name",{value:t,configurable:!0});import{j as p}from"./jsx-runtime-ad6454d2.js";import{u as y,R as f}from"./rmg-theme-provider-cd8b317d.js";import{r as g}from"./index-2a7246bb.js";import{r as M}from"./index-3afc483d.js";import{u as k}from"./chunk-QEVFQ4EU-53e0d211.js";import{R as b}from"./rmg-button-group-7bdd8787.js";import"./emotion-react.browser.esm-a0f32db0.js";import"./chunk-IFAZDFP5-9f9753b4.js";import"./index-348bd907.js";import"./index-4ad6bebe.js";import"./index-c141005a.js";import"./es.object.get-own-property-descriptor-2f3bcc00.js";import"./motion-90ac95bf.js";import"./chunk-SBTIWJWJ-2d523e45.js";import"./chunk-DKFDJSXF-bd3c1ed9.js";import"./chunk-NAA7TEES-a4e017b7.js";import"./index-7822c6a4.js";import"./index-44f5ac58.js";import"./chunk-DUEJD2BE-a4adad48.js";function B(o,t={}){const{ssr:a=!0,fallback:m}=t,{getWindow:n}=y(),c=Array.isArray(o)?o:[o];let u=Array.isArray(m)?m:[m];u=u.filter(r=>r!=null);const[v,h]=g.useState(()=>c.map((r,i)=>({media:r,matches:a?!!u[i]:n().matchMedia(r).matches})));return g.useEffect(()=>{const r=n();h(c.map(e=>({media:e,matches:r.matchMedia(e).matches})));const i=c.map(e=>r.matchMedia(e)),l=s(e=>{h(R=>R.slice().map(d=>d.media===e.media?{...d,matches:e.matches}:d))},"handler");return i.forEach(e=>{typeof e.addListener=="function"?e.addListener(l):e.addEventListener("change",l)}),()=>{i.forEach(e=>{typeof e.removeListener=="function"?e.removeListener(l):e.removeEventListener("change",l)})}},[n]),v.map(r=>r.matches)}s(B,"useMediaQuery");const L=s(()=>{const{colorMode:o,setColorMode:t}=k(),[a]=B("(prefers-color-scheme: dark)"),m=g.useCallback(n=>{M.setColourMode(n),t(n==="system"?a?"dark":"light":n)},[o,t,a]);return{colourMode:o,setColourMode:m}},"useRmgColourMode"),N={parameters:{storySource:{source:`import RmgThemeProvider from './rmg-theme-provider';
import { useRmgColourMode } from '../hook/useRmgColourMode';
import { RmgButtonGroup, RmgButtonGroupSelection } from '../rmg-button-group';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { ColorMode } from '@chakra-ui/react';

export default {
    title: 'RmgThemeProvider',
    component: RmgThemeProvider,
    decorators: [],
};

const Inner = () => {
    const { setColourMode } = useRmgColourMode();

    const selections: RmgButtonGroupSelection<ColorMode | 'system'>[] = [
        { label: 'System', value: 'system' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
    ];

    return (
        <RmgButtonGroup selections={selections} defaultValue={rmgRuntime.getColourMode()} onChange={setColourMode} />
    );
};

export const Basic = () => {
    return (
        <RmgThemeProvider>
            <Inner />
        </RmgThemeProvider>
    );
};
`,locationsMap:{basic:{startLoc:{col:21,line:27},endLoc:{col:1,line:33},startBody:{col:21,line:27},endBody:{col:1,line:33}}}}},title:"RmgThemeProvider",component:f,decorators:[]},E=s(()=>{const{setColourMode:o}=L();return p(b,{selections:[{label:"System",value:"system"},{label:"Light",value:"light"},{label:"Dark",value:"dark"}],defaultValue:M.getColourMode(),onChange:o})},"Inner"),U=s(()=>p(f,{children:p(E,{})}),"Basic"),X=["Basic"];export{U as Basic,X as __namedExportsOrder,N as default};
//# sourceMappingURL=rmg-theme-provider.stories-13bc2fb5.js.map
