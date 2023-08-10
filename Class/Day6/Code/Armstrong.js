//prompt a number from the User
//check whether the number is armstrong or not

const prompt = require('prompt-sync')()  
let number = prompt('Enter a number: ')
length = number.length
let sum = 0
let temp = number
while(temp>0){
    let remainder = temp%10
    sum += Math.pow(remainder,length)
    temp = parseInt(temp/10)
}
if(sum == number){
    console.log(number,'is an Armstrong number')
}else{
    console.log(number,'is not an Armstrong number')
}
