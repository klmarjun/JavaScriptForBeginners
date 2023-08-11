//Write a function called swap numbers to swap two numbers prompted from the user.
const prompt = require('prompt-sync')()
let n1 = parseInt(prompt('Enter first number: '))
let n2 = parseInt(prompt('Enter second number: '))
function swap_numbers(a,b){
    a = a+b;
    console.log
    b = a-b;
    a = a-b;
    return[a,b]
}
console.log('Before Swapping: n1-',n1,'','  n2-',n2);
[n1,n2]=swap_numbers(n1,n2)
console.log('After Swapping: n1-',n1,'','  n2-',n2)