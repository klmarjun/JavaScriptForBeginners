//Write the JavaScript to find area of a triangle whose sides are a, b and c
const prompt = require('prompt-sync')();
var a = parseInt(prompt('Enter side1: '));
var b = parseInt(prompt('Enter side2: '));
var c = parseInt(prompt('Ente side3: '));
let s = (a+b+c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(`Area of the triangle is ${area}`);
