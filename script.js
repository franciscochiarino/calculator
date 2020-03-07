const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

// Calculations
const sum = (a, b) => a + b;
const take = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const clear = () => display.innerHTML = '';

 //Check if there already is an operator and run the corresponding function
 const runCalculation = () => {

    if (display.innerHTML.includes('+')) {
        let splitedDisplay = display.innerHTML.split('+');
        let numbers = splitedDisplay.map(n => parseFloat(n));
        display.innerHTML = sum(numbers[0], numbers[1]) + event.target.innerHTML;
    }
    else if (display.innerHTML.includes('-')) {
        let splitedDisplay = display.innerHTML.split('-');
        let numbers = splitedDisplay.map(n => parseFloat(n));
        display.innerHTML = take(numbers[0], numbers[1]) + event.target.innerHTML;
    }
    else if (display.innerHTML.includes('/')) {
        let splitedDisplay = display.innerHTML.split('/');
        let numbers = splitedDisplay.map(n => parseFloat(n));
        let result = divide(numbers[0], numbers[1]) 
        if (result.toString().includes('.')) {
            display.innerHTML = result.toFixed(2) + event.target.innerHTML;
        } else {
            display.innerHTML = result + event.target.innerHTML;
        }
    }
    else if (display.innerHTML.includes('*')) {
        let splitedDisplay = display.innerHTML.split('*');
        let numbers = splitedDisplay.map(n => parseFloat(n));
        display.innerHTML = multiply(numbers[0], numbers[1]) + event.target.innerHTML;

    // Else, just display the operator
    } else {
        display.innerHTML += event.target.innerHTML;
    }
}

// Display 
const displayContent = event => {

    // Get last character of display
    let displayLastCharacter = parseInt(display.innerHTML[display.innerHTML.length - 1], 10);

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

        // Check if last character is a number *
        if (displayLastCharacter >= 0 && displayLastCharacter <= 9) {
            runCalculation();
        }   
    }

    // Equal
    if (event.target.innerHTML === '=') {
        runCalculation();
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    } 
}

// Event listeners
buttons.forEach(button => button.addEventListener('click', displayContent))

// * You might ask yourself why I didn't use typeof to check if it's a number. That's because if you parseInt an operator, JS will tell you it is a number, and I need to know if there is an operator on a number at the end. 
