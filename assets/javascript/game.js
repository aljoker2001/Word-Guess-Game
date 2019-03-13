var word = document.querySelector(".word");
var body = document.getElementsByTagName("body");
var options = ["Aragorn", "Frodo", "Gandalf", "Gollum", "Boromir", "Gimli", "Samwise", "Saruman", "Theodin"];
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
var samwise = document.getElementById("samwise");
var aragorn = document.getElementById("aragorn");
var gollum = document.getElementById("gollum");
var saruman = document.getElementById("saruman");
var frodo = document.getElementById("frodo");
var theodin = document.getElementById("theodin");
var gandalf = document.getElementById("gandalf");
var gimli = document.getElementById("gimli");
var boromir = document.getElementById("boromir");
var loseSound = document.getElementById("pass");
var araImg = document.getElementById("araImg");
var samImg = document.getElementById("samImg");
var golImg = document.getElementById("golImg");
var sarImg = document.getElementById("sarImg");
var gimImg = document.getElementById("gimImg");
var froImg = document.getElementById("froImg");
var theImg = document.getElementById("theImg");
var borImg = document.getElementById("borImg");
var ganImg = document.getElementById("ganImg");
var img = document.getElementsByTagName("img");
var blanks = [];

console.log(characterPosition)

// Selects random word from options array
const randomWord = () => {
    blanks = [];
    character = options[Math.floor(Math.random() * Math.floor(options.length))].toLowerCase();
    console.log(character);
    for (i = 0; i < character.length; i++) {
        blanks.push("_");
    }
    word.innerHTML = blanks.join("");
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
        loseSound.play();
        guessLeft = 10;
        remaining.innerHTML = 10;
        guess.innerHTML = "";
        randomWord();
    }
}

// Upon winning, this increase the "wins" by 1, hides the image, and puts up a new word
const winReset = () => {
    wins += 1;
    winner.innerHTML = wins;
    // img.style.display = "none";
    randomWord()
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

randomWord();
console.log(blanks);

document.onkeyup = function (event) {
    // let character = options[characterPosition].toLowerCase();
    // Adds letter to "Letters Guessed" column if they are valid characters, have not yet been guessed, and are not in the current word to be guessed
    if (alphabet.indexOf(event.key) !== -1 && character.indexOf(event.key) === -1 && guess.innerHTML.indexOf(event.key) === -1) {
        console.log(character);
        var choice = event.key;
        guess.innerHTML += choice;
        decreaseGuess();
        lossReset();
        // If a valid letter that has not been guessed, adds that letter to word to be guessed
    } else if (alphabet.indexOf(event.key) !== -1 && character.indexOf(event.key) !== -1) {
        if (blanks.indexOf("_") === -1 && character === "aragorn") {
            console.log(blanks, blanks.indexOf("_"));
            araImg.style.dislpay = "block";
            aragorn.play();
            araImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "gollum") {
            console.log(blanks, blanks.indexOf("_"));
            golImg.style.dislpay = "block";
            gollum.play();
            golImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "saruman") {
            console.log(blanks, blanks.indexOf("_"));
            sarImg.style.dislpay = "block";
            saruman.play();
            sarImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "frodo") {
            console.log(blanks, blanks.indexOf("_"));
            froImg.style.dislpay = "block";
            frodo.play();
            sarImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "theodin") {
            console.log(blanks, blanks.indexOf("_"));
            theImg.style.dislpay = "block";
            theodin.play();
            sarImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "samwise") {
            console.log(blanks, blanks.indexOf("_"));
            samImg.style.dislpay = "block";
            samwise.play();
            sarImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "gandalf") {
            console.log(blanks, blanks.indexOf("_"));
            ganImg.style.dislpay = "block";
            gandalf.play();
            sarImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "gimli") {
            console.log(blanks, blanks.indexOf("_"));
            gimImg.style.dislpay = "block";
            gimli.play();
            sarImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else if (blanks.indexOf("_") === -1 && character === "boromir") {
            console.log(blanks, blanks.indexOf("_"));
            borImg.style.dislpay = "block";
            boromir.play();
            sarImg.style.display = "none";
            setTimeout(winReset(), 5000);
        } else {
            console.log(blanks, "high five");
            for (j = 0; j < character.length; j++) {
                if (event.key === character[j]) {
                    blanks[j] = character[j].toUpperCase();
                    console.log(blanks);
                    word.innerHTML = blanks.join("");
                }

            }
        }
    }
}