//Write a javascript to find sum of elements in array using function (prompt the inputs from user)

const prompt = require('prompt-sync')();
var arr = [];
var n = parseInt(prompt("Enter the number of elements: "));
for(var i=0;i<n;i++){
    arr[i] = parseInt(prompt("Enter the element: "));
}
var sum = 0;
for(var i=0;i<n;i++){
    sum = sum + arr[i];
}
console.log("The sum of the elements is: "+sum);
