window.onload = function(){

let btn = document.getElementById('btn');
let inp = document.getElementsByTagName('input');
let arr = [];

for(let i = 0; i < inp.length-1;i++){

inp[i].onclick = function(){

if(i >= 0 && i <= 2){
if(inp[i].getAttribute("id") == "correct"){arr[0] = "c";}
else{arr[0] = "f";}
let i1 = i;
for(let i = 0; i <= 2; i++){
if(i != i1){inp[i].checked = false;}
}
}
else if(i >= 3 && i <= 5){
if(inp[i].getAttribute("id") == "correct"){arr[1] = "c";}
else{arr[1] = "f";}
let i1 = i;
for(let i = 3; i <= 5; i++){
if(i != i1){inp[i].checked = false;}
}
}
else if(i >= 6 && i <= 8){
if(inp[i].getAttribute("id") == "correct"){arr[2] = "c";}
else{arr[2] = "f";}
let i1 = i;
for(let i = 6; i <= 8; i++){
if(i != i1){inp[i].checked = false;}
}
}

}

}


btn.onclick = function(){
let c = 0;
let f = 0;
let n = 0;
for(let k = 0; k < 3; k++){
if(arr[k] == "c"){c++;}
else if(arr[k] == "f"){f++;}
else{n++;}
}
alert("Правильных ответов:"+c+" ("+Math.floor(c*100/3)+"%)\n"+"Неправильных ответов: "+f+"\n"+"Без ответов: "+n);
}

}
