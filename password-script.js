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

// Function to generate a random character from character strings

function getRandomCharacter(type) {
    let characters = type;
    let character = characters[(Math.floor(Math.random() * characters.length))];
    return character;
}

// Function to add a character to the password based on user's selected options

function addPasswordCharacter() { 
    let options = [];
    if (numbersCheckbox.checked) {
        options += getRandomCharacter(numbers);
    }
    if (uppercaseCheckbox.checked) {
        options += getRandomCharacter(uppercaseLetters);
    }
    if (lowercaseCheckbox.checked) {
        options += getRandomCharacter(lowercaseLetters);
    }
    if (charactersCheckbox.checked) {
        options += getRandomCharacter(symbols);
    }
    if (options.length === 0) {
        return '';
    }
    let passwordCharacter = options[(Math.floor(Math.random() * options.length))];
    return passwordCharacter;
}

// Function to generate password and set password to result value

function generatePassword() {
    result.value = '';
    const length = parseInt(lengthInput.value);
    var password = '';
    for (var i = 0; i < length; i++) {
        password += addPasswordCharacter();
    }
    result.value = password;
}

// Event listener to generate password on "generate button" click

generateBtn.addEventListener('click', () => {
    generatePassword();
})

// Function to copy password to clipboard

copyBtn.onclick = function() {
    result.select();
    document.execCommand('Copy');
}