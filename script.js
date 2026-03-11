let startTime, timer, mode="words";

function setMode(m){ mode=m; }

function startTest(){
let count = parseInt(document.getElementById("wordCount").value);
if(count<20) { alert("Minimum 20"); return; }
let paragraph=[];
let wordList=languages[currentLanguage];
for(let i=0;i<count;i++){ paragraph.push(wordList[Math.floor(Math.random()*wordList.length)]); }
document.getElementById("paragraph").innerText=paragraph.join(" ");
document.getElementById("inputBox").value="";
document.getElementById("inputBox").disabled=false;
startTime=new Date().getTime();
clearInterval(timer);
timer=setInterval(updateTime,1000);
}

function updateTime(){
let seconds=Math.floor((new Date().getTime()-startTime)/1000);
document.getElementById("time").innerText=seconds;
}

function finishTest(){
clearInterval(timer);
let original=document.getElementById("paragraph").innerText.split(" ");
let typed=document.getElementById("inputBox").value.split(" ");
let correct=0;
for(let i=0;i<typed.length;i++){ if(typed[i]===original[i]) correct++; }
let accuracy=Math.round((correct/original.length)*100);
let time=document.getElementById("time").innerText;
let wpm=Math.round((typed.length/time)*60);
document.getElementById("wpm").innerText=wpm;
document.getElementById("accuracy").innerText=accuracy;
saveScore(wpm,accuracy);
}

function saveScore(wpm,accuracy){
let name=prompt("Enter your name");
let scores=JSON.parse(localStorage.getItem("typemost"))||[];
scores.push({name,wpm,accuracy});
scores.sort((a,b)=>b.wpm-a.wpm);
scores=scores.slice(0,10);
localStorage.setItem("typemost",JSON.stringify(scores));
loadBoard();
}

function loadBoard(){
let scores=JSON.parse(localStorage.getItem("typemost"))||[];
let table=document.getElementById("leaderboard");
table.innerHTML="<tr><th>Name</th><th>WPM</th><th>Accuracy</th></tr>";
scores.forEach(s=>{ table.innerHTML+=`<tr><td>${s.name}</td><td>${s.wpm}</td><td>${s.accuracy}%</td></tr>`; });
}

function toggleTheme(){
if(document.body.style.background==="white"){ document.body.style.background="#0f172a"; document.body.style.color="white"; }
else{ document.body.style.background="white"; document.body.style.color="black"; }
}

loadBoard();