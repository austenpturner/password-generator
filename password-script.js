// DOM variables

const lengthInput = document.getElementById('length');
const numbersCheckbox = document.getElementById('numbers');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const charactersCheckbox = document.getElementById('characters');
const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

// Character variables

const numbers = "0123456789";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@%+\/'!#$^?:,({[)}]~-_.";

// Copy to clipboard function

copyBtn.onclick = function() {
    result.select();
    document.execCommand('Copy');
}

// Random character functions

function getRandomItem(type) {
    let items = type;
    let item = items[(Math.floor(Math.random() * items.length))];
    return item;
}

function getRandomCharacter() { 
    let items = [];
    if (numbersCheckbox.checked) {
        items += getRandomItem(numbers);
    }
    if (uppercaseCheckbox.checked) {
        items += getRandomItem(uppercaseLetters);
    }
    if (lowercaseCheckbox.checked) {
        items += getRandomItem(lowercaseLetters);
    }
    if (charactersCheckbox.checked) {
        items += getRandomItem(symbols);
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