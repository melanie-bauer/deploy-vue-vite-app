import{_ as W}from "./back-arrow-BQ6bvIBQ.js";import{r as x,_ as O,a as B,c as Y,w as z,o as $,b as A,d as y,e as H,f as T,F as G,g as J,n as K,h as S,p as X,i as q,u as P,t as Z,j as U,k as j,l as C,P as I,R as Q,m as D}from "./index-C3VR6T_N.js";import{startTime as ee,startTiming as te,elapsedTime as N}from "./BoulderingSession-CBWxgcOI.js";const ae="/deploy-vue-vite-app/assets/rotate-left-CxPc4Vuv.png";function oe(c){return{all:c=c||new Map,on:function(r, a){var o=c.get(r);o?o.push(a):c.set(r,[a])},off:function(r, a){var o=c.get(r);o&&(a?o.splice(o.indexOf(a)>>>0,1):c.set(r,[]))},emit:function(r, a){var o=c.get(r);o&&o.slice().map(function(m){m(a)}),(o=c.get("*"))&&o.slice().map(function(m){m(r,a)})}}}const V=oe(),ne= c=>(X("data-v-0c9e6d53"),c=c(),q(),c),se={id:"container"},re=ne(()=>T("video",{id:"video",autoplay:"",style:{display:"none"}},null,-1)),ie=["id","onMousedown","onTouchstart"],f=x(["Head","Shoulders","Hip","LE","RE","LK","RK","LF","RF","LH","RH"]),ce={__name:"Canvas",props:{showFixedPositionButton:{type:Boolean,required:!0}},setup(c){const r=c,a=x(null),o=x(!1),m=x(null),w=B({x:0,y:0}),F=20,E=60,u=B({Head:{id:"Head",x:160,y:120}}),b=x(),k=Y(()=>{const e=["Head","item"];return Object.fromEntries(Object.entries(u).filter(([t])=>!e.includes(t)))}),M=x(!1),n=x();let s;z(()=>r.showFixedPositionButton, e=>{e?f.value=["Head","Shoulders","Hip","LE","RE","LK","RK","LF","RF","LH","RH"]:f.value=["Head","Shoulders","Hip"]});function d(e){switch(e){case"LE":case"LH":return["LE","LH","Head","Shoulders","Hip"];case"RE":case"RH":return["RE","RH","Head","Shoulders","Hip"];case"LK":case"LF":return["LK","LF","Head","Shoulders","Hip"];case"RK":case"RF":return["RK","RF","Head","Shoulders","Hip"];default:return[]}}async function i(){try{const t=await(await fetch("http://localhost:3000/points")).json();o.value||(Object.assign(u,t.reduce((h, p)=>(h[p.id]=p,h),{})),v(u),M.value=!0)}catch(e){console.error("Error fetching data:",e)}}function v(e){const t=a.value.getContext("2d");t.lineWidth=5,t&&(t.clearRect(0,0,a.value.width,a.value.height),t.drawImage(n.value,0,0,a.value.width,a.value.height),t.beginPath(),e.Shoulders&&e.Hip&&(t.moveTo(e.Shoulders.x,e.Shoulders.y),t.lineTo(e.Hip.x,e.Hip.y)),e.LK&&e.LF&&(t.lineTo(e.LK.x,e.LK.y),t.lineTo(e.LF.x,e.LF.y)),e.RK&&e.RF&&(t.moveTo(e.Hip.x,e.Hip.y),t.lineTo(e.RK.x,e.RK.y),t.lineTo(e.RF.x,e.RF.y)),e.LE&&e.LH&&(t.moveTo(e.Shoulders.x,e.Shoulders.y),t.lineTo(e.LE.x,e.LE.y),t.lineTo(e.LH.x,e.LH.y)),e.RE&&e.RH&&(t.moveTo(e.Shoulders.x,e.Shoulders.y),t.lineTo(e.RE.x,e.RE.y),t.lineTo(e.RH.x,e.RH.y)),e.Head&&(t.moveTo(e.Shoulders.x,e.Shoulders.y),t.lineTo(e.Head.x,e.Head.y)),t.strokeStyle="white",t.stroke())}function L(e, t){if(!r.showFixedPositionButton&&f.value.length===3&&["LE","LH","RE","RH","LK","LF","RK","RF"].includes(t)&&(f.value=d(t)),f.value.map(p=>p).includes(t)){o.value=!0,m.value=t;const p=e.type.startsWith("touch")?e.touches[0].clientX:e.clientX,_=e.type.startsWith("touch")?e.touches[0].clientY:e.clientY;w.x=p-u[t].x,w.y=_-u[t].y,e.type==="mousedown"?(document.addEventListener("mousemove",l),document.addEventListener("mouseup",g)):e.type==="touchstart"&&(document.addEventListener("touchmove",l),document.addEventListener("touchend",g))}}function l(e){if(!o.value)return;const t=e.type.startsWith("touch")?e.touches[0].clientX:e.clientX,h=e.type.startsWith("touch")?e.touches[0].clientY:e.clientY;u[m.value].x=t-w.x,u[m.value].y=h-w.y,v(u)}async function g(){o.value=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",g);const e=m.value;try{const t=await fetch(`http://localhost:3000/points/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(u[e])})}catch(t){console.error("Error updating points:",t)}}$(()=>{a.value=document.getElementById("canvas"),n.value=document.getElementById("video"),i(),b.value=setInterval(i,3e3),V.on("reset-draggable-limbs",async e=>{for(let t in f.value)try{const h=await fetch(`http://localhost:3000/points/${f.value[t]}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e[f.value[t]])})}catch(h){console.error("Error updating points:",h)}f.value=["Head","Shoulders","Hip"],await i()}),a.value.width=window.innerWidth,a.value.height=window.innerHeight,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:!1}).then(e=>{s=e,n.value.srcObject=e,n.value.play(),R()}).catch(e=>{console.error("Error accessing media devices.",e)}):console.error("getUserMedia not supported in this browser.")}),A(()=>{s&&s.getTracks().forEach(e=>{e.stop()}),b.value&&clearInterval(b.value)});function R(){a.value.getContext("2d").drawImage(n.value,0,0,a.value.width,a.value.height),u&&Object.keys(u).length>1&&v(u),requestAnimationFrame(R)}return(e, t)=>(y(),H("div",se,[re,T("canvas",{id:"canvas",ref_key:"canvas",ref:a},null,512),(y(!0),H(G,null,J(k.value,(h, p)=>(y(),H("div",{id:p,key:p,style:K({top:h.y-F/2+"px",left:h.x-F/2+"px"}),class:"point",draggable:"true",onMousedown: _=>L(_,p),onTouchstart: _=>L(_,p)},null,44,ie))),128)),M.value?(y(),H("div",{key:0,id:"Head",style:K({top:u.Head.y-E/2+"px",left:u.Head.x-E/2+"px"}),class:"head",draggable:!0,onMousedown:t[0]||(t[0]= h=>L(h,"Head")),onTouchstart:t[1]||(t[1]= h=>L(h,"Head"))},null,36)):S("",!0)]))}},le=O(ce,[["__scopeId","data-v-0c9e6d53"]]),de= c=>(X("data-v-104bd30d"),c=c(),q(),c),ue={class:"container d-flex flex-column justify-content-between"},he={key:0,class:"overlay timer"},me={key:1,class:"overlay timer"},fe=de(()=>T("img",{class:"img",src:W},null,-1)),ve={class:"text-center row d-flex justify-content-center align-items-center padding"},pe={key:0,width:"20px",height:"20px",src:ae,alt:"left rotating circle"},ye={__name:"GetNextHandle",setup(c){const r=x(!0),a=x({}),o=x({}),m=x();async function w(){r.value=!r.value;try{const s=await(await fetch("http://localhost:3000/points")).json();Object.assign(a,s.reduce((d, i)=>(d[i.id]=i,d),{}))}catch(n){console.error("Error fetching data:",n)}}function F(){V.emit("reset-draggable-limbs",a)}async function E(){try{const s=await(await fetch("http://localhost:3000/personHeight")).json();m.value=s[0].value}catch(n){console.error("Error fetching data:",n)}try{const s=await(await fetch("http://localhost:3000/points")).json();Object.assign(o,s.reduce((i, v)=>(i[v.id]=v,i),{})),console.log(f);let d=f.value.map(i=>i);d.length>3&&m.value>0&&(r.value=!r.value,u(d[1]),f.value=["Head","Shoulder","Hip"])}catch(n){console.error("Error fetching data:",n)}}function u(n){let s="Bitte bewege deine";switch(n){case"LH":s+="linke Hand ";break;case"RH":s+="rechte Hand ";break;case"LF":s+="n linken Fuß ";break;case"RF":s+="n rechten Fuß ";break}s+=`${b(M(n))} Zentimeter nach ${k(n)}`;let d=new SpeechSynthesisUtterance(s);window.speechSynthesis.speak(d)}function b(n){const s=Math.floor(n/5)*5,d=s+5;return n-s<d-n?s:d}function k(n){const s=[{min:345,max:15,time:"12 Uhr"},{min:15,max:45,time:"1 Uhr"},{min:45,max:75,time:"2 Uhr"},{min:75,max:105,time:"3 Uhr"},{min:105,max:135,time:"4 Uhr"},{min:135,max:165,time:"5 Uhr"},{min:165,max:195,time:"6 Uhr"},{min:195,max:225,time:"7 Uhr"},{min:225,max:255,time:"8 Uhr"},{min:255,max:285,time:"9 Uhr"},{min:285,max:315,time:"10 Uhr"},{min:315,max:345,time:"11 Uhr"}],d=a[n],i=o[n],v=i.x-d.x,L=i.y-d.y;let l=Math.atan2(L,v)*(180/Math.PI);l<0&&l>=-90?l=90+l:l<-90?l=450+l:l=90+l;let g;return l>=345||l<15?g=s[0]:g=s.find(R=>l>=R.min&&l<R.max),g?g.time:""}function M(n){let s=Math.sqrt(Math.pow(Math.abs(o.Hip.x-o.Shoulders.x),2)+Math.pow(Math.abs(o.Hip.y-o.Shoulders.y),2)),d=m.value/2-m.value/7,i;switch(n){case"LH":i=Math.sqrt(Math.pow(Math.abs(a.LH.x-o.LH.x),2)+Math.pow(Math.abs(a.LH.y-o.LH.y),2));break;case"RH":i=Math.sqrt(Math.pow(Math.abs(a.RH.x-o.RH.x),2)+Math.pow(Math.abs(a.RH.y-o.RH.y),2));break;case"LF":i=Math.sqrt(Math.pow(Math.abs(a.LF.x-o.LF.x),2)+Math.pow(Math.abs(a.LF.y-o.LF.y),2));break;case"RF":i=Math.sqrt(Math.pow(Math.abs(a.RF.x-o.RF.x),2)+Math.pow(Math.abs(a.RF.y-o.RF.y),2));break}let v=i*d/s;return console.log(v),v}return $(async()=>{try{const s=await(await fetch("http://localhost:3000/startTime/startTime")).json();ee.value=s.value,await te()}catch(n){console.error("Error updating personHeight:",n)}}),(n, s)=>(y(),H("div",ue,[P(N)?(y(),H("p",he,Z(P(N)),1)):(y(),H("p",me,"00:00")),U(le,{"show-fixed-position-button":r.value},null,8,["show-fixed-position-button"]),U(P(Q),{to:"/overview",class:"button d-flex align-items-center"},{default:j(()=>[fe]),_:1}),T("div",ve,[r.value?(y(),C(I,{key:0,id:"confirmStickman",class:"overlay",fontSize:"24px",to:"/connectRaspi",width:"90%",onClick:w},{default:j(()=>[D(" confirm Stickman-Position ")]),_:1})):S("",!0),r.value?S("",!0):(y(),H("button",{key:1,type:"button",id:"reverseButton",class:"btn btn-primary overlay mx-1",onClick:F},[r.value?S("",!0):(y(),H("img",pe))])),r.value?S("",!0):(y(),C(I,{key:2,id:"confirmNextHandle",class:"overlay mx-1",fontSize:"22px",to:"/connectRaspi",width:"80%",onClick:E},{default:j(()=>[D(" confirm next Handl-Position ")]),_:1}))])]))}},we=O(ye,[["__scopeId","data-v-104bd30d"]]);export{we as default};
