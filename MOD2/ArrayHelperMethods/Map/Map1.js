//Function
var array = [10,20,30,40,50,60,70];
var res = array.map(callback);

function callback(i){
    return i*i;
}
console.log(res)