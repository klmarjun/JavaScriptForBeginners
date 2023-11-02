//Function
var array = [10,20,30,40,50,60,70];
var res = array.some(callback);

function callback(element){
    return element>40;
}
console.log(res);