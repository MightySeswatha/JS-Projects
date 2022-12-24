  window.onload = function(){

  let btn = document.getElementById('btn');
  let rep_btn = document.getElementById('rep_btn');
  let table = document.getElementsByTagName('table');
  let timer = document.getElementById('timer');
  let p = document.getElementsByTagName('p');
  let color = [];
  let n = 25;
  let time = 75;

  btn.onclick = function(){
  /**/
  btn.classList.add("off");
  p[0].classList.add("off");
  timer.classList.remove("off");
  rep_btn.classList.remove("off");
  /**/
  /**/
  for(let i = 0; i < Math.sqrt(n); i++){
  let tr = document.createElement("tr");
  table[0].appendChild(tr);
  for(let j = 0; j < Math.sqrt(n); j++){
  let td = document.createElement("td");
  tr.appendChild(td);
  }
  }
  /**/
  

  }




  }
