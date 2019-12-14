const lengthInput = document.getElementById('length');
const numbersCheckbox = document.getElementById('numbers');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const charactersCheckbox = document.getElementById('characters');
const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

// Copy to clipboard function

copyBtn.onclick = function() {
    result.select();
    document.execCommand('Copy');
}

// Random character functions

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
    if (numbersCheckbox.checked) {
        items += getRandomNumber();
    }
    if (lowercaseCheckbox.checked) {
        items += getRandomUppercase();
    }
    if (uppercaseCheckbox.checked) {
        items += getRandomLowercase();
    }
    if (charactersCheckbox.checked) {
        items += getRandomSpecial();
    }
    if (items.length === 0) {
        return '';
    }
    let item = items[(Math.floor(Math.random() * items.length))];
    return item;
}

// Password function

function generatePassword() {
    result.value = '';
    const length = parseInt(lengthInput.value);
    var password = '';
    for (var i = 0; i < length; i++) {
        password += getRandomCharacter();
    }
    result.value = password;
}

// Generate button event listener

generateBtn.addEventListener('click', () => {
    generatePassword();
})