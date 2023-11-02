//Function

var array = [10,20,30,40,50,60,70];
var res = array.reduce(callback,0);

function callback(accumulator,i){
    return accumulator+i;
}
console.log(res);