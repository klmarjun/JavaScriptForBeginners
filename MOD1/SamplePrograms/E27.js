//Write a JavaScript to print multiplication table for a number prompted from user

const prompt = require('prompt-sync')();
var num = parseInt(prompt('Enter a number: '));
for(let i=1;i<11;i++){
    console.log(`${num} * ${i} = ${num*i}`);
}