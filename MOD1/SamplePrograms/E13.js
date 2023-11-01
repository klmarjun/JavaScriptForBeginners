//Write a JavaScript to check whether a year is leap or not

const prompt = require('prompt-sync')()
var year = parseInt(prompt('Enter a Year: '));
if((year%4===0&&year%100!==0)||year%400 == 0){
    console.log(`${year} is leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}
