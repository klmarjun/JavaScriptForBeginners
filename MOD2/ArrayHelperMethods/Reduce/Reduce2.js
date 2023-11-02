//Function Expression

var array = [10,20,30,40,50,60,70];
var callback = function(accumulator,element){
    return accumulator+element;
}
var res = array.reduce(callback,0);
console.log(res);