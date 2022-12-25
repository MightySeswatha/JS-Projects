window.onload = function(){


let today = new Date();
let btn_next = document.getElementById('btn_next');
let btn_prev = document.getElementById('btn_prev');
let text = document.getElementById('text');
let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]


changeDate(today);

function changeDate(date){
text.innerHTML = date.getFullYear()+" "+month[date.getMonth()];
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
