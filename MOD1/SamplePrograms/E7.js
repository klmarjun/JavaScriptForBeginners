//Calculate the area of a rectangle and store the width and height in variables. Then, create a variable called “area” and calculate the area using the formula: area = width * height.
const prompt = require('prompt-sync')();
var width = prompt('Enter width of the rectangle: ');
var length = prompt('Enter length of the rectangle: ');
var area = length*width;
console.log(`Area of Rectangle having length ${length} and width ${width} is ${area}`);
