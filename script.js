const buttons = document.querySelectorAll('button');
const displayResult = document.getElementById('display-result');
const displayOperation = document.getElementById('display-operation');
const equals = document.getElementById('equals');
const numbers = [0];

// Functions

const sum = (a, b) => a + b;
const take = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const clear = () => display.innerHTML = '';
