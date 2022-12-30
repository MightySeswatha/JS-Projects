window.onload = function(){

let main = document.getElementsByClassName('main');
let k = 0;
let tr = document.getElementsByTagName("tr");
let table = document.getElementsByTagName("table");

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
let obj = {};
obj[tr[j].children[i].innerHTML] = j;
arr[j-1] = obj;
}

let res = [];

if(k == 0){

let arr1 = [];
for(let j = 0; j < arr.length; j++){
arr1[j] = Object.keys(arr[j])[0];
}

arr1 = arr1.sort((a, b) => b - a);
console.log(arr1);
let x = 0;

for(let j1 = 0; j1 < arr.length; j1++){
for(let j2 = 0; j2 < arr1.length; j2++){
if(arr[j1][arr1[j2]] != undefined){res[x] = j2+1; x++}
}
}

console.log(res);

}

else{

let arr1 = [];
for(let j = 0; j < arr.length; j++){
arr1[j] = Object.keys(arr[j])[0];
}

arr1 = arr1.sort();

let x = 0;


for(let j1 = 0; j1 < arr.length; j1++){
for(let j2 = 0; j2 < arr1.length; j2++){
if(arr[j1][arr1[j2]] != undefined){res[x] = j2+1; x++}
}
}



}


for(let i1 = 1; i1 < tr.length; i1++){
console.log(tr[res[i1-1]].innerHTML);
}

}




}
