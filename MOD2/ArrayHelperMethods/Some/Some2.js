//Function Expression
var array = [10,20,30,40,50,60,70];
var callback = function(element){
    return element>40;
}
var res = array.some(callback);
console.log(res);