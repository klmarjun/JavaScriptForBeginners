//Write a javascript to find the sum of first n even numbers.Prompt n from the user.
const prompt = require('prompt-sync')(parseInt)
let n = prompt('Enter a number: ')
let sum = 0
for(let i=0;i<=n;i+=2){
    sum+=i
}
console.log(sum)