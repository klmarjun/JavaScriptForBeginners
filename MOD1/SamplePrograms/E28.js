//Write a JavaScript to reverse a given string
const prompt = require('prompt-sync')();
var str = prompt('Enter a sttring: ');
var revStr = str.split("").reverse().join("");
console.log(`The reversed string is ${revStr}`);