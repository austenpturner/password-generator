const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

// Copy to clipboard function

copyBtn.onclick = function() {
    result.select();
    document.execCommand('Copy');
}

// Generator functions

function getRandomNumber() {
    let number = Math.floor(Math.random() * 10);
    return number;
}

function getRandomUppercase() {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let uppercase = uppercaseLetters[(Math.floor(Math.random() * 26))];
    return uppercase;
}

function getRandomLowercase() {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let lowercase = lowercaseLetters[(Math.floor(Math.random() * 26))];
    return lowercase;
}

function getRandomCharacter() {
    const characters = "@%+\/'!#$^?:,({[)}]~-_.";
    let character = characters[(Math.floor(Math.random() * 22))];
    return character;
}



