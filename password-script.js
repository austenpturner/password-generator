const lengthOp = document.getElementById('length');
const numbersOp = document.getElementById('numbers');
const uppercaseOp = document.getElementById('uppercase');
const lowercaseOp = document.getElementById('lowercase');
const charactersOp = document.getElementById('characters');
const generateBtn = document.getElementById('generateBtn');
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



