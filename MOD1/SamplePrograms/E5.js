//Create a variable called “temperature” and assign it a numerical value representing the current temperature in Celsius. Convert this temperature to Fahrenheit and store the result in a new variable called “fahrenheit”. Finally, log the value of “fahrenheit” to the console.


//Celsius to Fahrenheit: F = (C * 9/5) + 32
//Fahrenheit to Celsius: C = (F – 32) * 5/9
const prompt = require('prompt-sync')();
var celsius = prompt('Enter a number: ');
var F1 = (celsius*9/5)+32;
console.log(F1);
