//Write a JavaScript to perform calculator functions using switch case

const prompt = require('prompt-sync')()
var num1 = parseInt(prompt('Enter first number: '));
var num2 = parseInt(prompt('Enter second number: '));
var operator = prompt('Enter any operation to be performed: ');
var res;
switch(operator){
    case '+':
        res = num1+num2;
        break;
    case '-':
        res = num1-num2;
        break;
    case '*':
        res = num1*num2;
        break;
    case '/':
        res = num1/num2;
        break;
    case '%':
        res = num1%num2;
        break;
    default:
        console.log('Specify the operator correctly');

}
console.log(`${num1} ${operator} ${num2} = ${res}`);