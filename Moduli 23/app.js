//funksionet

function showmessage(){
    alert("this message blah blah");
}
showmessage();


function sum(number1, number2){
    return number1 + number2
}
console.log (sum(30,100))
function cElcius(f){
    return (5/9)*(f-32);
}
console.log("54 Farhenheit is equal to "+cElcius(54)+" celcius");


function ds(){
    var lokale = "Shkolla Digjitale"
    alert (lokale)
}
ds();
// alert(lokale) - nuk punon;


function toSekonda(minuta){
    return minuta * 60;
}
console.log(toSekonda(34)+" Sekonda")

function triangle(gjatesia, gjeresia){
    return 0.5 * gjatesia * gjeresia;
}
console.log(triangle(30,40));

//Objektet

var car ={
    name:"Ferrari",
    color:"black",
    year:2024,
    km:0,
    startengine:function(){
        alert("Ndezje");
    },
    get getkm(){
        return this.km;
    },
    set setkm(k){
        this.km = k
    }
}
console.log(car.getkm);

car.setKm = 100

console.log(car.getkm);

alert(car['color']);

car.startengine();


var shkolla={
    emri:"ermal",
    mbiemri: "novosella",
    students:1500,
    year: 2019
}
