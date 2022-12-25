window.onload = function(){

let body = document.getElementById('body');
let block = document.getElementsByClassName('block');
let delet = document.getElementById('delete');


setTimeout(change, 3000);

function change(){
block[0].removeAttribute("id");
}

delet.onclick = function(){
block[0].remove();
}

}
