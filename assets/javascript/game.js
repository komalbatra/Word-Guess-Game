// Declaring Variables
var superHeroes = ["superman", "thor", "hulk", "batman", "flash"]; 

var currentWord; //the word that needs to be guessed represented by Dashes, when not guessed

var dashes; //current word in dashes

var wrongLetters;

var remainingGuesses;

var wins = 0;

var letter;

// begining of game that resets everything
function gameBegin() {
    remainingGuesses = 12;
    dashes = []; 
    wrongLetters = [];
    currentWord = superHeroes[Math.floor(Math.random() * superHeroes.length)];
    
    for (var i = 0; i < currentWord.length; i++) {
        dashes.push ("_");
    }
        document.querySelector("#currentWord").innerHTML = dashes.join(" ");
        document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#guessedLetters").innerHTML = "";
        }


// Game Play function
function playGame(letter) {
    if (currentWord.indexOf(letter) === -1){
        var repeatLetter = false; 
        for(var k = 0 ; k < wrongLetters.length; k++){
            if(wrongLetters[k]===letter){
                repeatLetter = true;
            }
        }
            if (!repeatLetter){
                wrongLetters.push(letter);
                document.querySelector ("#guessedLetters").innerHTML = wrongLetters.join(" , ");
                remainingGuesses--;
        } 
        
        document.querySelector ("#remainingGuesses").innerHTML = remainingGuesses;
        } else {
        for (var j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === letter) {
                dashes[j] = letter;
                remainingGuesses--;
                document.querySelector ("#remainingGuesses").innerHTML = remainingGuesses;
            }
        }
        document.querySelector ("#currentWord").innerHTML = dashes.join(" ");
        }
    }

// Function checks for result
function resultCheck(){
    if (dashes.indexOf("_") === -1)
    {
        document.querySelector ("#wins").innerHTML = wins;
        document.querySelector ("#result").innerHTML = ("You Won");
        wins++;
        document.querySelector ("#winMusic").play();
        gameBegin();
        
        }
    if (remainingGuesses === 0) {
        document.querySelector ("#result").innerHTML = ("You Lost. Try Again");
        document.querySelector ("#looseMusic").play();
        gameBegin();
        }
    if ((remainingGuesses >0)&&(remainingGuesses<12)){    
        document.querySelector ("#result").innerHTML = "";
    }
    }

    // key press function
    document.onkeyup = function (event) {
        var letter = event.key.toLowerCase();
        playGame (letter);
        resultCheck ();
    };

   gameBegin();
