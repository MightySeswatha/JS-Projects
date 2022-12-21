window.onload = function(){

let td = document.getElementsByTagName('td');
let move = document.getElementById('move');
let btn = document.getElementById('btn');
let text = document.getElementById("text");
let win_x = document.getElementById("win_x");
let win_0 = document.getElementById("win_0");
let draw = document.getElementById("draw");

for(let i = 0; i < td.length; i++){

td[i].onclick = function(){
if(move.innerHTML == "x"){
td[i].innerHTML = "X";
td[i].style = "pointer-events: none";
move.innerHTML = "0";
}
else{
td[i].innerHTML = "0";
move.innerHTML = "x";
td[i].style = "pointer-events: none";
}

if(win() == true){
text.innerHTML = "Выиграл: ";
move.innerHTML = td[i].innerHTML.toLowerCase();
if(td[i].innerHTML.toLowerCase() == "x"){win_x.innerHTML = Number(win_x.innerHTML)+1;}
if(td[i].innerHTML.toLowerCase() == "0"){win_0.innerHTML = Number(win_0.innerHTML)+1;}
for(let i = 0; i < td.length;i++){
td[i].style = "pointer-events: none";
}
}

else if(win() == "draw"){
move.innerHTML = "";
text.innerHTML = "Ничья";
draw.innerHTML = Number(draw.innerHTML)+1;
for(let i = 0; i < td.length;i++){
td[i].style = "pointer-events: none";
}
}
}
}

btn.onclick = function(){
text.innerHTML = "Ходит: ";
for(let i = 0; i < td.length; i++){
td[i].innerHTML = "";
td[i].style = "";
if(move.innerHTML == "0"){move.innerHTML = "x";}
else{move.innerHTML = "0";}
}
}

function win(){
for(let i = 0; i < 3; i++){
if(td[i*3].innerHTML == td[i*3+1].innerHTML && td[i*3+1].innerHTML == td[i*3+2].innerHTML && td[i*3].innerHTML != ""){return true;}
if(td[i].innerHTML == td[i+3].innerHTML && td[i+3].innerHTML == td[i+6].innerHTML && td[i].innerHTML != ""){return true;}
if(td[0].innerHTML == td[4].innerHTML && td[4].innerHTML == td[8].innerHTML && td[0].innerHTML != ""){return true;}
if(td[2].innerHTML == td[4].innerHTML && td[4].innerHTML == td[6].innerHTML && td[2].innerHTML != ""){return true;}
}

let t = 0;
for(let i = 0; i < td.length; i++){
if(td[i].innerHTML != ""){console.log(t);t++;}
else{}
}
if(t == 8){return "draw";}
}

}
