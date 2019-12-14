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
    let uppercase = uppercaseLetters[(Math.floor(Math.random() * uppercaseLetters.length))];
    return uppercase;
}

function getRandomLowercase() {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let lowercase = lowercaseLetters[(Math.floor(Math.random() * lowercaseLetters.length))];
    return lowercase;
}

function getRandomSpecial() {
    const characters = "@%+\/'!#$^?:,({[)}]~-_.";
    let character = characters[(Math.floor(Math.random() * characters.length))];
    return character;
}

function getRandomCharacter() { 
    let items = [];
    if (numbersOp.checked) {
        items += getRandomNumber();
    }
    if (lowercaseOp.checked) {
        items += getRandomUppercase();
    }
    if (uppercaseOp.checked) {
        items += getRandomLowercase();
    }
    if (charactersOp.checked) {
        items += getRandomSpecial();
    }
    if (items.length === 0) {
        return '';
    }
    let item = items[(Math.floor(Math.random() * items.length))];
    return item;
}

function generatePassword() {
    result.value = '';
    const length = parseInt(lengthOp.value);
    var password = '';
    for (var i = 0; i < length; i++) {
        password += getRandomCharacter();
    }
    result.value = password;
}

generateBtn.addEventListener('click', () => {
    generatePassword();
})