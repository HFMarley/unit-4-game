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
    aquaGem = Number(aquaGemRand());

    function redGemRand() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("redGem random: " + redGemRand());
    redGem = Number(redGemRand());

    function blueGemRand() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("blueGem random: " + blueGemRand());
    blueGem = Number(blueGemRand());

    function greenGemRand() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("greenGem random: " + greenGemRand());
    greenGem = Number(greenGemRand());

    // var gemReset = function() {
    //     aquaGem = Math.floor(Math.random() * 11)+1;
    //     aquaGem = Number(aquaGem);
    //     redGem = Math.floor(Math.random() * 11)+1;
    //     redGem = Number(redGem);
    //     blueGem = Math.floor(Math.random() * 11)+1;
    //     blueGem = Number(blueGem);
    //     blueGem = Math.floor(Math.random() * 11)+1;
    //     blueGem = Number(blueGem);
    // }


    //create a reset function for when a player wins or loses so that the values change
    // function reset() {
    //     $("#computer-Number").text(computerNumber);
    //     currentTotal = 0;
    //     aquaGemRand();
    //     redGemRand();
    //     blueGemRand();
    //     greenGemRand();
    // }

    //create a function to determine if a player has won or lost and then push the scores to the appropriate location 
    checkScore = function () {
        // console.log(currentTotal, computerNumber)
        if (currentTotal > computerNumber) {
            losses++;
            alert("You lost! Try again");
            $("#Losses").text(" " + losses);
            currentTotal = 0;
            randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
            computerNumber = Number(randomNumber);
            $("#computer-Number").text(computerNumber);
            function aquaGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("aquaGem random: " + aquaGemRand());
            aquaGem = Number(aquaGemRand());
        
            function redGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("redGem random: " + redGemRand());
            redGem = Number(redGemRand());
        
            function blueGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("blueGem random: " + blueGemRand());
            blueGem = Number(blueGemRand());
        
            function greenGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("greenGem random: " + greenGemRand());
            greenGem = Number(greenGemRand());
        } else if (currentTotal === computerNumber) {
            wins++;
            alert("You Won! Please keep playing!");
            $("#Wins").text(" " + wins);
            currentTotal = 0;
            randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
            computerNumber = Number(randomNumber);
            $("#computer-Number").text(computerNumber);
            function aquaGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("aquaGem random: " + aquaGemRand());
            aquaGem = Number(aquaGemRand());
        
            function redGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("redGem random: " + redGemRand());
            redGem = Number(redGemRand());
        
            function blueGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("blueGem random: " + blueGemRand());
            blueGem = Number(blueGemRand());
        
            function greenGemRand() {
                return Math.floor(Math.random() * 12) + 1;
            }
            console.log("greenGem random: " + greenGemRand());
            greenGem = Number(greenGemRand());
        }
    };


    //create an on click function for all of the individual crystals/gems
    $("#aquaGem").click(function () {
        currentTotal = aquaGem + currentTotal
        $("#current-score").text(currentTotal);
        checkScore();
    });
    $("#redGem").click(function () {
        currentTotal = redGem + currentTotal
        $("#current-score").text(currentTotal);
        checkScore();
    });
    $("#blueGem").click(function () {
        currentTotal = blueGem + currentTotal
        $("#current-score").text(currentTotal);
        checkScore();
    });
    $("#greenGem").click(function () {
        currentTotal = greenGem + currentTotal
        $("#current-score").text(currentTotal);
        checkScore();
    });







});






