$(document).ready(function () {


    // create global variables and set them to equal zero as their default value
    var wins = 0;
    var losses = 0;
    var aquaGem = 0;
    var redGem = 0;
    var blueGem = 0;
    var greenGem = 0;
    var currentTotal = 0;
    var computerNumber = 0;

    //create a random number generator for the computer
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    computerNumber = Number(randomNumber);
    $("#computer-Number").text(computerNumber);
    console.log(computerNumber);

    //creat a random number generator function for each crystal image
    function aquaGemRand() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("aquaGem random: " + aquaGemRand());
    function redGemRand() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("redGem random: " + redGemRand());
    function blueGemRand() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("blueGem random: " + blueGemRand());
    function greenGemRand() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("greenGem random: " + greenGemRand());

    //create a reset function for when a player wins or loses so that the values change
    function reset() {
        $("#computer-Number").text(computerNumber);
        currentTotal = 0;
        aquaGemRand();
        redGemRand();
        blueGemRand();
        greenGemRand();
    }

    //create a function to determine if a player has won or lost and then push the scores to the appropriate location 
    var scoreChecker = function () {
        if (currentTotal > computerNumber) {
            losses++
            alert("You lost! Try again");
            $("#losses").text(losses);
            reset();
            currentTotal = 0;
        }

        if (currentTotal === computerNumber) {
            wins++;
            alert("You Won! Please keep playing!");
            $("#Wins").text(wins);
            reset();
            currentTotal = 0;
        }
    }


    //create an on click function for all of the individual crystals/gems
    $("#aquaGem").on("click", function() {
        $("#current-score").text(aquaGemRand + currentTotal);
    }); 
    $("#redGem").on("click", function() {
        $("#current-score").text(redGemRand + currentTotal);
    }); 
    $("#blueGem").on("click", function() {
        $("#current-score").text(blueGemRand + currentTotal);
    }); 
    $("#greenGem").on("click", function() {
        $("#current-score").text(greenGemRand + currentTotal);
    }); 
    






});






