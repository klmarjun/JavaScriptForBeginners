//Declare two variables called “num1” and “num2” and assign them any numerical values of your choice. Create another variable called “sum” and store the sum of num1 and num2 in it. Finally, log the value of “sum” to the console.
const prompt = require('prompt-sync')()
var num1 = parseInt(prompt('Enter first number: '));
var num2 = parseInt(prompt('Enter second number: '));
var sum = num1+num2;
console.log(`Sum: ${sum}`);