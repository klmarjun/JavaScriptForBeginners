//Write a JavaScript program to check whether a number is prime or not
const prompt = require('prompt-sync')();
var num = parseInt(prompt('Enter a number: '));
for (let i=2;i<num;i++){
    if(num%i==0){
        var flag = true
    }

}
if(flag == true){
    console.log(`${num} is not a prime number`);
}
else{
    console.log(`${num} is a prime number`);
}
