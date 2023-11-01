//Create a variable called “message” and assign it a string value. Then, create another variable called “messageLength” and store the length of the “message” string in it. Finally, log the value of “messageLength” to the console.
const prompt = require('prompt-sync')();
var message = prompt('Enter a String: ');
var messageLength = message.length;
console.log(`Length of the given string is ${messageLength}`);