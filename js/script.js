// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice=$("#input").val();
var computerChoice
var winner
var randomNumber=Math.random();



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function() {
     randomNumber=Math.random();
     userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    alert(randomNumber);
   
    if(randomNumber>0.6 && randomNumber<1) {
         computerChoice="scissors" 
    }
   else if(randomNumber<0.6 && randomNumber>0.3){
        computerChoice="paper" 
    }
    else if(randomNumber<0.3){
         computerChoice="rock"
    }
    
    $("#computerChoice").text(computerChoice);
});


