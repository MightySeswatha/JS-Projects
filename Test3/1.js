window.onload = function(){

let btn = document.getElementById("btn");
let radio = document.getElementsByClassName('radio');
let text = document.getElementsByClassName('text');

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let arr = [];



for(let i = 0; i < radio.length; i++){
radio[i].onclick = function(){
/*Закончил здесь*/
radio[i].value = Number(radio[i].value)+1;

if(i >= 0 && i <= 4){
let i1 = i;
for(let j = 0; j <= 4; j++){
if(j != i1){radio[j].checked = false;}
}
sum1++;
}
else if(i >= 5 && i <= 7){
let i1 = i;
for(let j = 5; j <= 7; j++){
if(j != i1){radio[j].checked = false;}
}
sum2++;
}
else if(i >= 8 && i <= 11){
let i1 = i;
for(let j = 8; j <= 11; j++){
if(j != i1){radio[j].checked = false;}
}
sum3++;
}

/**/
}
}

let t = 0;
/*Здесь тоже закончил*/
btn.onclick = function(){
console.log(sum1);
console.log(sum2);
console.log(sum3);
 if(t == 0){

  btn.value = "Пройти опрос ещё раз";
  t = 1;
   for(let i = 0; i < radio.length; i++){
   radio[i].classList.add("off");
   radio[i].checked = false;
   }

 }

 else if(t == 1){
  btn.value = "Проверить";
  t = 0;
   for(let i = 0; i < radio.length; i++){
   radio[i].classList.remove("off");
   }
 }
}
/**/
}
