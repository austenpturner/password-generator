// DOM variables

const lengthInput = document.getElementById('length');
const numbersCheckbox = document.getElementById('numbers');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const charactersCheckbox = document.getElementById('characters');
const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

// Character strings

const numbers = "0123456789";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@%+\/'!#$^?:,({[)}]~-_.";

// Generate random character function

function getRandomCharacter(type) {
    let items = type;
    let item = items[(Math.floor(Math.random() * items.length))];
    return item;
}

// Add character to password function

function addPasswordCharacter() { 
    let items = [];
    if (numbersCheckbox.checked) {
        items += getRandomCharacter(numbers);
    }
    if (uppercaseCheckbox.checked) {
        items += getRandomCharacter(uppercaseLetters);
    }
    if (lowercaseCheckbox.checked) {
        items += getRandomCharacter(lowercaseLetters);
    }
    if (charactersCheckbox.checked) {
        items += getRandomCharacter(symbols);
    }
    if (items.length === 0) {
        return '';
    }
    let item = items[(Math.floor(Math.random() * items.length))];
    return item;
}

// PGenerate password function

function generatePassword() {
    result.value = '';
    const length = parseInt(lengthInput.value);
    var password = '';
    for (var i = 0; i < length; i++) {
        password += addPasswordCharacter();
    }
    result.value = password;
}

// Generate button event listener

generateBtn.addEventListener('click', () => {
    generatePassword();
})

// Copy to clipboard function

copyBtn.onclick = function() {
    result.select();
    document.execCommand('Copy');
}