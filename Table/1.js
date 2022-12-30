window.onload = function(){

let main = document.getElementsByClassName('main');
let k = 0;

for(let i = 0; i < main[0].children.length; i++){

let elem = main[0].children[i];
elem.onclick = function(){

if(k == 0){
elem.innerHTML = elem.innerHTML.replace('↓', '');
elem.innerHTML = elem.innerHTML.replace('↑', '');
elem.innerHTML += "&#8593;";
k = 1;
change(k,i);
}
else{
elem.innerHTML = elem.innerHTML.replace('↓', '');
elem.innerHTML = elem.innerHTML.replace('↑', '');
elem.innerHTML += "&#8595;";
k = 0;
change(k,i);
}



for(let j = 0; j < main[0].children.length; j++){
if(j != i){
  main[0].children[j].innerHTML = main[0].children[j].innerHTML.replace('↓', '');
  main[0].children[j].innerHTML = main[0].children[j].innerHTML.replace('↑', '');
}
}



}

}

/*Функция сортировки таблицы*/
function change(k,i){

function compareNumbers(a, b) {
    return a - b;
}

let arr = [];

let tr = document.getElementsByTagName('tr');
for(let j = 1; j < tr.length; j++){
arr[j-1] = tr[j].children[i].innerHTML;
}



if(k == 0){
arr = arr.sort((a, b) => b - a);

for(let j = 1; j < tr.length; j++){
tr[j].children[i].innerHTML = arr[j-1];
}

}

else{
arr = arr.sort();

for(let j = 1; j < tr.length; j++){
tr[j].children[i].innerHTML = arr[j-1];
}

}






}

}
