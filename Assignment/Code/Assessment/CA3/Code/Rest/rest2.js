function multiply(multiplier, ...nums){
    return nums.map((i)=>i*multiplier)
}
const res = multiply(5,2,3,4)
console.log(res)