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

const showCharacter = event => {
    const character = event.target;
    
    if (!character.className.includes('hide')) {
        displayOperation.innerHTML += character.innerHTML;
    }
    // if (character.id === 'plus') {
    //     numbers.push(parseInt(display.innerHTML, 10));
    //     console.log(numbers)
    //     display.innerHTML = sum(numbers[0], numbers[1]);
    //     numbers.shift();
    //     console.log(numbers)
    //     console.log(typeof display.innerHTML)
        
    // }
}


// Show what I press on display
buttons.forEach(button => {
    button.addEventListener('click', showCharacter);
})
