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

   
    if(randomNumber>0.6 && randomNumber<1) {
         computerChoice="scissors" 
    }
   else if(randomNumber<0.6 && randomNumber>0.3){
        computerChoice="paper" 
    }
    else if(randomNumber<0.3){
         computerChoice="rock"
    }
    
    if(userChoice===computerChoice){
        $("#result").text("Tie, Try again"); 
    }
    else if( (userChoice==="scissors"&&computerChoice==="paper" )||
    ( userChoice==="rock"&&computerChoice==="paper")||
    ( userChoice==="paper"&&computerChoice==="rock")){
        $("#result").text("User Win"); 
    }
    else if((userChoice==="paper"&&computerChoice==="scissors" )||
    (userChoice==="rock"&&computerChoice==="paper" )||
    (userChoice==="scissors"&&computerChoice==="rock" ))
    {
         $("#result").text("Computer Win"); 
    }
    else{
        $("#result").text("Please check your answer and enter it again"); 
    }
    $("#computerChoice").text(computerChoice);
    $("#input").val("")
});


