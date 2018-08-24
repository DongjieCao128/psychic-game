// -------- state of your application & declare variables--------------

var computerChoices = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var losses = 0;
var guessLeft = 10;
var yourGuessSoFar = "";

// ---------- html elements ------
// Selects paragraph with id then select the span to display with the zero index;

var winsSpan = document.getElementById("wins-text").getElementsByTagName("span")[0];
var lossesSpan = document.getElementById("losses-text").getElementsByTagName("span")[0];
var guessLeftSpan = document.getElementById("GuessLeft").getElementsByTagName("span")[0];
var yourGuessSoFarSpan = document.getElementById("yourGuessSoFar").getElementsByTagName("span")[0];


//------this part is to make the variable showsup in textcontent area----------
winsSpan.textContent = win;
lossesSpan.textContent = losses;
guessLeftSpan.textContent = guessLeft;
yourGuessSoFarSpan.textContent = yourGuessSoFar;

//onkeyup to make the event acutally shows up-----------------------

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// 
    if (guessLeft > 0) {
        if (userGuess === computerGuess) {
            win++;
            winsSpan.textContent = win;
        } 
        else {
            losses++;
            lossesSpan.textContent = losses;
        }
    
        if (yourGuessSoFar === "") {
            yourGuessSoFar = userGuess;
        } else {
            yourGuessSoFar = yourGuessSoFar + ", " + userGuess;
        }
    
        yourGuessSoFarSpan.textContent = yourGuessSoFar;
        
    
        guessLeft = guessLeft - 1;
        guessLeftSpan.textContent = guessLeft;

    } else {
        var endMessage = "Game Over! You won " + win + " times and you lost " + losses + " times! Keep playing!?";
        var keepPlaying = confirm(endMessage);

        if (keepPlaying) {
            win = 0;
            losses = 0;
            guessLeft = 10;
            yourGuessSoFar = "";

            winsSpan.textContent = win;
            lossesSpan.textContent = losses;
            guessLeftSpan.textContent = guessLeft;
            yourGuessSoFarSpan.textContent = yourGuessSoFar;
        } else {
            document.getElementsByTagName("body")[0].innerHTML = "<h1>Thank you for playing!</h1>";
        }
        
    }






    // winsSpan.innerHTML = "wins: " + win;
    // lossesSpan.innerHTML = "losses: " + losses;
    // guessLeftSpan.innerHTML = "guess left" + guessLeft;
    // yourGuessSoFar = "";


}