// script.js
let display = document.getElementById('display');

function appendCharacter(character) {
    if (display.innerText === '0' && character !== '.') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
