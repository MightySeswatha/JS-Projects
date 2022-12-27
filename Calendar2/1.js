window.onload = function(){


let today = new Date();
let btn_next = document.getElementById('btn_next');
let btn_prev = document.getElementById('btn_prev');
let text = document.getElementById('text');
let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
let row = document.getElementsByClassName('row3');
let calendar = document.getElementById("calendar");


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
