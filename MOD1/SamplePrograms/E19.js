//Write a JavaScript to perform calculator functions using if..else..if

const prompt = require('prompt-sync')()
var num1 = parseInt(prompt('Enter first number: '));
var num2 = parseInt(prompt('Enter second number: '));
var operator = prompt('Enter any operator to perform the calculation: ');
var res;
if(operator == '+'){
    res = num1+num2;
}
else if(operator == '-'){
    res = num1-num2;
}
else if(operator == '*'){
    res = num1*num2;
}
else if(operator == '/'){
    res = num1/num2;
}
else if(operator == '%'){
    res = num1%num2;
}
else{
    console.log('Check the operator and enter properly');
}

console.log(`${num1} ${operator} ${num2} = ${res}`);