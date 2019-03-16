var word = document.querySelector(".word");
var body = document.getElementsByTagName("body");
var options = [
    { name: "aragorn", image: "assets/images/aragorn.png", sound: "assets/javascript/attention.mp3" },
    { name: "frodo", image: "assets/images/frodo.png", sound: "assets/javascript/endofallthings.mp3" },
    { name: "gandalf", image: "assets/images/gandalf.png", sound: "assets/javascript/clever.mp3" },
    { name: "gollum", image: "assets/images/gollum.png", sound: "assets/javascript/catchfish.mp3" },
    { name: "boromir", image: "assets/images/boromir.png", sound: "assets/javascript/today.mp3" },
    { name: "gimli", image: "assets/images/gimli.png", sound: "assets/javascript/distances.mp3" },
    { name: "samwise", image: "assets/images/samwise.png", sound: "assets/javascript/carryyou.mp3" },
    { name: "saruman", image: "assets/images/saruman.png", sound: "assets/javascript/dawn.mp3" },
    { name: "theodin", image: "assets/images/theodin.png", sound: "assets/javascript/reddawn.mp3" }
];
var guess = document.getElementById("guess");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterPosition = Math.floor(Math.random() * Math.floor(options.length));
var remaining = document.getElementById("remaining");
let guessLeft = 10;
var winner = document.getElementById("wins");
var loser = document.getElementById("losses");
var losses = 0;
var wins = 0;
var character = options[characterPosition].name;
var body = document.querySelector("body");
var loseSound = document.getElementById("pass");
var img = document.getElementsByTagName("img");
var images = document.getElementById("images");
var picture = document.createElement("img");
var hear = document.createElement("audio");
var blanks = [];

// console.log(characterPosition)

// Selects random word from options array
const randomWord = () => {
    blanks = [];
    characterPosition = Math.floor(Math.random() * Math.floor(options.length));
    character = options[characterPosition].name;
    console.log(character);
    for (i = 0; i < character.length; i++) {
        blanks.push("_");
    }
    word.innerHTML = blanks.join("");
}

// Resets the game and adds a loss to the "Loss" category
const lossReset = () => {
    losses += 1;
    loser.innerHTML = losses;
    loseSound.play();
    guessLeft = 10;
    remaining.innerHTML = 10;
    guess.innerHTML = "";
    randomWord();
}

const win = () => {
    if (blanks.indexOf("_") === -1) {
        let image = options[characterPosition].image;
        let sound = options[characterPosition].sound;
        let attr = document.createAttribute("src");
        let soundAttr = document.createAttribute("src");
        attr.value = image;
        picture.setAttributeNode(attr);
        images.appendChild(picture);
        soundAttr.value = sound;
        hear.setAttributeNode(soundAttr);
        body.appendChild(hear);
        hear.play();
        wins += 1;
        winner.innerHTML = wins;
        guess.innerText = "";
        guessLeft = 10;
        remaining.innerText = guessLeft;
        randomWord()
    }
}

randomWord();
console.log(blanks);

document.onkeyup = function (event) {

    for (i = 0; i < character.length; i++) {
        if (event.key === character[i]) {
            blanks[i] = character[i].toUpperCase();
            word.innerText = blanks.join("");
            win();
        } else {
            for (j = 0; j < guessLeft; j++) {
                if (character.indexOf(event.key) === -1 && alphabet.indexOf(event.key) !== -1 && guess.innerText.indexOf(event.key) === -1) {
                    guess.innerText += event.key;
                    guessLeft--;
                    remaining.innerText = guessLeft;
                    if (guessLeft === 0) {
                        lossReset();
                    }
                }
            }
        }
    }
}