window.onload = function(){


let today = new Date();
let btn_next = document.getElementById('btn_next');
let btn_prev = document.getElementById('btn_prev');
let text = document.getElementById('text');
let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
let row = document.getElementsByClassName('row3');
let calendar = document.getElementById("calendar");
let goals = [];
let q = 0;

changeDate(today);




function changeDate(date){
/*Изменение даты*/

while (calendar.firstChild) {
  calendar.removeChild(calendar.firstChild);
}

Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

text.innerHTML = date.getFullYear()+" "+month[date.getMonth()];
let k = date.daysInMonth();



let temp = new Date(date).setDate(1);
let t = new Date(temp).getDay();

let i = 1;

while(i < k){

let row = document.createElement("div");
row.classList.add("row");
row.classList.add("row3");

for(let j = 0; j < 7; j++){

let elem = document.createElement("div");
elem.classList.add("elem");

if(calendar.children.length == 0 && t == 0 && j < 6){elem.innerHTML = "";}

else if(calendar.children.length == 0 && j+1 < t){
elem.innerHTML = "";
}

else{
elem.innerHTML = i;
if(i > k){elem.innerHTML = "";}
i++;
}


elem.onclick = function(){

let area = document.getElementsByTagName('textarea');
let btn_save = document.getElementById("btn_save");
let btn_delete = document.getElementById('btn_delete');

btn_save.style.display = "flex";
btn_delete.style.display = "flex";
area[0].style.display = "flex";

btn_delete.onclick = function(){
area[0].value = "";
}

/*Очистить активность*/
if(elem.innerHTML.length > 0){
for(let i = 0; i < document.getElementsByClassName("elem").length; i++){
if(document.getElementsByClassName("elem")[i] != elem){
document.getElementsByClassName("elem")[i].classList.remove("active");
}
}

elem.classList.add("active");

/*Вывод текста если он есть*/

let t1 = new Date(date.setDate(Number(elem.innerHTML)));


for(let i = 0; i < goals.length; i++){
let t2 = new Date(Object.values(goals[i])[0]);
console.log(t1);
console.log(t2);
if(t1.getFullYear() == t2.getFullYear() && t1.getMonth() == t2.getMonth() && Number(elem.innerHTML) == t2.getDate()){
alert(Object.keys(goals[i])[0]);
}

}

/*Заполнение массива данных объектами(текст,дата)*/
btn_save.onclick = function(){
let goal;

if(goals.length == 0){
goal = "temp";
}


for(let i = 0; i < goals.length; i++){
let t2 = new Date(Object.values(goals[i])[0]);
if(t1.getFullYear() == t2.getFullYear() && t1.getMonth() == t2.getMonth() && Number(elem.innerHTML) == t2.getDate()){
goal = area[0].value;
goals[i] = { "temp" : t1};
goals[i][goal] = goals[i]["temp"];
delete goals[i]["temp"];
goal = "";
}
}


if(goal == ""){}
else{
goal = area[0].value;
goals[q] = { "temp" : t1};
goals[q][goal] = goals[q]["temp"];
delete goals[q]["temp"];
console.log(goals);
q++;
}

}


}
}

row.appendChild(elem);
let temp = new Date();

if(temp.getDate() == i-1 && month[temp.getMonth()] == month[date.getMonth()] && date.getFullYear() == temp.getFullYear()){elem.style.background = "black"; elem.style.color = "white";}

}

calendar.appendChild(row);

}






}
/*Переключение календаря*/


btn_next.onclick = function(){
today.setMonth(today.getMonth() + 1);
changeDate(today);
}

btn_prev.onclick = function(){
today.setMonth(today.getMonth() - 1);
changeDate(today);
}

}
