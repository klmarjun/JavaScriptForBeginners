//Write a code to check whether a given number is prime or not.
// A prime number is only divisible by 1 and itself.

const prompt = require('prompt-sync')()
var n = parseInt(prompt('Enter a number: '))
var flag = 0
if(true){
if(n%2==1){
    for(let i=2;i<(n+1)/2;i++){
        if(n%i==0){
            flag = 1
            break
        }
    }
}
else{
    for(let i=2;i<n/2;i++){
        if(n%i==0){
            flag = 1
            break
        }
    }
}
}
if(flag==0){
    console.log(`${n} is a prime number`)
}
else{
    console.log(`${n} is not a prime number`)
}

