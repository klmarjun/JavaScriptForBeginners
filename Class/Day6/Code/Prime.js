//Write a program to find whether the user prompted number is prime or not.
const prompt = require('prompt-sync')()
let number = prompt('Enter a number: ')
let flag = 0
for(let i=2;i<number;i++){
    if(number%i==0){
        flag = 1
        break
    }
}
if(flag==0){
    console.log(number,'is a prime number')
}else{
    console.log(number,'is not a prime number')
}
