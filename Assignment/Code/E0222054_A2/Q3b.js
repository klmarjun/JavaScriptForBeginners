//Write a recursive function in javascript to print fibonacci series (prompt input from the user)

const prompt = require('prompt-sync')();
var n = parseInt(prompt("Enter the number of terms: "));
var a = 0;
var b = 1;
var c;
console.log(a);
function fibo(n){
    if(n>0){
        c = a+b;
        a = b;
        b = c;
        console.log(a);
        fibo(n-1);
    }
}
fibo(n-1);
