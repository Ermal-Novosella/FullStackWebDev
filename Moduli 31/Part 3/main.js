var numberSelect = document.getElementById("nrSelect");
var buttonGuess = document.getElementById("btnGuess");

var count = 1;

var guessNumber = false;

buttonGuess.onclick = function(){
    count = 1;
    guessNumber = false;
    

    while(guessNumber == false){
        var random = Math.floor(Math.random()*6);
        console.log(random);
        if(numberSelect.value == random){
            guessNumber = true;
            console.log("You guessed : "+ count + " times" )
        }
        else{
            count = count+1;
        }
    }
}