
const setFox=(el,n)=>{el.src="assets/atoq_"+n+".png"};
const KEY="misionupn_v1";
const $=id=>document.getElementById(id);
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const dayNum=s=>Math.floor(Date.UTC(...s.split("-").map((v,i)=>i==1?v-1:+v))/864e5);
let S={xp:0,streak:0,last:null,lastPlayed:null,medals:[],lastGain:0};
try{const r=localStorage.getItem(KEY);if(r)S=Object.assign(S,JSON.parse(r))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};

// racha: se rompe si pasó más de 1 día sin jugar
if(S.last&&dayNum(today())-dayNum(S.last)>1){S.streak=0;save()}

let qs=[],idx=0,lives=MAX_LIVES,right=0,locked=false;

function todaysQuestions(){
 const start=(dayNum(today())*3)%BANK.length;
 return [0,1,2].map(k=>BANK[(start+k)%BANK.length]);
}
function hud(){$("streak").textContent=S.streak;$("lives").textContent=lives;$("xp").textContent=S.xp}
function renderMedals(){
 $("medals").innerHTML=MEDALS.map(m=>{
  const own=S.medals.includes(m.id),can=S.xp>=m.c;
  return `<div class="medal ${own?"own":"lock"}"><div class="ic">${m.i}</div><strong>${m.n}</strong><small>${own?"Conseguida":m.c+" XP"}</small>${own?"":`<button data-id="${m.id}" ${can?"":"disabled"}>${can?"Canjear":"Faltan "+(m.c-S.xp)}</button>`}</div>`}).join("");
 document.querySelectorAll(".medal button").forEach(b=>b.onclick=()=>{
  const m=MEDALS.find(x=>x.id===b.dataset.id);
  if(S.xp>=m.c&&!S.medals.includes(m.id)){S.xp-=m.c;S.medals.push(m.id);save();hud();renderMedals()}
 });
}
function showQ(){
 locked=false;const it=qs[idx];
 $("q").textContent=it.q;$("exp").textContent="";$("next").classList.add("hidden");setFox($("fox"),"pensando");
 $("prog").style.width=(idx/3*100)+"%";
 $("opts").innerHTML=it.o.map((t,i)=>`<button class="opt" data-i="${i}"><b>${"ABC"[i]}</b>${t}</button>`).join("");
 document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){
 if(locked)return;locked=true;
 const it=qs[idx],btns=document.querySelectorAll(".opt");
 btns.forEach(b=>b.disabled=true);
 btns[it.a].classList.add("ok");
 const fox=$("fox");
 if(i===it.a){right++;setFox(fox,"acierto")}else{btns[i].classList.add("bad");lives=Math.max(0,lives-1);setFox(fox,"error")}
 fox.classList.add("pop");setTimeout(()=>fox.classList.remove("pop"),250);
 $("exp").textContent=it.e;hud();
 const nx=$("next");nx.textContent=idx<2?"Siguiente":"Ver resultado";nx.classList.remove("hidden");
}
$("next").onclick=()=>{idx++;idx<3?showQ():finish()};
function finish(){
 const gain=right*XP_PER_CORRECT+(right===3?BONUS_PERFECT:0);
 S.xp+=gain;S.lastGain=gain;
 S.streak=(S.last&&dayNum(today())-dayNum(S.last)===1)?S.streak+1:1;
 S.last=today();S.lastPlayed=today();save();
 showDone(gain,right);hud();renderMedals();
}
function showDone(gain,r){
 $("quiz").classList.add("hidden");$("done").classList.remove("hidden");
 $("gain").textContent="+"+gain+" XP";
 setFox($("foxdone"),r===3?"racha":r>0?"victoria":"error");
 $("doneMsg").textContent=r===3?"¡Misión perfecta! Bonus incluido.":"Acertaste "+r+" de 3.";
}
function start(){
 hud();renderMedals();
 if(S.lastPlayed===today()){
  $("quiz").classList.add("hidden");$("done").classList.remove("hidden");
  $("gain").textContent="+"+S.lastGain+" XP";setFox($("foxdone"),"neutro");
  $("doneMsg").textContent="Ya completaste la misión de hoy.";return;
 }
 qs=todaysQuestions();showQ();
}
$("reset").onclick=()=>{if(confirm("¿Borrar todo tu progreso?")){try{localStorage.removeItem(KEY)}catch(e){}location.reload()}};
start();
