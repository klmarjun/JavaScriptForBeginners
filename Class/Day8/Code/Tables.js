const prompt = require('prompt-sync')()
var n = parseInt(prompt('Enter a number: '))
for(let i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}`)
}