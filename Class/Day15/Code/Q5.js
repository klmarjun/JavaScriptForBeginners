//Write a function called increment which takes the parameter 'value' and default parameter step=1
//Upon invoking the function it has to return value+step
//Invoke as increment(5) and increment(10,2)\

function increment(value,step=1){
    return value+step
}
console.log(increment(5))
console.log(increment(10,2))
