  window.onload = function(){

  let btn = document.getElementById("btn");
  let radio = document.getElementsByClassName('radio');
  let text = document.getElementsByClassName('text');

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let arr = [0,0,0,0,0,0,0,0,0,0,0,0];
  let t = 0;

  btn.onclick = function(){


  if(t == 0){


  for(let i = 0; i < radio.length; i++){
  if(radio[i].checked != false){
  if(i >= 0 && i <= 4 && text[0].value.length == 0){sum1++; arr[i]++;}
  else if(i >= 5 && i <= 7 && text[1].value.length == 0){sum2++; arr[i]++;}
  else if(i >= 8 && i <= 11 && text[2].value.length == 0){sum3++; arr[i]++;}
  }
  }

  for(let i = 0; i < arr.length; i++){
  if(arr[i] != 0){
    if(i >= 0 && i <= 4 && text[0].value.length == 0){radio[i].parentElement.innerHTML = radio[i].parentElement.innerHTML.substring(0,radio[i].parentElement.innerHTML.lastIndexOf('"')+2) + radio[i].value + "("+Math.floor(arr[i]*100/sum1)+"%)";}
    else if(i >= 5 && i <= 7 && text[1].value.length == 0){radio[i].parentElement.innerHTML = radio[i].parentElement.innerHTML.substring(0,radio[i].parentElement.innerHTML.lastIndexOf('"')+2) + radio[i].value + "("+Math.floor(arr[i]*100/sum2)+"%)";}
    else if(i >= 8 && i <= 11 && text[2].value.length == 0){radio[i].parentElement.innerHTML = radio[i].parentElement.innerHTML.substring(0,radio[i].parentElement.innerHTML.lastIndexOf('"')+2) + radio[i].value + "("+Math.floor(arr[i]*100/sum3)+"%)";}
  }
  }

    btn.value = "Пройти опрос ещё раз";
    t = 1;

     for(let i = 0; i < radio.length; i++){
     radio[i].classList.add("off");
     radio[i].checked = false;
     }

   }

   else if(t == 1){

    btn.value = "Проверить";
    t = 0;

     for(let i = 0; i < radio.length; i++){
     radio[i].classList.remove("off");
     radio[i].checked = false;
     }



   }
   
   for(let i = 0; i < text.length; i++){
   text[i].value = "";
   }

  }

  }
