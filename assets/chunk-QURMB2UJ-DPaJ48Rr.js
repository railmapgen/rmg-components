import{j as l}from"./jsx-runtime-CGpYA4L6.js";import{r as s}from"./index-CleY8y_P.js";import{u as _,f as D,M as L,a as O,P as S,L as U}from"./motion-T_VaYMRm.js";import{u as z,b as k}from"./chunk-3KCBMPN5-DswZBF6r.js";import{f as I,c as F,d as N}from"./chunk-ZJJGQIVY-D9s8d0El.js";function b(){const n=s.useRef(!1);return _(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function B(){const n=b(),[r,e]=s.useState(0),t=s.useCallback(()=>{n.current&&e(r+1)},[r]);return[s.useCallback(()=>D.postRender(t),[t]),r]}class G extends s.Component{getSnapshotBeforeUpdate(r){const e=this.props.childRef.current;if(e&&r.isPresent&&!this.props.isPresent){const t=this.props.sizeRef.current;t.height=e.offsetHeight||0,t.width=e.offsetWidth||0,t.top=e.offsetTop,t.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function H({children:n,isPresent:r}){const e=s.useId(),t=s.useRef(null),f=s.useRef({width:0,height:0,top:0,left:0}),{nonce:d}=s.useContext(L);return s.useInsertionEffect(()=>{const{width:p,height:a,top:x,left:h}=f.current;if(r||!t.current||!p||!a)return;t.current.dataset.motionPopId=e;const o=document.createElement("style");return d&&(o.nonce=d),document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${a}px !important;
            top: ${x}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[r]),l.jsx(G,{isPresent:r,childRef:t,sizeRef:f,children:s.cloneElement(n,{ref:t})})}const w=({children:n,initial:r,isPresent:e,onExitComplete:t,custom:f,presenceAffectsLayout:d,mode:p})=>{const a=O(V),x=s.useId(),h=s.useMemo(()=>({id:x,initial:r,isPresent:e,custom:f,onExitComplete:o=>{a.set(o,!0);for(const c of a.values())if(!c)return;t&&t()},register:o=>(a.set(o,!1),()=>a.delete(o))}),d?[Math.random()]:[e]);return s.useMemo(()=>{a.forEach((o,c)=>a.set(c,!1))},[e]),s.useEffect(()=>{!e&&!a.size&&t&&t()},[e]),p==="popLayout"&&(n=l.jsx(H,{isPresent:e,children:n})),l.jsx(S.Provider,{value:h,children:n})};function V(){return new Map}function W(n){return s.useEffect(()=>()=>n(),[])}const m=n=>n.key||"";function q(n,r){n.forEach(e=>{const t=m(e);r.set(t,e)})}function J(n){const r=[];return s.Children.forEach(n,e=>{s.isValidElement(e)&&r.push(e)}),r}const re=({children:n,custom:r,initial:e=!0,onExitComplete:t,exitBeforeEnter:f,presenceAffectsLayout:d=!0,mode:p="sync"})=>{const a=s.useContext(U).forceRender||B()[0],x=b(),h=J(n);let o=h;const c=s.useRef(new Map).current,E=s.useRef(o),C=s.useRef(new Map).current,g=s.useRef(!0);if(_(()=>{g.current=!1,q(h,C),E.current=o}),W(()=>{g.current=!0,C.clear(),c.clear()}),g.current)return l.jsx(l.Fragment,{children:o.map(i=>l.jsx(w,{isPresent:!0,initial:e?void 0:!1,presenceAffectsLayout:d,mode:p,children:i},m(i)))});o=[...o];const M=E.current.map(m),j=h.map(m),K=M.length;for(let i=0;i<K;i++){const u=M[i];j.indexOf(u)===-1&&!c.has(u)&&c.set(u,void 0)}return p==="wait"&&c.size&&(o=[]),c.forEach((i,u)=>{if(j.indexOf(u)!==-1)return;const v=C.get(u);if(!v)return;const T=M.indexOf(u);let y=i;if(!y){const $=()=>{c.delete(u);const A=Array.from(C.keys()).filter(R=>!j.includes(R));if(A.forEach(R=>C.delete(R)),E.current=h.filter(R=>{const P=m(R);return P===u||A.includes(P)}),!c.size){if(x.current===!1)return;a(),t&&t()}};y=l.jsx(w,{isPresent:!1,onExitComplete:$,custom:r,presenceAffectsLayout:d,mode:p,children:v},m(v)),c.set(u,y)}o.splice(T,0,y)}),o=o.map(i=>{const u=i.key;return c.has(u)?i:l.jsx(w,{isPresent:!0,presenceAffectsLayout:d,mode:p,children:i},m(i))}),l.jsx(l.Fragment,{children:c.size?o:o.map(i=>s.cloneElement(i))})};var Q=I(function(r,e){const t=z(),{status:f}=k(),d={display:"inline",...t.description};return l.jsx(F.div,{ref:e,"data-status":f,...r,className:N("chakra-alert__desc",r.className),__css:d})});Q.displayName="AlertDescription";var X=I(function(r,e){const t=z(),{status:f}=k();return l.jsx(F.div,{ref:e,"data-status":f,...r,className:N("chakra-alert__title",r.className),__css:t.title})});X.displayName="AlertTitle";export{re as A,X as a,Q as b};
