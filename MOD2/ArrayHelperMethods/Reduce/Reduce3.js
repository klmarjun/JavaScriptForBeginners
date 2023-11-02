//Arrow Function
var array = [10,20,30,40,50,60,70];
var res = array.reduce((accumulator,element)=>
     accumulator+element,0
)
console.log(res);