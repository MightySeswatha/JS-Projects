window.onload = function(){

let elem = document.getElementsByClassName('elem');
let elem_del = document.getElementsByClassName('elem_del');

for(let i = 0; i < elem.length; i++){

elem[i].onfocus = function(){
elem[i].style.backgroundColor = "black";
elem[i].style.color = "white";
}

}

}
