// Array of choices
var cpuChoices = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Variables for players Wins,Losses, and Guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterGuessed = [];
var computerGuess = [];

//Initial computer letter
window.onload = function() {
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}

//Game Time!
document.onkeyup = function(event) {
    var playerGuess = event.key;
    letterGuessed.push(playerGuess);
    console.log(computerGuess[0]);
}