window.onload = function(){

  let btn = document.getElementById('btn');
  let rep_btn = document.getElementById('rep_btn');
  let table = document.getElementsByTagName('table');
  let timer = document.getElementById('timer');
  let p = document.getElementsByTagName('p');
  let timerId;
  let color = [];
  let size = [];
  let j = 0;

  for(let i = 15; i < 55; i++){
    size[j] = i;
    j++;
  }

  while (color.length < 100) {
    color.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
  }

  function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
  }

  let n = 25;
  let time = 75;
  let number = [];

  let k = 0;
  while(k < n){
    number[k] = k+1;
    k++;
  }

  let count = 1;
  /**/
  btn.onclick = function(){

    btn.classList.add("off");
    p[0].classList.add("off");
    timer.classList.remove("off");
    rep_btn.classList.remove("off");
    count = 1;

    timerId = setInterval(timeRun, 1000);

    function timeRun(){
      if(time == 0){clearInterval(timerId);
        timer.innerHTML = "Вы проиграли";
        for(let i = 0; i < table[0].children.length; i++){
        table[0].children[i].style = "pointer-events: none;"
        }
      }
      else{timer.innerHTML = "Времени осталось: "+time;}
      time--;
    }

    createTab();

  }
  /**/

  /**/
  rep_btn.onclick = function(){

    count = 1;
    clearInterval(timerId);
    time = 75;

    timerId = setInterval(timeRun, 1000);

    function timeRun(){
      if(time == 0){clearInterval(timerId);
        timer.innerHTML = "Вы проиграли";
        for(let i = 0; i < table[0].children.length; i++){
        table[0].children[i].style = "pointer-events: none;"
        }
      }
      else{timer.innerHTML = "Времени осталось: "+time;}
      time--;
    }

    while (table[0].firstChild) {
      table[0].removeChild(table[0].firstChild);
    }

    let j = 0;

    for(let i = 15; i < 55; i++){
      size[j] = i;
      j++;
    }

    let k = 0;
    while(k < n){
      number[k] = k+1;
      k++;
    }

    createTab();

  }
  /**/

  function createTab(){

    table[0].style = "box-sizing: border-box; display: flex; flex-wrap: wrap; width: 302px;"

    for(let i = 0; i < Math.sqrt(n); i++){
      let tr = document.createElement("tr");
      table[0].appendChild(tr);
      for(let j = 0; j < Math.sqrt(n); j++){
        let td = document.createElement("td");

        /*Рандомное заполнение*/
        let i_number = Math.floor(Math.random() * number.length);
        while(number[i_number] == ""){i_number = Math.floor(Math.random() * number.length);}
        td.innerHTML = number[i_number];
        number[i_number] = "";

        td.style.fontWeight = "700";
        td.style.color = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;

        let i_size = Math.floor(Math.random() * size.length);
        while(size[i_size] == ""){i_size = Math.floor(Math.random() * size.length);}
        td.style.fontSize = size[i_size]+"px";
        size[i_size] = "";

        /*Добавление слушателя при нажатии*/

        td.addEventListener("click",change,td);

        function change(){
          if(Number(td.innerHTML) == count){
            td.style.backgroundColor = "red";
            count++;
          }
          if(count == 26){
            timer.innerHTML = "Вы выиграли";
            clearInterval(timerId);
          }
        }


        tr.appendChild(td);
      }
    }


  }


}
