//create a function called MinMax that will accept any quantity of arguments
//this function should return array of two elements
//First elements is minimal value among all elements
//Second elements is maximal value among all arguments

//use destructuring
function MinMax(...nums){
    console.log(nums)
    let amin = nums.reduce((min,n)=>(n<min)?n:min)
    let amax = nums.reduce((max,n)=>(n>max)?n:max)
    return [amin,amax]
}

[min,max]= MinMax(2,3,1,4)
console.log(min)
console.log(max)
