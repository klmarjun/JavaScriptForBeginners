const prompt = require("prompt-sync")();
let n= prompt("Enter your age: ");
n = parseInt(n);
if (n>=18) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}