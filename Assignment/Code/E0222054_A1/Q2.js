//simple intrest = pnr/100
const prompt = require('prompt-sync')()
let res=0;
let p = prompt('Enter teh principal amount: ')
let n = prompt('Enter no. of years: ')
let r = prompt('Enter the rate of intrest: ')
function simpleIntrest(p,n,r){
    return (p*n*r)/100
}
res=simpleIntrest(p,n,r)
console.log("Simple intrest is: ",res)
