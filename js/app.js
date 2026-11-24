const setFox=(el,n)=>{el.src="assets/atoq_"+n+".png"};
const KEY="misionupn_v1", MKEY="misionupn_music";
const $=id=>document.getElementById(id);
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const dayNum=s=>Math.floor(Date.UTC(...s.split("-").map((v,i)=>i==1?v-1:+v))/864e5);
let S={xp:0,streak:0,last:null,lastPlayed:null,medals:[],lastGain:0};
try{const r=localStorage.getItem(KEY);if(r)S=Object.assign(S,JSON.parse(r))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
if(S.last&&dayNum(today())-dayNum(S.last)>1){S.streak=0;save()}

const N=5;
let rd,qs=[],cur=-1,lives=MAX_LIVES,right=0,locked=false,res=[];

function hud(){$("streak").textContent=S.streak;$("lives").textContent=lives;$("xp").textContent=S.xp}

// ---- Medallas (esquina superior derecha) ----
function renderMedals(){
 $("medalbar").innerHTML=MEDALS.map(m=>`<span class="mi ${S.medals.includes(m.id)?"own":"lock"}">${m.i}</span>`).join("");
 $("medalpanel").innerHTML=MEDALS.map(m=>{
  const own=S.medals.includes(m.id),can=S.xp>=m.c;
  return `<div class="mrow ${own?"own":"lock"}"><span class="mi">${m.i}</span><div><strong>${m.n}</strong><small>${own?"Conseguida":m.c+" XP"}</small></div>${own?"":`<button data-id="${m.id}" ${can?"":"disabled"}>${can?"Canjear":"Faltan "+(m.c-S.xp)}</button>`}</div>`}).join("");
 document.querySelectorAll(".mrow button").forEach(b=>b.onclick=()=>{
  const m=MEDALS.find(x=>x.id===b.dataset.id);
  if(S.xp>=m.c&&!S.medals.includes(m.id)){S.xp-=m.c;S.medals.push(m.id);save();hud();renderMedals()}
 });
}
$("medalbar").onclick=e=>{e.stopPropagation();$("medalpanel").classList.toggle("hidden")};
document.addEventListener("click",e=>{if(!e.target.closest(".corner"))$("medalpanel").classList.add("hidden")});

// ---- Lectura y botones de pregunta ----
function renderReading(){
 $("rmeta").textContent=rd.book+" · "+rd.author;$("rtitle").textContent=rd.sub;
 $("rtext").innerHTML=rd.text.split(/\n\n+/).map(p=>"<p>"+p.replace(/\*(.+?)\*/g,"<em>$1</em>")+"</p>").join("");
 $("qbtns").innerHTML=qs.map((_,i)=>`<button class="qb ${res[i]===true?"ok":res[i]===false?"bad":""}" data-i="${i}" ${res[i]!==undefined?"disabled":""}>Pregunta ${i+1}</button>`).join("");
 document.querySelectorAll(".qb").forEach(b=>b.onclick=()=>openQ(+b.dataset.i));
 $("prog").style.width=(res.filter(x=>x!==undefined).length/N*100)+"%";
}
function openQ(i){
 cur=i;locked=false;const it=qs[i];
 $("q").textContent=(i+1)+". "+it.q;$("exp").textContent="";$("next").classList.add("hidden");setFox($("fox"),"pensando");
 $("opts").innerHTML=it.o.map((t,k)=>`<button class="opt" data-i="${k}"><b>${"ABCD"[k]}</b>${t}</button>`).join("");
 document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
 $("ov").classList.remove("hidden");
}
function answer(i){
 if(locked)return;locked=true;
 const it=qs[cur],btns=document.querySelectorAll(".opt"),fox=$("fox");
 btns.forEach(b=>b.disabled=true);
 btns[it.a].classList.add("ok");
 if(i===it.a){right++;res[cur]=true;setFox(fox,"acierto")}
 else{btns[i].classList.add("bad");lives=Math.max(0,lives-1);res[cur]=false;setFox(fox,"error")}
 renderReading();
 fox.classList.add("pop");setTimeout(()=>fox.classList.remove("pop"),250);
 $("exp").textContent=it.e||"";hud();
 const nx=$("next");nx.textContent=res.filter(x=>x!==undefined).length===N?"Ver resultado":"Continuar";nx.classList.remove("hidden");
}
let ended=false;
function closeQ(){
 $("ov").classList.add("hidden");renderReading();
 if(!ended&&res.filter(x=>x!==undefined).length===N){ended=true;finish()}
}
$("next").onclick=closeQ;
$("close").onclick=closeQ;
$("ov").onclick=e=>{if(e.target===$("ov"))closeQ()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("ov").classList.contains("hidden"))closeQ()});

function finish(){
 const gain=right*XP_PER_CORRECT+(right===N?BONUS_PERFECT:0);
 S.xp+=gain;S.lastGain=gain;
 S.streak=(S.last&&dayNum(today())-dayNum(S.last)===1)?S.streak+1:1;
 S.last=today();S.lastPlayed=today();save();
 showDone(gain,right);hud();renderMedals();
}
function showDone(gain,r){
 $("reading").classList.add("hidden");$("done").classList.remove("hidden");
 $("gain").textContent="+"+gain+" XP";
 setFox($("foxdone"),r===N?"racha":r>0?"victoria":"error");
 $("doneMsg").textContent=r===N?"¡Lectura perfecta! Bonus incluido.":"Acertaste "+r+" de "+N+".";
}
function start(){
 hud();renderMedals();
 if(S.lastPlayed===today()){
  $("reading").classList.add("hidden");$("done").classList.remove("hidden");
  $("gain").textContent="+"+S.lastGain+" XP";setFox($("foxdone"),"neutro");
  $("doneMsg").textContent="Ya completaste la lectura de hoy.";return;
 }
 rd=READINGS[dayNum(today())%READINGS.length];qs=rd.qs;renderReading();
}
$("reset").onclick=()=>{if(confirm("¿Borrar todo tu progreso?")){try{localStorage.removeItem(KEY)}catch(e){}location.reload()}};

// ---- Música de fondo ----
const bgm=$("bgm"),VKEY="misionupn_vol";
let vol=30;try{const v=localStorage.getItem(VKEY);if(v!==null)vol=Math.min(100,Math.max(0,+v||0))}catch(e){}
bgm.volume=vol/100;$("vol").value=vol;
$("vol").oninput=e=>{
 vol=+e.target.value;bgm.volume=vol/100;
 try{localStorage.setItem(VKEY,vol)}catch(x){}
};
$("vol").onclick=e=>e.stopPropagation();
let musicOn=true;try{musicOn=localStorage.getItem(MKEY)!=="off"}catch(e){}
const musicUI=()=>{$("music").textContent=(musicOn&&!bgm.paused)?"🔊":"🔇"};
const tryPlay=()=>{if(musicOn)bgm.play().then(musicUI).catch(()=>{})};
// los navegadores exigen un clic antes de reproducir audio: arranca con la primera interacción
document.addEventListener("pointerdown",function f(){tryPlay();document.removeEventListener("pointerdown",f)},{once:true});
$("music").onclick=e=>{
 e.stopPropagation();musicOn=!(musicOn&&!bgm.paused);
 try{localStorage.setItem(MKEY,musicOn?"on":"off")}catch(x){}
 musicOn?bgm.play().catch(()=>{}):bgm.pause();setTimeout(musicUI,50);
};
bgm.onerror=()=>{$("music").title="Falta el archivo assets/musica.mp3"};
start();
