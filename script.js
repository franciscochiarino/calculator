const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
const equals = document.getElementById('equals');
const numbers = [0];

// Functions

const sum = (a, b) => a + b;
const take = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const clear = () => display.innerHTML = '';

// Display 
const displayContent = event => {

    // Numbers
    if (event.target.className === 'number') {
        display.innerHTML += event.target.innerHTML;
    }

    // Clear
    if (event.target.innerHTML === 'C') {
        display.innerHTML = '';
    }

    // Operators
    if (event.target.className === 'operator') {

        // Check if there is a number
        let displayLastCharacter = parseInt(display.innerHTML[display.innerHTML.length - 1], 10);
        
        if (displayLastCharacter >= 0 && displayLastCharacter <= 9) {
            display.innerHTML += event.target.innerHTML;
        } else {
            console.log('vamooo')
        }
    }
    
}


buttons.forEach(button => button.addEventListener('click', displayContent))