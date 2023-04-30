import{r as t}from"./index-8db94870.js";const a=(s,e,o)=>{const[r,n]=t.useState(o??e());return t.useEffect(()=>{s.then(()=>{console.debug("[rmg-components] Getter updates finished"),n(e())})},[]),r};export{a as u};
//# sourceMappingURL=useUpdatingGetter-696ece07.js.map
