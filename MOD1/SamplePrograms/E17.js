//Write a JavaScript program to check whether a number is Armstrong or not
const prompt = require('prompt-sync')();
var num = parseInt(prompt('Enter a number: '));
var temp = num;
var sum = 0;
while (temp>0){
    var dig = temp%10;
    sum += (dig*dig*dig);
    temp = parseInt(temp/10);
}

if(sum==num){
    console.log(`${num} is a Armstrong number`);
}
else{
    console.log(`${num} is not a Armstrong number`);
}