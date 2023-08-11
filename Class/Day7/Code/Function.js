const prompt = require('prompt-sync')()
let a = prompt("Enter your name: ")
function greet(name){
    return 'Hello, '+ name+ ' !'
}
console.log(greet(a))