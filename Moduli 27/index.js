for (var i = 0; i<10;i++){
    console.log(i);
}

var persona = {emri:"Ermal ", mbiemri: "Novosella "  , mosha: 16};

var text = '';

var z;

for(z in persona){
    text += persona[z];
}
console.log(text);

var emrat = ["Ermal" , "Anila" , "Rilind"];

var y;

for(y of emrat){
    console.log(y);
}

var f = 0;


do {
    console.log(f);
} while (f>5);

var x = 0;
while(x<=16){
    x=x+1;
    console.log(x);
}


var e = 0;
var n = 0;
while(e<3){
    e++;
    n+= e;
    console.log(e);
    console.log(n);
}

var a;
var emrat=['Ermal','Rilind','Diart'];
for (a of emrat){
    console.log(a);
}

var names_input = document.getElementById("inputi");
var btnAdd = document.getElementById("btnAdd");
var btnShow = document.getElementById("btnShow");

btnAdd.onclick=function(){
    emrat.push(names_input.value);
}
btnShow.onclick = function(){
    for(var k=0; k<emrat.length; k++){
        document.write(emrat[k] + "<br>")
    }
}



