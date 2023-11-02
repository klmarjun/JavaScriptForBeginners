//Function
var array = [10,20,30,40,50,60,70];
var res = array.every(callback);
function callback(element){
    return (element/2)>4;
}
console.log(res);