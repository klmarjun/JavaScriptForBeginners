const prompt = require("prompt-sync")();
let n1 = prompt('Enter First number: ')
let n2 = prompt('Enter Second number: ')
let n3 = prompt('Enter Third number: ')
if(n1>n2&&n1>n3){
    console.log(`${n1} is greatest`)
}
else if(n2>n1&&n2>n3){
    console.log(`${n2} is greatest`)
}
else{
    console.log(`${n3} is greatest`)
}