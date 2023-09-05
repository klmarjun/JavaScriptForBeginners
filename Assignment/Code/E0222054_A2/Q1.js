//Write a javascript to convert to and from celcius, farenheit prompt the user for input and output the result to the console.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in celcius and f = temperature in farenheit ]
const prompt = require('prompt-sync')();
var c = prompt("Enter the temperature in celcius: ");
var f = prompt("Enter the temperature in farenheit: ");
var celcius = (f-32)/9;
var farenheit = (c*5)+32;
console.log("The temperature in farenheit is: "+farenheit);
console.log("The temperature in celcius is: "+celcius);