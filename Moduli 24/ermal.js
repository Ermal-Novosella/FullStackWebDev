// var buttoni =document.getElementById("btn1");

// buttoni.onclick = function(){
//     alert("Pershendetje.");
// }



var buttoni1 = document.querySelector("button");
var buttoni2 = document.getElementById("btn2");
var buttoni3 = document.getElementById("btn3");
var buttoni4 = document.getElementById("btn4");
var v_button = document.getElementById("btn1");
var v_txt = document.getElementById("txt1");

var buttonihide = document.getElementById("btnhide")

v_button.onclick = function(){
    // v_txt.style.color = "red";
    // v_button.style.backgroundColor = "blue";
    // v_txt.style.textAlign = "center";
    // v_button.style.cssText="color:red; background-color:green; text-align:center;"

v_button.setAttribute("class","test");

}

// buttoni.onclick = function(){
//     alert("Hello");
// }

buttonihide.onclick = function(){
    buttonihide.setAttribute("class","test2");
}


buttoni1.addEventListener("click",function(){
    alert("HELLOOO");
}) 

buttoni2.onmouseover = function(){
    alert("Une jom i 2-ti");
}

buttoni3.onmouseleave = function(){
    alert("une jom i treti");
}
buttoni4.onmouseover = function(){
    alert("une jom i katerti");
}


var divi1 = document.getElementById("rectangle");
var divi2 = document.getElementById("square");
var divi3 = document.getElementById("rrethi");

divi1.setAttribute("class","rec1");
divi2.setAttribute("class","square1");
divi3.setAttribute("class","rreth1");