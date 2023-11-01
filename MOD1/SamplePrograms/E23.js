//Write a function expression to swap two numbers
const prompt = require('prompt-sync')();
var num1 = parseInt(prompt('Enter first number: '));
var num2 = parseInt(prompt('Enter second number: '));

swap = function(num1,num2){
    var temp = num1;
    num1 = num2;
    num2 = temp;
    return num1,num2;
    
}
console.log(`Before Swapping Num1: ${num1} and Num2: ${num2}`);
//swap(num1,num2);
num1,num2 = swap(num1,num2)
console.log(`After Swapping Num1: ${num1} and Num2: ${num2}`);