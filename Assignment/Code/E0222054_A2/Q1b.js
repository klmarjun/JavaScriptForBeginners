
//Write a javascript to determine whether a given year is a leap year in the Georgian calender
const prompt = require('prompt-sync')();
var year = prompt("Enter the year: ");
if(year%4==0&&year%100!=0||year%400==0){
    console.log("It is a leap year");
}
else{
    console.log("It is not a leap year");
}
