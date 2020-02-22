const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
const equals = document.getElementById('equals');

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

            //Check if there already is an operator and run the corresponding function
            if (display.innerHTML.includes('+')) {
                let splitedDisplay = display.innerHTML.split('+');
                let numbers = splitedDisplay.map(n => parseInt(n, 10));
                display.innerHTML = sum(numbers[0], numbers[1]);
            }
            if (display.innerHTML.includes('-')) {
                let splitedDisplay = display.innerHTML.split('-');
                let numbers = splitedDisplay.map(n => parseInt(n, 10));
                display.innerHTML = take(numbers[0], numbers[1]);
            }
            if (display.innerHTML.includes('/')) {
                let splitedDisplay = display.innerHTML.split('/');
                let numbers = splitedDisplay.map(n => parseInt(n, 10));
                display.innerHTML = divide(numbers[0], numbers[1]);
            }
            if (display.innerHTML.includes('*')) {
                let splitedDisplay = display.innerHTML.split('*');
                let numbers = splitedDisplay.map(n => parseInt(n, 10));
                display.innerHTML = multiply(numbers[0], numbers[1]);

            // Else, just display the operator
            } else {
                display.innerHTML += event.target.innerHTML;
            }
        } else {
            
        }
    }
    
}


buttons.forEach(button => button.addEventListener('click', displayContent))

console.log(sum(9, 9))

