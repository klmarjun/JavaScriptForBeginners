function sum(...nums){
    let total = 0
    for(let num of nums){
        total = total+num
    }
    return total
}
console.log(sum(1,2,3,4))
