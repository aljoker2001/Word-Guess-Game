var word = document.querySelector(".word");
var body = document.getElementsByTagName("body")
var options = ["Aragorn", "Frodo", "Gandalf", "Gollum", "Boromir", "Gimli", "Legolas", "Samwise", "Saruman"];
var guess = document.getElementById("guess");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterPosition = Math.floor(Math.random() * Math.floor(options.length));
var remaining = document.getElementById("remaining");
let guessLeft = 10;
var winner = document.getElementById("wins");
var loser = document.getElementById("losses");
var losses = 0;
var wins = 0;
var character = options[characterPosition].toLowerCase();

console.log(characterPosition)

// Selects random word from options array
const randomWord = () => {
    let blanks = "";
    character = options[Math.floor(Math.random() * Math.floor(options.length))].toLowerCase();
    console.log(character);
    for (i = 0; i < character.length; i++) {
        blanks += "_";
    }
    word.innerHTML = blanks;
}

// Decreases number in "Guesses Remaining" column by one
const decreaseGuess = () => {
    if (guessLeft > 0) {
        guessLeft--;
        remaining.innerHTML = guessLeft;
    }
}

// Resets the game and adds a loss to the "Loss" category
const lossReset = () => {
    if (guessLeft === 0) {
        losses += 1;
        loser.innerHTML = losses;
        guessLeft = 10;
        remaining.innerHTML = 10;
        guess.innerHTML = "";
        randomWord();
    }
}

randomWord();

document.onkeyup = function(event) {
    // let character = options[characterPosition].toLowerCase();
    // Adds letter to "Letters Guessed" column if they are valid characters, have not yet been guessed, and are not in the current word to be guessed
    if (alphabet.indexOf(event.key) !== -1 && character.indexOf(event.key) === -1 && guess.innerHTML.indexOf(event.key) === -1) {
        console.log(character);
        var choice = event.key;
        guess.innerHTML += choice;
        decreaseGuess();
        lossReset();
        // If a valid letter that has not been guessed, adds that letter to word to be guessed
    } else if (alphabet.indexOf(event.key) !== -1 && character.indexOf(event.key) !== -1 && word.innerHTML.indexOf(event.key) === -1) {
        word.innerHTML += event.key;
        if (word.indexOf(choice) ) {
            return
        } else {
            for (i = 0; i < character.length; i++) {
                if (choice === character[i]) {
                    word.innerHTML += choice;
                }
            }
        }
    }
}