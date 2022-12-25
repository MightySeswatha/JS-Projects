window.onload = function(){


let today = new Date();
const t_year = today.getFullYear();
const t_month = today.getMonth();
const t_day1 = today.getDay();
let text = document.getElementById('text');
let table = document.getElementsByTagName("table");
let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
let t_day = today.getDate();

let btn_next = document.getElementById('btn_next');
let btn_prev = document.getElementById('btn_prev');

/*Получить количество дней в текущем месяце
console.log(t_day);
console.log(today.daysInMonth());
*/

Date.prototype.daysInMonth = function() {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

changedate(today);

/*Функция изменения даты*/
function changedate(date){

  while (table[0].firstChild) {
    table[0].removeChild(table[0].firstChild);
  }

text.innerHTML = date.getFullYear()+" "+month[date.getMonth()];
let tr = document.createElement("tr");
for(let i = 1; i <= date.daysInMonth(); i++){
let td = document.createElement("td");
td.innerHTML = i;
if(t_day == i && date.getFullYear() == t_year && date.getMonth() == t_month){
td.style.backgroundColor = "black";
td.style.color = "white";
}
tr.appendChild(td);
}
table[0].appendChild(tr);

}


/*Переход в календаре*/

btn_next.onclick = function(){
today.setMonth(today.getMonth() + 1);
changedate(today);
}

btn_prev.onclick = function(){
today.setMonth(today.getMonth() - 1);
changedate(today);
}

}
