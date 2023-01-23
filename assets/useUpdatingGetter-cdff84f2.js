var a=Object.defineProperty;var s=(t,e)=>a(t,"name",{value:e,configurable:!0});import{r as o}from"./index-2a7246bb.js";const d=s((t,e,r)=>{const[n,u]=o.useState(r??e());return o.useEffect(()=>{t.then(()=>{console.debug("[rmg-components] Getter updates finished"),u(e())})},[]),n},"useUpdatingGetter");export{d as u};
//# sourceMappingURL=useUpdatingGetter-cdff84f2.js.map
