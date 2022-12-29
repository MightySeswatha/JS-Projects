window.onload = function(){

let elem = document.getElementsByClassName("elem");

for(let i = 0; i < elem.length; i++){

elem[i].onclick = function(){

elem[i].classList.add("active");
for(let j = 0; j < elem.length; j++){
if(i != j){elem[j].classList.remove("active");}
}
}

}

}
