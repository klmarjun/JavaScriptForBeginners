let i =1;
let factorial = 1;
const prompt = require("prompt-sync")();
let number = prompt("Enter a number: ");
number = Number(number);
do{
    factorial = factorial * number
    number--
}while(number>0)
console.log(factorial)