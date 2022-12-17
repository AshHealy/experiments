// create a game in javascript where you have to guess the culprit of a murder

//This game requires two players

//Player 1:

//Create a variable for the murderer.
let murderer = "";

//Create a function to prompt Player 2 to enter a name of a suspect.
function guessMurderer() {
    murderer = prompt("Player 2, guess who the murderer is!");
}

//Create a variable for the answer.
let answer = "John Smith";

//Create a function to check if the guess is correct.
function checkGuess(){
    if(murderer === answer){
        alert("You guessed correctly! The murderer is John Smith!");
    } else {
        alert("Sorry, that's not the correct answer. Please try again.");
        guessMurderer();
    }
}

//Call the guessMurderer() function.
guessMurderer();

//Call the checkGuess() function.
checkGuess();