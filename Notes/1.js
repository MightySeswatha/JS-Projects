  window.onload = function(){
  let list = document.getElementsByClassName('list');
  let inp = document.getElementsByTagName('input');

inp[0].onfocus = function(){

  document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter' && inp[0].value != "") {
      /**/
      let del = document.createElement("div");
      del.classList.add("del");
      del.innerHTML = "X";
      del.addEventListener("click", () => del.parentElement.remove() );
      /**/
      let check = document.createElement("input");
      check.type = "checkbox";
      check.addEventListener("click", () => check.parentElement.children[1].style.textDecoration = "line-through");
      check.addEventListener("click", () => check.parentElement.children[2].remove());
    check.addEventListener("click", () => check.remove());
      /**/
      let elem = document.createElement("div");
      elem.classList.add("block");
      list[0].appendChild(elem);
      elem.appendChild(check);
      let p = document.createElement("p");
      p.innerHTML = inp[0].value;
      elem.appendChild(p);
      elem.appendChild(del);
      inp[0].value = "";

      /**/
    }
  });

}



  }
