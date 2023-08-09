//prompt n from the user and check whether it is even or odd.
const prompt = require('prompt-sync')();
let n = prompt("Enter a number: ");
n = parseInt(n);
if (n % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
