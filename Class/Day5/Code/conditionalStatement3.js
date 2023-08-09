//Get a number n from the user. Print whetrher it is positive or negative or zero.
const prompt = require('prompt-sync')(parseInt)
let n = prompt("Enter a number: ")
if(n>0){
    console.log("Positive")
}
else if(n<0)
{
    console.log("Negative")
}
else
{
    console.log("Zero")
}