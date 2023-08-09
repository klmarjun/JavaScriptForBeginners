const prompt = require("prompt-sync")()
var res;
let n1 = prompt("Enter number 1: ")
let n2 = prompt("Enter number 2: ")
let n3 = prompt("Enter the operator: ")
n1 = parseInt(n1)
n2 = parseInt(n2)
if (n3== '+'){
    res= n1+n2; 
}
else if(n3 == '-')
{
    res = n1-n2
}
else if(n3 == '*')
{
    res = n1*n2
}
else if(n3 == '/')
{
    res = n1/n2
}
console.log(res)