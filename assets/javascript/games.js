// Variables
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var cpuChoice = "";
var numberOfTurns = 7;

var playerWins = 0;
var playerLoses = 0;

var computerGuess = letters[Math.floor(Math.random()*letters.length)];
// Ask user what letter am I thinking of
