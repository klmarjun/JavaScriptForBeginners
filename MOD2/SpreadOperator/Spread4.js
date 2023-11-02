//Function Call
function sum(a,b,c){
    return a+b+c;
}
var nums = [1,2,3];
var res = sum(...nums);
console.log(res);