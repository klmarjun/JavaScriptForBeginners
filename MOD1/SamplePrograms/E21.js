//Write a JavaScript program to check whether a string is palindrome or not
const prompt = require('prompt-sync')();
var num = parseInt(prompt('Enter a number: '));
var temp = num;
var str = String(temp);
var revStr = str.split("").reverse().join("");
if (revStr == num){
    console.log(`${num} is a palindrome number.`);
}
else{
    console.log(`${num} is not a palindrome number.`);
}