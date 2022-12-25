window.onload = function(){

let body = document.getElementById('body');
let block = document.getElementsByClassName('block');
let delet = document.getElementById('delete');

var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);



window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop >= Math.floor(scrollHeight/2)-50 && scrollTop <= Math.floor(scrollHeight/2)+50){
    block[0].removeAttribute("id");
  }
});

delet.onclick = function(){
block[0].remove();
}

}
