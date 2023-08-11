const prompt = require('prompt-sync')()
let num = parseInt(prompt('Enter a number: '))
function factorial(n){
    if (n==0 || n==1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}
console.log(factorial(num))