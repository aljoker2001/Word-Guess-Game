var word = document.querySelector(".word");
var body = document.getElementsByTagName("body")
var options = ["Aragorn", "Frodo", "Gandalf", "Gollum", "Boromir", "Gimli", "Legolas", "Samwise", "Saruman"];
var guess = document.getElementById("guess");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const randomWord = () => {
    let choice = Math.floor(Math.random() * Math.floor(options.length));
    let blanks = "";
    for (i = 0; i < options[choice].length; i++) {
        blanks += "_ ";
    }
    word.innerHTML = blanks;
}

var start = () => {
}

document.onkeyup = function(event) {
    if (alphabet.indexOf(event.key) !== -1) {
        var choice = event.key;
    } else {
        var choice = "";
    }
    let wordChoice = Math.floor(Math.random() * Math.floor(options.length));
    guess.innerHTML = choice;
    

}

// body.addEventListener("key", randomWord);