// 1. select a few words for hangman
// 2. Choose a word from the list of words.
// 3. Prompt the user to enter a key
// 4. User inputs a key
// 5. convert that to lower case
// 6. Set number of GUesses remaining to 12
// 7. if user does not guess, decrement # of Guesses Remaining by 1...and display the guessed letter as a Captitalized character. 
// 8. If user guesses the correct letter, display the letter in the guess area. [probably use getElementbyId]
// 9. If the user does not guess in 12 tries, then display "Try Again" and reset the game with another word.
// 10. If the user guesses the word, then increment the # of wins by 1. AND display the associated picture/Text/Sound byte. [Can use getElementById for this]
// 11. Reset the game with another word.


/*Word Guess Game Bonuses
Play a sound or song when the user guesses their word correctly, like in our demo.
Write some stylish CSS rules to make a design that fits your game's theme.
HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
Save your whole game and its properties in an object.
Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
Don't forget to place your global variables and functions above your object.
Remember: global variables, then objects, then calls.*/

// Coding ideas:
// Use https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison for accepting input and checking against it.

// SuperHero Theme: Superman, Batman, Thor, Aquaman, Spiderman, Hulk, 

//Declarding variable and array//
var superHeroes = ["superman", "thor", "hulk", "aquaman"]; //selectableWords

var currentWord; //the word that needs to be guessed represented by Dashes, when not guessed

var dashes = []; //current word in dashes

var userGuess;

var remainGuesses = 12; //maxTries

var wins = 0;

var guessedLetters = [];



function gameBegin() {
    currentWord = superHeroes[Math.floor(Math.random() * superHeroes.length)];
    for (var i = 0; i < currentWord.length; i++) {
    dashes[i] = "_";
}
    guessedLetters = currentWord.length;
    while (remainGuesses > 0) {
    prompt (dashes.join(" "));  
}
document.onkeyup = function(event) {
          userGuess = String.fromCharCode(event.keyCode).toLowerCase();
          for (var j = 0; j < currentWord.length; j++){
              if (guessedLetters[j] === userGuess) {
                  dashes [j] = userGuess;
                  numberOfGuesses--;
              }
              console.log (guessedLetters[j]);
          }
        }
}



// var guessWord = superHeroes[0]; //Needs to be length of the string...and NEEDS TO LOOP

// var dashes = [];
// for (var i = 0; i < guessWord.length; i++){
//     dashes[i] = "_";
// }

// var remainGuesses = guessWord.length;

// while (remainGuesses > 0) {
//     console.log (dashes.join(" "));  
// }

// var guess;
// document.onkeyup = function(event) {
//       var guess = String.fromCharCode(event.keyCode).toLowerCase();
//       for (var j = 0; j < guessWord.length; j++){
//           if (guessWord[j] === guess) {
//               dashes [j] = guess;
//               remainGuesses--;
//           }
//       }
// }


// var hangman = ["_", "_", ]
// var numberGuesses = 12;

// var score = 0;

// function dashes(){}



// for (var i=0) {

// }