window.onload = function(){

let elem = document.getElementsByClassName('elem');
let elem_del = document.getElementById('elem_del');
let text = document.getElementById("text");

elem_del.onclick = function(){
text.value = "";
}

for(let i = 0; i < elem.length; i++){
elem[i].onclick = function(){
if(elem[i].children[0].innerHTML == "÷"){text.value += "/";}
else if(elem[i].children[0].innerHTML == "×"){text.value += "*";}
else if(elem[i].children[0].innerHTML == "="){text.value = calc(text.value);}
else{text.value += elem[i].children[0].innerHTML;}
}
}


function calc(text){
let str = text;
let temp = "";
let arr = [];
let arr2 = [];
let j = 0;
let k = 0;
for(let i = 0; i < str.length; i++){
if(i == str.length-1){temp += str[i]; arr[j] = Number(temp); j++; temp = "";}
else if(str[i] == "+" || str[i] == "-" || str[i] == "*" || str[i] == "/"){arr[j] = Number(temp); j++; temp = ""; arr2[k] = str[i]; k++;}
else{temp += str[i];}
}
console.log(arr);
console.log(arr2);
let res = arr[0];
console.log(res);
for(let i = 1; i < arr.length; i++){
if(arr2[i-1] == "+"){res += arr[i];}
else if(arr2[i-1] == "-"){res -= arr[i];}
else if(arr2[i-1] == "*"){res *= arr[i];}
else if(arr2[i-1] == "/"){res /= arr[i];}
}
console.log(res);
if(isNaN(res)){return str}
return res;
}


}
