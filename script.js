const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

// Functions

const sum = (a, b) => a + b;
const take = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const clear = () => display.innerHTML = '';

const showCharacter = event => {
    const character = event.target;
    
    if (!character.className.includes('hide')) {
        display.innerHTML += character.innerHTML;
    }
}

// Show what I press on display
buttons.forEach(button => {
    button.addEventListener('click', showCharacter);
})