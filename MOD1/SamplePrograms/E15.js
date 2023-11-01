//Write a JavaScript to check whether a number is even or not

const prompt = require('prompt-sync')()
var num = parseInt(prompt('Enter a number: '));
if(num%2===0){
    console.log(`${num} is even`);
}
else{
    console.log(`${num} is odd`);
}