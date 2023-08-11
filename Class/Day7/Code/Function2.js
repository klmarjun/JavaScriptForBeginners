//Write a function called odd even that takes numbers as argument and prints whether it is even or odd
const prompt = require('prompt-sync')(parseInt)
let num = prompt('Enter a Number: ')
function odd_even(n){
    if(n%2==0){
        return 'The number entered is even'
    }
    else{
        return 'The number entered is odd'
    }
}
console.log(odd_even(num))
