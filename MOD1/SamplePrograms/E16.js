//Write a JavaScript to check whether a number is positive or negative
const prompt = require('prompt-sync')();
const num = parseInt(prompt('Enter a number: '));
if(num>=0){
    console.log(`${num} is positive`);
}
else{
    console.log(`${num} is negative`);
}