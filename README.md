# Calculator

A simple calculator to be added to the macintosh-1984 project. 

## Step by step thinking

1. At the beginning (when there is nothing shown in the display) the calculator is only going to display numbers when we press them.

2. When we press an operator, the calc. will first make sure that there is a number in the desplay. If there is a number, and no other operator displayed, then the operator is also going to be displayed.

3. Then the user would be able to choose another number.

4. Once the whole operation is desplayed (example => a + b), the user would either press 'C', '=' or another operator. 
  - If the user presses 'C', everything in the display will be gone. 
  - If he/she presses '=', the calc. would display the result. 
  - If another operator, then the calc. would run the operation, display the result, and add the pressed operator at the end (exaple => display shows 'a + b' => user presses '+' => display shows 'c +').
 
## Run calculations

1. The display is going to show a string (exaple => 'a + b')
2. When the code reads this string, it is going to check which operator is present.
3. Then its going to store 'a' and 'b', and send them to the function that corresponds to that operator as an argument.
4. Every operation function its going to work the same. It will take the an array with two values, convert them into numbers, and run the operation (example => result = parseInt(value[0]) + parseInt(value[1]); )
5. Result is finally displayed.

