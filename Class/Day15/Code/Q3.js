//create rest with spread
//create an array called numbers with values 1,2,3,4,5
//create a function called example that prints first = 1
//and rest = [2,3,4,5]
function example(first,...rest){
    console.log(first)
    console.log(rest)
}
const numbers = [1,2,3,4,5]
example(...numbers)