const prompt = require('prompt-sync')()
let n1 = parseInt(prompt('Enter first number: '))
let n2 = parseInt(prompt('Enter second number: '))
let n3 = prompt('Enter the operation: ')
let res;
function add(num1,num2){
    res = num1+num2
}
function sub(num1,num2){
    res = num1-num2
}
function mult(num1,num2){
    res = num1*num2
}
function div(num1,num2){
    if (num2 != 0){
    res = num1/num2
    }
    else{
        console.log('Cant perform division')
        console.log('Zero division error')
    }
}
if(n3 =='+'){
    add(n1,n2)
}
else if(n3=='-'){
    sub(n1,n2)
}
else if(n3=='*'){
    mult(n1,n2)
}
else if(n3=='/'){
    div(n1/n2)
}
else{
    console.log('Check the given details.')
}
console.log(res)