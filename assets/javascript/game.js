

// create global variables and set them to equal zero as their default value
var wins = 0;
var losses = 0;
var aquaGem = 0;
var redGem = 0;
var blueGem = 0;
var greenGem = 0;
var currentTotal = 0;
var randomNumber = 0;

randomNumber = [Math.floor(Math.random() * (120 - 19)) + 19];
randomNumber = Number(randomNumber);
$("#computer-Number").text(randomNumber);
console.log(randomNumber);

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

//create a global random number generator for computerGuess
// function computerRandom() {
//     return Math.floor(Math.random() * (120 - 19)) + 19;
// };
// $("#computer-Number").text(computerRandom());
// console.log("computer random: " + computerRandom());

function resetGame() {
    $("#computer-Number").text(computerRandom());
    currentTotal = 0;
    aquaGemRand();
    blueGemRand();
    greenGemRand();
    redGemRand();
}






