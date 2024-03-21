const username = prompt("ENTER USERNAME");
const passcode = prompt("ENTER YOUR PASSCODE");

alert("Welcome, " + username + "! Click OK to play.");

let attempts = 0;
let guessedCorrectly = false;

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = generateRandomNumber(20, 40);

while (attempts < 4 && !guessedCorrectly) {
    const userGuess = parseInt(prompt("Enter Your Lucky Number between 20 and 40."));

    if (userGuess === randomNumber) {
        guessedCorrectly = true;
        alert("Congratulations! You have won 100k the correct number!");
        
    } else {
        attempts++;
        if (attempts < 4) {
            alert("Incorrect guess. Please try again.");
        } else {
            alert("You have exceeded the number of attempts. Please purchase a new coupon to play again.");
        }
    }
}

if (guessedCorrectly) {
    // Award 10% mark for correct guess
    const score = 10;
    alert("You have been awarded " + score + "% mark for guessing the correct number.");
}