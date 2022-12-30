window.onload = function(){

let elem = document.getElementsByClassName("elem");
let tab = document.getElementsByClassName('tab');

for(let i = 0; i < elem.length; i++){

elem[i].onclick = function(){

elem[i].classList.add("active");
tab[i].classList.add("on");
tab[i].style.height = "100%";
for(let j = 0; j < elem.length; j++){
if(i != j){elem[j].classList.remove("active");
tab[j].classList.remove("on");
tab[j].style.height = "0";}
}
}

}

}
