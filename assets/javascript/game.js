
// create global variables and set them to equal zero as their default value
var wins = 0;
var losses = 0;
var aquaGem = 0;
var redGem = 0;
var blueGem = 0;
var greenGem = 0;
var currentTotal = 0;

//create a random number generator for the computer
var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
var computerNumber = Number(randomNumber);
$("#computer-Number").text(computerNumber);
console.log(computerNumber);

//creat a random number generator function for each crystal image
function crystalRandom() {
    return Math.floor(Math.random() * 12) + 1;
}

//function for everything that needs to occur when the game begins
function startGame() {
    aquaGem = Number(crystalRandom());
    redGem = Number(crystalRandom());
    blueGem = Number(crystalRandom());
    greenGem = Number(crystalRandom());
    currentTotal = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    computerNumber = Number(randomNumber);
    $("#computer-Number").text(computerNumber);
    $("#current-score").text(currentTotal);
}

//create a function to determine if a player has won or lost and then push the scores to the appropriate location. 
//call the start game function to reset scores and randomnized numbers. 
function checkScore() {
    if (currentTotal > computerNumber) {
        losses++;
        alert("You lost! Try again");
        $("#Losses").text(" " + losses);
        startGame();
    } else if (currentTotal === computerNumber) {
        wins++;
        alert("You Won! Please keep playing!");
        $("#Wins").text(" " + wins);
        startGame();
    }
};

$(document).ready(function () {
    //assigned random number for when browser first opens
    startGame()
    //create an on click function for all of the individual crystals/gems and call the checkScore function
    //to see if any conditional criteria is met. 
    $("#aquaGem").click(function () {
        currentTotal += aquaGem;
        $("#current-score").text(currentTotal);
        checkScore();
    });
    $("#redGem").click(function () {
        currentTotal = redGem + currentTotal;
        $("#current-score").text(currentTotal);
        checkScore();
    });
    $("#blueGem").click(function () {
        currentTotal = blueGem + currentTotal;
        $("#current-score").text(currentTotal);
        checkScore();
    });
    $("#greenGem").click(function () {
        currentTotal = greenGem + currentTotal;
        $("#current-score").text(currentTotal);
        checkScore();
    });

});






