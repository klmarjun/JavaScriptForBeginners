//Write a JavaScript to find greatest of two numbers

const prompt = require('prompt-sync')()
var num1 = parseInt(prompt('Enter number1: '));
var num2 = parseInt(prompt('Enter number2: '));
if(num1>num2){
    console.log(`${num1} is greater`);
}
else{
    console.log(`${num2} is greater`);
}