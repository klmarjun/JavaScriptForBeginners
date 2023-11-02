//function expression
var array = [10,20,30,40,50,60,70];
var callback = function(i){
    return i*i;
}
var res = array.map(callback);
console.log(res);