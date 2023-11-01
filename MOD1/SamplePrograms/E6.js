//Create a variable called “pi” and assign the value of 3.14159 to it. Then, create another variable called “radius” and assign a value to it. Calculate the area of a circle using the formula: area = pi * radius^2 and store it in a variable called “circle_area.” Print the result.
const PI = 3.14159;
const prompt = require('prompt-sync')();
var radius = prompt('Enter a radius: ');
var area = PI*radius*radius;
console.log(`Area of the circle having radius ${radius} is ${area}`);
