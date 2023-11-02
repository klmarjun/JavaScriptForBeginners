//Function Expression
var array = [10,20,30,40,50,60,70];

var callback = function(i){
    return i>40;
}
var res = array.filter(callback);
console.log(res);