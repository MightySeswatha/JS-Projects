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
    let arr1 = [];
    if(k == 0){


      for(let j = 0; j < arr.length; j++){
        arr1[j] = Object.keys(arr[j])[0];
      }

      arr1 = arr1.sort();



      for(let j2 = 0; j2 < arr1.length; j2++){
        for(let j1 = 0; j1 < arr.length; j1++){


          if(arr[j1][arr1[j2]] != undefined){res[j2] = arr[j1][arr1[j2]]}

        }
      }

      res.reverse();


    }

    else{


      for(let j = 0; j < arr.length; j++){
        arr1[j] = Object.keys(arr[j])[0];
      }

      arr1 = arr1.sort();


      for(let j2 = 0; j2 < arr1.length; j2++){
        for(let j1 = 0; j1 < arr.length; j1++){


          if(arr[j1][arr1[j2]] != undefined){res[j2] = arr[j1][arr1[j2]]}

        }
      }





    }

    let last = [];
    for(let i1 = 1; i1 < tr.length; i1++){
      last[i1-1] = tr[res[i1-1]].innerHTML;
    }

    for(let i2 = 1; i2 < tr.length; i2++){
      tr[i2].innerHTML = last[i2-1];
    }


  }




}
