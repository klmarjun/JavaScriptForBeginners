//Function expression
var array = [10,20,30,40,50,60,70];
var callback = function(element){
    return (element/2)>4;
}
var res = array.every(callback);
console.log(res);