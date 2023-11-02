//Function
var array = [10,20,30,40,50,60,70];
var res = array.filter(callback);

function callback(i){
    return i>40;
}
console.log(res);