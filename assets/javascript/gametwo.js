$(document).ready(function() {
    var crystal;
    var randomNumber;
    var crystalArray = [];
    var thisData = 0;
    var wins = 0;
    var losses = 0;

var crystalArray = [];

        for (var i = 0; i < 4; i++) {
            var randCrystal = Math.floor(Math.random()*12)+1;
            crystalArray.push(randCrystal);
        };

        console.log(randArray);

        $(".crystal").on("click", function(){
            var thisData = $(this).attr("data-value");
            console.log(thisData);
            console.log(crystalArray[thisData]);
        });
    });