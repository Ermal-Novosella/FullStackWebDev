var inputi = document.getElementById("input_id");
var butoni = document.getElementById("btn_id");
var teksti = document.getElementById("teksti_id");


butoni.onclick = function(){
    teksti.innerHTML = inputi.value;
}


var teksti2 = "the best school is digital school"
var result1 = teksti2.search("digital school")
document.getElementById("rez1").innerHTML =result1;


var teksti3 = "the best school is digital school"
var result2 = teksti3.search(/digital school/)
document.getElementById("rez2").innerHTML = result2;


var teksti4 = "the best school is digital school"
var result3 = teksti4.replace(/digital school/ , "Naim Frasheri");
document.getElementById("rez3").innerHTML = result3;


var teksti5 = "abcdef"
var regex = new RegExp("abc")
document.getElementById("rez4").innerHTML = regex.test(teksti5)


var teksti6 = "the best school is digital School"
var regex1 = /school/g;
document.getElementById("rez5").innerHTML = teksti6.match(regex1);


var teksti7 = "the best school is digital School"
var regex2 = /[abc]/g
document.getElementById("rez6").innerHTML = teksti7.match(regex2)


var teksti8 = "the best numbers are 293"
var regex3 = /[0-9]/g;
document.getElementById('rez8').innerHTML = teksti8.match(regex3)


var teksti9 = "100 percent"
var regex4 = /\d/g;
document.getElementById('rez9').innerHTML = teksti9.match(regex4)


var teksti10 = "hellooooo, helloo, helllooo"
var regex5 = /o{3,5}/g
document.getElementById('rez10').innerHTML = teksti10.match(regex5);


var teksti11 = "bestfriend, girlfriend, boyfriend"
var regex6 = /end$/g
document.getElementById("rez11").innerHTML = teksti11.match(regex6)


var teksti12 = "cat, catalog, category"
var regex7 = /^cat/g;
document.getElementById("rez12").innerHTML = teksti12.match(regex7)