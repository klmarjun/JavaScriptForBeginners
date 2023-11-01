//Write a JavaScript to find the sum of first n even numbers and display the result

const prompt = require('prompt-sync')();
var sum=0;
var term = parseInt(prompt('Enter the number of terms to find the sum of first even numbers: '));
for(let i=2;i<=term*2;i+=2){
    sum +=i;
}
// for (let i = 1; i <= n; i++) {
//     sum += 2 * i;
//   }
console.log(`Sum of first ${term} even numbers is ${sum}`);