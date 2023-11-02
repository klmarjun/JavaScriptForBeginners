//Shorthand For Functions
//Traditional
// var obj = {
//     add: function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(5,6))

//Modern
var obj = {
    add(a,b){
        return a+b;
    }
}
console.log(obj.add(5,6));