//Write a function called sum that takes 4 arguments A,B,C,D where the default values are 0
//Invoke the function sum with no arguments 
//Invoke sum(5,10)
//Invoke sum(5,10,15)
//Invoke sum(5,10,15,20)
const prompt = require('prompt-sync')()
let n1 = parseInt(prompt('Enter First number: '))
let n2 = parseInt(prompt('Enter Second number: '))
let n3 = parseInt(prompt('Enter Third number: '))
let n4 = parseInt(prompt('Enter Fourth number: '))
let res;
function sum(a,b,c,d){
    res = a+b+c+d
    return res
}
console.log(sum(n1,n2,n3,n4))