//Write a javascript for performing calculator operations(+,-,*,/,%) using switch case.

const prompt = require('prompt-sync')();
var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the second number: ");
var operator = prompt("Enter the operator: ");
switch(operator){
    case '+':
        console.log("The sum is: "+(num1+num2));
        break;
    case '-':
        console.log("The difference is: "+(num1-num2));
        break;
    case '*':
        console.log("The product is: "+(num1*num2));
        break;
    case '/':
        console.log("The quotient is: "+(num1/num2));
        break;
    case '%':
        console.log("The remainder is: "+(num1%num2));
        break;
    default:
        console.log("Invalid operator");
        break;
}
