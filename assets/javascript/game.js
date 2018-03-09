$(document).ready(function() {

    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;
    var randomNumber;
    var result = 0;
    var wins = 0;
    var losses = 0;

function beginGame() 
{
    
    crystalOne = parseInt(Math.floor(Math.random() * 12) + 1);
console.log(crystalOne);
    crystalTwo = parseInt(Math.floor(Math.random() * 12) + 1); 
console.log(crystalTwo);
    crystalThree = parseInt(Math.floor(Math.random() * 12) + 1); 
console.log(crystalThree);
    crystalFour = parseInt(Math.floor(Math.random() * 12) + 1); 
console.log(crystalFour);
    randomNumber = parseInt(Math.floor(Math.random() * 120) + 19); 
console.log(randomNumber);

$("#result").empty();
$("#randomNumber").text(randomNumber);
  }


$(".crystalOne").on("click", function() {
    result += crystalOne;
    console.log("result:" + result)
      $("#result").text(result);
      checkWinner();
    });
$(".crystalTwo").on("click", function() {
    result += crystalTwo;
      $("#result").text(result);
      checkWinner();
    });
$(".crystalThree").on("click", function() {
    result += crystalThree;
      $("#result").text(result);
      checkWinner();
    });
$(".crystalFour").on("click", function() {
    result += crystalFour;
      $("#result").text(result);
      checkWinner();
    });

  function checkWinner (){
      console.log("checking winner");
    if (result === randomNumber) {
        wins ++
        $("#wins").text(wins);
        result = 0;
        beginGame();
        console.log("win")
    }
    else if (result > randomNumber) {
        losses ++
        console.log("loss")
        $("#losses").text(losses);
        result = 0;
        beginGame();

    }
  }
beginGame();  
    });     
    
    