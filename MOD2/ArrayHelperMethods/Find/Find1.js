//Function
var array = [10,20,30,40,50,60,70];
var res = array.find(callback);
function callback(element){
    return element===60;
}
console.log(res);