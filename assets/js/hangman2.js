// Global Variables
// =============================================
var words = ["pog", "pie", "cat", "alien", "hicks", "face", "ripley", "newt"];
var randomWord = Math.floor(Math.random() * words.length);
var wordChoice = "";
var blanks = [];
var rightLetter = [];
var wrongLetter = [];
var wins = "";
var losses = "";
console.log(wordChoice);

// Game Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 5;

// DOM Manipulation
// ===================================================
var blanksHTML = document.getElementsByClassName("blanks");
var rightGuess = document.getElementsByClassName("rightLetter");
var wrongGuess = document.getElementsByClassName("wrongLetter");
var winCount = document.getElementsByClassName("wins");
var lossCount = document.getElementsByClassName("losses");
// Function

function startGame() {
    numGuesses = 5
    wordChoice = words[randomWord];
    

}

var generateBlanks = () => {
    for (var i = 0; i < wordChoice.length; i++) {
        blanks.push("-");


    }
    return blanks;
}
console.log(generateBlanks());
console.log(blanks);

document.onkeyup = function (event) {
    var keycode = event.keyCode;
    var keyWord = String.fromCharCode(event.which).toLowerCase();
    console.log(keyWord)

    if (wordChoice.indexOf(keyWord) > -1) {

        rightLetter.push(keyWord);

        blanks[wordChoice.indexOf(keyWord)] = keyWord;

        blanksHTML[0].innerHTML = blanks.join(" ");
        rightGuess[0].innerHTML = rightLetter;


        if (blanks.join("") == wordChoice) {
            winCounter++;
            winCount[0].innerHTML = wins;
            alert("yay");

            console.log(winCounter);
        }
        console.log(rightLetter);

    }
    else
        wrongLetter.push(keyWord);
    wrongGuess[0].innerHTML = wrongLetter;
    console.log(wrongLetter);
    if (blanks.join("") != wordChoice) {
        numGuesses--;

        if (numGuesses === 0) {
            alert("you lose");
            console.log(numGuesses);
        }
    }
    startGame();
}

